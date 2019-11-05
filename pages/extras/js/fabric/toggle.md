---
layout: archive
title: "Toggle"
category: js
permalink: /extras/js/fabric/toggle/
---
## [Documentation](https://dev.office.com/fabric-js/Components/Toggle/Toggle.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the toggle to. |
| description | _string_ | The toggle description. |
| onChange | _(value: boolean)_ | The change event. |
| value | _boolean_ | The toggle value. |

### Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the toggle element. |
| getFabricComponent() | Returns the fabric component. |
| getValue() | Returns the toggle value. |

### Fabric Interface

| Name | Type/Description |
| --- | --- |
| \_container | _HTMLDivElement_ |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the toggle
var el = document.querySelector("#toggle");
$REST.JS.Fabric.Toggle({ el: el });
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the toggle
let el = document.querySelector("#toggle");
Fabric.Toggle({ el });
```