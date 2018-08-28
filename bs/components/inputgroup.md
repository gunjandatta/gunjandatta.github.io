---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Input Group](https://getbootstrap.com/docs/4.1/components/input-group)

#### Example:

<div id="inputGroup"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the inputGroup
var el = document.querySelector("#inputGroup");
var inputGroup = Components.Input Group({
    el: el,
    label: "My Name:",
    value: "First Last"
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the inputGroup
let el = document.querySelector("#inputGroup");
let inputGroup = Components.Input Group({
    el: el,
    label: "My Name:",
    value: "First Last"
});
```

### Web Component
This is currently in development.

#### Example

<bs-inputGroup content="Input Group"></bs-inputGroup>

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-inputGroup label="My Name" value="First Last"></bs-inputGroup>
```

### References

```
InputGroup(props:IInput GroupProps):IInputGroup
```

#### Input GroupTypes

| Name | Value |
| --- | --- |
| Email | 1 |
| File | 2 |
| Password | 3 |
| TextArea | 4 |
| TextField | 5 |

#### IInputGroup

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IInput GroupProps

| Name | Type | Description |
| --- | --- | --- |
| appendedLabel | _string_ | The appended text field label. |
| className | _string_ | The class name to apply to inputGroup. |
| description | _string_ | The text field description. |
| el | _HTMLElement_ | The element to render the panel to. |
| id | _string_ | The text field id. |
| isLarge | _boolean_ | Adds the 'inputGroup-lg' class name. |
| isSmall | _boolean_ | Adds the 'inputGroup-sm' class name. |
| label | _string_ | The text field label. |
| placeholder | _string_ | The text field placeholder. |
| prependedLabel | _string_ | The prepended text field label. |
| type | _number_ | The text field type. _Reference the InputGroupTypes enumerator_ |
| value | _string_ | The text field value. |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a inputGroup exists
        var inputGroup = document.querySelector("#inputGroup");
        if(inputGroup) {
            // Render the inputGroup
            $REST.Components.Input Group({
                el: inputGroup,
                label: "My Name:",
                value: "First Last"
            });
        }
    });
</script>