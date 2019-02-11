---
layout: page
---

## SharePoint Core JavaScript

SharePoint contains many core javascript files that can be used to customize the experience for the user, while keeping things native to SharePoint. Refer to this [blog post](http://dattabase.com/sharepoint-javascript-libraries/) for additional details.

### Modal Dialog
[Documentation](https://msdn.microsoft.com/en-us/library/office/ff408909(v=office.14).aspx)

#### Code Reference

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.Helper.SP.ModalDialog

// TypeScript
import { Helper } from "gd-sprest";
Helper.SP.ModalDialog
```

#### Dialog Options

| Property | Type | Description |
| --- | --- | --- |
| allowMaximize | _boolean_ | A Boolean value that specifies whether the dialog can be maximized. true if the Maximize button is shown; otherwise, false. |
| args | _any_ | An object that contains data that are passed to the dialog. |
| autoSize | _boolean_ | A Boolean value that specifies whether the dialog platform handles dialog sizing. |
| dialogReturnValueCallback | _(dialogResult: number, returnVal: any) => void_ | A function pointer that specifies the return callback function. The function takes two parameters, a dialogResult of type SP.UI.DialogResult Enumeration and a returnValue of type object that contains any data returned by the dialog. |
| height | _number_ | An integer value that specifies the height of the dialog. If height is not specified, the height of the dialog is autosized by default. If autosize is false, the dialog height is set to 576 pixels. |
| html | _HtmlElement_ | An html element to appear in the dialog. If both html and url are specified, url takes precedence. Either url or html must be specified. _The html element is removed from the DOM after the dialog closes._ |
| showClose | _boolean_ | A Boolean value that specifies whether the Close button appears on the dialog. |
| showMaximized | _boolean_ | A Boolean value that specifies whether the dialog opens in a maximized state. true the dialog opens maximized. Otherwise, the dialog is opened at the requested sized if specified; otherwise, the default size, if specified; otherwise, the autosized size. |
| title | _string_ | A string that contains the title of the dialog. |
| url | _string_ | A string that contains the URL of the page that appears in the dialog. If both url and html are specified, url takes precedence. Either url or html must be specified. |
| width | number | An integer value that specifies the width of the dialog. If width is not specified, the width of the dialog is autosized by default. If autosize is false, the width of the dialog is set to 768 pixels. |
| x | number | An integer value that specifies the x-offset of the dialog. This value works like the CSS left value. |
| y | number | An integer value that specifies the y-offset of the dialog. This value works like the CSS top value. |

#### Methods

| Name | Parameters | Description |
| --- | --- | --- |
| close | _(dialogResult?: number)_ | Closes the most recently opened modal dialog with the specified dialog result. |
| commonModalDialogClose | _(dialogResult?: number, returnVal?: any)_ | Closes the most recently opened modal dialog with the specified dialog result and return value. |
| commonModalDialogOpen | _(url: string, options?: IDialogOptions, callback?: (dialogResult?: number, returnVal?: any) => void, args?: any)_ | Displays a modal dialog with the specified URL, options, callback function, and arguments. |
| load | | Method to ensure the core script is loaded. |
| OpenPopUpPage | _(url: string, callback?: (dialogResult?: number, returnVal?: any) => void, width?: number, height?: number)_ | Displays a modal dialog with the specified URL, callback function, width, and height. |
| RefreshPage | _(dialogResult?: number)_ | Refreshes the parent page of the modal dialog when the dialog is closed by clicking OK. |
| showModalDialog | _(options: IDialogOptions)_ | Displays a modal dialog with specified dialog options. |
| ShowPopupDialog | _(url: string)_ | Displays a modal dialog using the page at the specified URL. |
| showWaitScreenSize | _(title: string, message: string, callback: () => void, height: number, width: number)_ | Displays a wait screen dialog that has a Cancel button using the specified parameters. |
| showWaitScreenWithNoClose | _(title: string, message: string, height: number, width: number)_ | Displays a wait screen dialog that does not have a Cancel button using the specified parameters. |

### Notify
[Documentation](https://msdn.microsoft.com/en-us/library/office/ff408137(v=office.14).aspx)

#### Code Reference

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.Helper.SP.Notify

// TypeScript
import { Helper } from "gd-sprest";
Helper.SP.Notify
```

#### Methods

| Name | Parameters | Description |
| --- | --- | --- |
| addNotification | _(html: string, sticky?: boolean)_ | Adds a notification to the page. By default, notifications appear for five seconds. |
| load | | Method to ensure the core script is loaded. |
| removeNotification | _(id: string)_ | Removes the specified notification from the page. |

### Status

[Documentation](https://msdn.microsoft.com/en-us/library/office/ff407795(v=office.14).aspx)

#### Code Reference

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.Helper.SP.Status

// TypeScript
import { Helper } from "gd-sprest";
Helper.SP.Status
```

#### Methods

| Name | Parameters | Description |
| --- | --- | --- |
| addStatus | _(title: string, html?: string, prepend?: boolean)_ | Adds a status message to the page. |
| appendStatus | _(id: string, title: string, html: string)_ | Appends text to an existing status message. |
| load | | Method to ensure the core script is loaded. |
| removeAllStatus | _(hide?: boolean)_ | Removes all status messages from the page. |
| removeStatus | _(id: string)_ | Removes the specified status message. |
| setStatusPriColor | _(id: string, color: string)_ | Sets the priority color of the specified status message. |
| updateStatus | _(id: string, html: string)_ | Updates the specified status message. |