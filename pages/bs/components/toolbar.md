---
layout: bs
title: "Toolbar"
category: bs
permalink: /bs/components/toolbar/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/button-group/#button-toolbar">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the toolbar
let el = document.querySelector("#toolbar");
let spinner = Components.Toolbar({
    el: el,
    spacing: 3,
    items: [
        { buttons: [{ text: "Button 1" }] },
        { buttons: [{ text: "Button 2" }] },
        { buttons: [{ text: "Button 3" }] },
        { buttons: [{ text: "Button 4" }] },
        { buttons: [{ text: "Button 5" }] }
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
            '// Create the toolbar',
            'Components.Toolbar({',
            '\tel: app,',
            '\tspacing: 3,',
            '\titems: [',
            '\t\t{ buttons: [{ text: "Button 1" }] },',
            '\t\t{ buttons: [{ text: "Button 2" }] },',
            '\t\t{ buttons: [{ text: "Button 3" }] },',
            '\t\t{ buttons: [{ text: "Button 4" }] },',
            '\t\t{ buttons: [{ text: "Button 5" }] }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>