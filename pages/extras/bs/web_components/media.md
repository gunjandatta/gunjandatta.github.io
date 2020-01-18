---
layout: archive
title: "Media Object"
category: bs-wc
permalink: /extras/bs/webcomponents/media/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/media-object/)

<div id="media"></div>

### JavaScript
```js
var $REST = require("gd-sprest-bs");

// Create the media object
var el = document.querySelector("#icon");
var media = $REST.Components.Media({
    el: el,
    icon: {
        icon: $REST.IconTypes.BootstrapReboot,
        className: "mr-3"
    },
    body: [
        "<h5>Media Object Example</h5>",
        "This is an example of a media object."
    ].join('\n')
});
```

### TypeScript

```ts
import { Components, IconTypes } from "gd-sprest-bs";

// Create the media object
let el = document.querySelector("#icon");
let media = Components.Media({
    el: el,
    icon: {
        icon: IconTypes.BootstrapReboot,
        className: "mr-3"
    },
    body: [
        "<h5>Media Object Example</h5>",
        "This is an example of a media object."
    ].join('\n')
});
```

### Web Component

The media object and icons haven't been incorporated with the web component library. This will be done in future builds.
<!-- TODO -->

```html
```

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // Add an icon to the target element
        var el = document.querySelector("#media");
        $REST.Components.Media({
            el: el,
            icon: {
                icon: $REST.IconTypes.BootstrapReboot,
                className: "mr-3"
            },
            body: [
                "<h5>Media Object Example</h5>",
                "This is an example of a media object."
            ].join('\n')
        });
    });
</script>