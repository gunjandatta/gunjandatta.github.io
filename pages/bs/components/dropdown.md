---
layout: bs
title: "Dropdown"
category: bs
permalink: /bs/components/dropdown/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/dropdowns">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the dropdown
let el = document.querySelector("#dropdown");
let dropdown = Components.Dropdown({
    el: el,
    label: "Select a Choice",
    items: [
        { text: "Choice 1", value: "1" },
        { text: "Choice 2", value: "2" },
        { text: "Choice 3", value: "3" },
        { text: "Choice 4", value: "4" },
        { text: "Choice 5", value: "5" }
    ],
    onChange: (item, ev) => {
        console.log("The selected value is: " + item.text);
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
            '// Create the dropdown',
            'Components.Dropdown({',
            '\tel: app,',
            '\tlabel: "Select a Choice",',
            '\titems: [',
            '\t\t{ text: "Choice 1", value: "1" },',
            '\t\t{ text: "Choice 2", value: "2" },',
            '\t\t{ text: "Choice 3", value: "3" },',
            '\t\t{ text: "Choice 4", value: "4" },',
            '\t\t{ text: "Choice 5", value: "5" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>