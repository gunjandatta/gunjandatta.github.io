---
layout: archive
title: "Carousel"
category: bs-wc
permalink: /extras/bs/webcomponents/carousel/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/carousel)

<div id="carouselDemo"></div>

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

<bs-carousel id="wcCarouselDemo" enable-controls="true" enable-indicators="true">
    // Return the carousel properties
    return {
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
    };
</bs-carousel>

```html
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
<bs-carousel id="wcCarouselDemo" enable-controls="true" enable-indicators="true">
    // Return the carousel properties
    return {
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
    };
</bs-carousel>
```

### References

```
Carousel(props:ICarouselProps):ICarousel
```

#### ICarousel

| Name | Returns | Description |
| --- | --- | --- |
| cycle | _() => void_ | Cycles through the carousel items from left to right. |
| dispose | _() => void_ | Destroys an element’s tab. |
| el | Element | The jquery element. |
| next | _() => void_ | Cycles to the next item. |
| number | _(value:number) => void_ | Cycles the carousel to a particular frame. |
| pause | _() => void_ | Stops the carousel from cycling through items. |
| previous | _() => void_ | Cycles to the previous item. |

#### ICarouselItem

| Name | Returns | Description |
| --- | --- | --- |
| captions | _string_ | The item's captions. |
| className | _string_ | The class name to apply to the item. |
| content | _string_ | The item's content. |
| imageAlt | _string_ | The image image 'alt' property. |
| imageUrl | _string_ | Renders an image element. |
| isActive | _boolean_ | Adds the 'active' class. |

#### ICarouselOptions

| Name | Returns | Description |
| --- | --- | --- |
| interval | _number_ | The amount of time to delay between automatically cycling an item. |
| keyboard | _boolean_ | Whether the carousel should react to keyboard events. |
| pause | _string \| boolean_ | If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it. |
| ride | _string_ | Autoplays the carousel after the user manually cycles the first item. |
| wrap | _boolean_ | Whether the carousel should cycle continuously or have hard stops. |

#### ICarouselProps

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to carousel. |
| el | _HTMLElement_ | The element to render the carousel to. |
| enableControls | _string_ | The carousel content. |
| enableCrossfade | _string_ | The carousel header. |
| enableIndicators | _string_ | Renders the carousel as an anchor element instead of a span element. |
| id | _boolean_ | Adds the 'carousel-pill' class name. |
| items | _number_ | The carousel type. _Reference the CarouselTypes enumerator_ |
| options | _number_ | The carousel type. _Reference the CarouselTypes enumerator_ |

<style>
.carousel { max-width: 400px; }
</style>
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs/wc/dist/gd-sprest-bs.js"></script>
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