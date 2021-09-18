---
layout: bs
title: "Alert"
category: bs
permalink: /bs/components/alert/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/alerts">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the alert
let el = document.querySelector("#alert");
let alert = Components.Alert({
    el: el,
    content: "This is an alert."
});
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the alert',
            'Components.Alert({',
            '\tel: app,',
            '\theader: "Demo",',
            '\tcontent: "This is an alert.",',
            '\tisDismissible: true,',
            '\ttype: Components.AlertTypes.Success',
            '});'
        ].join('\n'));
    });
</script>