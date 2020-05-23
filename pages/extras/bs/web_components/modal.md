---
title: "Modal"
category: bs-wc
permalink: /extras/bs/components/webcomponents/modal/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/modal)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
<bs-modal id="wcModalDemo" title="Modal Demo" body="This is the body of the modal.">
    // Return the modal properties
    return {
        button: {
            text: "Open Modal",
            toggle: "modal",
            target: "#bsModalDemo"
        }
    };
</bs-modal>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
<bs-modal id="wcModalDemo" title="Modal Demo" body="This is the body of the modal.">
    // Return the modal properties
    return {
        button: {
            text: "Open Modal",
            toggle: "modal",
            target: "#bsModalDemo"
        }
    };
</bs-modal>
```