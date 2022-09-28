---
title: "WebParts"
category: webparts
permalink: /topics/modern-webparts/
---

### Starter WebParts

The `Base` and `List` [Classic Webpart](./webparts-classic.md) types have been upgraded to SPFx. A new `List Form` webpart has been created for creating custom modern list forms.

#### Base

The base SPFx webpart inherited by all of the webparts. The webpart will require the `spfx` instance to be provided to it. This will allow the framework to configure a webpart property that renders a button to display a configuration modal. This modal will contain a form that can be further customized by the developer. The properties are stored in a `configuration` webpart property as a JSON string. This is similar to how the classic webpart would store the JSON string within the classic webpart's hidden configuration element.

**WebPart Configuration**

The base webpart doesn't have any default configuration value.

| Name | Type | Description |
| --- | --- | --- |
| | | |

#### List

The list webpart will have a configuration form pre-configured to allow the user to set the web url containing the target list, where the default would be the current web. A dropdown list will contain the lists available. A render method will be available that contains the list items.

**WebPart Configuration**

| Name | Type | Description |
| --- | --- | --- |
| ListId | _string_ | The list id. |
| ListName | _string_ | The list name. |
| WebUrl | _string_ | The web containing the list. If blank, defaults to the current web. |

#### List Form

The list form webpart inherits the list webpart component, to allow the developer to create custom modern list forms. Refer to the [Code Examples](../examples) for a walkthrough of creating custom SPFx list forms. The code example will walk through creating the custom list form extension, and helper webpart to deploy/retract the solution from a list.

**WebPart Configuration**

| Name | Type | Description |
| --- | --- | --- |
| ListId | _string_ | The list id. |
| ListName | _string_ | The list name. |
| WebUrl | _string_ | The web containing the list. If blank, defaults to the current web. |

### Code Example

This simple walkthrough will give a high-level overview of creating a basic list webpart.

##### Add Library

After creating the SPFx project and adding a webpart to it, you will first need to reference the `gd-sprest-bs` library.

```
npm i --save gd-sprest-bs
```

##### Import Library

In the webpart code file, import the `WebParts` from the library.

```ts
import { WebParts } from "gd-sprest-bs";
```

##### Set Configuration

Update the webpart property interface and ensure the `configuration` property is set. This will hold any custom properties you will need for your solution.

```ts
export interface IExampleWebPartProps {
  configuration: string;
}
```

##### Set Render Method

The render method will call the webpart component, passing the required properties.

```ts
// Render the custom form webpart
WebParts.SPFxListFormWebPart({
    envType: Environment.type, // Environment is imported from @microsoft/sp-core-library
    spfx: this as any
});
```

##### Set Render Method

The `render` property will provide the webpart dom element and configuration properties.

```ts
// Render the custom form webpart
WebParts.SPFxListFormWebPart({
    envType: Environment.type, // Environment is imported from @microsoft/sp-core-library
    spfx: this as any,
    render: (el, cfg) =&gt; {
        // Your code goes here
    }
});
```

##### Set Custom Property

The `onConfigFormRendering` property will provide the ability to add custom form properties.

```ts
import { Components } from "gd-sprest-bs";

// Render the custom form webpart
WebParts.SPFxListFormWebPart({
    envType: Environment.type, // Environment is imported from @microsoft/sp-core-library
    spfx: this as any,
    render: (el, cfg) =&gt; {
        // Your code goes here
    },
    onConfigFormRendering: (props: IFormProps) =&gt; {
        // Add a text property
        props.controls.push(
            {
                name: "PropertyName1",
                label: "Property 1 Label:",
                type: Components.FormControlTypes.TextField
            },
            {
                name: "PropertyName2",
                label: "Property 2 Label:",
                type: Components.FormControlTypes.Dropdown,
                items: [
                    {
                        text: "Item 1",
                        value: "Item1"
                    },
                    {
                        text: "Item 2",
                        value: "Item2"
                    },
                    {
                        text: "Item 3",
                        value: "Item3"
                    },
                    {
                        text: "Item 4",
                        value: "Item4"
                    },
                    {
                        text: "Item 5",
                        value: "Item5"
                    }
                ]
            } as Components.IFormControlPropsDropdown
        )
    }
});
```
