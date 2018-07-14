---
layout: default
---
<div class="page-info" markdown="1">

[Back](/)
## Global Variable

</div>

The gd-sprest library will add a **$REST** global variable to the DOM. The **$REST** variable contains the following properties and helper libraries, shown below.

<!-- Tabs -->
<div class="tabs">
<!-- Tab Items -->
<div class="tab-items">
    <div class="tab-item">Properties</div>
    <div class="tab-item">Libraries</div>
    <div class="tab-item">Versioning</div>
</div>

<!-- Tab Content -->

<!-- Properties -->
<div class="tab-content" markdown="1">

| Name | Type | Description |
| --- | --- | --- |
| __ver | _number_ | The version number of the library. |
| [ContextInfo](/topics/context-info) | _IContextInfo_ | A reference to the _spPageContextInfo global variable. |
| [DefaultRequestToHostFl](/helpers/add-in-model) | _boolean_ | Flag to target the app-web or host web for requests. _(false by default)_ |

</div>
<!-- Libraries -->
<div class="tab-content" markdown="1">

| Class Name | Description |
| --- | --- |
| Helper | Helper classes for developing against SharePoint. |
| Helper.App | Helper class for creating a SharePoint Add-In. |
| Helper.Dependencies | Helper class for loading the default SharePoint core libraries. |
| Helper.FieldSchemaXML | Helper class for generating a field schema xml. |
| Helper.JSLink | Helper class for creating a custom JSLink solution. |
| Helper.ListForm | Helper class for getting list form information. |
| Helper.ListFormField | Helper class for getting the list form field information. |
| Helper.Loader | Helper class for waiting until the core SharePoint core libraries are loaded. |
| Helper.parse | Static method for converting the JSON string to object. |
| Helper.RibbonLink | Helper class for creating links in the top ribbon bar. |
| Helper.SP | SharePoint core library references. |
| Helper.SPConfig | Helper class for creating SharePoint assets. |
| Helper.SuiteBarLink | Helper class for creating links in the suite bar. |
| Helper.Taxonomy | Helper class for getting information from the taxonomy term store. |
| Helper.WebPart | Helper class for creating modern webparts in SharePoint 2013/Online (Classic) solutions. |
| List | Library for developing against the _/\_api/web/lists/getByTitle('[List Name]')_ api endpoint. |
| Navigation | Library for developing against the _/\_api/navigation_ api endpoint. |
| PeopleManager | Library for developing against the _/\_api/SP.UserProfiles.PeopleManage_ api endpoint. |
| PeoplePicker | Library for developing against the _/\_api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface_ api endpoint. |
| ProfileLoader | Library for developing against the _/\_api/SP.UserProfiles.ProfileLoader.GetProfileLoader_ api endpoint. |
| Search | Library for developing against the _/\_api/search_ api endpoint. |
| Site | Library for developing against the _/\_api/site_ api endpoint. |
| SocialFeed | Library for developing against the _/\_api/social.feed_ api endpoint. |
| SPTypes | The SharePoint enumerators. |
| UserProfile | Library for developing against the _/\_api/SP.UserProfiles.ProfileLoader.getProfileLoader/getUserProfile_ api endpoint. |
| Utility | Library for developing against the _/\_api/SP.Utilities.Utility_ api endpoint. |
| Web | Library for developing against the _/\_api/web_ api endpoint. |

</div>
<!-- Version Control -->
<div class="tab-content" markdown="1">

The __ver number is used to ensure the latest library is loaded as the global variable.

</div>
</div>