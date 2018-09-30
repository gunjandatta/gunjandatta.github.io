---
layout: default
---

## Remote Web

The SP.RemoteWeb REST API endpoint is used to return the web information.

#### Properties

- requestUrl - The absolute url of the remote web.

#### IRemoteWeb

| Property | Type |
| --- | --- |
| CanSendEmail | _boolean_ |
| ShareByEmailEnabled | _boolean_ |
| ShareByLinkEnabled | _boolean_ |
| Web | [IWebProps](web) |

### JavaScript

```js
// JavaScript
var $REST = require("gd-sprest");
$REST.RemoteWeb("https://[tenant].sharepoint.com/sites/dev").execute(function(web) {
    // See if the web exists
    if(web.Web) {
    }
});
```

### TypeScript

```ts
// TypeScript
import { Web } from "gd-sprest";

Web.getRemoteWeb("https://[tenant].sharepoint.com/sites/dev").execute(web => {
    // See if the web exists
    if(web.Web) {
    }
});
```