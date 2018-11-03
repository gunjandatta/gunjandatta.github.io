---
layout: default
---

### Form
[Documentation](https://getbootstrap.com/docs/4.1/components/forms)

<div id="myForm"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the form
var el = document.querySelector("#myForm");
Components.Form({
    el: el,
    rows: [
        {
            control: {
                label: "First Name:",
                name: "FName",
                type: 10
            }
        },
        {
            control: {
                label: "Last Name:",
                name: "LName",
                type: 10
            }
        },
        {
            control: {
                label: "Choices:",
                name: "Choice",
                type: 3,
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
let el = document.querySelector("#myForm");
let form = Components.Form({
    el: el,
    rows: [
        {
            control: {
                label: "First Name:",
                name: "FName",
                type: 10
            }
        },
        {
            control: {
                label: "Last Name:",
                name: "LName",
                type: 10
            }
        },
        {
            control: {
                label: "Choices:",
                name: "Choice",
                type: 3,
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

<bs-form>
    // Return the form properties
    return {
        rows: [
            {
                control: {
                    label: "First Name:",
                    name: "FName",
                    type: 10
                }
            },
            {
                control: {
                    label: "Last Name:",
                    name: "LName",
                    type: 10
                }
            },
            {
                control: {
                    label: "Choices:",
                    name: "Choice",
                    type: 3,
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
    };
</bs-form>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-form>
    // Return the form properties
    return {
        rows: [
            {
                control: {
                    label: "First Name:",
                    name: "FName",
                    type: 10
                }
            },
            {
                control: {
                    label: "Last Name:",
                    name: "LName",
                    type: 10
                }
            },
            {
                control: {
                    label: "Choices:",
                    name: "Choice",
                    type: 3,
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
    };
</bs-form>
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
| Primary | 5 |
| Secondary | 6 |
| Success | 7 |
| Warning | 8 |

#### IForm

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |
| getValues | {[key:string]: any} | The form values, where the key is equal to the 'name' property. |

#### IFormProps

| Name | Type | Description |
| --- | --- | --- |
| el | _HTMLElement_ | The element to render the form to. |
| rows | _Array&lt;IFormRow&gt;_ | An array of form rows. |
| value | _any_ | The form values. |

#### IFormRow

| Name | Type | Description |
| --- | --- | --- |
| isAutoSized | _boolean_ | Sets the 'col' class name to 'col-auto'. |
| isCentered | _boolean_ | Adds the 'align-items-center' class. |
| control | _Array&lt;IFormControlProps&gt;_ | The form control. |
| columns | _Array&lt;{ control: IFormControlProps, size: number }&gt;_ | The form values. |

### Form Controls

#### IFormControl

| Name | Type | Description |
| --- | --- | --- |
| el | _HTMLElement_ | The element to render the form control to. |
| getValue | _any_ | The form control value. |
| isValid | _() => boolean \| IFormControlValidationResult_ | Flag determining if the control is valid. This will also apply the ```is-valid``` and ```is-invalid``` class to the ```form-control```. |
| props | _IFormControlProps_ | A reference to the form control properties. |

#### IFormControlProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to form control. |
| data | _any_ | The form control data object associated with the control. |
| description | _string_ | The form control description. |
| el | _HTMLElement_ | The element to render the form control to. |
| errorMessage | _string_ | Adds an invalid-feedback element to the form control. |
| isReadonly | _boolean_ | Flag to set the form control to be read-only. |
| isPlainText | _boolean_ | Flag to set the form control as plain text. |
| label | _string_ | The form control label. |
| name | _string_ | The form control name. |
| onControlRendering | _(control: IFormControlProps) => void \| PromiseLike&lt;IFormControlProps>_ | The form control on rendering event. |
| onControlRendered | _(control: IFormControl) => void \| PromiseLike&lt;IFormControlProps>_ | The form control on rendered event. |
| onGetValue | _(control: IFormControlProps) => any_ | The form control on rendering event. |
| required | _boolean_ | The required form control flag. |
| type | _number_ | The form control type. _Reference the FormControlTypes enumerator_ |
| value | _any_ | The form control value. |

#### IFormControlCheckbox

| Name | Type | Description |
| --- | --- | --- |
| hideLabel | _boolean_ | Flag to hide the checkbox label. |
| items | _Array&lt;ICheckboxItem&gt;_ | An array of dropdown items. |
| multi | _boolean_ | Flag to allow multiple selections. |
| onChange | _(item: IDropdownItem \| Array&lt;IDropdownItem&gt;) => void_ | The change event. |
| type | _number_ | The checkbox type. |

#### IFormControlDropdown

| Name | Type | Description |
| --- | --- | --- |
| items | _Array&lt;IDropdownItem&gt;_ | An array of dropdown items. |
| onChange | _(item: IDropdownItem \| Array&lt;IDropdownItem&gt;) => void_ | The change event. |
| placeholder | _string_ | The dropdown placeholder. |
| type | _number_ | The dropdown type. _Reference the DropdownTypes enumerator_ |

#### IFormControlTextField

| Name | Type | Description |
| --- | --- | --- |
| onChange | _(value: string) => void_ | The change event. |
| placeholder | _string_ | The text field placeholder. |

#### IFormControlValidationResult

| Name | Type | Description |
| --- | --- | --- |
| invalidMessage | _string_ | Message displayed when the control is not valid. |
| isValid | _boolean_ | Flag determining if the control is valid or not. |
| validMessage | _string_ | Message displayed when the control is valid. |

<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a form exists
        var form = document.querySelector("#myForm");
        if(form) {
            // Render the form
            $REST.Components.Form({
                el: form,
                rows: [
                    {
                        control: {
                            label: "First Name:",
                            name: "FName",
                            type: $REST.Components.FormControlTypes.TextField
                        }
                    },
                    {
                        control: {
                            label: "Last Name:",
                            name: "LName",
                            type: $REST.Components.FormControlTypes.TextField
                        }
                    },
                    {
                        control: {
                            label: "Choices:",
                            name: "Choice",
                            type: $REST.Components.FormControlTypes.Dropdown,
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
        }
    });
</script>