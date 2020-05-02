---
layout: bs
title: "Breadcrumb"
category: bs
permalink: /docs/sprest-bs/modules/_components_breadcrumb_d_.html
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/breadcrumbs">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_accordion_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the breadcrumb',
            'Components.Breadcrumb({',
            '\tel: app,',
            '\titems: [',
            '\t\t{ text: "Root", href: "/" },',
            '\t\t{ text: "Web 1", href: "/web" },',
            '\t\t{ text: "Web 1-1", href: "/web/1" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>
