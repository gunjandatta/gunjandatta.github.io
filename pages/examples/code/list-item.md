---
title: "List Item"
category: examples
permalink: /examples/code/list-item/
---
## Reference the library

```ts
// JavaScript
var $REST = require("gd-sprest");

// TypeScript
import { List } from "gd-sprest";
```

## Get a list item by ID from the current web

```js
// Get the list
$REST.List("Site Assets")
    // Get the Item
    .Items([Item ID])
    // Execute the request
    .execute(function(item) {
        // Code goes here
    });

// Get the list
List("Site Assets")
    // Get the Item
    .Items([Item ID])
    // Execute the request
    .execute((item) => {
        // Code goes here
    });
```

## Get a list item by ID on the root web

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

## Add a list item

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

## Update a list item

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

## Delete a list item

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