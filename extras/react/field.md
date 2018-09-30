---
layout: default
---

## Field

### Supported Types
The field components currently supported are:
* Attachments
* Boolean
* Choice
* Date
* Date/Time
* Lookup
* Managed Metadata
* Multi-Choice
* Multi-User
* Note (Plain Text)
* Number
* Text
* Url
* User

### Configuration
The field component queries the target list to get the configuration. Based on the type, the appropriate field component is rendered. This ensures minor code changes to the field type are no longer require.
* Info - The field information.
* Value - The field value.

### TypeScript

```tsx
import * as React from "react";
import { Field } from "gd-sprest-react";

class MyForm extends React.Component<null, null> {
    // Render the component
    render() {
        return (
            <div>
                <Field
                    listName="Site Assets"
                    name="Title"
                />
            </div>
        )
    }
}
```