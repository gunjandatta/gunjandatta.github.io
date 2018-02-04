---
layout: default
---
[Back](/api)
## Application Lifecycle Management (ALM)
### Tenant App Catalog
The tenant app catalog is available from the 'Web' property.
* add(overwrite: _boolean_, url: _string_, content: ArrayBuffer):_File_
    * Method to add an app to the catalog
* AvailableApps(): _TenantApps_
    * List available packages from tenant app catalog
* AvailableApps('guid'): _TenantApp_
    * Returns an available package from the tenant app catalog
* getById('guid'): _TenantApp_
    * Returns an available package from the tenant app catalog
* SiteCollectionAppCatalogsSites: _any_
    * _Need to find the documentation for this property_

### Tenant Apps
* getById('guid'): _TenantApp_
    * Returns an available package from the tenant app catalog

### Tenant App
#### Properties
* AppCatalogVersion: _string_
    * The app version.
* CanUpgrade: _boolean_
    * Flag indicating an upgrade is available.;
* CurrentVersionDeployed: _boolean_
    * Flag indicating if the current version is deployed.
* Deployed: _boolean_
    * Flag indicating if the app is deployed.
* ID: _string_
    * The app id.
* InstalledVersion: _string_
    * The installed version.
* IsClientSideSolution: _boolean_
    * Flag indicating if this is a client-side solution.
* Title: _string_
    * The app title.
#### Methods
* deploy()
    * Enable solution to be available to install to specific sites. This API is designed to be executed in the context of the tenant app catalog site.
* install()
    * Install a solution package with specific identifier from tenant app catalog to the site based on URL context. This REST call can be executed in the context of the site where the install operation should happen.
* remove()
    * Remove the solution package from the tenant app catalog. This API is designed to be executed in the context of the tenant app catalog site.
* retract()
    * Retract solution to be available from the sites. This API is designed to be executed in the context of the tenant app catalog site.
* uninstall()
    * Uninstall a solution package from the site. This REST call can be executed in the context of the site where the uninstall operation should happen.
* upgrade()
    * Upgrade a solution package from the site to a newer version available in the tenant app catalog. This REST call can be executed in the context of the site where the upgrade operation should happen.

## Browser Console Code Examples
#### Add App to Catalog
```
var catalog = $REST.Web("/sites/appcatalog").TenantAppCatalog().executeAndWait();
```
#### Get Available Apps
```
var apps = $REST.Web().TenantAppCatalog().AvailableApps().executeAndWait();
```
#### Get App By Id
```
var app = $REST.Web().TenantAppCatalog().getById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx').executeAndWait();
```
#### Add App to Catalog
```
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
```
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
## JavaScript Code Examples
#### Reference the library
```
var $REST = require("gd-sprest");
```
#### Get App Catalog
```
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
```
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
```
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
```
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
```
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
## TypeScript Code Examples
#### Reference the library
```
import { Web } from "gd-sprest";
```
#### Get App Catalog
```
// Get the web
(new Web())
    // Get the tenant app catalog
    .TenantAppCatalog()
    // Execute the request
    .execute(catalog => {
        // Code goes here
    });
```
#### Get Available Apps
```
// Get the web
(new Web())
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
```
// Get the web
(new Web())
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
```
// Get the web
(new Web())
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
```
// Get the web
(new Web())
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