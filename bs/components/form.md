---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Form](https://getbootstrap.com/docs/4.1/components/forms)

#### Example:

<div id="form"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the form
var el = document.querySelector("#form");
Components.Form({
    el: el,
    rows: [
        {
            control: {
                label: "First Name:",
                name: "FName",
                type: 9
            }
        },
        {
            control: {
                label: "Last Name:",
                name: "LName",
                type: 9
            }
        },
        {
            control: {
                label: "Choices:",
                name: "Choice",
                type: 2,
                items: [
                    { text: "Choice 1", value: "1" },
                    { text: "Choice 2", value: "2" },
                    { text: "Choice 3", value: "3" },
                    { text: "Choice 4", value: "4" },
                    { text: "Choice 5", value: "5" }
                ]
            }
        }
    ],
    value: {
        FName: "Gunjan",
        LName: "Datta",
        Choice: "3"
    }
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the form
let el = document.querySelector("#form");
let form = Components.Form({
    el: el,
    rows: [
        {
            control: {
                label: "First Name:",
                name: "FName",
                type: 9
            }
        },
        {
            control: {
                label: "Last Name:",
                name: "LName",
                type: 9
            }
        },
        {
            control: {
                label: "Choices:",
                name: "Choice",
                type: 2,
                items: [
                    { text: "Choice 1", value: "1" },
                    { text: "Choice 2", value: "2" },
                    { text: "Choice 3", value: "3" },
                    { text: "Choice 4", value: "4" },
                    { text: "Choice 5", value: "5" }
                ]
            }
        }
    ],
    value: {
        FName: "Gunjan",
        LName: "Datta",
        Choice: "3"
    }
});
```

### Web Component
This is currently in development.

#### Example

<bs-form rows='[
    {
        "control": {
            "label": "First Name:",
            "name": "FName",
            "type": 10
        }
    },
    {
        "control": {
            "label": "Last Name:",
            "name": "LName",
            "type": 10
        }
    },
    {
        "control": {
            "label": "Choices:",
            "name": "Choice",
            "type": 3,
            "items": [
                { "text": "Choice 1", "value": "1" },
                { "text": "Choice 2", "value": "2" },
                { "text": "Choice 3", "value": "3" },
                { "text": "Choice 4", "value": "4" },
                { "text": "Choice 5", "value": "5" }
            ]
        }
    }
]' value='{
    "FName": "Gunjan",
    "LName": "Datta",
    "Choice": "3"
}'></bs-form>

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-form rows='[
    {
        "control": {
            "label": "First Name:",
            "name": "FName",
            "type": 10
        }
    },
    {
        "control": {
            "label": "Last Name:",
            "name": "LName",
            "type": 10
        }
    },
    {
        "control": {
            "label": "Choices:",
            "name": "Choice",
            "type": 3,
            "items": [
                { "text": "Choice 1", "value": "1" },
                { "text": "Choice 2", "value": "2" },
                { "text": "Choice 3", "value": "3" },
                { "text": "Choice 4", "value": "4" },
                { "text": "Choice 5", "value": "5" }
            ]
        }
    }
]' value='{
    "FName": "Gunjan",
    "LName": "Datta",
    "Choice": "3"
}'></bs-form>
```

### References

```
Form(props:IFormProps):IForm
```

#### FormControlTypes

| Name | Value |
| --- | --- |
| CheckBox | 1 |
| Email | 2 |
| Dropdown | 3 |
| File | 4 |
| Primary | 6 |
| Secondary | 7 |
| Success | 8 |
| Warning | 9 |

#### IForm

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |
| getValues | {[key:string]: any} | The form values, where the key is equal to the 'name' property. |

#### IFormProps

| Name | Type | Description |
| --- | --- | --- |
| el | _HTMLElement_ | The element to render the panel to. |
| rows | _Array&lt;IFormRow&gt;_ | An array of form rows. |
| value | _any_ | The form values. |

#### IFormRow

| Name | Type | Description |
| --- | --- | --- |
| isAutoSized | _boolean_ | Sets the 'col' class name to 'col-auto'. |
| isCentered | _boolean_ | Adds the 'align-items-center' class. |
| control | _Array&lt;IFormRow&gt;_ | The form control. |
| columns | _Array&lt;{ control: IFormControl, size: number }&gt;_ | The form values. |

### Form Controls

#### IFormControl

| Name | Type | Description |
| --- | --- | --- |
| description | _string_ | The form control description. |
| label | _string_ | The form control label. |
| name | _string_ | The form control name. |
| type | _number_ | The form control type. _Reference the FormControlTypes enumerator_ |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a form exists
        var form = document.querySelector("#form");
        if(form) {
            // Render the form
            $REST.Components.Form({
                el: form,
            });
        }
    });
</script>