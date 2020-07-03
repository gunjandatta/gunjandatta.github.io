---
layout: bs
title: "Collapse"
category: bs
permalink: /extras/bs/components/collapse/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/collapse">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_collapse_d_.html">Code Documentation</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the button to toggle the collapse
let btn = Components.Button({
    el: document.querySelector("#btnCollapse"),
    target: "#demoCollapse",
    toggle: "collapse",
    text: "Collapse Demo"
});
 * 
// Create the collapse
let el = document.querySelector("#collapse");
let collapse = Components.Collapse({
    el: el,
     id: "demoCollapse",
    content: "This is the content to be collapsed."
});
```

### React

```tsx
import * as React from "react";
import { Button, Collapse } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <div>
                <Button
                    target="#demoCollapse"
                    toggle="collapse"
                    text="Collapse Demo"
                />
                <Collapse
                    id="demoCollapse"
                    content="This is the content to be collapsed."
                />
            </div>
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
            '// Create the button to toggle the collapse',
            'Components.Button({',
            '\tel: app,',
            '\ttarget: "#demoCollapse",',
            '\ttoggle: "collapse",',
            '\ttext: "Collapse Demo"',
            '});',
            '',
            '// Create the collapse',
            'Components.Collapse({',
            '\tel: app,',
            '\tid: "demoCollapse",',
            '\tcontent: "This is the content to be collapsed."',
            '});'
        ].join('\n'));
    });
</script>