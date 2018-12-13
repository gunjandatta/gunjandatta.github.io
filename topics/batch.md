---
layout: default
---

## [Batch Operations](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/make-batch-requests-with-the-rest-apis)

SharePoint Online contains the $batch api endpoint. This will enable multiple requests to be sent in one request to the server.

### Creating Batches

Instead of using the ```execute``` method, use the ```batch``` method to bulk multiple requests in a single execution to the server. The method properties are similar to the ```execute``` method:

* batch(_callback: (value?: Result) => void_)
* batch(_appendFl: boolean_)
* batch(_callback: (value?: Result) => void, appendFl: boolean_)

#### Callback Method

The callback method will be triggered when the request becomes available.

#### Append Flag

The append flag will create the request in a new batch request.

### Code Examples

This code example will first create a demo list, if it doesn't already exist. We will create items, get the list and delete it in a batch request.

```ts
import { SPTypes, Web } from "gd-sprest";

// Method to execute the batch requests
function executeBatchRequests(list) {
    var web = Web();

    // Loop 10 times
    for(let i=1; i<=10; i++) {
        // Add a new item
        web.Lists("BatchList").Items().add({
            Title: "Batch Item " + i
        })
        // On creation of an item, log to the console
        .batch(function (item) {
            // Log
            console.log("Item '" + item.Title + "' created.");
        }, i > 0); 
    }

    // Get the list after the items are created
    web.Lists("BatchList").batch(function (list) {
        // See if the list exists
        if (list.existsFl) {
            // Log
            console.log("List contains " + list.ItemCount + " items.");
        } else {
            // Log
            console.log("Error getting the list.");
        }
    });

    // Delete the list
    web.Lists("BatchList").delete().batch(function () {
        // Log
        writeToLog("Clean Up", LogType.SubHeader);

        // Log
        writeToLog("List was deleted.", LogType.Info);
    });

    // Execute the requests
    web.execute();
}

// Get the list
Web().Lists("BatchRequest").execute(
    // Exists
    list => {
        // Execute the batch requests
        executeBatchRequests(list);
    },
    // Doesn't exist
    () => {
        // Create the list
        Web().Lists().add({
            BaseTemplate: SPTypes.ListTemplateType.GenericList,
            Title: "BatchList"
        }).execute(list => {
            // Execute the batch requests
            executeBatchRequests(list);
        });
    }
);
```