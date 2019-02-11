---
layout: extras
---
# Office Fabric-UI (JS)

## [Dropdown](https://dev.office.com/fabric-js/Components/Dropdown/Dropdown.html)

### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the dropdown to. |
| description | _string_ | The drop down description. |
| isUnsorted | _boolean_ | Flag determining if the selected options are sorted alphabetically. |
| multi | _boolean_ | Allow multiple values. |
| onChange | _(value: Array&lt;IDropdownOption&gt;) => void_ | The change event |
| options | _Array&lt;IDropdownOption&gt;_ | The dropdown options. |
| placeholder | _string_ | The placeholder text. |
| value | _string | Array&lt;string&gt;_ | The dropdown value(s). |

### IDropdownOption Interface
| Name | Type | Description |
| --- | --- | --- |
| isSelected | _boolean_ | Flag determining if the option is selected |
| options | _Array&lt;IDropdownOption&gt;_ | The option children. |
| text | _string_ | The option text. |
| value | _any_ | The option value. |

### IDropdown Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the text element. |
| getFabricComponent() | Returns the fabric component. |
| getValue() | Returns the dropdown selected option(s). |
| setOptions(_options: Array&lt;IDropdownOption&gt;_) | Updates the dropdown options. |

### JavaScript

```js
var $REST = require("gd-sprest-js");

// Create the 
var el = document.querySelector("#");
$REST.JS.Fabric.({
    el: el,
});
```

### TypeScript

```ts
import { Fabric } from "gd-sprest-js";

// Create the 
let el = document.querySelector("#");
Fabric.({
    el,
});
```