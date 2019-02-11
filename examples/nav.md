---
layout: page
---
# Code Examples

**_Reference the library_**

```js
// JavaScript
var $REST = require("gd-sprest");

// TypeScript
import { Navigation } from "gd-sprest";
```

**_Get the navigation_**

```js
// Get the navigation
$REST.Navigation()
    // Get the menu state
    .MenuState()
    // Execute the request
    .execute(function(menu) {
        // Parse the menu nodes
        var nodes = menu.Nodes.results;
        for(var i=0; i<nodes.length; i++) {
            var node = nodes[i];

            // Code goes here
        });
    });

// Get the navigation
Navigation()
    // Get the menu state
    .MenuState()
    // Execute the request
    .execute(menu => {
        // Parse the menu nodes
        let nodes = menu.Nodes.results;
        for(let i=0; i<nodes.length; i++) {
            let node = nodes[i];

            // Code goes here
        });
    });
```

**_Get a navigation node_**

```js
// Get the navigation
$REST.Navigation()
    // Get the menu state
    .MenuState(1033)
    // Execute the request
    .execute(function(menu) {
        // Parse the menu nodes
        var nodes = menu.Nodes.results;
        for(var i=0; i<nodes.length; i++) {
            var node = nodes[i];

            // Code goes here
        });
    });

// Get the navigation
Navigation()
    // Get the menu state
    .MenuState(1033)
    // Execute the request
    .execute(menu => {
        // Parse the menu nodes
        let nodes = menu.Nodes.results;
        for(let i=0; i<nodes.length; i++) {
            let node = nodes[i];

            // Code goes here
        });
    });
```