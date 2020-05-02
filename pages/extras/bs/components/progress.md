---
layout: bs
title: "Progress"
category: bs
permalink: /extras/bs/progress
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/collapse/#progress">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_progress_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the progress bar',
            'Components.Progress({',
            '\tel: app,',
            '\tsize: 25,',
            '\tlabel: "25%"',
            '});'
        ].join('\n'));
    });
</script>