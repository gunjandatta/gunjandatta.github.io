document.addEventListener("load", function() {
    var el = null;

    // Load the library
    var load = function() {
        if($REST) { return; }

        // Add the library
        var s = document.createElement("script");
        s.src = "https://rawgit.com/gunjandatta/sprest-bs/master/dist/gd-sprest-bs.min.js";
        document.head.appendChild(s);
    }

    debugger;
    // See if a button exists
    if(el = document.querySelector("#btn")) {
        // Render the button
        $REST.Components.Button({
            el: el,
            text: "Button",
            onClick: function(btn) { alert("You clicked the button."); }
        });
    }
});
