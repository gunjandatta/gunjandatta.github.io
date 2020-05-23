---
title: "Input Group"
category: bs-wc
permalink: /extras/bs/components/webcomponents/inputgroup/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/input-group)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-input-group label="My Name" value="First Last">
    // Return the input group properties
    return {
        onChange: onChangeEvent
    }
</bs-input-group>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-input-group label="My Name" value="First Last">
    // Return the input group properties
    return {
        onChange: function(item, ev) {
            console.log("The selected value is: " + item.text);
        }
    }
</bs-input-group>
```