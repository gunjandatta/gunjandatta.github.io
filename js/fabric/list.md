---
layout: default
---
[Back](/js/fabric)
## [List](https://dev.office.com/fabric-js/Components/List/List.html)
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the panel to. |
| items | _Array&lt;[IListItemProps](listitem)&gt;_ | The list items. |
| onClick | _(ev: MouseEvent)_ | The item click event. |

### Fabric Interface

| Name | Type/Description |
| --- | --- |
| \_container | HTMLUListElement |
| \_listItemComponents | Array<IListItem> |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the list items
var items = [];
for(var i=0; i<10; i++) {
    // Add an item
    items.push({
        primaryText: "Item " + i,
        metaText: i
    });
}

// Create the list
var el = document.querySelector("#list");
$REST.JS.Fabric.List({
    el: el,
    items: items
});
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Create the list items
let items: Array<Fabric.Types.IListItemProps> = [];
for(let i=0; i<10; i++) {
    // Add an item
    items.push({
        primaryText: "Item " + i,
        metaText: i
    });
}

// Create the list
let el = document.querySelector("#list");
Fabric.List({
    el: el,
    items: items
});
```