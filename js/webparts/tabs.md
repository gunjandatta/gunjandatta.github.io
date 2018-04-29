---
layout: default
---
[Back](/js/webparts)
## WebPart Tabs
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| cfgElementId | _string_ | The optional configuration element id |
| className | _string_ | The class name. |
| elementId | _string_ | The target element id to render the webpart to |
| editPanel | _IWebPartEditPanel_ | The edit panel. |
| helpProps | _{ title?: string, url: string }_ | The optional help link. |
| isLarge | _boolean_ | True to make the tabs large. |
| isTabs | _boolean_ | True to render the tabs as "blocks" vs "underlined". |
| type | number | The tab type. |
| onPostRender | _(wpInfo: IWebPartInfo, ...args)_ | The post render event. |
| onRenderDisplay | _(wpInfo: IWebPartInfo)_ | The render event triggered when the page is in 'Display' mode. |
| onRenderEdit | _(wpInfo: IWebPartInfo)_ | The render event triggered when the page is in 'Edit' mode. |

### Code Example
#### JavaScript
```js
var $REST = require("gd-sprest-js");

export const MyWebPartTabs = function(){
    // Create the webpart tabs
    $REST.JS.WPTabs.WebPart({
        elementId: "myTabs",
        wpClassName: "fabric"
    });
}
```
#### TypeScript
```ts
import { Fabric, WebParts } from "gd-sprest";

export const MyWebPartTabs = () => {
    // Create the webpart tabs
    WebParts.WPTabs({
        elementId: "myTabs",
        wpClassName: "fabric"
    });
}
```