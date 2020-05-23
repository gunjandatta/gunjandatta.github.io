---
title: "Request Execution"
category: dev-docs
permalink: /dev/request-execution/
---
## Request Execution

The library's base object contains an "execute" method. This method has been designed to provide intellisense to the requested object, and reduce the amount of code required to get and post data from SharePoint 2013/Online.

### Intellisense

The execution method is designed to automatically determine the type interface, so the developer doesn't have to specify it. This is designed to work in JavaScript, NodeJS and TypeScript solutions. No additional libraries are required to be downloaded.
- [JavaScript](/dev/js)
- [TypeScript](/dev/ts)

### Options

- **execute(_resolve:function_)**
    - The resolve method is executed if the request is successful
- **execute(_waitFl:boolean_)**
    - The request is executed after the previous is completed
- **execute(_resolve:function, waitFl:boolean_)**
    - Executes the request asynchronously
    - The resolve method is executed after the request execution is completed
- **execute(_resolve:function, reject:function, waitFl:boolean_)**
    - Executes the request asynchronously
    - The resolve method is executed after the request execution is completed
    - The reject method is executed if the request is not successful
- **executeAndWait()**
    - Executes the request synchronously
    - This is not recommended to use in production solutions, unless absolutely necessary.
    - This method was designed to be used to create scripts and to execute live requests in the browser console.

### Method Logic

[<img src="/assets/images/execution-method.png" alt="Execute Method" style="max-width:100%" />](/assets/images/execution-method.png)

### Code Example (TypeScript)

```ts
import { List } from "gd-sprest";

export const createListData = () => {
    // Get the list
    let list = List("Test List");
    
    // Create a loop to generate items
    let items = [];
    for(var i=1; i<=10; i++) {
      // Get the item collection
      list.Items()
        // Add an item
        .add({
            Title: "Test Item " + i
        })
        // Execute the request
        .execute(
            // Success
            item => {
                // If you return a promise here,
                // it will wait for the promise to complete before executing the next request

                // Save a reference to the item
                items.push(item);
            },
            // Error
            () => {
                // Log
                console.log("Error creating item.");
            },
            // True will wait for the previous request to complete before executing
            true
        );
    }
    
    // Wait for the items to be created
    list.done(() => {
      // Do something
    });
}
```