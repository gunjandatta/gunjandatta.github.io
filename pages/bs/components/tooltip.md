---
layout: bs
title: "Tooltip"
category: bs
permalink: /bs/components/tooltip/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/tooltips">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the tooltip
let el = document.querySelector("#tooltip");
let tooltip = Components.Tooltip({
    el: el,
    text: "Tooltip Demo"
    options: {
        html: true,
        title: "My Tooltip",
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
            '// Create the tooltip',
            'Components.Tooltip({',
            '\tel: app,',
            '\tcontent: "This is the tooltip content.",',
            '\tplacement: Components.TooltipPlacements.Top,',
            '\ttheme: Components.TooltipTypes.LightBorder,',
            '\tbtnProps: {',
            '\t\ttext: "My Button",',
            '\t\ttype: Components.ButtonTypes.OutlineDark',
            '\t}',
            '});'
        ].join('\n'));
    });
</script>