---
layout: bs
title: "Popover"
category: bs
permalink: /bs/components/popover/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/popovers">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the popover
let el = document.querySelector("#popover");
let popover = Components.Popover({
    el: el,
    isDismissible: true,
    btnProps: {
        text: "Popover Demo"
    },
    options: {
        content: "This is the popover content.",
        title: "My Popover",
        trigger: "hover"
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
            '// Create the popover content',
            'var elContent = document.createElement("div");',
            'elContent.classList.add("m-2");',
            'elContent.innerHTML = "This is the popover content.";\n',
            '// Create the popover',
            'Components.Popover({',
            '\tel: app,',
            '\ttitle: "My Popover",',
            '\tbtnProps: {',
            '\t\ttext: "Popover Demo"',
            '\t},',
            '\toptions: {',
            '\t\tcontent: elContent,',
            '\t\ttrigger: "focus"',
            '\t}',
            '});'
        ].join('\n'));
    });
</script>