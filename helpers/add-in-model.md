---
layout: default
---
[Back](/helpers)
## Add-In Model
The following helper methods are available for solutions utilizing the Add-In Model.
### Helper Methods
#### copyFileToHostWeb
Copies a file from the app web to the host web. The file will automatically be checked-out, checked-in and published.
* fileUrl - The relative url of the source file to the app web.
* dstFolder - The relative url of the destination folder to the host web, or destination folder.
* overwriteFl - Flag to overwrite the file if it exists.
* rootWebFl - Flag to target the root web of the site collection, the host web otherwise.

#### copyFilesToHostWeb
Copies files from an app web to the host web. The files will automatically be checked-out, checked-in and published.
* fileUrls - The relative urls of the source files to the app web.
* dstFolders - The relative urls of the destination folders to the host web.
* overwriteFl - Flag to overwrite the file if it exists.
* rootWebFl - Flag to target the root web of the site collection, the host web otherwise.

#### createSubFolders
Creates sub-folders.
* folder - The folder to create the sub-folders in.
* subFolderUrl - The relative url of the sub-folder to create.

#### getFolder
Gets the folder, and optionally creates it if it doesn't exist.
* web - The web to creation the folder in.
* folderUrl - The relative url of the destination folder to the web.
* createFl - Flag to create the sub-folder(s) if it doesn't exist.

#### removeEmptyFolders
Removes empty folders.
* web - The web to creation the folder in.
* folderUrls - The relative urls of the destination folders to the web.

#### removeFile
Remove a file from a web.
* web - The web to creation the folder in.
* fileUrl - The relative url of the file to the web.

#### removeFiles
Removes files from a web.
* web - The web to creation the folder in.
* fileUrls - The relative urls of the files to the web.