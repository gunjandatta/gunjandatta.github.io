---
layout: bs
title: "Badge"
category: bs
permalink: /bs/components/badge/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/badge">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_badge_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_badge_d_.ibadgeprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the badge
let el = document.querySelector("#badge");
let badge = Components.Badge({
    el: el,
    content: "Badge"
});
```

### React

```tsx
import * as React from "react";
import { Badge } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Badge
                content="Badge"
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <Badge content="Badge" />
</template>

<script>
import { Badge } from "gd-sprest-bs-vue";
export default {
    components: { Badge }
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
            '// Create the badge',
            'Components.Badge({',
            '\tel: app,',
            '\tcontent: "Badge"',
            '});'
        ].join('\n'));
    });
</script>