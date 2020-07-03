---
layout: bs
title: "Breadcrumb"
category: bs
permalink: /extras/bs/components/breadcrumb/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/breadcrumb">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_breadcrumb_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_breadcrumb_d_.ibreadcrumbprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the breadcrumb
let el = document.querySelector("#breadcrumb");
let breadcrumb = Components.Breadcrumb({
    el: el,
    items: [
        { text: "Root", href: "/" },
        { text: "Web 1", href: "/web" },
        { text: "Web 1-1", href: "/web/1" }
    ]
});
```

### React

```tsx
import * as React from "react";
import { Breadcrumb } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Breadcrumb
                items={[
                    { text: "Root", href: "/" },
                    { text: "Web 1", href: "/web" },
                    { text: "Web 1-1", href: "/web/1" },
                ]}
            />
        );
    }
}
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the breadcrumb',
            'Components.Breadcrumb({',
            '\tel: app,',
            '\titems: [',
            '\t\t{ text: "Root", href: "/" },',
            '\t\t{ text: "Web 1", href: "/web" },',
            '\t\t{ text: "Web 1-1", href: "/web/1" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>
