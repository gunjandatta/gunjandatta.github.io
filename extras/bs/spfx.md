---
layout: page
---

## SPFx


### TypeScript Configuration

Update the ```lib``` property in the ```tsconfig.json``` file and replace ```es2015.collection``` with ```es2015```.

### Project Configuration

To mirror the webpack configuration used in SharePoint 2013 projects, update the ```config/config.js``` file and set the externals property. Since the gd-sprest-bs library contains the gd-sprest core library, we can point both references to the same file. Now references to both libraries will reference the global $REST variable.

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