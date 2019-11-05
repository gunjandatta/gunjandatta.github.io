---
layout: page
---
# REST API

## List Data as Stream

The list data as stream allows you to get data from a list, using the REST API's SP.List.getDataAsStream endpoint. Since the absolute url of the list is required, data can be retrieved from other site collections. The context information of the other site collection is not required with this api.

#### Properties

- listFullUrl - The absolute url of the list.
- parameters - The optional list data parameters.

### Code Example

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.ListDataAsStream("https://[tenant].sharepoint.com/sites/dev/lists/tasks", {
    FilterField1: "MyFilterField",
    FilterValue1: "Value"
}).execute(function(data) {
    // Parse the items
    for(var i=data.FirstRow; i<data.LastRow; i++) {
        var item = data.Row[i];
    }
});

// TypeScript
import { List } from "gd-sprest";

List.getDataAsStream("https://[tenant].sharepoint.com/sites/dev/lists/tasks", {
    FilterField1: "MyFilterField",
    FilterValue1: "Value"
}).execute(data => {
    // Parse the items
    for(let i=data.FirstRow; i<data.LastRow; i++) {
        let item = data.Row[i];
    }
});
```

### Parameters

#### List Data Parameters

| Property | Type |
| --- | --- |
AddRequiredFields | _boolean_ |
AllowMultipleValueFilterForTaxonomyFields | _boolean_ |
DatesInUtc | _boolean_ |
ExpandGroups | _boolean_ |
FirstGroupOnly | _boolean_ |
FolderServerRelativeUrl | _string_ |
ImageFieldsToTryRewriteToCdnUrls | _string_ |
OverrideViewXml | _string_ |
Paging | _string_ |
RenderOptions | _number_ |
ReplaceGroup | _boolean_ |
ViewXml | _string_ |

#### List Data Override Parameters

| Property | Type |
| --- | --- |
| CascDelWarnMessage | _string_ |
| CustomAction | _string_ |
| DrillDown | _string_ |
| Field | _string_ |
| FieldInternalName | _string_ |
| Filter | _string_ |
| FilterData | _string_ |
| FilterData1 | _string_ |
| FilterData10 | _string_ |
| FilterData2 | _string_ |
| FilterData3 | _string_ |
| FilterData4 | _string_ |
| FilterData5 | _string_ |
| FilterData6 | _string_ |
| FilterData7 | _string_ |
| FilterData8 | _string_ |
| FilterData9 | _string_ |
| FilterField | _string_ |
| FilterField1 | _string_ |
| FilterField10 | _string_ |
| FilterField2 | _string_ |
| FilterField3 | _string_ |
| FilterField4 | _string_ |
| FilterField5 | _string_ |
| FilterField6 | _string_ |
| FilterField7 | _string_ |
| FilterField8 | _string_ |
| FilterField9 | _string_ |
| FilterFields | _string_ |
| FilterFields1 | _string_ |
| FilterFields10 | _string_ |
| FilterFields2 | _string_ |
| FilterFields3 | _string_ |
| FilterFields4 | _string_ |
| FilterFields5 | _string_ |
| FilterFields6 | _string_ |
| FilterFields7 | _string_ |
| FilterFields8 | _string_ |
| FilterFields9 | _string_ |
| FilterLookupId | _string_ |
| FilterLookupId1 | _string_ |
| FilterLookupId10 | _string_ |
| FilterLookupId2 | _string_ |
| FilterLookupId3 | _string_ |
| FilterLookupId4 | _string_ |
| FilterLookupId5 | _string_ |
| FilterLookupId6 | _string_ |
| FilterLookupId7 | _string_ |
| FilterLookupId8 | _string_ |
| FilterLookupId9 | _string_ |
| FilterOp | _string_ |
| FilterOp1 | _string_ |
| FilterOp10 | _string_ |
| FilterOp2 | _string_ |
| FilterOp3 | _string_ |
| FilterOp4 | _string_ |
| FilterOp5 | _string_ |
| FilterOp6 | _string_ |
| FilterOp7 | _string_ |
| FilterOp8 | _string_ |
| FilterOp9 | _string_ |
| FilterValue | _string_ |
| FilterValue1 | _string_ |
| FilterValue10 | _string_ |
| FilterValue2 | _string_ |
| FilterValue3 | _string_ |
| FilterValue4 | _string_ |
| FilterValue5 | _string_ |
| FilterValue6 | _string_ |
| FilterValue7 | _string_ |
| FilterValue8 | _string_ |
| FilterValue9 | _string_ |
| FilterValues | _string_ |
| FilterValues1 | _string_ |
| FilterValues10 | _string_ |
| FilterValues2 | _string_ |
| FilterValues3 | _string_ |
| FilterValues4 | _string_ |
| FilterValues5 | _string_ |
| FilterValues6 | _string_ |
| FilterValues7 | _string_ |
| FilterValues8 | _string_ |
| FilterValues9 | _string_ |
| GroupString | _string_ |
| HasOverrideSelectCommand | _string_ |
| ID | _string_ |
| InplaceFullListSearch | _string_ |
| InplaceSearchQuery | _string_ |
| IsCSR | _string_ |
| IsGroupRender | _string_ |
| IsXslView | _string_ |
| ListViewPageUrl | _string_ |
| OverrideScope | _string_ |
| OverrideSelectCommand | _string_ |
| PageFirstRow | _string_ |
| PageLastRow | _string_ |
| RootFolder | _string_ |
| SortDir | _string_ |
| SortDir1 | _string_ |
| SortDir10 | _string_ |
| SortDir2 | _string_ |
| SortDir3 | _string_ |
| SortDir4 | _string_ |
| SortDir5 | _string_ |
| SortDir6 | _string_ |
| SortDir7 | _string_ |
| SortDir8 | _string_ |
| SortDir9 | _string_ |
| SortField | _string_ |
| SortField1 | _string_ |
| SortField10 | _string_ |
| SortField2 | _string_ |
| SortField3 | _string_ |
| SortField4 | _string_ |
| SortField5 | _string_ |
| SortField6 | _string_ |
| SortField7 | _string_ |
| SortField8 | _string_ |
| SortField9 | _string_ |
| SortFields | _string_ |
| SortFieldValues | _string_ |
| View | _string_ |
| ViewCount | _string_ |
| ViewId | _string_ |
| ViewPath | _string_ |
| WebPartId | _string_ |