---
layout: default
---
<div class="page-info" markdown="1">

[Back](/api/list)
## List

</div>

<!-- Tabs -->
<div class="tabs">
<!-- Tab Items -->
<div class="tab-items">
    <div class="tab-item">Browser Console</div>
    <div class="tab-item">JavaScript</div>
    <div class="tab-item">TypeScript</div>
</div>

<!-- Browser Console -->
<div class="tab-content" markdown="1">

#### Get a list from the current web
```js
var list = $REST.List("Site Assets").executeAndWait();
```
#### Get a list on the root web
```js
var list = $REST.Web("/").Lists("Site Assets").executeAndWait();
```
#### Query for all libraries
```js
var libraries = $REST.Web().Lists().query({ Filter: "BaseTemplate eq 101" }).executeAndWait();
```
#### Query list items
```js
var items = $REST.List("Site Assets").Items().query({ Filter: "Title eq 'My Filter'" }).executeAndWait();
```
</div>

<!-- JavaScript -->
<div class="tab-content" markdown="1">

#### Reference the library
```js
var $REST = require("gd-sprest");
```
#### Get a list from the current web
```js
// Get the list
$REST.List("Site Assets")
    // Execute the request
    .execute(function(list) {
        // Code goes here
    });
```
#### Get a list on the root web
```js
// Get the root web
$REST.Web("/")
    // Get the list
    .List("Site Assets")
    // Execute the request
    .execute(function(list) {
        // Code goes here
    });
```
#### Query list items
```js
// Get the list
$REST.List("Site Assets")
    // Get the items
    .Items()
    // Execute the request
    .execute(function(list) {
        // Code goes here
    });
```
#### Query for all libraries
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
```
#### Query for picture libraries, including their fields and items
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
```
</div>

<!-- TypeScript -->
<div class="tab-content" markdown="1">

#### Reference the library
```ts
import { List, Web } from "gd-sprest";
```
#### Get a list from the current web
```ts
// Get the list
(new List("Site Assets"))
    // Execute the request
    .execute(list => {
        // Code goes here
    });
```
#### Get a list on the root web
```ts
// Get the root web
(new Web("/"))
    // Get the list
    .List("Site Assets")
    // Execute the request
    .execute(list => {
        // Code goes here
    });
```
#### Query list items
```ts
// Get the list
(new List("Site Assets"))
    // Get the items
    .Items()
    // Execute the request
    .execute(list => {
        // Code goes here
    });
```
#### Query for all libraries
```ts
// Get the web
(new Web())
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
#### Query for picture libraries, including their fields and items
```ts
// Get the web
(new Web())
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
</div>
</div>