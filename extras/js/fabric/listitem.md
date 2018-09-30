---
layout: default
---

## [List Item](https://dev.office.com/fabric-js/Components/ListItem/ListItem.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| actions | _string_ | The list item actions. |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the list item to. |
| isDocument | _boolean_ | True for document types. |
| isImage | _boolean_ | True for image types. |
| isSelectable | _boolean_ | True to make the item selectable. |
| isSelected | _boolean_ | True to make the item selected. |
| isUnread | _boolean_ | True to make the item unread. |
| isUnseen | _boolean_ | True to make the item unseen. |
| metaText | _string_ | The meta text. |
| primaryText | _string_ | The primary text. |
| secondaryText | _string_ | The secondary text. |
| selectionTarget | _string_ | The selection target. |
| tertiaryText | _string_ | The tertiary text. |
| value | _string_ | The list item value. |

### Fabric Interface

| Name | Type/Description |
| --- | --- |
| \_container | HTMLLIElement |
| \_toggleElement | HTMLDivElement |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Get the element
var el = document.querySelector("#list");
if(el) {
    // Create the list item elements
    var items = [];
    for(var i=0; i<10; i++) {
        // Create the element
        el.innerHTML += "<div></div>";
    }

    // Create the list items
    var items = [];
    for(var i=0; i<10; i++) {
        // Render an item
        $REST.JS.Fabric.ListItem({
            el: el.children[i],
            primaryText: "Item " + i,
            metaText: i
        }));
    }
}
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Get the element
let el = document.querySelector("#list");
if(el) {
    // Create the list item elements
    let items = [];
    for(let i=0; i<10; i++) {
        // Create the element
        el.innerHTML += "<div></div>";
    }

    // Create the list items
    let items = [];
    for(let i=0; i<10; i++) {
        // Render an item
        Fabric.ListItem({
            el: el.children[i],
            primaryText: "Item " + i,
            metaText: i
        }));
    }
}
```