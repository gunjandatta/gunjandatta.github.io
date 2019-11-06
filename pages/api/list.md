---
layout: archive
title: "List"
category: api
permalink: /api/list
---
## List
[Documentation](https://msdn.microsoft.com/en-us/library/office/dn531433.aspx)

### [Code Example](/examples/list)

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.List("[List Name]").execute(function(list) {
  // Code goes here
});

// TypeScript
import { List } from "gd-sprest";
List("[List Name]").execute(list => {
  // Code goes here
});
```

### List Creation Info

| Name | Type | Description |
| --- | --- | --- |
| BaseTemplate | _Types.SPTypes.ListTemplateType_ | The list template type. |
| CustomSchemaXml | _string_ | The list schema xml. |
| DataSourceProperties | _Array&lt;string&gt;_ | The list of data source properties. |
| Description | _string_ | The list description. |
| DocumentTemplateType | _number_ | The list document template type. |
| QuickLaunchOption | _number_ | Option to display the list on the quick launch. |
| TemplateFeatureId | _string_ | The list template feature id. |
| Title | _string_ | The list name. |

### List Template

| Name | Type |
| --- | --- |
| AllowsFolderCreation | _boolean_ |
| Description | _string_ |
| FeatureId | _string_ |
| Hidden | _boolean_ |
| ImageUrl | _string_ |
| InternalName | _string_ |
| IsCustomTemplate | _boolean_ |
| ListTemplateTypeKind | _number_ |
| Name | _string_ |
| OnQuickLaunch | _boolean_ |
| Unique | _boolean_ |

### List Template Types

| Name | Value |
| --- | --- |
| AccessRequest | _160_ |
| AdminTasks | _1200_ |
| Agenda | _201_ |
| AppDataCatalog | _125_ |
| Announcements | _104_ |
| CallTrack | _404_ |
| Categories | _303_ |
| Circulation | _405_ |
| Comments | _302_ |
| Contacts | _105_ |
| CustomGrid | _120_ |
| DataConnectionLibrary | _130_ |
| DataSources | _110_ |
| Decision | _204_ |
| DesignCatalog | _124_ |
| DeveloperSiteDraftApps | _1230_ |
| DiscussionBoard | _108_ |
| DocumentLibrary | _101_ |
| Events | _106_ |
| ExternalList | _600_ |
| Facility | _402_ |
| GanttTasks | _150_ |
| GenericList | _100_ |
| HealthReports | _1221_ |
| HealthRules | _1220_ |
| HelpLibrary | _151_ |
| Holidays | _421_ |
| HomePageLibrary | _212_ |
| IMEDic | _499_ |
| IssueTracking | _1100_ |
| Links | _103_ |
| ListTemplateCatalog | _114_ |
| MasterPageCatalog | _116_ |
| MaintenanceLogs | _175_ |
| MeetingObjective | _207_ |
| Meetings | _200_ |
| MeetingUser | _202_ |
| MySiteDocumentLibrary | _700_ |
| Posts | _301_ |
| NoCodePublic | _122_ |
| NoCodeWorkflows | _117_ |
| PictureLibrary | _109_ |
| SolutionCatalog | _121_ |
| Survey | _102_ |
| Tasks | _107_ |
| TasksWithTimelineAndHierarchy | _171_ |
| TextBox | _210_ |
| ThemeCatalog | _123_ |
| ThingsToBring | _211_ |
| Timecard | _420_ |
| UserInformation | _112_ |
| WebPageLibrary | _119_ |
| WebPartCatalog | _113_ |
| WebTemplateCatalog | _111_ |
| Whereabouts | _403_ |
| WorkflowHistory | _140_ |
| WorkflowProcess | _118_ |
| XMLForm | _115_ |