---
layout: default
---

## NodeJS Development

The library contains a "getInfo" method, returning the request information of the request.

### Reference the Script

Reference the [$REST global variable](/getting-started/global-variable) for details on the available libraries.

```js
const $REST = require("gd-sprest);
```

### Code Example

```js
// Create a new generic list.
request = $REST.Web("https://dev.sharepoint.com")
    .Lists().add({
        BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList,
        Title: "New List"
    });

// Log the request information
console.log(request.getInfo());

// Console Output:
// {
//     data: '{"BaseTemplate":100,"Title":"New List","__metadata":{"type":"SP.List"}}',
//     method: 'POST',
//     url: 'https://dev.sharepoint.com'
// }
```