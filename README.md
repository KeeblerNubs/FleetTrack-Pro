# FleetTrack Pro - Capacitor Mobile App

This project builds FleetTrack Pro for Android and iOS with Capacitor.

## Contents:
1. `www/index.html` - The complete mobile-first HTML/PWA app with GPS live tracking, manual entry, and direct admin export.
2. `.github/workflows/build.yml` - GitHub Actions workflow for an Android APK.
3. `.github/workflows/ios-testflight.yml` - macOS workflow for signed iOS builds and TestFlight uploads.
4. `package.json` & `capacitor.config.json` - Capacitor project configuration files.

## Quick Start (GitHub Actions Cloud Build):
1. Create a new private/public repository on GitHub.
2. Unzip this archive and push all contents to your repository (`main` branch).
3. Go to the **Actions** tab on GitHub to watch your APK build automatically!
4. Download the `FleetTrackPro-Android-APK` artifact once finished and install it directly on your Android phone.

The Android workflow uses Capacitor 8 and targets Android 16 (API 36). It requests foreground location only; it does not request background location. Rebuild and install the new APK to replace an older build on your device.

## iOS TestFlight Release

The iOS workflow runs when a GitHub Release is published or started manually from the Actions tab. For release builds, use a `vMAJOR.MINOR.PATCH` tag, such as `v1.0.1`; manual runs use the version in `package.json`. Each run receives a unique build number.

Before running it, create an App Store Connect app record with bundle ID `com.axium.mileage`, an Apple Distribution certificate, and an App Store provisioning profile for that bundle ID. Add these repository Actions secrets:

- `IOS_DISTRIBUTION_CERTIFICATE_BASE64` - base64-encoded `.p12` distribution certificate.
- `IOS_DISTRIBUTION_CERTIFICATE_PASSWORD` - password used to export the certificate.
- `IOS_PROVISIONING_PROFILE_BASE64` - base64-encoded App Store provisioning profile.
- `IOS_TEAM_ID` - Apple Developer team ID.
- `APP_STORE_CONNECT_KEY_ID` - App Store Connect API key ID.
- `APP_STORE_CONNECT_ISSUER_ID` - App Store Connect API issuer ID.
- `APP_STORE_CONNECT_PRIVATE_KEY` - full contents of the API key `.p8` file.

The workflow uploads the signed build to TestFlight and saves the IPA as a workflow artifact. TestFlight distribution and any public App Store submission or review are managed in App Store Connect.
