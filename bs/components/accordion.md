---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Accordion](https://getbootstrap.com/docs/4.1/components/collapse/#accordion-example)

#### Example:

<div id="accordionDemo"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the accordion
var el = document.querySelector("#accordion");
var accordion = Components.Accordion({
    el: el,
    id: "demoAccordion",
    items: [
        {
            btnProps: { text: "Item 1" },
            content: "This is the content for item 1."
        },
        {
            btnProps: { text: "Item 2" },
            content: "This is the content for item 2."
        },
        {
            btnProps: { text: "Item 3" },
            content: "This is the content for item 3."
        }
    ]
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the accordion
let el = document.querySelector("#accordion");
let accordion = Components.Accordion({
    el: el,
    id: "demoAccordion",
    items: [
        {
            btnProps: { text: "Item 1" },
            content: "This is the content for item 1."
        },
        {
            btnProps: { text: "Item 2" },
            content: "This is the content for item 2."
        },
        {
            btnProps: { text: "Item 3" },
            content: "This is the content for item 3."
        }
    ]
});
```

### Web Component

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-accordion id="wcAccordionDemo" items='[
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
]'></bs-accordion>
```

<bs-accordion id="wcAccordionDemo" items='[
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
]'></bs-accordion>

### References

```
Accordion(props:IAccordionProps):IAccordion
```

#### AccordionTypes

| Name | Value |
| --- | --- |
| Danger | 1 |
| Dark | 2 |
| Info | 3 |
| Light | 4 |
| Primary | 5 |
| Secondary | 6 |
| Success | 7 |
| Warning | 8 |

#### IAccordion

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IAccordionProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to accordion. |
| content | _string_ | The accordion content. |
| el | _HTMLElement_ | The element to render the accordion to. |
| header | _string_ | The accordion header. |
| href | _string_ | Renders the accordion as an anchor element instead of a span element. |
| isPill | _boolean_ | Adds the 'accordion-pill' class name. |
| type | _number_ | The accordion type. _Reference the AccordionTypes enumerator_ |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a accordion exists
        var accordion = document.querySelector("#accordionDemo");
        if(accordion) {
            // Render the accordion
            $REST.Components.Accordion({
                el: accordion,
                id: "demoAccordion",
                items: [
                    {
                        btnProps: { text: "Item 1" },
                        content: "This is the content for item 1."
                    },
                    {
                        btnProps: { text: "Item 2" },
                        content: "This is the content for item 2."
                    },
                    {
                        btnProps: { text: "Item 3" },
                        content: "This is the content for item 3."
                    }
                ]
            });
        }
    });
</script>