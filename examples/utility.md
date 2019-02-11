---
layout: page
---
# Code Examples

### Utility

**_Reference the library_**

```js
// JavaScript
var $REST = require("gd-sprest");

// TypeScript
import { Utility } from "gd-sprest";
```

**_Send an email_**

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

**_Resolve a principal user_**

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

**_Search principals_**

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