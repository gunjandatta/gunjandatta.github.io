---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Progress Group](http://getbootstrap.com/docs/4.1/components/progress/#multiple-bars)

#### Example:

<div id="progressGroupDemo"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the progress group
var el = document.querySelector("#progressGroup");
var progressGroup = Components.ProgressGroup({
    el: el,
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
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the progress group
let el = document.querySelector("#progressGroup");
let progressGroup = Components.ProgressGroup({
    el: el,
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
});
```

### Web Component

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-progressGroup id="wcProgressGroupDemo" items='[
    {
        "btnProps": { "text": "Item 1" },
        "content": "This is the content for item 1."
    },
    {
        "btnProps": { "text": "Item 2" },
        "content": "This is the content for item 2."
    },
    {
        "btnProps": { "text": "Item 3" },
        "content": "This is the content for item 3."
    }
]'></bs-progressGroup>
```

<bs-progressGroup id="wcProgressGroupDemo" items='[
    {
        "btnProps": { "text": "Item 1" },
        "content": "This is the content for item 1."
    },
    {
        "btnProps": { "text": "Item 2" },
        "content": "This is the content for item 2."
    },
    {
        "btnProps": { "text": "Item 3" },
        "content": "This is the content for item 3."
    }
]'></bs-progressGroup>

### References

```
ProgressGroup(props:IProgressGroupProps):IProgressGroup
```

#### IProgressGroup

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IProgressGroupProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to progressGroup. |
| el | _HTMLElement_ | The element to render the progressGroup to. |
| isMultiple | _string_ | Renders the progress bars in a single progress element. |
| progressbars | _Array&lt;IProgressProps&gt;_ | The progressbars. |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a progressGroup exists
        var progressGroup = document.querySelector("#progressGroupDemo");
        if(progressGroup) {
            // Render the progressGroup
            $REST.Components.ProgressGroup({
                el: progressGroup,
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
            });
        }
    });
</script>