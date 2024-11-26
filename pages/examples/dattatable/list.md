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
| One of these properties **must** be set. |
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
| __Filtering__ |
