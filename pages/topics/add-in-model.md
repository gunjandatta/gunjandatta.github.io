---
title: "Add-In Model"
category: topics
permalink: /topics/add-in-model/
---
The following helper methods are available for solutions utilizing the Add-In Model.

## App Web vs Host Web
When developing in the app web, the request url will need to be formatted when executing a request to the host web. The _DefaultRequestToHostFl_ is available to control the target web associated with the REST API request. This will allow you to develop code once, and use it in any solution (Add-In, WebPart, SPFx, etc).

## Global Variable (DefaultReqeustToHostFl)
The _DefaultRequestToHostFl_ is false by default, so it will target the current web unless a url is provided.

### Code Example

```ts
import { $REST } from "gd-sprest";

// Target the host web
$REST.DefaultRequestToHostFl = true;

// Get the style library items from the host web
$REST.Web().Lists("Style Library").Items().execute(items => {
    // Parse the items
    for(let i=0; i<items.results.length; i++) {
        let item = items.results[i];
    }
});

// Target the add-in web
$REST.DefaultRequestToHostFl = false;

// Get "My List" fields and items from the app web
$REST.List("My List").query({
    Expand: ["Fields", "Items"]
}).execute(list => {
    // Parse the fields
    for(let i=0; i<list.Fields.results.length; i++) {
        let field = list.Fields.results[i];
    }

    // Parse the items
    for(let i=0; i<list.Items.results.length; i++) {
        let item = list.Items.results[i];
    }
});
```