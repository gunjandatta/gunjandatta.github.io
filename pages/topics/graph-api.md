---
title: "Graph API"
category: topics
permalink: /topics/graph-api/
---
The graph api library will help you make requests from SharePoint under the context of the user. A benefit of this method is that it will not require you to register the app.

## Security

All requests will be made under the user context. The `securityEnabledOnly` flag will be set to `true` for the graph request.

## Token

The first step is to get an access token for the graph api requests. The graph library has a `Token` property that can be set, so you do not need to pass it for each request.

### Token Properties

The request will return the following data.

| Name | Description |
| --- | --- |
| access_token | The graph api access token. |
| expires_on | Expiration date of the token. |
| resource | The graph api cloud environment. |
| scope | The user's permissions. |
| token_type | The token type. |

## Cloud Environments

There are different Graph API cloud environments, per the [Microsoft Docs](https://docs.microsoft.com/en-us/graph/deployments#microsoft-graph-and-graph-explorer-service-root-endpoints). Below are examples for the different cloud environments.

### Default

The default cloud environment used is the https://graph.microsoft.com environment.


```ts
import { ContextInfo, Graph } from "gd-sprest";

// Get the access token

Graph.getAccessToken().execute(token => {
    // Set the default token for the api requests
    Graph.Token = token.access_token;
});
```

### China

```ts
import { ContextInfo, Graph, SPTypes } from "gd-sprest";

// Get the access token

Graph.getAccessToken(SPTypes.CloudEnvironment.China).execute(token => {
    // Set the default token for the api requests
    Graph.Token = token.access_token;
});
```

### US Level 4

```ts
import { ContextInfo, Graph, SPTypes } from "gd-sprest";

// Get the access token

Graph.getAccessToken(SPTypes.CloudEnvironment.USL4).execute(token => {
    // Set the default token for the api requests
    Graph.Token = token.access_token;
});
```

### US Level 5

```ts
import { ContextInfo, Graph, SPTypes } from "gd-sprest";

// Get the access token

Graph.getAccessToken(SPTypes.CloudEnvironment.USL5).execute(token => {
    // Set the default token for the api requests
    Graph.Token = token.access_token;
});
```

## Requests

The [ContextInfo](/topics/context-info) will be used to reference the current site-id for the code examples. The code examples will also assume that the Token has already been set.

### Request Properties

| Name | Description |
| --- | --- |
| accessToken | The access token. Defaults to the Graph.Token value if not presented. |
| cloud | The cloud environment to access. |
| requestType | The GET/POST request type. |
| url | The graph api url for the request. |
| version | The version of the graph api to access. |

## Code Examples

### Get the User Information

```ts
import { Graph } from "gd-sprest";

// Get my information
Graph({ url: "me" }).execute(userInfo => {
    userInfo.businessPhones;
    userInfo.display_name;
    userInfo.givenName;
    userInfo.id;
    userInfo.jobTitle;
    userInfo.mail;
    userInfo.mobilePhone;
    userInfo.officeLocation;
    userInfo.preferredLanguage;
    userInfo.surname;
    userInfo.userPrincipalName;
});
```

### Get the root site

```ts
import { Graph } from "gd-sprest";

// Get the root site collection
Graph({ url: "/sites/root" }).execute(rootSite => {
    rootSite.createdDateTime;
    rootSite.description;
    rootSite.displayName;
    rootSite.id;
    rootSite.lastModifiedDate;
    rootSite.name;
    rootSite.root;
    rootSite.siteCollection;
});
```

### Get the Current Site

```ts
import { ContextInfo, Graph } from "gd-sprest";

// Get the current site collection
Graph({ url: "/sites/" + ContextInfo.siteId }).execute(siteInfo => {
    siteInfo.createdDateTime;
    siteInfo.description;
    siteInfo.displayName;
    siteInfo.id;
    siteInfo.lastModifiedDate;
    siteInfo.name;
    siteInfo.root;
    siteInfo.siteCollection;
});
```

### Get the Lists in the Current Site Collection

```ts
import { ContextInfo, Graph } from "gd-sprest";

// Get the lists in the current site collection
Graph({ url: "/sites/" + ContextInfo.siteId + "/lists" }).execute(lists => {
    // Parse the lists
    for(let i=0; i<lists.value.length; i++) {
        lists.createdBy;
        lists.createdDateTime;
        lists.description;
        lists.displayName;
        lists.eTag;
        lists.id;
        lists.lastModifiedBy;
        lists.lastModifiedDateTime;
        lists.list;
        lists.name;
        lists.parentReference;
        lists.webUrl;
    }
});
```

### Create a List in the Current Site Collection

```ts
import { ContextInfo, Graph } from "gd-sprest";

// Create a list in the current site collection
Graph({ url: "/sites/" + ContextInfo.siteId + "/lists", data: {
  "displayName": "Books",
  "columns": [
    {
      "name": "Author",
      "text": { }
    },
    {
      "name": "PageCount",
      "number": { }
    }
  ],
  "list": {
    "template": "genericList"
  }
}}).execute(list => {
    list.createdBy;
    list.createdDateTime;
    list.description;
    list.displayName;
    list.eTag;
    list.id;
    list.lastModifiedBy;
    list.lastModifiedDateTime;
    list.list;
    list.name;
    list.parentReference;
    list.webUrl;
});
```