---
layout: bs
title: "Navbar"
category: bs
permalink: /extras/bs/components/navbar/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/navbar">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_navbar_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the navigation bar',
            'Components.Navbar({',
            '\tel: app,',
            '\tbrand: "Navbar",',
            '\titems: [',
            '\t\t{',
            '\t\t\ttext: "Home",',
            '\t\t\tisActive: true',
            '\t\t},',
            '\t\t{',
            '\t\t\ttext: "Link"',
            '\t\t},',
            '\t\t{',
            '\t\t\ttext: "Disabled Link",',
            '\t\t\tisDisabled: true',
            '\t\t},',
            '\t\t{',
            '\t\t\ttext: "Dropdown Link",',
            '\t\t\titems: [',
            '\t\t\t\t{ text: "Link 1" },',
            '\t\t\t\t{ text: "Link 2" },',
            '\t\t\t\t{ text: "Link 3" },',
            '\t\t\t\t{ text: "Link 4" },',
            '\t\t\t\t{ text: "Link 5" }',
            '\t\t\t]',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>