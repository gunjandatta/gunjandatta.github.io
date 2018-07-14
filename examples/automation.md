---
layout: default
---
<div class="page-info" markdown="1">

[Back](/topics/automation)
## SharePoint Automation

</div>

<!-- Tabs -->
<div class="tabs">
<!-- Tab Items -->
<div class="tab-items">
    <div class="tab-item">JavaScript</div>
    <div class="tab-item">TypeScript</div>
</div>

<!-- JavaScript -->
<div class="tab-content" markdown="1">

```js
var $REST = require("gd-sprest");

// Create the configuration
var spCfg = $REST.Helper.SPConfig({
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
</div>

<!-- TypeScript -->
<div class="tab-content" markdown="1">

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
</div>
</div>