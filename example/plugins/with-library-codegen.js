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

      fs.writeFileSync(podfilePath, preInstallResult.contents);
      return config;
    },
  ]);

  return config;
}

module.exports = withLibraryCodegen;
