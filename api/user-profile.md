---
layout: page
---
# REST API

## User Profile
[Documentation](https://msdn.microsoft.com/en-us/library/office/dn790354.aspx)

### Code Example

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.UserProfile().execute(function(myProfile) {
    // Code goes here
});

// TypeScript
import { UserProfile } from "gd-sprest";
UserProfile().execute(myProfile => {
    // Code goes here
});
```

### Properties

| Name | Type | Description |
| --- | --- | --- |
| AccountName | string | The account name of the user. (SharePoint Online only) |
| DisplayName | string | The display name of the user. (SharePoint Online only) |
| FollowPersonalSiteUrl | string |
| IsPeopleListPublic | boolean |
| IsPrivacySettingOn | boolean |
| IsSelf | boolean |
| JobTitle | string |
| MySiteFirstRunExperience | number |
| MySiteHostUrl | string |
| O15FirstRunExperience | number | The FirstRun flag of the user. (SharePoint Online only) |
| PersonalSiteCapabilities | number | The capabilities of the user's personal site. |
| PersonalSiteFirstCreationError | string | The error thrown when the user's personal site was first created, if any. (SharePoint Online only) |
| PersonalSiteFirstCreationTime | string |The date and time when the user's personal site was first created. (SharePoint Online only) |
| PersonalSiteInstantiationState | number | The status for the state of the personal site instantiation. See PersonalSiteInstantiationState in the .NET client object model reference for a list of instantiation state values. |
| PersonalSiteLastCreationTime | string | The date and time when the user's personal site was last created. (SharePoint Online only) |
| PersonalSiteNumberOfRetries | number | The number of attempts made to create the user's personal site. (SharePoint Online only) |
| PictureImportEnabled | boolean | A Boolean value that indicates whether the user's picture is imported from Exchange. |
| PictureUrl | string |
| PublicUrl | string | The public URL of the personal site of the current user. (SharePoint Online only) |
| UrlToCreatePersonalSite | string | The URL used to create the user's personal site. |

### Methods

| Name | Description |
| --- | --- |
| PersonalSite() | The personal site of the user. |
| FollowedContent() | An object containing the user's FollowedDocumentsUrl and FollowedSitesUrl. |