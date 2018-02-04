---
layout: default
---
[Back](/api/automation)
## SharePoint Automation Code Examples
### JavaScript
```js
var $REST = require("gd-sprest");

// Create the configuration
var spCfg = new $REST.Helper.SPConfig({
    // Custom site fields
    CustomFields: [
        // Field Information
    ],
    // Custom lists
    ListCfg: [
        {
            CustomFields: [
                // Field Information
            ],
            ListInformation: {
                BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList,
                Title: "My Custom List"
            },
            ViewInformation: [
                {
                    // View Information
                }
            ]
        }
    ]
});

// Install the configuration
spCfg.install();

// Uninstall the configuration
spCfg.uninstall();
```
### TypeScript
```ts
import { Helper } from "gd-sprest";

// Create the configuration
let spCfg = new Helper.SPConfig({
    // Custom site fields
    CustomFields: [
        // Field Information
    ],
    // Custom lists
    ListCfg: [
        {
            CustomFields: [
                // Field Information
            ],
            ListInformation: {
                BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList,
                Title: "My Custom List"
            },
            ViewInformation: [
                {
                    // View Information
                }
            ]
        }
    ]
});

// Install the configuration
spCfg.install();

// Uninstall the configuration
spCfg.uninstall();
```