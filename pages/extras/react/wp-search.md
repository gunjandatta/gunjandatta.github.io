---
layout: archive
title: "Search WebPart"
category: react
permalink: /extras/react/wp-search/
---
This webpart component inherits the list webpart, and includes the ability to search item columns. A textbox will allow the user to quickly filter for results, based on the searchable columns.

**_Constructor_**
The constructor allows the developer to specify a static configuration. An optional configuration webpart exists to allow the user to specify the configuration when editing the page.

**_Configuration_**
* _Fields:Array<FieldResult>_
    * An array of the searchable field information
* _ListName:string_
    * The list name
* _TagPickerFl:boolean_
    * Flag to determine the search textbox to display
* _WebUrl:string_
    * The relative url to the web containing the list.

**_Query Options_**
Specify the following values in the constructor:
* __caml:string_
    * The CAML query to execute against the target list.
* __query:[ODataQuery](/dev/odata)_
    * The OData query to execute against the target list.

**_Events_**
* _onRenderContainer_
    * An optional event to control how the webpart is rendered. The input property of this event are the list items.
* _onRenderItem_
    * The required event to return the item component. The input property of this event is the list item.

**_Configuration WebPart (Optional)_**
The search configuration webpart displays a custom panel to allow the user to select the following:
* _List_
    * Drop down list of available lists in the target web
* _Searchable Fields_
    * A tag picker supporting the following field types of the selected list
        * _Choice/Multi-Choice_
        * _Lookup/Multi-Lookup_
        * _Managed Metadata_
        * _Text_
        * _URL_
* _Tag Picker_
    * A checkbox to determine the search textbox to display
    * Checked
        * Renders a tag picker text box to display a filtered set of values, based on the text entered.
    * Unchecked
        * Renders a text box to auto-filter based on the text entered.
* _Web Url_
    * Relative url to the web containing the list
    * _A blank value defaults to the current web_

**_Events_**
* _onRenderContainer_
    * An optional event to control how the webpart is rendered. The input property of this event are the list items.
* _onRenderItem_
    * The required event to return the item component. The input property of this event is the list item.

**_Additional Information_**
_Reference this [github project](https://github.com/gunjandatta/sprest-webparts/tree/master/src/docView) for an example of using the Search webpart._

**_Search_**
This webpart generates a mapper for filtering the list data, based on the item data. The searchable fields are defined in the webpart's configuration.