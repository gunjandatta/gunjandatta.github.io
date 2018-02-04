---
layout: default
---
## Global Variable
The gd-sprest library will add a $REST global varible to the DOM. The $REST variable constains the following:

- __ver - The version number of the library.
- ContextInfo - The _spPageContextInfo variable reference.
- DefaultRequestToHostFl _(False by default)_ - Flag to target the current or host web for requests.
_Note - This is for the app web._
- Email - Reference to the _/\_api/SP.Utilities.Utility.SendEmail_ api.
- Helper - Helper classes.
- JSLink - Used for JSLink development.
- List - Shortcut to reference the _/\_api/web/lists/getByTitle('[List Name]')_ api.
- PeopleManager - Reference to the _/\_api/SP.UserProfiles.PeopleManage_ api.
- PeoplePicker - Reference to the _/\_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface_ api.
- ProfileLoader - Reference to the _/\_api/SP.UserProfiles.ProfileLoader.GetProfileLoader_ api.
- Search - Reference to the _/\_api/search_ api.
- Site - Reference to the _/\_api/site_ api.
- SocialFeed - Reference to the _/\_api/social.feed_ api.
- UserProfile - Shortcut to reference the _/\_api/SP.UserProfiles.ProfileLoader.getProfileLoader/getUserProfile_ api.
- Web - Reference to the _/\_api/web_ api.

#### Version Control
The __ver number is used to ensure the latest library is loaded into the browser console.