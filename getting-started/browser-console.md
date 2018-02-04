---
layout: default
---
## Browser Console - Live Execution
### Reference the Script
The library will need to be referenced. The latest version of the library can be [downloaded here](https://raw.githubusercontent.com/gunjandatta/development/master/dist/gd-sprest.min.js). Once uploaded to a SharePoint library, the script file can be referenced in various ways:

**_SharePoint Designer_**
Using SharePoint designer, add a script tag referencing the file:
```html
<script type="text/javascript" src="/sites/dev/SiteAssets/gd-sprest.min.js"></script>
```

**_WebPart_**
Edit a webpart or wiki page, and add a Script Editor webpart to the page. Once added, edit the source and add a script tag reference to the webpart:
```html
<script type="text/javascript" src="/sites/dev/SiteAssets/gd-sprest.min.js"></script>
```

**_Manual_**
To manually reference the script file, press F-12 to access the browser development tools and access the browser console. Type in the following to reference the script file.
```js
var script = document.createElement("script");
script.src = "/sites/dev/SiteAssets/gd-sprest.min.js";
document.head.appendChild(script);
```

### PowerShell-Like Experience
The library allows the developer to execute both synchronous and asynchronous requests. To be clear, *asynchronous requests* are always recommended over synchronous requests. Using synchronous requests in the browser's console window can give a powershell like experience. This will allow developers to create script files that can be tested and executed w/out having to go through a server administrator. This is helpful when the developer doesn't have access to the server farm for powershell access.

#### Code Example
Reference the [[$REST|Development $REST Global Variable]] page for details on the $REST variable.
```js
var webInfo = $REST.Web().query({ Expand: ["Lists", "Fields", "RootFolder"] }).executeAndWait();
```

#### Demo
![PowerShell](/assets/images/demo-browser.gif)