---
layout: page
---
# REST API

## Overview

The SharePoint Representational State Transfer (REST) API allows developers to perform CRUD (Create, Read, Update & Delete) operations from client-side code. These operations are similar to the SSOM (Server-Side Object Model), which was how developers created solutions in SharePoint 2007 & 2010 environments. The REST API was initially introduced in SharePoint 2013, but has been expanded in SharePoint 2016/2019/Online.

**_References_**

_[2013 Documentation](https://msdn.microsoft.com/en-us/library/office/jj860569.aspx)_

_[Online Documentation](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service)_

**_Available End Points_**

The SharePoint REST API can be accessed by ```https://sp.site.url/_api/[endpoint]```. The table below displays a list of the supported REST API endpoints in this library.

| Name | Library Reference | Description |
| $REST.List | [List](list) | Gets list data from the current or web or site collection within the web application. |
| $REST.ListDataAsStream | [List Data](list-data) | Gets list data which have complex fields (lookups/mms) |
| $REST.Navigation | [Navigation](nav) | Gets information from the navigation nodes. |
| $REST.PeopleManager | [People Manager](people-manager) | |
| $REST.PeoplePicker | [People Picker](people-picker) | |
| $REST.ProfileLoader | [Profile Loader](profile-loader) | |
| $REST.RemoteWeb | [Remote Web](remote-web) | |
| $REST.Search | [Search](search) | |
| $REST.Site | [Site](site) | Gets the site data from within the web application. |
| $REST.SiteExists | [Site Exists](site-exists) | Determines if a site exists by url. |
| $REST.SiteUrl | [Site Url by Id](site-getUrlById) | Gets the site url by id. |
| $REST.SocialFeed | [Social Feed](social-feed) | |
| $REST.UserProfile | [User Profile](user-profile) | |
| $REST.Utility | [Utility](utility) | |
| $REST.Web | [Web](web) | Gets the web data from within the web application. |