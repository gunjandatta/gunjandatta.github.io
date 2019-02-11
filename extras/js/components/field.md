---
layout: extras
---
# Office Fabric-UI (JS)

## Field

The field component will render the appropriate element type, based on the field type and control mode.

### Supported Types

The field components currently supported are:
- Attachments
- Boolean
- Choice
- Date
- Date/Time
- Lookup
- Managed Metadata
- Multi-Choice
- Multi-User
- Note (Plain Text)
- Number
- Text
- Url
- User

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name.
| controlMode | _number_ | The control mode of the form.
| disabled | _boolean_ | True to disable the field, when in edit/new mode.
| el | _HtmlElement_ | The element to render the field to.
| fieldInfo | _IListFormFieldInfo_ | The field information.
| onChange | _(value) => void_ | The change event.
| value | _any_ | The field value.

#### Field Information

| Name | Type | Description |
| --- | --- | --- |
| defaultValue | _any_ | The default value.
| field | _IFieldResult or IFieldQueryResult_ | The list field.
| listName | _string_ | The list name.
| name | _string_ | The internal name of the field.
| readOnly | _boolean_ | Flag indicating if the field is read-only.
| required | _boolean_ | True indicates a required field type.
| title | _string_ | The display name of the field.
| type | _number_ | The field type.
| typeAsString | _string_ | The field type as a string.
| webUrl | _string_ | The relative web url containing the list.

### JavaScript
```js
var $REST = require("gd-sprest-js");

export const MyField = function(){
    // Get the target element
    let el = document.querySelector("#myfield");
    if(el) {
        // Render a loading dialog
        $REST.JS.Fabric.Spinner({
            el,
            text: "Loading the field..."
        });

        // Get the list information
        $REST.JS.Components.ListInfo({ listName: "My List" }).then(info => {
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

### TypeScript

```tsx
import { SPTypes } "gd-sprest";
import { Fabric, Field, ListInfo } from "gd-sprest-js";

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
        ListInfo({ listName: "My List" }).then(info => {
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