---
layout: page
---
# Code Examples

### List

**_Reference the library_**

```js
// JavaScript
var $REST = require("gd-sprest");

// TypeScript
import { List, Web } from "gd-sprest";
```

**_Get a list from the current web_**

```js
// Get the list
$REST.List("Site Assets")
    // Execute the request
    .execute(function(list) {
        // Code goes here
    });

// Get the list
List("Site Assets")
    // Execute the request
    .execute(list => {
        // Code goes here
    });
```

**_Get a list on the root web_**

```js
// Get the root web
$REST.Web("/")
    // Get the list
    .List("Site Assets")
    // Execute the request
    .execute(function(list) {
        // Code goes here
    });

// Get the root web
Web("/")
    // Get the list
    .List("Site Assets")
    // Execute the request
    .execute(list => {
        // Code goes here
    });
```

**_Query list items_**

```js
// Get the list
$REST.List("Site Assets")
    // Get the items
    .Items()
    // Execute the request
    .execute(function(list) {
        // Code goes here
    });

// Get the list
List("Site Assets")
    // Get the items
    .Items()
    // Execute the request
    .execute(list => {
        // Code goes here
    });
```

**_Query for all libraries_**

```js
// Get the web
$REST.Web()
    // Get the lists
    .Lists()
    // Query for the libraries
    .query({
        Filter: "BaseTemplate eq 101"
    })
    // Execute the request
    .execute(function(lists) {
        // Parse the lists
        for(var i=0; i<lists.results.length; i++;) {
            var list = lists.results[i];
            // Code goes here
        }
    });

// Get the web
Web()
    // Get the lists
    .Lists()
    // Query for the libraries
    .query({
        Filter: "BaseTemplate eq 101"
    })
    // Execute the request
    .execute(lists => {
        // Parse the lists
        for(let i=0; i<lists.results.length; i++;) {
            let list = lists.results[i];
            // Code goes here
        }
    });
```

**_Query for picture libraries, including their fields and items_**

```js
// Get the web
$REST.Web()
    // Get the lists
    .Lists()
    // Query for the libraries
    .query({
        Expand: ["Fields", "Items"],
        Filter: "BaseTemplate eq 109"
    })
    // Execute the request
    .execute(function(lists) {
        // Parse the lists
        for(var i=0; i<lists.results.length; i++;) {
            var list = lists.results[i];
            var fields = list.Fields.results;
            var items = list.Items.results;

            // Code goes here
        }
    });

// Get the web
Web()
    // Get the lists
    .Lists()
    // Query for the libraries
    .query({
        Expand: ["Fields", "Items"],
        Filter: "BaseTemplate eq 109"
    })
    // Execute the request
    .execute(lists => {
        // Parse the lists
        for(let i=0; i<lists.results.length; i++;) {
            let list = lists.results[i];
            let fields = list.Fields.results;
            let items = list.Items.results;

            // Code goes here
        }
    });
```