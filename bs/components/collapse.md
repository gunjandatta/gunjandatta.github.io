---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Collapse](https://getbootstrap.com/docs/4.1/components/collapse)

#### Example:

<div id="btnCollapse"></div>
<div id="collapseDemo"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the button to toggle the collapse
$REST.Components.Button({
    el: document.querySelector("#btnCollapse"),
    target: "#demoCollapse",
    toggle: "collapse",
    text: "Collapse Demo"
});

// Create the collapse
var el = document.querySelector("#collapse");
var collapse = Components.Collapse({
    el: el,
    id: "demoCollapse",
    content: "This is the content to be collapsed."
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the button to toggle the collapse
let btn = Components.Button({
    el: document.querySelector("#btnCollapse"),
    target: "#demoCollapse",
    toggle: "collapse",
    text: "Collapse Demo"
});

// Create the collapse
let el = document.querySelector("#collapse");
let collapse = Components.Collapse({
    el: el,
     id: "demoCollapse",
    content: "This is the content to be collapsed."
});
```

### Web Component

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-button target="#wcCollapseDemo" toggle="collapse" text="Collapse Demo"></bs-button>
<bs-collapse id="wcCollapseDemo" content="This is the content to be collapsed."></bs-collapse>
```

<bs-button target="#wcCollapseDemo" toggle="collapse" text="Collapse Demo"></bs-button>
<bs-collapse id="wcCollapseDemo" content="This is the content to be collapsed."></bs-collapse>

### References

```
Collapse(props:ICollapseProps):ICollapse
```

#### CollapseTypes

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

#### ICollapse

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### ICollapseProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to collapse. |
| content | _string_ | The collapse content. |
| el | _HTMLElement_ | The element to render the collapse to. |
| header | _string_ | The collapse header. |
| href | _string_ | Renders the collapse as an anchor element instead of a span element. |
| isPill | _boolean_ | Adds the 'collapse-pill' class name. |
| type | _number_ | The collapse type. _Reference the CollapseTypes enumerator_ |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a collapse exists
        var collapse = document.querySelector("#collapseDemo");
        if(collapse) {
            // Create the button to toggle the collapse
            $REST.Components.Button({
                el: document.querySelector("#btnCollapse"),
                target: "#demoCollapse",
                toggle: "collapse",
                text: "Collapse Demo"
            });

            // Render the collapse
            $REST.Components.Collapse({
                el: collapse,
                id: "demoCollapse",
                content: "This is the content to be collapsed."
            });
        }
    });
</script>