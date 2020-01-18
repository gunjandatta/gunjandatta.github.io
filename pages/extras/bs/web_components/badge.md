---
layout: archive
title: "Badge"
category: bs-wc
permalink: /extras/bs/webcomponents/badge/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/badge)

<div id="badgeDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the badge
var el = document.querySelector("#badge");
var badge = Components.Badge({
    el: el,
    content: "Badge"
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the badge
let el = document.querySelector("#badge");
let badge = Components.Badge({
    el: el,
    content: "Badge"
});
```

### Web Component

<bs-badge content="Badge"></bs-badge>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-badge content="Badge"></bs-badge>
```

### References

```
Badge(props:IBadgeProps):IBadge
```

#### BadgeTypes

| Name | Value |
| --- | --- |
| Danger | 1 |
| Dark | 2 |
| Info | 3 |
| Light | 4 |
| Primary | 5 |
| Secondary | 6 |
| Success | 7 |
| Warning | 8 |

#### IBadge

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IBadgeProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to badge. |
| content | _string_ | The badge content. |
| el | _HTMLElement_ | The element to render the badge to. |
| header | _string_ | The badge header. |
| href | _string_ | Renders the badge as an anchor element instead of a span element. |
| isPill | _boolean_ | Adds the 'badge-pill' class name. |
| type | _number_ | The badge type. _Reference the BadgeTypes enumerator_ |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a badge exists
        var badge = document.querySelector("#badgeDemo");
        if(badge) {
            // Render the badge
            $REST.Components.Badge({
                el: badge,
                content: "Badge"
            });
        }
    });
</script>