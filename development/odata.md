---
layout: default
---
[Back](/development)
## OData Requests

The REST API allows for OData requests to be made to each request. This will allow us to expand collections of the target object, to help reduce the number of requests made to the server.

<!-- Tabs -->
<div class="tabs">
<!-- Tab Items -->
<div class="tab-items">
    <div class="tab-item">Query Properties</div>
    <div class="tab-item">Browser Console</div>
    <div class="tab-item">JavaScript</div>
    <div class="tab-item">TypeScript</div>
</div>

<!-- Tab Content -->
<div class="tab-content" markdown="1">

* Custom: _string_
    * Appended to the querystring
* Expand: _Array&lt;string&gt;_
    * The properties to expand
* Filter: _string_
    * The filter
* GetAllItems: _boolean_
    * Flag to get all items (False by default)
    * Use this flag to get past the 5k limit
    * The result is still limited to the threshold defined for the web application
* OrderBy: _Array&lt;string&gt;_
    * An array of properties to order by
    * Add " desc" to the property, to reverse the order
* Select: _Array&lt;string&gt;_
    * An array of properties to be selected
* Skip: _number_
    * The number of results to skip
* Top: _number_
    * The max number of results to return
    * 5000 is the max limit
    * Setting the "GetAllItems" flag will get past the 5k limit

</div>
<div class="tab-content" markdown="1">

##### Get the web, expanding the field, lists and root folder
```js
var web = $REST.Web().query({ Expand: ["Fields", "Lists", "RootFolder"] }).executeAndWait();
var fields = web.Fields.results;
var lists = web.Lists.results;
var rootFolder = web.RootFolder;
```


</div>
<div class="tab-content" markdown="1">

##### Reference the library
```js
var $REST = require("gd-sprest");
```
##### Get the web, expanding the field, lists and root folder
```js
// Get the current web
$REST.Web()
    // Expand the fields, lists and root folder properties
    .query({
        Expand: ["Fields", "Lists", "RootFolder"]
    })
    // Execute the request
    .execute(function(web) {
        var fields = web.Fields.results;
        var lists = web.Lists.results;
        var rootFolder = web.RootFolder;
    });
```
##### Query for picture libraries, including their items
```js
// Get the current web
$REST.Web()
    // Get the lists
    .Lists()
    // Query for the picture libraries, including the items
    .query({
        Expand: ["Items"],
        Filter: "BaseTemplate eq 109"
    })
    // Execute the request
    .execute(function(lists) {
        // Parse the lists
        for(var i=0; i<lists.results.length; i++;) {
            var list = lists.results[i];
            var items = list.Items.results;

            // Code goes here
        }
    });
```

</div>
<div class="tab-content" markdown="1">

##### Reference the library
```ts
import { Web } from "gd-sprest";
```
##### Get the web, expanding the field, lists and root folder
```ts
// Get the current web
(new Web())
    // Expand the fields, lists and root folder properties
    .query({
        Expand: ["Fields", "Lists", "RootFolder"]
    })
    // Execute the request
    .execute(web => {
        let fields = web.Fields.results;
        let lists = web.Lists.results;
        let rootFolder = web.RootFolder;
    });
```
##### Query for picture libraries, including their items
```ts
// Get the current web
(new Web())
    // Get the lists
    .Lists()
    // Query for the picture libraries, including the items
    .query({
        Expand: ["Items"],
        Filter: "BaseTemplate eq 109"
    })
    // Execute the request
    .execute(lists => {
        // Parse the lists
        for(let i=0; i<lists.results.length; i++;) {
            let list = lists.results[i];
            let items = list.Items.results;

            // Code goes here
        }
    });
```

</div>
</div>