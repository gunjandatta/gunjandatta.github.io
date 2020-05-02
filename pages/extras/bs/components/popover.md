---
layout: bs
title: "Popover"
category: bs
permalink: /extras/bs/popover
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/popovers">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_popover_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the popover',
            'Components.Popover({',
            '\tel: app,',
            '\tisDismissible: true,',
            '\tbtnProps: {',
            '\t\ttext: "Popover Demo"',
            '\t},',
            '\toptions: {',
            '\t\tcontainer: "body",',
            '\t\tcontent: "This is the popover content.",',
            '\t\ttitle: "My Popover",',
            '\t\ttrigger: "hover"',
            '\t}',
            '});'
        ].join('\n'));
    });
</script>