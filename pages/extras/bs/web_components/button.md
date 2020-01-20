---
layout: archive
title: "Button"
category: bs-wc
permalink: /extras/bs/webcomponents/button/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/buttons)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-button text="My Button">
    // Return the button properties
    return {
        onClick: btnClickEvent
    }
</bs-button>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-button text="My Button">
    // Return the button properties
    return {
        onClick: function(ev) {
            alert("You clicked the button...");
        }
    }
</bs-button>
```