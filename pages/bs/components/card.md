---
layout: bs
title: "Card"
category: bs
permalink: /bs/components/card/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/cards">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/modules/components_components.html#{{ page.title }}">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/sprest-bs/interfaces/components_components.I{{ page.title }}Props.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the card
let el = document.querySelector("#card");
let card = Components.Card({
    el: el,
    body: [
        {
            title: "Card Title",
            text: "This is the card contents.",
            actions: [
                {
                    text: "Card Action",
                    buttonType: $REST.Components.ButtonTypes.Primary
                }
            ]
        }
    ]
});
```

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