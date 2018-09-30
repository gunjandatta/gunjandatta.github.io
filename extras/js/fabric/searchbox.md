---
layout: default
---

## [Search Box](https://dev.office.com/fabric-js/Components/SearchBox/SearchBox.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the search box to. |
| onClick | _(searchText: string, ev?: Event) => void_ | The search icon click event. |
| placeholder | The search box placeholder text. _(Default is Search)_ |
| type | _number_ | The search box type. |
| value | _string_ | The search box value. |

### Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric component. |
| getValue() | Returns the search text. |
| setValue(value: string) | Sets the search text. |

### Fabric Interface

| Name | Type/Description |
| --- | --- |
| _clearOnly | _boolean_ |
| _container | _HTMLDivElement_ |
| _searchBox | _HTMLDivElement_ |
| _searchBoxClearButton | _HTMLDivElement_ |
| _searchBoxExitButton | _HTMLDivElement_ |
| _searchBoxField | _HTMLInputElement_ |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the search box
var el = document.querySelector("#searchbox");
$REST.JS.Fabric.SearchBox({
    el: el,
    onClick: function(filterText) {
        // Code goes here
    }
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the search box
let el = document.querySelector("#searchbox");
Fabric.SearchBox({
    el,
    type: Fabric.SearchBoxTypes.Collapsed,
    onClick: (filterText) => {
        // Code goes here
    }
});
```