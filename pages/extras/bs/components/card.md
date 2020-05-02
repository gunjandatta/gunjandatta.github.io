---
layout: bs
title: "Card"
category: bs
permalink: /extras/bs/card
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/cards">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/accordion">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the card',
            'Components.Card({',
            '\tel: app,',
            '\tbody: [',
            '\t\t{',
            '\t\t\ttitle: "Card Title",',
            '\t\t\ttext: "This is the card contents.",',
            '\t\t\tactions: [',
            '\t\t\t\t{',
            '\t\t\t\t\ttext: "Card Action",',
            '\t\t\t\t\tbuttonType: Components.ButtonTypes.Primary',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>