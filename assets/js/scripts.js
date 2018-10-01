// Wait for the document to be loaded
window.addEventListener("load", function () {
    // Get the bootstrap elements
    var el = document.querySelectorAll(".bs");
    for (var i = 0; i < el.length; i++) {
        // Skip the web components
        if (el[i].tagName.toLowerCase().startsWith("bs")) { continue; }

        // Parse the children
        for (var j = 0; j < el[i].children.length; j++) {
            var elChild = el[i].children[j];
            var elChildId = (elChild.id || "").toLowerCase();

            // See if this is a demo element
            if (elChildId.indexOf("demo") > 0) {
                // Set the class name
                elChild.classList.add("bs");
                break;
            }
        }

        // Remove the class
        el[i].classList.remove("bs");
    }
});