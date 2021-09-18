---
layout: bs
title: "Checkbox Group"
category: bs
permalink: /bs/components/checkboxgroup/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/forms/#checkboxes-and-radios">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#CheckboxGroup">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.ICheckboxGroupProps.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the buttonGroup
let el = document.querySelector("#cbGroup");
let cbGroup = Components.CheckboxGroup({
    el: el,
    items: [
        { label: "Option 1" },
        { label: "Option 2" },
        { label: "Option 3" }
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
            '// Create the checkbox group',
            'Components.CheckboxGroup({',
            '\tel: app,',
            '\tmulti: false,',
            '\ttype: Components.CheckboxGroupTypes.Switch,',
            '\titems: [',
            '\t\t{ label: "Option 1" },',
            '\t\t{ label: "Option 2", isSelected: true },',
            '\t\t{ label: "Option 3" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>