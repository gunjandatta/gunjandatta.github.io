---
layout: extras
---
# Bootstrap

### Jumbotron
[Documentation](https://getbootstrap.com/docs/4.1/components/jumbotron)

<div id="jumbotronDemo"></div>

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the jumbotron
var el = document.querySelector("#jumbotron");
var jumbotron = Components.Jumbotron({
    el: el,
    title: "My Jumbotron",
    lead: "This is a jumbotron"
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the jumbotron
let el = document.querySelector("#jumbotron");
let jumbotron = Components.Jumbotron({
    el: el,
    title: "My Jumbotron",
    lead: "This is a jumbotron"
});
```

### Web Component

<bs-jumbotron title="Web Components" lead="These are easy to use."></bs-jumbotron>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-jumbotron title="Web Components" lead="These are easy to use."></bs-jumbotron>
```

### References

```
Jumbotron(props:IJumbotronProps):IJumbotron
```

#### IJumbotron

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### IJumbotronProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to jumbotron. |
| content | _string_ | The jumbotron content. |
| el | _HTMLElement_ | The element to render the jumbotron to. |
| isFluid | _boolean_ | Adds the 'jumbotron-fluid' class name. |
| lead | _string_ | The jumbotron lead text. |
| onRenderContent | _(el:HTMLElement) => void_ | The jumbotron render content event. |
| title | _string_ | The jumbotron content. |

<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a jumbotron exists
        var jumbotron = document.querySelector("#jumbotronDemo");
        if(jumbotron) {
            // Render the jumbotron
            $REST.Components.Jumbotron({
                el: jumbotron,
                title: "My Jumbotron",
                lead: "This is a jumbotron"
            });
        }
    });
</script>