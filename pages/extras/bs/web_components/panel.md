---
layout: archive
title: "Panel"
category: bs-wc
permalink: /extras/bs/webcomponents/panel/
---
The panel component extends the modal dialog.

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-panel>
    // Return the panel properties
    return {
        type: $REST.Components.PanelTypes.Large,
        modalProps: {
            button: { text: "Show Panel" },
            id: "my-wc-panel",
            title: "Panel Demo",
            onRenderBody: function(el) {
                // Render the body
            }
        }
    };
</bs-panel>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-panel>
    // Return the panel properties
    return {
        type: $REST.Components.PanelTypes.Large,
        modalProps: {
            button: { text: "Show Panel" },
            id: "my-panel",
            title: "Panel Demo",
            onRenderBody: function(el) {
                // Render the body
            }
        }
    };
</bs-panel>
```