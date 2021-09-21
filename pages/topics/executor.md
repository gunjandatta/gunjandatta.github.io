---
title: "Executor"
category: topics
permalink: /topics/executor/
---
The executor is a reusable method for executing code based on an array of data.

## [Documentation](https://dattabase.com/docs/sprest/interfaces/__types_helper_executor_d_.iexecutor.html)

## Reference Interface/Data

Below is the sample data and interface being used for the code examples.

```ts
import { Helper, Types } from "gd-sprest";

// The method parameter interface
interface IMethodParam {
    src: string;
    srcList: string;

    dst: string;
    dstList: string;

    files: Array<Types.SP.IFileResult>;
    subFolders: Array<Types.SP.IFolderResult>;
}

// The method parameters
let methodParams = [
    { src: "/", srcList: "Style Library", dst: "/sites/dev", dstList: "Style Library" },
    { src: "/", srcList: "Site Assets", dst: "/sites/dev", dstList: "Site Assets" }
];
```

## Simple For-Loop

```ts
for(let i=0; i<methodParams.length; i++) {
    let methodParam = methodParams[i];

    // Copy the files
    copyFiles(methodParam);
}
```

The code example below mirrors the for-loop above.

```ts
// Run the executor
Helper.Executor<IMethodParam>(methodParams,
    // Main Method
    methodParam => {
        // Copy the files
        copyFiles(methodParam);
    }
);
```

## Handling Promises

The executor will wait for promises to be resolved, before executing the next method.
The code example below will assume the _copyFiles_ method returns a promise.
This will wait for the copyFiles method to complete, before executing the next method parameter.

```ts
// Run the executor
Helper.Executor<IMethodParam>(methodParams,
    // Main Method
    methodParam => {
        // Copy the files
        return copyFiles(methodParam);
    }
);
```

## onExecuted Event

The optional onExecute event can be used for more complex logic.
The code example below will query the source location for files and folders.
The onExecuted event will be used to copy the files and sub-folders.
Returning a promise in the event will cause the copyFiles method to complete, before executing the next method parameter.

```ts
// Run the executor
Helper.Executor<IMethodParam>(methodParams,
    // Main Method
    methodParam => {
        // Return a promise
        return new Promise((resolve, reject) => {
            // Get the source web
            Web(methodParam.src)
                // Get the list
                .Lists(methodParam.srcList)
                // Get the root folder
                .RootFolder()
                // Set the query
                .query({
                    Expand: ["Files", "Folders"]
                })
                // Execute the request
                .execute(folder => {
                    // Update the url information
                    methodParam.files = folder.Files.results;
                    methodParam.folders = folder.Folders.results;

                    // Resolve the promise, passing the updated method parameters to the onExecuted event
                    resolve(methodParam);
                });
        });
    },
    // Method triggered after the main method completes
    methodParam => {
        // Copy the files
        return copyFiles(methodParam);
    }
);
```