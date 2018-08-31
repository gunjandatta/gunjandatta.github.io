---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Pagination](https://getbootstrap.com/docs/4.1/components/pagination)

#### Example:

<div id="paginationDemo"></div>

### Code Examples

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

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
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

#### IPagination

| Name | Returns | Description |
| --- | --- | --- |
| cycle | _() => void_ | Cycles through the pagination items from left to right. |
| dispose | _() => void_ | Destroys an element’s tab. |
| el | Element | The jquery element. |
| next | _() => void_ | Cycles to the next item. |
| number | _(value:number) => void_ | Cycles the pagination to a particular frame. |
| pause | _() => void_ | Stops the pagination from cycling through items. |
| previous | _() => void_ | Cycles to the previous item. |

#### IPaginationItem

| Name | Returns | Description |
| --- | --- | --- |
| captions | _string_ | The item's captions. |
| className | _string_ | The class name to apply to the item. |
| content | _string_ | The item's content. |
| imageAlt | _string_ | The image image 'alt' property. |
| imageUrl | _string_ | Renders an image element. |
| isActive | _boolean_ | Adds the 'active' class. |

#### IPaginationOptions

| Name | Returns | Description |
| --- | --- | --- |
| interval | _number_ | The amount of time to delay between automatically cycling an item. |
| keyboard | _boolean_ | Whether the pagination should react to keyboard events. |
| pause | _string \| boolean_ | If set to "hover", pauses the cycling of the pagination on mouseenter and resumes the cycling of the pagination on mouseleave. If set to false, hovering over the pagination won't pause it. |
| ride | _string_ | Autoplays the pagination after the user manually cycles the first item. |
| wrap | _boolean_ | Whether the pagination should cycle continuously or have hard stops. |

#### IPaginationProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to pagination. |
| el | _HTMLElement_ | The element to render the pagination to. |
| enableControls | _string_ | The pagination content. |
| enableCrossfade | _string_ | The pagination header. |
| enableIndicators | _string_ | Renders the pagination as an anchor element instead of a span element. |
| id | _boolean_ | Adds the 'pagination-pill' class name. |
| items | _number_ | The pagination type. _Reference the PaginationTypes enumerator_ |
| options | _number_ | The pagination type. _Reference the PaginationTypes enumerator_ |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<style>
.pagination { max-width: 400px; }
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
                numberOfPages: 5
            });
        }
    });
</script>