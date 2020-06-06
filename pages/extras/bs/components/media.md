---
layout: bs
title: "Media Object"
category: bs
permalink: /extras/bs/components/media/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/media-object">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_media_d_.html">Code Documentation</a>
    </div>
</div>

### React

```tsx
import * as React from "react";
import { Media, IconTypes } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Media
                icon={{
                    icon: IconTypes.BootstrapReboot,
                    className: "mr-3"
                }}
                body={
                    <div>
                        <h5>Media Object</h5>
                        <p>This is an example of a media object</p>
                    </div>
                }
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
            '// Create the media',
            'Components.Media({',
            '\tel: app,',
            '\ticon: {',
            '\t\ticon: $REST.IconTypes.BootstrapReboot,',
            '\t\tclassName: "mr-3"',
            '\t},',
            '\tbody: [',
            '\t\t"<h5>Media Object Example</h5>",',
            '\t\t"This is an example of a media object."',
            '\t].join("\\n")',
            '});'
        ].join('\n'));
    });
</script>