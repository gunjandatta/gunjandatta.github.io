---
layout: archive
title: "Cross Site-Collection Requests"
category: topics
permalink: /topics/cross-sc/
---
When making requests to other site collections, it's important to note that GET requests will work without any issues. When making a POST request, the request digest must be provided in order for the request to be completed. The [ContextInfo](context-info) class contains a helper method for getting this information.

**_Domain Limitation_**

In order to use the REST api against other site collections, the domain **MUST** be the same. The only exception is an app web, where the REST api is allowed to make requests from the app domain to the SharePoint domain.

**_GET vs POST Requests_**

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

**_Context Information_**

The [Context Information](context-info) contains the **getWeb** method, which will return the request digest of the target web. The request digest value will allow us to execute POST requests against the target web.

### Code Examples

**_Query List/Library in the root web using CAML_**

```ts
import { ContextInfo, Web } from "gd-sprest";

// Get the context information of the root web
ContextInfo.getWeb("/").execute((contextInfo) => {
    // Get the root web
    Web("/", { requestDigest: contextInfo.GetContextWebInformation.FormDigestValue })
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