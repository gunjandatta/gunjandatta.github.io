---
layout: archive
title: "Table"
category: bs-wc
permalink: /extras/bs/webcomponents/table/
---
[Documentation](http://getbootstrap.com/docs/4.1/content/tables/)

<div id="demoTable"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the table
var el = document.querySelector("#table");
var table = Components.Table({
    el: el,
    className: "table-sm is-striped",
    columns: [
        { name: "a0", title: "Actions", isHidden: true },
        { name: "a1", title: "Col 1" },
        { name: "a2", title: "Col 2" },
        { name: "a3", title: "Col 3" }
    ],
    rows: [
        { a0: "1", a1: "1.1", a2: "1.2", a3: "1.3" },
        { a0: "2", a1: "2.1", a2: "2.2", a3: "2.3" },
        { a0: "3", a1: "3.1", a2: "3.2", a3: "3.3" },
        { a0: "4", a1: "4.1", a2: "4.2", a3: "4.3" },
        { a0: "5", a1: "5.1", a2: "5.2", a3: "5.3" },
        { a0: "6", a1: "6.1", a2: "6.2", a3: "6.3" },
        { a0: "7", a1: "7.1", a2: "7.2", a3: "7.3" },
        { a0: "8", a1: "8.1", a2: "8.2", a3: "8.3" },
        { a0: "9", a1: "9.1", a2: "9.2", a3: "9.3" }
    ]
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the table
let el = document.querySelector("#table");
let table = Components.Table({
    el: el,
    className: "table-sm is-striped",
    columns: [
        { name: "a0", title: "Actions", isHidden: true },
        { name: "a1", title: "Col 1" },
        { name: "a2", title: "Col 2" },
        { name: "a3", title: "Col 3" }
    ],
    rows: [
        { a0: "1", a1: "1.1", a2: "1.2", a3: "1.3" },
        { a0: "2", a1: "2.1", a2: "2.2", a3: "2.3" },
        { a0: "3", a1: "3.1", a2: "3.2", a3: "3.3" },
        { a0: "4", a1: "4.1", a2: "4.2", a3: "4.3" },
        { a0: "5", a1: "5.1", a2: "5.2", a3: "5.3" },
        { a0: "6", a1: "6.1", a2: "6.2", a3: "6.3" },
        { a0: "7", a1: "7.1", a2: "7.2", a3: "7.3" },
        { a0: "8", a1: "8.1", a2: "8.2", a3: "8.3" },
        { a0: "9", a1: "9.1", a2: "9.2", a3: "9.3" }
    ]
});
```

### Web Component

<bs-table>
    // Return the table properties
    return {
        className: "table-sm is-striped",
        columns: [
            { name: "a0", title: "Actions", isHidden: true },
            { name: "a1", title: "Col 1" },
            { name: "a2", title: "Col 2" },
            { name: "a3", title: "Col 3" }
        ],
        rows: [
            { a0: "1", a1: "1.1", a2: "1.2", a3: "1.3" },
            { a0: "2", a1: "2.1", a2: "2.2", a3: "2.3" },
            { a0: "3", a1: "3.1", a2: "3.2", a3: "3.3" },
            { a0: "4", a1: "4.1", a2: "4.2", a3: "4.3" },
            { a0: "5", a1: "5.1", a2: "5.2", a3: "5.3" },
            { a0: "6", a1: "6.1", a2: "6.2", a3: "6.3" },
            { a0: "7", a1: "7.1", a2: "7.2", a3: "7.3" },
            { a0: "8", a1: "8.1", a2: "8.2", a3: "8.3" },
            { a0: "9", a1: "9.1", a2: "9.2", a3: "9.3" }
        ]
    }
</bs-table>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-table>
    // Return the table properties
    return {
        className: "table-sm is-striped",
        columns: [
            { name: "a0", title: "Actions", isHidden: true },
            { name: "a1", title: "Col 1" },
            { name: "a2", title: "Col 2" },
            { name: "a3", title: "Col 3" }
        ],
        rows: [
            { a0: "1", a1: "1.1", a2: "1.2", a3: "1.3" },
            { a0: "2", a1: "2.1", a2: "2.2", a3: "2.3" },
            { a0: "3", a1: "3.1", a2: "3.2", a3: "3.3" },
            { a0: "4", a1: "4.1", a2: "4.2", a3: "4.3" },
            { a0: "5", a1: "5.1", a2: "5.2", a3: "5.3" },
            { a0: "6", a1: "6.1", a2: "6.2", a3: "6.3" },
            { a0: "7", a1: "7.1", a2: "7.2", a3: "7.3" },
            { a0: "8", a1: "8.1", a2: "8.2", a3: "8.3" },
            { a0: "9", a1: "9.1", a2: "9.2", a3: "9.3" }
        ]
    }
</bs-table>
```

### References

```
Table(props:ITableProps):ITable
```

#### ITable

| Name | Returns | Description |
| --- | --- | --- |
| addRows(rows:_Array<any>_) | _void_ | Renders the rows to the existing table. |
| el | _Element_ | The jquery element. |

#### ITableProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to button group. |
| columns | _Array&lt;ITableColumn&gt;_ | The table columns. |
| el | _HTMLElement_ | The element to render the button group to. |
| onClickCell | _(el: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void_ | The table row cell click event. |
| onClickHeader | _(el: HTMLTableHeaderCellElement, column?: ITableColumn) => void_ | The table header cell click event. |
| onRenderCell | _(el?: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void_ | The table row cell render event. |
| onRenderHeaderCell | _(el?: HTMLTableDataCellElement, column?: ITableColumn) => void_ | The header row cell render event. |
| onRenderHeaderRow | _(el?: HTMLTableRowElement) => void_ | The table header row render event. |
| onRenderRow | _(el?: HTMLTableRowElement, data?: any) => void_ | The table data row render event. |
| rows | _Array&lt;any&gt;_ | The table data. The value is based on the key matching a column's name property. |

#### ITableColumn

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to ```td``` data element. |
| data | _any_ | The data associated with the column. |
| enableSort | _boolean_ | True to sort the row elements, when clicking on the header cell. |
| isHidden | _boolean_ | True to hide the header row value for this column. The data will still be displayed. |
| name | _string_ | The column key value. _The row's key value will map to this property_. |
| onClickCell | _(el: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void_ | The table row cell click event. |
| onClickHeader | _(el: HTMLTableHeaderCellElement, column?: ITableColumn) => void_ | The table header cell click event. |
| onRenderCell | _(el?: HTMLTableDataCellElement, column?: ITableColumn, data?: any) => void_ | The table row cell render event. |
| onRenderHeaderCell | _(el?: HTMLTableDataCellElement, column?: ITableColumn) => void_ | The header row cell render event. |
| scope | _string_ | The scope attribute property for each ```td``` element. |
| title | _string_ | The html displayed in the ```th``` element. |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a checkbox group exists
        var table = document.querySelector("#demoTable");
        if(table) {
            // Render the table
            $REST.Components.Table({
                el: table,
                className: "table-sm is-striped",
                columns: [
                    { name: "a0", title: "Actions", isHidden: true },
                    { name: "a1", title: "Col 1" },
                    { name: "a2", title: "Col 2" },
                    { name: "a3", title: "Col 3" }
                ],
                rows: [
                    { a0: "1", a1: "1.1", a2: "1.2", a3: "1.3" },
                    { a0: "2", a1: "2.1", a2: "2.2", a3: "2.3" },
                    { a0: "3", a1: "3.1", a2: "3.2", a3: "3.3" },
                    { a0: "4", a1: "4.1", a2: "4.2", a3: "4.3" },
                    { a0: "5", a1: "5.1", a2: "5.2", a3: "5.3" },
                    { a0: "6", a1: "6.1", a2: "6.2", a3: "6.3" },
                    { a0: "7", a1: "7.1", a2: "7.2", a3: "7.3" },
                    { a0: "8", a1: "8.1", a2: "8.2", a3: "8.3" },
                    { a0: "9", a1: "9.1", a2: "9.2", a3: "9.3" }
                ]
            });
        }
    });
</script>