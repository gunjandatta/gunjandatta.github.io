---
layout: bs
title: "Media List"
category: bs
permalink: /extras/bs/components/medialist/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/media-object/#media-list">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_medialist_d_.html">Code Documentation</a>
    </div>
</div>

### React

```tsx
import * as React from "react";
import { MediaList, IconTypes } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <MediaList
                items={[
                    {
                        icon: {
                            icon: IconTypes.BootstrapReboot,
                            className: "mr-3"
                        },
                        body: "<h5>Default Item</h5>This is the default media object."
                    },
                    {
                        icon: {
                            icon: IconTypes.BootstrapReboot,
                            className: "mr-3",
                            type: Components.MediaImageTypes.Top
                        },
                        body: "<h5>Top Aligned</h5>This is a media object."
                    },
                    {
                        icon: {
                            icon: IconTypes.BootstrapReboot,
                            className: "mr-3",
                            type: Components.MediaImageTypes.Center
                        },
                        body: "<h5>Center Aligned</h5>This is a media object."
                    },
                    {
                        icon: {
                            icon: IconTypes.BootstrapReboot,
                            className: "mr-3",
                            type: Components.MediaImageTypes.Bottom
                        },
                        body: "<h5>Bottom Aligned</h5>This is a media object."
                    },
                    {
                        icon: {
                            icon: IconTypes.BootstrapReboot,
                            className: "mr-3",
                            type: Components.MediaImageTypes.Right
                        },
                        body: "<h5>Right Aligned</h5>This is a media object."
                    }
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
            '// Create the media list',
            'Components.MediaList({',
            '\tel: app,',
            '\titems: [',
            '\t\t{',
            '\t\t\ticon: {',
            '\t\t\t\ticon: $REST.IconTypes.BootstrapReboot,',
            '\t\t\t\tclassName: "mr-3"',
            '\t\t\t},',
            '\t\t\tbody: "<h5>Default Item</h5>This is the default media object."',
            '\t\t},',
            '\t\t{',
            '\t\t\ticon: {',
            '\t\t\t\ticon: $REST.IconTypes.Bootstrap,',
            '\t\t\t\tclassName: "mr-3",',
            '\t\t\t\ttype: $REST.Components.MediaImageTypes.Top',
            '\t\t\t},',
            '\t\t\tbody: "<h5>Top Aligned Item</h5>This is the default media object."',
            '\t\t},',
            '\t\t{',
            '\t\t\ticon: {',
            '\t\t\t\ticon: $REST.IconTypes.BootstrapFill,',
            '\t\t\t\tclassName: "mr-3",',
            '\t\t\t\ttype: $REST.Components.MediaImageTypes.Center',
            '\t\t\t},',
            '\t\t\tbody: "<h5>Center Aligned Item</h5>This is the default media object."',
            '\t\t},',
            '\t\t{',
            '\t\t\ticon: {',
            '\t\t\t\ticon: $REST.IconTypes.BootstrapReboot,',
            '\t\t\t\tclassName: "mr-3",',
            '\t\t\t\ttype: $REST.Components.MediaImageTypes.Bottom',
            '\t\t\t},',
            '\t\t\tbody: "<h5>Bottom Aligned Item</h5>This is the default media object."',
            '\t\t},',
            '\t\t{',
            '\t\t\ticon: {',
            '\t\t\t\ticon: $REST.IconTypes.Bootstrap,',
            '\t\t\t\tclassName: "mr-3"',
            '\t\t\t},',
            '\t\t\tbody: "<h5>Right Aligned Item</h5>This is the default media object.",',
            '\t\t\torder: $REST.Components.MediaOrderTypes.Right',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>