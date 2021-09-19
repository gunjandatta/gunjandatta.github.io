---
layout: bs
title: "Offcanvas"
category: bs
permalink: /bs/components/offcanvas/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/offcanvas">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the offcanvas
let el = document.querySelector("#offcanvas");
let offcanvas = Components.Offcanvas({
    el: app,
    id: "offcanvasDemo",
    title: "Offcanvas Demo",
    body: "This is the body of the offcanvas.",
    type: Components.OffcanvasTypes.End
});

// Create the button
Components.Button({
    el: document.querySelector("#offcanvasDemo"),
    text: "Show Offcanvas",
    toggleObj: offcanvas
});
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Offcanvas elements should be added to the body',
            'var elOffcanvas = document.querySelector("#offcanvas-demo");',
            'if(elOffcanvas === null) {',
            '\telOffcanvas = document.createElement("div");',
            '\telOffcanvas.id = "offcanvas-demo";',
            '\tdocument.body.appendChild(elOffcanvas);',
            '}',
            '',
            '// Create the offcanvas',
            'var offcanvas = Components.Offcanvas({',
            '\tel: elOffcanvas,',
            '\tid: "offcanvasDemo",',
            '\ttitle: "Offcanvas Demo",',
            '\ttype: Components.OffcanvasTypes.End,',
            '\tonRenderBody: function(el) { el.innerHTML = "This is the body of the offcanvas."; }',
            '});',
            '',
            '// Create the button',
            'Components.Button({',
            '\tel: app,',
            '\ttoggleObj: offcanvas,',
            '\ttext: "Show Offcanvas",',
            '\ttype: Components.ButtonTypes.OutlinePrimary',
            '});',
       ].join('\n'));
    });
</script>