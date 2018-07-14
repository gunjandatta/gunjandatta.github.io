---
layout: default
---
<div class="page-info" markdown="1">

[Back](/api)
## [Profile Loader](https://msdn.microsoft.com/en-us/library/office/dn790354.aspx#bk_ProfileLoader)

</div>

### Code Example
```ts
// JavaScript
var $REST = require("gd-sprest");
// Get the current user's profile
$REST.ProfileLoader().getUserProfile().execute(function(profile) {
    // Code goes here
});

// TypeScript
import { ProfileLoader } from "gd-sprest";

// Get the Profile Loader
(new ProfileLoader())
    // Get current user's profile
    .getUserProfile()
    // Execute the request
    .execute(profile => {
        // Code goes here
    });
```

### Methods

| Name | Description |
| --- | --- |
| createPersonalSiteEnqueueBulk(_emailIDs: Array&lt;string&gt;_) | Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files. |
| getOwnerUserProfile() | Gets the user profile of the site owner. |
| getUserProfile() | Gets the user profile that corresponds to the current user. |

_Reference the [User Profile Interface](user-profile) for the result type._