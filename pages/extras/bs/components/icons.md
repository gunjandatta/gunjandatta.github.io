---
title: "Icons"
category: bs
permalink: /extras/bs/components/icons/
---
Bootstrap provides a list of the [available icons](https://icons.getbootstrap.com/#icons). Icons is a method using the IconTypes enumerator to render a specified icon. The default size rendered is 32x32, unless specified.

The library no longer includes all of the icons by default.

### TypeScript

```ts
import { Components } from "gd-sprest-bs";
import { filter } from "gd-sprest-bs/build/icons/svgs";

// Returns an SVG Element
let elIcon = filter();          // Renders a 32x32 icon
let elIcon = filter(16);        // Renders a 16x16 icon
let elIcon = filter(16, 32);    // Renders a 16x32 icon
```