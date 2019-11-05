---
layout: archive
title: "Spinner"
category: js
permalink: /extras/js/fabric/spinner/
---
## [Documentation](https://dev.office.com/fabric-js/Components/Spinner/Spinner.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the spinner to. |
| text: | _string_ | The loading dialog text. |

### Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric component. |

### Fabric Interface

| Name | Type/Description |
| --- | --- |
| animationSpeed | _number_ |
| eightSize | _number_ |
| fadeIncrement | _number_ |
| interval | _number_ |
| numCircles | _number_ |
| offsetSize | _number_ |
| parentSize | _number_ |
| spinner | _HTMLElement;
| start() | Starts the animation. |;
| stop() | Stops the animation. |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the spinner
var el = document.querySelector("#loader");
$REST.JS.Fabric.Spinner({
    el: el,
    text: "Loading the data..."
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the spinner
let el = document.querySelector("#loader");
Fabric.Spinner({
    el,
    text: "Loading the data..."
});
```