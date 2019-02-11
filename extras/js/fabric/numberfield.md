---
layout: page
---

## [Number Field](https://dev.office.com/fabric-js/Components/TextField/TextField.html)

The number field extends the textfield and formats it based on the type.
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the number to. |
| decimals | _number_ | The number of decimals allowed. |
| description | _string_ | The field description |
| maxValue | _number_ | The maximum value allowed. |
| minValue | _number_ | The minimum value allowed. |
| onChange | _(value: string)_ | The change event |
| placeholder | _string_ | The placeholder text. |
| type | _number_ | The textfield type. |
| value | _string_ | The textfield value. |

### Number Field Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric component. |
| getValue() | Returns the textfield value. |
| setErrorMessage(_message: string_) | Sets the error message. |
| setValue(_value: string_) | Sets the textfield value. |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the 
var el = document.querySelector("#number");
$REST.JS.Fabric.NumberField({
    el: el,
    label: "My Number:",
    minValue: -100,
    maxValue: 100
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the 
let el = document.querySelector("#number");
Fabric.NumberField({
    el,
    label: "My Number:",
    minValue: -100,
    maxValue: 100
});
```