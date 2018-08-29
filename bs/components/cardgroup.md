---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Card Group](https://getbootstrap.com/docs/4.1/components/card/#card-styles)

#### Example:

<div id="cards"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the cardGroup
var el = document.querySelector("#cardGroup");
var cardGroup = Components.CardGroup({
    el: el,
    cards: [
        {
            body: [
                {
                    title: "Card 1",
                    text: "This is the first card."
                }
            ]
        },
        {
            body: [
                {
                    title: "Card 2",
                    text: "This is the second card."
                }
            ]
        },
        {
            body: [
                {
                    title: "Card 3",
                    text: "This is the third card."
                }
            ]
        }
    ]
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the cardGroup
let el = document.querySelector("#cardGroup");
let cardGroup = Components.CardGroup({
    el: el,
    cards: [
        {
            body: [
                {
                    title: "Card 1",
                    text: "This is the first card."
                }
            ]
        },
        {
            body: [
                {
                    title: "Card 2",
                    text: "This is the second card."
                }
            ]
        },
        {
            body: [
                {
                    title: "Card 3",
                    text: "This is the third card."
                }
            ]
        }
    ]
});
```

### Web Component

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-cardGroup cards='[
    {
        "body": [
            {
                "title": "Card 1",
                "text": "This is the first card."
            }
        ]
    },
    {
        "body": [
            {
                "title": "Card 2",
                "text": "This is the second card."
            }
        ]
    },
    {
        "body": [
            {
                "title": "Card 3",
                "text": "This is the third card."
            }
        ]
    }
]'></bs-cardGroup>
```

#### Example

<bs-cardGroup cards='[
    {
        "body": [
            {
                "title": "Card 1",
                "text": "This is the first card."
            }
        ]
    },
    {
        "body": [
            {
                "title": "Card 2",
                "text": "This is the second card."
            }
        ]
    },
    {
        "body": [
            {
                "title": "Card 3",
                "text": "This is the third card."
            }
        ]
    }
]'></bs-cardGroup>

### References

```
CardGroup(props:ICardGroupProps):ICardGroup
```

#### ICardGroup

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### ICardGroupProps

| Name | Type | Description |
| --- | --- | --- |
| cards | _string_ | The cards. |
| className | _string_ | The class name to apply to card group. |
| el | _HTMLElement_ | The element to render the card group to. |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if the cards exists
        var cards = document.querySelector("#cards");
        if(cards) {
            // Render the card group
            $REST.Components.CardGroup({
                el: cards,
                cards: [
                    {
                        body: [
                            {
                                title: "Card 1",
                                text: "This is the first card."
                            }
                        ]
                    },
                    {
                        body: [
                            {
                                title: "Card 2",
                                text: "This is the second card."
                            }
                        ]
                    },
                    {
                        body: [
                            {
                                title: "Card 3",
                                text: "This is the third card."
                            }
                        ]
                    }
                ]
            });
        }
    });
</script>