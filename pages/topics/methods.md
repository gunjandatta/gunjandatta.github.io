---
layout: archive
title: "Helper Methods"
category: topics
permalink: /topics/methods/
---

**_createContentType_**

Creates a content type in a web or specified list.

```ts
createContentType(ctInfo: SP.ContentTypeCreationInformation, parentInfo: { Id: string, Url?: string }, webUrl?: string, listName?: string) => PromiseLike<SP.ContentType>
```

**_createDocSet_**

Creates a document set folder using the _vti_bin/listdata.svc endpoint.

```ts
createDocSet(name: string, listName: string, webUrl?: string) => PromiseLike<IListItemResult>
```

**_parse_**

Each object returned from this library contains a "stringify" method. This parse method will convert the string result back to the object.

```ts
parse<T>(jsonString: string) => PromiseLike<T>
```

**_request_**

A generic method for creating requests using the XMLHttpRequest object.

```ts
request(props:IRequest}) => PromiseLike<IListResult>
```

**_setContentTypeFields_**

Sets the field links associated with a content type.

```ts
setContentTypeFields(ctInfo: { id: string, fields: Array<string>, listName?: string, webUrl?: string }) => PromiseLike<void>
```

**_IRequest_**

* data?:any - The data to pass in the request.
* headers?:object - The request headers.
* method?: string - The request method. (Default is 'GET')
* url: string - The request url.