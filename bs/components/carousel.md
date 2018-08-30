---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

</div>

### [Carousel](https://getbootstrap.com/docs/4.1/components/carousel)

#### Example:

<div id="carouselDemo"></div>

### Code Examples

#### JavaScript
```js
var Components = require("gd-sprest-bs").Components;

// Create the carousel
var el = document.querySelector("#carousel");
var carousel = Components.Carousel({
    el: el,
    enableControls: true,
    enableIndicators: true,
    id: "carouselDemo",
    items: [
        {
            captions: "<h5>First Slide</h5>",
            imageUrl: "https://via.placeholder.com/400x200",
            imageAlt: "First Slide",
            isActive: true
        },
        {
            captions: "<h5>Second Slide</h5>",
            imageUrl: "https://via.placeholder.com/400x200",
            imageAlt: "Second Slide"
        },
        {
            captions: "<h5>Third Slide</h5>",
            imageUrl: "https://via.placeholder.com/400x200",
            imageAlt: "Third Slide"
        }
    ]
});
```
#### TypeScript
```ts
import { Components } from "gd-sprest-bs";

// Create the carousel
let el = document.querySelector("#carousel");
let carousel = Components.Carousel({
    el: el,
    enableControls: true,
    enableIndicators: true,
    id: "carouselDemo",
    items: [
        {
            captions: "<h5>First Slide</h5>",
            imageUrl: "https://via.placeholder.com/400x200",
            imageAlt: "First Slide",
            isActive: true
        },
        {
            captions: "<h5>Second Slide</h5>",
            imageUrl: "https://via.placeholder.com/400x200",
            imageAlt: "Second Slide"
        },
        {
            captions: "<h5>Third Slide</h5>",
            imageUrl: "https://via.placeholder.com/400x200",
            imageAlt: "Third Slide"
        }
    ]
});
```

### Web Component

#### Example

```html
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<bs-carousel id="wcCarouselDemo" enable-controls="true" enable-indicators="true" items='[
    {
        "captions": "<h5>First Slide</h5>",
        "imageUrl": "https://via.placeholder.com/400x200",
        "imageAlt": "First Slide",
        "isActive": true
    },
    {
        "captions": "<h5>Second Slide</h5>",
        "imageUrl": "https://via.placeholder.com/400x200",
        "imageAlt": "Second Slide"
    },
    {
        "captions": "<h5>Third Slide</h5>",
        "imageUrl": "https://via.placeholder.com/400x200",
        "imageAlt": "Third Slide"
    }
]'></bs-carousel>
```

<bs-carousel id="wcCarouselDemo" enable-controls="true" enable-indicators="true" items='[
    {
        "captions": "<h5>First Slide</h5>",
        "imageUrl": "https://via.placeholder.com/400x200",
        "imageAlt": "First Slide",
        "isActive": true
    },
    {
        "captions": "<h5>Second Slide</h5>",
        "imageUrl": "https://via.placeholder.com/400x200",
        "imageAlt": "Second Slide"
    },
    {
        "captions": "<h5>Third Slide</h5>",
        "imageUrl": "https://via.placeholder.com/400x200",
        "imageAlt": "Third Slide"
    }
]'></bs-carousel>

### References

```
Carousel(props:ICarouselProps):ICarousel
```

#### ICarousel

| Name | Returns | Description |
| --- | --- | --- |
| el | Element | The jquery element. |

#### ICarouselOptions

| Name | Returns | Description |
| --- | --- | --- |

#### ICarouselProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to carousel. |
| content | _string_ | The carousel content. |
| el | _HTMLElement_ | The element to render the carousel to. |
| header | _string_ | The carousel header. |
| href | _string_ | Renders the carousel as an anchor element instead of a span element. |
| isPill | _boolean_ | Adds the 'carousel-pill' class name. |
| type | _number_ | The carousel type. _Reference the CarouselTypes enumerator_ |

<script src="https://rawgit.com/gunjandatta/sprest-bs/master/wc/dist/gd-sprest-bs.js"></script>
<style>
.carousel { max-width: 400px; }
</style>
<script type="text/javascript">
    // Wait for the window to be loaded
    window.addEventListener("load", function() {
        // See if a carousel exists
        var carousel = document.querySelector("#carouselDemo");
        if(carousel) {
            // Render the carousel
            $REST.Components.Carousel({
                el: carousel,
                enableControls: true,
                enableIndicators: true,
                id: "carouselDemo",
                items: [
                    {
                        captions: "<h5>First Slide</h5>",
                        imageUrl: "https://via.placeholder.com/400x200",
                        imageAlt: "First Slide",
                        isActive: true
                    },
                    {
                        captions: "<h5>Second Slide</h5>",
                        imageUrl: "https://via.placeholder.com/400x200",
                        imageAlt: "Second Slide"
                    },
                    {
                        captions: "<h5>Third Slide</h5>",
                        imageUrl: "https://via.placeholder.com/400x200",
                        imageAlt: "Third Slide"
                    }
                ]
            });
        }
    });
</script>