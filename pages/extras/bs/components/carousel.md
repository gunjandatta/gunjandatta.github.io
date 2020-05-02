---
layout: bs
title: "Carousel"
category: bs
permalink: /extras/bs/carousel
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/carousel">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_carousel_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the',
            'Components.({',
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