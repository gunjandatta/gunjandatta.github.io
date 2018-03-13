---
layout: default
---
[Back](/js/fabric)
## [People Picker](https://dev.office.com/fabric-js/Components/PeoplePicker/PeoplePicker.html)
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the panel to. |
| allowMultiple | _boolean_ | Flag to allow multiple personas. |
| allowGroups | _boolean_ | Flag to allow groups. |
| description | _string_ | The people picker description. |
| label | _string_ | The people picker label. |
| required | _boolean_ | Required flag. |
| value | _Array&lt;Types.SP.IPeoplePickerUser&gt;_ | The people picker value. |

### People Picker Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric component. |
| getValue() | Returns the link value. |

### Fabric People Picker Interface

| Name | Type/Description |
| --- | --- |
| \_container | _HTMLDivElement_ |
| \_contextualHostView | _IContextualHost_ |
| \_isContextualMenuOpen | _boolean_ |
| \_peoplePickerMenu | _HTMLDivElement_ |
| \_peoplePickerSearch | _HTMLInputElement_ |
| \_peoplePickerSearchBox | _HTMLDivElement_ |
| \_peoplePickerResults | _Array&lt;HTMLDivElement&gt;_ |
| \_selectedCount | _HTMLDivElement_ |
| \_selectedPeople | _HTMLDivElement_ |
| \_selectedPlural | _HTMLDivElement_ |
| \_selectResult(_ev | _Event_) | Selects the result. |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Create the people picker
var el = document.querySelector("#picker");
$REST.JS.Fabric.PeoplePicker({
    allowGroups: false,
    el: el,
    label: "My People Picker:"
});
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Create the people picker
let el = document.querySelector("#picker");
Fabric.PeoplePicker({
    allowGroups: false,
    el: el,
    label: "My People Picker:"
});
```