---
layout: default
---
[Back](/api)
## [List](https://msdn.microsoft.com/en-us/library/office/dn531433.aspx)
### Code Reference
```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.List()

// TypeScript
import { List } from "gd-sprest";
new List()
```
#### [Code Examples](/examples/list)
### Properties

| Property | Type | Description |
| --- | --- | --- |
| AllowContentTypes | _boolean_ | Gets a value that specifies whether the list supports content types. |
| AllowDeletion | _boolean_ |
| BaseTemplate | _ListTemplateType_ | Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values. |
| BaseType | _number_ | Gets the base type for the list. _(Generic List - 0, Document Library - 1, Discussion Board - 3, Survey - 4, Issue - 5)_ |
| BrowserFileHandling | _number_ | Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level. _(Permissive - 0, Strict - 1)_ |
| ContentTypesEnabled | _boolean_ | Gets or sets a value that specifies whether content types are enabled for the list. |
| Created | _string_ | Gets a value that specifies when the list was created. |
| CurrentChangeToken | _Types.IStringValue_ |
| DefaultContentApprovalWorkflowId | _string_ | Gets a value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow. |
| Description | _string_ | Gets or sets a value that specifies the description of the list. |
| Direction | _string_ | Gets or sets a value that specifies the reading order of the list. _(Return Values - 'None', 'LTR', 'RTL')_
| DocumentTemplateUrl | _string_ | Gets or sets a value that specifies the server-relative URL of the document template for the list. Returns a server-relative URL if the base type is DocumentLibrary, otherwise returns null. |
| DraftVersionVisibility | _number_ | Gets or sets a value that specifies the minimum permission required to view minor versions and drafts within the list. (Reader - 0, Author - 1, Approver - 2) |
| EnableAssignToEmail | _boolean_ |
| EnableAttachments | _boolean_ | Gets or sets a value that specifies whether list item attachments are enabled for the list. |
| EnableFolderCreation | _boolean_ | Gets or sets a value that specifies whether new list folders can be added to the list. |
| EnableMinorVersions | _boolean_ | Gets or sets a value that specifies whether minor versions are enabled for the list. |
| EnableModeration | _boolean_ | Gets or sets a value that specifies whether content approval is enabled for the list. |
| EnableVersioning | _boolean_ | Gets or sets a value that specifies whether historical versions of list items and documents can be created in the list. |
| EntityTypeName | _string_ |
| ExcludeFromOfflineClient | _boolean_ |
| FileSavePostProcessingEnabled | _boolean_ |
| ForceCheckout | _boolean_ | Gets or sets a value that indicates whether forced checkout is enabled for the document library. |
| HasExternalDataSource | _boolean_ | Gets a value that specifies whether the list is an external list. |
| Hidden | _boolean_ | Gets or sets a Boolean value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false. |
| Id | _string_ | Gets the GUID that identifies the list in the database. |
| ImageUrl | _string_ | Gets a value that specifies the URI for the icon of the list. |
| IrmEnabled | _boolean_ |
| IrmExpire | _boolean_ |
| IrmReject | _boolean_ |
| IsApplicationList | _boolean_ | Gets or sets a value that specifies a flag that a client application can use to determine whether to display the list. |
| IsCatalog | _boolean_ | Gets a value that specifies whether the list is a gallery. |
| IsPrivate | _boolean_ |
| ItemCount | _number_ | Gets a value that specifies the number of list items in the list. |
| LastItemDeletedDate | _string_ | Gets a value that specifies the last time a list item was deleted from the list. |
| LastItemModifiedDate | _string_ | Gets a value that specifies the last time a list item, field, or property of the list was modified. |
| ListExperienceOptions | _number_ |
| ListItemEntityTypeFullName | _string_ |
| MajorVersionLimit | _number_ |
| MajorWithMinorVersionsLimit | _number_ |
| MultipleDataList | _boolean_ | Gets or sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site. |
| NoCrawl | _boolean_ | Gets or sets a value that specifies that the crawler must not crawl the list. |
| ParentWebUrl | _string_ | Gets a value that specifies the server-relative URL of the site that contains the list. |
| ParserDisabled | _boolean_ |
| ReadSecurity | _number_ |
| ServerTemplateCanCreateFolders | _boolean_ | Gets a value that indicates whether folders can be created within the list. |
| TemplateFeatureId | _string_ | Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. Returns an empty GUID if the list schema is not contained within a feature. |
| Title | _string_ | Gets or sets the displayed title for the list. (_Length must be <= 255 characters_) |

### Queryable Properties

| Method | Type | Description |
| --- | --- | --- |
| ContentTypes() | _ContentTypes_ | Gets the content types that are associated with the list. |
| ContentTypes(id: string) | _ContentType_ | Gets the content types that are associated with the list. |
| DataSource() | _Array&lt;string&gt;_ | Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false. |
| DefaultDisplayFormUrl() | _string_ | Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL. |
| DefaultEditFormUrl() | _string_ | Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL. |
| DefaultNewFormUrl() | _string_ | Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL. |
| DefaultView() | _View_ | Gets the default list view. |
| DefaultViewUrl() | _string_ | Gets the URL of the default view for the list. |
| DescriptionResouce() | _ResourcePath_ |
| EffectiveBasePermissions() | _BasePermissions_ | Gets a value that specifies the effective permissions on the list that are assigned to the current user. |
| EffectiveBasePermissionsForUI() | _BasePermissions_ | Gets a value that specifies the effective permissions on the list that are for the user export interface. |
| EventReceivers() | _EventReceivers_ | Gets the event receivers associated with the list. |
| EventReceivers(id: string) | EventReceiver_ | Gets the event receiver associated with the list. |
| Fields() | _Fields_ | Gets the fields in the list. |
| Fields(internalNameOrTitle: string) | Field_ | Gets the field in the list. |
| FirstUniqueAncestorSecurableObject() | _string_ | Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned. |
| Forms() | | Gets the list forms in the list. |
| Forms(id: string) | | Gets the list form in the list. |
| HasUniqueRoleAssignments() | | Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object. |
| InformationRightsManagementSettings() | | Gets a value that specifies the information rights management settings. |
| IsSiteAssetsLibrary() | _boolean_ | Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages. |
| Items() | _ListItems_ | Gets the list items in the list. |
| Items(id: number) | ListItem_ | Gets the list item in the list. |
| OnQuickLaunch() | _boolean_ | Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false. |
| ParentWeb() | _Web_ | Gets a value that specifies the site that contains the list. |
| RoleAssignments() | _RoleAssignments_ | Gets the role assignments for the securable object. |
| RoleAssignments(id \| string)_ | | Gets the role assignments for the securable object. |
| RootFolder() | _Folder_ | Gets the root folder of the list. |
| RootFolder(url: string) | File_ | Gets the file in the root folder of the list. |
| SchemaXml() | _string_ | Gets a value that specifies the list schema of the list. |
| Subscriptions() |
| TitleResource() | _ResourcePath |
| UserCustomActions() | _UserCustomActions_ | Gets the user custom actions for the list. |
| UserCustomActions(id: string) | _UserCustomAction_ | Gets the user custom action(s) for the list. |
| ValidationFormula() | _string_ | Gets or sets a value that specifies the data validation criteria for a list item. (_Length must be <= 1023_) |
| ValidationMessage() | _string_ | Gets or sets a value that specifies the error message returned when data validation fails for a list item. (_Length must be <= 1023_) |
| Views() | _Views_ | Gets the list views. |
| Views(id: string) | _View_ | Gets the view in the list. |
| WorkflowAssociations() | _string_ | Gets a value that specifies the collection of all workflow associations for the list. |
| WriteSecurity() | _number_ |

### Methods

| Method | Description |
| --- | --- |
| breakRoleInheritance(copyRoleAssignments, clearSubScopes) | Creates unique role assignments for the securable object. |
| delete() | Deletes the list. |
| getByEntityName(entityTypeName, callback) | A static method to get the list by the entity name. |
| getChanges(query) | Returns the collection of changes from the change log that have occurred within the list, based on the specified query. |
| getItemById(id) | Returns the list item with the specified list item identifier. |
| getItems(viewXml) | Returns a collection of items from the list based on the view xml. |
| getItemsByQuery(camlQuery) | Returns a collection of items from the list based on the specified query. |
| getListItemChangesSinceToken(query) | Returns a collection of items from the list based on the specified query. |
| getRelatedFields() | Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true. |
| getUserEffectivePermissions(loginName) | Gets the effective user permissions for the current user. |
| getViewById(viewId) | Returns the list view with the specified view identifier. |
| recycle() | Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item. |
| renderListData(viewXml) | Renders the list data. |
| renderListFormData(itemId, formId, controlMode) | Renders the list form data. (1 - Display, 2 - Edit, 3 - New, 4 - View)_ |
| reserveListItemId() | Reserves a list item ID for idempotent list item creation. |
| resetRoleInheritance() | Resets the role inheritance for the securable object and inherits role assignments from the parent securable object. |
| update(props) | Updates the object properties. |

#### List Creation Information

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

#### List Template

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

#### List Template Types

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