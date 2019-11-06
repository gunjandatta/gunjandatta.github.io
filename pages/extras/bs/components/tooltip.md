---
layout: archive
title: "Tooltip"
category: bs
permalink: /extras/bs/components/tooltip/
---
[Documentation](https://getbootstrap.com/docs/4.1/components/tooltips)

<div id="tooltipDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the tooltip
var el = document.querySelector("#tooltip");
var tooltip = Components.Tooltip({
    el: el,
    btnProps: {
        text: "Tooltip Demo"
    },
    options: {
        title: "My Tooltip",
    }
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the tooltip
let el = document.querySelector("#tooltip");
let tooltip = Components.Tooltip({
    el: el,
    btnProps: {
        text: "Tooltip Demo"
    },
    options: {
        title: "My Tooltip",
    }
});
```

### Web Component
<!--
<bs-tooltip>
    // Return the tooltip properties
    return {
        btnProps: {
            text: "Tooltip Demo"
        },
        options: {
            title: "My Tooltip",
        }
    };
</bs-tooltip>
-->

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-tooltip>
    // Return the tooltip properties
    return {
        btnProps: {
            text: "Tooltip Demo"
        },
        options: {
            title: "My Tooltip",
        }
    };
</bs-tooltip>
```

### References

```
Tooltip(props:ITooltipProps):ITooltip
```

#### TooltipTypes

| Name | Value |
| --- | --- |
| Auto | 1 |
| Bottom | 2 |
| Left | 3 |
| Right | 4 |
| Top | 5 |

#### ITooltip

| Name | Returns | Description |
| --- | --- | --- |
| dispose | () => void | Destroy's an element's tooltip. |
| el | Element | The jquery element. |
| enabled | () => void | Gives an element’s tooltip the ability to be shown. |
| hide | () => void | Hides an element's tooltip. |
| toggle | () => void | Toggles an element's tooltip. |
| toggleEnabled | () => void | Toggles the ability for an element's tooltip to be shown or hidden. |
| show | () => void | Shows an element's tooltip. |
| update | () => void | Updates the position of an element's tooltip. |

#### ITooltipOptions

| Name | Type | Description |
| --- | --- | --- |
| animation | _boolean_ | Apply a CSS fade transition to the tooltip. |
| boundary | _string_ | Overflow constraint boundary of the tooltip. |
| container | _string_ | Appends the tooltip to a specific element. |
| delay | _number | object_ | Delay showing and hiding the tooltip (ms) - does not apply to manual trigger type. |
| fallbackPlacement | _string | Array&lt;string&gt;_ | Allow to specify which position Popper will use on fallback. |
| html | _boolean_ | Insert HTML into the tooltip. |
| offset | _number | string_ | Offset of the tooltip relative to its target. |
| placement | _string_ | How to position the tooltip _(auto, top, bottom, left, right)_. When auto is specified, it will dynamically reorient the tooltip. |
| selector | _string_ | If a selector is provided, tooltip objects will be delegated to the specified targets. |
| template | _string_ | Base HTML to use when creating the tooltip. |
| title | _string_ | Default title value if title attribute isn't present. |
| trigger | _string_ | How tooltip is triggered _(click, hover, focus, manual)_. You may pass multiple triggers; separate them with a space. Manual cannot be combined with any other trigger. |

#### ITooltipProps

| Name | Type | Description |
| --- | --- | --- |
| btnProps | _IButtonProps_ | The button properties. |
| className | _string_ | The class name to apply to tooltip. |
| el | _HTMLElement_ | The element to render the tooltip to. |
| options | _ITooltipOptions_ | The tooltip options. |
| type | _number_ | The tooltip type. _Reference the TooltipTypes enumerator_ |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a tooltip exists
        var tooltip = document.querySelector("#tooltipDemo");
        if(tooltip) {
            // Render the tooltip
            $REST.Components.Tooltip({
                el: tooltip,
                btnProps: {
                    text: "Tooltip Demo"
                },
                options: {
                    title: "My Tooltip",
                }
            });
        }
    });
</script>