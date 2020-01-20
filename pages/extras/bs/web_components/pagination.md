---
layout: archive
title: "Pagination"
category: bs-wc
permalink: /extras/bs/webcomponents/pagination/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/pagination)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-pagination number-of-pages="5">
    // Return the pagination properties
    return {
        onClick: function(index, ev) {
            // Log the index
            console.log("The page number selected is: " + index);
        }
    };
</bs-pagination>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-pagination number-of-pages="5">
    // Return the pagination properties
    return {
        onClick: function(index, ev) {
            // Log the index
            console.log("The page number selected is: " + index);
        }
    };
</bs-pagination>
```