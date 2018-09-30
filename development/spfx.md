---
layout: default
---

## SharePoint Framework (SPFX)

### Project Creation
After creating a SPFX project using the yomen generator `yo @microsoft/sharepoint`, install the library using this command: `npm i --save gd-sprest`.

### _spPageContextInfo
SharePoint provides the _spPageContextInfo global variable, which contains information required for the REST API request. This is only available on classic pages, and is not available on modern pages. The SPFX projects provide the [Page Context](https://dev.office.com/sharepoint/reference/spdx/sp-page-context/pagecontext) information, which must be set in the library for it to work in modern pages.

### Project Setup

#### Import the $REST or Context Information Component

```ts
import { $REST, ContextInfo } from "gd-sprest"
```

#### Set the Page Context

```ts
$REST.ContextInfo.setPageContext(this.context.pageContext);
// or
ContextInfo.setPageContext(this.context.pageContext);
```