---
title: "List Form"
category: js
permalink: /extras/js/components/listform/
---
The list form component will load the list information, and render the elements based on the input parameters. If no fields are specified, then the default content type is loaded to deteremine the field order.

### Input Parameters

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
| removeAttachments | _listInfo: IListFormProps, attachmentInfo: Array&lt;IAttachment&gt;_ | Method to remove attachments from an item. |
| renderDisplayForm | _props: IListFormDisplayProps_ | Method to render the display form template. |
| renderEditForm | _props: IListFormEditProps_ | Method to render the edit/new form. |
| renderFormTemplate | _props: IListFormDisplayProps_ | Method to render the form template. |
| saveAttachments | _listInfo: IListFormProps, attachmentInfo: Array&lt;IListFormAttachmentInfo&gt;_ | Method to save attachments to the item. |
| saveItem | _info: IListFormResult, formValues: any_ | Method to save the item. |
| showFileDialog | _info: IListFormResult_ | Method to show the file dialog. |

#### renderDisplayForm
##### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| el | _HtmlElement_ | The element to render the form to. |
| excludeFields | _Array&lt;string&gt;_ | The fields to exclude from the form. |
| includeFields |  _Array&lt;string&gt;_ | The fields to include in the form. |
| info | _IListFormResult_ | The list form information. |

##### List Form Display

| Name | Parameters | Description |
| --- | --- | --- |
| getFields | | Returns the form fields. |

#### renderEditForm
##### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| controlMode | _number_ | The form control mode. |
| el | _HtmlElement_ | The element to render the form to. |
| excludeFields | _Array&lt;string&gt;_ | The fields to exclude from the form. |
| includeFields |  _Array&lt;string&gt;_ | The fields to include in the form. |
| info | _IListFormResult_ | The list form information. |

##### List Form Edit

| Name | Parameters | Description |
| --- | --- | --- |
| getFields | | Returns the form fields. |
| getValues | | Returns the form values. |

#### List Result

| Name | Type | Description |
| --- | --- | --- |
| attachments | _Array&lt;IAttachment&gt;_ | The item attachments. |
| fields | _{ [key: string]: IFieldResult }_ | The form fields. |
| item | _IListItemQueryResult or IListItemResult_ | The list item. |
| query | _ODataQuery_ | The item query. |
| list | _IListResult_ | The list. |

### JavaScript

```js
var $REST = require("gd-sprest-js");

export const MyForm = function(){
    // Get the target element
    var el = document.querySelector("#myform");
    if(el) {
        // Render the form
        var newForm = $REST.JS.Components.ListForm({
            controlMode: $REST.SPTypes.ControlMode.New,
            el: el,
            listName: "My List"            
        });
    }
}
```

### TypeScript

```tsx
import { SPTypes } "gd-sprest";
import { ListForm } from "gd-sprest-js";

export const MyField = () => {
    // Get the target element
    let el = document.querySelector("#myform");
    if(el) {
        // Render the form
        ListForm({
            controlMode: SPTypes.ControlMode.New,
            el: el.children[0],
            listName: "My List"            
        });
    }
}
```