---
layout: archive
title: "WebPart"
category: bs
permalink: /extras/bs/webparts/base/
---
The client-side webpart component can be used to control what is displayed when a page is being edited and displayed. An optional hidden configuration element can be utilized to store a custom configuration.

#### Configuration
The edit form property allows you to customize the webpart configuration. Reference the [Form](/extras/bs/components/form) for additional details on the form control types available.

#### [Examples](/examples/solutions)
Refer to the custom solutions for examples of creating custom webparts.

##### JavaScript
```js
var WebParts = require("gd-sprest-bs").WebParts;

// Create the webpart
WebParts.WebPart({
    elementId: "my-wp",
    cfgElementId: "my-wp-cfg",
    onRenderDisplay: function(wpInfo) {
        // Render the display element
        wpInfo.el.innerHTML = '<h1>Hello Display Mode</h1>';
    },
    onRenderEdit: function(wpInfo) {
        // Render the edit element
        wpInfo.el.innerHTML = '<h1>Hello Edit Mode</h1>';
    }
});
```

##### TypeScript
```ts
import { WebParts } from "gd-sprest-bs";

// Create the webpart
WebParts.WebPart({
    elementId: "my-wp",
    cfgElementId: "my-wp-cfg",
    onRenderDisplay: (wpInfo) => {
        // Render the display element
        wpInfo.el.innerHTML = '<h1>Hello Display Mode</h1>';
    },
    onRenderEdit: (wpInfo) => {
        // Render the edit element
        wpInfo.el.innerHTML = '<h1>Hello Edit Mode</h1>';
    }
});
```

#### Properties

| Name | Type | Description |
| --- | --- | --- |
| cfgElementId | _string_ | The optional configuration element id. |
| className | _string_ | The class name. |
| elementId | _string_ | The target element id to render the webpart to. |
| editForm | IWPEditForm | The edit form. |
| helpProps | _{ title?: string; url: string; }_ | The optional help link properties. |
| onPostRender | _(wp: IWPInfo, ...args) => void_ | The post render event. |
| onRenderDisplay | _(wp: IWPInfo) => any_ | The render event triggered when the page is in 'Display' mode. |
| onRenderEdit | _(wp: IWPInfo) => any_ | The render event triggered when the page is in 'Edit' mode. |
| wpClassName | _string_ | The webpart class name. |

#### Edit Form (IWPEditForm)

| Name | Type | Description |
| --- | --- | --- |
| actions | _Array&lt;Components.IButtonProps&gt;_ | The form action buttons displayed in the footer of the modal. |
| onRenderForm | _(wpInfo?: IWPInfo) => Array&lt;Components.IFormControlProps&gt; \| PromiseLike&lt;Array&lt;Components.IFormControlProps&gt;&gt; \| void_ | The render form event. |
| onSave | _(wpCfg?: IWPCfg, form?: Components.IForm) => IWPCfg_ | The save event. |
| showSaveButton | _boolean_ | True to hide the save button. |

#### WebPart Configuration (IWPCfg)

| Name | Type | Description |
| --- | --- | --- |
| WebPartId | _string_ | The webpart id. |