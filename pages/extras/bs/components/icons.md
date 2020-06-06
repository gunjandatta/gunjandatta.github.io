---
title: "Icons"
category: bs
permalink: /docs/sprest-bs/modules/_icons_d_.html
---
Bootstrap provides a list of the [available icons](https://icons.getbootstrap.com/#icons). Icons is a method using the IconTypes enumerator to render a specified icon. The default size rendered is 32x32, unless specified.

### React

```tsx
import * as React from "react";
import { Icons, IconTypes } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Icons
                type={IconTypes.Arrow}
            />
        );
    }
}
```
