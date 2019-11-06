---
layout: archive
title: "User Profile"
category: api
permalink: /api/user-profile
---
[Documentation](https://msdn.microsoft.com/en-us/library/office/dn790354.aspx)

### Code Example

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.UserProfile().execute(function(myProfile) {
    // Code goes here
});

// TypeScript
import { UserProfile } from "gd-sprest";
UserProfile().execute(myProfile => {
    // Code goes here
});
```