---
layout: default
---

## Permissions

The ```SPTypes``` contains the BasePermissionTypes enumerator which is used to determine what permissions a user has to a web, list or list item. The ```Helper``` class contains a ```hasPermissions(permissionMask, permissions)``` method returns true/false, based on the requested permission(s). The ```permissions``` property may be a single permission type or an array or permission types.

### Getting Permissions for Current User

The web, list and list item components have a ```EffectiveBasePermissions``` property that can be queried.

#### Get Web Permissions
The code example below will check if a user has manage permissions to a web.

##### JavaScript
```js
var $REST = require("gd-sprest");

// Method to get a user's the permissions for a web
function hasPermissions() {
    // Return a promise
    return new Promise(function(resolve, reject) {
        // Get the permissions for the user
        $REST.Web().query({ Select: ["EffectiveBasePermissions"] }).execute(function(web) {
            // Determine if the user has edit permissions
            var hasPermissions = $REST.Helper.hasPermissions(web.EffectiveBasePermissions, $REST.SPTypes.BasePermissionTypes.ManagePermissions);

            // Resolve the promise
            resolve(hasPermissions);
        });
    });
}
```

##### TypeScript
```ts
import { Helper, Web, SPTypes } from "gd-sprest";

// Method to get a user's the permissions for a web
function hasPermissions(): PromiseLike<boolean> {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the permissions for the user
        Web().query({ Select: ["EffectiveBasePermissions"] }).execute(web => {
            // Determine if the user has edit permissions
            var hasPermissions = Helper.hasPermissions(web.EffectiveBasePermissions, SPTypes.BasePermissionTypes.ManagePermissions);

            // Resolve the promise
            resolve(hasPermissions);
        });
    });
}
```

### Getting Permissions for Another User

The web, list and list item components have the ability to get the permissions by a user's login name.

#### Get List Permissions
The code example below will check if a user has edit permissions to a list.

##### JavaScript
```js
var $REST = require("gd-sprest");

// Method to get a user's the permissions for a list
function hasPermissions(listName, loginName) {
    // Return a promise
    return new Promise(function(resolve, reject) {
        // Get the permissions for the user
        $REST.List(listName).getUserEffectivePermissions(loginName).execute(function(permissions) {
            // Determine if the user has edit permissions
            var hasPermissions = $REST.Helper.hasPermissions(permissions, $REST.SPTypes.BasePermissionTypes.EditListItems);

            // Resolve the promise
            resolve(hasPermissions);
        });
    });
}
```

##### TypeScript
```ts
import { Helper, List, SPTypes } from "gd-sprest";

// Method to get a user's the permissions for a list
function hasPermissions(listName:string, loginName:string): PromiseLike<boolean> {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the permissions for the user
        List(listName).getUserEffectivePermissions(loginName).execute(permissions => {
            // Determine if the user has edit permissions
            let hasPermissions = Helper.hasPermissions(permissions, SPTypes.BasePermissionTypes.EditListItems);

            // Resolve the promise
            resolve(hasPermissions);
        });
    });
}
```