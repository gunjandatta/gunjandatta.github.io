---
layout: default
---
<div class="page-info" markdown="1">

[Back](/topics)
## Cross Site-Collection Requests

</div>

When making requests to other site collections, it's important to note that GET requests will work without any issues. When making a POST request, the request digest must be provided in order for the request to be completed. The [ContextInfo](context-info) class contains a helper method for getting this information.
### Domain Limitation
In order to use the REST api against other site collections, the domain **MUST** be the same. The only exception is an app web, where the REST api is allowed to make requests from the app domain to the SharePoint domain.

### GET vs POST Requests
If you are performing a GET request against a different site collection, you don't need to specify the request digest. If you try to execute a POST request against a different site collection, you will most likely get a security error.
```
The security validation for this page is invalid and might be corrupted.
Please use your web browser's Back button to try your operation again.
```
The "Request Digest" comes from the "SharePoint:FormDigest" component available on SharePoint pages. The element containing this value can be retrieved by doing the following:
```js
document.querySelector("#__REQUESTDIGEST").value
```

If you are executing a POST request to a different site collection, we will need to get the context information of the target web first. Below is an example of getting the list information using CAML query on the root web.

#### Helper Class
The [Context Information](/topics/context-info) helper class contains a **getWeb** method. This method will return the request digest of the target web, so we can pass it to the request.

##### Browser Console
###### Query List/Library in the root web using CAML
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
##### JavaScript
###### Query List/Library in the root web using CAML
```js
var $REST = require("gd-sprest");

// Get the context information of the root web
$REST.ContextInfo.getWeb("/").execute((contextInfo) => {
    // Get the root web
    $REST.Web("/", { requestDigest: contextInfo.GetContextWebInformation.FormDigestValue })
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
##### TypeScript
###### Query List/Library in the root web using CAML
```ts
import { ContextInfo, Web } from "gd-sprest";

// Get the context information of the root web
ContextInfo.getWeb("/").execute((contextInfo) => {
    // Get the root web
    (new Web("/", { requestDigest: contextInfo.GetContextWebInformation.FormDigestValue }))
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