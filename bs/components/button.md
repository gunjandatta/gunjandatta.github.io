---
layout: default
---
<div class="page-info" markdown="1">

[Back](/bs)

<div id="btn"></div>

</div>
<script type="text/javascript">
debugger;
document.addEventListener("load", function() {
    // Render the button
    $REST.Components.Button({
        el: document.querySelector("#btn"),
        text: "Button"
    });
});
</script>
