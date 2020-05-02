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
            '// Create the panel',
            'var panel = Components.Panel({',
            '\tel: app,',
            '\ttype: $REST.Components.PanelTypes.Large,',
            '\tmodalProps: {',
            '\t\tid: "bsPanelDemo",',
            '\t\ttitle: "Modal Demo",',
            '\t\tonRenderBody: function(el) {',
            '\t\t\t// Render the body',
            '\t\t\tel.innerHTML = "<p>This is the content of the panel</p>";',
            '\t\t}',
            '\t}',
            '});',
            '',
            '// Modals require some styling',
            '//panel.el.style.margin = "0";',
            '//panel.el.style.position = "relative";'
        ].join('\n'));
    });
</script>