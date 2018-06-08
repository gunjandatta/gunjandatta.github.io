---
layout: default
---
[Back](/api)
## Get Site URL By Id
This api endpoint will return the url of a site, by its id.

#### Properties

- id - The site id.

### Code Reference

#### JavaScript

```js
// JavaScript
var $REST = require("gd-sprest");
$REST.SiteUrl("[Site GUID]").execute(function(site) {
    // Get the url
    var siteUrl = site.GetUrlById;
});
```

#### TypeScript

```ts
// TypeScript
import { Site } from "gd-sprest";

Site.getUrlById("[Site GUID]").execute(site => {
    // Get the url
    let siteUrl = site.GetUrlById;
});
```