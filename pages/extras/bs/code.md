---
layout: archive
title: "Code Playground"
category: 
permalink: /extras/bs/code
---

### Code Playground

The 'app' global variable is a reference to the output window's main element. Click the 'Run' button when you are ready to update the output panel w/ the code from the editor.

<div id="playground"></div>
<script src="https://raw.githubusercontent.com/gunjandatta/code/master/dist/code-editor.min.js"></script>
<script type="text/javascript">
    // Create the code editor
    CodeEditor(document.getElementById("playground"));
</script>