---
layout: archive
title: "Web"
category: examples
permalink: /examples/web/
---
### Web

**_Reference the library_**

```js
// JavaScript
var $REST = require("gd-sprest");

// TypeScript
import { ContextInfo, Web } from "gd-sprest";
```

**_Get the current web_**

```js
// Get the web
$REST.Web()
    // Execute the request
    .execute(function(web) {
        // Code goes here
    });

// Get the web
Web()
    // Execute the request
    .execute(web => {
        // Code goes here
    });
```

**_Get the root web_**

```js
// Get the root web
$REST.Web($REST.ContextInfo.siteServerRelativeUrl)
    // Execute the request
    .execute(function(web) {
        // Code goes here
    });

// Get the root web
Web(ContextInfo.siteServerRelativeUrl)
    // Execute the request
    .execute(web => {
        // Code goes here
    });
```

**_Query the root web, expanding the fields and content types_**

```js
// Get the root web
$REST.Web($REST.ContextInfo.siteServerRelativeUrl)
    // Expand the content types and fields
    .query({
        Expand: ["ContentTypes", "Fields"]
    })
    // Execute the request
    .execute(function(web) {
        var contentTypes = web.ContentTypes.results;
        var fields = web.Fields.results;

        // Code goes here
    });

// Get the root web
Web(ContextInfo.siteServerRelativeUrl)
    // Expand the content types and fields
    .query({
        Expand: ["ContentTypes", "Fields"]
    })
    // Execute the request
    .execute(web => {
        let contentTypes = web.ContentTypes.results;
        let fields = web.Fields.results;

        // Code goes here
    });
```