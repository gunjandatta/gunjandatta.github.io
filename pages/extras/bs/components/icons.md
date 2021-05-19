---
title: "Icons"
category: bs
permalink: /extras/bs/components/icons/
---
Bootstrap provides a list of the [available icons](https://icons.getbootstrap.com/#icons). The library no longer includes all of the icons by default. The default size rendered is 32x32, unless specified.

### TypeScript

```ts
import { filter } from "gd-sprest-bs/build/icons/svgs";

// Returns an SVG Element
let elIcon = filter();          // Renders a 32x32 icon
let elIcon = filter(16);        // Renders a 16x16 icon
let elIcon = filter(16, 32);    // Renders a 16x32 icon
```