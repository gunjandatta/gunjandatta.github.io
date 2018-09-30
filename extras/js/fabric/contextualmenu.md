---
layout: default
---

## [Contextual Menu](https://dev.office.com/fabric-js/Components/ContextualMenu/ContextualMenu.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the contextual menu to. |
| items | _Array&lt;IContextualMenuItem&gt;_ | The menu items. |
| icon | _string_ | The button icon. |
| elTarget | _HTMLElement_ | The target element to associate the menu with. |
| text | _string_ | The button text. |

### IContextualMenuItem interface

| Name | Type | Description |
| --- | --- | --- |
| icon | _string_ | The button icon. |
| isDisabled | _boolean_ | True to disable the item. |
| isSelected | _boolean_ | True to render the item as selected. |
| onClick | _()_ | The item click event. |
| text | _string_ | The item text. |

### IContextualMenu Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric object. |

### Fabric Contextual Menu Interface

| Name | Type/Description |
| --- | --- |
| \_container | The main container element. |
| \_hostTarget | The host target element. |
| \_position | The contextual menu position. |
| \_host | The contextual host. |
| \_isOpen | Returns true, if the contextual menu is open. |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the menu
var el = document.querySelector("#elMenu");
var elTarget = document.querySelector("#elTarget");
$REST.JS.Fabric.ContextualMenu({
    el: el,
    elTarget: elTarget,
    items: [
        {
            icon: "New",
            text: "Add Item",
            onClick: function() {
                // Code goes here
            }
        }
    ]
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the menu
let el = document.querySelector("#elMenu");
let elTarget = document.querySelector("#elTarget");
Fabric.ContextualMenu({
    el,
    elTarget,
    items: [
        {
            icon: "New",
            text: "Add Item",
            onClick: () => {
                // Code goes here
            }
        }
    ]
});
```