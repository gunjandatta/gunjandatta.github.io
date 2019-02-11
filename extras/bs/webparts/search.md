---
layout: extras
---
# Bootstrap

### Search WebPart
The search webpart extends the list webpart, and includes a filterItems method to return items based on the inputed filter text.

#### Configuration
The edit form includes the searchable fields which values are targeted.

#### [Examples](/examples/solutions)
Refer to the custom solutions for examples of creating custom webparts.

##### JavaScript
```js
var WebParts = require("gd-sprest-bs").WebParts;

// Create the webpart
var wp = WebParts.WPSearch({
    elementId: "my-wpSearch",
    cfgElementId: "my-wpSearch-cfg",
    onRenderItems: function(wpInfo, items) {
        // Render the display element
        wpInfo.el.innerHTML = [
            '<h1>List: ' + wpInfo.ListName + '</h1>',
            '<h5>List Items: ' + items.length + '</h5>'
        ].join('\n');
    }
});
```

##### TypeScript
```ts
import { WebParts } from "gd-sprest-bs";

// Create the webpart
let wp = WebParts.WebPart({
    elementId: "my-wpSearch",
    cfgElementId: "my-wpSearch-cfg",
    onRenderItems: (wpInfo, items) => {
        // Render the display element
        wpInfo.el.innerHTML = [
            '<h1>List: ' + wpInfo.ListName + '</h1>',
            '<h5>List Items: ' + items.length + '</h5>'
        ].join('\n');
    }
});
```

#### Filter
##### filterItems(filterText:string) => Array&lt;Types.SP.IListItemQueryResult | Types.SP.IListItemResult&gt;

A "filterItems" method exists, to return the items matching the filter text.

#### Properties

| Name | Type | Description |
| --- | --- | --- |
| searchFields | _Array&lt;{ name: string, type: string }&gt;_ | The internal field names to be used for search. These will be appended to the configuration fields. |

#### WebPart Configuration (IWPCfg)

| Name | Type | Description |
| --- | --- | --- |
| Fields | _Array&lt;{ name: string, type: string }&gt;_ | The searchable fields. |