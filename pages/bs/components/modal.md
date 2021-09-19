---
layout: bs
title: "Modal"
category: bs
permalink: /bs/components/modal/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/5.1/components/modal">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the button
Components.Button({
    el: document.querySelector("#modalDemo"),
    target: "#bsModalDemo",
    text: "Show Modal",
    toggle: "modal"
});
 * 
// Create the modal
let el = document.querySelector("#modalDemo");
let modal = Components.Modal({
    el: el,
    id: "bsModalDemo",
    title: "Modal Demo",
    body: "This is the body of the modal."
});
```

### Code Playground

<div id="playground" class="bs"></div>
<style>
    /* Fix for bs4 conflict */
    #modalDemo {
        margin-left: inherit;
        margin-top: inherit;
        background: inherit;
    }
</style>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Modal elements should be added to the body',
            'var elModal = document.querySelector("#modal-demo");',
            'if(elModal === null) {',
            '\telModal = document.createElement("div");',
            '\telModal.id = "modal-demo";',
            '\tdocument.body.appendChild(elModal);',
            '}',
            '',
            '// Create the modal',
            'var modal = Components.Modal({',
            '\tel: elModal,',
            '\tid: "modalDemo",',
            '\ttitle: "Modal Demo",',
            '\ttype: Components.ModalTypes.Small,',
            '\tonRenderBody: function(el) { el.innerHTML = "This is the body of the modal."; },',
            '\tonRenderFooter: function(el) { el.innerHTML = "This is the footer of the modal."; }',
            '});',
            '',
            '// Create the button',
            'Components.Button({',
            '\tel: app,',
            '\ttoggleObj: modal,',
            '\ttext: "Show Modal",',
            '\ttype: Components.ButtonTypes.OutlinePrimary',
            '});',
        ].join('\n'));
    });
</script>