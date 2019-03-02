---
layout: extras
---
# Bootstrap

### Checkbox Group
[Documentation](https://getbootstrap.com/docs/4.1/components/forms/#checkboxes-and-radios)

<div id="cbGroupDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the checkbox group
var el = document.querySelector("#checkboxGroup");
var cbGroup = Components.CheckboxGroup({
    el: el,
    items: [
        { label: "Option 1" },
        { label: "Option 2" },
        { label: "Option 3" }
    ]
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the buttonGroup
let el = document.querySelector("#cbGroup");
let cbGroup = Components.CheckboxGroup({
    el: el,
    items: [
        { label: "Option 1" },
        { label: "Option 2" },
        { label: "Option 3" }
    ]
});
```

### Web Component

<bs-checkbox-group>
    // Return the checkbox group properties
    return {
        items: [
            { label: "Option 1" },
            { label: "Option 2" },
            { label: "Option 3" }
        ]
    }
</bs-checkbox-group>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-checkbox-group>
    // Return the checkbox group properties
    return {
        items: [
            { label: "Option 1" },
            { label: "Option 2" },
            { label: "Option 3" }
        ]
    }
</bs-checkbox-group>
```

### References

```
CheckboxGroup(props:ICheckboxGroupProps):ICheckboxGroup
```

#### ICheckboxGroup

| Name | Returns | Description |
| --- | --- | --- |
| el | _Element_ | The jquery element. |
| getValue | _() => ICheckboxGroupItem \| Array&lt;ICheckboxGroupItem&gt;_ | Returns the selected items. |

#### ICheckboxGroupProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to button group. |
| colSize | _number_ | The size of the column. |
| el | _HTMLElement_ | The element to render the button group to. |
| hideLabel | _boolean_ | Flag to hide the label. |
| label | _string_ | The aria-label property value. |
| items | _ICheckboxGroupItem_ | The checkbox items. |
| multi | _boolean_ | Flag to allow multiple selections. |
| onChange | _(items:Array&lt;ICheckboxGroupItem&gt;) => void_ | Event triggered when a checkbox is clicked. |
| type | _string_ | The checkbox item type. |

#### ICheckboxGroupItem

| Name | Type | Description |
| --- | --- | --- |
| data | _any_ | The data object associated with the item. |
| isDisabled | _boolean_ | Flag to disable the item. |
| isSelected | _boolean_ | Flag indicating the item is selected. |
| label | _string_ | The checkbox label. |
| name | _string_ | The name of the checkbox. |
| onChange | _(item) => void_ | The on change event. |

<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a checkbox group exists
        var cbGroup = document.querySelector("#cbGroupDemo");
        if(cbGroup) {
            // Render the checkbox group
            $REST.Components.CheckboxGroup({
                el: cbGroup,
                items: [
                    { label: "Option 1" },
                    { label: "Option 2" },
                    { label: "Option 3" }
                ]
            });
        }
    });
</script>