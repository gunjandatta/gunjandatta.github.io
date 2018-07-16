---
layout: default
---
<div class="page-info" markdown="1">

[Back](/api)
## [People Picker](http://dattabase.com/sharepoint-people-picker-rest-api/)

</div>

### Code Reference
```ts
// JavaScript
var $REST = require("gd-sprest");
// Search for users
$REST.PeoplePicker().clientPeoplePickerSearchUser({
    MaximumEntitySuggestions: 10,
    PrincipalSource: 15,
    PrincipalType: 15,
    QueryString: "gunjan"
}).execute(function(results) {
    // Code goes here
});

// TypeScript
import { PeoplePicker } from "gd-sprest";
PeoplePicker().clientPeoplePickerSearchUser({
    MaximumEntitySuggestions: 10,
    PrincipalSource: 15,
    PrincipalType: 15,
    QueryString: "gunjan"
}).execute(results => {
    // Code goes here
});
```
### Methods

| Method | Description |
| --- | --- |
| clientPeoplePickerResolveUser(_query: IPeoplePickerQuery_) | Resolves a user. |
| clientPeoplePickerSearchUser(_query: IPeoplePickerQuery_) | Searches for user(s) and group(s). |

### Interfaces

#### People Picker Query

| Name | Type | Description |
| --- | --- | --- |
AllowEmailAddresses | _boolean_ | True to allow the email address. |
AllowMultipleEntities | _boolean_ | True to allow multiple entities. |
AllUrlZones | _boolean_ | True to allow all url zones. |
EnabledClaimProviders | _boolean_ | True to enable claim providers. |
ForceClaims | _boolean_ | True to force claims. |
MaximumEntitySuggestions | _number_ | Maximum entity suggestions. |
PrincipalSource | _number_ | The principal source. |
PrincipalType | _number_ | The principal type. |
QueryString | _string_ | The query string. This value must be >= 3 characters. |
Required | _boolean_ | Required flag. |
SharePointGroupID | _number_ | The SharePoint group id. |
UrlZone | _number_ | The url zone. |
UrlZoneSpecified | _boolean_ | Url zone specified flag. |
Web | _any_ | The web. |
WebApplicationID | _any_ | The web application id. |

##### Principal Source

| Name | Value | Description |
| --- | --- | --- |
| All | 15 | Search all principal sources. |
| MembershipProvider | 4 | Search the current membership provider. |
| None | 0 | Search no principal sources. |
| RoleProvider | 8 | Search the current role provider. |
| UserInfoList | 1 | Search the user information list. |
| Windows | 2 | Search active directory. |

##### Principal Type

| Name | Value | Description |
| --- | --- | --- |
| All | 15 | Return all entity types. |
| DistributionList | 2 | Return distribution list entity types. |
| None | 0 | Return no principal types. |
| SecurityGroup | 4 | Return security group entity types. |
| SharePointGroup | 8 | Return sharepoint group entity types. |
| User | 1 | Return user entity types. |

##### Url Zone

| Name | Value | Description |
| --- | --- | --- |
| Custom | 3 | Search the custom zone. |
| Default | 0 | Search the default zone. |
| Extranet | 4 | Search the extranet zone. |
| Internet | 2 | Search the internet zone. |
| Intranet | 1 | Search the intranet zone. |