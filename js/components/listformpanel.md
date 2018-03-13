---
layout: default
---
[Back](/js/components)
## List Form Panel
The list form panel component will render a list form within a panel, based on the input parameters. A save or edit button will be displayed, based on the control mode of the form.
### Input Parameters

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name. |
| controlMode | _number_ | The form control mode. |
| el | _HtmlElement_ | The element to render the list form panel to. |
| item | _any_ | The list form values. |
| panelIsBlocking | _boolean_ | True to make the panel blocking. |
| panelTitle | _string_ | The panel title. |
| panelType | _number_ | The panel type. |

### Methods

| Name | Parameters | Description |
| --- | --- | --- |
| getForm | | Returns a display or edit list form. |
| show | _controlMode: number_ | Displays the list form panel. |

### Code Example
#### JavaScript
#### TypeScript