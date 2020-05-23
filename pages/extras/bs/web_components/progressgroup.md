---
title: "Progress Group"
category: bs-wc
permalink: /extras/bs/components/webcomponents/progressgroup/
---
[Documentation](http://getbootstrap.com/docs/4.1/components/progress/#multiple-bars)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-progress-group>
    // Return the progress group properties
    return {
        progressbars: [
            {
                size: 25,
                isStriped: true,
                label: "25%"
            },
            {
                size: 50,
                isAnimated: true,
                isStriped: true,
                label: "50%"
            }
        ]
    };
</bs-progress-group>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-progress-group>
    // Return the progress group properties
    return {
        progressbars: [
            {
                size: 25,
                isStriped: true,
                label: "25%"
            },
            {
                size: 50,
                isAnimated: true,
                isStriped: true,
                label: "50%"
            }
        ]
    };
</bs-progress-group>
```