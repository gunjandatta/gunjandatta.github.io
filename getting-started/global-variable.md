---
layout: default
---
## Global Variable
The gd-sprest library will add a $REST global varible to the DOM. The $REST variable constains the following:

| Property | Description |
|__ver | The version number of the library |
| ContextInfo | A reference to the _spPageContextInfo global variable. |
| DefaultRequestToHostFl | Flag to target the app-web or host web for requests. _(false by default)_ |
| Email | Library for developing against the _/\_api/SP.Utilities.Utility.SendEmail_ api endpoint. |
| Helper | Helper classes for developing against SharePoint. |
| JSLink | Helper class for JSLink development. |
| List | Library for developing against the _/\_api/web/lists/getByTitle('[List Name]')_ api endpoint. |
| PeopleManager | Library for developing against the _/\_api/SP.UserProfiles.PeopleManage_ api endpoint. |
| PeoplePicker | Library for developing against the _/\_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface_ api endpoint. |
| ProfileLoader | Library for developing against the _/\_api/SP.UserProfiles.ProfileLoader.GetProfileLoader_ api endpoint. |
| Search | Library for developing against the _/\_api/search_ api endpoint. |
| Site | Library for developing against the _/\_api/site_ api endpoint. |
| SocialFeed | Library for developing against the _/\_api/social.feed_ api endpoint. |
| UserProfile | Library for developing against the _/\_api/SP.UserProfiles.ProfileLoader.getProfileLoader/getUserProfile_ api endpoint. |
| Web | Library for developing against the _/\_api/web_ api endpoint. |

#### Version Control
The __ver number is used to ensure the latest library is loaded into the browser console.