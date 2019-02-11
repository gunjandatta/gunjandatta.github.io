(function () {
    // Get the tables
    let tables = document.querySelectorAll("table");
    for (let i = 0; i < tables.length; i++) {
        let table = tables[i];

        // Ensure the class is applied
        if (table.classList.contains("table")) { continue; }

        // Add the class
        table.classList.add("table");
    }
})();