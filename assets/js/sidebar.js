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
    var headers = getElements(elMain, "h1")
        .concat(getElements(elMain, "h2"));

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
                // Wait for the click event to complete
                setTimeout(function () {
                    // Set the offset of the navbar height
                    // 4rem = 4*16 => pixels
                    var offset = 16 * 4;

                    // Ensure we need to offset the element
                    if (document.body.scrollTop >= offset) {
                        // Set the offset
                        document.body.scrollTop -= offset;
                    }
                }, 50);
            });
        }
    }
})();