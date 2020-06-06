---
layout: bs
title: "Modal"
category: bs
permalink: /extras/bs/components/modal/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/modal">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_modal_d_.html">Code Documentation</a>
    </div>
</div>

#### React

```tsx
import * as React from "react";
import { Button, Components, Modal } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <div>
                <Button
                    target="#bsModalDemo"
                    text="Show Modal"
                    toggle="modal"
                />
                <Modal
                    id="bsModalDemo"
                    title="Modal Demo"
                    body={<p>This is the body of the modal</p>}
                />
            </div>
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
            '// Create the button',
            'Components.Button({',
            '\tel: app,',
            '\ttarget: "#bsModalDemo",',
            '\ttext: "Show Modal",',
            '\ttoggle: "modal"',
            '});',
            '',
            '// Create the modal',
            'var modal = Components.Modal({',
            '\tel: app,',
            '\tid: "bsModalDemo",',
            '\ttitle: "Modal Demo",',
            '\tbody: "This is the body of the modal."',
            '});',
            '',
            '// Modals require some styling',
            'modal.el.style.margin = "0";',
            'modal.el.style.position = "relative";'
        ].join('\n'));
    });
</script>