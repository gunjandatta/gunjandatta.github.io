---
layout: archive
title: "Card"
category: bs
permalink: /extras/bs/webcomponents/card/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/cards)

<div id="cardDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the card
var el = document.querySelector("#card");
var card = Components.Card({
    el: el,
    className: "w-25",
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

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the card
let el = document.querySelector("#card");
let card = Components.Card({
    el: el,
    className: "w-25",
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

### Web Component

<bs-card>
    // Return the card properties
    return {
        className: "w-25",
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
    }
</bs-card>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-card>
    // Return the card properties
    return {
        className: "w-25",
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
    }
</bs-card>
```

### References

```
Card(props:ICardProps):ICard
```

#### ICard

| Name | Returns | Description |
| --- | --- | --- |
| dispose | void | Destroys an element's card. |
| el | Element | The jquery element. |

#### ICardProps

| Name | Type | Description |
| --- | --- | --- |
| body | | |
| className | _string_ | The class name to apply to card. |
| footer | | |
| header | | |
| el | _HTMLElement_ | The element to render the card to. |
| imgBottom | | |
| imgTop | | |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a card exists
        var card = document.querySelector("#cardDemo");
        if(card) {
            // Render the card
            $REST.Components.Card({
                className: "w-25",
                el: card,
                body: [
                    {
                        "title": "Card Title",
                        "text": "This is the card contents.",
                        "actions": [
                            { "text": "Card Action", "buttonType": $REST.Components.ButtonTypes.Primary }
                        ]
                    }
                ]
            });
        }
    });
</script>