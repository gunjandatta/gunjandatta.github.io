---
layout: archive
title: "People Picker"
category: bs
permalink: /extras/bs/components/people-picker/
---
The people picker component uses the People Picker REST API endpoint to search based on the text entered.

![People Picker](/assets/images/people-picker.png)

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the panel
var el = document.querySelector("#people-picker");
var picker = Components.PeoplePicker({
    el: el,
    allowGroups: false,
    label: "Select User:"
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the panel
let el = document.querySelector("#people-picker");
let picker = Components.PeoplePicker({
    el: el,
    allowGroups: false,
    label: "Select User:"
});
```

#### Form Control Example

```ts
import { ContextInfo, Components } from "gd-sprest-bs";

// Create the panel
let el = document.querySelector("#people-picker");
let form = Components.Form({
    el: el,
    rows: [
        // Other controls go here
        {
            control: {
                allowGroups: false,
                label: "Select User:",
                multi: true,
                name: "User",
                type: Components.FormControlTypes.PeoplePicker
                value: ContextInfo.userId // Default to the current user
            } as Components.IFormControlPropsPeoplePicker
        }
    ]
});
```

### References

```
PeoplePicker(props:IPeoplePickerProps):IPeoplePicker
```

#### IPeoplePicker

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |
| getValue | () => Array<SP.User \| SP.Group> | Gets the selected users. |
| setValue | (Array<string \| number \| IPeoplePickerUser>) => void | Sets the selected users. |

#### IPeoplePickerProps

| Name | Type | Description |
| --- | --- | --- |
| allowGroups | _boolean_ | Includes groups in the results. |
| className | _string_ | The class name to apply to panel. |
| el | _HTMLElement_ | The element to render the panel to. |
| label | _string_ | The component label. |
| multi | _boolean_ | True to allow multiple users to be selected. |
| searchLocal | _boolean_ | True to search the local Users list before searching the REST API. |
| value | _number \| string \| IPeoplePickerUser \| Array<number \| string \| IPeoplePickerUser>_ | The default value. |