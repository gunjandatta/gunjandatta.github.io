---
layout: default
---
[Back](/js/fabric)
## [Link Field](https://dev.office.com/fabric-js/Components/Link/Link.html)
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| description | _string_ | The link description. |
| el | _HTMLElement_ | The element to render the panel to. |
| onChange | _(value: ILinkFieldValue)_ | The change event. |
| value | _ILinkFieldValue_ | The link value. |

#### Link Field Value

| Name | Type |
| --- | --- |
| Description | _string_ |
| Url | _string_ |

### Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the link element. |
| getFabricComponent() | Returns the fabric component. |
| getValue() | Returns the dropdown selected option(s). |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the link field
var el = document.querySelector("#link");
$REST.JS.Fabric.({
    el: el
});
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Create the link field
let el = document.querySelector("#link");
Fabric.({
    el
});
```