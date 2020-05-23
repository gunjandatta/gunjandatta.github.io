---
layout: bs
title: "Dropdown"
category: bs
permalink: /extras/bs/components/dropdown/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/dropdowns">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_dropdown_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the dropdown',
            'Components.Dropdown({',
            '\tel: app,',
            '\tlabel: "Select a Choice",',
            '\titems: [',
            '\t\t{ text: "Choice 1", value: "1" },',
            '\t\t{ text: "Choice 2", value: "2" },',
            '\t\t{ text: "Choice 3", value: "3" },',
            '\t\t{ text: "Choice 4", value: "4" },',
            '\t\t{ text: "Choice 5", value: "5" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>