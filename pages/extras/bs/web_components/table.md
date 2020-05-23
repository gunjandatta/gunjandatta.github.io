---
title: "Table"
category: bs-wc
permalink: /extras/bs/components/webcomponents/table/
---
[Documentation](http://getbootstrap.com/docs/4.1/content/tables/)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
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