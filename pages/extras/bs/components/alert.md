---
layout: archive
title: "Alert"
category: bs
permalink: /extras/bs/components/alert/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/alerts)

<div id="alertDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the alert
var el = document.querySelector("#alert");
var alert = Components.Alert({
    el: el,
    content: "This is an alert."
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the alert
let el = document.querySelector("#alert");
let alert = Components.Alert({
    el: el,
    content: "This is an alert."
});
```

### Web Component

<bs-alert content="This is an alert"></bs-alert>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-alert content="This is an alert"></bs-alert>
```

### References

```
Alert(props:IAlertProps):IAlert
```

#### AlertTypes

| Name | Value |
| --- | --- |
| Danger | 1 |
| Dark | 2 |
| Info | 3 |
| Light | 4 |
| Primary | 6 |
| Secondary | 7 |
| Success | 8 |
| Warning | 9 |

#### IAlert

| Name | Returns | Description |
| --- | --- | --- |
| close | void | Closes an alert by removing it from the DOM. |
| dispose | void | Destroys an element's alert. |
| el | Element | The jquery element. |

#### IAlertProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to alert. |
| content | _string_ | The alert content. |
| el | _HTMLElement_ | The element to render the alert to. |
| header | _string_ | The alert header. |
| isDismissible | _boolean_ | Renders an 'x' to close the alert. |
| type | _number_ | The alert type. _Reference the AlertTypes enumerator_ |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a alert exists
        var alert = document.querySelector("#alertDemo");
        if(alert) {
            // Render the alert
            $REST.Components.Alert({
                el: alert,
                content: "This is an alert."
            });
        }
    });
</script>