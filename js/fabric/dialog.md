---
layout: default
---
[Back](/js/fabric)
## [Dialog](https://dev.office.com/fabric-js/Components/Dialog/Dialog.html)
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the panel to. |

/** The dialog actions. */
actions?: Array<IButtonProps>;

/** The dialog content. */
content?: string;

/** True for blocking dialogs. */
isBlocking?: boolean;

/** True for dialogs with large headers. */
isLargeHeader?: boolean;

/** True for multi-line dialogs. */
isMultiLine?: boolean;

/** True to show the close button. */
showCloseButton?: boolean;

/** The dialog sub text. */
subText?: string;

/** The dialog title. */
title?: string;

### Interface

| Name | Type/Description |
| --- | --- |

### Fabric Interface

| Name | Type/Description |
| --- | --- |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the 
var el = document.querySelector("#");
$REST.JS.Fabric.({
    el: el,
});
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Create the 
let el = document.querySelector("#");
Fabric.({
    el,
});
```