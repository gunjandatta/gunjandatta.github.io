---
title: "List Group"
category: bs-wc
permalink: /extras/bs/components/webcomponents/listgroup/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/list-group)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-list-group is-tabs="true" col-width="2">
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
</bs-list-group>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-list-group is-tabs="true" col-width="2">
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
</bs-list-group>
```