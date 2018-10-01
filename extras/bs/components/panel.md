---
layout: default
---

### Panel

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

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-panel type="2" modal-props='{  
    "button": { "text": "Show Panel" },
    "id": "my-panel",
    "title": "Panel Demo"
}'></bs-panel>
```

<bs-panel type="2" modal-props='{
    "button": { "text": "Show Panel" },
    "id": "my-wc-panel",
    "title": "Panel Demo"
}'></bs-panel>

### References

```
Panel(props:IPanelProps):IPanel
```

#### PanelTypes

| Name | Value |
| --- | --- |
| Auto | 1 |
| Bottom | 2 |
| Left | 3 |
| Right | 4 |
| Top | 5 |

#### IPanel

| Name | Returns | Description |
| --- | --- | --- |
| dispose | () => void | Destroy's an element's panel. |
| el | Element | The jquery element. |
| hide | () => void | Hides an element's panel. |
| toggle | () => void | Toggles an element's panel. |
| toggleEnabled | () => void | Toggles the ability for an element's panel to be shown or hidden. |
| show | () => void | Shows an element's panel. |
| update | () => void | Updates the position of an element's panel. |

#### IPanelOptions

| Name | Type | Description |
| --- | --- | --- |
| animation | _boolean_ | Apply a CSS fade transition to the panel. |
| boundary | _string_ | Overflow constraint boundary of the panel. |
| container | _string_ | Appends the panel to a specific element. |
| content | _string_ | The panel content. |
| delay | _number | object_ | Delay showing and hiding the panel (ms) - does not apply to manual trigger type. |
| fallbackPlacement | _string | Array&lt;string&gt;_ | Allow to specify which position Popper will use on fallback. |
| html | _boolean_ | Insert HTML into the panel. |
| offset | _number | string_ | Offset of the panel relative to its target. |
| placement | _string_ | How to position the panel _(auto, top, bottom, left, right)_. When auto is specified, it will dynamically reorient the panel. |
| selector | _string_ | If a selector is provided, panel objects will be delegated to the specified targets. |
| template | _string_ | Base HTML to use when creating the panel. |
| title | _string_ | Default title value if title attribute isn't present. |
| trigger | _string_ | How panel is triggered _(click, hover, focus, manual)_. You may pass multiple triggers; separate them with a space. Manual cannot be combined with any other trigger. |

#### IPanelProps

| Name | Type | Description |
| --- | --- | --- |
| btnProps | _IButtonProps_ | The button properties. |
| className | _string_ | The class name to apply to panel. |
| el | _HTMLElement_ | The element to render the panel to. |
| isDismissible | _boolean_ | Closes the panel when clicking anywhere on the page. |
| options | _IPanelOptions_ | The panel options. |
| type | _number_ | The panel type. _Reference the PanelTypes enumerator_ |

<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a panel exists
        var panel = document.querySelector("#panelDemo");
        if(panel) {
            // Render the panel
            $REST.Components.Panel({
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
        }
    });
</script>