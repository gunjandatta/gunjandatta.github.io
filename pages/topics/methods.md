---
title: "Helper Methods"
category: topics
permalink: /topics/methods/
---

## addContentEditorWebPart

Adds a content editor webpart to a specified webpart/wiki page.

```ts
addContentEditorWebPart(url: string, wpProps: IContentEditorWebPart) => PromiseLike<void>
```

## addPermissionLevel

Adds a permission level to the current or specified web.

```ts
addPermissionLevel(props) => PromiseLike<RoleDefinition>
```

### Properties

```ts
interface IaddPermissionLevelProps {
    BasePermissions: Array<number>;
    Description?: string;
    Name: string;
    Order?: number;
    WebUrl?: string;
}
```

## addScriptEditorWebPart

Adds a script editor webpart to a specified webpart/wiki page.

```ts
addScriptEditorWebPart(url: string, wpProps: IContentEditorWebPart) => PromiseLike<void>
```

## createContentType

Creates a content type in a web or specified list.

```ts
createContentType(ctInfo: SP.ContentTypeCreationInformation, parentInfo: { Id: string, Url?: string }, webUrl?: string, listName?: string) => PromiseLike<SP.ContentType>
```

## createDocSet

Creates a document set folder using the _vti_bin/listdata.svc endpoint.

```ts
createDocSet(name: string, listName: string, webUrl?: string) => PromiseLike<IListItemResult>
```

## hasPermissions

Determines if a user has the correct permissions to a web/list.

```ts
hasPermissions(permissionMask: any, permissions: Array<number> | number) => PromiseLike<boolean>
```

## parse

Each object returned from this library contains a "stringify" method. This parse method will convert the string result back to the object.

```ts
parse<T>(jsonString: string) => PromiseLike<T>
```

## request

A generic method for creating requests using the XMLHttpRequest object.

```ts
request(props) => PromiseLike<IListResult>
```

### Properties

```ts
interface IRequest {
    // The data to pass in the request.
    data?:any;
    // The request headers.
    headers?:object;
    // The request method. (Default is 'GET')
    method?: string;
    // The request url.
    url: string;
}
```

## setContentTypeFields

Sets the field links associated with a content type.

```ts
setContentTypeFields(ctInfo: { id: string, fields: Array<string>, listName?: string, webUrl?: string }) => PromiseLike<void>
```

## setGroupOwner

Updates the owner to a group or user. The REST API currently does not work if a group id is specified, only a user id.

```ts
setGroupOwner(groupName: string, ownerName: string) => PromiseLike<void>
```