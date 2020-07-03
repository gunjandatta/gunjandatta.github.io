---
layout: bs
title: "Card"
category: bs
permalink: /extras/bs/components/card/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/cards">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_card_d_.html">Code Documentation</a>
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

### React

```tsx
import * as React from "react";
import { Card, Components } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Card
                body={[
                    {
                        title: "Card Title",
                        text: "This is the card contents.",
                        actions: [
                            text: "Card Action",
                            buttonType: Components.ButtonTypes.Primary
                        ]
                    }
                ]}
            />
        );
    }
}
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