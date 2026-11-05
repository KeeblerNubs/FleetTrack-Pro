# FleetTrack Pro - Android App and Installable PWA

This project provides an Android APK and a PWA for Android and iOS users. The PWA is distributed through GitHub Pages; native iOS store packaging is not configured.

## Contents:
1. `www/index.html` - The complete mobile-first HTML/PWA app with GPS live tracking, manual entry, and direct admin export.
2. `.github/workflows/build.yml` - GitHub Actions workflow for an Android APK.
3. `.github/workflows/deploy-pwa.yml` - GitHub Actions workflow for publishing the PWA to GitHub Pages.
4. `package.json` & `capacitor.config.json` - Capacitor project configuration files.

## Quick Start (GitHub Actions Cloud Build):
1. Create a new private/public repository on GitHub.
2. Unzip this archive and push all contents to your repository (`main` branch).
3. Go to the **Actions** tab on GitHub to watch your APK build automatically!
4. Download the `FleetTrackPro-Android-APK` artifact once finished and install it directly on your Android phone.

The Android workflow uses Capacitor 8 and targets Android 16 (API 36). It requests foreground location only; it does not request background location. Rebuild and install the new APK to replace an older build on your device.

## Automatic PWA Updates

The `Deploy FleetTrack Pro PWA` workflow publishes the `www/` app to GitHub Pages after every push to `main` or `master`. It optimizes the icon with SVGO while preserving its `viewBox`, and versions the service worker for each commit. Repeat loads use the local app cache for faster startup; each deployment gets a fresh cache. In the repository settings, open **Pages** and set the source to **GitHub Actions**. The Pages URL appears on the workflow run after deployment.

Share that HTTPS URL with users. They can open it in a browser or install it from the browser menu (on iOS, use **Share** then **Add to Home Screen**). Each repository update is deployed automatically; users receive it the next time they open or refresh the PWA. Native Capacitor installs remain separate and still require an app-store update for native code changes.


