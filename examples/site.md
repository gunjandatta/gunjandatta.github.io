---
layout: page
---

## Site
### Browser Console

#### Get the site collection

```js
var site = $REST.Site().executeAndWait();
```

#### Get the root site collection

```js
var site = $REST.Site("/").executeAndWait();
```

### JavaScript

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

### TypeScript

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