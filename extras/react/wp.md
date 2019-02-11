---
layout: extras
---
# Office Fabric-UI (React)

### React WebPart Component

Reference this [blog post](http://dattabase.com/sharepoint-react-webparts/) for additional details of developing modern webparts in SharePoint 2013.

The webpart component allows the developer to easily assign a component to be rendered based on the page's current state (Display/Edit). The component supports the following page types:
* Publishing Pages
* WebPart Pages
* Wiki Pages

**_Component Logic_**

This webpart allows the developer to control what component to display, based on the page mode (Display/Edit). This flexibility allows the developer to create smaller components, based on the page mode.

**_Properties_**

* _**cfgElementId**_
    * The webpart configuration target element id.
* _**displayElement**_
    * The react component to display in "Display" mode.
* _**editElement**_
    * The react component to display in "Edit" mode.
* _**elementId**_
    * The webpart target element id.
* _**helpProps**_
    * _**title**_
        * The help title link name.
    * _**url**_
        * The help title link url.
* _**onPostRender**_
    * Event executed after the webpart is rendered.
* _**onRenderDisplay**_
    * Event used in-place of defining the "displayElement" property.
* _**onRenderEdit**_
    * Event used in-place of defining the "editElement" property.

**_Fabric Component_**

The [Fabric Component](https://github.com/OfficeDev/office-ui-fabric-react/wiki/The-Fabric-Component) should be used to wrap the Fabric UI react components. By default the WebPart will wrap the display and edit elements in a Fabric component, so there is no need to add this to you application.