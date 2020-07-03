---
layout: bs
title: "Checkbox Group"
category: bs
permalink: /extras/bs/components/checkboxgroup/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_checkboxgroup_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_checkboxgroup_d_.icheckboxgroupprops.html">Properties</a>
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

### React

```tsx
import * as React from "react";
import { CheckboxGroup } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <CheckboxGroup
                items={[
                    { label: "Option 1" },
                    { label: "Option 2" },
                    { label: "Option 3" }
                ]}
            />
        );
    }
}
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
            '\titems: [',
            '\t\t{ label: "Option 1" },',
            '\t\t{ label: "Option 2" },',
            '\t\t{ label: "Option 3" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>