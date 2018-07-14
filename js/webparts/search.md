---
layout: default
---
<div class="page-info" markdown="1">

[Back](/js/webparts)
## Search WebPart

</div>

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| camlQuery | _string_ | The CAML query to apply to the query for getting the list items. |
| cfgElementId | _string_ | The optional configuration element id |
| className | _string_ | The class name to apply to the target element. |
| elementId | _string_ | The target element id to render the webpart to |
| editPanel | _IWebPartEditPanel_ | The edit panel. |
| helpProps | _{ title?: string, url: string }_ | The optional help link. |
| listQuery | _ODataQuery_ | The OData query to apply to the query for getting the list. |
| oData | _ODataQuery_ | The OData query to apply to the query for getting the list items. |
| onExecutingCAMLQuery | _(wpInfo: IWPSearchInfo, caml: string) => string_ | The render CAML query event executed before getting the list items. | 
| onExecutingODATAQuery | _(wpInfo: IWPSearchInfo, odata: ODataQuery) => ODataQuery_ | The render CAML query event executed before getting the list items. |
| onPostRender | _(wpInfo: IWebPartInfo, , list?: IListQueryResult or IListResult) => void_ | The post render event. |
| onRenderDisplay | _(wpInfo: IWebPartInfo) => any_ | The render event triggered when the page is in 'Display' mode. |
| onRenderEdit | _(wpInfo: IWebPartInfo) => any_ | The render event triggered when the page is in 'Edit' mode. |
| onRenderItems | _(wpInfo: IWebPartInfo, items: Array&lt;IListItemQueryResult or IListItemResult&gt;) => any_ | The render event triggered after the items query executes. |
| onSave | _(cfg: IWPSearchCfg) => IWPSearchCfg_ | The save configuration event. |
| wpClassName | string | The class name to apply to the div element containing the webpartid property. |

#### WebPart Edit Panel

| Name | Type | Description |
| --- | --- | --- |
| listQuery | _ODataQuery_ | The OData query to apply to the query for getting the lists. |
| onListChanged | _(wpInfo: IWPSearchInfo, list?: IListQueryResult or IListResult)_ | The list changed event. |
| onListsRendering | _(wpInfo: IWPSearchInfo, lists?: Array&lt;IListQueryResult or IListResult&gt;)_ | The lists rendering event. |
| onRenderFooter | _(el:HTMLDivElement, wpInfo: IWPSearchInfo, list?: IListQueryResult or IListResult)_ | The render footer event. |
| onRenderHeader | _(el:HTMLDivElement, wpInfo: IWPSearchInfo, list?: IListQueryResult or IListResult)_ | The render header event. |
| onSave | _(wpCfg: IWPSearchCfg)_ | The save event. |

### Code Example
#### JavaScript
```js
var $REST = require("gd-sprest-js");

export const MySearchWebPart = function(){
    // Create the search webpart
    $REST.JS.WebParts.WPSearch({
        elementId: "wp-list",
        cfgElementId: "wp-list-cfg",
        wpClassName: "fabric",
        onRenderItems: function(wpInfo, items) {
            // Render the webpart
        }
    });
}
```
#### TypeScript
```ts
import { Fabric, WebParts } from "gd-sprest";

export const MyListWebPart = function(){
    // Create the search webpart
    WebParts.WPSearch({
        elementId: "wp-list",
        cfgElementId: "wp-list-cfg",
        wpClassName: "fabric",
        onRenderItems: function(wpInfo, items) {
            // Render the webpart
        }
    });
}
```