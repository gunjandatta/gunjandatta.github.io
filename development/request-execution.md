---
layout: default
---
[Back](/development)
## Request Execution
The library's base object contains an "execute" method. This method has been designed to provide intellisense to the requested object, and reduce the amount of code required to get and post data from SharePoint 2013/Online.

### Intellisense
The execution method is designed to automatically determine the type interface, so the developer doesn't have to specify it. This is designed to work in JavaScript, NodeJS and TypeScript solutions. No additional libraries are required to be downloaded.
- [JavaScript](/development/js)
- [TypeScript](/development/ts)

### Execution Options
- **execute(_resolve:function_)**
- **execute(_waitFl:boolean_)**
- **execute(_resolve:function, waitFl:boolean_)**
    - Executes the request asynchronously
    - The resolve method is executed after the request execution is completed
- **executeAndWait()**
    - Executes the request synchronously
    - This is not recommended to use in production solutions, unless absolutely necessary.
    - This method was designed to be used to create scripts and to execute live requests in the browser console.

### Request Execution Logic
[<img src="/assets/images/execution-method.png" alt="Execute Method" style="max-width:100%" />](/assets/images/execution-method.png)

### [Server-Side Code Conversion Guide](serverside-conversion-guide)
The execution method was designed to give a server-side like experience. Having a SharePoint development background going back to SharePoint 2007, server-side was basically the only way back then. This library will hopefully help SharePoint developers with wsp solution backgrounds an easy way into the new modern web stack.

#### Blog Series
Various blog posts have been created to help give an overview of the new modern web stack. The intro examples use the [Office Fabric-UI React](https://dev.office.com/fabric), so they can easily be expanded on.
- [Office Fabric-UI React Intro](http://dattabase.com/sharepoint-app-fabric-ui-react-part-1-3/)
- [Office Fabric-UI React/Redux](http://dattabase.com/office-fabric-ui-reactredux-part-1-5/)