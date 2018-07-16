---
layout: default
---
<div class="page-info" markdown="1">

[Back](/api)
## Navigation

</div>

<!-- Tabs -->
<div class="tabs">
<!-- Tab Items -->
<div class="tab-items">
    <div class="tab-item">Code Reference</div>
    <div class="tab-item">Properties</div>
    <div class="tab-item">Methods</div>
    <div class="tab-item">Menu State</div>
    <div class="tab-item">Menu Node</div>
</div>

<!-- Tab Content -->

<!-- Code Reference -->
<div class="tab-content" markdown="1">

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.Navigation()

// TypeScript
import { Navigation } from "gd-sprest";
Navigation()
```

</div>
<!-- Properties -->
<div class="tab-content" markdown="1">

| Name | Type | Description |
| --- | --- | --- |
| MenuState() | _MenuState_ | Get the navigation menu. |
| MenuState(key: number) | _MenuState_ | Gets the navigation menu node by the specified key. |

</div>
<!-- Methods -->
<div class="tab-content" markdown="1">

| Method | Return Type | Description |
| --- | --- | --- |
| getMenuState(menuNodeKey, depth, customProperties, mapProviderName) | _MenuState_ | Gets the navigation menu. |

</div>
<!-- Menu State -->
<div class="tab-content" markdown="1">

| Name | Type | Description |
| --- | --- | --- |
| FriendlyUrlPrefix | _string_ | The URL of the navigation node relative to the URL of the parent navigation node. |
| Nodes | _IResults&lt;IMenuNode&gt;_ | The child nodes. |
| SimpleUrl | _string_ | The relative or absolute URL of the navigation node. Site-relative URLs can begin with the "~site" URL token and site collection-relative URLs can begin with the "~sitecollection" URL token. Applies only to SimpleLink node types. |
| SPSitePrefix | _string_ | The string that replaces the "~sitecollection" token in site collection-relative links. For example, to get the Try Link command to work with the relative link ~sitecollection/Pages/MyPage.aspx, this value might be http://contoso.com/sites/site1/. |
| SPWebPrefix | _string_ | The string that replaces the "~site" token in site-relative links. For example, to get the Try Link command to work with the relative link ~site/Pages/MyPage.aspx, this value might be http://contoso.com/sites/site1/web1. |
| StartingNodeKey | _string_ | The identifier of the root node in the menu tree. |
| StartingNodeTitle | _string_ | The title of the root node in the menu tree. (_Example: "Document Center"_) |
| Version | _string_ | An implementation-specific value that the server uses to detect external changes. For example, it could be a change timestamp for the database or a monotonically increasing version number such as "2009-06-15T20:45:30Z". |

</div>
<!-- Menu Node -->
<div class="tab-content" markdown="1">

| Name | Type | Description |
| --- | --- | --- |
| CustomProperties | _IResults&lt;any&gt;_ | The node properties. |
| FriendlyUrlSegment | _string_ | The URL of the navigation node relative to the URL of the parent navigation node. |
| IsDeleted | _boolean_ | Not part of documentation. |
| IsHidden | _boolean_ | Indicates whether the node is hidden in the navigation menu. During editing, all nodes temporarily become visible. |
| Key | _string_ | The identifier for the navigation node in the menu tree. |
| Nodes | _IResults&lt;IMenuNode&gt;_ | The child nodes. |
| NodeType | _SPTypes.NodeType_ | The type of the navigation node. |
| SimpleUrl | _string_ | The relative or absolute URL of the navigation node. Site-relative URLs can start with the "~site" token and site collection-relative URLs can start with the "~sitecollection" token. Applies only to SimpleLink node types. |
| Title | _string_ | The title of the navigation node. |

</div>
</div>