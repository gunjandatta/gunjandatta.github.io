---
layout: bs
title: "Spinner"
category: bs
permalink: /bs/components/spinner/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/spinners/">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the spinner
let el = document.querySelector("#spinner");
let spinner = Components.Spinner({
    el: el,
    text: "Loading...",
    type: Components.SpinnerTypes.Danger
});
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the spinner',
            'Components.Spinner({',
            '\tel: app,',
            '\ttext: "Loading...",',
            '\ttype: Components.SpinnerTypes.Danger',
            '});'
        ].join('\n'));
    });
</script>