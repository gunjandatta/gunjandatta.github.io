---
layout: bs
title: "Navigation"
category: bs
permalink: /extras/bs/nav
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/navs">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_nav_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the navigation',
            'Components.Nav({',
            '\tel: app,',
            '\tisPills: true,',
            '\titems: [',
            '\t\t{ title: "Nav 1", isActive: true },',
            '\t\t{ title: "Nav 2" },',
            '\t\t{ title: "Nav 3" },',
            '\t\t{ title: "Nav 4" },',
            '\t\t{ title: "Nav 5" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>