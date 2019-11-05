---
layout: page
---
# Dev Topics

### Taxonomy

The taxonomy class is designed to return the managed metadata term set data as an array of term information, or as a tree.

**_Getting Term Groups_**

The ```getTermGroups()``` method will return the available term groups from the available term store. The data returned will also include the Site Collection term groups.

**_Getting a Term Group_**

The ```getTermGroup(name:string)``` method will return a specific term group.

**_Getting Term Sets_**

The ```getTermSets(groupName:string)``` method will return the available term sets from a specified term group stored in the global term store. The ```getTermSetsFromDefaultSC()``` method will return the available term sets from the default site collection's term group.

#### Getting a Term Set

**_By Group Name_**

The ```getTermSetByGroupName(name:string, groupName:string)``` method will return a term set, from a specified term group stored in the global term store. 

**_From Default Site Collection_**

The ```getTermSetFromDefaultSC(name:string)``` method will return a term set from the default site collection's term group.

**_By ID_**

The ```getTermSetById(termStoreId:string, termSetId:string)``` method will return a term set.

#### Getting Terms

**_By Group Name_**

The ```getTermsByGroupName(name:string, groupName:string)``` method will return an array of terms, from a specified term set located from a specified term group. 

**_From Default Site Collection_**

The ```getTermsFromDefaultSC(name:string)``` method will return an array of terms, from the specified term set located in the default site collection's term group.

**_By ID_**

The ```getTermsById(termStoreId:string, termSetId:string)``` method will return an array of terms.

#### Convert to Tree

The data returned is an array of terms. To convert the terms to a tree object, use the ```toObject(terms:Array<ITermInfo>)```. To convert the object back to an array, use the ```toArray(term:ITerm)``` method to convert the tree back to an array of terms.

#### Searching For Data

The ```findById(term:ITerm, termId:string)``` method can be used to find a term by its id. The ```findByName(term:ITerm, name:string)``` method can be used to find a term by its name. Both methods will require the data to be converted to a tree object first.

### Code Examples

```ts
// JavaScript
var $REST = require("gd-sprest");

// Get the term groups
$REST.Helper.Taxonomy.getTermGroups().then(function(groups) {
    // Parse the groups
    for(var i=0; i<groups.length; i++) {
        // Code goes here
    }
});

// TypeScript
import { Helper } from "gd-sprest";

// Get the term groups
Helper.Taxonomy.getTermGroups().then(groups => {
    // Parse the groups
    for(let i=0; i<groups.length; i++) {
        // Code goes here
    }
});
```

**_Methods_**

| Name | Return Type | Description |
| --- | --- | --- |
| findById(_term: ITerm, termId: string_) | _ITerm_ | Searches a term for the specified id. |
| findByName(_term: ITerm, termName: string_) | _ITerm_ | Searches a term for the specified name. |
| getTermGroups() | _PromiseLike&lt;Array&lt;ITermGroupInfo&gt;&gt;_ | Gets the term groups from the available term stores. |
| getTermSets(_groupName: string_) | _PromiseLike&lt;Array&lt;ITermSetInfo&gt;&gt;_ | Gets the term sets for a specified term group name. |
| getTermSetsFromDefaultSC() | _PromiseLike&lt;Array&lt;ITermSetInfo&gt;&gt;_ | Gets the term sets, from the site collection's term store. |
| getTermsById(_termStoreId: string, termSetId: string_) | _PromiseLike&lt;Array&lt;ITermInfo&gt;&gt;_ | Gets the terms of a terms set. |
| getTermSetById(_termStoreId: string, termSetId: string_) | _PromiseLike&lt;Array&lt;ITerm&gt;&gt;_ | Gets the terms of a terms set. |
| getTermsFromDefaultSC(_termSetName: string_) | _PromiseLike&lt;Array&lt;ITermInfo&gt;&gt;_ | Gets the terms of a term set, from the site collection's term store. |
| getTermSetFromDefaultSC(_termSetName: string_) | _PromiseLike&lt;ITerm&gt;_ | Gets the terms of a term set, from the site collection's term store. |
| getTermsByGroupName(_termSetName: string, groupName: string_) | _PromiseLike&lt;Array&lt;ITermInfo&gt;&gt;_ | Gets the terms of a term set. |
| getTermSetByGroupName(_termSetName: string, groupName: string_) | _PromiseLike&lt;ITerm&gt;_ | Gets the terms of a term set. |
| toArray(_term: ITerm_) | _Array&lt;ITermInfo&gt;_ | Converts a term to an array of term information. |
| toFieldValue(_term: ITerm \| ITermInfo_) | _any_ | Converts the term to the field value, formatted for updating an item in the REST API. |
| toFieldMultiValue(_term: Array&lt;ITerm \| ITermInfo&gt;_) | _any_ | Converts an array of terms to the multi-field value, formatted for updating an item in the REST API. |
| toObject(_Array&lt;ITermInfo&gt;_) | _ITerm_ | Converts an array of term information to a term. |

**_ITerm_**

| Property | Type | Description |
| --- | --- | --- |
| info | _ITermInfo_ | The term information. |
| parent | _ITerm_ | The parent term. |

**_ITermGroupInfo_**

| Property | Type | Description |
| --- | --- | --- |
| description | _string_ | The term description |
| id | _string_ | The term id |
| name | _string_ | The term name |

**_ITermInfo_**

| Property | Type | Description |
| --- | --- | --- |
| description | _string_ | The term description |
| id | _string_ | The term id |
| name | _string_ | The term name |
| parent | _ITerm_ | The parent term |
| path | _Array&lt;string&gt;_ | The term path |
| pathAsString | _string_ | The term path as a string |
| props | _{ [key: string]: string; }_ | The term custom properties

**_ITermSetInfo_**

| Property | Type | Description |
| --- | --- | --- |
| description | _string_ | The term description |
| id | _string_ | The term id |
| name | _string_ | The term name |
| props | _{ [key: string]: string; }_ | The term custom properties