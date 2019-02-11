---
layout: page
---

## List Form

The list form class is designed to help with rendering custom list forms, including saving and getting advanced details for complex field types.

### Constructor

| Property | Type | Required | Default Value | Description |
| --- | --- | --- | --- | --- |
| cacheKey | _string_ | No | "" | The key to store the list information in session storage. |
| fields | _Array&lt;string&gt;_ | No | [] | An array of internal field names. If null, the default form fields are returned. |
| item | _IListItemQueryResult_ \| IListItemResult | No | null | The target list item reference. |
| itemId | _number_ | No | 0 | The item id to get as part of the request. |
| listName | _string_ | Yes | "" | The list name. |
| loadAttachments | _boolean_ | No | false | Flag to include the list item attachments as part of the request. |
| query | _ODataQuery_ | No | {} | The odata query used when querying for the item. |
| webUrl | _string_ | No | "" | The relative url containing the list. If blank, the current web is used. |

### Methods

| Name | Return Type | Description |
| --- | --- | --- |
| loadAttachments(_listInfo: IListFormProps_) | _PromiseLike&lt;Array&lt;Types.SP.IAttachment&gt;&gt;_ | Loads the item attachments. |
| refreshItem(_listInfo: IListFormResult_) | _PromiseLike&lt;IListFormResult&gt;_ | Refreshes the list item. |
| removeAttachments(_listInfo: IListFormProps, attachmentInfo: _Array&lt;Types.SP.IAttachment&gt;_) | _PromiseLike&lt;void&gt;_ | Removes the attachments. |
| saveAttachments(_listInfo: IListFormProps, attachmentInfo: Array&lt;IListFormAttachmentInfo&gt;_) | _PromiseLike&lt;Array&lt;Types.SP.IAttachment&gt;&gt;_ | Saves the attachments. |
| saveItem(_info: IListFormResult, formValues: any_) | _PromiseLike&lt;IListFormResult&gt;_ | Saves the list item. |

### IListFormAttachmentInfo

| Property | Type | Description |
| --- | --- | --- |
| data | _any_ | The file content. |
| name | _string_ | The name of the file. |

### IListFormResult

| Property | Type | Description |
| --- | --- | --- |
| attachments | _Array&lt;IAttachment&gt;_ | The list item attachments. |
| fields | _{ [key: string]: IFieldResult }_ | The list fields. |
| item | _IListItemQueryResult \| IListItemResult_ | The list item. |
| query | _ODataQuery_ | The odata query used when querying for the item. |
| list | _IListResult | The list. |