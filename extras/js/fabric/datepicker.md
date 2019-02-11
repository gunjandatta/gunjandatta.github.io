---
layout: page
---

## [Date Picker](https://dev.office.com/fabric-js/Components/DatePicker/DatePicker.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the date picker to. |
| description | _string_ | The field description. |
| onChange | _(value: Date)_ | The change event. |
| showTime | _boolean_ | Flag to show the time. |
| timePickerType | _number_ | The time picker type. |
| value | _Date_ | The datetime value. |

### IDatePicker Interface

| Name | Type/Description |
| --- | --- |
| getDate() | Returns the date picker element. |
| getTime() |Returns the time picker element. |
| getFabricComponent() | Returns the fabric component. |
| getValue() | Returns the datetime value. |

### Fabric Date Picker Interface

| Name | Type/Description |
| --- | --- |
| picker | The datepicker uses the [Pick a Date](amsul.ca/pickadate.js/) library. }

#### Picker

| Name | Type |
| --- | --- |
| component | _{ formats: any; item: any; key: any; queue: any; settings: any; }_ |
| clear | _Function_ |
| close | _Function_ |
| get | _Function_ |
| off | _Function_ |
| on | _Function_ |
| open | _Function_ |
| set | _Function_ |
| start | _Function_ |
| stop | _Function_ |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the date picker
var el = document.querySelector("#dt");
$REST.JS.Fabric.DatePicker({
    el: el,
    showTime: false
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the date picker
let el = document.querySelector("#dt");
Fabric.DatePicker({
    el,
    showTime: false
});
```