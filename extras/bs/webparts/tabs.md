---
layout: extras
---
# Bootstrap

### WebPart Tabs
The webpart tabs will generate tabs for each visible webpart in its zone.

#### [Examples](/examples/solutions)
Refer to the custom solutions for examples of creating custom webparts.

##### JavaScript
```js
var WebParts = require("gd-sprest-bs").WebParts;

// Create the webpart
WebParts.WPTabs({ elementId: "my-tabs" });
```

##### TypeScript
```ts
import { WebParts } from "gd-sprest-bs";

// Create the webpart
WebParts.WPTabs({ elementId: "my-tabs" });
```

#### Properties

| Name | Type | Description |
| --- | --- | --- |
| type | _number_ | The webpart tab type. |

#### WebPart Tab Types

| Name | Value |
| --- | --- |
| Pillars | 1 |
| Tabs | 2 |