---
title: "Loading the Library"
category: topics
permalink: /topics/loading-the-lib/
---
Most of the time, the common libraries are loaded in a bundle separate from your project. This library utilizes the Script on Demand library built in to SharePoint to control when scripts are loaded.

## SharePoint Script on Demand (SOD)

The [SharePoint Script on Demand (SOD)](https://docs.microsoft.com/en-us/previous-versions/office/developer/sharepoint-2010/ff410742(v%3Doffice.14)) library contains a method "executeOrDelayUntilScriptLoaded". You can utilize this method to execute a method, once a library has been loaded.

## Classic vs Modern Page Support

The SharePoint Script on Demand (SOD) is only loaded on classic pages, so this method will not work on modern pages.

### Code Example

```js
// Code to initialize your application
function init() {
    // Code requires the gd-sprest core library to be loaded
}

// Ensure the SP SOD exists
if(SP && SP.SOD) {
    // Intialize the application after the gd-sprest library has been loaded
    SP.SOD.executeOrDelayUntilScriptLoaded(init, "gd-sprest");
}
```