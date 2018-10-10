---
layout: default
---

### Pagination
[Documentation](https://getbootstrap.com/docs/4.1/components/pagination)

<div id="paginationDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the pagination
var el = document.querySelector("#pagination");
var pagination = Components.Pagination({
    el: el,
    numberOfPages: 5,
    onClick: function(index, ev) {
        // Log the index
        console.log("The page number selected is: " + index);
    }
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the pagination
let el = document.querySelector("#pagination");
let pagination = Components.Pagination({
    el: el,
    numberOfPages: 5,
    onClick: (index, ev) => {
        // Log the index
        console.log("The page number selected is: " + index);
    }
});
```

### Web Component

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
function onPaginationClick(index, ev) {
    // Log the index
    console.log("The page number selected is: " + index);
}
</script>
<bs-pagination number-of-pages="5" onClick="onPaginationClick"></bs-pagination>
```

<bs-pagination number-of-pages="5" onClick="onPaginationClick"></bs-pagination>

### References

```
Pagination(props:IPaginationProps):IPagination
```

#### PaginationAlignment

| Name | Value |
| --- | --- |
| Center | 1 |
| Left | 2 |
| Right | 3 |

#### IPagination

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IPaginationProps

| Name | Type | Description |
| --- | --- | --- |
| alignment | _string_ | The alignment type. _Reference the PaginationAlignment_ |
| className | _string_ | The class name to apply to pagination. |
| el | _HTMLElement_ | The element to render the pagination to. |
| icon | _string_ | Renders an icon inplace of the "Next"/"Previous" text values. |
| isLarge | _boolean_ | Adds the 'pagination-lg' class name. |
| isSmall | _boolean_ | Adds the 'pagination-sm' class name. |
| label | _string_ | The aria-label property. |
| numberOfPages | _number_ | The pagination type. _Reference the PaginationTypes enumerator_ |
| onClick | _(index:number, ev:Event) => void_ | The pagination item click event. |

<style>
</style>
<script type="text/javascript">
    // The pagination click event
    function onPaginationClick(index, ev) {
        // Log the index
        console.log("The page number selected is: " + index);
    }

    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a pagination exists
        var pagination = document.querySelector("#paginationDemo");
        if(pagination) {
            // Render the pagination
            $REST.Components.Pagination({
                el: pagination,
                numberOfPages: 5,
                onClick: onPaginationClick
            });
        }
    });
</script>