---
layout: archive
title: "Accordion"
category: bs
permalink: /extras/bs/accordion
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/collapse/#accordion-example">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_accordion_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<style>
    #editor {
        min-height: 40vh;
        min-width: 40vw;
    }
</style>
<div id="playground" class="bs"></div>
<script src="/code/dist/code-editor.js"></script>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true);
        // Update the default code
        editor.setValue([
            '// Create the accordion',
            'Components.Accordion({',
            '\tautoCollapse: true,',
            '\tel: app,',
            '\tid: "demoAccordion",',
            '\titems: [',
            '\t\t{ btnProps: { text: "Item 1" }, content: "This is the content for item 1." },',
            '\t\t{ btnProps: { text: "Item 2" }, content: "This is the content for item 2." },',
            '\t\t{ btnProps: { text: "Item 3" }, content: "This is the content for item 3." },',
            '\t]',
            '});'
        ].join('\n'));
        // Run the code
        document.querySelector("#btnRun > button").click();
    });
</script>