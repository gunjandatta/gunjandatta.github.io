---
layout: default
---

### Navbar
[Documentation](https://getbootstrap.com/docs/4.1/components/navbar)

<div id="navbarDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the navbar
var el = document.querySelector("#navbar");
var navbar = Components.Navbar({
    el: el,
    brand: "Navbar",
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
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the navbar
let el = document.querySelector("#navbar");
let navbar = Components.Navbar({
    el: el,
    brand: "Navbar",
    searchBox: {
        onChange: (value) => {
            // Log the value
            console.log("The search value is: " + value);
        },
        onSearch: (value) => {
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
});
```

### Web Component

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
function logSearch(value) {
    console.log("The search value is: " + value);
}
</script>
<bs-navbar brand="Navbar" search-box='{
        "onChange": "logSearchValue",
        "onSearch": "logSearchValue"
    }' items='[
    {
        "text": "Home",
        "isActive": true
    },
    {
        "text": "Link"
    },
    {
        "text": "Disabled Link",
        "isDisabled": true
    },
    {
        "text": "Dropdown Link",
        "items": [
            { "text": "Link 1" },
            { "text": "Link 2" },
            { "text": "Link 3" },
            { "text": "Link 4" },
            { "text": "Link 5" }
        ]
    }
]'></bs-navbar>
```

<bs-navbar brand="Navbar" search-box='{
        "onChange": "logSearchValue",
        "onSearch": "logSearchValue"
    }' items='[
    {
        "text": "Home",
        "isActive": true
    },
    {
        "text": "Link"
    },
    {
        "text": "Disabled Link",
        "isDisabled": true
    },
    {
        "text": "Dropdown Link",
        "items": [
            { "text": "Link 1" },
            { "text": "Link 2" },
            { "text": "Link 3" },
            { "text": "Link 4" },
            { "text": "Link 5" }
        ]
    }
]'></bs-navbar>

### References

```
Navbar(props:INavbarProps):INavbar
```

#### NavbarTypes

| Name | Value |
| --- | --- |
| Dark | 1 |
| Light | 2 |
| Primary | 3 |

#### INavbar

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### INavbarItem

| Name | Type | Description |
| --- | --- | --- |
| href | _string_ | The 'href' property of the link. |
| isActive | _boolean_ | Adds the 'active' class name. |
| isDisabled | _boolean_ | Adds the 'disabled' class name. |
| items | _Array&lt;INavbarItem&gt;_ | The navbar sub-items. |
| onClick | _(item:INavbarItem, ev:Event) => void_ | The click event for the item. |
| type | _number_ | The navbar type. _Reference the NavbarTypes_ |

#### INavbarProps

| Name | Type | Description |
| --- | --- | --- |
| btnType | _string_ | The search button type. _Reference the ButtonTypes_ |
| btnText | _string_ | The search button text. |
| id | _string_ | The navbar id. |
| onChange | _(value:string, ev:Event) => void_ | The search box change event. |
| onSearch | _(value:string, ev:Event) => void_ | The search box button click event. |
| placeholder | _string_ | The search box placeholder. |

#### INavbarSearchBox

| Name | Type | Description |
| --- | --- | --- |
| btnProps | _IButtonProps_ | The button properties. |
| className | _string_ | The class name to apply to navbar. |

<script type="text/javascript">
    function logSearchValue(value) {
        // Log the value
        console.log("The search value is: " + value);
    }

    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a navbar exists
        var navbar = document.querySelector("#navbarDemo");
        if(navbar) {
            // Render the navbar
            $REST.Components.Navbar({
                el: navbar,
                brand: "Navbar",
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
            });
        }
    });
</script>