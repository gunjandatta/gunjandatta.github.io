---
layout: bs
title: "Table"
category: bs
permalink: /extras/bs/components/table/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/content/tables">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_table_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the table',
            'Components.Table({',
            '\tel: app,',
            '\tclassName: "table-sm is-striped",',
            '\tcolumns: [',
            '\t\t{ name: "a0", title: "Actions", isHidden: true },',
            '\t\t{ name: "a1", title: "Col 1" },',
            '\t\t{ name: "a2", title: "Col 2" },',
            '\t\t{ name: "a3", title: "Col 3" }',
            '\t],',
            '\trows: [',
            '\t\t{ a0: "1", a1: "1.1", a2: "1.2", a3: "1.3" },',
            '\t\t{ a0: "2", a1: "2.1", a2: "2.2", a3: "2.3" },',
            '\t\t{ a0: "3", a1: "3.1", a2: "3.2", a3: "3.3" },',
            '\t\t{ a0: "4", a1: "4.1", a2: "4.2", a3: "4.3" },',
            '\t\t{ a0: "5", a1: "5.1", a2: "5.2", a3: "5.3" },',
            '\t\t{ a0: "6", a1: "6.1", a2: "6.2", a3: "6.3" },',
            '\t\t{ a0: "7", a1: "7.1", a2: "7.2", a3: "7.3" },',
            '\t\t{ a0: "8", a1: "8.1", a2: "8.2", a3: "8.3" },',
            '\t\t{ a0: "9", a1: "9.1", a2: "9.2", a3: "9.3" }',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>