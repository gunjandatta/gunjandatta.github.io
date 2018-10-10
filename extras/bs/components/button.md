---
layout: default
---

### Button
[Documentation](https://getbootstrap.com/docs/4.1/components/buttons)

<div id="buttonDemo"></div>

#### JavaScript

```js
var Components = require("gd-sprest-bs").Components;

// Create the button
var el = document.querySelector("#btn");
var btn = Components.Button({
    el: el,
    text: "Button",
    onClick: function(ev) {
        alert("The button was clicked.");
    }
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the button
let el = document.querySelector("#btn");
let btn = Components.Button({
    el: el,
    text: "Button",
    onClick: (ev) => {
        alert("The button was clicked.");
    }
});
```

### Web Component

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
function btnClickEvent(ev) { 
    alert("You clicked the button..."); 
}
</script>
<bs-button text="My Button" onClick="btnClickEvent"></bs-button>
```

<bs-button text="My Button" onClick="btnClickEvent"></bs-button>

### References

```
Button(props:IButtonProps):IButton
```

#### ButtonTypes

| Name | Value |
| --- | --- |
| Danger | 1 |
| Dark | 2 |
| Info | 3 |
| Light | 4 |
| Link | 5 |
| Primary | 6 |
| Secondary | 7 |
| Success | 8 |
| Warning | 9 |

#### IButton

| Name | Returns | Description |
| --- | --- | --- |
| dispose | void | Destroys an element's button. |
| el | Element | The jquery element. |
| toggle | void | Toggles push state. Gives the button the appearance that it has been activated. |

#### IButtonProps

| Name | Type | Description |
| --- | --- | --- |
| badgeType | _number_ | The badge type. _Reference the BadgeTypes enumerator_ |
| badgeValue | _string_ | The badge value. |
| className | _string_ | The class name to apply to button. |
| controls | _Array&lt;string\&gt;_ | The aria-controls property value. |
| el | _HTMLElement_ | The element to render the button to. |
| id | _string_ | The id to apply to the button.
| isBlock | _boolean_ | Applies the block class to the button. |
| isExpanded | _boolean_ | The aria-expanded value. |
| isLarge | _boolean_ | Applies the large class to the button. |
| isOutline | _boolean_ | Applies the outline class to the button. |
| isSmall | _boolean_ | Applies the small class to the button. |
| onClick | _(btn?: HTMLButtonElement)_ | The button click event. |
| target | _string_ | The data-target property value. |
| toggle | _string_ | The data-toggle property value.
| text | _string_ | The button text. |
| type | _number_ | The button type. _Reference the ButtonTypes enumerator_ |

<script type="text/javascript">
    // Set the button click event
    function btnClickEvent(ev) { 
        alert("You clicked the button..."); 
    }
        
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a button exists
        var btn = document.querySelector("#buttonDemo");
        if(btn) {
            // Render the button
            $REST.Components.Button({
                el: btn,
                text: "Button",
                onClick: btnClickEvent
            });
        }
    });
</script>