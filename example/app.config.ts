import type { ExpoConfig } from 'expo/config';

const config: ExpoConfig = {
  name: 'MobilyflowReactNativeSdkExample',
  slug: 'mobilyflow-rn-sdk-example',
  version: '1.0.1',
  scheme: 'mobilyflow-example',
  android: {
    package: 'com.mobilyflow.test_android_sdk',
    versionCode: 5,
    permissions: ['com.android.vending.BILLING', 'INTERNET'],
  },
  ios: {
    bundleIdentifier: 'com.mobilyflow.test-ios-sdk',
    buildNumber: '5',
    infoPlist: {
      UIAppFonts: ['MaterialDesignIcons.ttf', 'MaterialIcons.ttf'],
    },
  },
  plugins: [
    [
      'expo-build-properties',
      {
        android: {
          minSdkVersion: 24,
          compileSdkVersion: 35,
          targetSdkVersion: 35,
          kotlinVersion: '2.1.20',
        },
      },
    ],
    // SDK config plugin — enable only if using Firebase Analytics:
    // ['../app.plugin.js', { enabledFirebaseAnalytics: true }],
  ],
};

export default config;
