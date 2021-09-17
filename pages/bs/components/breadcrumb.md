---
layout: bs
title: "Breadcrumb"
category: bs
permalink: /bs/components/breadcrumb/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/breadcrumb">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the breadcrumb
let el = document.querySelector("#breadcrumb");
let breadcrumb = Components.Breadcrumb({
    el: el,
    items: [
        { text: "Root", href: "/" },
        { text: "Web 1", href: "/web" },
        { text: "Web 1-1", href: "/web/1" }
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
            '// Create the breadcrumb',
            'Components.Breadcrumb({',
            '\tel: app,',
            '\titems: [',
            '\t\t{ text: "Root", href: "/" },',
            '\t\t{ text: "Web 1", href: "/web" },',
            '\t\t{ text: "Web 1-1", href: "/web/1" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>
