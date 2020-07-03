---
title: "Bootstrap"
category: bs
permalink: /extras/bs/
sidebar-auto: true
---
The [gd-sprest-bs](https://github.com/gunjandatta/sprest-bs) library extends the [gd-bs library](https://github.com/gunjandatta/gd-bs), which includes the [Bootstrap Framework w/ Icons](https://getbootstrap.com/) to create modern components in SharePoint 2013/Online (Classic) environments. For React projects, you can use the [gd-sprest-bsx](https://github.com/gunjandatta/sprest-bsx) library.

## Getting Started

### [Components](components)
### [Web Parts](webparts)
### [Code Documentation](/docs/sprest-bs/globals.html)

### Installation

#### JavaScript/TypeScript

```js
npm i --save gd-sprest-bs
```

#### React

```js
npm i --save gd-sprest-bsx
```

### Reference the Script

#### JavaScript/TypeScript

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/5.0.3/gd-sprest-bs.min.js"></script>
```

#### React

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bsx/[Coming Soon]/gd-sprest-bsx.min.js"></script>
```

## Styling

The bootstrap css will only be applied to elements with a parent element containing the ```bs``` class. This will ensure that other elements on the page will not be affected.

```html
<div class="bs">
    <!-- Elements will have bootstrap css applied -->
</div>
```

## SPFx Configuration

Edit the  ```config/config.js``` file and set the externals property. Since the gd-sprest-bs library contains the gd-sprest core library, we can point both references to the same file. Now references to both libraries will reference the global $REST variable.

### External Reference (config/config.js)

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