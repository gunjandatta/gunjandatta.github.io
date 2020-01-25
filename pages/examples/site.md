---
layout: archive
title: "Site"
category: examples
permalink: /examples/site/
---
**_Reference the library_**

```js
// JavaScript
var $REST = require("gd-sprest");

// TypeScript
import { List, Web } from "gd-sprest";
```

**_Get the current site collection_**

```js
// Get the site
$REST.Site()
    // Execute the request
    .execute(function(site) {
        // Code goes here
    });

// Get the site
Site()
    // Execute the request
    .execute(site => {
        // Code goes here
    });
```

**_Get the root site collection_**

```js
// Get the root site
$REST.Site("/")
    // Execute the request
    .execute(function(site) {
        // Code goes here
    });

// Get the root site
Site("/")
    // Execute the request
    .execute(site => {
        // Code goes here
    });
```