---
layout: page
---

## Application Lifecycle

### Browser Console

#### Add App to Catalog

```js
var catalog = $REST.Web("/sites/appcatalog").TenantAppCatalog().executeAndWait();
```

#### Get Available Apps

```js
var apps = $REST.Web().TenantAppCatalog().AvailableApps().executeAndWait();
```

#### Get App By Id

```js
var app = $REST.Web().TenantAppCatalog().getById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx').executeAndWait();
```

#### Add App to Catalog

```js
// Get the sppkg file
var fileContent = $REST.Web().getFileByServerRelativeUrl("/sites/dev/siteassets/pkgs/demo.sppkg").content().executeAndWait();

// The content will be a string, since we are executing this synchronously.
// We will need to convert the content to a buffer
var buffer = new ArrayBuffer(fileContent.length * 2);
var bufferView = new Uint16Array(buffer);
for (var i = 0; i < fileContent.length; i++) {
    bufferView[i] = fileContent.charCodeAt(i);
}

// Add the app to the catalog
catalog.add(true, "demo.sppkg", buffer).executeAndWait();
```
#### App Methods
_The 'Deploy, Retract & Remove' methods need to be executed from the app catalog web context._
```js
var apps = $REST.Web().AvailableApps().query({ Filter: "Title eq 'Demo WebPart'"}).executeAndWait();
var app = apps.results ? apps.results[0] : null;
if(app) {
    // Deploy the app
    app.deploy().executeAndWait();

    // Retract the app
    app.retract().executeAndWait();

    // Install the app
    app.install().executeAndWait();

    // Upgrade the app
    app.upgrade().executeAndWait();

    // Uninstall the app
    app.uninstall().executeAndWait();

    // Remove the app
    app.remove().executeAndWait();
}
```
</div>

### JavaScript

#### Reference the library

```js
var $REST = require("gd-sprest");
```

#### Get App Catalog

```js
// Get the web
$REST.Web()
    // Get the tenant app catalog
    .TenantAppCatalog()
    // Execute the request
    .execute(function(catalog) {
        // Code goes here
    });
```

#### Get Available Apps

```js
// Get the web
$REST.Web()
    // Get the tenant app catalog
    .TenantAppCatalog()
    // Get the app
    .AvailableApps()
    // Execute the request
    .execute(function(apps) {
        // Parse the apps
        for(let i=0; i<apps.results.length; i++) {
            var app = apps.results[i];

            // Code goes here
        }
    });
```

#### Get App By Id

```js
// Get the web
$REST.Web()
    // Get the tenant app catalog
    .TenantAppCatalog()
    // Get the app
    .AvailableApps('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
    // Execute the request
    .execute(function(app) {
        // Code goes here
    });
```

#### Add App to Catalog

```js
// Get the web
$REST.Web()
    // Get the app package
    .getFileByServerRelativeUrl("/sites/dev/siteassets/pkgs/demo.sppkg")
    // Get the content
    .content()
    // Execute the request
    .execute(function(content) {
        // Get the web
        $REST.Web()
            // Get the tenant app catalog
            .TenantAppCatalog()
            // Add the app
            .add(true, "demo.sppkg", content)
            // Execute the request
            .execute(function(file) {
                // Additional code goes here
            });
    });
```

#### App Methods

_The 'Deploy, Retract & Remove' methods need to be executed from the app catalog web context._

```js
// Get the web
$REST.Web()
    // Get the tenant app catalog
    .TenantAppCatalog()
    // Get the available apps
    .AvailableApps()
    // Query for the app
    .query({
        Filter: "Title eq 'Demo WebPart'"
    })
    // Execute the request
    .execute(function(apps) {
        var app = apps.results[0];

        // Deploy the app
        app.deploy().execute();

        // Retract the app
        app.retract().execute();

        // Install the app
        app.install().execute();

        // Upgrade the app
        app.upgrade().execute();

        // Uninstall the app
        app.uninstall().execute();

        // Remove the app
        app.remove().execute();
    });
```
</div>

### TypeScript

#### Reference the library

```ts
import { Web } from "gd-sprest";
```

#### Get App Catalog

```ts
// Get the web
Web()
    // Get the tenant app catalog
    .TenantAppCatalog()
    // Execute the request
    .execute(catalog => {
        // Code goes here
    });
```

#### Get Available Apps

```ts
// Get the web
Web()
    // Get the tenant app catalog
    .TenantAppCatalog()
    // Get the app
    .AvailableApps()
    // Execute the request
    .execute(apps => {
        // Parse the apps
        for(let i=0; i<apps.results.length; i++) {
            let app = apps.results[i];

            // Code goes here
        }
    });
```

#### Get App By Id

```ts
// Get the web
Web()
    // Get the tenant app catalog
    .TenantAppCatalog()
    // Get the app
    .AvailableApps('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
    // Execute the request
    .execute(app => {
        // Code goes here
    });
```

#### Add App to Catalog

```ts
// Get the web
Web()
    // Get the app package
    .getFileByServerRelativeUrl("/sites/dev/siteassets/pkgs/demo.sppkg")
    // Get the content
    .content()
    // Execute the request
    .execute(content => {
        // Get the web
        $REST.Web()
            // Get the tenant app catalog
            .TenantAppCatalog()
            // Add the app
            .add(true, "demo.sppkg", content)
            // Execute the request
            .execute(function(file) {
                // Additional code goes here
            });
    });
```

#### App Methods

_The 'Deploy, Retract & Remove' methods need to be executed from the app catalog web context._

```ts
// Get the web
Web()
    // Get the tenant app catalog
    .TenantAppCatalog()
    // Get the available apps
    .AvailableApps()
    // Query for the app
    .query({
        Filter: "Title eq 'Demo WebPart'"
    })
    // Execute the request
    .execute(apps => {
        let app = apps.results[0];

        // Deploy the app
        app.deploy().execute();

        // Retract the app
        app.retract().execute();

        // Install the app
        app.install().execute();

        // Upgrade the app
        app.upgrade().execute();

        // Uninstall the app
        app.uninstall().execute();

        // Remove the app
        app.remove().execute();
    });
```