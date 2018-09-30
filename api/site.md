---
layout: default
---

## Site

### Code Reference

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.Site()

// TypeScript
import { Site } from "gd-sprest";
Site()
```

#### [Code Examples](/examples/site)

#### [Get Site URL by ID](site-getUrlById)

#### [Site Exists REST API](site-exists)

### Properties

| Name | Type | Description |
| --- | --- | --- |
| AllowCreationDeclarativeWorkflow | _boolean_ | A value that specifies whether creation of declarative workflows can be used on this site collection. |
| AllowDesigner | _boolean_ | Gets or sets a value that specifies whether a designer can be used on this site collection. |
| AllowMasterPageEditing | _boolean_ | Gets or sets a value that specifies whether master page editing is allowed on this site collection. |
| AllowRevertFromTemplate | _boolean_ | Gets or sets a value that specifies whether this site collection can be reverted to its base template. |
| AllowSaveDeclarativeWorkflowAsTemplate | _boolean_ |
| AllowSavePublishDeclarativeWorkflow | _boolean_ |
| AllowSelfServiceUpgrade | _boolean_ | Whether version to version upgrade is allowed on this site. |
| AllowSelfServiceUpgradeEvaluation | _boolean_ | Whether upgrade evaluation site collection is allowed. |
| AuditLogTrimmingRetention | _number_ |
| CanUpgrade | _boolean_ | Property indicating whether or not this object can be upgraded. |
| Classification | _string_ |
| CompatibilityLevel | _string_ | Gets the major version of this site collection for purposes of major version-level compatibility checks. |
| CurrentChangeToken | _string_ |
| DisableAppViews | _boolean_ |
| DisableCompanyWideSharingLinks | _boolean_ |
| DisableFlows | _boolean_ |
| ExternalSharingTipsEnabled | _boolean_ |
| GroupId | _string_ |
| Id | _string_ | Gets the GUID that identifies the site collection. |
| LockIssue | _string_ | Gets or sets the comment that is used in locking a site collection. |
| MaxItemsPerThrottledOperation | _number_ | Gets a value that specifies the maximum number of list items allowed per operation before throttling will occur. |
| NeedsB2BUpgrade | _boolean_ |
| PrimaryUri | _string_ | Specifies the primary URI of this site collection, including the host name, port number, and path. |
| ReadOnly | _boolean_ | Gets or sets a Boolean value that specifies whether the site collection is read-only, locked, and unavailable for write access. |
| RequiredDesignerVersion | _string_ |
| SandboxedCodeActivationCapability | _number_ |
| ServerRelativePath | _Types.IResourcePath_ |
| ServerRelativeUrl | _string_ | Gets the server-relative URL of the root Web site in the site collection. |
| ShareByEmailEnabled | _boolean_ |
| ShowPeoplePickerSuggestionsForGuestUsers | _boolean_ |
| ShareByLinkEnabled | _boolean_ | Property that indicates whether users will be able to share links to documents that can be accessed without logging in. |
| ShowUrlStructure | _boolean_ | Gets or sets a value that specifies whether the URL structure of this site collection is viewable. |
| StatusBarLink | _string_ |
| StatusBarText | _string_ |
| TrimAuditLog | _boolean_ |
| UIVersionConfigurationEnabled | _boolean_ | Gets or sets a value that specifies whether the Visual Upgrade UI of this site collection is displayed. |
| UpgradeInfo | _UpgradeInfo_ | Specifies the upgrade information of this site collection. |
| UpgradeReminderDate | _string_ | Specifies a date, after which site collection administrators will be reminded to upgrade the site collection. |
| UpgradeScheduled | _boolean_ |
| UpgradeScheduledDate | _string_ |
| Upgrading | _boolean_ | Specifies whether the site is currently upgrading. |
| Url | _string_ | Gets the full URL to the root Web site of the site collection, including host name, port number, and path. |
| Usage | _UsageInfo_ | Gets a value that specifies usage information about the site, including bandwidth, storage, and the number of visits to the site collection. |

### Queryable Properties

| Method | Type | Description |
| --- | --- | --- |
| Audit() | _Audit_ |
| EventReceivers() | _EventReceivers_ | Gets the event receivers associated with the site. |
| EventReceivers(id: string) | _EventReceiver_ | Gets the event receiver associated with the site. |
| Features() | _Features_ | Gets a value that specifies the collection of the site collection features for the site collection that contains the site. |
| Owner() | _User_ | Gets or sets the owner of the site collection. (_Read-only in sandboxed solutions_) |
| RecycleBin() | _Results<RecycleBinItem>_ | Gets a value that specifies the collection of recycle bin items for the site collection. |
| RootWeb() | _Web_ | Gets a value that returns the top-level site of the site collection. |
| SecondaryContact()** |
| UserCustomActions() | _UserCustomActions_ | Gets the user custom action for the list. |
| UserCustomActions(id: string) | _UserCustomAction_ | Gets the user custom action(s) for the list. |

### Methods

| Name | Description |
| --- | --- |
| createPreviewSPSite(upgrade, sendEmail) | Creates a temporary evaluation SPSite for this SPSite, for the purposes of determining whether an upgrade is likely to be successful. |
| extendUpgradeReminderDate() | Extend the upgrade reminder date for this SPSite by the days specified at WebApplication.UpgradeReminderDelay. |
| getCatalog(typeCatalog) | Specifies the list template gallery, site template gallery, Web Part gallery, master page gallery, or other galleries from the site collection, including custom galleries that are defined by users. |
| getChanges(query) | Specifies the collection of the site collection changes from the change log that have occurred within the scope of the site collection, based on the specified query. |
| getCustomListTemplates(web) | Specifies the collection of custom list templates for a given site. |
| getWebTemplates(LCID, overrideCompatLevel) | Returns the collection of site definitions that are available for creating Web sites within the site collection. |
| invalidate() | Invalidates cached upgrade information about the site collection so that this information will be recomputed the next time it is needed. |
| needsUpgradeByType(versionUpgrade, recursive) | Returns true if the object needs to be upgraded; otherwise, false. |
| openWeb(strUrl) | Returns the site at the specified URL. |
| openWebById(gWebId) | Returns the site with the specified GUID. |
| runHealthCheck(ruleId, bRepair, bRunAlways) | Runs a health check as follows. _The health rules referenced perform an implementation-dependent check on the health of a site collection._ |
| runUpgradeSiteSession(versionUpgrade, queueOnly, sendEmail) | Either runs a site collection upgrade, or schedules it to be run in the future, depending on available system resources and the value of the queueOnly parameter. _The user executing this method MUST be a farm administrator or a site collection administrator._ |
| update(data) | Updates it's properties. |
| updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs) | Sets whether the client-side object model (CSOM) requests that are made in the context of any site inside the site collection require UseRemoteAPIs permission. |