---
title: "People Picker"
category: react
permalink: /extras/react/peoplepicker/
---
This people picker components searches the user information list by default. The "Show All" option within the search results will extend the search to all principal sources.

_Reference this [github project](https://github.com/gunjandatta/sprest-webparts/tree/master/src/email) for an example of using the SharePoint People Picker component._

## Code Example

```tsx
import * as React from "react";
import { SPPeoplePicker } from "gd-sprest-react";
import { PrimaryButton } from "@fluentui/react/lib/Button";

class MyClass extends React.Component<null, null> {
    private _spPicker: SPPeoplePicker = null;

    // Render the component
    render() {
        return (
            <div>
                <SPPeoplePicker
                    allowGroups={false}
                    allowMultiple={false}
                    ref={picker => { this._spPicker = picker; }}
                />
                <PrimaryButton
                    text="Show User"
                    onClick={this.showUser}
                />
            </div>
        )
    }

    // Method to show the selected user
    private showUser = (ev: React.MouseEvent<HtmlButtonElement>) => {
        // Prevent postback
        ev.preventDefault();

        // Get the selected user
        let user = this._spPicker.state.personas[0];
        if(user) {
            // Display the email address
            alert(user.secondaryText);
        }
    }
}
```