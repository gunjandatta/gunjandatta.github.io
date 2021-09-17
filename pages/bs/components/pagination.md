---
layout: bs
title: "Pagination"
category: bs
permalink: /bs/components/pagination/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/pagination">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
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