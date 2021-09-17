---
layout: bs
title: "Progress Group"
category: bs
permalink: /bs/components/progressgroup/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/progress/#multiple-bars">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_progressgroup_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_progressgroup_d_.iprogressgroupprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the progress group
let el = document.querySelector("#progressGroup");
let progressGroup = Components.ProgressGroup({
    el: el,
    progressbars: [
        {
            size: 25,
            isStriped: true,
            label: "25%"
        },
        {
            size: 50,
            isAnimated: true,
            isStriped: true,
            label: "50%"
        }
    ]
});
```

### React

```tsx
import * as React from "react";
import { ProgressGroup } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <ProgressGroup
                progressbars={[
                    {
                        size: 25,
                        isStriped: true,
                        label: "25%"
                    },
                    {
                        size: 50,
                        isAnimated: true,
                        isStriped: true,
                        label: "50%"
                    }
                ]}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <ProgressGroup v-bind:progressbars="progressbars" />
</template>

<script>
import { ProgressGroup } from "gd-sprest-bs-vue";
export default {
    components: { ProgressGroup },
    data() {
        return {
            progressbars: [
                {
                    size: 25,
                    isStriped: true,
                    label: "25%"
                },
                {
                    size: 50,
                    isAnimated: true,
                    isStriped: true,
                    label: "50%"
                }
            ]
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
            '// Create the progress group bar',
            'Components.ProgressGroup({',
            '\tel: app,',
            '\tprogressbars: [',
            '\t\t{',
            '\t\t\tsize: 25,',
            '\t\t\tisStriped: true,',
            '\t\t\tlabel: "25%"',
            '\t\t},',
            '\t\t{',
            '\t\t\tsize: 50,',
            '\t\t\tisAnimated: true,',
            '\t\t\tisStriped: true,',
            '\t\t\tlabel: "50%"',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>