---
layout: default
---
[Back](/js/components)
## List Form Field
The list form field component is used by the field component to render the appropriate element, based on the field type.
### Input Parameters (List Form Field Information)

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

### Methods

| Name | Parameters | Description |
| --- | --- | --- |
| create | _props: IListFormFieldInfo_ | Creates an instance of the list form field. |
| loadLookupData | _info: IListFormLookupFieldInfo, queryTop?: number_ | Load the lookup data. |
| loadMMSData | _info: IListFormMMSFieldInfo_ | Loads the taxonomy term data. |
| loadMMSValueField | _info: IListFormMMSFieldInfo_ | Loads the taxonomy hidden value field. |

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
```ts
```