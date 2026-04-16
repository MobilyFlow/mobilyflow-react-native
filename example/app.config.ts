import { ExpoConfig, ConfigContext } from "expo/config";

export default ({  }: ConfigContext): ExpoConfig => ({
  name: "MobilyFlow Testing",
  slug: "mobilyflow-react-native-sdk-example",
  version: "1.0.1",
  orientation: "portrait",
  icon: "./assets/app_icon.png",
  scheme: "mobilyflow-example",
  userInterfaceStyle: "automatic",
  ios: {
    bundleIdentifier: "com.mobilyflow.test-ios-sdk",
    buildNumber: "5",
  },
  android: {
    package: "com.mobilyflow.test_android_sdk",
    versionCode: 5,
    permissions: ["com.android.vending.BILLING", "INTERNET"],
  },
  plugins: [
    [
      "expo-build-properties",
      {
        ios: {
          deploymentTarget: "15.1",
        },
      },
    ],
  ],
});
