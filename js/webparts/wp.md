---
layout: default
---
[Back](/js/webparts)
## WebPart
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| cfgElementId | _string_ | The optional configuration element id |
| className | _string_ | The class name. |
| elementId | _string_ | The target element id to render the webpart to |
| editPanel | _IWebPartEditPanel_ | The edit panel. |
| helpProps | _{ title?: string, url: string }_ | The optional help link. |
| onPostRender | _(wpInfo: IWebPartInfo)_ | The post render event. |
| onRenderDisplay | _(wpInfo: IWebPartInfo)_ | The render event triggered when the page is in 'Display' mode. |
| onRenderEdit | _(wpInfo: IWebPartInfo)_ | The render event triggered when the page is in 'Edit' mode. |

### Code Example
#### JavaScript
```js
var $REST = require("gd-sprest-js");

export const MyWebPart = function(){
    // Create the webpart
    $REST.JS.WebParts.WebPart({
        elementId: "myElementId",
        onRenderDisplay: function(el, wpInfo) {
            // Render the webpart
            $REST.JS.Fabric.Button({
                el: el,
                text: "My Button",
                onClick: function() {
                    // Code goes here
                }
            });
        }
    });
}
```
#### TypeScript
```ts
import { Fabric, WebParts } from "gd-sprest";

export const MyWebPart = () => {
    // Create the webpart
    WebParts.WebPart({
        elementId: "myElementId",
        onRenderDisplay: (el, wpInfo) => {
            // Render the webpart
            Fabric.Button({
                el: el,
                text: "My Button",
                onClick: () => {
                    // Code goes here
                }
            });
        }
    });
}
```