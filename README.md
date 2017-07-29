## Get started

1. Install our dependencies
    * `$ yarn`
2. Run the app
    * iOS: `$ react-native run-ios`
    * Android: Pull up an AVD and then run `$ react-native run-android`

## Run in Production

To confirm you are in production, shake device. If developer menu comes up, you are not in production mode.

#### iOS
  1. Bundle js: `$ yarn bundle-ios`
  2. Switch from `Debug` to `Release` in Xcode: `Edit Schema` ~> `Run` ~> `Build Configuration`
  3. You can now archive for app store or run on device.

#### iOS
  1. Bundle js: `$ yarn bundle-android`
  2. Build js: `$ yarn build-android`
  3. Switch all build variants to release
  3. TODO... figure out how to release to play store or run on device.
