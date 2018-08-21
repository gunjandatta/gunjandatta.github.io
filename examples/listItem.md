---
layout: default
---
<div class="page-info" markdown="1">

[Back](/examples)
## List Item

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

#### Get a list item by ID from the current web
```js
var item = $REST.List("Site Assets").Items([Item ID]).executeAndWait();
```
#### Get a list item by ID on the root web
```js
var item = $REST.Web("/").Lists("Site Assets").Items([Item ID]).executeAndWait();
```
#### Add a list item
```js
var item = $REST.List("My List").Items().add({
    Title: "My Item Title",
    InternalFieldName: Value
}).executeAndWait();
```
#### Update a list item
```js
$REST.List("My List").Items([Item ID]).update({
    Title: "My Item Title",
    InternalFieldName: Value
}).executeAndWait();
```
#### Delete a list item
```js
$REST.List("My List").Items([Item ID]).delete().executeAndWait();
```

</div>

<!-- JavaScript -->
<div class="tab-content" markdown="1">

#### Reference the library
```js
var $REST = require("gd-sprest");
```
#### Get a list item by ID from the current web
```js
// Get the list
$REST.List("Site Assets")
    // Get the Item
    .Items([Item ID])
    // Execute the request
    .execute(function(item) {
        // Code goes here
    });
```
#### Get a list item by ID on the root web
```js
// Get the root web
$REST.Web("/")
    // Get the list
    .List("Site Assets")
    // Get the Item
    .Items([Item ID])
    // Execute the request
    .execute(function(item) {
        // Code goes here
    });
```
#### Add a list item
```js
// Get the list
$REST.List("My List")
    // Get the Items
    .Items()
    // Add the item
    .add({
        Title: "My Item Title",
        InternalFieldName: Value
    })
    // Execute the request
    .execute(function(item) {
        // Code goes here
    });
```
#### Update a list item
```js
// Get the list
$REST.List("My List")
    // Get the Item
    .Items([Item ID])
    // Update the item
    .update({
        Title: "My Item Title",
        InternalFieldName: Value
    })
    // Execute the request
    .execute(function() {
        // Code goes here
    });
```
#### Delete a list item
```js
// Get the list
$REST.List("My List")
    // Get the Item
    .Items([Item ID])
    // Delete the item
    .delete()
    // Execute the request
    .execute(function() {
        // Code goes here
    });
```

</div>

<!-- TypeScript -->
<div class="tab-content" markdown="1">

#### Reference the library
```ts
import { List, Web } from "gd-sprest";
```
#### Get a list item by ID from the current web
```js
// Get the list
List("Site Assets")
    // Get the Item
    .Items([Item ID])
    // Execute the request
    .execute((item) => {
        // Code goes here
    });
```
#### Get a list item by ID on the root web
```js
// Get the root web
Web("/")
    // Get the list
    .List("Site Assets")
    // Get the Item
    .Items([Item ID])
    // Execute the request
    .execute((item) => {
        // Code goes here
    });
```
#### Add a list item
```js
// Get the list
List("My List")
    // Get the Items
    .Items()
    // Add the item
    .add({
        Title: "My Item Title",
        InternalFieldName: Value
    })
    // Execute the request
    .execute((item) => {
        // Code goes here
    });
```
#### Update a list item
```js
// Get the list
List("My List")
    // Get the Item
    .Items([Item ID])
    // Update the item
    .update({
        Title: "My Item Title",
        InternalFieldName: Value
    })
    // Execute the request
    .execute(() => {
        // Code goes here
    });
```
#### Delete a list item
```js
// Get the list
List("My List")
    // Get the Item
    .Items([Item ID])
    // Delete the item
    .delete()
    // Execute the request
    .execute(() => {
        // Code goes here
    });
```

</div>
</div>