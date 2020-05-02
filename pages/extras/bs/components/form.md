---
layout: bs
title: "Form"
category: bs
permalink: /extras/bs/form
---

### References

<div class="bs">
    <div class="list-group">
        <a class="list-group-item list-group-item-action" href="https://getbootstrap.com/docs/4.4/components/forms">Bootstrap Documentation</a>
        <a class="list-group-item list-group-item-action" href="/docs/sprest-bs/modules/_components_form_d_.html">Code Documentation</a>
    </div>
</div>

### Code Playground

<div id="playground" class="bs"></div>
<script type="text/javascript">
    // Wait for the page to load
    window.addEventListener("load", function() {
        // Create the code editor
        var editor = CodeEditor(document.getElementById("playground"), true, [
            '// Create the form',
            'Components.({',
            '\tel: app,',
            '\trows: [',
            '\t\t{',
            '\t\t\tcolumns: [',
            '\t\t\t\t{',
            '\t\t\t\t\tcontrol: {',
            '\t\t\t\t\t\tlabel: "First Name:",',
            '\t\t\t\t\t\tname: "FName",',
            '\t\t\t\t\t\ttype: $REST.Components.FormControlTypes.TextField',
            '\t\t\t\t\t}',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t},',
            '\t\t{',
            '\t\t\tcolumns: [',
            '\t\t\t\t{',
            '\t\t\t\t\tcontrol: {',
            '\t\t\t\t\t\tlabel: "Last Name:",',
            '\t\t\t\t\t\tname: "LName",',
            '\t\t\t\t\t\ttype: $REST.Components.FormControlTypes.TextField',
            '\t\t\t\t\t}',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t},',
            '\t\t{',
            '\t\t\tcolumns: [',
            '\t\t\t\t{',
            '\t\t\t\t\tcontrol: {',
            '\t\t\t\t\t\tlabel: "Choices:",',
            '\t\t\t\t\t\tname: "Choice",',
            '\t\t\t\t\t\ttype: $REST.Components.FormControlTypes.Dropdown,',
            '\t\t\t\t\t\titems: [',
            '\t\t\t\t\t\t\t{ text: "Choice 1", value: "1" },',
            '\t\t\t\t\t\t\t{ text: "Choice 2", value: "2" },',
            '\t\t\t\t\t\t\t{ text: "Choice 3", value: "3" },',
            '\t\t\t\t\t\t\t{ text: "Choice 4", value: "4" },',
            '\t\t\t\t\t\t\t{ text: "Choice 5", value: "5" }',
            '\t\t\t\t\t\t]',
            '\t\t\t\t\t}',
            '\t\t\t\t}',
            '\t\t\t]',
            '\t\t}',
            '\t]',
            '});'
        ].join('\n'));
    });
</script>