---
title: "Popover"
category: bs-wc
permalink: /extras/bs/components/webcomponents/popover/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/popovers)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-popover is-dismissible="true">
    // Return the popover properties
    return {
        btnProps: {
            text: "Popover Demo"
        },
        options: {
            container: "body",
            content: "This is the popover content.",
            title: "My Popover",
            trigger: "hover"
        }
    };
</bs-popover>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-popover is-dismissible="true">
    // Return the popover properties
    return {
        btnProps: {
            text: "Popover Demo"
        },
        options: {
            container: "body",
            content: "This is the popover content.",
            title: "My Popover",
            trigger: "hover"
        }
    };
</bs-popover>
```