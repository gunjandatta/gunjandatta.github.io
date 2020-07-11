---
layout: bs
title: "Pagination"
category: bs
permalink: /extras/bs/components/pagination/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/pagination">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_pagination_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_pagination_d_.ipaginationprops.html">Properties</a>
    </div>
</div>

### TypeScript

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

### React

```tsx
import * as React from "react";
import { Pagination } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Pagination
                numberOfPages={5}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <Pagination numberOfPages="5" />
</template>

<script>
import { Pagination } from "gd-sprest-bs-vue";
export default {
    components: { Pagination }
}
</script>
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the pagination',
            'Components.Pagination({',
            '\tel: app,',
            '\tnumberOfPages: 5',
            '});'
        ].join('\n'));
    });
</script>