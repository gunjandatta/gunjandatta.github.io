---
title: "Dropdown"
category: bs-wc
permalink: /extras/bs/components/webcomponents/dropdown/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/dropdowns)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-dropdown label="Select a Choice">
    // Return the dropdown properties
    return {
        items: [
            { text: "Choice 1", value: "1" },
            { text: "Choice 2", value: "2" },
            { text: "Choice 3", value: "3" },
            { text: "Choice 4", value: "4" },
            { text: "Choice 5", value: "5" }
        ],
        onChange: onChangeEvent
    };
</bs-dropdown>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-dropdown label="Select a Choice">
    // Return the dropdown properties
    return {
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
    };
</bs-dropdown>
```