---
layout: default
---
[Back](/js/fabric)
## [Button](https://dev.office.com/fabric-js/Components/Button/Button.html)
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| disable | _boolean_ | True to disable the button. |
| href | _string_ | The button url. |
| onClick | _(btn?: HTMLButtonElement)_ | The button click event. |
| text | _string_ | The button text. |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the button
var el = document.querySelector("#myButton");
$REST.JS.Fabric.Button({
    el: el,
    text: "My Button",
    onClick: function() {
        // Code goes here
    }
});
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Create the button
let el = document.querySelector("#myButton");
Fabric.Button({
    el,
    text: "My Button",
    onClick: () => {
        // Code goes here
    }
});
```