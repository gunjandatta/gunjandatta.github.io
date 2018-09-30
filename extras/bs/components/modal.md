---
layout: default
---

### Modal
[Documentation](https://getbootstrap.com/docs/4.1/components/modal)

<div id="modalDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the modal
var el = document.querySelector("#modalDemo");
var modal = Components.Modal({
    el: el,
    id: "bsModalDemo",
    title: "Modal Demo",
    body: "This is the body of the modal.",
    button: {
        text: "Open Modal",
        toggle: "modal",
        target: "#bsModalDemo"
    }
});
```

#### TypeScript

```ts
import { Components } from "gd-sprest-bs";

// Create the modal
let el = document.querySelector("#modalDemo");
let modal = Components.Modal({
    el: el,
    id: "bsModalDemo",
    title: "Modal Demo",
    body: "This is the body of the modal.",
    button: {
        text: "Open Modal",
        toggle: "modal",
        target: "#bsModalDemo"
    }
});
```

### Web Component

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-modal id="wcModalDemo" title="Modal Demo" body="This is the body of the modal." button='{ "text": "Open Modal" }'></bs-modal>
```

<bs-modal id="wcModalDemo" title="Modal Demo" body="This is the body of the modal." button='{ "text": "Open Modal" }'></bs-modal>

### References

```
Modal(props:IModalProps):IModal
```

#### ModalTypes

| Name | Value |
| --- | --- |
| Danger | 1 |
| Dark | 2 |
| Info | 3 |
| Light | 4 |
| Primary | 5 |
| Secondary | 6 |
| Success | 7 |
| Warning | 8 |

#### IModal

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IModalProps

| Name | Type | Description |
| --- | --- | --- |
| button | _IButtonProps_ | Renders a button to open the modal. |
| className | _string_ | The class name to apply to modal. |
| content | _string_ | The modal content. |
| el | _HTMLElement_ | The element to render the modal to. |
| header | _string_ | The modal header. |
| href | _string_ | Renders the modal as an anchor element instead of a span element. |
| isPill | _boolean_ | Adds the 'modal-pill' class name. |
| type | _number_ | The modal type. _Reference the ModalTypes enumerator_ |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // Create the modal
        var el = document.querySelector("#modalDemo");
        var modal = $REST.Components.Modal({
            el: el,
            id: "bsModalDemo",
            title: "Modal Demo",
            body: "This is the body of the modal.",
            button: { text: "Open Modal" }
        });
    });
</script>