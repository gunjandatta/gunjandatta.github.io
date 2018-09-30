---
layout: default
---

## [CheckBox](https://dev.office.com/fabric-js/Components/CheckBox/CheckBox.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the checkbox to. |
| onChange | _(checked:boolean)_ | The change event. |
| value | _boolean_ | The field value. |

### ICheckBox Interface

| Name | Type | Description |
| --- | --- | --- |
| get() | _HTMLElement_ | Returns the checkbox element. |
| getFabricComponent() | _ICheckBox_ | Returns the fabric object. |
| getValue() | _boolean_ | Returns the checkbox value. |

#### Fabric CheckBox Interface

| Name | Type/Description |
| --- | --- |
| \_choiceField | _HTMLLabelElement_ |
| \_choiceInput | HTMLInputElement |
| \_container | HTMLDivElement |
| check() | Checks the checkbox. |
| getValue(): boolean | Gets the value of the checkbox. |
| removeListeners() | Removes the event listeners. |
| toggle() | Toggles the checkbox. |
| unCheck() | Unchecks the checkbox. |


### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the checkbox
var el = document.querySelector("#cb");
$REST.JS.Fabric.CheckBox({
    el: el
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the checkbox
let el = document.querySelector("#cb");
Fabric.CheckBox({
    el
});
```