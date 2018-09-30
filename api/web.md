---
layout: default
---

## Web

### Code Reference
```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.Web()

// TypeScript
import { Web } from "gd-sprest";
Web()
```

#### [Code Examples](/examples/web)

### Properties

| Name | Type | Description |
| --- | --- | --- |
| AllowRssFeeds | _boolean_ | Gets a value that specifies whether the site allows RSS feeds. |
| AppInstanceId | _string_ | The instance Id of the App Instance that this web represents. |
| Configuration | _number_ | Gets either the identifier (ID) of the site definition configuration that was used to create the site, or the ID of the site definition configuration from which the site template used to create the site was derived. |
| Created | _string_ | Gets a value that specifies when the site was created. |
| CustomMasterUrl | _string_ | Gets or sets the URL for a custom master page file to apply to the website. |
| Description | _string_ | Gets or sets the description for the site. |
| DocumentLibraryCalloutOfficeWebAppPreviewersDisabled | _boolean_ | Determines if the Document Library Callout's WAC previewers are enabled or not. |
| EnableMinimalDownload | _boolean_ | Gets or sets a Boolean value that specifies whether the Web site should use Minimal Download Strategy. |
| ExcludeFromOfflineClient | _boolean_ |
| Id | _string_ | Gets a value that specifies the site identifier for the site. |
| Language | _boolean_ | Gets a value that specifies the LCID for the language that is used on the site. |
| LastItemModifiedDate | _string_ | Gets a value that specifies when an item was last modified in the site. |
| MasterUrl | _string_ | Gets or sets the URL of the master page that is used for the website. |
| MembersCanShare | _boolean_ |
| NoCrawl | _boolean_ |
| NotificationsInOneDriveForBusinessEnabled | _boolean_ |
| NotificationsInSharePointEnabled | _boolean_ |
| OverwriteTranslationsOnChange | _boolean_ |
| PreviewFeaturesEnabled | _boolean_ |
| QuickLaunchEnabled | _boolean_ | Gets or sets a value that specifies whether the Quick Launch area is enabled on the site. |
| RecycleBinEnabled | _boolean_ | Gets or sets a value that determines whether the recycle bin is enabled for the website. |
| RequestAccessEmail | _string_ |
| SaveSiteAsTemplateEnabled | _boolean_ | Gets or sets a Boolean value that specifies whether the Web site can be saved as a site template. |
| ServerRelativePath | _ResourcePath_ |
| ServerRelativeUrl | _string_ | Gets or sets the server-relative URL for the Web site. |
| SiteLogoDescription | _string_ |
| SiteLogoUrl | _string_ |
| SyndicationEnabled | _boolean_ | Gets or sets a value that specifies whether the RSS feeds are enabled on the site. |
| TenantTagPolicyEnabled | _boolean_ |
| ThemeData | _string_ |
| ThemedCssFolderUrl | _string |
| ThirdPartyMdmEnabled | _boolean |
| Title | _string_ | Gets or sets the title for the Web site. |
| TreeViewEnabled | _boolean_ | Gets or sets value that specifies whether the tree view is enabled on the site. |
| UIVersion | _number_ | Gets or sets the user export interface (UI) version of the Web site. |
| UIVersionConfigurationEnabled | _boolean_ | Gets or sets a value that specifies whether the settings UI for visual upgrade is shown or hidden. |
| Url | _string_ | Gets the absolute URL for the website. |
| WebTemplate | _string_ | Gets the name of the site definition or site template that was used to create the site. |

### Queryable Properties

| Method | Return Type | Description |
| --- | --- | --- |
| AllowCreateDeclarativeWorkflowForCurrentUser() | _boolean_ | Specifies whether the current user can create declarative workflows. If not disabled on the Web | application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. (_Default: true_) |
| AllowDesignerForCurrentUser() | _boolean_ | Gets a value that specifies whether the current user is allowed to use a designer application to customize this site. |
| AllowMasterPageEditingForCurrentUser() | _boolean_ | Gets a value that specifies whether the current user is allowed to edit the master page. |
| AllProperties() | _PropertyValues_ | Property Bag |
| AllowRevertFromTemplateForCurrentUser() | _boolean_ | Gets a value that specifies whether the current user is allowed to revert the site to a default site template. |
| AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser() | _boolean_ | Specifies whether the current user can save declarative workflows as a template. If not disabled | on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. (_Default value: true_) |
| AllowSavePublishDeclarativeWorkflowForCurrentUser() | _boolean_ | Specifies whether the current user can save or publish declarative workflows. If not disabled on | the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by | a site collection administrator. (_Default value: true_) |
| AllProperties() | | Gets a collection of metadata for the Web site. |
| AppTiles() | _AppTiles_ |
| AssociatedMemberGroup() | _Group_ | Gets or sets the group of users who have been given contribute permissions to the Web site. |
| AssociatedOwnerGroup() | _Group_ | Gets or sets the associated owner group of the Web site. |
| AssociatedVisitorGroup() | _Group_ | Gets or sets the associated visitor group of the Web site. |
| Author() | _User_ |
| AvailableContentTypes() | _ContentTypes_ | Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well | as any parent Web sites. |
| AvailableFields() | _Fields_ | Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites. |
| ClientWebParts() |
| ContentTypes() | _ContentTypes_ | Gets the content types that are associated with the web. |
| ContentTypes(id: string) | _ContentType_ | Gets the content type that are associated with the web. |
| CurrentUser() | _User_ | Gets the current user of the site. |
| DataLeakagePreventionStatusInfo() |
| DescriptionResource() | _ResourcePath_ |
| DesignerDownloadUrlForCurrentUser()**_ | Gets the URL where the current user can download SharePoint Designer. |
| EffectiveBasePermissions() | _string_ | Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method. |
| EventReceivers() | _EventReceivers_ | Gets the event receivers associated with the web. |
| EventReceivers(id: string) | _EventReceiver_ | Gets the event receiver associated with the web. |
| Features() | Gets a value that specifies the collection of features that are currently activated in the site. |
| Fields() | _Fields_ | Gets the fields in the web. |
| Fields(internalNameOrTitle: string) | _Field_ | Gets the field in the web. |
| Folders() | _Folders_ | Gets the folders contained in the root folder. |
| Folders(url: string) \| _Folder_ | Gets the folder contained in the root folder. |
| Lists() | _Lists_ | Gets the lists in the Web. |
| Lists(name: string) | _List_ | Gets the list in the Web. |
| ListTemplates() | | Gets the list definitions and list templates available for creating lists on the site. |
| ListTemplates(name: string) | Gets the list definition or list template available for creating lists on the site. |
| Navigation() | _Navigation_ | Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar. |
| ParentWeb() | _Web_ | Gets the parent website of the specified website. |
| PushNotificationSubscribers() | | Gets the collection of push notification subscribers over the site. |
| RecycleBin() | | Specifies the collection of recycle bin items of the recycle bin of the site. |
| RegionalSettings() | | Gets the regional settings that are currently implemented on the website. |
| RoleDefinitions() | _RoleDefinitions_ | Gets the role definitions for the web. |
| RoleDefinitions(name: string) | _RoleDefinition_ | Gets the role definitions for the web. |
| RootFolder() | _Folder_ | Gets the root folder in the web. |
| RootFolder(url: string) \| _File_ | Gets the file in the web's root folder. |
| ShowUrlStructureForCurrentUser() | Gets a value that specifies whether the current user is able to view the file system structure of this site. |
| SiteGroups() | _SiteGroups_ | Gets the site groups for the web. |
| SiteGroups(name: string) | _Group_ | Gets the site groups for the web. |
| SiteUserInfoList() | | Gets the UserInfo list of the site collection that contains the Web site. |
| SiteUsers() | _Users_ | Gets the collection of all users that belong to the site collection. |
| SiteUsers(id) | _User_ | Gets the collection of all users that belong to the site collection. |
| SupportedUILanguageIds() | _number_ | Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site. |
| TenantAppCatalog() | _ITenantAppCatalog_ |
| ThemeInfo() | The theming information for this site. This includes information like colors, fonts, border radii sizes etc. |
| TitleResource() | _ResourcePath_ |
| UserCustomActions() | _UserCustomActions_ | Gets the user custom actions for the web. |
| UserCustomActions(id: string) | _UserCustomAction_ | Gets the user custom action for the web. |
| WebInfos() | WebInfos | Represents key properties of the subsites of a site. |
| Webs() | _Webs_ | Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites. |
| WorkflowAssociations() | Gets a value that specifies the collection of all workflow associations for the site. |
| WorkflowTemplates() | Gets a value that specifies the collection of workflow templates associated with the site. |

### Methods

| Name | Description |
| --- | --- |
| applyTheme(colorpaletteurl, fontschemeurl, backgroundimageurl, sharegenerated) | Applies the theme specified by the contents of each of the files specified in the arguments to the site. |
| applyWebTemplate(name) | Applies the specified site definition or site template to the Web site that has no template applied to it.
| breakRoleInheritance(copyRoleAssignments, clearSubScopes) | Creates unique role assignments for the securable object. |
| delete() | Deletes the web. |
| doesPushNotificationSubscriberExist(id) | Checks whether the push notification subscriber exist for the current user with the given device application instance ID. |
| doesUserHavePermissions(high, low) | Returns whether the current user has the given set of permissions. |
| ensureUser(loginName: string) \| _User_ | Checks whether the specified login name belongs to a valid user in the site. If the user doesn't exist, it will add the user to the site. |
| executeRemoteLOB(inputStream) | Sends data to an OData service. |
| getAppBdcCatalog() | The app BDC catalog. |
| getAppBdcCatalogForAppInstance(id) | The app BDC catalog for the specified app instance. |
| getAppInstanceById(id) | Retrieves an AppInstance installed on this Site. |
| getAppInstancesByProductId(id) | Retrieves all AppInstances installed on this site that are instances of the specified App. |
| getAvailableWebTemplates(lcid, doIncludeCrossLanguage) | Returns a collection of site templates available for the site. |
| getCatalog(galleryType) | Returns the list gallery on the site. (Gallery Types: _WebTemplateCatalog - 111, WebPartCatalog - 113, ListTemplateCatalog - 114, MasterPageCatalog - 116, SolutionCatalog - 121, ThemeCatalog - 123, DesignCatalog - 124, AppDataCatalog - 125_) |
| getChanges(query) | Returns the collection of all changes from the change log that have occurred within the scope of the site, based on the specified query. |
| getContextWebInformation() | The context information for the site. Static method. |
| getCustomListTemplates() | The custom list templates for the site. |
| getDocumentLibraries(url) | The document libraries on a site. Static method. (SharePoint Online only) |
| getEntity(namespace, name) | The specified external content type in a line-of-business (LOB) system application. |
| getFileByServerRelativeUrl(url) | _File_ | Returns the file object located at the specified server-relative URL. |
| getFolderByServerRelativeUrl(url) | _Folder_ | Returns the folder object located at the specified server-relative URL. |
| getList(url) | _List_ | The list at the specified site-relative URL. (SharePoint Online only) |
| getPushNotificationSubscriber(id) | The push notification subscriber over the site for the specified device application instance ID. |
| getPushNotificationSubscribersByArgs(args) | Queries for the push notification subscribers over the site for the specified value of custom arguments. Null or empty custom arguments will return subscribers without any filtering. |
| getPushNotificationSubscribersByUser(loginName) | Queries for the push notification subscribers over the site for the specified user. |
| getSubwebsFilteredForCurrentUser(nWebTemplateFilter, nConfigurationFilter) | _WebInfo_ | Returns the collection of child sites of the current site based on the specified query. (SharePoint Online only) |
| getUserById(id) | _User_ | Returns the user corresponding to the specified member identifier for the current site. |
| getUserEffectivePermissions(loginName) | The effective permissions that the specified user has within the current application scope. |
| getWebUrlFromPageUrl(url) | The site URL from a page URL. Static method. |
| loadAndInstallApp(appPackageStream) | Uploads and installs an app package to this site. |
| loadAndInstallAppInSpecifiedLocale(appPackageStream, installationLocaleLCID) | Uploads and installs an App package on the site in a specified locale. |
| loadApp(appPackageStream, installationLocaleLCID) | Uploads an App package and creates an instance from it. |
| mapToIcon(filename, progid, size) | Returns the name of the image file for the icon that is used to represent the specified file. |
| processExternalNotification(stream) | Processes a notification from an external system. |
| registerPushNotificationSubscriber(deviceAppInstanceId, serviceToken) | Registers the subscriber for push notifications over the site. If the registration already | exists, the service token is updated with the new value. |
| resetRoleInheritance() | Resets the role inheritance for the securable object and inherits role assignments from the parent securable object. |
| unregisterPushNotificationSubscriber(id) | Unregisters the subscriber for push notifications from the site. |
| update(data) | Updates it's properties. |

### Web Creation Information

| Name | Type | Description |
| --- | --- | --- |
| Description | _string_ | The description of the new site. |
| Language | _number_ | The locale ID that specifies the language of the new site. |
| Title | _string_ | A value that specifies the title of the new site. |
| Url | _string_ | The URL leaf name of the new site. The URL must not contain the following: (_Characters: ~, ", #, %, &, *, :, <, >, ?, \, {, |, or }, String: \x7f, Consecutive Characters: . or / characters, Starting Characters: ., /, or \_ characters, Ending Characters: . or / characters)_ |
| UseSamePermissionsAsParentSite | _boolean_ | A value that specifies whether the new site will inherit permissions from its parent site. |
| WebTemplate | _string_ | A value that specifies the name of the site template to be used for creating the new site. (_Use the GetAvailableWebTemplates method to get the names of available web templates on the site._) |

#### Web Information

| Name | Type |
| --- | --- |
| Configuration | _number_ |
| Created | _string_ |
| Description | _string_ |
| Id | _string_ |
| Language | _number_ |
| LastItemModifiedDate | _string_ |
| LastItemUserModifiedDate | _string_ |
| ServerRelativeUrl | _string_ |
| Title | _string_ |
| WebTemplate | _string_ |
| WebTemplateId | _number_ |