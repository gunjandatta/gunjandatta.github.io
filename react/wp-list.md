---
layout: default
---
[Back](/react)
## React WebPart List Component
This webpart component removes the overhead of defining the target list, and allows the developer to specify the code related to rendering the list data.

### Constructor
The constructor allows the developer to specify a static configuration. An optional configuration webpart exists to allow the user to specify the configuration when editing the page.

#### Configuration
* _ListName:string_
    * The list name
* _WebUrl:string_
    * The relative url to the web containing the list.

#### Query Options
Specify the following values in the constructor:
* __caml:string_
    * The CAML query to execute against the target list.
* __query:[ODataQuery](/development/odata)_
    * The OData query to execute against the target list.

### Events
* _onRenderContainer_
    * An optional event to control how the webpart is rendered. The input property of this event are the list items.
* _onRenderItem_
    * The required event to return the item component. The input property of this event is the list item.

### Configuration WebPart (Optional)
The list configuration webpart displays a custom panel to allow the user to select the following:
* _List_
    * Drop down list of available lists in the target web
* _Web Url_
    * Relative url to the web containing the list
    * _A blank value defaults to the current web_

### Additional Information
_Reference this [github project](https://github.com/gunjandatta/sprest-webparts/tree/master/src/list) for an example of using the List webpart._