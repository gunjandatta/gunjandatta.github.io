---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)
## WebPack

</div>

```js
// WebPack Configuration
module.exports = {
    // Package the bundled file from the dist folder
    entry = [
        "./node_modules/gd-sprest-bs/dist/gd-sprest-bs.min.js",
        "./src/index.ts"
    ],

    // Exclude the gd-sprest-bs reference from the bundle
    externals = {
        "gd-sprest": "$REST",
        "gd-sprest-bs": "$REST"
    }
}
```