---
layout: archive
title: "SharePoint Configuration"
category: topics
permalink: /topics/sp-cfg/
---
The "SharePoint Configuration" class allows the developer to define configuration files, to automate the installation/unintallation of SharePoint assets. The configuration options are available through the built-in intellisense, shown below. This configuration class contains built-in methods to install and uninstall the SharePoint assets. Refer to the [Code Examples](/examples/automation) for examples of using this class.

![Automation](/assets/images/demo-spcfg.gif)

**_Code Deployment_**

```ts
import { Helper } from "gd-sprest";

// Create the configuration
let spCfg = Helper.SPConfig({
    // See Configuration Examples Below
});

// Install the configuration
spCfg.install();

// Uninstall the configuration
spCfg.uninstall();
```

**_Multiple Configurations_**

The ability to define multiple configurations is easy to setup. This approach allows the configuration to specific groups of components.

```ts
/**
 * Test Configuration
 */
export const Configuration = {
    // Custom Action
    CustomAction: (targetSiteCollection:boolean = true) => {
      // See if we are deploying this against the site collection
      if(targetSiteCollection) {
        // Target the site
        return Helpler.SPConfig({
          CustomActionCfg: {
            Site: [
              { ... }
            ]
          }
        });
      }

      // Target the web
      return Helpler.SPConfig({
        CustomActionCfg: {
          Web: [
            { ... }
          ]
        }
      });
    }
```

### SPConfig Class

**_Constructor_**

* configuration:ISPConfigProps
* webUrl?:string

**_Methods_**

_install(callback?: function)_

This method will create the objects defined in the configuration file. The order of creation is:

1. Fields
2. Content Types
3. Lists
4. User Custom Actions
5. Web Parts

_uninstall(callback?: function)_

This method will remove the objects defined in the configuration file. The order of removal is:

1. Web Parts
2. User Custom Actions
3. Lists
4. Content Types
5. Fields

**_Properties_**

* ContentTypes - A collection of content type configurations.
* CustomActionCfg - A collection of custom action configurations.
* Fields - A collection of field configurations.
* ListCfg - A collection of list configurations.
* SharePoint Configuration Types
  0. Fields
  1. Content Types
  2. Lists
  3. Site User Custom Actions
  4. Web User Custom Actions
  5. Web Parts

### Configuration Examples

_Note - Intellisense is available for defining the custom properties of the various field types._

**_Custom Action_**

```ts
// Export the configuration
export const Configuration = Helper.SPConfig({
    // Custom Action Configuration
    CustomActionCfg: {
        // Targets the site collection
        Site: [
            // Example for deploying a script link against the site collection
            {
                Description: "References my library.",
                Location: "ScriptLink",
                Name: "MyGlobalLib",
                ScriptSrc: "~sitecollection/style library/mygloballib/mygloballib.js",
                Title: "My Global Library"
            }
        ],

        // Targets the web
        Web: [
            // Example for deploying custom script against the web
            {
                Description: "Initializes my solution.",
                Location: "ScriptLink",
                Name: "MySolution",
                ScriptBlock: "SP.SOD.executeOrDelayUntilScriptLoaded(function() { new MyGlobalLibrary.MySolution(); }, 'mygloballib.js');",
                Title: "My Solution"
            }
        ]
    }
});
```

**_List_**

```ts
// Export the configuration
export const Configuration = Helper.SPConfig({
    // List Configuration
    ListCfg: [
        {
            ContentTypes: [
                {
                Description: "",
                FieldRefs: ["Title", "InternalFieldName"],
                JSLink: "~sitecollection/style library/mygloballib/jslink.js",
                Name: "CT Item",
                ParentName: "Item"
                }
            ],
            CustomFields: [
                // See Site Field Example
            ],
            ListInformation: {
                BaseTemplate: SPTypes.ListTemplateType.GenericList,
                Description: "",
                Title: "My Custom List",
            },
            UserCustomActions: [
                // See Custom Action Example
            ],
            ViewInformation: [
                {
                    JSLink: "~sitecollection/style library/mygloballib/jslink.js",
                    ViewFields: ["ID", "Title", "InternalFieldName"],
                    ViewName: "All Items",
                    ViewQuery: "<Query></Query>"
                }
            ]
        }
    ]
});
```

**_Site Field_**

```ts
// Export the configuration
export const Configuration = Helper.SPConfig({
    // Site Fields
    CustomFields: [
        // Boolean Field
        {
            defaultValue: "0",
            name: "TestBoolean",
            title: "Boolean",
            type: Helper.Types.SPCfgFieldType.Boolean
        },

        // Choice Field
        {
            defaultValue: "Choice 3",
            name: "TestChoice",
            title: "Choice",
            type: Helper.Types.SPCfgFieldType.Choice,
            choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4", "Choice 5"]
        } as Types.SPConfig.ISPConfigFieldInfoChoice,

        // Choice (Multi) Field
        {
            defaultValue: "Choice 3",
            multi: true,
            name: "TestMultiChoice",
            title: "Multi-Choice",
            type: Helper.Types.SPCfgFieldType.Choice,
            choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4", "Choice 5"]
        } as Types.SPConfig.ISPConfigFieldInfoChoice,

        // Note Field
        {
            name: "TestComments",
            title: "Comments",
            type: Helper.Types.SPCfgFieldType.Note
        },

        // Date Only Field
        {
            format: SPTypes.DateFormat.DateOnly,
            name: "TestDate",
            title: "Date Only",
            type: Helper.Types.SPCfgFieldType.Date
        } as Types.SPConfig.ISPConfigFieldInfoDate,

        // Date/Time Field
        {
            format: SPTypes.DateFormat.DateTime,
            name: "TestDateTime",
            title: "Date/Time",
            type: Helper.Types.SPCfgFieldType.Date
        } as Types.SPConfig.ISPConfigFieldInfoDate,

        // Lookup Field
        {
            listName: "SPReact",
            name: "TestLookup",
            title: "Lookup",
            showField: "Title",
            type: Helper.Types.SPCfgFieldType.Lookup
        } as Types.SPConfig.ISPConfigFieldInfoLookup,

        // Lookup (Multi) Field
        {
            listName: "SPReact",
            multi: true,
            name: "TestMultiLookup",
            title: "Multi-Lookup",
            showField: "Title",
            type: Helper.Types.SPCfgFieldType.Lookup
        } as Types.SPConfig.ISPConfigFieldInfoLookup,

        // Managed Metadata Field
        {
            name: "TestMMS",
            title: "MMS",
            type: Helper.SPCfgFieldType.MMS
        },

        // Note Field
        {
            name: "TestNote",
            title: "Note",
            type: Helper.Types.SPCfgFieldType.Note
        } as Types.SPConfig.ISPConfigFieldInfoNote,

        // Decimal Field
        {
            decimals: 2,
            numberType: SPTypes.FieldNumberType.Decimal,
            name: "TestNumberDecimal",
            title: "Decimal",
            type: Helper.Types.SPCfgFieldType.Number
        } as Types.SPConfig.ISPConfigFieldInfoNumber,

        // Number Field
        {
            numberType: SPTypes.FieldNumberType.Integer,
            name: "TestNumberInteger",
            title: "Integer",
            type: Helper.Types.SPCfgFieldType.Number
        } as Types.SPConfig.ISPConfigFieldInfoNumber,

        // Percentage Field
        {
            numberType: SPTypes.FieldNumberType.Percentage,
            name: "TestNumberPercentage",
            title: "Percentage",
            type: Helper.Types.SPCfgFieldType.Number
        } as Types.SPConfig.ISPConfigFieldInfoNumber,

        // URL Field
        {
            name: "TestUrl",
            title: "Url",
            type: Helper.Types.SPCfgFieldType.Url
        },

        // User Field
        {
            name: "TestUser",
            title: "User",
            type: Helper.Types.SPCfgFieldType.User,
            selectionMode: SPTypes.FieldUserSelectionType.PeopleAndGroups
        } as Types.SPConfig.ISPConfigFieldInfoUser,

        // User (Multi) Field
        {
            multi: true,
            name: "TestMultiUser",
            title: "Multi-User",
            type: Helper.Types.SPCfgFieldType.User,
            selectionMode: SPTypes.FieldUserSelectionType.PeopleAndGroups
        } as Types.SPConfig.ISPConfigFieldInfoUser
    }
});
```