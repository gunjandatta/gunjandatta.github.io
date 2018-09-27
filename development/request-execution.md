---
layout: default
---
<div class="page-info" markdown="1">

[Back](/development)
## Request Execution

</div>

The library's base object contains an "execute" method. This method has been designed to provide intellisense to the requested object, and reduce the amount of code required to get and post data from SharePoint 2013/Online.

<!-- Tabs -->
<div class="tabs">
<!-- Tab Items -->
<div class="tab-items">
    <div class="tab-item">Intellisense</div>
    <div class="tab-item">Options</div>
    <div class="tab-item">Method Logic</div>
    <div class="tab-item">Server-Side Conversion Guide</div>
</div>

<!-- Tab Content -->
<div class="tab-content" markdown="1">

The execution method is designed to automatically determine the type interface, so the developer doesn't have to specify it. This is designed to work in JavaScript, NodeJS and TypeScript solutions. No additional libraries are required to be downloaded.
- [JavaScript](/development/js)
- [TypeScript](/development/ts)

</div>
<div class="tab-content" markdown="1">

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

</div>
<div class="tab-content" markdown="1">

[<img src="/assets/images/execution-method.png" alt="Execute Method" style="max-width:100%" />](/assets/images/execution-method.png)

</div>
<div class="tab-content" markdown="1">

The execution method was designed to give a server-side like experience. Having a SharePoint development background going back to SharePoint 2007, server-side was basically the only way back then. This library will hopefully help SharePoint developers with wsp solution backgrounds an easy way into the new modern web stack. Refer to [this guide](serverside-conversion-guide) for additional details.

#### Blog Series
Various blog posts have been created to help give an overview of the new modern web stack. The intro examples use the [Office Fabric-UI React](https://dev.office.com/fabric), so they can easily be expanded on.
- [Office Fabric-UI React Intro](http://dattabase.com/sharepoint-app-fabric-ui-react-part-1-3/)
- [Office Fabric-UI React/Redux](http://dattabase.com/office-fabric-ui-reactredux-part-1-5/)