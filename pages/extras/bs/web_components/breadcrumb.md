---
layout: archive
title: "Breadcrumb"
category: bs-wc
permalink: /extras/bs/webcomponents/breadcrumb/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/breadcrumbs)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-breadcrumb>
    // Return the breadcrumb properties
    return {
        items: [
            { "text": "Root", "href": "/" }, 
            { "text": "Web 1", "href": "/web" }, 
            { "text": "Web 1-1", "href": "/web/1"}
        ]
    }
</bs-breadcrumb>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-breadcrumb>
    // Return the breadcrumb properties
    return {
        items: [
            { "text": "Root", "href": "/" }, 
            { "text": "Web 1", "href": "/web" }, 
            { "text": "Web 1-1", "href": "/web/1"}
        ]
    }
</bs-breadcrumb>
```