const { withAppBuildGradle, withDangerousMod } = require('@expo/config-plugins');
const { mergeContents } = require('@expo/config-plugins/build/utils/generateCode');
const fs = require('fs');
const path = require('path');

/**
 * Expo config plugin that ensures `npx bob build --target codegen` runs
 * before both Android and iOS builds. This generates the native codegen files
 * needed by the library's Turbo Module.
 */
function withLibraryCodegen(config) {
  // Android: add Gradle task + symlinks
  config = withAppBuildGradle(config, (config) => {
    const codegenTask = `
// Run library codegen and symlink output for CMake autolinking
tasks.register('invokeLibraryCodegen', Exec) {
    workingDir "$rootDir/../.."
    def isWindows = System.getProperty('os.name').toLowerCase().contains('windows')
    if (isWindows) {
        commandLine 'cmd', '/c', 'npx bob build --target codegen'
    } else {
        commandLine 'sh', '-c', 'npx bob build --target codegen'
    }
    doLast {
        // Symlink generated codegen to the path CMake autolinking expects
        def libraryRoot = new File("$rootDir/../..")
        def codegenTarget = new File(libraryRoot, "android/build/generated/source/codegen")
        codegenTarget.mkdirs()
        def jniLink = new File(codegenTarget, "jni")
        def javaLink = new File(codegenTarget, "java")
        if (!jniLink.exists()) {
            ant.symlink(link: jniLink.absolutePath, resource: new File(libraryRoot, "android/generated/jni").absolutePath)
        }
        if (!javaLink.exists()) {
            ant.symlink(link: javaLink.absolutePath, resource: new File(libraryRoot, "android/generated/java").absolutePath)
        }
    }
}
preBuild.dependsOn invokeLibraryCodegen
`;
    config.modResults.contents += codegenTask;
    return config;
  });

  // iOS: add pre_install codegen step to Podfile
  config = withDangerousMod(config, [
    'ios',
    (config) => {
      const podfilePath = path.join(config.modRequest.platformProjectRoot, 'Podfile');
      let podfileContents = fs.readFileSync(podfilePath, 'utf-8');

      // Add pre_install for codegen
      const preInstallResult = mergeContents({
        tag: 'library-codegen',
        src: podfileContents,
        newSrc: [
          '  pre_install do |installer|',
          '    system("cd ../../ && npx bob build --target codegen")',
          '  end',
        ].join('\n'),
        anchor: /use_react_native!/,
        offset: 0,
        comment: '#',
      });

      // Add Xcode 26 + use_frameworks C++ fix inside the post_install block.
      // We do a direct string replacement since mergeContents anchoring is fragile
      // with the multi-line react_native_post_install() call.
      let finalContents = preInstallResult.contents;
      const xcodeFix = [
        '',
        '    # @generated begin xcode26-cxx-fix - expo prebuild (DO NOT MODIFY)',
        '    # Xcode 26 workaround: ensure C++ standard library headers are available',
        '    # when use_frameworks! is enabled (required for Swift MobilyflowSDK dependency)',
        '    installer.pods_project.targets.each do |target|',
        '      target.build_configurations.each do |build_config|',
        '        build_config.build_settings["CLANG_CXX_LANGUAGE_STANDARD"] ||= "c++20"',
        '      end',
        '    end',
        '    # @generated end xcode26-cxx-fix',
      ].join('\n');

      // Insert before the closing `end` of the post_install block
      // The post_install block ends with "  end\nend" (2-space indent end, then root end)
      finalContents = finalContents.replace(
        /(\n  end\nend\s*$)/,
        xcodeFix + '$1'
      );

      fs.writeFileSync(podfilePath, finalContents);
      return config;
    },
  ]);

  return config;
}

module.exports = withLibraryCodegen;
