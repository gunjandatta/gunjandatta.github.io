---
layout: bs
title: "Panel"
category: bs
permalink: /extras/bs/panel
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_panel_d_.html">Code Documentation</a>
    </div>
</div>

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
            '\ttarget: "#bsPanelDemo",',
            '\ttext: "Show Panel",',
            '\ttoggle: "modal"',
            '});',
            '',
            '// Create the element to contain the panel',
            'var elPanel = document.createElement("div");',
            'document.body.appendChild(elPanel);',
            '',
            '// Create the panel',
            'var panel = Components.Panel({',
            '\tel: elPanel,',
            '\ttype: $REST.Components.PanelTypes.Large,',
            '\tmodalProps: {',
            '\t\tid: "bsPanelDemo",',
            '\t\ttitle: "Modal Demo",',
            '\t\tonClose: function() {',
            '\t\t\t// Remove the element',
            '\t\t\telPanel.remove();',
            '\t\t},',
            '\t\tonRenderBody: function(el) {',
            '\t\t\t// Render the body',
            '\t\t\tel.innerHTML = "<p>This is the content of the panel</p>";',
            '\t\t}',
            '\t},',
            '\tonRenderFooter: function(el) {',
            '\t\t',
            '\t\t// Create the button group',
            '\t\tComponents.ButtonGroup({',
            '\t\t\tel: el,',
            '\t\t\tbuttons: [',
            '\t\t\t\t{ text: "Cancel", type: Components.ButtonTypes.Danger, className: "mr-3" },',
            '\t\t\t\t{ text: "Submit", type: Components.ButtonTypes.Primary }',
            '\t\t\t]',
            '\t\t});'
            '\t}',
            '});',
            '',
            '// Modals require some styling',
            'panel.modal.el.style.margin = "0";'
        ].join('\n'));
    });
</script>