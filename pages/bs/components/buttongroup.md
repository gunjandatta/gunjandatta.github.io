---
layout: bs
title: "Button Group"
category: bs
permalink: /bs/components/buttongroup/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/button-group">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_buttongroup_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_buttongroup_d_.ibuttongroupprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the buttonGroup
let el = document.querySelector("#buttonGroup");
let buttonGroup = Components.ButtonGroup({
    el: el,
    buttonType: $REST.Components.ButtonTypes.Primary,
    buttons: [
        { text: "Left" },
        { text: "Middle" },
        { text: "Right" }
    ]
});
```

### React

```tsx
import * as React from "react";
import { ButtonGroup, Components } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <ButtonGroup
                buttonType={Components.ButtonTypes.Primary}
                buttons={[
                    { text: "Left" },
                    { text: "Middle" },
                    { text: "Right" }
                ]}
            />
        );
    }
}
```

### VueJS

```vue
<template>
    <ButtonGroup v-bind:button-type="buttonType" v-bind:buttons="buttons" />
</template>

<script>
import { Components } from "gd-sprest-bs";
import { ButtonGroup } from "gd-sprest-bs-vue";
export default {
    components: { ButtonGroup },
    data() {
        return {
            buttonType: Components.ButtonTypes.Primary,
            buttons: [
                { text: "Left" },
                { text: "Middle" },
                { text: "Right" }
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
            '// Create the button group',
            'Components.ButtonGroup({',
            '\tel: app,',
            '\tbuttonType: Components.ButtonTypes.Primary,',
            '\tbuttons: [',
            '\t\t{ text: "Left" },',
            '\t\t{ text: "Middle" },',
            '\t\t{ text: "Right" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>