# FleetTrack Pro - Android App and Installable PWA

This project provides an Android APK, a PWA for Android and iOS users, and optional store release workflows. Android App Bundles can be sent to Google Play internal testing, and signed iOS builds can be uploaded to TestFlight when store credentials are configured. Public store launches still require console setup and review.

## Contents:
1. `www/index.html` - The mobile-first HTML/PWA app with GPS tracking, trip history, and report export.
2. `www/privacy.html` - Public privacy policy for the app and PWA.
3. `STORE_SUBMISSION.md` - Store listing copy, draft disclosures, and screenshot checklist.
4. `.github/workflows/build.yml` - GitHub Actions workflow for an Android APK.
5. `.github/workflows/deploy-pwa.yml` - GitHub Actions workflow for publishing the PWA to GitHub Pages.
6. `.github/workflows/release.yml` - GitHub Release assets, signed Android APK/App Bundle, and optional Google Play internal upload.
7. `.github/workflows/ios-release.yml` - Signed iOS archive, TestFlight upload, and IPA release asset.
8. `package.json` & `capacitor.config.json` - Capacitor project configuration files.

## Quick Start (GitHub Actions Cloud Build):
1. Create a new private/public repository on GitHub.
2. Unzip this archive and push all contents to your repository (`main` branch).
3. Go to the **Actions** tab on GitHub to watch your APK build automatically!
4. Download the `FleetTrackPro-Android-APK` artifact once finished and install it directly on your Android phone.

The Android workflow uses Capacitor 8 and targets Android 16 (API 36). It requests foreground location only; it does not request background location. Rebuild and install the new APK to replace an older build on your device.

## Automatic PWA Updates

The `Deploy FleetTrack Pro PWA` workflow publishes the `www/` app to GitHub Pages after every push to `main` or `master`. It optimizes the icon with SVGO while preserving its `viewBox`, and versions the service worker for each commit. Repeat loads use the local app cache for faster startup; each deployment gets a fresh cache. In the repository settings, open **Pages** and set the source to **GitHub Actions**. The Pages URL appears on the workflow run after deployment.

### Install Instructions

Then install from [the FleetTrack Pro page](https://keeblernubs.github.io/FleetTrack-Pro/): in Android Chrome, choose **⋮ → Install app**; on iPhone Safari, choose **Share → Add to Home Screen**.

Each repository update is deployed automatically; users receive it the next time they open or refresh the PWA. Native Capacitor installs remain separate and still require an app-store update for native code changes.

## GitHub Releases

Publishing a GitHub Release attaches `FleetTrackPro-PWA.zip`. A signed Android APK and App Bundle are also attached when all four Android signing secrets are configured in repository Actions settings: `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`, and `ANDROID_KEY_PASSWORD`. The PWA asset publishes even when the APK signing secrets are absent.

Create an Android keystore once with the JDK's `keytool`, then store the file and its credentials as the four repository Actions secrets above. Keep the keystore and passwords safe; the same key is required for every APK update.

```powershell
keytool -genkeypair -v -keystore fleettrack-release.jks -alias fleettrack -keyalg RSA -keysize 2048 -validity 10000
```

On Windows, encode the keystore for `ANDROID_KEYSTORE_BASE64` with:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("fleettrack-release.jks"))
```

Use the same keystore for every release so users can install APK updates without uninstalling the previous version. Never commit the keystore or its passwords to the repository.

## Official Store Releases

For Google Play, create the app in Play Console with application ID `com.axium.mileage`, enable the Google Play Android Developer API, and configure the service account with access to that app. Add the service account JSON as the `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON` Actions secret. On a published GitHub Release, the workflow uploads the signed App Bundle to the **internal testing** track; promote it and submit it for public review from Play Console when ready.

For Apple, create the app record with bundle ID `com.axium.mileage` and configure an Apple Distribution certificate, an App Store provisioning profile, and an App Store Connect API key. Add these Actions secrets: `IOS_DISTRIBUTION_CERTIFICATE_BASE64`, `IOS_DISTRIBUTION_CERTIFICATE_PASSWORD`, `IOS_PROVISIONING_PROFILE_BASE64`, `IOS_TEAM_ID`, `APP_STORE_CONNECT_KEY_ID`, `APP_STORE_CONNECT_ISSUER_ID`, and `APP_STORE_CONNECT_PRIVATE_KEY`. The workflow uploads the IPA to TestFlight and attaches it to the GitHub Release; complete the App Store listing and submit the build for App Review in App Store Connect.

Use a new semantic version tag for each store release, such as `v2.0.1`. Existing release tags such as `Release2` are not valid store version tags. The privacy policy is published at `www/privacy.html`, and listing/disclosure drafts are in `STORE_SUBMISSION.md`. Capture real device screenshots and verify the store questionnaires against the final app before submission. The app uses foreground location and stores trip/profile data in browser/app local storage, so review those disclosures for accuracy.


