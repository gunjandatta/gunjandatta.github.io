// Wait for the document to be loaded
window.addEventListener("load", function () {
    // Get the bootstrap elements
    var el = document.querySelectorAll(".bs");
    for (var i = 0; i < el.length; i++) {
        // Skip the web components
        if (el[i].tagName.toLowerCase().startsWith("bs")) { continue; }

        // Skip demo elements
        let elId = (el[i].id || "").toLowerCase();
        if (elId.indexOf("demo") > 0) { continue; }

        // Remove the class
        el[i].classList.remove("bs");
    }
});