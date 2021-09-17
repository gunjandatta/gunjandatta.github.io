---
layout: bs
title: "Jumbotron"
category: bs
permalink: /bs/components/jumbotron/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/jumbotron">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the jumbotron
let el = document.querySelector("#jumbotron");
let jumbotron = Components.Jumbotron({
    el: el,
    title: "My Jumbotron",
    lead: "This is a jumbotron"
});
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the jumbotron',
            'Components.Jumbotron({',
            '\tel: app,',
            '\ttitle: "My Jumbotron",',
            '\tlead: "This is a jumbotron"',
            '});'
        ].join('\n'));
    });
</script>