---
layout: bs
title: "Input Group"
category: bs
permalink: /extras/bs/components/inputgroup/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/input-group">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_inputgroup_d_.html">Code Documentation</a>
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

### React

```tsx
import * as React from "react";
import { InputGroup } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <InputGroup
                label="My Name"
                value="First Last"
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
            '// Create the input group',
            'Components.InputGroup({',
            '\tel: app,',
            '\tlabel: "My Name:",',
            '\tvalue: "First Last"',
            '});'
        ].join('\n'));
    });
</script>