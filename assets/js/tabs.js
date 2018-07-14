// Initialize the tabs
function initTabs(elTab) {
    // Get the elements
    var elTabItems = elTab.querySelectorAll(".tab-items > .tab-item");
    var elTabContent = elTab.querySelectorAll(".tab-content");

    // Select the first tab by default
    let selectedTab = elTab.querySelector(".tab-item.selected");
    if (selectedTab == null) { elTabItems[0].classList.add("selected"); }
    let selectedTabContent = elTab.querySelector(".tab-content.selected");
    if (selectedTabContent == null) { elTabItems[0].classList.add("selected"); }

    // Parse the tab items
    for (var i = 0; i < elTabItems.length; i++) {
        let elTabItem = elTabItems[i];

        // Add the index
        elTabItem.setAttribute("data-idx", i);

        // Add a click event
        elTabItem.addEventListener("click", function (ev) {
            let selectedTab = ev.currentTarget;
            let tabIdx = selectedTab.getAttribute("data-idx");

            // Parse the selected tabs items
            var selectedTabItems = elTab.querySelectorAll(".tab-item.selected");
            for (var i = 0; i < selectedTabItems.length; i++) {
                // Remove the class
                selectedTabItems[i].classList.remove("selected");
            }

            // Select this tab
            selectedTab.classList.add("selected");

            // Parse the selected tab content elements
            var selectedTabs = elTab.querySelectorAll(".tab-content.selected");
            for (var i = 0; i < selectedTabs.length; i++) {
                // Remove the class
                selectedTabs[i].classList.remove("selected");
            }

            // Ensure tab content exists for the selected index
            if (elTabContent[tabIdx]) {
                // Select this tab
                elTabContent[tabIdx].classList.add("selected");
            }
        });
    }
}

// Parse the tabs
var elTabs = document.querySelectorAll(".tabs");
for (var i = 0; i < elTabs.length; i++) {
    // Inititalize the tabs
    initTabs(elTabs[i]);
}