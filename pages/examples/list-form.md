---
title: "List Form"
category: examples
permalink: /examples/list-form/
---
This example will go over various ways to use the form component. Refer to the [Form Page](/extras/bs/components/form) for additional details of the form and form control components. The modal dialog will be used for this example. We will use the button option to display the form when clicked.

```ts
import { Components } from "gd-sprest-bs";

// Get the form element to render the modal dialog to
let elForm = document.querySelector("#dlg-listform");
if (elForm == null) {
    // Create the element
    elForm = document.createElement("div");
    elForm.id = "dlg-listform";
    document.body.appendChild(elForm);
}

// Render the modal dialog
let dialog = Components.ModalDialog({
    el: elForm,
    button: { text: "Show Form" },
    onClose: () => {
        // Dispose of the dialog
        dialog.dispose();
        document.body.removeChild(elForm);
    },
    onRenderBody: (el) => {
        // Render the form
        Components.Form({
            // See Control Examples Below
        });
    }
});
```

## Built-In Methods

The form control has built in methods to help with customizing it. The ```name``` property must be defined for the value to be returned.

- getControl(name) - Gets a specific control by the name property.
- getValues() - Returns an object of key-value pairs, for all controls with the ```name``` property defined.
- isValid() - Returns true/false of the form's validation state. The validation is determined by the ```required``` property or the ```onValidate``` event.

## Control Examples

Various form control types exist. Refer to the [documentation](/extras/bs/components/form) for additional details on the form and form control components.

* Checkbox
* Email
* Dropdown
* File
* Multi-Dropdown
* Password
* Radio
* Range
* Readonly
* TextArea
* TextField

## Basic Example

```js
{
    control: {
        name: "desc",
        label: "Description",
        rows: 6,
        type: Components.FormControlTypes.TextArea
    }
}
```

## Columns

The columns property allows you to render form controls in a bootstrap table. The size of the columns should follow bootstrap's rules.

```js
{
    columns: [
        {
            size: 6,
            control: {
                name: "FName",
                label: "First Name:",
                type: Components.FormControlTypes.TextField
            }
        },
        {
            size: 6,
            control: {
                name: "FName",
                label: "First Name:",
                type: Components.FormControlTypes.TextField
            }
        }
    ]
}
```

## Rendering Event

The control properties can be manipulated in the rendering event. The properties or a promise must be returned.

```js
{
    control: {
        label: "Post:",
        name: "PostName",
        type: Components.FormControlTypes.Dropdown,
        onControlRendering: function (props) {
            // Set the dropdown items
            props.items = [
                { text: "" },
                { text: "Item 1" },
                { text: "Item 2" },
                { text: "Item 3" },
                { text: "Item 4" },
                { text: "Item 5" }
            ];
        }
    }
}
```

## Loading Message

The use of a promise can be used to display a loading message, until the control is rendered.

```js
{
    control: {
        label: "Delayed Textbox",
        name: "TestDelay",
        type: Components.FormControlTypes.TextField,
        loadingMessage: "Loading the textbox...",
        onControlRendering: function (props) {
            return {
                then: function (resolve) {
                    // Wait 5 seconds before rendering the textbox
                    setTimeout(function () {
                        // Resolve the promise
                        resolve(props);
                    }, 5000);
                }
            }
        }
    }
}
```

## Custom Controls

The ability to create custom controls can be done, using the rendered event.

```js
{
    control: {
        label: "My Custom Control:",
        name: "CustomControl",
        onControlRendered: function (control) {
            // Render my custom control
            control.el.innerHTML = "<h3>Custom Control</h3>";
        },
        onGetValue: function(props) {
            // The get value event must be specified for custom controls
            return "My Value";
        }
    }
}
```

## Validation

The ability to display valid and invalid messages can easily be done by the validation event.

```js
{
    control: {
        label: "Post:",
        name: "PostName",
        type: Components.FormControlTypes.Dropdown,
        items: [
            { text: "" },
            { text: "Item 1" },
            { text: "Item 2" },
            { text: "Item 3" },
            { text: "Item 4" },
            { text: "Item 5" }
        ],
        onValidate: function (props, item) {
            return {
                invalidMessage: "This is invalid.",
                isValid: item.text != "" ? true : false,
                validMessage: "This is valid"
            };
        }
    }
}
```