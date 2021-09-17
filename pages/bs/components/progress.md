---
layout: bs
title: "Progress"
category: bs
permalink: /bs/components/progress/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/collapse/#progress">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the progress
let el = document.querySelector("#progress");
let progress = Components.Progress({
    el: el,
    size: 25,
    label: "25%"
});
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the progress bar',
            'Components.Progress({',
            '\tel: app,',
            '\tsize: 25,',
            '\tlabel: "25%",',
            '\tisAnimated: true,',
            '\tisStriped: true',
            '});'
        ].join('\n'));
    });
</script>