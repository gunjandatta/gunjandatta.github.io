---
layout: archive
title: "Social Feed"
category: api
permalink: /api/social-feed
---
[Documentation](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/social-feed-rest-api-reference-for-sharepoint)

### Code Example

```ts
// JavaScript
var $REST = require("gd-sprest");

// Get the current user's information
$REST.SocialFeed.my().execute(function(profile) {
    // Code goes here
});

// TypeScript
import { SocialFeed } from "gd-sprest";

// Get the current user's information
SocialFeed.my().execute(function(profile) {
    // Code goes here
});
```