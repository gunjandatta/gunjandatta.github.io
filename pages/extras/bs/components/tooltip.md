---
layout: bs
title: "Tooltip"
category: bs
permalink: /extras/bs/components/tooltip/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/tooltips">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_tooltip_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_tooltip_d_.itooltipprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the tooltip
let el = document.querySelector("#tooltip");
let tooltip = Components.Tooltip({
    el: el,
    text: "Tooltip Demo"
    options: {
        html: true,
        title: "My Tooltip",
    }
});
```

### React

```tsx
import * as React from "react";
import { Tooltip } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Tooltip
                text="Tooltip"
                options={{
                    html: true,
                    title: "My Title"
                }}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <Tooltip text="Tooltip" v-bind:options="options" />
</template>

<script>
import { Tooltip } from "gd-sprest-bs-vue";
export default {
    components: { Tooltip },
    data() {
        return {
            options: {
                html: true,
                title: "My Title"
            }
        };
    }
}
</script>
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the tooltip',
            'Components.Tooltip({',
            '\tel: app,',
            '\ttext: "Tooltip",',
            '\toptions: {',
            '\t\thtml: true,',
            '\t\ttitle: "My Tooltip",',
            '\t}',
            '});'
        ].join('\n'));
    });
</script>