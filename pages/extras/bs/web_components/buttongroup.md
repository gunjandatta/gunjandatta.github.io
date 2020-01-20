---
layout: archive
title: "Button Group"
category: bs-wc
permalink: /extras/bs/webcomponents/buttongroup/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/button-group)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-button-group>
    // Return the button group properties
    return {
        buttonType: $REST.Components.ButtonTypes.Primary,
        buttons: [
            { "text": "Left" },
            { "text": "Middle" },
            { "text": "Right" }
        ]
    }
</bs-button-group>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-button-group>
    // Return the button group properties
    return {
        buttonType: $REST.Components.ButtonTypes.Primary,
        buttons: [
            { "text": "Left" },
            { "text": "Middle" },
            { "text": "Right" }
        ]
    }
</bs-button-group>
```