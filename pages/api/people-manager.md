---
layout: archive
title: "People Manager"
category: api
permalink: /api/people-manager
---
[Documentation](https://msdn.microsoft.com/en-us/library/office/dn790354.aspx#bk_PeopleManager)

### Code Example

```ts
// JavaScript
var $REST = require("gd-sprest");
// Get the people manager
$REST.PeopleManager()
    // Get my properties
    .getMyProperties()
    // Execute the request
    .execute(function(myProps) {
        // Code goes here
    });

// TypeScript
import { PeopleManager } from "gd-sprest";

// Get the people manager
PeopleManager()
    // Get my properties
    .getMyProperties()
    // Execute the request
    .execute(myProps => {
        // Code goes here
    });
```