# MobilyFlow SDK - Example App

Expo-based example app for testing the MobilyFlow React Native SDK.

## Prerequisites

- Node.js 18+
- Yarn (the repo uses Yarn 3.6.1, pinned via `.yarnPath`)
- Xcode (for iOS)
- Android Studio (for Android)

## Setup

### 1. Install dependencies

From the **repository root**:

```bash
yarn install
```

### 2. Create the environment file

The app requires an `env.ts` file at `example/env.ts` (gitignored) to provide your MobilyFlow credentials.

Create `example/env.ts` with the following structure:

```typescript
export const MOBILYFLOW_APP_ID = '<your-app-id>';
export const MOBILYFLOW_API_KEY = '<your-api-key>';
```

You can get your App ID and API Key from the [MobilyFlow dashboard](https://app.mobilyflow.com/).

### 3. Prebuild native projects

Generate the native iOS and Android projects:

```bash
cd example
yarn prebuild
```

### 4. Run the app

```bash
# iOS
yarn ios

# Android
npx android
```

## App Configuration

The Home screen lets you configure at runtime:

- **Customer ID** - The external user reference to log in with
- **Environment** - Development, Staging, or Production
- **API URL** - Override the default API endpoint (useful for local development)

These settings are persisted locally via MMKV storage.
