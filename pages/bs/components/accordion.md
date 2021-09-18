---
layout: bs
title: "Accordion"
category: bs
permalink: /bs/components/accordion/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/collapse/#accordion-example">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the accordion
let el = document.querySelector("#accordion");
let accordion = Components.Accordion({
    autoCollapse: true,
    el: el,
    id: "demoAccordion",
    items: [
        {
            btnProps: { text: "Item 1" },
            content: "This is the content for item 1."
        },
        {
            btnProps: { text: "Item 2" },
            content: "This is the content for item 2."
        },
        {
            btnProps: { text: "Item 3" },
            content: "This is the content for item 3."
        }
    ]
});
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the accordion',
            'Components.Accordion({',
            '\tel: app,',
            '\tautoCollapse: true,',
            '\tid: "demoAccordion",',
            '\titems: [',
            '\t\t{ header: "Item 1", content: "This is the content for item 1.", showFl: true },',
            '\t\t{ header: "Item 2", content: "This is the content for item 2." },',
            '\t\t{ header: "Item 3", content: "This is the content for item 3." },',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>