---
layout: bs
title: "Accordion"
category: bs
permalink: /extras/bs/components/accordion/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/collapse/#accordion-example">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_accordion_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_accordion_d_.iaccordionprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the accordion
let el = document.querySelector("#accordion");
let accordion = Components.Accordion({
    autoCollapse: true,
    el: el,
    id: "demoAccordion",
    items: [
        {
            btnProps: { text: "Item 1" },
            content: "This is the content for item 1."
        },
        {
            btnProps: { text: "Item 2" },
            content: "This is the content for item 2."
        },
        {
            btnProps: { text: "Item 3" },
            content: "This is the content for item 3."
        }
    ]
});
```

### React

```tsx
import * as React from "react";
import { Accordion } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Accordion
                autoCollapse={true}
                id="demoAccordion"
                items={[
                    { btnProps: { text: "Item 1" }, content: "This is the content for item 1." },
                    { btnProps: { text: "Item 2" }, content: "This is the content for item 2." },
                    { btnProps: { text: "Item 3" }, content: "This is the content for item 3." },
                ]}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <Accordion auto-collapse="true" id="demoAccordion" v-bind:items="demoItems" />
</template>

<script>
import { Accordion } from "gd-sprest-bs-vue";
export default {
    components: { Accordion },
    data() {
        return {
            demoItems: [
                { btnProps: { text: "Item 1" }, content: "This is the content for item 1." },
                { btnProps: { text: "Item 2" }, content: "This is the content for item 2." },
                { btnProps: { text: "Item 3" }, content: "This is the content for item 3." },
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
            '// Create the accordion',
            'Components.Accordion({',
            '\tel: app,',
            '\tautoCollapse: true,',
            '\tid: "demoAccordion",',
            '\titems: [',
            '\t\t{ btnProps: { text: "Item 1" }, content: "This is the content for item 1." },',
            '\t\t{ btnProps: { text: "Item 2" }, content: "This is the content for item 2." },',
            '\t\t{ btnProps: { text: "Item 3" }, content: "This is the content for item 3." },',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>