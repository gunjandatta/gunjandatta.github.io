---
layout: default
---
[Back](/react)
## React WebPart Configuration Component
This component is used with the [[WebPart|React WebPart]] component. This component renders a button to the page, displaying a configuration panel displaying the webpart's custom properties. This component can be extended for further customizations.

### Available Components
* _WebPartCfgPanel_
  * The base component rendering a button and panel
* _WebPartListCfg_
  * Allows the user to specify the target web and list
  * Inherits from the WebPartCfgPanel component
* _WebPartFieldCfg_
  * Allows the user to specify a list of fields from the selected list
  * Inherits from the WebPartListCfg component
* _WebPartSearchCfg_
  * Filters the list of fields to specific types allowed for the search webpart
  * Inherits from the WebPartFieldCfg component

### Additional Information
Reference this [blog post](http://dattabase.com/sharepoint-react-webparts/) for additional details of developing modern webparts in SharePoint 2013.

### Interfaces
#### IWebPartCfg (WebPart Configuration)
* WebPartId:string
    * The webpart id containing the element

#### IWebPartCfgProps (WebPart Configuration Properties)
* cfg:IWebPartCfg
    * The webpart configuration
* cfgElementId:string
    * The target element id to render the component to

#### IWebPartCfgState (WebPart Configuration State)
* cfg:IWebPartCfg
    * The webpart configuration

#### IWebPartCfgPanel (WebPart Configuration Panel)
* _errorMessage:HTMLDivElement
    * A reference to the error message element.
* _panel:Panel
    * A reference to the configuration panel element.
* onRenderContents:(cfg:IWebPartCfg) => JSX.Element | Array<JSX.Element>
    * The render contents event.
* onRenderFooter:() => JSX.Element | Array<JSX.Element>
    * The render footer event.
* onRenderHeader:() => JSX.Element | Array<JSX.Element>
    * The render header event.
* saveConfiguration:(wpCfg:IWebPartCfg) => void
    * Method to save the webpart configuration.
    * This method will cause a postback, since it updates the webpart content.