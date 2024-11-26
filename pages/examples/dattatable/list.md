---
title: "List"
category: dattatable
permalink: /examples/dattatable/list/
---
The list component can be used to load a list on any site. It will contain the list properties, content types, items and views. The [list form](list-form) component has been integrated into this component.

### Constructor

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| __Filtering__ |
| camlQuery | string | No | Optional CAML query that can be used to filter the items. |
| itemQuery | [IODataQuery](/dev/odata/) | No | The REST OData  |
| viewName | string | No | |
| __Referenced List__ |
| Either the list id or name property **must** be set. |
| listId | string | Yes | The guid id for the list. |
| listName | string | Yes | The title of the list. |
| webUrl | string | No | The absolute or relative url to the site containing the list. |
| __Events__ |
| onInitError | () => void | No | Triggered if there is an error loading the web, list or items. |
| onInitialized | () => void | No | Triggered when the list and items are loaded. |
| onItemsLoaded | (items) => void | No | Triggered when the items are loaded. |
| onLoadFormError | () => void | No | Triggered when there is an error loading the list form. |
| onRefreshItems | (items) => void | No | Triggered when the items are refreshed. |
| onResetForm | () => void | No | Triggered before the list form is rendered. |

## Properties

| Name | Type | Description |
| --- | --- | --- |
| __Properties__ |
| EditForm | [ListForm](list-form) | A reference to the list edit form. |
| EditForms | [ListForm](list-form)[] | A reference to the list edit forms, if using tabs. |
| ListContentTypes | ContentType[] | A reference to the list content types. |
| ListFields | Field[] | A reference to the list fields. |
| ListInfo | List | A reference to the list properties. |
| ListViews | View[] | A reference to the list views. |
| ViewForm | [ListForm](list-form) | A reference to the list view form. |
| ViewForms | [ListForm](list-form)[] | A reference to the list view forms, if using tabs. |
| __Methods__ |
| createItem | (values: object) => Promise&lt;ListItem&gt; | Method to create a new item in the list. |
| deleteItem | (itemId: number) => Promise&lt;void&gt; | Method to delete an item in the list. |
| editForm | (props) => void | Method to display an edit form. |
| getChanges | (itemId: number, defaultFields: string[]) => PromiseLike&lt;any&gt; | Method to get a list item's version history. |
| getField | (name:string) => Field | Method to get a list field by it's internal or display name. |
| getFieldById | (id:string) => Field | Method to get a list field by it's id. |
| getItem | (itemId: number) => ListItem | Method to get a list item by it's id. |
| newForm | (props) => void | Method to display a new form. |
| refresh | (query: [IODataQuery](/dev/odata/)) => PromiseLike&lt;ListItem[]&gt; | Method to refresh the list items. |
| refreshItem | (itemId: number, query: [IODataQuery](/dev/odata/)) => PromiseLike&lt;ListItem&gt; | Method to refresh a list item. |
| save | (bypassValidation?: boolean) => PromiseLike&lt;ListItem&gt; | Method to save trigger the save event for a new/edit form. |
| updateItem | (itemId: number, values: any) => PromiseLike&lt;ListItem&gt; | Method to update an existing list item. |
| viewForm | (props) => void | Method to display a view form. |
