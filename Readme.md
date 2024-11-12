A Firefox plugin to improve the modern NZ.ua navigation and UX.

- Works with https://nz.ua
- provides inline preview

# Build

Install dependencies

$ npm ci

Build the dist code

$ npm run build

Pack the extension

$ npm run build:extension

# Plugin Install

In Firefox visit `about:debugging` > This Firefox > Load Temporary Add-on > select any file in the folder, e.g. manifest.json

Once installed, the addon could be updated with "Reload Add-on" under the addon entry on the same page.