// Sidebar
(function () {
    // Method to get the elements
    function getElements(el, selector) {
        let elements = [];

        // Get the elements
        var headers = el.querySelectorAll(selector);

        // Update the array
        for (var i = 0; i < headers.length; i++) { elements.push(headers[i]); }

        // Return the elements
        return elements;
    }


    // Get the main element
    var elMain = document.querySelector(".main");
    if (elMain == null) {
        // Log
        console.error("Main element not found.");
        return;
    }

    // Get the sidebar nav
    var elNav = document.querySelector(".sidebar .nav");
    if (elNav == null) {
        // Log
        console.error("Nav not found.");
        return;
    }

    // Get the elements
    var headers = getElements(elMain, "h1");
    if (headers.length == 0) {
        // Search h2 and h3 sizes
        headers = getElements(elMain, "h2")
            .concat(getElements(elMain, "h3"));
    } else {
        // Add 1 more level
        headers = headers.concat(getElements(elMain, "h2"));
    }

    // Set the isRoot flag
    var isRoot = true;
    var path = document.location.pathname.replace(/\/$/, '').split('/');
    for (var i = 0; i < path.length; i++) {
        // See if a value exists
        if (path[i]) {
            // Set the flag
            isRoot = false;
            break;
        }
    }

    // See if this is not the home page
    if (!isRoot) {
        // Create the link
        var elLink = document.createElement("li");
        elLink.className = "nav-item";
        elNav.appendChild(elLink);

        // Remove the current page
        path.splice(path.length - 1, 1);

        // See if we are skipping the parent
        switch (path[path.length - 1].toLowerCase()) {
            case "components":
            case "fabric":
            case "webparts":
                // Skip the parent page
                path.splice(path.length - 1, 1);
                break;
        }

        // Add the link
        var link = document.createElement("a");
        link.className = "nav-link";
        link.href = path.join('/') || "/";
        link.innerHTML = "Back";
        elLink.appendChild(link);
    }

    // Parse the headers
    for (var i = 0; i < headers.length; i++) {
        var header = headers[i];

        // Ensure an id exists
        if (header.id) {
            // Create the link
            var elLink = document.createElement("li");
            elLink.className = "nav-item";
            elNav.appendChild(elLink);

            // Add the link
            var link = document.createElement("a");
            link.className = "nav-link";
            link.href = "#" + header.id;
            link.innerHTML = header.innerHTML;
            elLink.appendChild(link);

            // Set the click event
            link.addEventListener("click", function (ev) {
                // Get the target element
                var elId = ev.currentTarget.href.split("#")[1];
                var elTarget = elId ? document.querySelector("#" + elId) : null;
                if (elTarget == null) { return; }

                // Wait for the click event to complete
                setTimeout(function () {
                    // Set the offset of the navbar height
                    // 5rem = 4*16 => pixels
                    var offset = 16 * 5;

                    // See if we need to adjust the element
                    if (elTarget.getBoundingClientRect().top < offset) {
                        // Ensure we need to offset the element
                        if (document.body.scrollTop >= offset) {
                            // Set the offset
                            document.body.scrollTop -= offset;
                        } else {
                            // Reset it
                            document.body.scrollTop = 0;
                        }
                    }
                }, 50);
            });
        }
    }
})();