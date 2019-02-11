---
layout: page
---
# Dev Topics

### Add-In Model

The following helper methods are available for solutions utilizing the Add-In Model.

**_App Web vs Host Web_**
When developing in the app web, the request url will need to be formatted when executing a request to the host web. The _DefaultRequestToHostFl_ is available to control the target web associated with the REST API request. This will allow you to develop code once, and use it in any solution (Add-In, WebPart, SPFx, etc).

**_Global Variable (DefaultReqeustToHostFl)_**
The _DefaultRequestToHostFl_ is false by default, so it will target the current web unless a url is provided.

**_Code Example_**

```ts
import { $REST } from "gd-sprest";

// Target the host web
$REST.DefaultRequestToHostFl = true;

// Get the style library items from the host web
$REST.Web().Lists("Style Library").Items().execute(items => {
    // Parse the items
    for(let i=0; i<items.results.length; i++) {
        let item = items.results[i];
    }
});

// Target the add-in web
$REST.DefaultRequestToHostFl = false;

// Get "My List" fields and items from the app web
$REST.List("My List").query({
    Expand: ["Fields", "Items"]
}).execute(list => {
    // Parse the fields
    for(let i=0; i<list.Fields.results.length; i++) {
        let field = list.Fields.results[i];
    }

    // Parse the items
    for(let i=0; i<list.Items.results.length; i++) {
        let item = list.Items.results[i];
    }
});
```

**_Helper Methods_**

**copyFileToHostWeb**

Copies a file from the app web to the host web. The file will automatically be checked-out, checked-in and published.
* fileUrl - The relative url of the source file to the app web.
* dstFolder - The relative url of the destination folder to the host web, or destination folder.
* overwriteFl - Flag to overwrite the file if it exists.
* rootWebFl - Flag to target the root web of the site collection, the host web otherwise.

**copyFilesToHostWeb**

Copies files from an app web to the host web. The files will automatically be checked-out, checked-in and published.
* fileUrls - The relative urls of the source files to the app web.
* dstFolders - The relative urls of the destination folders to the host web.
* overwriteFl - Flag to overwrite the file if it exists.
* rootWebFl - Flag to target the root web of the site collection, the host web otherwise.

**createSubFolders**

Creates sub-folders.
* folder - The folder to create the sub-folders in.
* subFolderUrl - The relative url of the sub-folder to create.

**getFolder**

Gets the folder, and optionally creates it if it doesn't exist.
* web - The web to creation the folder in.
* folderUrl - The relative url of the destination folder to the web.
* createFl - Flag to create the sub-folder(s) if it doesn't exist.

**removeEmptyFolders**

Removes empty folders.
* web - The web to creation the folder in.
* folderUrls - The relative urls of the destination folders to the web.

**removeFile**

Remove a file from a web.
* web - The web to creation the folder in.
* fileUrl - The relative url of the file to the web.

**removeFiles**

Removes files from a web.
* web - The web to creation the folder in.
* fileUrls - The relative urls of the files to the web.