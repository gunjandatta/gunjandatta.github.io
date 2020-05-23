---
layout: bs
title: "List Group"
category: bs
permalink: /extras/bs/components/listgroup/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/list-group">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_listgroup_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the list group',
            'Components.ListGroup({',
            '\tel: app,',
            '\tcolWidth: 4,',
            '\tisTabs: true,',
            '\titems: [',
            '\t\t{ tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },',
            '\t\t{ tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },',
            '\t\t{ tabName: "Tab 3", content: "This is the content for tab 3." },',
            '\t\t{ tabName: "Tab 4", content: "This is the content for tab 4." },',
            '\t\t{ tabName: "Tab 5", content: "This is the content for tab 5." }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>