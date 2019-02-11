---
layout: page
---

## JSLink

The JSLink feature allows the developer to customize list forms and views. Refer to this [blog post](http://dattabase.com/js-links/) for a detailed overview of this helper class.

### Template Overrides
To create a list template override, simply create an instance of the JSLink class.

#### Configuration
- BaseViewID: number \| string
- ListTemplateType: number
- OnPostRender
- onPreRender
- Templates
    - Body
    - Footer
    - Fields: Array
        - DisplayForm
        - EditForm
        - Name
        - NewForm
        - View
    - Group
    - Header
    - Item
    - OnPostRender
    - OnPreRender

#### Helper Methods
The library contains helper methods for JSLinks.
- disableEdit(ctx, field, requiredValueValueFl) - Disables the field in "Edit" mode.
- disableQuickEdit(ctx, field) - Disables the cell in "Quick Edit" mode.
- getListView(ctx) - Returns the list view element.
- getListViewItems(ctx) - Returns the list view elements.
- getListViewSelectedItems(ctx) - Returns the selected list items.
- getWebPart(ctx) - Returns the webpart element.
- hideField(ctx, field) - Hides the field element.
- register(IJSLinkCfg) - Registers the JSLink template override(s).
- removeField(ctx, field, formType) - Removes the field element from the DOM.
- renderField(ctx, field, formType) - Renders the default html for the field.

### JavaScript

```js
var $REST = require("gd-sprest");

// Register the JSLink templates
$REST.JSLink.register({
    Templates: {
        Fields: {
            Title: {
                EditForm: (ctx, field) => { $REST.Helper.JSLink.hideField(ctx, field, true); },
                View: $REST.Helper.JSLink.disableQuickEdit
            }
        }
    }
});
```

### TypeScript

```ts
import { Helper } from "gd-sprest";

// Register the JSLink templates
Helper.JSLink.register({
    Templates: {
        Fields: {
            Title: {
                EditForm: (ctx, field) => { $REST.Helper.JSLink.hideField(ctx, field, true); },
                View: $REST.Helper.JSLink.disableQuickEdit
            }
        }
    }
});
```