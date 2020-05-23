---
title: "Accordion"
category: bs-wc
permalink: /extras/bs/components/webcomponents/accordion/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/collapse/#accordion-example)
[Component](/extras/bs/components/accordion)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-accordion id="wcAccordionDemo">
    // Return the accordion properties
    return {
        items: [
            {
                "btnProps": { "text": "Item 1" },
                "content": "This is the content for item 1."
            },
            {
                "btnProps": { "text": "Item 2" },
                "content": "This is the content for item 2."
            },
            {
                "btnProps": { "text": "Item 3" },
                "content": "This is the content for item 3."
            }
        ]
    }
</bs-accordion>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-accordion id="wcAccordionDemo">
    // Return the accordion properties
    return {
        items: [
            {
                "btnProps": { "text": "Item 1" },
                "content": "This is the content for item 1."
            },
            {
                "btnProps": { "text": "Item 2" },
                "content": "This is the content for item 2."
            },
            {
                "btnProps": { "text": "Item 3" },
                "content": "This is the content for item 3."
            }
        ]
    }
</bs-accordion>
```