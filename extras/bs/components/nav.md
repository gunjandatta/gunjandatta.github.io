---
layout: extras
---
# Bootstrap

### Navigation
[Documentation](https://getbootstrap.com/docs/4.1/components/navs)

<div id="navigationDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the navigation
var el = document.querySelector("#navigation");
var nav = Components.Nav({
    el: el,
    isPills: true,
    items: [
        { title: "Nav 1", isActive: true },
        { title: "Nav 2" },
        { title: "Nav 3" },
        { title: "Nav 4" },
        { title: "Nav 5" }
    ]
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the navigation
let el = document.querySelector("#navigation");
let nav = Components.Nav({
    el: el,
    isPills: true,
    items: [
        { title: "Nav 1", isActive: true },
        { title: "Nav 2" },
        { title: "Nav 3" },
        { title: "Nav 4" },
        { title: "Nav 5" }
    ]
});
```

### Web Component

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
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
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

### References

```
Nav(props:INavProps):INav
```

#### NavTypes

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

#### INav

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### INavProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to navigation. |
| content | _string_ | The navigation content. |
| el | _HTMLElement_ | The element to render the navigation to. |
| header | _string_ | The navigation header. |
| href | _string_ | Renders the navigation as an anchor element instead of a span element. |
| isPill | _boolean_ | Adds the 'navigation-pill' class name. |
| type | _number_ | The navigation type. _Reference the NavigationTypes enumerator_ |

<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a navigation exists
        var navigation = document.querySelector("#navigationDemo");
        if(navigation) {
            // Render the navigation
            $REST.Components.Nav({
                el: navigation,
                isPills: true,
                items: [
                    { title: "Nav 1", isActive: true },
                    { title: "Nav 2" },
                    { title: "Nav 3" },
                    { title: "Nav 4" },
                    { title: "Nav 5" }
                ]
            });
        }
    });
</script>