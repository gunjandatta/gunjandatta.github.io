---
layout: bs
title: "Tooltip"
category: bs
permalink: /extras/bs/tooltip
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/tooltips">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_tooltip_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the tooltip',
            'Components.Tooltip({',
            '\tel: app,',
            '\ttext: "Tooltip",',
            '\toptions: {',
            '\t\thtml: true,',
            '\t\ttitle: "My Tooltip",',
            '\t}',
            '});'
        ].join('\n'));
    });
</script>