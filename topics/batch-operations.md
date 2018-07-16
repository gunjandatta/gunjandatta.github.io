---
layout: default
---
<div class="page-info" markdown="1">

[Back](/topics)
## [Batch Operations](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/make-batch-requests-with-the-rest-apis)

</div>

SharePoint Online contains the $batch api endpoint. This will enable multiple requests to be sent in one request to the server.
### Code Examples
#### Browser Console
```js
// Get the web
var web = $REST.Web();

// Add the web request to the batch
web.batch(function(web) { window.web = web; });

// Add the 'Site Assets' library request to the batch
web.Lists("Site Assets").batch(function(list) { window.list = list; });

// Execute the request
web.execute();
```
#### JavaScript
```js
var $REST = require("gd-sprest");

// Get the web
var web = $REST.Web();

// Get the lists
web.Lists()
    // Add a new list
    .add({
        BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList,
        Title: "DemoBatch"
    })
    // Add this request to the batch
    .batch();

// Loop 10 times
var ctr = 0;
do {
    // Get the list
    web.Lists("DemoBatch")
        // Get the items
        .Items()
        // Add an item
        .add({
            Title: "Batch Item " + (++ctr)
        })
        // Batch the add item requests together
        .batch(ctr > 1);
} while(ctr < 10);

// Get the list
web.Lists("DemoBatch")
    // Query the list
    .query({
        Expand: ["Items"],
        Select: ["*"]
    })
    // Add this request to the batch
    .batch(function(list) {
        var items = list.Items.results;
    });

// Execute the request
web.execute();
```
#### TypeScript
```ts
import { SPTypes, Web } from "gd-sprest";

// Get the web
var web = Web();

// Get the lists
web.Lists()
    // Add a new list
    .add({
        BaseTemplate: SPTypes.ListTemplateType.GenericList,
        Title: "DemoBatch"
    })
    // Add this request to the batch
    .batch();

// Loop 10 times
let ctr = 0;
do {
    // Get the list
    web.Lists("DemoBatch")
        // Add an item
        .add({
            Title: "Batch Item " + (++ctr)
        })
        // Batch the add item requests together
        .batch(ctr > 1);
} while(ctr < 10);

// Get the list
web.Lists("DemoBatch")
    // Query the list
    .query({
        Expand: ["Items"],
        Select: ["*"]
    })
    // Add this request to the batch
    .batch(list => {
        let items = list.Items.results;
    });

// Execute the request
web.execute();
```