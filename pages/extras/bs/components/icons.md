---
layout: archive
title: "Icons"
category: bs
permalink: /extras/bs/components/icons/
---
Bootstrap provides a list of the [available icons](https://icons.getbootstrap.com/#icons). Icons is a method using the IconTypes enumerator to render a specified icon. The default size rendered is 32x32, unless specified.

```js
Icons(iconType?:number, height?:number, width?:number):HtmlElement
```

<div id="icon"></div>

### JavaScript
```js
var Icons = require("gd-sprest-bs").Icons;

// Add an icon to the target element
var el = document.querySelector("#icon");
el.appendChild(Icons(IconTypes.BootstrapReboot));
```

### TypeScript

```ts
import { Icons, IconTypes } from "gd-sprest-bs";

let el = document.querySelector("#icon");
el.appendChild(Icons(IconTypes.BootstrapReboot));
```

### Web Component

The icons haven't been incorporated with the web component library. This will be done in future builds.
<!-- TODO -->

```html
```

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // Add an icon to the target element
        var el = document.querySelector("#icon");
        el ? el.appendChild($REST.Icons($REST.IconTypes.BootstrapReboot)) : null;
    });
</script>