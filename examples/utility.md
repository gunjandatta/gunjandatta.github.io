---
layout: default
---
<div class="page-info" markdown="1">

[Back](/api/utility)
## Utility

</div>

<!-- Tabs -->
<div class="tabs">
<!-- Tab Items -->
<div class="tab-items">
    <div class="tab-item">Browser Console</div>
    <div class="tab-item">JavaScript</div>
    <div class="tab-item">TypeScript</div>
</div>

<!-- Browser Console -->
<div class="tab-content" markdown="1">

#### Send an email
```js
$REST.Utility().sendEmail({ To: ["user@sharepoint.com"], Subject: "Test Email", Body: "<p>The email content</p>" }).executeAndWait();
```
#### Resolve a principal
```js
$REST.Utility().resolvePrincipal({ input: "user@sharepoint.com", scopes: 15, sources: 15 }).executeAndWait();
```
#### Search principals
```js
$REST.Utility().searchPrincipals({ input: "user", maxCount: 50 }).executeAndWait();
```
</div>

<!-- JavaScript -->
<div class="tab-content" markdown="1">

#### Reference the library
```js
var $REST = require("gd-sprest");
```
#### Send an email
```js
// Send the email
$REST.Utility().sendEmail({
    To: ["user@sharepoint.com"],
    Subject: "Test Email",
    Body: "<p>The email content</p>"
}).execute(function() => {
    // Email was sent
});
```
#### Resolve a principal user
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
```
#### Search principals
```js
// Search the principals
$REST.Utility().searchPrincipals({
    input: "user@sharepoint.com",
    maxCount: 50
}).execute(function(response) {
    var users = response.results;

    // Code goes here
});
```
</div>

<!-- TypeScript -->
<div class="tab-content" markdown="1">

#### Reference the library
```ts
import { Utility } from "gd-sprest";
```
#### Send an email
```ts
// Send the email
Utility().sendEmail({
    To: ["user@sharepoint.com"],
    Subject: "Test Email",
    Body: "<p>The email content</p>"
}).execute(() => {
    // Email was sent
});
```
#### Resolve a principal user
```ts
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
#### Search principals
```ts
// Search the principals
Utility().searchPrincipals({
    input: "user@sharepoint.com",
    maxCount: 50
}).execute(response => {
    let users = response.results;

    // Code goes here
});
</div>
</div>