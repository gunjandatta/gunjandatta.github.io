---
layout: default
---
<div class="page-info" markdown="1">

[Back](/js/fabric)
## [Dialog](https://dev.office.com/fabric-js/Components/Dialog/Dialog.html)

</div>

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the panel to. |
| actions | _Array&lt;IButtonProps&gt;_ | The dialog actions. |
| content | _string_ |  The dialog content. |
| isBlocking | _boolean_ |  True for blocking dialogs. |
| isLargeHeader | _boolean |  True for dialogs with large headers. |
| isMultiLine | _boolean_ |  True for multi-line dialogs. |
| showCloseButton | _boolean_ |  True to show the close button. |
| subText | _string_ |  The dialog sub text. |
| title | _string_ |  The dialog title. |

### IDialog Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric component. |
| getActions() | Returns the actions container. |
| getContent() | Returns the content container. |
| getTitle() | Returns the title container. |

### Fabric Dialog Interface

| Name | Type/Description |
| --- | --- |
| \_actionButtonElements | The action button elements. |
| \_closeButtonElement | The close button element. |
| \_dialog | The dialog element. |
| close() | Hides the dialog. |
| open() | Shows the dialog. |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the template
var el = document.querySelector("#dlg");
el.innerHTML = "<div></div><div></div>";

// Render the dialog
var dlg = $REST.JS.Fabric.Dialog({
    content: "<p>This is the dialog content.</p>",
    el: el.children[0],
    title: "My Dialog"
});

// Render the button
$REST.JS.Fabric.Button({
    el: el.children[1],
    text: "Show Dialog",
    onClick: function() {
        // Display the dialog
        dlg.get().open();
    }
});
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Create the template
var el = document.querySelector("#dlg");
el.innerHTML = "<div></div><div></div>";

// Render the dialog
var dlg = Fabric.Dialog({
    content: "<p>This is the dialog content.</p>",
    el: el.children[0],
    title: "My Dialog"
});

// Render the button
Fabric.Button({
    el: el.children[1],
    text: "Show Dialog",
    onClick: () => {
        // Display the dialog
        dlg.get().open();
    }
});
```