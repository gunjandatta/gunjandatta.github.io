---
layout: bs
title: "Dropdown"
category: bs
permalink: /extras/bs/components/dropdown/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/dropdowns">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_dropdown_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_dropdown_d_.idropdownprops.html">Properties</a>
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

### React

```tsx
import * as React from "react";
import { Dropdown } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Dropdown
                label="Select a Choice"
                items={[
                    { text: "Choice 1", value: 1 },
                    { text: "Choice 2", value: 2 },
                    { text: "Choice 3", value: 3 },
                    { text: "Choice 4", value: 4 },
                    { text: "Choice 5", value: 5 }
                ]}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <Dropdown label="Select a Choice" v-bind:items="ddlItems" />
</template>

<script>
import { Dropdown } from "gd-sprest-bs-vue";
export default {
    components: { Dropdown },
    data: {
        ddlItems: [
            { text: "Choice 1", value: 1 },
            { text: "Choice 2", value: 2 },
            { text: "Choice 3", value: 3 },
            { text: "Choice 4", value: 4 },
            { text: "Choice 5", value: 5 }
        ]
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