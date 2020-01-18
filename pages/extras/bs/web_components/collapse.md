---
layout: archive
title: "Collapse"
category: bs-wc
permalink: /extras/bs/webcomponents/collapse/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/collapse)

<div id="btnCollapse"></div>
<div id="collapseDemo"></div>

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

<bs-button target="#wcCollapseDemo" toggle="collapse" text="Collapse Demo"></bs-button>
<bs-collapse id="wcCollapseDemo" content="This is the content to be collapsed."></bs-collapse>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-button target="#wcCollapseDemo" toggle="collapse" text="Collapse Demo"></bs-button>
<bs-collapse id="wcCollapseDemo" content="This is the content to be collapsed."></bs-collapse>
```

### References

```
Collapse(props:ICollapseProps):ICollapse
```

#### ICollapse

| Name | Returns | Description |
| --- | --- | --- |
| dispose | _() => void_ | Destroys an element's collapse. |
| el | _Element_ | The jquery element. |
| hide | _() => void_ | Hides a collapsible element. |
| show | _() => void_ | Shows a collapsible element. |
| toggle | _() => void_ | Toggles the collapsible element on invocation. |

#### ICollapseOptions

| Name | Type | Description |
| --- | --- | --- |
| parent | _string \| Element_ | If parent is provided, then all collapsible elements under the specified parent will be closed when this collapsible item is shown. |
| toggle | _string_ | Toggles the collapsible element on invocation. |

#### ICollapseProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to collapse. |
| content | _string_ | The collapse content. |
| el | _HTMLElement_ | The element to render the collapse to. |
| id | _string_ | The collapse id. |
| isMulti | _boolean_ | Adds the 'multi-collapse' class name. |
| onRender | _(props?: ICollapseProps, el?: HTMLDivElement) => void | The render event. |
| options | _ICollapseOptions_ | The collapse options. |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
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