---
layout: bs
title: "Progress"
category: bs
permalink: /bs/components/progress/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/collapse/#progress">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_progress_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_progress_d_.iprogressprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the progress
let el = document.querySelector("#progress");
let progress = Components.Progress({
    el: el,
    size: 25,
    label: "25%"
});
```

### React

```tsx
import * as React from "react";
import {  } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Progress
                size={25}
                label="25%"
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <Progress size="25" label="25%" />
</template>

<script>
import { Progress } from "gd-sprest-bs-vue";
export default {
    components: { Progress }
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
            '// Create the progress bar',
            'Components.Progress({',
            '\tel: app,',
            '\tsize: 25,',
            '\tlabel: "25%"',
            '});'
        ].join('\n'));
    });
</script>