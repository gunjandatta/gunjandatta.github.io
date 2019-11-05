---
layout: archive
title: "Command Bar"
category: js
permalink: /extras/js/fabric/commandbar/
---
# Office Fabric-UI (JS)

## [Documentation](https://dev.office.com/fabric-js/Components/CommandBar/CommandBar.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the command bar to. |
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

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the command bar
var el = document.querySelector("#cmdbar");
$REST.JS.Fabric.CommandBar({
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

### TypeScript

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