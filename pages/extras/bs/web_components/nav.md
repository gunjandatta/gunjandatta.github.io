---
title: "Navigation"
category: bs-wc
permalink: /extras/bs/components/webcomponents/navigation/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/navs)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-nav is-pills="true">
    // Return the nav properties
    return {
        items: [
            { title: "Nav 1", isActive: true },
            { title: "Nav 2" },
            { title: "Nav 3" },
            { title: "Nav 4" },
            { title: "Nav 5" }
        ]
    };
</bs-nav>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-nav is-pills="true">
    // Return the nav properties
    return {
        items: [
            { title: "Nav 1", isActive: true },
            { title: "Nav 2" },
            { title: "Nav 3" },
            { title: "Nav 4" },
            { title: "Nav 5" }
        ]
    };
</bs-nav>
```