---
layout: bs
title: "Alert"
category: bs
permalink: /extras/bs/components/alert/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/alerts">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_alert_d_.html">Code Documentation</a>
    </div>
</div>

#### React

```tsx
import * as React from "react";
import {  } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <
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
            '// Create the alert',
            'Components.Alert({',
            '\tel: app,',
            '\tcontent: "This is an alert."',
            '});'
        ].join('\n'));
    });
</script>