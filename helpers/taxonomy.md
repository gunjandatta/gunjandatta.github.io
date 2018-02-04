---
layout: default
---
[Back](/helpers)
## Taxonomy
The taxonomy class is designed to return the managed metadata term set data as an array of term information, or as a tree.
### Helper Methods

| Name | Return Type | Description |
| --- | --- | --- |
| findById(_term: ITerm, termId: string_) | _ITerm_ | Searches a term for the specified id. |
| findByName(_term: ITerm, termName: string_) | _ITerm_ | Searches a term for the specified name. |
| getTermsById(_termStoreId: string, termSetId: string_) | _PromiseLike&lt;Array&lt;ITermInfo&gt;&gt;_ | Gets the terms of a terms set. |
| getTermSetById(_termStoreId: string, termSetId: string_) | _PromiseLike&lt;ArraITerm&gt;_ | Gets the terms of a terms set. |
| getTermsFromDefaultSC(_termSetName: string_) | _PromiseLike&lt;Array&lt;ITermInfo&gt;&gt;_ | Gets the terms of a term set, from the site collection's term store. |
| getTermSetFromDefaultSC(_termSetName: string_) | _PromiseLike&lt;ITerm&gt;_ | Gets the terms of a term set, from the site collection's term store. |
| getTermsByGroupName(_termSetName: string, groupName: string_) | _PromiseLike&lt;Array&lt;ITermInfo&gt;&gt;_ | Gets the terms of a term set. |
| getTermSetByGroupName(_termSetName: string, groupName: string_) | _PromiseLike&lt;ITerm&gt;_ | Gets the terms of a term set. |
| toArray(_term: ITerm_) | _Array&lt;ITermInfo&gt;_ | Converts a term to an array of term information. |
| toFieldValue(_term: ITerm \| ITermInfo_) | _any_ | Converts the term to the field value, formatted for updating an item in the REST API. |
| toFieldMultiValue(_term: Array&lt;ITerm \| ITermInfo&gt;_) | _any_ | Converts an array of terms to the multi-field value, formatted for updating an item in the REST API. |
| toObject(_Array&lt;ITermInfo&gt;_) | _ITerm_ | Converts an array of term information to a term. |

### Interfaces
#### ITerm

| Property | Type | Description |
| --- | --- | --- |
| info | _ITermInfo_ | The term information. |
| parent | _ITerm_ | The parent term. |

#### ITermInfo

| Property | Type | Description |
| --- | --- | --- |
| description | _string_ | The term description |
| id | _string_ | The term id |
| name | _string_ | The term name |
| parent | _ITerm_ | The parent term |
| path | _Array&lt;string&gt;_ | The term path |
| pathAsString | _string_ | The term path as a string |
| props | _{ [key: string]: string; }_ | The term custom properties