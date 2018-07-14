---
layout: default
---
<div class="page-info" markdown="1">

[Back](/js/fabric)
## [Command Button](https://dev.office.com/fabric-js/Components/CommandButton/CommandButton.html)

</div>

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the panel to. |
| icon | _string_ | The button icon. |
| isAction | _boolean_ | True for action command buttons. |
| isActive | _boolean_ | True for active command buttons. |
| isDisabled | _boolean_ | True to disable the button. |
| isInline | _boolean_ | True for inline command buttons. |
| isPivot | _boolean_ | True for pivot command buttons. |
| isSplit | _boolean_ | True for split command buttons. |
| isTextOnly | _boolean_ | True for text only command buttons. |
| menu | _IContextualMenuProps_ | The contextual menu. |
| onClick | _(ev: HTMLButtonElement)_ | The click event. |
| text | _string_ | The button text. |

### ICommandButton Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric object. |

### Fabric Command Button Interface

| Name | Type/Description |
| --- | --- |
| \_container | The main container element. |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the command bar
var el = document.querySelector("#cmdbar");
$REST.JS.Fabric.CommandBar({
    el: el,
    mainCommands: [
        // Create the add command bar button
        {
            icon: "Add",
            text: "New Item",
            onClick: function() {
                // Code goes here
            }
        },
        // Create the filter command bar button
        {
            text: "Filter",
            onClick: function() {
                // Code goes here
            }
        },
    ]
});
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Create the command bar
let el = document.querySelector("#cmdbar");
Fabric.CommandBar({
    el,
    mainCommands: [
        {
            icon: "Add",
            text: "New Item",
            onClick: () => {
                // Code goes here
            }
        },
        {
            text: "Filter",
            onClick: () => {
                // Code goes here
            }
        },
    ]
});
```