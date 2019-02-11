---
layout: page
---

## React WebPart Tabs Component

This webpart displays the associated webparts within its zone in tabs.

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
* __query:[ODataQuery](/dev/odata)_
    * The OData query to execute against the target list.

### Events
* _onRenderFooter_
    * An optional event to render custom components below the tabs.
* _onRenderHeader_
    * An optional event to render custom components above the tabs.

### Configuration WebPart (Optional)
The list configuration webpart displays a custom panel to allow the user to select the following:
* _List_
    * Drop down list of available lists in the target web
* _Web Url_
    * Relative url to the web containing the list
    * _A blank value defaults to the current web_

### Additional Information
_Reference this [github project](https://github.com/gunjandatta/sprest-webparts/tree/master/src/tabs) for an example of using the Tabs webpart._

### Code Example
```tsx
import { WebPart, WebPartTabs } from "gd-sprest-react";

export class Tabs {
    constructor() {
        // Create an instance of the webpart
        WebPart({
            displayElement: WebPartTabs,
            targetElementId: "wp-tabs"
        });
    }
}
```