---
layout: archive
title: "Input Group"
category: bs
permalink: /extras/bs/components/inputgroup/
---
[Documentation](https://getbootstrap.com/docs/4.1/components/input-group)

<div id="inputGroupDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the inputGroup
var el = document.querySelector("#inputGroup");
var inputGroup = Components.inputGroup({
    el: el,
    label: "My Name:",
    value: "First Last",
    onChange: function(value, ev) {
        console.log("The value is: " + value);
    }
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the inputGroup
let el = document.querySelector("#inputGroup");
let inputGroup = Components.inputGroup({
    el: el,
    label: "My Name:",
    value: "First Last",
    onChange: (value, ev) => {
        console.log("The value is: " + value);
    }
});
```

### Web Component

<bs-input-group label="My Name" value="First Last">
    // Return the input group properties
    return {
        onChange: onChangeEvent
    }
</bs-input-group>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-input-group label="My Name" value="First Last">
    // Return the input group properties
    return {
        onChange: function(item, ev) {
            console.log("The selected value is: " + item.text);
        }
    }
</bs-input-group>
```

### References

```
InputGroup(props:IInputGroupProps):IInputGroup
```

#### InputGroupTypes

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

#### IinputGroupProps

| Name | Type | Description |
| --- | --- | --- |
| appendedLabel | _string_ | The appended text field label. |
| className | _string_ | The class name to apply to input group. |
| description | _string_ | The text field description. |
| el | _HTMLElement_ | The element to render the input group to. |
| id | _string_ | The text field id. |
| isLarge | _boolean_ | Adds the 'inputGroup-lg' class name. |
| isSmall | _boolean_ | Adds the 'inputGroup-sm' class name. |
| label | _string_ | The text field label. |
| placeholder | _string_ | The text field placeholder. |
| prependedLabel | _string_ | The prepended text field label. |
| type | _number_ | The text field type. _Reference the InputGroupTypes enumerator_ |
| value | _string_ | The text field value. |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Set the change event
    function onChangeEvent(value, ev) {
        console.log("The value is: " + value);
    }

    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a inputGroup exists
        var inputGroup = document.querySelector("#inputGroupDemo");
        if(inputGroup) {
            // Render the inputGroup
            $REST.Components.InputGroup({
                el: inputGroup,
                label: "My Name:",
                onChange: onChangeEvent,
                value: "First Last"
            });
        }
    });
</script>