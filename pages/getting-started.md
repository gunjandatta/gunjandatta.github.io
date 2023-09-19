---
title: "Getting Started"
category: getting-started
permalink: /getting-started/
---
## Installation

### NPM

Add the npm package to your project:

```js
npm --save install gd-sprest
```

### Yarn

Add the package from yarn:

```js
yarn add gd-sprest
```

## JavaScript

The library can downloaded or referenced from github directly.

### Core REST API
```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest/7.6.7/gd-sprest.min.js"></script>
```
```js
var s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/gd-sprest/7.6.7/gd-sprest.min.js"; document.head.appendChild(s);
```

### Bootstrap
```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/10.10.51/gd-sprest-bs.min.js"></script>
```
```js
var s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/10.10.51/gd-sprest-bs.min.js"; document.head.appendChild(s);
```

## Browser Console

### PowerShell-Like Experience

The library allows the developer to execute both synchronous and asynchronous requests. To be clear, *asynchronous requests* are always recommended over synchronous requests. Using synchronous requests in the browser's console window can give a powershell like experience. This will allow developers to create script files that can be tested and executed w/out having to go through a server administrator. This is helpful when the developer doesn't have access to the server farm for powershell access.

### Demo

```js
// Reference the library
var s = document.createElement("script");
s.src = "https://cdnjs.cloudflare.com/ajax/libs/gd-sprest/7.6.7/gd-sprest.min.js";
document.head.appendChild(s);

// Execute a request
var webInfo = $REST.Web().query({ Expand: ["Lists", "Fields", "RootFolder"] }).executeAndWait();
```

![PowerShell](/assets/images/demo-browser.gif)