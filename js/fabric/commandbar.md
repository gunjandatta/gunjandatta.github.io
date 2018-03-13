---
layout: default
---
[Back](/js/fabric)
## [Command Bar](https://dev.office.com/fabric-js/Components/CommandBar/CommandBar.html)
### Input Properties

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the element. |
| mainCommands | _Array&lt;ICommandButtonProps&gt;_ | The main area commands. |
| sideCommands | _Array&lt;ICommandButtonProps&gt;_ | The side area commands. |

### ICommandBar Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric object. |

#### Fabric Command Bar Interface

| Name | Type/Description |
| --- | --- |
| \_container | The main container element. |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the button
var el = document.querySelector("#");
$REST.JS.Fabric.({
    el: el,
    mainCommands: [
        {
            icon: "Add",
            text: "New Item",
            onClick: function() {
                // Code goes here
            }
        },
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

// Create the button
let el = document.querySelector("#");
Fabric.Button({
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