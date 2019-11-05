---
layout: archive
title: "Site Exists"
category: api
permalink: /api/site-exists
---
The site exists allows you to check if a site exists.

#### Properties

- url - The absolute url of the site.

### Code Example

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.SiteExists("https://[tenant].sharepoint.com/sites/dev").execute(function(site) {
    // See if the site exists
    if(site.Exists) {
    }
});

// TypeScript
import { Site } from "gd-sprest";

Site.exists("https://[tenant].sharepoint.com/sites/dev").execute(site => {
    // See if the site exists
    if(site.Exists) {
    }
});
```