---
title: "Permissions"
category: code-examples
permalink: /examples/code/permissions/
---
The ```SPTypes``` contains the BasePermissionTypes enumerator which is used to determine what permissions a user has to a web, list or list item. The ```Helper``` class contains a ```hasPermissions(permissionMask, permissions)``` method returns a promise w/ a true/false value. The ```permissions``` property may be a single permission type or an array or permission types.

## Getting Permissions for Current User

The web, list and list item components have a ```EffectiveBasePermissions``` property that can be queried. The code example below will check if a user has manage permissions to a web.

```ts
// JavaScript
var $REST = require("gd-sprest");

// Method to get a user's the permissions for a web
function hasPermissions() {
    // Return a promise
    return new Promise(function(resolve, reject) {
        // Get the permissions for the user
        $REST.Web().query({ Select: ["EffectiveBasePermissions"] }).execute(function(web) {
            // Determine if the user has edit permissions
            $REST.Helper.hasPermissions(web.EffectiveBasePermissions, $REST.SPTypes.BasePermissionTypes.ManagePermissions).then(function(hasPermissions) {
                // Resolve the promise
                resolve(hasPermissions);
            });
        });
    });
}

// TypeScript
import { Helper, Web, SPTypes } from "gd-sprest";

// Method to get a user's the permissions for a web
function hasPermissions(): PromiseLike<boolean> {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the permissions for the user
        Web().query({ Select: ["EffectiveBasePermissions"] }).execute(web => {
            // Determine if the user has edit permissions
            Helper.hasPermissions(web.EffectiveBasePermissions, SPTypes.BasePermissionTypes.ManagePermissions).then(hasPermissions => {
                // Resolve the promise
                resolve(hasPermissions);
            });
        });
    });
}
```

## Getting Permissions for Another User

The web, list and list item components have the ability to get the permissions by a user's login name. The code example below will check if a user has edit permissions to a list.

```ts
// JavaScript
var $REST = require("gd-sprest");

// Method to get a user's the permissions for a list
function hasPermissions(listName, loginName) {
    // Return a promise
    return new Promise(function(resolve, reject) {
        // Get the permissions for the user
        $REST.List(listName).getUserEffectivePermissions(loginName).execute(function(permissions) {
            // Determine if the user has edit permissions
            $REST.Helper.hasPermissions(permissions, $REST.SPTypes.BasePermissionTypes.EditListItems).then(function(hasPermissions) {
                // Resolve the promise
                resolve(hasPermissions);
            });
        });
    });
}

// TypeScript
import { Helper, List, SPTypes } from "gd-sprest";

// Method to get a user's the permissions for a list
function hasPermissions(listName:string, loginName:string): PromiseLike<boolean> {
    // Return a promise
    return new Promise((resolve, reject) => {
        // Get the permissions for the user
        List(listName).getUserEffectivePermissions(loginName).execute(permissions => {
            // Determine if the user has edit permissions
            Helper.hasPermissions(permissions, SPTypes.BasePermissionTypes.EditListItems).then(hasPermissions => {
                // Resolve the promise
                resolve(hasPermissions);
            });
        });
    });
}
```

## Create a Permission Level

```ts
// JavaScript
var $REST = require("gd-sprest");

// Create a role definition
$REST.Web().RoleDefinitions().add({
    BasePermissions: { High: "2147483647", Low: "4294967295" },
    Name: "Custom Admin",
    Description: "This will copy the 'Full Control' permission level"
}).execute(function(roleDef) {
    // Log
    console.log("Custom permission level '" + roleDef.Name + "' was created successfully.", roleDef);
});

// TypeScript
import { Web } from "gd-sprest";

// Create a role definition
Web().RoleDefinitions().add({
    BasePermissions: { High: "2147483647", Low: "4294967295" },
    Name: "Custom Admin",
    Description: "This will copy the 'Full Control' permission level"
}).execute(roleDef => {
    // Log
    console.log("Custom permission level '" + roleDef.Name + "' was created successfully.", roleDef);
});
```