---
layout: default
---
<div class="page-info" markdown="1">

[Back](/helpers)
## Helper Methods

</div>

#### createDocSet
Creates a document set folder using the _vti_bin/listdata.svc endpoint.

```ts
createDocSet(name: string, listName: string, webUrl?: string) => PromiseLike<Mapper.Types.IListItemResult>
```

#### parse
Each object returned from this library contains a "stringify" method. This parse method will convert the string result back to the object.

```ts
parse<T>(jsonString: string) => PromiseLike<T>
```

#### request
A generic method for creating requests using the XMLHttpRequest object.

```ts
request(props:IRequest}) => PromiseLike<Mapper.Types.IListItemResult>
```

##### IRequest
* data?:any - The data to pass in the request.
* headers?:object - The request headers.
* method?: string - The request method. (Default is 'GET')
* url: string - The request url.