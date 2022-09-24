---
title: "Classic WebParts"
category: topics
permalink: /topics/classic-webparts/
---

## Classic WebParts

### Starter WebParts

The `gd-sprest-bs` framework has pre-built reusable webparts that can be used for various configurations. This will simplify and minimize the amount of code you need to write, so you can focus on the application instead of the configuration and datasource. Each webpart is designed to be used as is, or further extended.

#### Base

The base webpart inherited by all of the webparts. The webpart will require two elements, one to render the solution to and the other to store the configuration for the webpart. The `onRenderDisplay` and `onRenderEdit` events will be used to render the app based on the page mode. The base webpart will include a blank form which is triggered from the `Configuration` button.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| cfgElementId | _string_ | The configuration element id. |
| elementId | _string_ | The element to render the app to. |
| className | _string_ | The custom classname to apply to the display/edit element. |
| wpClassName | _string_ | The class name to apply to the webpart element. |
| editForm | _IWPEditForm_ | The available customizations for the webpart's configuration. |
| onPostRender | _(wp: IWPInfo) =&gt; void_ | Triggered after the webpart is rendered. |
| onRenderDisplay | _(wp: IWPInfo) =&gt; void_ | Triggered when the page is being viewed. |
| onRenderEdit | _(wp: IWPInfo) =&gt; void_ | Triggered when the page is being edited. |
| onRenderForm | _(form: IForm, wp: IWPInfo) =&gt; void_ | Triggered after the form is rendered. |

**WebPart Configuration**

| Name | Type |
| --- | --- |
| WebPartId | _string_ |


#### List

The list webpart will have a configuration form pre-configured to allow the user to set the web url containing the target list, where the default would be the current web. A dropdown list will contain the lists available. A render method will be available that contains the list items.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| camlQuery | _string_ | The CAML query to use when querying the list items. |
| odataQuery | _IOData_ | The OData query to use when querying the list items. |
| onExecutingCAMLQuery | _(wpInfo: IListInfo, caml: string) =&gt; string_ | Use when you need to generate the CAML query based on the webpart properties. |
| onExecutingODATAQuery | _(wpInfo: IListInfo, odata: IOData) =&gt; string_ | Use when you need to generate the CAML query based on the webpart properties. |
| onRenderItems | _(wpInfo: IListInfo, items: IListItem[]) =&gt; void_ | Triggered when the page is in display mode. It will contain the list items based on the query provided. **Use this to render your solution.** |

**WebPart Configuration**

| Name | Type |
| --- | --- |
| ListName | _string_ |
| WebPartId | _string_ |
| WebUrl | _string_ |

#### List w/ Fields

The list w/ fields webpart will extend the list webpart and include the ability to select fields from the target list. The webpart configuration will include the selected fields.

**Properties**

Same as the list webpart.

**WebPart Configuration**

| Name | Type |
| --- | --- |
| Fields | _IWPListField[]_ |
| ListName | _string_ |
| WebPartId | _string_ |
| WebUrl | _string_ |

#### Search

This webpart name is a little mis-leading, it's not for the search interface but allows the webpart configuration to include specific list field types available for filtering.

* Choice
* Lookup
* Taxonomy
* Text
* URL
* User

The webpart object will contain a method _`filterItems(filterText: string) => ILIstItem[]`_ that can be used to return the filtered items.

**Properties**

Same as the list webpart.

**WebPart Configuration**

| Name | Type |
| --- | --- |
| Fields | _{ name: string, type: string }[]_ |
| ListName | _string_ |
| WebPartId | _string_ |
| WebUrl | _string_ |

#### Taxonomy

The taxonomy webpart will be linked to a term set. Various events can be used to render your app based off a selected term group, term set, or term set terms.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| onRenderTermSet | _(wpInfo: IWPTaxonomyInfo, termSet: Helper.ITerm) => void_ | Triggered after the term set is rendered. |
| onRenderTermSets | _(wpInfo: IWPTaxonomyInfo, termSets: Helper.ITermSetInfo[]) => void_ | Triggered after the term set is rendered. |
| onRenderTermSetTerms | _(wpInfo: IWPTaxonomyInfo, termSet: Helper.ITermInfo[]) => void_ | Triggered after the term set is rendered. |

**WebPart Configuration**

| Name | Type |
| --- | --- |
| TermGroupId | _string_ |
| TermGroupName | _string_ |
| TermSetId | _string_ |
| TermSetName | _string_ |
| TermSetTermId | _string_ |
| TermSetTermName | _string_ |

#### Tabs

This webpart can be used to group webparts within a zone as tabs. It will ignore any hidden webparts, and can be configured to render each webpart name as a `Pillar` or regular `Tab` type.

### How to Code a Classic WebPart

The easiest way to create classic webparts is to create a pre-configured Script/Content Editor WebPart and make it available in the webpart gallery for the user to select from. The `gd-sprest` library contains the [SPConfig](./sp-cfg.md) component, which we will use to install/uninstall the webpart to/from a site collection.

#### SPConfig Code Example

This code example will demonstrate how to generate a content editor webpart and script editor webpart. The install/uninstall method of the `SPConfig` object will add/remove a file from the site collection's webparts folder. This will make the pre-configured content/script editor webpart available in the webpart gallery for users to select.

Both examples will use the following html. The script will utilize the SharePoint Script-on-Demand library to ensure the script is loaded before calling the library.

```html
<div id="wp-demo"></div>
<div id="wp-demo-cfg"></div>
<script type="text/javascript" src="/sites/demo/siteassets/wp-demo.js"></script>
<script type="text/javascript">
    if(SP.SOD.executeOrDelayUntilScriptLoaded(function() { new ListWebPartDemo.WebPart(); }, "wpdemo") == false) {
        // Load the script
        LoadSodByKey("wpDemo");
    }
</script>
```

Below is an example of creating a script/content editor webpart.

```ts
import { Helper } from "gd-sprest-bs";

/**
 * SharePoint Configuration
 * Used to create SharePoint assets for the solution.
 */
export const Configuration = Helper.SPConfig({
    WebPartCfg: [
        {
            FileName: "demo-cewp.webpart",
            Group: "Custom",
            XML: Helper.WebPart.generateContentEditorXML({
                title: "Demo WebPart",
                frameType: "Default",
                description: "A custom webpart.",
                contentLink: "A reference to a file can also be used.",
                content: [
                    '&lt;div id="wp-demo"&gt;&lt;/div&gt;',
                    '&lt;div id="wp-demo-cfg" style="display: none;"&gt;&lt;/div&gt;',
                    '&lt;script type="text/javascript" src="/sites/dev/siteassets/wp-demo.js"&gt;&lt;/script&gt;',
                ].join('\n')
            })
        },
        {
            FileName: "demo-sewp.webpart",
            Group: "Custom",
            XML: Helper.WebPart.generateScriptEditorXML({
                title: "Demo WebPart",
                chromeType: "None",
                description: "A custom webpart.",
                content: [
                    '&lt;div id="wp-demo"&gt;&lt;/div&gt;',
                    '&lt;div id="wp-demo-cfg" style="display: none;"&gt;&lt;/div&gt;',
                    '&lt;script type="text/javascript" src="/sites/dev/siteassets/wp-demo.js"&gt;&lt;/script&gt;',
                    '&lt;script type="text/javascript"&gt;if(SP.SOD.executeOrDelayUntilScriptLoaded(function() { new ListWebPartDemo.WebPart(); }, "wpdemo") == false) { LoadSodByKey("wpDemo"); }&lt;/script&gt;'
                ].join('\n')
            })
        }
    ]
});
```

#### Main Code

The main code will import the Configuration. This will represent the `wp-demo.js` file referenced by the solution. The SharePoint Script-on-Demand library will be used to notify the webpart's content that the library has been loaded and to call the `WebPart` method to render the webpart.

```ts
import { Helper } from "gd-sprest";
import { Configuration } from "./cfg";
import { WebPart } from "./wp";

// Create the global variable
window["ListWebPartDemo"] = {
    Configuration,
    WebPart
};

// Notify the SharePoint Script-on-Demand (SOD) Library
Helper.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs("wpdemo");
```

### Other Examples

Reference the [Code Examples](/examples/) for other examples of creating classic webparts.