---
title: "Utility"
category: examples
permalink: /examples/code/utility/
---
## Reference the library

```js
// JavaScript
var $REST = require("gd-sprest");

// TypeScript
import { Utility } from "gd-sprest";
```

## Send an email

```js
// Send the email
$REST.Utility().sendEmail({
    To: ["user@sharepoint.com"],
    Subject: "Test Email",
    Body: "<p>The email content</p>"
}).execute(function() => {
    // Email was sent
});

// Send the email
Utility().sendEmail({
    To: ["user@sharepoint.com"],
    Subject: "Test Email",
    Body: "<p>The email content</p>"
}).execute(() => {
    // Email was sent
});
```

## Resolve a principal user

```js
// Resolve a principal user
$REST.Utility().resolvePrincipal({
    input: "user@sharepoint.com",
    scopes: $REST.SPTypes.PrincipalTypes.All,
    sources: $REST.SPTypes.PrincipalSources.All
}).execute(function(response) {
    var user = response.ResolvePrincipalInCurrentContext;

    // Code goes here
});

// Resolve a principal user
Utility().resolvePrincipal({
    input: "user@sharepoint.com",
    scopes: $REST.SPTypes.PrincipalTypes.All,
    sources: $REST.SPTypes.PrincipalSources.All
}).execute(response => {
    let user = response.ResolvePrincipalInCurrentContext;

    // Code goes here
});
```

## Search principals

```js
// Search the principals
$REST.Utility().searchPrincipals({
    input: "user@sharepoint.com",
    maxCount: 50
}).execute(function(response) {
    var users = response.results;

    // Code goes here
});

// Search the principals
Utility().searchPrincipals({
    input: "user@sharepoint.com",
    maxCount: 50
}).execute(response => {
    let users = response.results;

    // Code goes here
});
```