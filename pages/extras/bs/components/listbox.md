---
layout: bs
title: "List Box"
category: bs
permalink: /extras/bs/components/listbox/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_listbox_d_.html">Code Documentation</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";
```

### React

```tsx
import * as React from "react";
import { ListBox } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <ListBox
                label="Colors"
                placeholder="Search Colors"
                items={[
                    { text: "Red", value: "red" },
                    { text: "Blue", value: "blue" },
                    { text: "Green", value: "green" },
                    { text: "Purple", value: "purple" },
                    { text: "Brown", value: "brown" },
                    { text: "Yellow", value: "yellow" },
                    { text: "Orange", value: "orange" }
                ]}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <ListBox label="Colors" placeholder="Search Colors" v-bind:items="listItems" />
</template>

<script>
import { ListBox } from "gd-sprest-bs-vue";
export default {
    components: { ListBox },
    data() {
        return {
            listItems: [
                { text: "Red", value: "red" },
                { text: "Blue", value: "blue" },
                { text: "Green", value: "green" },
                { text: "Purple", value: "purple" },
                { text: "Brown", value: "brown" },
                { text: "Yellow", value: "yellow" },
                { text: "Orange", value: "orange" }
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
            '// Create the list box',
            'Components.ListBox({',
            '\tel: app,',
            '\tlabel: "Colors",',
            '\tplaceholder: "Search Colors",',
            '\titems: [',
            '\t\t{ text: "Red", value: "red" },',
            '\t\t{ text: "Blue", value: "blue" },',
            '\t\t{ text: "Green", value: "green" },',
            '\t\t{ text: "Purple", value: "purple" },',
            '\t\t{ text: "Brown", value: "brown" },',
            '\t\t{ text: "Yellow", value: "yellow" },',
            '\t\t{ text: "Orange", value: "orange" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>