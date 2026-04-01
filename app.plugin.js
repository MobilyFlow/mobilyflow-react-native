const { withAppDelegate } = require('@expo/config-plugins');
const { mergeContents } = require('@expo/config-plugins/build/utils/generateCode');

function withMobilyFlow(config, { enabledFirebaseAnalytics = false } = {}) {
  if (!enabledFirebaseAnalytics) {
    return config;
  }

  return withAppDelegate(config, (config) => {
    if (config.modResults.language !== 'swift') {
      throw new Error('withMobilyFlow only supports Swift AppDelegate');
    }

    let contents = config.modResults.contents;

    // Add imports if missing
    if (!contents.includes('import FirebaseAnalytics')) {
      contents = contents.replace(/import Expo/, 'import Expo\nimport FirebaseAnalytics');
    }
    if (!contents.includes('import MobilyflowSDK')) {
      contents = contents.replace(/import Expo/, 'import Expo\nimport MobilyflowSDK');
    }

    // Insert transaction listener just before React Native startup
    const result = mergeContents({
      tag: 'mobilyflow-react-native-sdk',
      src: contents,
      newSrc: [
        '      MobilyPurchaseSDK.setOnTransactionFinishedListener { transaction in',
        '        Analytics.logTransaction(transaction)',
        '      }',
      ].join('\n'),
      anchor: /factory\.startReactNative\(/,
      offset: 0,
      comment: '//',
    });

    config.modResults.contents = result.contents;
    return config;
  });
}

module.exports = withMobilyFlow;
