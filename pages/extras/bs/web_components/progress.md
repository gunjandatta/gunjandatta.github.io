---
layout: archive
title: "Progress"
category: bs
permalink: /extras/bs/webcomponents/progress/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/collapse/#progress)

<div id="progressDemo"></div>

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

<bs-progress is-striped="true" label="25%" size="25"></bs-progress>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-progress is-striped="true" label="25%" size="25"></bs-progress>
```

### References

```
Progress(props:IProgressProps):IProgress
```

#### IProgress

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IProgressProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to progress. |
| el | _HTMLElement_ | The element to render the progress to. |
| isAnimated | _boolean_ | Adds the 'progress-bar-animated' class name. |
| isStriped | _boolean_ | Adds the 'progress-bar-striped' class name. |
| label | _string_ | The progress bar label. |
| max | _string_ | The progress bar's max value. |
| min | _string_ | The progress bar's max value. |
| size | _string_ | The progress bar value. |

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
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