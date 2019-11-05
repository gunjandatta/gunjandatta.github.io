---
layout: archive
title: "Code Examples"
category: examples
permalink: /examples/
---
### Basic Example

#### Load the core library

This basic example will load the core gd-sprest library, and make it available throughout a site collection.

**1. Upload the File**

The first step will be to upload the library. For this example, we will upload the file to the site assets library in the root ```/siteassets/gd-sprest.min.js```.

**2. Create a custom action**

Open the browser window, and access the target SharePoint site. Press ```F-12``` to access the developer tools, and access the console tab.

_Note - This must be a **classic** page._

**3. Reference the library**

Type the following in the browser console window. This will reference the library, so we can create a custom action.

```js
var s = document.createElement("script"); s.src = "/siteassets/gd-sprest.min.js"; document.head.appendChild(s);
```

**4. Create a custom action to register this library.**

Type the following in the browser console window. This will register the library with the SharePoint Script-on-Demand (SOD) library.

```js
$REST.Helper.SPConfig({
    CustomActionCfg: {
        Site: [{
            Name: "gd-sprest",
            Title: "gd-sprest core library.",
            Description: "Registers the library with SOD.",
            Location: "ScriptLink",
            ScriptBlock: "SP.SOD.registerSod('gd-sprest', '/siteassets/gd-sprest.min.js');"
        }]
    }
}).install();
```

**How to reference this library**

Edit a classic page, and add a script editor webpart on the page. Add the following code to the script editor webpart.

```html
<script type="text/javascript">
// The main function
var main = function() {
    // Load the user's information
    $REST.Web().CurrentUser().execute(function(userInfo) {
        // Add a status
        var statusId = $REST.Helper.SP.Status.addStatus(userInfo.Title, "<i>$REST core library is now available</i>");
        $REST.Helper.SP.Status.setStatusPriColor(statusId, "green");
    });
};

// Execute the main function, after the library loads
if(SP.SOD.executeOrDelayUntilScriptLoaded(main, "gd-sprest") == false) {
    // The library isn't loaded, load the core library
    LoadSodByKey("gd-sprest");
}
</script>
```

**How to Uninstall the Custom Action**

Type the following in the browser console window. This will uninstall the custom action.

```js
$REST.Helper.SPConfig({
    CustomActionCfg: {
        Site: [{ Name: "gd-sprest" }]
    }
}).uninstall();
```

_Note - We only need to define the name property._

#### Issues

The framework has many code examples listed on the left. If you have any questions or requests for examples, please create an issue in the appropriate library:

- [Core Library](https://github.com/gunjandatta/sprest/issues)
- [Bootstrap](https://github.com/gunjandatta/sprest-bs/issues)
- [React](https://github.com/gunjandatta/sprest-react/issues)