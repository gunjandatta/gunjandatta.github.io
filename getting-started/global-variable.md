---
layout: default
---
## Global Variable
The gd-sprest library will add a $REST global varible to the DOM. The $REST variable constains the following:

### Properties
- __ver - The version number of the library.
- [ContextInfo](/topics/context-info) - A reference to the _spPageContextInfo global variable.
- DefaultRequestToHostFl - Flag to target the app-web or host web for requests. _(false by default)_

### Libraries
- Helper - Helper classes for developing against SharePoint.
    - App - Helper class for creating a SharePoint Add-In.
    - Dependencies - Helper class for loading the default SharePoint core libraries.
    - FieldSchemaXML - Helper class for generating a field schema xml.
    - JSLink - Helper class for creating a custom JSLink solution.
    - ListForm - Helper class for getting list form information.
    - ListFormField - Helper class for getting the list form field information.
    - Loader - Helper class for waiting until the core SharePoint core libraries are loaded.
    - parse - Static method for converting the JSON string to object.
    - RibbonLink - Helper class for creating links in the top ribbon bar.
    - SP - SharePoint core library references.
    - SPConfig - Helper class for creating SharePoint assets.
    - SuiteBarLink - Helper class for creating links in the suite bar.
    - Taxonomy - Helper class for getting information from the taxonomy term store.
    - WebPart - Helper class for creating modern webparts in SharePoint 2013/Online (Classic) solutions.
- List - Library for developing against the _/\_api/web/lists/getByTitle('[List Name]')_ api endpoint.
- Navigation - Library for developing against the _/\_api/navigation_ api endpoint.
- PeopleManager - Library for developing against the _/\_api/SP.UserProfiles.PeopleManage_ api endpoint.
- PeoplePicker - Library for developing against the _/\_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface_ api endpoint.
- ProfileLoader - Library for developing against the _/\_api/SP.UserProfiles.ProfileLoader.GetProfileLoader_ api endpoint.
- Search - Library for developing against the _/\_api/search_ api endpoint.
- Site - Library for developing against the _/\_api/site_ api endpoint.
- SocialFeed - Library for developing against the _/\_api/social.feed_ api endpoint.
- SPTypes - The SharePoint enumerators.
- UserProfile - Library for developing against the _/\_api/SP.UserProfiles.ProfileLoader.getProfileLoader/getUserProfile_ api endpoint.
- Utility - Library for developing against the _/\_api/SP.Utilities.Utility_ api endpoint.
- Web - Library for developing against the _/\_api/web_ api endpoint.

#### Version Control
The __ver number is used to ensure the latest library is loaded as the global variable.