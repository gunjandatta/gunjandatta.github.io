---
layout: default
---
[Back](/js/fabric)
## [Overlay](https://dev.office.com/fabric-js/Components/Overlay/Overlay.html)
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the panel to. |
| isDark | _boolean_ | True to create a dark overlay. |

### Overlay Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric component. |

### Fabric Overlay Interface

| Name | Type/Description |
| --- | --- |
| overlayElement | The overlay element. |
| hide() | Hides the overlay. |
| remove() | Removes the overlay. |
| show() | Shows the overlay. |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the overlay
var el = document.querySelector("#overlay");
$REST.JS.Fabric.Overlay({ el: el });
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Create the overlay
let el = document.querySelector("#overlay");
Fabric.Overlay({ el });
```