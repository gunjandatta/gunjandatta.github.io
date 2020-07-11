---
layout: bs
title: "List Group"
category: bs
permalink: /extras/bs/components/listgroup/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/list-group">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_listgroup_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_listgroup_d_.ilistgroupprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the listGroup
let el = document.querySelector("#listGroup");
let listGroup = Components.listGroup({
    el: el,
    colWidth: 4,
    isTabs: true,
    items: [
        { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
        { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },
        { tabName: "Tab 3", content: "This is the content for tab 3." },
        { tabName: "Tab 4", content: "This is the content for tab 4." },
        { tabName: "Tab 5", content: "This is the content for tab 5." }
    ]
});
```

### React

```tsx
import * as React from "react";
import { Components, ListGroup } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <ListGroup
                colWidth={4}
                isTabs={true}
                items={[
                    { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
                    { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: Components.BadgeTypes.Primary } },
                    { tabName: "Tab 3", content: "This is the content for tab 3." },
                    { tabName: "Tab 4", content: "This is the content for tab 4." },
                    { tabName: "Tab 5", content: "This is the content for tab 5." }
                ]}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <ListGroup colWidth="4" isTabs="true" v-bind:items="listItems" />
</template>

<script>
import { ListGroup } from "gd-sprest-bs-vue";
export default {
    components: { ListGroup },
    data: {
        listItems: [
            { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
            { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: Components.BadgeTypes.Primary } },
            { tabName: "Tab 3", content: "This is the content for tab 3." },
            { tabName: "Tab 4", content: "This is the content for tab 4." },
            { tabName: "Tab 5", content: "This is the content for tab 5." }
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
            '// Create the list group',
            'Components.ListGroup({',
            '\tel: app,',
            '\tcolWidth: 4,',
            '\tisTabs: true,',
            '\titems: [',
            '\t\t{ tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },',
            '\t\t{ tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },',
            '\t\t{ tabName: "Tab 3", content: "This is the content for tab 3." },',
            '\t\t{ tabName: "Tab 4", content: "This is the content for tab 4." },',
            '\t\t{ tabName: "Tab 5", content: "This is the content for tab 5." }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>