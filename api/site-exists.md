---
layout: default
---
<div class="page-info" markdown="1">

[Back](/api)
## Site Exists

</div>

The site exists allows you to check if a site exists.

#### Properties

- url - The absolute url of the site.

### Code Reference

#### JavaScript

```js
// JavaScript
var $REST = require("gd-sprest");
$REST.SiteExists("https://[tenant].sharepoint.com/sites/dev").execute(function(site) {
    // See if the site exists
    if(site.Exists) {
    }
});
```

#### TypeScript

```ts
// TypeScript
import { Site } from "gd-sprest";

Site.exists("https://[tenant].sharepoint.com/sites/dev").execute(site => {
    // See if the site exists
    if(site.Exists) {
    }
});
```