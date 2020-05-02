---
layout: bs
title: "Progress Group"
category: bs
permalink: /extras/bs/progressgroup
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/progress/#multiple-bars">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_progressgroup_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the progress group bar',
            'Components.ProgressGroup({',
            '\tel: app,',
            '\tprogressbars: [',
            '\t\t{',
            '\t\t\tsize: 25,',
            '\t\t\tisStriped: true,',
            '\t\t\tlabel: "25%"',
            '\t\t},',
            '\t\t{',
            '\t\t\tsize: 50,',
            '\t\t\tisAnimated: true,',
            '\t\t\tisStriped: true,',
            '\t\t\tlabel: "50%"',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>