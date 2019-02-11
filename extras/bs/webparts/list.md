---
layout: extras
---
# Bootstrap

### List WebPart
The list webpart should be used when targeting a list as a datasource.

#### Configuration
The edit form includes a configurable web url textbox and list dropdown list. Additional form controls can be added to further customized.

#### [Examples](/examples/solutions)
Refer to the custom solutions for examples of creating custom webparts.

##### JavaScript
```js
var WebParts = require("gd-sprest-bs").WebParts;

// Create the webpart
WebParts.WPList({
    elementId: "my-wpList",
    cfgElementId: "my-wpList-cfg",
    onRenderItems: function(wpInfo, items) {
        // Render the display element
        wpInfo.el.innerHTML = [
            '<h1>List: ' + wpInfo.ListName + '</h1>',
            '<h5>List Items: ' + items.length + '</h5>'
        ].join('\n');
    }
});
```

##### TypeScript
```ts
import { WebParts } from "gd-sprest-bs";

// Create the webpart
WebParts.WebPart({
    elementId: "my-wpList",
    cfgElementId: "my-wpList-cfg",
    onRenderItems: (wpInfo, items) => {
        // Render the display element
        wpInfo.el.innerHTML = [
            '<h1>List: ' + wpInfo.ListName + '</h1>',
            '<h5>List Items: ' + items.length + '</h5>'
        ].join('\n');
    }
});
```

#### Properties

| Name | Type | Description |
| --- | --- | --- |
| camlQuery | _string_ | The caml query. |
| odataQuery | _Types.SP.ODataQuery_ | The odata query. |
| onExecutingCAMLQuery | _(wpInfo: IListInfo, caml: string) => string_ | The executing caml query event. |
| onExecutingODATAQuery | _(wpInfo: IListInfo, odata: Types.SP.ODataQuery) => Types.SP.ODataQuery_ | The executing odata query event. |
| onRenderItems | _(wpInfo: IListInfo, items: Array&lt;Types.SP.IListItemQueryResult \| Types.SP.IListItemResult&gt;) => void_ | The on render items event. |

#### Edit Form (IWPEditForm)

| Name | Type | Description |
| --- | --- | --- |
| listQuery | _Types.SP.ODataQuery_ | The odata list query. |
| onListChanged | _(wpInfo: IListInfo, list?: Types.SP.IListQueryResult \| Types.SP.IListResult) => Array&lt;Components.IFormControlProps&gt; \| PromiseLike&lt;Array&lt;Components.IFormControlProps&gt;&gt; \| void_ | Event triggered when the selected list changes. |
| onListsLoaded | _(wpInfo: IListInfo, lists?: Array&lt;Types.SP.IListQueryResult \| Types.SP.IListResult&gt;) => Array&lt;Types.SP.IListQueryResult \| Types.SP.IListResult&gt;_ | Event triggered when the lists are loaded. |
| onRenderForm | _(wpInfo: IListInfo, list?: Types.SP.IListQueryResult \| Types.SP.IListResult) => Array&lt;Components.IFormControlProps&gt; \| PromiseLike&lt;Array&lt;Components.IFormControlProps&gt;&gt; \| void_ | Event triggered when the form is being rendered. |

#### WebPart Configuration (IWPCfg)

| Name | Type | Description |
| --- | --- | --- |
| ListName | _string_ | The list name. |
| WebUrl | _string_ | The relative web url. |