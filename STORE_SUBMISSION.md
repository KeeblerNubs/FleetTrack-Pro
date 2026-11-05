# FleetTrack Pro Store Submission Draft

This is a working draft based on the current app behavior. Confirm each privacy answer and listing detail in the store consoles before submission.

## Publisher

- Publisher: Joseph Baldwin
- Support and privacy contact: jbaldwin@axiumcyber.com
- App name: FleetTrack Pro
- Application and bundle ID: com.axium.mileage
- Price: Free
- Privacy policy: https://keeblernubs.github.io/FleetTrack-Pro/privacy.html
- Support URL: Use the public GitHub Pages support/contact page or provide a dedicated support URL before submitting.

## Google Play Listing Draft

Short description: Log work trips, track mileage, and export reports for reimbursement.

Full description:

FleetTrack Pro helps employees record work travel and prepare mileage reports.

- Record trips with start and end odometer readings.
- Optionally use live GPS tracking to estimate trip distance while tracking is active.
- Review and manage trip history.
- Filter reports by time period.
- Download a CSV report or prepare an email for your admin.

Trip and profile details are stored on your device. The app does not provide cloud accounts or cross-device synchronization. Location permission is used only when you start live tracking.

Suggested category: Business.

## Apple App Store Listing Draft

Subtitle: Work trip mileage tracker

Promotional text: Log work trips, track mileage, review history, and export reports.

Description: Use the Google Play full description above, adapting the wording to Apple's character limits and style requirements.

## Data Disclosure Review

Current code behavior to use when completing Google Play Data safety and Apple App Privacy details:

- Trip and profile fields are stored in browser/app local storage; there is no FleetTrack account or app backend.
- GPS coordinates are used in memory while the user has started tracking; the app saves trip distance and odometer values, not the coordinates.
- CSV export is created on-device after the user requests it.
- Email export opens the device's email composer; the user reviews and sends it.
- The site is served by GitHub Pages and loads Tailwind CSS from cdn.tailwindcss.com and Phosphor Icons from unpkg.com. Those providers may receive standard connection metadata.
- The app currently has no analytics or advertising SDK.

These are not final store declarations. Verify the stores' current definitions of collection, sharing, identifiers, and third-party processing before submission.

## Screenshots to Capture

Use screenshots from the actual release build, with realistic sample trips and no real employee or client information. Capture clean app screens without browser chrome where the store permits:

1. Trip entry with mileage fields and GPS controls.
2. Trip history containing fictional trips.
3. Admin/report screen showing period selection and total miles.
4. CSV/email report actions.

Export the required device-specific sizes directly from Google Play Console and App Store Connect guidance. Do not use fabricated device frames or claim unavailable features.

## Release Checklist

- Create the app record in Google Play Console and App Store Connect using `com.axium.mileage`.
- Ensure the release tag uses `vMAJOR.MINOR.PATCH`, for example `v2.0.1`.
- Configure the signing and store-upload secrets listed in `README.md`.
- Upload Android to internal testing and review the App Store build in TestFlight first.
- Complete content rating, location permission, privacy, support, screenshots, and other store questionnaires.
- Promote to public release only after reviewing the listing and store declarations.
