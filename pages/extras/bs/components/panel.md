---
layout: archive
title: "Panel"
category: bs
permalink: /extras/bs/components/panel/
---
The panel component extends the modal dialog.

<div id="panelDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the panel
var el = document.querySelector("#panel");
var panel = Components.Panel({
    el: el,
    type: Components.PanelTypes.Large,
    modalProps: {
        button: { text: "Show Panel" },
        id: "my-panel",
        title: "Panel Demo",
        onRenderBody: function(el) {
            // Render the body
        }
    }
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the panel
let el = document.querySelector("#panel");
let panel = Components.Panel({
    el: el,
    type: Components.PanelTypes.Large,
    modalProps: {
        button: { text: "Show Panel" },
        id: "my-panel",
        title: "Panel Demo",
        onRenderBody: (el) => {
            // Render the body
        }
    }
});
```

### Web Component

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
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
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

### References

```
Panel(props:IPanelProps):IPanel
```

#### PanelTypes

| Name | Value |
| --- | --- |
| Full | 1 |
| Large | 2 |
| Medium | 3 |
| Small | 4 |
| XLarge | 5 |

#### IPanel

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |
| modal | IModal | The modal instance. |
| hide | () => void | Hides the panel. |
| show | () => void | Shows the panel. |

#### IPanelProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to panel. |
| el | _HTMLElement_ | The element to render the panel to. |
| modalProps | _IModalProps_ | The modal properties. |
| type | _number_ | The panel type. _Reference the PanelTypes enumerator_ |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a panel exists
        var panel = document.querySelector("#panelDemo");
        if(panel) {
            // Render the panel
            var panel = $REST.Components.Panel({
                el: panel,
                type: $REST.Components.PanelTypes.Large,
                modalProps: {
                    button: { text: "Show Panel" },
                    id: "my-panel",
                    title: "Panel Demo",
                    onRenderBody: function(el) {
                        // Render the body
                    }
                }
            });
            panel.el.style.marginTop = "100px";
        }
    });
</script>