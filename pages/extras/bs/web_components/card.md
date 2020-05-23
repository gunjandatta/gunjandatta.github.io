---
title: "Card"
category: bs-wc
permalink: /extras/bs/components/webcomponents/card/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/cards)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
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
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
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