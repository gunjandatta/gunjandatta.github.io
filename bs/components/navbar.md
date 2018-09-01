---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Navbar](https://getbootstrap.com/docs/4.1/components/navbar)

#### Example:

<div id="navbarDemo"></div>

### Code Examples

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

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
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
| Auto | 1 |
| Bottom | 2 |
| Left | 3 |
| Right | 4 |
| Top | 5 |

#### INavbar

| Name | Returns | Description |
| --- | --- | --- |
| dispose | () => void | Destroy's an element's navbar. |
| el | Element | The jquery element. |
| enabled | () => void | Gives an element’s navbar the ability to be shown. |
| hide | () => void | Hides an element's navbar. |
| toggle | () => void | Toggles an element's navbar. |
| toggleEnabled | () => void | Toggles the ability for an element's navbar to be shown or hidden. |
| show | () => void | Shows an element's navbar. |
| update | () => void | Updates the position of an element's navbar. |

#### INavbarOptions

| Name | Type | Description |
| --- | --- | --- |
| animation | _boolean_ | Apply a CSS fade transition to the navbar. |
| boundary | _string_ | Overflow constraint boundary of the navbar. |
| container | _string_ | Appends the navbar to a specific element. |
| delay | _number | object_ | Delay showing and hiding the navbar (ms) - does not apply to manual trigger type. |
| fallbackPlacement | _string | Array&lt;string&gt;_ | Allow to specify which position Popper will use on fallback. |
| html | _boolean_ | Insert HTML into the navbar. |
| offset | _number | string_ | Offset of the navbar relative to its target. |
| placement | _string_ | How to position the navbar _(auto, top, bottom, left, right)_. When auto is specified, it will dynamically reorient the navbar. |
| selector | _string_ | If a selector is provided, navbar objects will be delegated to the specified targets. |
| template | _string_ | Base HTML to use when creating the navbar. |
| title | _string_ | Default title value if title attribute isn't present. |
| trigger | _string_ | How navbar is triggered _(click, hover, focus, manual)_. You may pass multiple triggers; separate them with a space. Manual cannot be combined with any other trigger. |

#### INavbarProps

| Name | Type | Description |
| --- | --- | --- |
| btnProps | _IButtonProps_ | The button properties. |
| className | _string_ | The class name to apply to navbar. |
| el | _HTMLElement_ | The element to render the navbar to. |
| options | _INavbarOptions_ | The navbar options. |
| type | _number_ | The navbar type. _Reference the NavbarTypes enumerator_ |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        function logSearchValue(value) {
            // Log the value
            console.log("The search value is: " + value);
        }

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