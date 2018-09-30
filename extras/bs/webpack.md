---
layout: default
---

## WebPack

```js
// WebPack Configuration
module.exports = {
    // Package the bundled file from the dist folder
    entry = [
        "./node_modules/gd-sprest-bs/dist/gd-sprest-bs.min.js",
        "./src/index.ts"
    ],

    // Exclude the gd-sprest-bs reference from the bundle
    // List the libraries you have referenced in your code here
    externals = {
        "gd-bs": "$REST",
        "gd-sprest": "$REST",
        "gd-sprest-bs": "$REST"
    }
}
```