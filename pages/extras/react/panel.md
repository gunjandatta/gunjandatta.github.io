---
title: "Panel"
category: react
permalink: /extras/react/panel/
---
This component extends the Office Fluent UI Panel, and adds show/hide public methods.

## Methods

* **hide()**
    * Method to hide the panel
* **show()**
    * Method to show the panel

## Code Example

```tsx
import * as React from "react";
import { Panel } from "gd-sprest-react";
import { PrimaryButton } from "@fluentui/react/lib/Button";

class MyPanel extends React.Component<null, null> {
    let _panel:Panel = null;

    // Render the component
    render() {
        return (
            <div>
                <Panel headerText="My Panel" ref={panel => { this._panel = panel; }}>
                </Panel>
                <PrimaryButton
                    text="Show Panel"
                    onClick={this.showPanel}
                />
            </div>
        )
    }

    // Method to show the panel
    private showPanel = (ev: React.MouseEvent<HtmlButtonElement>) => {
        // Prevent postback
        ev.preventDefault();

        // Show the panel
        this._panel.show();
    }
}
```