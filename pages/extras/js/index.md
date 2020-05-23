---
title: "Office Fabric-UI (JS)"
category: js
permalink: /extras/js/
sidebar-auto: true
---
#### Microsoft is no longer maintaining this Framework. Use the Office Fluent-UI React or Bootstrap JavaScript Library Instead

The [gd-sprest-js](https://github.com/gunjandatta/sprest-js) library contains JavaScript components designed for SharePoint 2013/Online, using the [Office Fabric UI JavaScript Framework](https://dev.office.com/fabric-js) to create an Office 365 modern experience.

### Getting Started

The library supports various ways of SharePoint development. The Office Fabric-UI css will need to be referenced, if it's not already available on the page.

**_Fabric Element_**

To ensure the styling doesn't conflict with other customizations, this library will require a "Fabric" element.
```html
<div class="fabric">
  <!-- styling applied here -->
</div>
```

**_gd-sprest-js JavaScript References_**

The dist directory contains the js references:

- (1.12 MB) [gd-sprest-fabric.js](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/gd-sprest-fabric.js) - Includes the Office Fabric-UI Core styling.
- (680 KB) [gd-sprest-fabric.min.js](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/gd-sprest-fabric.min.js) - The minified version of the gd-sprest-fabric.js file.
- (945 KB) [gd-sprest-js.js](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/gd-sprest-js.js) - Excludes the Office Fabric-UI Core styling.
- (507 KB) [gd-sprest-js.min.js](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/gd-sprest-js.min.js) - The minified version of the gd-sprest-js.js file.

**_Office Fabric-UI CSS References_**

The build directory contains the css references for importing. The Office Fabric-UI Core version used by the latest Office Fabric-UI JavaScript is 5.0.1. There is a [github issue](https://github.com/OfficeDev/office-ui-fabric-js/issues/346) with a request to update it. Feel free to post a comment there to help keep that framework updated.

- (349 KB) [fabric.css](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/fabric.css) - The Office Fabric-UI Core + Office Fabric-UI JavaScript Components + gd-sprest-js Components styling.
- (294 KB) [fabric.min.css](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/fabric.min.css) - The minified version of the fabric.css file.
- (155 KB) [fabric.components.css](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/fabric.components.css) - The Office Fabric-UI JavaScript Components + gd-sprest-js Components styling.
- (122 KB) [fabric.components.min.css](https://raw.githubusercontent.com/gunjandatta/sprest-js/master/dist/fabric.components.min.css) - The minified version of the fabric.components.css file.

**_No Build Example_**

- Step 1

Download the minified version of the library from above.

- Step 2

Add a script editor webpart to the page, and set the content

```html
<div id="tb" class="fabric"></tb>
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

**_JavaScript Library References_**

```js
// Import the library
var $REST = require("gd-sprest-js");

// Import the office fabric-ui core + fabric-ui js components styling
require("gd-sprest-js/build/lib/css/fabric.min.css");
```

**_TypeScript Library References_**

```ts
// Import the components
import { Components, Fabric, WebParts } from "gd-sprest-js";

// Import the office fabric-ui js components styling
import "gd-sprest-js/build/lib/css/fabric.components.min.css";
```