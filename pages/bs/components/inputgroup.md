---
layout: bs
title: "Input Group"
category: bs
permalink: /bs/components/inputgroup/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/input-group">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#InputGroup">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.IInputGroupProps.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the inputGroup
let el = document.querySelector("#inputGroup");
let inputGroup = Components.InputGroup({
    el: el,
    label: "My Name:",
    value: "First Last"
});
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the input group',
            'Components.InputGroup({',
            '\tel: app,',
            '\tlabel: "My Name:",',
            '\tvalue: "First Last"',
            '});'
        ].join('\n'));
    });
</script>