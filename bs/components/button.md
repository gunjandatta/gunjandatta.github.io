---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

<div id="btn"></div>

</div>

<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/dist/gd-sprest-bs.min.js"></script>
<script type="text/javascript">
    debugger;
    // See if a button exists
    var btn = document.querySelector("#btn");
    if(btn) {
        // Render the button
        $REST.Components.Button({
            el: btn,
            text: "Button",
            onClick: function(btn) { alert("You clicked the button."); }
        });
    }
</script>