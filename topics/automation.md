---
layout: default
---
[Back](/topics)
## SharePoint Automation
The "SharePoint Configuration" class allows the developer to define configuration files, to automate the installation/unintallation of SharePoint assets. The configuration options are available through the built-in intellisense, shown below. This configuration class contains built-in methods to install and uninstall the SharePoint assets. Refer to the [Code Examples](automation-code) for examples of using this class.

![SharePoint Enumerator Types](/assets/images/intellisense-ts-types-cfg-type.png)

### [Code Examples](automation-code)
### Demo
![Automation](/assets/images/demo-spcfg.gif)

### [Configuration File](automation-cfg-file)
Intellisense is available for defining the custom properties of the various field types.

### SPConfig Class
#### Constructor
* configuration:ISPConfigProps
* webUrl?:string

#### Methods
##### install
* callback?: any
This method will create the objects defined in the configuration file. The order of creation is:
1. Fields
2. Content Types
3. Lists
4. User Custom Actions
5. Web Parts

##### uninstall
* callback?: any
This method will remove the objects defined in the configuration file. The order of removal is:
1. Web Parts
2. User Custom Actions
3. Lists
4. Content Types
5. Fields

#### Properties
* ContentTypes - A collection of content type configurations.
* CustomActionCfg - A collection of custom action configurations.
* Fields - A collection of field configurations.
* ListCfg - A collection of list configurations.
* SharePoint Configuration Types
  0. Fields
  1. Content Types
  2. Lists
  3. Site User Custom Actions
  4. Web User Custom Actions
  5. Web Parts