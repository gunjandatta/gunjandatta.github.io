---
title: "Check User Permissions"
category: topics
permalink: /topics/permissions/
---
## Check User Permissions

This page will give an overview on how to check a user's permission(s) against a web or list.

### Step 1. Get the User Login Name

```ts
import { ContextInfo, Web } from "gd-sprest";

// Get the current user from the context information
let loginName = "i:0#.f|membership|" + ContextInfo.userLoginName;

// Get the current user from the web
Web().CurrentUser().execute(user => {
    // Save the user login name property
    user.LoginName;
});

// Get a specified user by id
Web().getUserById(5).execute(user => {
    // Save the user login property
    user.LoginName;
});
```

### Step 2. Get the Permissions

```ts
import { List, Web } from "gd-sprest";

// Web
Web().getUserEffectivePermissions(loginName).execute(perm => {
    // Save the permissions
    perm.GetUserEffectivePermissions;
});

// List
List("Site Assets").getUserEffectivePermissions(loginName).execute(perm => {
    // Save the permissions
    perm.GetUserEffectivePermissions;
});
```

### Step 3. Check the Permissions
```ts
import { Helper, SPTypes } from "gd-sprest";

// Check for 1+ permission types
Helper.hasPermissions(userEffectivePermissions, [SPTypes.BasePermissionTypes.AddListItems]).then(hasPermissions => {
    if(hasPermissions) {
        // Has permissions to add items to a list
    } else {
        // Does not have permissions to add items to a list
    }
});
```