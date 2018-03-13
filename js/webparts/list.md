---
layout: default
---
[Back](/js/webparts)
## List WebPart
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| camlQuery | _string_ | The CAML query to apply to the query for getting the list items. |
| cfgElementId | _string_ | The optional configuration element id |
| className | _string_ | The class name. |
| elementId | _string_ | The target element id to render the webpart to |
| editPanel | _IWebPartEditPanel_ | The edit panel. |
| helpProps | _{ title?: string, url: string }_ | The optional help link. |
| listQuery | _ODataQuery_ | The OData query to apply to the query for getting the list. |
| oData | _ODataQuery_ | The OData query to apply to the query for getting the list items. |
| onExecutingCAMLQuery | _(wpInfo: IWPListInfo, caml: string)_ | The render CAML query event executed before getting the list items. | 
| onExecutingODATAQuery | _(wpInfo: IWPListInfo, odata: ODataQuery)_ | The render CAML query event executed before getting the list items. |
| onPostRender | _(wpInfo: IWebPartInfo, , list?: IListQueryResult or IListResult)_ | The post render event. |
| onRenderDisplay | _(wpInfo: IWebPartInfo)_ | The render event triggered when the page is in 'Display' mode. |
| onRenderEdit | _(wpInfo: IWebPartInfo)_ | The render event triggered when the page is in 'Edit' mode. |
| onRenderItems | _(wpInfo: IWebPartInfo, items: Array&lt;IListItemQueryResult or IListItemResult&gt;)_ | The render event triggered after the items query executes. |
| onSave | _(cfg: IWPListCfg)_ | The save configuration event. |

#### WebPart Edit Panel

| Name | Type | Description |
| --- | --- | --- |
| listQuery | _ODataQuery_ | The OData query to apply to the query for getting the lists. |
| onListChanged | _(wpInfo: IWPListInfo, list?: IListQueryResult or IListResult)_ | The list changed event. |
| onListsRendering | _(wpInfo: IWPListInfo, lists?: Array&lt;IListQueryResult or IListResult&gt;) | The lists rendering event. |
| onRenderFooter | _(el:HTMLDivElement, wpInfo: IWPListInfo, list?: IListQueryResult or IListResult)_ | The render footer event. |
| onRenderHeader | _(el:HTMLDivElement, wpInfo: IWPListInfo, list?: IListQueryResult or IListResult)_ | The render header event. |
| onSave | _(wpCfg: IWPListCfg)_ | The save event. |

### Code Example
#### JavaScript
```js
var $REST = require("gd-sprest-js");

export const MyListWebPart = function(){
    // Create the webpart
    $REST.JS.WebParts.WPList({
        elementId: "wp-list",
        cfgElementId: "wp-list-cfg",
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
    // Create the list webpart
    WebParts.WPList({
        elementId: "wp-list",
        cfgElementId: "wp-list-cfg",
        onRenderItems: function(wpInfo, items) {
            // Render the webpart
        }
    });
}
```