---
layout: default
---
[Back](/js/fabric)
## [Panel](https://dev.office.com/fabric-js/Components/Panel/Panel.html)
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the main element. |
| el | _HTMLElement_ | The element to render the panel to. |
headerText?: string;
/** The header text. */
isBlocking?: boolean;
/** True for blocking panels. */
panelContent?: string;
/** The panel content. */
panelFooter?: string;
/** The panel footer content. */
panelHeader?: string;
/** The panel header content. */
| panelType | _number_ | The panel type
showCloseButton | _boolean_ | True to show the close button.
visible | _boolean_ | Flag to display it by default.

### Panel Interface

| Name | Type/Description |
| --- | --- |
| get() | Returns the fabric component. |
| getContent() | Returns the panel content element. |
| getFooter() | Returns the panel footer element. |
| getHeader() | Returns the panel header element. |
| hide() | Hides the panel. |
| isOpen() | Returns true if the panel is open, false otherwise. |
| show(_content?: string_) | Shows the panel. |
| updateContent(_content?: string_) | Updates the panel content. |
| updateFooter(_content?: string_) | Updates the panel footer. |
| updateHeader(_content?: string_) | Updates the panel header. |

### Fabric Panel Interface

| Name | Type | Description |
| --- | --- | --- |
| \_animateOverlay | _boolean_ | Flag to animate the overlay. |
| \_clickHandler | _EventListener_ | The click handler. |
| \_closeButton | _HTMLElement_ | The panel close button. |
| \_direction | _string_ | The panel direction. |
| \_panel | _HTMLDivElement_ | The panel element. |
| panelHost | _IPanelHost_ | The panel host element. |
| dismiss(_callback?: Function_) | | Closes the panel.

### Fabric Panel Host Interface

| Name | Type | Description |
| --- | --- | --- |
| overlay | _IOverlay_ | The overlay. |
| panelHost | _HTMLDivElement_ | The panel host element. |
| dismiss() | | Method to hide the overlay. |
| update(_layer: Node, callback?: Function_) | | Method to update the overlay. |

### Code Examples
#### JavaScript
```js
var $REST = require("gd-sprest-js");

// Display a panel
var el = document.querySelector("#panel");
var panel = $REST.JS.Fabric.Panel({
    el: el,
    headerText: "My Panel",
    isBlocking: true,
    panelType: $REST.JS.Fabric.PanelTypes.Large
});
```
#### TypeScript
```ts
import { Fabric } from "gd-sprest-js";

// Display a panel
var el = document.querySelector("#panel");
var panel = abric.Panel({
    el: el,
    headerText: "My Panel",
    isBlocking: true,
    panelType: Fabric.PanelTypes.Large
});
```