---
layout: default
---
[Back](/development)
## Server-Side to Client-Side Code Conversion
The execution method was designed to give a server-side like experience. This will help transition server-side coded wsp solutions to client-side solutions, using the gd-sprest SharePoint REST Framework. The built-in intellisense will also help with the transition, since a server-side developer is used to having this feature in Visual Studio.

### Server-Side Code Example
```cs
// Get the current web
SPWeb web = SPContext.Current.Web;

// Add a list
Guid listId = web.Lists.Add("Dev", "List used for development.", SPListTemplateType.GenericList);
SPList list = web.Lists["Dev"];

// Add 10 items to the list
for (int i = 0; i < 10; i++)
{
    // Create an item
    SPListItem item = list.Items.Add();
    item["Title"] = "Dev " + (i + 1);
    item.Update();
}

// Write the list to the page
RenderList(list);
```

<!-- Tabs -->
<div class="tabs">
<!-- Tab Items -->
<div class="tab-items">
    <div class="tab-item">JavaScript Conversion</div>
    <div class="tab-item">TypeScript Conversion</div>
</div>

<!-- Tab Content -->

<!-- JavaScript Conversion -->
<div class="tab-content" markdown="1">

```js
var $REST = require("gd-sprest");

// Get the current web
var web = $REST.Web();

// Add a list
web.Lists().add({
    BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList,
    Description: "List used for development.",
    Title: "Dev"
}).execute();

// Get the list
// Note - We aren't executing a request here
var list = web.Lists("Dev");

// Add 10 items to the list
var items = [];
for(let i=0; i<10; i++) {
    // Create an item
    list.Items().add({ Title: "Dev " + (i+1) })
        // Execute the request
        // Note - We are setting the "waitFl" to true.
        // This will wait for the previous request to complete before executing.
        .execute(function(item) {
            // Add this item to the array
            items.push(item);
        }, true);
}

// Wait for the requests to complete
web.done(function() {
    // Render the items
    this.renderItems(items);
});
```
</div>
<!-- TypeScript Conversion -->
<div class="tab-content" markdown="1">

```ts
import { SPTypes, Web } from "gd-sprest";

// Get the current web
var web = new Web();

// Add a list
web.Lists().add({
    BaseTemplate: SPTypes.ListTemplateType.GenericList,
    Description: "List used for development.",
    Title: "Dev"
}).execute();

// Get the list
// Note - We aren't executing a request here
var list = web.Lists("Dev");

// Add 10 items to the list
var items = [];
for(let i=0; i<10; i++) {
    // Create an item
    list.Items().add({ Title: "Dev " + (i+1) })
        // Execute the request
        // Note - We are setting the "waitFl" to true.
        // This will wait for the previous request to complete before executing.
        .execute(item => {
            // Add this item to the array
            items.push(item);
        }, true);
}

// Wait for the requests to complete
web.done(() => {
    // Render the items
    this.renderItems(items);
});
```

</div>
</div>