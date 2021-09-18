---
layout: bs
title: "Button Group"
category: bs
permalink: /bs/components/buttongroup/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/button-group">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.IButtonGroup.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the buttonGroup
let el = document.querySelector("#buttonGroup");
let buttonGroup = Components.ButtonGroup({
    el: el,
    buttonType: $REST.Components.ButtonTypes.Primary,
    buttons: [
        { text: "Left" },
        { text: "Middle" },
        { text: "Right" }
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
            '// Create the button group',
            'Components.ButtonGroup({',
            '\tel: app,',
            '\tbuttonType: Components.ButtonTypes.Primary,',
            '\tbuttons: [',
            '\t\t{ text: "Left", onClick: function() { alert("Left button was clicked."); } },',
            '\t\t{ text: "Middle", onClick: function() { alert("Middle button was clicked."); } },',
            '\t\t{ text: "Right", onClick: function() { alert("Right button was clicked."); } }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>