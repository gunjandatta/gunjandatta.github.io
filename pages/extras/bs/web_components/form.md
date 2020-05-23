---
title: "Form"
category: bs-wc
permalink: /extras/bs/components/webcomponents/form/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/forms)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-form>
    // Return the form properties
    return {
        rows: [
            {
                control: {
                    label: "First Name:",
                    name: "FName",
                    type: 12
                }
            },
            {
                control: {
                    label: "Last Name:",
                    name: "LName",
                    type: 12
                }
            },
            {
                control: {
                    label: "Choices:",
                    name: "Choice",
                    type: 3,
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
    };
</bs-form>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-form>
    // Return the form properties
    return {
        rows: [
            {
                control: {
                    label: "First Name:",
                    name: "FName",
                    type: 12
                }
            },
            {
                control: {
                    label: "Last Name:",
                    name: "LName",
                    type: 12
                }
            },
            {
                control: {
                    label: "Choices:",
                    name: "Choice",
                    type: 3,
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
    };
</bs-form>
```