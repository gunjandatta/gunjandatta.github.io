---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Progress](https://getbootstrap.com/docs/4.1/components/collapse/#progress)

#### Example:

<div id="progressDemo"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the progress
var el = document.querySelector("#progress");
var progress = Components.Progress({
    el: el,
    size: 25,
    label: "25%"
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the progress
let el = document.querySelector("#progress");
let progress = Components.Progress({
    el: el,
    size: 25,
    label: "25%"
});
```

### Web Component

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-progress is-striped="true" label="25%" size="25"></bs-progress>
```

<bs-progress is-striped="true" label="25%" size="25"></bs-progress>

### References

```
Progress(props:IProgressProps):IProgress
```

#### IProgress

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IProgressItem

| Name | Returns | Description |
| --- | --- | --- |
| btnProps | _IButtonProps_ | The button properties. |
| content | _string_ | The item content to display. |

#### IProgressProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to progress. |
| el | _HTMLElement_ | The element to render the progress to. |
| id | _string_ | The progress id. |
| items | _Array&lt;IProgressItem&gt;_ | The progress items. |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a progress exists
        var progress = document.querySelector("#progressDemo");
        if(progress) {
            // Render the progress
            $REST.Components.Progress({
                el: progress,
                size: 25,
                label: "25%"
            });
        }
    });
</script>