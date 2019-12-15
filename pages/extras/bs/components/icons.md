---
layout: archive
title: "Icons"
category: bs
permalink: /extras/bs/components/icons/
---
[Documentation](https://icons.getbootstrap.com/)

<div id="icon"></div>

### JavaScript
```js
var Icons = require("gd-sprest-bs").Icons;

// Add an icon to the target element
var el = document.querySelector("#icon");
el.appendChild(Icons.BootstrapReboot());
```

### TypeScript

```ts
import { Icons } from "gd-sprest-bs";

let el = document.querySelector("#icon");
el.appendChild(Icons.BootstrapReboot());
```

### Web Component

The icons haven't been incorporated with the web component library. This will be done in future builds.
<!-- TODO -->

```html
```

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // Add an icon to the target element
        var el = document.querySelector("#icon");
        el ? el.appendChild($REST.Icons.BootstrapReboot()) : null;
    });
</script>