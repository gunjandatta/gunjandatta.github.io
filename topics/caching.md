---
layout: default
---

## Caching

Storing data in the local and session storage has its limitations. You can't simply stringify an class object and store it. This library was designed to create the SharePoint object types, from the response of the REST API request. This will allow the parsed JSON data, to include methods based on the object type.

### stringify

Each object result contains a "stringify" method, which combines the target information of the request and the response from the REST API.

### parse

The helper class contains a "parse" method, to generate the SharePoint object from the JSON data.

### JavaScript

```js
var $REST = require("gd-sprest");

// Method to load the data
function(load) {
    // Return a promise
    return new Promise(function(resolve, reject) {
        // See if the data has been loaded
        var data = localStorage.getItem("MyListItems");
        if(data) {
            // Parse the data
            var items = $REST.Helper.parse(data);
            if(items) {
                // Resolve the request
                resolve(items.results);
            }
        }

        // Get the target list by its name
        $REST.List("My List")
            // Get the items
            .Items()
            // Set the query
            .query({
                OrderBy: ["Category", "Title"]
            })
            // Execute the request
            .execute(function(items) {
                // Store the items in the local storage
                localStorage.setItem("MyListItems", items.stringify());

                // Resolve the results
                resolve(items.results);
            });
    });
}
```

### TypeScript

```ts
import { Helper, List } from "gd-sprest";

// Method to load the data
load = () => {
    // Return a promise
    return new Promise((resolve, reject) => {
        // See if the data has been loaded
        let data = localStorage.getItem("MyListItems");
        if(data) {
            // Parse the data
            let items = Helper.parse(data);
            if(items) {
                // Resolve the request
                resolve(items.results);
            }
        }


        // Get the target list by its name
        List("My List")
            // Get the items
            .Items()
            // Set the query
            .query({
                OrderBy: ["Category", "Title"]
            })
            // Execute the request
            .execute(items => {
                // Store the items in the local storage
                localStorage.setItem("MyListItems", items.stringify());

                // Resolve the results
                resolve(items.results);
            });
    });
}
```