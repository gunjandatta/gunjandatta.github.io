---
layout: splash
permalink: /bs/code/
---

## Code Playground

The 'app' global variable is a reference to the output window's main element. Click the 'Run' button when you are ready to update the output panel w/ the code from the editor.

<style>
    #editor {
        min-height: 60vh;
        min-width: 40vw;
    }
</style>
<div id="playground" class="bs"></div>
<script src="/code/dist/code-editor.js"></script>
<script type="text/javascript">
    // Create the code editor
    CodeEditor(document.getElementById("playground"));
</script>