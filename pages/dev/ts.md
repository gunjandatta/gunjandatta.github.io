---
layout: archive
title: "TypeScript"
category: dev-docs
permalink: /dev/ts/
---
## TypeScript Development

### Script Reference

#### Reference the Script
Reference the [$REST global variable](/getting-started/global-variable) for details on the available libraries.
```ts
import {
    $REST,
    ContextInfo,
    Email,
    Helper,
    JSLink,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    RequestType,
    Search,
    Site,
    SocialFeed,
    SPTypes,
    Types,
    UserProfile,
    Web
} from "gd-sprest";
```

### Code Example

This code example will get the site assets library, including the fields and views. Reference the [/examples](code examples) page for additional examples.

```ts
import { List }

// Get the "Site Assets" library, fields and views
List("Site Assets")
    // Query the list
    .query({
        Expand: ["Fields", "Views"]
    })
    // Execute the request
    .execute((list) => {
        // Parse the fields
        for(let i=0; i<list.Fields.results.length; i++) {
            let field = list.Fields.results[i];
        }

        // Parse the views
        for(let i=0; i<list.Views.results.length; i++) {
            let field = list.Views.results[i];
        }
    });
```

### Intellisense

The intellisense of the library will display the available entry point of the SharePoint REST API and other helper libraries.

![Lib](/assets/images/intellisense-ts.png)

#### Executing Requests
The intellisense is designed to automatically detect the appropriate properties and methods of the request object. When executing requests against the REST API, you will either get an object, collection or query result.

##### Object Example
The methods and properties are available for the web object. Any collections, "Fields" for example, are methods.

![SharePoint Enumerator Types](/assets/images/intellisense-ts-web.png)

##### Query Example
The ability to query objects is very powerful, and can reduce the amount of requests made to SharePoint.

##### OData Request
The query method is available, and contains the intellisense for the [OData Request](/dev/odata).

![OData Request](/assets/images/intellisense-ts-query.png)

##### Collection Properties
The intellisense for the collection properties are no longer methods, and contain the appropriate methods and results.

![Collection Properties](/assets/images/intellisense-ts-query-fields.png)

##### Collection Item
The intellisense is also available for the collection items. The above example shows the available list method and properties.

![List Intellisense](/assets/images/intellisense-ts-query-list.png)

#### SharePoint Types
When developing SharePoint solutions, it's handy to have the correct enumerators available when coding. It's required in some cases, so the SPTypes helper class contains various enumerator types.

![SharePoint Enumerator Types](/assets/images/intellisense-ts-sptypes.png)

#### Types
TypeScript gives the ability to define the type of variables. Referencing the types can be done in various ways.

##### Main Types
The "Types" interfaces can be imported from the main library. It contains all of the available types:
- Helper - The helper types
- SP - The SharePoint types
- Util - The utility types (Internal)

![Types](/assets/images/intellisense-ts-types.png)

##### SharePoint Types
All interfaces for this REST API objects are listed under the SharePoint "SP" reference.

![Main Types](/assets/images/intellisense-ts-types-sp.png)

##### Class Types
The types are made available based on the class imported.

##### SharePoint Configuration
![SharePoint Enumerator Types](/assets/images/intellisense-ts-types-cfg-type.png)

##### SharePoint Configuration Field Type
![SharePoint Enumerator Types](/assets/images/intellisense-ts-types-cfg-field.png)