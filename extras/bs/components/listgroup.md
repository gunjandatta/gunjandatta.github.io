---
layout: default
---

### List Group
[Documentation](https://getbootstrap.com/docs/4.1/components/list-group)

<div id="listGroupDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the listGroup
var el = document.querySelector("#listGroup");
var listGroup = Components.listGroup({
    el: el,
    colWidth: 2,
    isTabs: true,
    items: [
        { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
        { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },
        { tabName: "Tab 3", content: "This is the content for tab 3." },
        { tabName: "Tab 4", content: "This is the content for tab 4." },
        { tabName: "Tab 5", content: "This is the content for tab 5." }
    ]
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the listGroup
let el = document.querySelector("#listGroup");
let listGroup = Components.listGroup({
    el: el,
    colWidth: 2,
    isTabs: true,
    items: [
        { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
        { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },
        { tabName: "Tab 3", content: "This is the content for tab 3." },
        { tabName: "Tab 4", content: "This is the content for tab 4." },
        { tabName: "Tab 5", content: "This is the content for tab 5." }
    ]
});
```

### Web Component

<bs-listGroup is-tabs="true" col-width="2">
    // Return the list group properties
    return {
        items: [
            { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
            { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },
            { tabName: "Tab 3", content: "This is the content for tab 3." },
            { tabName: "Tab 4", content: "This is the content for tab 4." },
            { tabName: "Tab 5", content: "This is the content for tab 5." }
        ]
    };
</bs-listGroup>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-listGroup is-tabs="true" col-width="2">
    // Return the list group properties
    return {
        items: [
            { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
            { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },
            { tabName: "Tab 3", content: "This is the content for tab 3." },
            { tabName: "Tab 4", content: "This is the content for tab 4." },
            { tabName: "Tab 5", content: "This is the content for tab 5." }
        ]
    };
</bs-listGroup>
```

### References

```
ListGroup(props:IListGroupProps):IListGroup
```

#### ListGroupItemTypes

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

#### IListGroup

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IListGroupItem

| Name | Returns | Description |
| --- | --- | --- |
| badge | _IBadgeProps_ | The badge properties. |
| className | _string_ | The class name to apply to the list group. |
| content | _string_ | The item content. |
| href | _string_ | Renders the item as an anchor. |
| isActive | _boolean_ | Adds the 'active" class name. |
| isDisabled | _boolean_ | Adds the 'disabled" class name. |
| tabName | _string_ | The tab name. |
| type | _number_ | The item type. _Reference the ListGroupItemTypes_ |

#### IListGroupProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the input group. |
| colWidth | _number_ | A value between 1-11, to render the tabs as columns. |
| el | _HTMLElement_ | The element to render the input group to. |
| enableFade | _boolean_ | Adds the 'fade' class name to the tab pane. |
| isFlush | _boolean_ | Adds the 'list-group-flush' class name. |
| isTabs | _boolean_ | True to render the list group as tabs. |
| items | _Array&lt;IListGroupItem&gt;_ | An array of list group items. |

<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a listGroup exists
        var listGroup = document.querySelector("#listGroupDemo");
        if(listGroup) {
            // Render the listGroup
            $REST.Components.ListGroup({
                el: listGroup,
                colWidth: 2,
                isTabs: true,
                items: [
                    { tabName: "Tab 1", content: "This is the content for tab 1.", isActive: true },
                    { tabName: "Tab 2", content: "This is the content for tab 2.", badge: { content: "10", type: 4 } },
                    { tabName: "Tab 3", content: "This is the content for tab 3." },
                    { tabName: "Tab 4", content: "This is the content for tab 4." },
                    { tabName: "Tab 5", content: "This is the content for tab 5." }
                ]
            });
        }
    });
</script>