---
layout: archive
title: "Web"
category: api
permalink: /api/web
---
### Code Example

```ts
// JavaScript
var $REST = require("gd-sprest");
$REST.Web();

// TypeScript
import { Web } from "gd-sprest";
Web();
```

_Additional code examples can be found [here](/examples/web)._

### Web Creation Information

| Name | Type | Description |
| --- | --- | --- |
| Description | _string_ | The description of the new site. |
| Language | _number_ | The locale ID that specifies the language of the new site. |
| Title | _string_ | A value that specifies the title of the new site. |
| Url | _string_ | The URL leaf name of the new site. The URL must not contain the following: (_Characters: ~, ", #, %, &, *, :, <, >, ?, \, {, |, or }, String: \x7f, Consecutive Characters: . or / characters, Starting Characters: ., /, or \_ characters, Ending Characters: . or / characters)_ |
| UseSamePermissionsAsParentSite | _boolean_ | A value that specifies whether the new site will inherit permissions from its parent site. |
| WebTemplate | _string_ | A value that specifies the name of the site template to be used for creating the new site. (_Use the GetAvailableWebTemplates method to get the names of available web templates on the site._) |

#### Web Information

| Name | Type |
| --- | --- |
| Configuration | _number_ |
| Created | _string_ |
| Description | _string_ |
| Id | _string_ |
| Language | _number_ |
| LastItemModifiedDate | _string_ |
| LastItemUserModifiedDate | _string_ |
| ServerRelativeUrl | _string_ |
| Title | _string_ |
| WebTemplate | _string_ |
| WebTemplateId | _number_ |