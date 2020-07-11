---
layout: bs
title: "Button"
category: bs
permalink: /extras/bs/components/button/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/buttons">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_button_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_button_d_.ibuttonprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";
```

### React

```tsx
import * as React from "react";
import { Button } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Button
                text="Demo"
                onClick={(btn, ev) => {
                    alert("The " + btn.text + " button was clicked.");
                }}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <Button text="Demo" v-bind:on-click="showAlert" />
</template>

<script>
import { Button } from "gd-sprest-bs-vue";
export default {
    components: { Button },
    methods: {
        showAlert(btn, ev) {
            alert("The " + btn.text + " button was clicked.");
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
            '// Create the button',
            'Components.Button({',
            '\tel: app,',
            '\ttext: "Button",',
            '\tonClick: (ev) => {',
            '\t\talert("The button was clicked.");',
            '\t}',
            '});'
        ].join('\n'));
    });
</script>