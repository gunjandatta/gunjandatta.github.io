// Parse the tabs
var elTabs = document.querySelectorAll(".tab-item");
for (var i = 0; i < elTabs.length; i++) {
    // Add a click event
    elTabs[i].addEventListener("click", function (ev) {
        let tab = ev.currentTarget;

        // Clear the selected tabs
        let selectedTabs = tab.parentElement.querySelectorAll(".selected");
        for (var j = 0; j < selectedTabs.length; j++) {
            // Clear the class
            selectedTabs[j].classList.remove("selected");
        }

        // Set the class name
        tab.classList.add("selected");
    });
}