---
layout: bs
title: "Toast"
category: bs
permalink: /bs/components/toast/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/toasts/">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the toast
let el = document.querySelector("#toast");
let spinner = Components.Toast({
    el: el,
    headerText: "Header",
    body: "This is the body of the toast.",
    mutedText: "2 seconds ago",
    options: { autohide: false }
});
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the toast',
            'Components.Toast({',
            '\tel: app,',
            '\theaderText: "Header",',
            '\tbody: "This is the body of the toast.",',
            '\tmutedText: "2 seconds ago",',
            '\toptions: { autohide: true }',
            '});'
        ].join('\n'));
    });
</script>