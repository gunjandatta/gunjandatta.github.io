---
title: "Navbar"
category: bs-wc
permalink: /extras/bs/components/webcomponents/navbar/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/navbar)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-navbar brand="Navbar">
    // Return the navbar properties
    return {
        searchBox: {
            onChange: logSearchValue,
            onSearch: logSearchValue
        },
        items: [
            {
                text: "Home",
                isActive: true
            },
            {
                text: "Link"
            },
            {
                text: "Disabled Link",
                isDisabled: true
            },
            {
                text: "Dropdown Link",
                items: [
                    { text: "Link 1" },
                    { text: "Link 2" },
                    { text: "Link 3" },
                    { text: "Link 4" },
                    { text: "Link 5" }
                ]
            }
        ]
    };
</bs-navbar>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-navbar brand="Navbar">
    // Return the navbar properties
    return {
        searchBox: {
            onChange: function(value) {
                // Log the value
                console.log("The search value is: " + value);
            },
            onSearch: function(value) {
                // Log the value
                console.log("The search value is: " + value);
            }
        },
        items: [
            {
                text: "Home",
                isActive: true
            },
            {
                text: "Link"
            },
            {
                text: "Disabled Link",
                isDisabled: true
            },
            {
                text: "Dropdown Link",
                items: [
                    { text: "Link 1" },
                    { text: "Link 2" },
                    { text: "Link 3" },
                    { text: "Link 4" },
                    { text: "Link 5" }
                ]
            }
        ]
    };
</bs-navbar>
```