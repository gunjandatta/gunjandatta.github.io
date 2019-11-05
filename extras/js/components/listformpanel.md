---
layout: extras
---
# Office Fabric-UI (JS)

## List Form Panel

The list form panel component will render a list form within a panel, based on the input parameters. A save or edit button will be displayed, based on the control mode of the form.

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name. |
| controlMode | _number_ | The form control mode. |
| el | _HtmlElement_ | The element to render the list form panel to. |
| item | _any_ | The list form values. |
| panelIsBlocking | _boolean_ | True to make the panel blocking. |
| panelTitle | _string_ | The panel title. |
| panelType | _number_ | The panel type. |

### Methods

| Name | Parameters | Description |
| --- | --- | --- |
| getForm | | Returns a display or edit list form. |
| show | _controlMode: number_ | Displays the list form panel. |

### JavaScript
```js
var $REST = require("gd-sprest-js");

export const MyPanel = function() {
    // Get the target element
    var el = document.querySelector("#myform");
    if(el) {
        // Render the template
        el.innerHTML = "<div></div><div></div>";

        // Render the panel
        var newForm = $REST.JS.Components.ListFormPanel({
            el: el.children[0],
            listName: "My List"            
        });

        // Render a button
        $REST.JS.Fabric.Button({
            el: el.children[1],
            text: "New Item",
            onClick: () => {
                // Show the panel
                newForm.show();
            }
        })
    }
}
```

### TypeScript

```tsx
import { SPTypes } "gd-sprest";
import { Fabric, ListFormPanel } from "gd-sprest-js";

export const MyPanel = () => {
    // Get the target element
    let el = document.querySelector("#myform");
    if(el) {
        // Render the template
        el.innerHTML = "<div></div><div></div>";

        // Render the panel
        let newForm = ListFormPanel({
            el: el.children[0],
            listName: "My List"            
        });

        // Render a button
        Fabric.Button({
            el: el.children[1],
            text: "New Item",
            onClick: () => {
                // Show the form
                newForm.show(SPTypes.ControlMode.New);
            }
        });
    }
}
```