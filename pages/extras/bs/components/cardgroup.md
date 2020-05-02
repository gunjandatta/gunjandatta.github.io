---
layout: bs
title: "Card Group"
category: bs
permalink: /extras/bs/cardgroup
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/card/#card-styles">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_cardgroup_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the card group',
            'Components.CardGroup({',
            '\tel: app,',
            '\tcards: [',
            '\t\t{',
            '\t\t\tbody: [',
            '\t\t\t\t{',
            '\t\t\t\t\ttitle: "Card 1",',
            '\t\t\t\t\ttext: "This is the first card."',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t},',
            '\t\t{',
            '\t\t\tbody: [',
            '\t\t\t\t{',
            '\t\t\t\t\ttitle: "Card 2",',
            '\t\t\t\t\ttext: "This is the second card."',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t},',
            '\t\t{',
            '\t\t\tbody: [',
            '\t\t\t\t{',
            '\t\t\t\t\ttitle: "Card 3",',
            '\t\t\t\t\ttext: "This is the third card."',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>
