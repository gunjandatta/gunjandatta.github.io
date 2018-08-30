---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [List Group](https://getbootstrap.com/docs/4.1/components/input-group)

#### Example:

<div id="listGroupDemo"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the listGroup
var el = document.querySelector("#listGroup");
var listGroup = Components.listGroup({
    el: el,
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

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-listGroup is-tabs="true" items='[
    { "tabName": "Tab 1", "content": "This is the content for tab 1.", "isActive": true },
    { "tabName": "Tab 2", "content": "This is the content for tab 2.", "badge": { "content": "10", "type": 4 } },
    { "tabName": "Tab 3", "content": "This is the content for tab 3." },
    { "tabName": "Tab 4", "content": "This is the content for tab 4." },
    { "tabName": "Tab 5", "content": "This is the content for tab 5." }
]'></bs-listGroup>
```

<bs-listGroup is-tabs="true" items='[
    { "tabName": "Tab 1", "content": "This is the content for tab 1.", "isActive": true },
    { "tabName": "Tab 2", "content": "This is the content for tab 2.", "badge": { "content": "10", "type": 4 } },
    { "tabName": "Tab 3", "content": "This is the content for tab 3." },
    { "tabName": "Tab 4", "content": "This is the content for tab 4." },
    { "tabName": "Tab 5", "content": "This is the content for tab 5." }
]'></bs-listGroup>

### References

```
ListGroup(props:IListGroupProps):IListGroup
```

#### ListGroupTypes

| Name | Value |
| --- | --- |
| Email | 1 |
| File | 2 |
| Password | 3 |
| TextArea | 4 |
| TextField | 5 |

#### IListGroup

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IlistGroupProps

| Name | Type | Description |
| --- | --- | --- |
| appendedLabel | _string_ | The appended text field label. |
| className | _string_ | The class name to apply to input group. |
| description | _string_ | The text field description. |
| el | _HTMLElement_ | The element to render the input group to. |
| id | _string_ | The text field id. |
| isLarge | _boolean_ | Adds the 'listGroup-lg' class name. |
| isSmall | _boolean_ | Adds the 'listGroup-sm' class name. |
| label | _string_ | The text field label. |
| placeholder | _string_ | The text field placeholder. |
| prependedLabel | _string_ | The prepended text field label. |
| type | _number_ | The text field type. _Reference the ListGroupTypes enumerator_ |
| value | _string_ | The text field value. |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a listGroup exists
        var listGroup = document.querySelector("#listGroupDemo");
        if(listGroup) {
            // Render the listGroup
            $REST.Components.ListGroup({
                el: listGroup,
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