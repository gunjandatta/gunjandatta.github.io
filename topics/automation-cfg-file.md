---
layout: default
---
[Back](/api/automation)
## SharePoint Field Configuration Example
### TypeScript
```ts
import { Helper, Types } from "gd-sprest";

// Export the configuration
export const Configuration = new Helper.SPConfig({
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