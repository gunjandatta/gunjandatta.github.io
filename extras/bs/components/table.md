---
layout: default
---

### Table
[Documentation](http://getbootstrap.com/docs/4.1/content/tables/)

<div id="table"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the table
var el = document.querySelector("#table");
var table = Components.Table({
    el: el,
    className: "is-striped",
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
    className: "is-striped",
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
        className: "is-striped",
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
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-table>
    // Return the table properties
    return {
        className: "is-striped",
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
| el | _Element_ | The jquery element. |
| getValue | _() => ICheckboxGroupItem \| Array&lt;ICheckboxGroupItem&gt;_ | Returns the selected items. |

#### ITableProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to button group. |
| colSize | _number_ | The size of the column. |
| el | _HTMLElement_ | The element to render the button group to. |
| hideLabel | _boolean_ | Flag to hide the label. |
| label | _string_ | The aria-label property value. |
| items | _ICheckboxGroupItem_ | The checkbox items. |
| multi | _boolean_ | Flag to allow multiple selections. |
| onChange | _(items:Array&lt;ICheckboxGroupItem&gt;) => void_ | Event triggered when a checkbox is clicked. |
| type | _string_ | The checkbox item type. |

#### ITableColumn

| Name | Type | Description |
| --- | --- | --- |
| data | _any_ | The data object associated with the item. |
| isDisabled | _boolean_ | Flag to disable the item. |
| isSelected | _boolean_ | Flag indicating the item is selected. |
| label | _string_ | The checkbox label. |
| name | _string_ | The name of the checkbox. |
| onChange | _(item) => void_ | The on change event. |

<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a checkbox group exists
        var table = document.querySelector("#table");
        if(table) {
            // Render the table
            $REST.Components.Table({
                el: table,
                className: "is-striped",
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