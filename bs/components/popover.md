---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Popover](https://getbootstrap.com/docs/4.1/components/popover)

#### Example:

<div id="popoverDemo"></div>

### Code Examples

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

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-popover is-dismissible="true" btn-props='{
    "text": "Popover Demo"
}' options='{
    "container": "body",
    "content": "This is the popover content.",
    "title": "My Popover"
}'></bs-popover>
```

<bs-popover is-dismissible="true" btn-props='{
    "text": "Popover Demo"
}' options='{
    "container": "body",
    "content": "This is the popover content.",
    "title": "My Popover"
}'></bs-popover>

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
| el | Element | The jquery element. |

#### IPopoverProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to popover. |
| content | _string_ | The popover content. |
| el | _HTMLElement_ | The element to render the popover to. |
| header | _string_ | The popover header. |
| href | _string_ | Renders the popover as an anchor element instead of a span element. |
| isPill | _boolean_ | Adds the 'popover-pill' class name. |
| type | _number_ | The popover type. _Reference the PopoverTypes enumerator_ |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
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