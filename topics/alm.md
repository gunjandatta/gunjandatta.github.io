---
layout: page
---
# Dev Topics

### Application Lifecycle Management (ALM)

**_Add App to Catalog (Code Example)_**

```js
// Get the sppkg file
var fileContent = $REST.Web().getFileByServerRelativeUrl("/sites/dev/siteassets/pkgs/demo-webpart.sppkg").content().execute(function(data) {
    // Add the app file
    var appFile = $REST.Web().TenantAppCatalog().add("demo-webpart.sppkg", true, content).executeAndWait();

    // Get the context for the app catalog, this is required since we are doing a cross site-collection request
    $REST.ContextInfo.getWeb("/sites/appcatalog").execute(function(ctx) {
        // Get the app
        $REST.Web("/sites/appcatalog", { requestDigest: ctx.GetContextWebInformation.FormDigestValue }).TenantAppCatalog().AvailableApps()
            .query({ Filter: "Title eq 'demo-webpart-client-side-solution'" }).execute(function (apps) {
                // Get the app
                var app = apps.results[0];
                if(app == null) { return; }

                // Deploy the app
                app.deploy().execute(function (response) {
                    // App is deployed
                    console.log("The app has been deployed.");
                }, true)
        });
    });
});
```

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