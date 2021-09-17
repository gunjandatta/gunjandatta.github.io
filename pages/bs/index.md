---
title: "Bootstrap Components"
category: bootstrap
permalink: /bs/
sidebar-auto: true
---

The [gd-sprest-bs](https://github.com/gunjandatta/sprest-bs) library includes the [gd-sprest](https://github.com/gunjandatta/sprest) extends the [gd-bs library](https://github.com/gunjandatta/gd-bs), which includes the [Bootstrap Framework and Icons](https://getbootstrap.com/) to create modern components in SharePoint 2013/Online (Classic) environments.

## Getting Started

### [Components](components)
### [Web Parts](webparts)

### Installation

```
npm i --save gd-sprest-bs
```

**JavaScript Reference**

```js
var $REST = require("gd-sprest-bs");
```

**TypeScript Reference**

```ts
import { Components, WebParts } from "gd-sprest-bs";
```

**Reference the Script**

```html
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gd-sprest-bs/8.3.5/gd-sprest-bs.min.js"></script>
```

## Styling

The bootstrap css will only be applied to elements with a parent element containing the ```bs``` class. This will ensure that other elements on the page are not be affected.

```html
<div class="bs">
    <!-- Elements will have bootstrap css applied -->
</div>
```