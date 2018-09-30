---
layout: default
---

### Dropdown
[Documentation](https://getbootstrap.com/docs/4.1/components/dropdowns)

<div id="dropdownDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the dropdown
var el = document.querySelector("#dropdown");
var dropdown = Components.Dropdown({
    el: el,
    label: "Select a Choice",
    items: [
        { text: "Choice 1", value: "1" },
        { text: "Choice 2", value: "2" },
        { text: "Choice 3", value: "3" },
        { text: "Choice 4", value: "4" },
        { text: "Choice 5", value: "5" }
    ],
    onChange: function(item, ev) {
        console.log("The selected value is: " + item.text);
    }
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the dropdown
let el = document.querySelector("#dropdown");
let dropdown = Components.Dropdown({
    el: el,
    label: "Select a Choice",
    items: [
        { text: "Choice 1", value: "1" },
        { text: "Choice 2", value: "2" },
        { text: "Choice 3", value: "3" },
        { text: "Choice 4", value: "4" },
        { text: "Choice 5", value: "5" }
    ],
    onChange: (item, ev) => {
        console.log("The selected value is: " + item.text);
    }
});
```

### Web Component

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
function onChangeEvent(item, ev) {
    console.log("The selected value is: " + item.text);
}
</script>
<bs-dropdown label="Select a Choice" onChange="onChangeEvent" items='[
    { "text": "Choice 1", "value": "1" },
    { "text": "Choice 2", "value": "2" },
    { "text": "Choice 3", "value": "3" },
    { "text": "Choice 4", "value": "4" },
    { "text": "Choice 5", "value": "5" }
]'></bs-dropdown>
```

<bs-dropdown label="Select a Choice" onChange="onChangeEvent" items='[
    { "text": "Choice 1", "value": "1" },
    { "text": "Choice 2", "value": "2" },
    { "text": "Choice 3", "value": "3" },
    { "text": "Choice 4", "value": "4" },
    { "text": "Choice 5", "value": "5" }
]'></bs-dropdown>

### References

```
Dropdown(props:IDropdownProps):IDropdown
```

#### DropdownTypes

| Name | Value |
| --- | --- |
| Danger | 1 |
| Info | 2 |
| Primary | 3 |
| Secondary | 4 |
| Success | 5 |
| Warning | 6 |

#### IDropdown

| Name | Returns | Description |
| --- | --- | --- |
| dispose | void | Destroys an element's dropdown. |
| el | Element | The jquery element. |
| toggle | void | Toggles the dropdown menu of a given navbar or tabbed navigation. |
| update | void | Updates the position of an element’s dropdown. |

#### IDropdownItem

| Name | Type | Description |
| --- | --- | --- |
| data | _any_ | The item data value. |
| href | _string_ | Renders the item as a link. |
| isDivider | _boolean_ | True to render a divider. |
| isHeader | _boolean_ | True to add the 'dropdown-header' class. |
| isSelected | _boolean_ | True to select the item. |
| onChange | _(item: IDropdownItem | Array&lt;IDropdownItem&gt;, ev: Event) => void_ | The change event. |
| text | _string_ | The value displayed to the user. |
| value | _any_ | The item value. |

#### IDropdownProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to dropdown. |
| dropLeft | _boolean_ | Adds the 'dropleft' class. |
| dropRight | _boolean_ | Adds the 'dropright' class. |
| dropUp | _boolean_ | Adds the 'dropup' class. |
| el | _HTMLElement_ | The element to render the dropdown to. |
| formFl | _boolean_ | True if the dropdown is being rendered in a form. |
| id | _string_ | The id of the dropdown. |
| isSplit | _boolean_ | True render a split button. |
| items | _Array&lt;IDropdownItem&gt;_ | The dropdown items. |
| label | _string_ | The dropdown label. |
| multi | _boolean_ | True to render the dropdown as a multi-select. |
| onChange | _(item: IDropdownItem | Array&lt;IDropdownItem&gt;, ev: Event) => void_ | The change event. |
| type | _number_ | The dropdown type. _Reference the DropdownTypes enumerator_ |
| value | _string \| Array&lt;string&gt;_ | The selected item values. |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Set the change event
    function onChangeEvent(item, ev) {
        console.log("The selected value is: " + item.text);
    }

    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a dropdown exists
        var dropdown = document.querySelector("#dropdownDemo");
        if(dropdown) {
            // Render the dropdown
            $REST.Components.Dropdown({
                el: dropdown,
                label: "Select a Choice",
                onChange: onChangeEvent,
                items: [
                    { text: "Choice 1", value: "1" },
                    { text: "Choice 2", value: "2" },
                    { text: "Choice 3", value: "3" },
                    { text: "Choice 4", value: "4" },
                    { text: "Choice 5", value: "5" }
                ]
            });
        }
    });
</script>