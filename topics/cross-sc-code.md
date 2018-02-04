---
layout: default
---
[Back](/api/automation)
## Cross Site-Collection Code Examples
### Browser Console
#### Query List/Library in the root web using CAML
```js
var contextInfo = $REST.ContextInfo.getWeb("/").executeAndWait();
var requestDigest = contextInfo.GetContextWebInformation.FormDigestValue;

// Query the root web for items
var web = $REST.Web("/", { requestDigest: requestDigest });

// Get the 'Site Assets' library
var list = web.Lists("Site Assets");

// Query for the items
var items = list.getItemsByQuery("<Query><OrderBy><FieldRef Name='ID' /></OrderBy></Query>").executeAndWait();

/** OR */

// Query for the items
var items = $REST.Web("/", { requestDigest: requestDigest }).Lists("Site Assets").getItemsByQuery("<Query><OrderBy><FieldRef Name='ID' /></OrderBy></Query>").executeAndWait();

// Parse the items
if(items.results) {
    // Parse the items
    for(var i=0; i<items.results; i++) {
        var item = items.results[i];
    }
}
```
### JavaScript
#### Query List/Library in the root web using CAML
```js
var $REST = require("gd-sprest");

// Get the context information of the root web
$REST.ContextInfo.getWeb("/").execute((contextInfo) => {
    var requestDigest = contextInfo.GetContextWebInformation.FormDigestValue;

    // Get the root web
    $REST.Web("/", { requestDigest: requestDigest })
        // Get the 'Site Assets' library
        .Lists("Site Assets")
        // Query for the items
        .getItemsByQuery("<Query><OrderBy><FieldRef Name='ID' /></OrderBy></Query>")
        // Execute the request
        .execute((items) => {
            // Parse the items
            for(let i=0; i<items.results.length; i++) {
                var item = items.results[i];
            }
        });
});
```
### TypeScript
#### Query List/Library in the root web using CAML
```ts
import { ContextInfo, Web } from "gd-sprest";

// Get the context information of the root web
ContextInfo.getWeb("/").execute((contextInfo) => {
    let requestDigest = contextInfo.GetContextWebInformation.FormDigestValue;

    // Get the root web
    (new Web("/", { requestDigest }))
        // Get the 'Site Assets' library
        .Lists("Site Assets")
        // Query for the items
        .getItemsByQuery("<Query><OrderBy><FieldRef Name='ID' /></OrderBy></Query>")
        // Execute the request
        .execute(items => {
            // Parse the items
            for(let i=0; i<items.results.length; i++) {
                let item = items.results[i];
            }
        });
});
```