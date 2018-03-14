---
layout: default
---
[Back](/js)
## Getting Started
The library supports various ways of SharePoint development. The Office Fabric-UI css will need to be referenced, if it's not already available on the page.

### No Build Example
#### Step 1
Download the minified version of the library:
- [gd-sprest-fabric.min.js](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/gd-sprest-fabric.min.js) - Includes the fabric core css.
- [gd-sprest-js.min.js](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/gd-sprest-js.min.js) - Does not include the fabric core css.

#### Step 2
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

### JavaScript Library References
```js
// Import the library
var $REST = require("gd-sprest-js");

// Import the css libraries
require("gd-sprest-js/build/lib/css/fabric.min.css");
require("gd-sprest-js/build/lib/css/fabric.components.min.css");
require("gd-sprest-js/build/lib/css/gd-sprest-js.css");
```

### TypeScript Library References
```ts
// Import the components
import { Components, Fabric, WebParts } from "gd-sprest-js";

// Import the css libraries
import "gd-sprest-js/build/lib/css/fabric.min.css";
import "gd-sprest-js/build/lib/css/fabric.components.min.css";
import "gd-sprest-js/build/lib/css/gd-sprest-js.css";
```