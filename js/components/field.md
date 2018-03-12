---
layout: default
---
[Back](/js/components)
## Field
### Supported Types
The field components currently supported are:
* Attachments
* Boolean
* Choice
* Date
* Date/Time
* Lookup
* Managed Metadata
* Multi-Choice
* Multi-User
* Note (Plain Text)
* Number
* Text
* Url
* User

### Properties
* className - The class name.
* controlMode - The control mode of the form.
* disabled - True to disable the field, when in edit/new mode.
* el - The element to render the field to.
* fieldInfo - The field information.
* onChange - The change event.
* value - The field value.

#### Field Information
* defaultValue - The default value.
* field - The list field.
* listName - The list name.
* name - The internal name of the field.
* readOnly - Flag indicating if the field is read-only.
* required - True indicates a required field type.
* title - The display name of the field.
* type - The field type.
* typeAsString - The field type as a string.
* webUrl - The relative web url containing the list.

### Code Example
#### JavaScript
```js
var $REST = require("gd-sprest-js");

export const MyField = () => {
    // Get the target element
    let el = document.querySelector("#myfield");
    if(el) {
        // Render a loading dialog
        $REST.JS.Fabric.Spinner({
            el,
            text: "Loading the field..."
        });

        // Get the list information
        (new $REST.JS.Components.ListInfo({ listName: "My List" })).then(info => {
            // Render the field to the element
            Field({
                el,
                controlMode: SPTypes.ControlMode.Display,
                fieldInfo: {
                    field: info.fields["MyFieldInternalName"],
                    listName: "My List",
                    name: "MyFieldInternalName"
                },
                value: "Default Value"
            });
        });
    }
}
```
#### TypeScript
```tsx
import { SPTypes } "gd-sprest";
import { Fabric, Field, ListForm } from "gd-sprest-js";

export const MyField = () => {
    // Get the target element
    let el = document.querySelector("#myfield");
    if(el) {
        // Render a loading dialog
        Fabric.Spinner({
            el,
            text: "Loading the field..."
        });

        // Get the list information
        (new ListInfo({ listName: "My List" })).then(info => {
            // Render the field to the element
            Field({
                el,
                controlMode: SPTypes.ControlMode.Display,
                fieldInfo: {
                    field: info.fields["MyFieldInternalName"],
                    listName: "My List",
                    name: "MyFieldInternalName"
                },
                value: "Default Value"
            });
        });
    }
}
```