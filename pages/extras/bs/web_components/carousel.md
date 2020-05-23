---
title: "Carousel"
category: bs-wc
permalink: /extras/bs/components/webcomponents/carousel/
---
[Documentation](https://getbootstrap.com/docs/4.4/components/carousel)

### Web Component

<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/dist/gd-sprest-bs.js"></script>
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
<script type="text/javascript" src="https://unpkg.com/gd-sprest-bs-wc/wc/dist/gd-sprest-bs.js"></script>
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