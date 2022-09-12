---
title: "Batch Requests"
category: topics
permalink: /topics/batch-requests/
---
SharePoint Online contains the $batch api endpoint. This will enable multiple requests to be sent in one request to the server. Additional documentation is available [here](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/make-batch-requests-with-the-rest-apis).

## Creating Batches

Instead of using the ```execute``` method, use the ```batch``` method to bulk multiple requests in a single execution to the server. The method properties are similar to the ```execute``` method:

* batch(_callback: (value) => void_)
* batch(_createFl: boolean_)
* batch(_callback: (value) => void, createFl: boolean_)

## Callback Method

The callback method will be triggered after the request executes.

## Create Flag

The create flag will put the request in a new batch request. Each batch request will be executed as a single request to the server, but has a limitation of 100 requests per batch.

### Code Example

This code example will first create a demo list, if it doesn't already exist. We will create items, get the list and delete it in a batch request.

```ts
import { SPTypes, Web } from "gd-sprest";

// Method to execute the batch requests
function executeBatchRequests(list) {
    var web = Web();

    // Create 1500 items
    for(let i=1; i<=1500; i++) {
        // Add a new item
        web.Lists("BatchList").Items().add({
            Title: "Batch Item " + i
        })
        // On creation of an item, log to the console
        .batch(function (item) {
            // Log
            console.log("Item '" + item.Title + "' created.");
        }, i > 1 || Math.ceil(i/100)); // Limitation of 100 requests per batch, so this will create 15 batch requests
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
    }, true); // Setting true here will create a new batch request

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