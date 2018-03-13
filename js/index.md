---
layout: default
---
[Back](/)
## JavaScript
The [gd-sprest-js](https://github.com/gunjandatta/sprest-js) library contains JavaScript components designed for SharePoint 2013/Online, using the [Office Fabric UI JavaScript Framework](https://dev.office.com/fabric-js) to create an Office 365 modern experience.

### Getting Started
The library supports various ways of SharePoint development. The Office Fabric-UI css will need to be referenced, if it's not already available on the page.

#### No Build Example
##### Step 1
Download the minified version of the library:
- [gd-sprest-fabric.min.js](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/gd-sprest-fabric.min.js) - Includes the fabric core css.
- [gd-sprest-js.min.js](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/gd-sprest-js.min.js) - Does not include the fabric core css.

##### Step 2
Add a script editor webpart to the page, and set the content
```html
<div id="#tb"></tb>
<script type="text/javascript">
// Wait for the script to be loaded
SP.SOD.executeOrDelayUntilScriptLoaded(function() {
    // Render a text field
    $REST.JS.Fabric.TextField({
        el: document.querySelector("#tb")
    });
}, "gd-sprest-js.js");
</script>
```

#### JavaScript Library References
```js
// Import the library
var $REST = require("gd-sprest-js");

// Import the css libraries
require("node_modules/gd-sprest-js/build/lib/css/fabric.min.css");
require("node_modules/gd-sprest-js/build/lib/css/fabric.components.min.css");
require("node_modules/gd-sprest-js/build/lib/css/gd-sprest-js.css");
```

#### TypeScript Library References
```ts
// Import the components
import { Components, Fabric, WebParts } from "gd-sprest-js";

// Import the css libraries
import "node_modules/gd-sprest-js/build/lib/css/fabric.min.css";
import "node_modules/gd-sprest-js/build/lib/css/fabric.components.min.css";
import "node_modules/gd-sprest-js/build/lib/css/gd-sprest-js.css";
```

### Library References
- [Components](components)
    - [Field](components/field)
    - [List Form](components/listform)
    - [List Form Field](components/listformfield)
    - [List Form Panel](components/listformpanel)
- [Fabric](fabric)
    - [Button](fabric/button)
    - [Callout](fabric/callout)
    - [Checkbox](fabric/checkbox)
    - [Command Bar](fabric/commandbar)
    - [Command Button](fabric/commandbtn)
    - [Contextual Menu](fabric/contextualmenu)
    - [Date Picker](fabric/datepicker)
    - [Dialog](fabric/dialog)
    - [Dropdown](fabric/dropdown)
    - [Link Field](fabric/linkfield)
    - [List](fabric/list)
    - [List Item](fabric/listitem)
    - [Number Field](fabric/numberfield)
    - [Overlay](fabric/overlay)
    - [Panel](fabric/panel)
    - [People Picker](fabric/peoplepicker)
    - [Pivot](fabric/pivot)
    - [Spinner](fabric/spinner)
    - [Table](fabric/table)
    - [Text Field](fabric/textfield)
    - [Toggle](fabric/toggle)
- [WebParts](webparts)
    - [WebPart](webparts/wp)
    - [List](webparts/list)
    - [Search](webparts/search)
    - [Tabs](webparts/tabs)