---
layout: default
---

### Accordion
[Documentation](https://getbootstrap.com/docs/4.1/components/collapse/#accordion-example)

<div id="accordionDemo"></div>

### JavaScript
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

### TypeScript

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
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
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

### References

```
Accordion(props:IAccordionProps):IAccordion
```

#### IAccordion

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IAccordionItem

| Name | Returns | Description |
| --- | --- | --- |
| btnProps | _IButtonProps_ | The button properties. |
| content | _string_ | The item content to display. |
| showFl | _boolean_ | Flag to show/hide the content. |

#### IAccordionOptions

| Name | Returns | Description |
| --- | --- | --- |
| parent | _string \| Element_ | If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. |
| toggle | _string_ | Toggles the collapsible element on invocation. |

#### IAccordionProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to accordion. |
| el | _HTMLElement_ | The element to render the accordion to. |
| id | _string_ | The accordion id. |
| items | _Array&lt;IAccordionItem&gt;_ | The accordion items. |
| options | _IAccordionOptions_ | The accordion options. |

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