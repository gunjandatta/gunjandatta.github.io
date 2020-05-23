---
title: "Bootstrap"
category: bs
permalink: /extras/bs/
sidebar-auto: true
---
This library extends the [gd-bs library](https://github.com/gunjandatta/gd-bs), which uses the [Bootstrap Framework](https://getbootstrap.com/) to create modern components in SharePoint 2013/Online (Classic) environments. Reference the [gd-sprest-bs library](https://github.com/gunjandatta/sprest-bs) to view the source code.

If you like this library, please [Star it](https://github.com/gunjandatta/sprest-bs). If there are any issues/bugs/requests, create an _[issue here](https://github.com/gunjandatta/spest-bs/issues)_.

## Getting Started

### [Components](components)
### [Web Parts](webparts)
### [Code Documentation](/docs/sprest-bs/globals.html)

### Installation

```js
npm i --save gd-sprest-bs
```

### Reference the Script

No Icons
```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs.min.js"></script>
```

Including Icons
```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.min.js"></script>
```
## Styling

The bootstrap css will only be applied to elements with a parent element containing the ```bs``` class. This will ensure that other elements on the page will not be affected.

```html
<div class="bs">
    <!-- Elements will have bootstrap css applied -->
</div>
```

## Project Configuration

### SPFx

Edit the  ```config/config.js``` file and set the externals property. Since the gd-sprest-bs library contains the gd-sprest core library, we can point both references to the same file. Now references to both libraries will reference the global $REST variable.

#### No Icons

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

#### Icons

```js
"externals": {
    "gd-sprest": {
        "path": "node_modules/gd-sprest-bs/dist/gd-sprest-bs-icons.min.js",
        "globalName": "$REST"
    },
    "gd-sprest-bs": {
        "path": "node_modules/gd-sprest-bs/dist/gd-sprest-bs-icons.min.js",
        "globalName": "$REST"
    }
}
```

### WebPack

Edit the ```webpack.config.js``` file and reference the library manually. Since the gd-sprest-bs library contains the gd-sprest core library, we can point both references to the same file. Since we are loading the library manually, we want to exclude the library from the bundle by setting the ```externals``` property.

#### No Icons

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

#### Icons

```js
// WebPack Configuration
module.exports = {
    // Package the bundled file from the dist folder
    entry = [
        "./node_modules/gd-sprest-bs/dist/gd-sprest-bs-icons.min.js",
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