---
layout: archive
title: "Browser Console"
category: getting-started
permalink: /getting-started/browser-console/
---
## Browser Console - Live Execution

**_Script Reference_**

The library will need to be referenced. The latest version of the library can be [downloaded here](https://raw.githubusercontent.com/gunjandatta/development/master/dist/gd-sprest.min.js). Once uploaded to a SharePoint library, the script file can be referenced in various ways:

**_SharePoint Designer_**

```html
<script type="text/javascript" src="/sites/dev/SiteAssets/gd-sprest.min.js"></script>
```

Using SharePoint designer, add a script tag referencing the file:

**_WebPart_**

```html
<script type="text/javascript" src="/sites/dev/SiteAssets/gd-sprest.min.js"></script>
```

Edit a webpart or wiki page, and add a Script Editor webpart to the page. Once added, edit the source and add a script tag reference to the webpart:

**_Manual_**

```js
var script = document.createElement("script");
script.src = "https://unpkg.com/gd-sprest/dist/gd-sprest.min.js";
document.head.appendChild(script);
```

To manually reference the script file, press F-12 to access the browser development tools and access the browser console. Type in the following to reference the script file.

### PowerShell-Like Experience

The library allows the developer to execute both synchronous and asynchronous requests. To be clear, *asynchronous requests* are always recommended over synchronous requests. Using synchronous requests in the browser's console window can give a powershell like experience. This will allow developers to create script files that can be tested and executed w/out having to go through a server administrator. This is helpful when the developer doesn't have access to the server farm for powershell access.

**_Code Example_**

Reference the [$REST](global-variable) page for details on the global variable.

```js
var webInfo = $REST.Web().query({ Expand: ["Lists", "Fields", "RootFolder"] }).executeAndWait();
```

**_Demo_**

![PowerShell](/assets/images/demo-browser.gif)