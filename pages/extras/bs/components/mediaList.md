---
layout: archive
title: "Media List"
category: bs
permalink: /extras/bs/components/media-list/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/media-object/#media-list)

<div id="media"></div>

### JavaScript
```js
var $REST = require("gd-sprest-bs");

// Create the media list object
var el = document.querySelector("#media");
var media = $REST.Components.MediaList({
    el: el,
    items: [
        {
            icon: {
                icon: $REST.IconTypes.BootstrapReboot,
                className: "mr-3"
            },
            body: "<h5>Default Item</h5>This is the default media object."
        },
        {
            icon: {
                icon: $REST.IconTypes.Bootstrap,
                className: "mr-3",
                type: $REST.Components.MediaImageTypes.Top
            },
            body: "<h5>Top Aligned Item</h5>This is an example of a media object."
        },
        {
            icon: {
                icon: $REST.IconTypes.BootstrapFill,
                className: "mr-3",
                type: $REST.Components.MediaImageTypes.Center
            },
            body: "<h5>Center Aligned Item</h5>This is an example of a media object."
        },
        {
            icon: {
                icon: $REST.IconTypes.BootstrapReboot,
                className: "mr-3",
                type: $REST.Components.MediaImageTypes.Bottom
            },
            body: "<h5>Bottom Aligned Item</h5>This is an example of a media object."
        },
        {
            icon: {
                icon: $REST.IconTypes.Bootstrap,
                className: "mr-3"
            },
            body: "<h5>Right Aligned Item</h5>This is an example of a media object.",
            order: $REST.Components.MediaOrderTypes.Right
        }
    ]
});
```

### TypeScript

```ts
import { Components, IconTypes } from "gd-sprest-bs";

// Create the media list object
let el = document.querySelector("#media");
let media = Components.MediaList({
    el,
    items: [
        {
            icon: {
                icon: IconTypes.BootstrapReboot,
                className: "mr-3"
            },
            body: "<h5>Default Item</h5>This is the default media object."
        },
        {
            icon: {
                icon: IconTypes.Bootstrap,
                className: "mr-3",
                type: Components.MediaImageTypes.Top
            },
            body: "<h5>Top Aligned Item</h5>This is an example of a media object."
        },
        {
            icon: {
                icon: IconTypes.BootstrapFill,
                className: "mr-3",
                type: Components.MediaImageTypes.Center
            },
            body: "<h5>Center Aligned Item</h5>This is an example of a media object."
        },
        {
            icon: {
                icon: IconTypes.BootstrapReboot,
                className: "mr-3",
                type: Components.MediaImageTypes.Bottom
            },
            body: "<h5>Bottom Aligned Item</h5>This is an example of a media object."
        },
        {
            icon: {
                icon: IconTypes.Bootstrap,
                className: "mr-3"
            },
            body: "<h5>Right Aligned Item</h5>This is an example of a media object.",
            order: Components.MediaOrderTypes.Right
        }
    ]
});
```

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs-icons.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // Add an icon to the target element
        var el = document.querySelector("#media");
        $REST.Components.MediaList({
            el: el,
            items: [
                {
                    icon: {
                        icon: $REST.IconTypes.BootstrapReboot,
                        className: "mr-3"
                    },
                    body: "<h5>Default Item</h5>This is the default media object."
                },
                {
                    icon: {
                        icon: $REST.IconTypes.Bootstrap,
                        className: "mr-3",
                        type: $REST.Components.MediaImageTypes.Top
                    },
                    body: "<h5>Top Aligned Item</h5>This is an example of a media object."
                },
                {
                    icon: {
                        icon: $REST.IconTypes.BootstrapFill,
                        className: "mr-3",
                        type: $REST.Components.MediaImageTypes.Center
                    },
                    body: "<h5>Center Aligned Item</h5>This is an example of a media object."
                },
                {
                    icon: {
                        icon: $REST.IconTypes.BootstrapReboot,
                        className: "mr-3",
                        type: $REST.Components.MediaImageTypes.Bottom
                    },
                    body: "<h5>Bottom Aligned Item</h5>This is an example of a media object."
                },
                {
                    icon: {
                        icon: $REST.IconTypes.Bootstrap,
                        className: "mr-3"
                    },
                    body: "<h5>Right Aligned Item</h5>This is an example of a media object.",
                    order: $REST.Components.MediaOrderTypes.Right
                }
            ]
        });
    });
</script>