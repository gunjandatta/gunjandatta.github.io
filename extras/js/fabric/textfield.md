---
layout: default
---

## [Text Field](https://dev.office.com/fabric-js/Components/TextField/TextField.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the text field to. |
| description | _string_ | The field description |
| onChange | _(value: string)_ | The change event |
| placeholder | _string_ | The placeholder text. |
| type | _number_ | The textfield type. |
| value | _string_ | The textfield value. |

### Text Field Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric component. |
| getValue() | Returns the textfield value. |
| setErrorMessage(_message: string_) | Sets the error message. |
| setValue(_value: string_) | Sets the textfield value. |

### Fabric Text Field Interface

| Name | Type/Description |
| --- | --- |
| \_container | _HTMLDivElement_ |
| \_textField | _HTMLInputElement_ |
| \_textFieldLabel | _HTMLLabelElement_ |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the text field
var el = document.querySelector("#tb");
$REST.JS.Fabric.TextField({
    el: el,
    label: "My Field:"
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the 
let el = document.querySelector("#tb");
Fabric.TextField({
    el,
    label: "My Field:"
});
```