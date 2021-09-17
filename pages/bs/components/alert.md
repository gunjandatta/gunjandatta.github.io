---
layout: bs
title: "Alert"
category: bs
permalink: /bs/components/alert/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/alerts">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_alert_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_alert_d_.ialertprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the alert
let el = document.querySelector("#alert");
let alert = Components.Alert({
    el: el,
    content: "This is an alert."
});
```

### React

```tsx
import * as React from "react";
import { Alert } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Alert
                content="This is an alert."
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <Alert content="This is an alert." />
</template>

<script>
import { Alert } from "gd-sprest-bs-vue";
export default {
    components: { Alert }
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
            '// Create the alert',
            'Components.Alert({',
            '\tel: app,',
            '\tcontent: "This is an alert."',
            '});'
        ].join('\n'));
    });
</script>