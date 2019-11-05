---
layout: extras
---
# Bootstrap

### Popover
[Documentation](https://getbootstrap.com/docs/4.1/components/popover)

<div id="popoverDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the popover
var el = document.querySelector("#popover");
var popover = Components.Popover({
    el: el,
    isDismissible: true,
    btnProps: {
        text: "Popover Demo"
    },
    options: {
        container: "body",
        content: "This is the popover content.",
        title: "My Popover",
    }
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the popover
let el = document.querySelector("#popover");
let popover = Components.Popover({
    el: el,
    isDismissible: true,
    btnProps: {
        text: "Popover Demo"
    },
    options: {
        container: "body",
        content: "This is the popover content.",
        title: "My Popover",
    }
});
```

### Web Component

<bs-popover is-dismissible="true">
    // Return the popover properties
    return {
        btnProps: {
            text: "Popover Demo"
        },
        options: {
            container: "body",
            content: "This is the popover content.",
            title: "My Popover",
        }
    };
</bs-popover>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-popover is-dismissible="true">
    // Return the popover properties
    return {
        btnProps: {
            text: "Popover Demo"
        },
        options: {
            container: "body",
            content: "This is the popover content.",
            title: "My Popover",
        }
    };
</bs-popover>
```

### References

```
Popover(props:IPopoverProps):IPopover
```

#### PopoverTypes

| Name | Value |
| --- | --- |
| Auto | 1 |
| Bottom | 2 |
| Left | 3 |
| Right | 4 |
| Top | 5 |

#### IPopover

| Name | Returns | Description |
| --- | --- | --- |
| dispose | () => void | Destroy's an element's popover. |
| el | Element | The jquery element. |
| hide | () => void | Hides an element's popover. |
| toggle | () => void | Toggles an element's popover. |
| toggleEnabled | () => void | Toggles the ability for an element's popover to be shown or hidden. |
| show | () => void | Shows an element's popover. |
| update | () => void | Updates the position of an element's popover. |

#### IPopoverOptions

| Name | Type | Description |
| --- | --- | --- |
| animation | _boolean_ | Apply a CSS fade transition to the popover. |
| boundary | _string \| Element_ | Overflow constraint boundary of the popover. |
| container | _string \| Element \| Function_ | Appends the popover to a specific element. |
| content | _string \| Element_ | The popover content. |
| delay | _number | object_ | Delay showing and hiding the popover (ms) - does not apply to manual trigger type. |
| fallbackPlacement | _string | Array&lt;string&gt;_ | Allow to specify which position Popper will use on fallback. |
| html | _boolean_ | Insert HTML into the popover. _Set to true, if you are returning element._ |
| offset | _number | string_ | Offset of the popover relative to its target. |
| placement | _string \| Function_ | How to position the popover _(auto, top, bottom, left, right)_. When auto is specified, it will dynamically reorient the popover. |
| selector | _string_ | If a selector is provided, popover objects will be delegated to the specified targets. |
| template | _string_ | Base HTML to use when creating the popover. |
| title | _string \| Element \| Function_ | Default title value if title attribute isn't present. |
| trigger | _string_ | How popover is triggered _(click, hover, focus, manual)_. You may pass multiple triggers; separate them with a space. Manual cannot be combined with any other trigger. |

#### IPopoverProps

| Name | Type | Description |
| --- | --- | --- |
| btnProps | _IButtonProps_ | The button properties. |
| className | _string_ | The class name to apply to popover. |
| el | _HTMLElement_ | The element to render the popover to. |
| isDismissible | _boolean_ | Closes the popover when clicking anywhere on the page. |
| options | _IPopoverOptions_ | The popover options. |
| type | _number_ | The popover type. _Reference the PopoverTypes enumerator_ |

<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a popover exists
        var popover = document.querySelector("#popoverDemo");
        if(popover) {
            // Render the popover
            $REST.Components.Popover({
                el: popover,
                isDismissible: true,
                btnProps: {
                    text: "Popover Demo"
                },
                options: {
                    container: "body",
                    content: "This is the popover content.",
                    title: "My Popover",
                }
            });
        }
    });
</script>