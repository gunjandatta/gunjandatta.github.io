---
layout: default
---
<div class="page-info" markdown="1">

[Back](/js/components)
## List Form Field

</div>

The list form field component is used to load the appropriate field information to render a list form, based on the field type.
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

export const MyField = function(){
    // Get the target element
    let el = document.querySelector("#myfield");
    if(el) {
        // Render a loading dialog
        $REST.JS.Fabric.Spinner({
            el,
            text: "Loading the field..."
        });

        // Load my field
        (new $REST.JS.Components.ListFormField({ listName: "My List", name: "MyFieldInternalName" })).then(function(fieldInfo) {
            // Code goes here
        });
    }
}
```
#### TypeScript
```ts
import { Components } from "gd-sprest";

export const MyField = () => {
    // Get the target element
    let el = document.querySelector("#myfield");
    if(el) {
        // Render a loading dialog
        $REST.JS.Fabric.Spinner({
            el,
            text: "Loading the field..."
        });

        // Load my field
        (new Components.ListFormField({ listName: "My List", name: "MyFieldInternalName" })).then(fieldInfo => {
            // Code goes here
        });
    }
}
```