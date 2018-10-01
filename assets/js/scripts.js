// Wait for the document to be loaded
window.addEventListener("load", function () {
    // Get the bootstrap elements
    var el = document.querySelectorAll(".bs");
    for (var i = 0; i < el.length; i++) {
        // Remove the class
        el[i].classList.remove("bs");
        console.log("Removed class");
    }
});