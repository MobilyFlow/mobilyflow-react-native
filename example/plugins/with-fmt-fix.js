const { withDangerousMod } = require('@expo/config-plugins');
const { mergeContents } = require('@expo/config-plugins/build/utils/generateCode');
const fs = require('node:fs');
const path = require('node:path');

const withXcode26Fix = (config) => {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const podfilePath = path.join(config.modRequest.platformProjectRoot, 'Podfile');
      if (!fs.existsSync(podfilePath)) return config;

      let content = fs.readFileSync(podfilePath, 'utf-8');

      // Fix 1: fmt consteval error with Xcode 26.4+
      const fmtResult = mergeContents({
        tag: 'xcode26-fmt-cxx17-fix',
        src: content,
        newSrc: `  # Fix fmt consteval compilation error with Xcode 26.4+
  installer.pods_project.targets.each do |target|
    if target.name == 'fmt'
      target.build_configurations.each do |config|
        config.build_settings['CLANG_CXX_LANGUAGE_STANDARD'] = 'c++17'
      end
    end
  end`,
        anchor: /post_install do \|installer\|/,
        offset: 1,
        comment: '#',
      });

      if (!fmtResult.didMerge) {
        console.warn('[withXcode26Fix] Could not find post_install block, skipping fmt patch.');
      } else {
        content = fmtResult.contents;
      }

      // Fix 2: 'optional' file not found on Xcode 26+
      // Strategy: apply ObjC++ to all pods EXCEPT those using @import (Swift module syntax).
      // For @import pods, enable -fmodules + -fcxx-modules so @import keeps working under ObjC++.
      const objcppResult = mergeContents({
        tag: 'xcode26-objcpp-fix',
        src: content,
        newSrc: `  # Fix 'optional' / 'utility' file not found on Xcode 26+
  # Pods using @import need -fmodules -fcxx-modules to keep working when compiled as ObjC++
  swift_module_pods = ['RCTSwiftUIWrapper', 'React-RCTSwiftUI']
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['GCC_INPUT_FILETYPE'] = 'sourcecode.cpp.objcpp'
      if swift_module_pods.include?(target.name)
        config.build_settings['OTHER_CFLAGS'] ||= '$(inherited)'
        config.build_settings['OTHER_CFLAGS'] << ' -fmodules -fcxx-modules'
      end
    end
  end`,
        anchor: /post_install do \|installer\|/,
        offset: 1,
        comment: '#',
      });

      if (!objcppResult.didMerge) {
        console.warn('[withXcode26Fix] Could not find post_install block, skipping ObjC++ patch.');
      } else {
        content = objcppResult.contents;
      }

      fs.writeFileSync(podfilePath, content);
      return config;
    },
  ]);
};

module.exports = withXcode26Fix;
