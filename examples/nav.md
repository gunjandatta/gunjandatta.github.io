---
layout: default
---
[Back](/api/nav)
## Navigation

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

#### Get the navigation
```js
var menu = $REST.Navigation().MenuState().executeAndWait();
```
#### Get a navigation node
```js
var menu = $REST.Navigation(1033).MenuState().executeAndWait();
```
#### Get the navigation specifying parameters
```js
var menu = $REST.Navigation().getMenuState(1025, 5).executeAndWait();
```
</div>

<!-- JavaScript -->
<div class="tab-content" markdown="1">

#### Reference the library
```js
var $REST = require("gd-sprest");
```
#### Get the navigation
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
```
#### Get a navigation node
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
```
</div>

<!-- TypeScript -->
<div class="tab-content" markdown="1">

#### Reference the library
```ts
import { Navigation } from "gd-sprest";
```
#### Get the navigation
```ts
// Get the navigation
(new Navigation())
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
#### Get a navigation node
```ts
// Get the navigation
(new Navigation())
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
</div>
</div>