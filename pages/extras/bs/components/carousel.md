---
layout: bs
title: "Carousel"
category: bs
permalink: /extras/bs/components/carousel/
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/carousel">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_carousel_d_.html">Code Documentation</a>
    </div>
</div>

#### React

```tsx
import * as React from "react";
import { Carousel } from "gd-sprest-bsx";

export class IDemo extends React.Component {
    // Render the component
    render() {
        return (
            <Carousel
                enableControls={true}
                enableIndicators={true}
                id="carouselDemo"
                items={[
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
                ]}
            />
        );
    }
}
```

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the carousel',
            'Components.Carousel({',
            '\tel: app,',
            '\tenableControls: true,',
            '\tenableIndicators: true,',
            '\tid: "carouselDemo",',
            '\titems: [',
            '\t\t{',
            '\t\t\tcaptions: "<h5>First Slide</h5>",',
            '\t\t\timageUrl: "https://via.placeholder.com/400x200",',
            '\t\t\timageAlt: "First Slide",',
            '\t\t\tisActive: true',
            '\t\t},',
            '\t\t{',
            '\t\t\tcaptions: "<h5>Second Slide</h5>",',
            '\t\t\timageUrl: "https://via.placeholder.com/400x200",',
            '\t\t\timageAlt: "Second Slide"',
            '\t\t},',
            '\t\t{',
            '\t\t\tcaptions: "<h5>Third Slide</h5>",',
            '\t\t\timageUrl: "https://via.placeholder.com/400x200",',
            '\t\t\timageAlt: "Third Slide"',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>