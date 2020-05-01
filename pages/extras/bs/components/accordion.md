---
layout: archive
title: "Accordion"
category: bs
permalink: /extras/bs/accordion
---

### Links

- [Bootstrap](https://getbootstrap.com/docs/4.4/components/collapse/#accordion-example)
- [Code Documentation](/docs/sprest-bs/modules/_components_accordion_d_.html)


### Code Playground

<style>
    #editor {
        min-height: 60vh;
        min-width: 40vw;
    }
</style>
<div id="playground" class="bs"></div>
<script src="/code/dist/code-editor.js"></script>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"));
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
    });
</script>