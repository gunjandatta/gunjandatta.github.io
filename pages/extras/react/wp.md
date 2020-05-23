---
title: "WebPart"
category: react
permalink: /extras/react/wp/
---
Reference this [blog post](https://dattabase.com/blog/sharepoint-react-webparts/) for additional details of developing modern webparts in SharePoint 2013.

The webpart component allows the developer to easily assign a component to be rendered based on the page's current state (Display/Edit). The component supports the following page types:
* Publishing Pages
* WebPart Pages
* Wiki Pages

## Component Logic

This webpart allows the developer to control what component to display, based on the page mode (Display/Edit). This flexibility allows the developer to create smaller components, based on the page mode.

## Properties

* cfgElementId## 
    * The webpart configuration target element id.
* displayElement## 
    * The react component to display in "Display" mode.
* editElement## 
    * The react component to display in "Edit" mode.
* elementId## 
    * The webpart target element id.
* helpProps## 
    * title## 
        * The help title link name.
    * url## 
        * The help title link url.
* onPostRender## 
    * Event executed after the webpart is rendered.
* onRenderDisplay## 
    * Event used in-place of defining the "displayElement" property.
* onRenderEdit## 
    * Event used in-place of defining the "editElement" property.

## Fabric Component

The [Fabric Component](https://github.com/OfficeDev/office-ui-fabric-react/wiki/The-Fabric-Component) should be used to wrap the Fluent UI react components. By default the WebPart will wrap the display and edit elements in a Fabric component, so there is no need to add this to you application.