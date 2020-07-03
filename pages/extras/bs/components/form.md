---
layout: bs
title: "Form"
category: bs
permalink: /extras/bs/components/form/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/forms">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_form_d_.html">Code Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_form_d_.iformprops.html">Properties</a>
    </div>
</div>

### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the form
let el = document.querySelector("#myForm");
let form = Components.Form({
    el: el,
    rows: [
        {
            control: {
                label: "First Name:",
                name: "FName",
                type: Components.FormControlTypes.TextField
            }
        },
        {
            control: {
                label: "Last Name:",
                name: "LName",
                type: Components.FormControlTypes.TextField
            }
        },
        {
            control: {
                label: "Choices:",
                name: "Choice",
                type: Components.FormControlTypes.Dropdown,
                items: [
                    { text: "Choice 1", value: "1" },
                    { text: "Choice 2", value: "2" },
                    { text: "Choice 3", value: "3" },
                    { text: "Choice 4", value: "4" },
                    { text: "Choice 5", value: "5" }
                ]
            }
        }
    ],
    value: {
        FName: "Gunjan",
        LName: "Datta",
        Choice: "3"
    }
});
```

### React

```tsx
import * as React from "react";
import { Components, Form } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Form
                rows={[
                    {
                        columns: [
                            {
                                control: {
                                    label: "First Name:",
                                    name: "FName",
                                    type: Components.FormControlTypes.TextField
                                }
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                control: {
                                    label: "Last Name:",
                                    name: "LName",
                                    type: Components.FormControlTypes.TextField
                                }
                            }
                        ]
                    },
                    {
                        columns: [
                            {
                                control: {
                                    label: "Choices:",
                                    name: "Choice",
                                    type: Components.FormControlTypes.Dropdown,
                                    items: [
                                        { text: "Choice 1", value: 1 },
                                        { text: "Choice 2", value: 2 },
                                        { text: "Choice 3", value: 3 },
                                        { text: "Choice 4", value: 4 },
                                        { text: "Choice 5", value: 5 }
                                    ]
                                }
                            }
                        ]
                    }
                ]}
            />
        );
    }
}
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the form',
            'Components.Form({',
            '\tel: app,',
            '\trows: [',
            '\t\t{',
            '\t\t\tcolumns: [',
            '\t\t\t\t{',
            '\t\t\t\t\tcontrol: {',
            '\t\t\t\t\t\tlabel: "First Name:",',
            '\t\t\t\t\t\tname: "FName",',
            '\t\t\t\t\t\ttype: $REST.Components.FormControlTypes.TextField',
            '\t\t\t\t\t}',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t},',
            '\t\t{',
            '\t\t\tcolumns: [',
            '\t\t\t\t{',
            '\t\t\t\t\tcontrol: {',
            '\t\t\t\t\t\tlabel: "Last Name:",',
            '\t\t\t\t\t\tname: "LName",',
            '\t\t\t\t\t\ttype: $REST.Components.FormControlTypes.TextField',
            '\t\t\t\t\t}',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t},',
            '\t\t{',
            '\t\t\tcolumns: [',
            '\t\t\t\t{',
            '\t\t\t\t\tcontrol: {',
            '\t\t\t\t\t\tlabel: "Choices:",',
            '\t\t\t\t\t\tname: "Choice",',
            '\t\t\t\t\t\ttype: $REST.Components.FormControlTypes.Dropdown,',
            '\t\t\t\t\t\titems: [',
            '\t\t\t\t\t\t\t{ text: "Choice 1", value: "1" },',
            '\t\t\t\t\t\t\t{ text: "Choice 2", value: "2" },',
            '\t\t\t\t\t\t\t{ text: "Choice 3", value: "3" },',
            '\t\t\t\t\t\t\t{ text: "Choice 4", value: "4" },',
            '\t\t\t\t\t\t\t{ text: "Choice 5", value: "5" }',
            '\t\t\t\t\t\t]',
            '\t\t\t\t\t}',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>