---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Card](https://getbootstrap.com/docs/4.1/components/cards)

#### Example:

<div id="card"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the card
var el = document.querySelector("#card");
var card = Components.Card({
    el: el,
    body: [
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
    body: [
    ]
});
```

### Web Component

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-card body='[
    {
        "title": "Card Title",
        "text": "This is the card contents.",
        "actions": [
            { "text": "Card Action", "buttonType": 7 }
        ]
    }
]'></bs-card>
```

<bs-card body='[
    {
        "title": "Card Title",
        "text": "This is the card contents.",
        "actions": [
            { "text": "Card Action", "buttonType": 7 }
        ]
    }
]'></bs-card>

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
| el | _HTMLElement_ | The element to render the panel to. |
| imgBottom | | |
| imgTop | | |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a card exists
        var card = document.querySelector("#card");
        if(card) {
            // Render the card
            $REST.Components.Card({
                el: card,
                body: [
                    {
                        "title": "Card Title",
                        "text": "This is the card contents.",
                        "actions": [
                            { "text": "Card Action", "buttonType": 7 }
                        ]
                    }
                ]
            });
        }
    });
</script>