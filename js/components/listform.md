---
layout: default
---
[Back](/js/components)
## List Form
### Properties

| Name | Type | Description |
| --- | --- | --- |
| cacheKey | _string_ | If defined, the data will be cached to the session storage. |
| excludeFields | _Array&lt;string&gt;_ | The form fields to exclude. |
| fields | _IListItemQueryResult or IListItemResult_ | The list item. |
| itemId | _number_ | The item id. |
| listName | _string_ | The list name. |
| loadAttachments | _boolean_ | Flag to deteremine if we are loading attachments. |
| query | _ODataQuery_ | OData query used when loading an item. |
| webUrl | _string_ | The relative web url containing the list. |

### Methods

| Name | Parameters | Description |
| --- | --- | --- |
| create | _props: IListFormProps_ | Creates an instance of the list form. |
| loadAttachments | _listInfo: IListFormProps_ | Method to load the item attachments. |
| refreshItem | _listInfo: IListFormResult_ | Method to refresh the item. |
| removeAttachments | _listInfo: IListFormProps, attachmentInfo: Array&lt;Types.SP.IAttachment&gt;_ | Method to remove attachments from an item. |
| renderDisplayForm | _props: IListFormDisplayProps_ | Method to render the display form template. |
| renderEditForm | _props: IListFormEditProps_ | Method to render the edit/new form. |
| renderFormTemplate | _props: IListFormDisplayProps_ | Method to render the form template. |
| saveAttachments | _listInfo: IListFormProps, attachmentInfo: Array&lt;IListFormAttachmentInfo&gt;_ | Method to save attachments to the item. |
| saveItem | _info: IListFormResult, formValues: any_ | Method to save the item. |
| showFileDialog | _info: IListFormResult_ | Method to show the file dialog. |

#### List Result

| Name | Type | Description |
| --- | --- | --- |
| attachments | _Array&lt;Types.SP.IAttachment&gt;_ | The item attachments. |
| fields | _{ [key: string]: Types.SP.IFieldResult }_ | The form fields. |
| item | _Types.SP.IListItemQueryResult or Types.SP.IListItemResult_ | The list item. |
| query | _Types.SP.ODataQuery_ | The item query. |
| list | _Types.SP.IListResult | The list. |

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
            text: "Loading the list information..."
        });

        // Get the list information
        (new $REST.JS.Components.ListInfo({ listName: "My List" })).then(info => {
            // Code goes here
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
            text: "Loading the list information..."
        });

        // Get the list information
        (new ListInfo({ listName: "My List" })).then(info => {
            // Code goes here
        });
    }
}
```