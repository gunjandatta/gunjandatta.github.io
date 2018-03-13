---
layout: default
---
[Back](/js/fabric)
## [Date Picker](https://dev.office.com/fabric-js/Components/DatePicker/DatePicker.html)
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
/** The field description. */
description?: string;

/** The change event */
onChange?: (value: Date) => void;

/** Flag to show the time */
showTime?: boolean;

/** The time picker type. */
timePickerType?: number;

/** The datetime value */
value?: Date;

### IDatePicker Interface

| Name | Type | Description |
| --- | --- | --- |
/** Returns the date picker element. */
getDate(): HTMLElement;

/** Returns the time picker element. */
getTime(): HTMLElement;

/** Returns the fabric component. */
getFabricComponent(): any;

/** Returns the datetime value. */
getValue(): Date;

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the button
var el = document.querySelector("#");
$REST.JS.Fabric.({
    el: el,
});
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Create the button
let el = document.querySelector("#");
Fabric.Button({
    el,
});
```