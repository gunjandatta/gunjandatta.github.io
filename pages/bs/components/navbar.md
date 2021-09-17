---
layout: bs
title: "Navbar"
category: bs
permalink: /bs/components/navbar/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/navbar">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_navbar_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/interfaces/_components_navbar_d_.inavbarprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the navbar
let el = document.querySelector("#navbar");
let navbar = Components.Navbar({
    el: el,
    brand: "Navbar",
    searchBox: {
        onChange: (value) => {
            // Log the value
            console.log("The search value is: " + value);
        },
        onSearch: (value) => {
            // Log the value
            console.log("The search value is: " + value);
        }
    },
    items: [
        {
            text: "Home",
            isActive: true
        },
        {
            text: "Link"
        },
        {
            text: "Disabled Link",
            isDisabled: true
        },
        {
            text: "Dropdown Link",
            items: [
                { text: "Link 1" },
                { text: "Link 2" },
                { text: "Link 3" },
                { text: "Link 4" },
                { text: "Link 5" }
            ]
        }
    ]
});
```

### React

```tsx
import * as React from "react";
import { Navbar } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Navbar
                brand="Navbar"
                items={[
                    {
                        text: "Home",
                        isActive: true
                    },
                    {
                        text: "Link"
                    },
                    {
                        text: "Disabled Link",
                        isDisabled: true
                    },
                    {
                        text: "Dropdown Link",
                        items: [
                            { text: "Link 1" },
                            { text: "Link 2" },
                            { text: "Link 3" },
                            { text: "Link 4" },
                            { text: "Link 5" }
                        ]
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
    <Navbar brand="Navbar" v-bind:items="navItems" />
</template>

<script>
import { Navbar } from "gd-sprest-bs-vue";
export default {
    components: { Navbar },
    data() {
        return {
            navItems: [
                {
                    text: "Home",
                    isActive: true
                },
                {
                    text: "Link"
                },
                {
                    text: "Disabled Link",
                    isDisabled: true
                },
                {
                    text: "Dropdown Link",
                    items: [
                        { text: "Link 1" },
                        { text: "Link 2" },
                        { text: "Link 3" },
                        { text: "Link 4" },
                        { text: "Link 5" }
                    ]
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
            '// Create the navigation bar',
            'Components.Navbar({',
            '\tel: app,',
            '\tbrand: "Navbar",',
            '\titems: [',
            '\t\t{',
            '\t\t\ttext: "Home",',
            '\t\t\tisActive: true',
            '\t\t},',
            '\t\t{',
            '\t\t\ttext: "Link"',
            '\t\t},',
            '\t\t{',
            '\t\t\ttext: "Disabled Link",',
            '\t\t\tisDisabled: true',
            '\t\t},',
            '\t\t{',
            '\t\t\ttext: "Dropdown Link",',
            '\t\t\titems: [',
            '\t\t\t\t{ text: "Link 1" },',
            '\t\t\t\t{ text: "Link 2" },',
            '\t\t\t\t{ text: "Link 3" },',
            '\t\t\t\t{ text: "Link 4" },',
            '\t\t\t\t{ text: "Link 5" }',
            '\t\t\t]',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>