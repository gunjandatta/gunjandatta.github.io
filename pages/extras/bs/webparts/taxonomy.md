---
layout: archive
title: "Taxonomy WebPart"
category: bs
permalink: /extras/bs/webparts/taxonomy/
---
The taxonomy webpart should be used when targeting the term store as a datasource.

#### Configuration
The edit form includes configurable dropdown lists, for selecting a target term group or set.

#### [Examples](/examples/solutions)
Refer to the custom solutions for examples of creating custom webparts.

##### JavaScript
```js
var WebParts = require("gd-sprest-bs").WebParts;

// Create the webpart
WebParts.WPTaxonomy({
    elementId: "my-wpTaxonomy",
    cfgElementId: "my-wpTaxonomy-cfg",
    onRenderTermSetTerms: function(wpInfo, terms) {
        // Render the display element
        wpInfo.el.innerHTML = [
            '<h1>Term Set: ' + wpInfo.TermSetName + '</h1>',
            '<h5>Terms: ' + terms.length + '</h5>'
        ].join('\n');
    }
});
```

##### TypeScript
```ts
import { WebParts } from "gd-sprest-bs";

// Create the webpart
WebParts.WPTaxonomy({
    elementId: "my-wpTaxonomy",
    cfgElementId: "my-wpTaxonomy-cfg",
    onRenderTermSetTerms: (wpInfo, terms) => {
        // Render the display element
        wpInfo.el.innerHTML = [
            '<h1>Term Set: ' + wpInfo.TermSetName + '</h1>',
            '<h5>Terms: ' + terms.length + '</h5>'
        ].join('\n');
    }
});
```

#### Properties

| Name | Type | Description |
| --- | --- | --- |
| onRenderTermSet | _(wpInfo: IWPTaxonomyInfo, termSet: Types.Helper.ITerm) => void_ | The on render term set event. |
| onRenderTermSets | _(wpInfo: IWPTaxonomyInfo, termSets: Array&lt;Types.Helper.ITermSetInfo&gt;) => void_ | The on render term sets event. |
| onRenderTermSetTerms | _(wpInfo: IWPTaxonomyInfo, terms: Array&lt;Types.Helper.ITermInfo&gt;) => void_ | The on render term set terms event. |

#### Edit Form (IWPEditForm)

| Name | Type | Description |
| --- | --- | --- |
| onTermGroupChanged | _(wpInfo: IWPTaxonomyInfo, termGroupInfo?: ITermGroupInfo) => void_ | The term group changed event. |
| onTermGroupsLoaded | _(wpInfo: IWPTaxonomyInfo, termGroups: Array&lt;Components.IDropdownItem&gt;) => Array&lt;Components.IDropdownItem&gt;_ | The term group loaded event. |
| onTermSetChanged | _(wpInfo: IWPTaxonomyInfo, termSetInfo?: ITermInfo) => void_ | The term set changed event. |
| onTermSetsLoaded | _(wpInfo: IWPTaxonomyInfo, termSets?: Array&lt;Components.IDropdownItem&gt;) => Array&lt;Components.IDropdownItem&gt;_ | The term set loaded event. |
| onTermSetTermChanged | _(wpInfo: IWPTaxonomyInfo, termInfo?: ITermInfo) => void_ | The term set term changed event. |
| onTermSetTermsLoaded | _(wpInfo: IWPTaxonomyInfo, terms?: Array&lt;Components.IDropdownItem&gt;) => Array&lt;Components.IDropdownItem&gt;_ | The term set terms loaded event. |
| showTermSetTerms | _boolean_ | Flag to display the term set terms. |

#### WebPart Configuration (IWPCfg)

| Name | Type | Description |
| --- | --- | --- |
| TermGroupId | _string_ | The term group id. |
| TermGroupName | _string_ | The term group name. |
| TermSetId | _string_ | The term set id. |
| TermSetName | _string_ | The term set name. |
| TermSetTermId | _string_ | The term set term id. |
| TermSetTermName | _string_ | The term set term name. |