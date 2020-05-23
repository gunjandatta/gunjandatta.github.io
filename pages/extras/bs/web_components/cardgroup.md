---
title: "Card Group"
category: bs-wc
permalink: /extras/bs/components/webcomponents/cardgroup/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/card/#card-styles)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-card-group>
    // Return the card group properties
    return {
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
    }
</bs-card-group>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-card-group>
    // Return the card group properties
    return {
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
    }
</bs-card-group>
```