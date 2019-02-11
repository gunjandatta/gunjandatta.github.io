---
layout: extras
---
# Office Fabric-UI (JS)

## [Pivot](https://dev.office.com/fabric-js/Components/Pivot/Pivot.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the pivot to. |
| isFlipped | _boolean_ | True to render the tabs under the content. |
| isLarge | _boolean_ | True to render text. |
| isTabs | _boolean_ | True to render tabs. |
| tabs | _Array&lt;IPivotLink&gt;_ | The tabs. |

### Pivot Link Interface

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name. |
| content | _string_ | The tab content. |
| isSelected | _boolean_ | True for the selected tabs. |
| name | _string_ | The tab name. |
| onClick | _Function_ | The click event for the tab. |

### Fabric Interface

| Name | Type/Description |
| --- | --- |
| \_container | _HTMLDivElement_ |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the tabs
var el = document.querySelector("#tabs");
$REST.JS.Fabric.Pivot({
    el: el,
    tabs: [
        {
            name: "Tab 1",
            content: [
                '<div>',
                '<p>This is the first tab.</p>',
                '</div>'
            ].join('\n')
        },
        {
            name: "Tab 2",
            content: [
                '<div>',
                '<p>This is the second tab.</p>',
                '</div>'
            ].join('\n')
        },
        {
            name: "Tab 3",
            content: [
                '<div>',
                '<p>This is the third tab.</p>',
                '</div>'
            ].join('\n')
        }
    ]
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the tabs
var el = document.querySelector("#tabs");
Fabric.Pivot({
    el,
    tabs: [
        {
            name: "Tab 1",
            content: [
                '<div>',
                '<p>This is the first tab.</p>',
                '</div>'
            ].join('\n')
        },
        {
            name: "Tab 2",
            content: [
                '<div>',
                '<p>This is the second tab.</p>',
                '</div>'
            ].join('\n')
        },
        {
            name: "Tab 3",
            content: [
                '<div>',
                '<p>This is the third tab.</p>',
                '</div>'
            ].join('\n')
        }
    ]
});
```