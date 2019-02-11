---
layout: extras
---

# Bootstrap

### Overview

This library extends the [gd-bs library](https://github.com/gunjandatta/gd-bs), which uses the [Bootstrap Framework](https://getbootstrap.com/) to create modern components in SharePoint 2013/Online (Classic) environments. Reference the [gd-sprest-bs library](https://github.com/gunjandatta/sprest-bs) to view the source code.

If you like this library, please [Star it](https://github.com/gunjandatta/sprest-bs). If there are any issues/bugs/requests, create an _[issue here](https://github.com/gunjandatta/sprest-bs/issues)_.

### Getting Started

**_Installation_**

```js
npm i --save gd-sprest-bs
```

**_Reference the Script_**

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
```

### Project Configuration

**_SPFx_**

Edit the  ```config/config.js``` file and set the externals property. Since the gd-sprest-bs library contains the gd-sprest core library, we can point both references to the same file. Now references to both libraries will reference the global $REST variable.

```js
"externals": {
    "gd-sprest": {
        "path": "node_modules/gd-sprest-bs/dist/gd-sprest-bs.min.js",
        "globalName": "$REST"
    },
    "gd-sprest-bs": {
        "path": "node_modules/gd-sprest-bs/dist/gd-sprest-bs.min.js",
        "globalName": "$REST"
    }
}
```

**_WebPack_**

Edit the ```webpack.config.js``` file and reference the library manually. Since the gd-sprest-bs library contains the gd-sprest core library, we can point both references to the same file. Since we are loading the library manually, we want to exclude the library from the bundle by setting the ```externals``` property.

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
        "gd-sprest": "$REST",
        "gd-sprest-bs": "$REST"
    }
}
```