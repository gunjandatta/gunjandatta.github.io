---
layout: archive
title: "Request Generator"
category: request
permalink: /request/
---
<style>
    /* Display above the header/footer */
    .bs .dropdown-menu {
        z-index: 5000
    }
</style>

<div id="request-generator" class="my-3"></div>

This tool will generate the request information for the SharePoint REST API. If there are any issues, please report them [here](https://github.com/gunjandatta/sprest/issues).

<script type="text/javascript">
    // Wait for the page to be loaded
    window.addEventListener("load", function () {
        // Load the REST API request generator
        var s = document.createElement("script");
        s.src = "/request/gd-sprest-generator.min.js";
        document.head.appendChild(s);
    });
</script>