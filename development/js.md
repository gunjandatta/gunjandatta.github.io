---
layout: default
---
[Back](/development)
## JavaScript Development
### Reference the Script
Reference the [$REST global variable](/getting-started/global-variable) for details on the $REST variable.
```js
var $REST = require("gd-sprest");
```

### Code Example
This example will get the current web, including the lists.
```js
// Get the current web and lists
$REST.Web().query({
    Expand: ["Lists"]
}).execute(function(web) {
    // Parse the lists
    for(var i=0; i<web.Lists.results.length; i++) {
        var list = web.Lists.results[i];
    }
});
```

### Intellisense
The intellisense of the library will display the available entry point of the SharePoint REST API and other helper libraries.

![Lib](/assets/images/intellisense-js.png)

#### Executing Requests
The intellisense is designed to automatically detect the appropriate properties and methods of the request object. When executing requests against the REST API, you will either get an object, collection or query result.

##### Object Example
The methods and properties are available for the web object. Any collections, "Fields" for example, are methods.

![SharePoint Enumerator Types](/assets/images/intellisense-js-web.png)

##### Query Example
The ability to query objects is very powerful, and can reduce the amount of requests made to SharePoint.

##### OData Request
The query method is available, and contains the intellisense for the [OData Request](/development/odata).

![OData Request](/assets/images/intellisense-js-query.png)

##### Collection Properties
The intellisense for the collection properties are no longer methods, and contain the appropriate methods and results.

![Collection Properties](/assets/images/intellisense-js-query-fields.png)

##### Collection Item
The intellisense is also available for the collection items. The above example shows the available list method and properties.

![List Intellisense](/assets/images/intellisense-js-query-list.png)

#### SharePoint Types
When developing SharePoint solutions, it's handy to have the correct enumerators available when coding. It's required in some cases, so the SPTypes helper class contains various enumerator types.

![SharePoint Enumerator Types](/assets/images/intellisense-js-sptypes.png)