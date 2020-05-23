---
title: "REST API"
category: api
permalink: /api/
---
The SharePoint Representational State Transfer (REST) API allows developers to perform CRUD (Create, Read, Update & Delete) operations from client-side code. These operations are similar to the SSOM (Server-Side Object Model), which was how developers created solutions in SharePoint 2007 & 2010 environments. The REST API was initially introduced in SharePoint 2013, but has been expanded in SharePoint 2016/2019/Online.

_[2013 Documentation](https://msdn.microsoft.com/en-us/library/office/jj860569.aspx)_

_[Online Documentation](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service)_

## Global Variable

The gd-sprest library will add a **$REST** global variable to the DOM. The **$REST** variable contains the following properties and helper libraries, shown below.

### Version Control

The `$REST.__ver` property will display the version number being used. If multiple versions are loaded, the latest version will automatically take precedence.

## Available Endpoints

The SharePoint REST API can be accessed by ```https://[tenant].sharepoint.com/_api/[endpoint]```. The table below displays a list of the supported REST API endpoints in this library.

| Name | Description | Library Reference |
| --- | --- | --- |
| $REST.App | The __api/apps_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_apps_d_.html) |
| $REST.ContextInfo | The page context information. | [Documentation](/docs/sprest/modules/__types_lib_contextinfo_d_.html) |
| $REST.GroupService | The __api/groupservice_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_groupservice_d_.html) |
| $REST.GroupSiteManager | The __api/groupsitemanager_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_groupsitemanager_d_.html) |
| $REST.HubSites | The __api/hubsites_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_hubsites_d_.html) |
| $REST.HubSitesUtility | The __api/hubsitesutility_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_hubsitesutility_d_.html) |
| $REST.List | Get/Set data related to lists. | [Documentation](/docs/sprest/modules/__types_lib_list_d_.html) |
| $REST.ListDataAsStream | Gets list data which have complex fields. | [Documentation](/docs/sprest/interfaces/__types_lib_list_d_.ilistdatastream.html) |
| $REST.Navigation | Gets information from the navigation nodes. | [Documentation](/docs/sprest/modules/__types_lib_navigation_d_.html) |
| $REST.PeopleManager | The __api/SP.UserProfiles.PeopleManager_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_peoplemanager_d_.html) |
| $REST.PeoplePicker | The __api/SP.UI.ApplicationPages.ClientPeoplePickerWebServiceInterface_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_peoplepicker_d_.html) |
| $REST.ProfileLoader | The __api/sp.userprofiles.profileloader.getprofileloader_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_profileloader_d_.html) |
| $REST.RemoteWeb | The __api/SP.RemoteWeb_ endpoint. | [Documentation](/docs/sprest/interfaces/__types_lib_web_d_.iweb.html#getremoteweb) |
| $REST.Search | The __api/search_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_search_d_.html) |
| $REST.Site | Get/Set the site data. | [Documentation](/docs/sprest/modules/__types_lib_site_d_.html) |
| $REST.SiteExists | Determines if a site exists by url. | [Documentation](/docs/sprest/interfaces/__types_lib_site_d_.isite.html#exists) |
| $REST.SiteUrl | Gets the site url by id. | [Documentation](/docs/sprest/interfaces/__types_lib_site_d_.isite.html#geturlbyid) |
| $REST.SocialFeed | The __api/social.feed_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_socialfeed_d_.html) |
| $REST.ThemeManager | The __api/thememanager_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_thememanager_d_.html) |
| $REST.UserProfile | The __api/sp.userprofiles.profileloader.getprofileloader/getUserProfile_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_userprofile_d_.html) |
| $REST.Utility | The __api/SP.Utilities.Utility_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_utility_d_.html) |
| $REST.Web | Gets the web data from within the web application. | [Documentation](/docs/sprest/modules/__types_lib_web_d_.html) |
| $REST.WorkflowInstanceService | The __api/SP.WorkflowServices.WorkflowInstanceService.Current_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_wfinstanceservice_d_.html) |
| $REST.WorkflowSubscriptionService | The __api/SP.WorkflowServices.WorkflowSubscriptionService.Current_ endpoint. | [Documentation](/docs/sprest/modules/__types_lib_wfsubscriptionservice_d_.html) |