---
layout: bs
title: "List Box"
category: bs
permalink: /extras/bs/listbox
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_listbox_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the list box',
            'Components.ListBox({',
            '\tel: app,',
            '\tlabel: "Colors",',
            '\tplaceholder: "Search Colors",',
            '\titems: [',
            '\t\t{ text: "Red", value: "red" },',
            '\t\t{ text: "Blue", value: "blue" },',
            '\t\t{ text: "Green", value: "green" },',
            '\t\t{ text: "Purple", value: "purple" },',
            '\t\t{ text: "Brown", value: "brown" },',
            '\t\t{ text: "Yellow", value: "yellow" },',
            '\t\t{ text: "Orange", value: "orange" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>