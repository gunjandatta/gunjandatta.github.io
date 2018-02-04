---
layout: default
---
[Back](/helpers)
## List Form
The list form class is designed to handle the interactions with reading, updating and saving to a list.
### Class
#### Constructor

| Property | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| cacheKey | _string_ | No | "" | The key to store the list information in session storage. |
| fields | _Array<string>_ | No | [] | An array of internal field names. If null, the default form fields are returned. |
| item | _IListItemQueryResult_ \| IListItemResult | No | null | The target list item reference. |
| itemId | _number_ | No | 0 | The item id to get as part of the request. |
| listName | _string_ | Yes | "" | The list name. |
| loadAttachments | _boolean_ | No | false | Flag to include the list item attachments as part of the request. |
| query | _ODataQuery_ | No | {} | The odata query used when querying for the item. |
| webUrl | _string_ | No | "" | The relative url containing the list. If blank, the current web is used. |

#### Methods

| Name | Return Type | Description |
| --- | --- | --- |
| loadAttachments(listInfo: _IListFormProps_) | _PromiseLike<Array<Types.SP.IAttachment>>_ | Loads the item attachments. |
| refreshItem(listInfo: _IListFormResult_) | _PromiseLike<IListFormResult>_ | Refreshes the list item. |
| removeAttachments(listInfo: _IListFormProps_, attachmentInfo: _Array<Types.SP.IAttachment>_) | _PromiseLike<void>_ | Removes the attachments. |
| saveAttachments(listInfo: _IListFormProps_, attachmentInfo: _Array<IListFormAttachmentInfo>_) | _PromiseLike<Array<Types.SP.IAttachment>>_ | Saves the attachments. |
| saveItem(info: _IListFormResult_, formValues: _any_) | _PromiseLike<IListFormResult>_ | Saves the list item. |

#### IListFormAttachmentInfo

| Property | Type | Description |
| --- | --- | --- |
| data | _any_ | The file content. |
| name | _string_ | The name of the file. |

#### Interfaces
##### IListFormResult

| Property | Type | Description |
| --- | --- | --- |
| attachments | _Array<IAttachment>_ | The list item attachments. |
| fields | _{ [key: string]: IFieldResult }_ | The list fields. |
| item | _IListItemQueryResult \| IListItemResult_ | The list item. |
| query | _ODataQuery_ | The odata query used when querying for the item. |
| list | _IListResult | The list. |