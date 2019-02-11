---
layout: page
---

## Web

### Browser Console

#### Get the current web

```js
var web = $REST.Web().executeAndWait();
```

#### Get the root web

```js
var web = $REST.Web("/").executeAndWait();
```

#### Query the root web, expanding the fields and content types

```js
var web = $REST.Web("/").query({ Expand: ["ContentTypes", "Fields"] }).executeAndWait();
var contentTypes = web.ContentTypes.results;
var fields = web.Fields.results;
```

### JavaScript

#### Reference the library

```js
var $REST = require("gd-sprest");
```

#### Get the current web

```js
// Get the web
$REST.Web()
    // Execute the request
    .execute(function(web) {
        // Code goes here
    });
```

#### Get the root web

```js
// Get the root web
$REST.Web($REST.ContextInfo.siteServerRelativeUrl)
    // Execute the request
    .execute(function(web) {
        // Code goes here
    });
```

#### Query the root web, expanding the fields and content types

```js
// Get the root web
$REST.Web($REST.ContextInfo.siteServerRelativeUrl)
    // Expand the content types and fields
    .query({
        Expand: ["ContentTypes", "Fields"]
    })
    // Execute the request
    .execute(function(web) {
        var contentTypes = web.ContentTypes.results;
        var fields = web.Fields.results;

        // Code goes here
    });
```

### TypeScript

#### Reference the library

```ts
import { ContextInfo, Web } from "gd-sprest";
```

#### Get the current web

```ts
// Get the web
Web()
    // Execute the request
    .execute(web => {
        // Code goes here
    });
```

#### Get the root web

```ts
// Get the root web
Web(ContextInfo.siteServerRelativeUrl)
    // Execute the request
    .execute(web => {
        // Code goes here
    });
```

#### Query the root web, expanding the fields and content types

```ts
// Get the root web
Web(ContextInfo.siteServerRelativeUrl)
    // Expand the content types and fields
    .query({
        Expand: ["ContentTypes", "Fields"]
    })
    // Execute the request
    .execute(web => {
        let contentTypes = web.ContentTypes.results;
        let fields = web.Fields.results;

        // Code goes here
    });
```