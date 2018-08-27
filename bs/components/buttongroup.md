---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Button Group](https://getbootstrap.com/docs/4.1/components/button-group)

#### Example:

<div id="buttonGroup"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the buttonGroup
var el = document.querySelector("#buttonGroup");
var buttonGroup = Components.ButtonGroup({
    el: el,
    buttonType: $REST.Components.ButtonTypes.Secondary,
    buttons: [
        { text: "Left" },
        { text: "Middle" },
        { text: "Right" }
    ]
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the buttonGroup
let el = document.querySelector("#buttonGroup");
let buttonGroup = Components.ButtonGroup({
    el: el,
    buttonType: $REST.Components.ButtonTypes.Secondary,
    buttons: [
        { text: "Left" },
        { text: "Middle" },
        { text: "Right" }
    ]
});
```

### Web Component
This is currently in development.

#### Example

<bs-buttonGroup button-type='$REST.Components.ButtonTypes.Secondary' buttons='[
    { text: "Left" },
    { text: "Middle" },
    { text: "Right" }
]'></bs-buttonGroup>

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-buttonGroup button-type='$REST.Components.ButtonTypes.Secondary' buttons='[
    { "text": "Left" },
    { "text": "Middle" },
    { "text": "Right" }
]'></bs-buttonGroup>
```

### References

```
ButtonGroup(props:IButtonGroupProps):IButtonGroup
```

#### IButtonGroup

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

### IButtonGroupProps

| Name | Type | Description |
| --- | --- | --- |
| buttons | _string_ | The buttons. |
| buttonType | _string_ | The button type. |
| className | _string_ | The class name to apply to buttonGroup. |
| el | _HTMLElement_ | The element to render the panel to. |
| id | _string_ | The id to apply to the button.
| isLarge | _boolean_ | Adds the 'btn-group-lg' class name. |
| isSmall | _boolean_ | Adds the 'btn-group-sm' class name. |
| isVertical | _boolean_ | Adds the 'btn-group-vertical' class name. |
| label | _string_ | The aria-label property value. |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a buttonGroup exists
        var buttonGroup = document.querySelector("#buttonGroup");
        if(buttonGroup) {
            // Render the buttonGroup
            $REST.Components.ButtonGroup({
                el: buttonGroup,
                buttonType: $REST.Components.ButtonTypes.Secondary,
                buttons: [
                    { text: "Left" },
                    { text: "Middle" },
                    { text: "Right" }
                ]
            });
        }
    });
</script>