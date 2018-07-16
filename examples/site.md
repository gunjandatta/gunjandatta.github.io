---
layout: default
---
<div class="page-info" markdown="1">

[Back](/api/site)
## Site

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

#### Get the site collection
```js
var site = $REST.Site().executeAndWait();
```
#### Get the root site collection
```js
var site = $REST.Site("/").executeAndWait();
```
</div>

<!-- JavaScript -->
<div class="tab-content" markdown="1">

#### Reference the library
```js
var $REST = require("gd-sprest");
```
#### Get the current site collection
```js
// Get the site
$REST.Site()
    // Execute the request
    .execute(function(site) {
        // Code goes here
    });
```
#### Get the root site collection
```js
// Get the root site
$REST.Site("/")
    // Execute the request
    .execute(function(site) {
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
#### Get the current site collection
```ts
// Get the site
Site()
    // Execute the request
    .execute(site => {
        // Code goes here
    });
```
#### Get the root site collection
```ts
// Get the root site
Site("/")
    // Execute the request
    .execute(site => {
        // Code goes here
    });
```
</div>
</div>