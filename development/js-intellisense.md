---
layout: default
---
## JavaScript Intellisense
### Importing the Library
![Lib](https://github.com/gunjandatta/sprest/wiki/images/intellisense-js.png)

The intellisense of the library will display the available entry point of the SharePoint REST API and other helper libraries.

**REST API EndPoints**
- [[List|List]]
- [[Navigation|Navigation]]
- People Manager
- People Picker
- Profile Loader
- Search
- [[Site|Site]]
- Social Feed
- User Profile
- [[Utility|Utility]]
- [[Web|Web]]

**Helper Libraries**
- Context Information - A reference to the _spPageContextInformation object
- Helpers
    - App - Methods for developing within an App web
    - Dependencies - Adds the requires SharePoint scripts to the page
    - JSLink - Reusable methods for JSLink solutions
    - Loader - Waits for the requires SharePoint scripts to be loaded
    - SPConfig - Automation of SharePoint assets
- JSLink - Class for creating JSLink solutions
- SPTypes - SharePoint enumerators

### Executing Requests
The intellisense is designed to automatically detect the appropriate properties and methods of the request object. When executing requests against the REST API, you will either get an object, collection or query result.

#### Object Example
The methods and properties are available for the web object. Any collections, "Fields" for example, are methods.
![SharePoint Enumerator Types](https://github.com/gunjandatta/sprest/wiki/images/intellisense-js-web.png)

#### Query Example
The ability to query objects is very powerful, and can reduce the amount of requests made to SharePoint.

##### OData Request
The query method is available, and contains the intellisense for the [[OData Request|OData]].
![OData Request](https://github.com/gunjandatta/sprest/wiki/images/intellisense-js-query.png)

##### Collection Properties
The intellisense for the collection properties are no longer methods, and contain the appropriate methods and results.
![Collection Properties](https://github.com/gunjandatta/sprest/wiki/images/intellisense-js-query-fields.png)

##### Collection Item
The intellisense is also available for the collection items. The above example shows the available list method and properties.
![List Intellisense](https://github.com/gunjandatta/sprest/wiki/images/intellisense-js-query-lists.png)

### SharePoint Types
When developing SharePoint solutions, it's handy to have the correct enumerators available when coding. It's required in some cases, so the SPTypes helper class contains various enumerator types.
![SharePoint Enumerator Types](https://github.com/gunjandatta/sprest/wiki/images/intellisense-js-sptypes.png)