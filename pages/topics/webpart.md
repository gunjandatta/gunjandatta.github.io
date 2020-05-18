---
layout: archive
title: "WebPart"
category: topics
permalink: /topics/webpart/
---
The webpart component allows the developer to easialy assign react components to be rendered based on the page's state (Display/Edit). This component currently supports webpart, publishing and wiki pages. The following webpart components are available:

* Configuration - A react component to be used when the page is being edited, displaying an "Edit Configuration" button to render a panel for custom webpart properties.
    * List Configuration - Inherits the configuration webpart, displaying a web url and list dropdown.
    * Field Configuration - Inherits the list configuration webpart, adding a field picker.
    * Search Configuration - Inherits the field configuration webpart, filtering the field picker to field types supported by the search webpart.
* List - Allows the developer to define an OData or CAML query, and contains two methods:
    * onRenderContainer - Optional method with the query results passed as the input parameter.
    * onRenderItem - Requires method with the item result passed as the input parameter.
* Search - Inherits the list webpart, adding a search textbox. Based on the configuration fields, a mapper is created based on the item data. This feature will automatically filter the items displayed.
* Tabs - Displays all associated webparts within the same zone in tabs.

**_Creating Modern WebParts for SharePoint 2013_**

Reference the [Code Examples](/examples/) for examples of creating webparts and upgrading them to SPFx.