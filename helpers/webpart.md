---
layout: default
---
[Back](/helpers)
## WebPart
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
### Creating Modern WebParts for SharePoint 2013
Although this is designed for SharePoint 2013, this is also designed to work for SharePoint Online.
#### [Blog Series](http://dattabase.com/sharepoint-2013-modern-webpart/)
A series of blog posts have been created to help give an overview of creating webparts in SharePoint 2013. WebPart templates have been created in the [gd-sprest-react](https://github.com/gunjandatta/sprest-react) library, to help the developer focus on the code rendered to the page.
- [[JavaScript Example|http://dattabase.com/sharepoint-2013-modern-webpart-1-4/]]
- [[TypeScript Example|http://dattabase.com/sharepoint-2013-modern-webpart-1-4/]]
- [[React Example|http://dattabase.com/sharepoint-2013-modern-webpart-1-4/]]
- [[VueJS Example|http://dattabase.com/sharepoint-2013-modern-webpart-1-4/]]
- [[Angular|http://dattabase.com/sharepoint-2013-modern-webpart-1-4/]]
    _This post is still TBD (to be developed)_
