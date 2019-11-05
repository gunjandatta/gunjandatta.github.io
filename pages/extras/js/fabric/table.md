---
layout: archive
title: "Table"
category: js
permalink: /extras/js/fabric/table/
---
## [Documentation](https://dev.office.com/fabric-js/Components/Table/Table.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the table to. |
| columns | _Array&lt;string&gt;_ | The column labels. |
| isFixed | _boolean_ | True for fixed tables. |
| isSelectable | _boolean_ | True for selectable tables. |
| renderHeaderRow | _boolean_ | True to render a header row. |
| rows | _Array&lt;{ [key: string]: string }&gt;_ | The table rows. |

### Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric component. |
| getSelectedRows() | Returns the selected rows. |

### Fabric Interface

| Name | Type/Description |
| --- | --- |
| _container | _HTMLTableElement_ |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the table
var el = document.querySelector("#table");
$REST.JS.Fabric.Table({
    el: el,
    columns: ["Col1", "Col2", "Col3"],
    rows: [
        {
            Col1: "Value 1",
            Col2: "Value 2",
            Col3: "Value 3"
        },
        {
            Col1: "Value 4",
            Col2: "Value 5",
            Col3: "Value 6"
        },
        {
            Col1: "Value 7",
            Col2: "Value 8",
            Col3: "Value 9"
        }
    ]
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the table
var el = document.querySelector("#table");
Fabric.Table({
    el,
    columns: ["Col1", "Col2", "Col3"],
    rows: [
        {
            Col1: "Value 1",
            Col2: "Value 2",
            Col3: "Value 3"
        },
        {
            Col1: "Value 4",
            Col2: "Value 5",
            Col3: "Value 6"
        },
        {
            Col1: "Value 7",
            Col2: "Value 8",
            Col3: "Value 9"
        }
    ]
});
```