---
layout: bs
title: "Popover"
category: bs
permalink: /extras/bs/components/popover/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/popovers">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_popover_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_popover_d_.ipopoverprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the popover
let el = document.querySelector("#popover");
let popover = Components.Popover({
    el: el,
    isDismissible: true,
    btnProps: {
        text: "Popover Demo"
    },
    options: {
        container: "body",
        content: "This is the popover content.",
        title: "My Popover",
        trigger: "hover"
    }
});
```

### React

```tsx
import * as React from "react";
import { Popover } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Popover
                isDismissible={true}
                btnProps={{
                    text: "Popover Demo"
                }}
                options={{
                    container: "body",
                    content: "This is the popover content.",
                    title: "My Popover",
                    trigger: "hover"
                }}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <Popover isDismissible="true" v-bind:btnProps="btnProps" v-bind:options="options" />
</template>

<script>
import { Popover } from "gd-sprest-bs-vue";
export default {
    components: { Popover },
    data: {
        btnProps: {
            text: "Popover Demo"
        },
        options: {
            container: "body",
            content: "This is the popover content.",
            title: "My Popover",
            trigger: "hover"
        }
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
            '// Create the popover',
            'Components.Popover({',
            '\tel: app,',
            '\tisDismissible: true,',
            '\tbtnProps: {',
            '\t\ttext: "Popover Demo"',
            '\t},',
            '\toptions: {',
            '\t\tcontainer: "body",',
            '\t\tcontent: "This is the popover content.",',
            '\t\ttitle: "My Popover",',
            '\t\ttrigger: "hover"',
            '\t}',
            '});'
        ].join('\n'));
    });
</script>