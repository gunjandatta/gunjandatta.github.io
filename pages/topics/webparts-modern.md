---
title: "WebParts"
category: webparts
permalink: /topics/modern-webparts/
---

## Starter WebParts

The `Base` and `List` [Classic Webpart](./webparts-classic.md) types have been upgraded to SPFx. A new `List Form` webpart has been created for creating custom modern list forms.

### Base

The base SPFx webpart inherited by all of the webparts. The webpart will require the `spfx` instance to be provided to it. This will allow the framework to configure a webpart property that renders a button to display a configuration modal. This modal will contain a form that can be further customized by the developer. The properties are stored in a `configuration` webpart property as a JSON string. This is similar to how the classic webpart would store the JSON string within the classic webpart's hidden configuration element.

**WebPart Configuration**

The base webpart doesn't have any default configuration values.

| Name | Type | Description |
| --- | --- | --- |
| | | |

#### Webpart Properties

The base properties for all webparts are shown below.

| Name | Type | Description |
| --- | --- | --- |
| envType | _number_ | The environment type. |
| onConfigSaving | _(wpCfg: ISPFxWebPartCfg) =&gt; ISPFxWebPartCfg_ | The event called prior to saving the webpart configuration. |
| onConfigSaved | _(wpCfg: ISPFxWebPartCfg) =&gt; void_ | The event called after saving the webpart configuration. |
| onConfigFormDisplaying | _() =&gt; void_ | The event called prior to the configuration modal being displayed. |
| onConfigFormFooterRendering | _(props: ITooltipGroupProps) =&gt; ITooltipGroupProps_ | Event to customize the configuration modal's footer tooltip buttons. |
| onConfigFormRendering | _(props: IFormProps) =&gt; IFormProps_ | Event to customize the configuration form. |
| onConfigFormRendered | _(form: IForm) =&gt; void_ | The event called after the configuration form is rendered. |
| onModalRendering | _(props: IModalProps) =&gt; IModalProps_ | Event to customize the configuration modal. |
| onModalRendered | _(modal: IModal) =&gt; void_ | The event called after the modal is rendered. |
| render | _(el?: HTMLElement, cfg?: ISPFxWebPartCfg) =&gt; void_ | The render event for the webpart when the page is being displayed. |
| renderEdit | _(el?: HTMLElement, cfg?: ISPFxWebPartCfg) =&gt; void_ | The render event for the webpart when the page is being edited. |
| spfx | _any_ | The SPFx instance. |

### List

The list webpart will have a configuration form pre-configured to allow the user to set the web url containing the target list, where the default would be the current web. A dropdown list will contain the lists available. A render method will be available that contains the list items.

**WebPart Configuration**

| Name | Type | Description |
| --- | --- | --- |
| ListId | _string_ | The list id. |
| ListName | _string_ | The list name. |
| WebUrl | _string_ | The web containing the list. If blank, defaults to the current web. |

#### Webpart Properties

The relevant properties for the base list webpart.

| Name | Type | Description |
| --- | --- | --- |
| listQuery | _IOData_ | The odata query to use for populating the configuration's list dropdown. |
| onListItemCAMLQuery | _(wpInfo: IListInfo, query: string) =&gt; Types.IODataQuery_ | Event to customize the list item CAML query. |
| onListItemODataQuery | _(wpInfo: IListInfo, query: Types.IODataQuery) =&gt; Types.IODataQuery_ | Event to customize the list item ODATA query. By default, the ODATA query will be used unless the CAML event is specified. |
| onListsChanged | _(wpInfo: IListInfo, list?: Types.SP.IListQuery \| Types.SP.List) =&gt; void_ | The change event for the configuration list dropdown. |
| onListsLoaded | _(wpInfo: IListInfo, lists?: [Types.SP.IListQuery \| Types.SP.List]) =&gt; [Types.SP.IListQuery | Types.SP.List]_ | Event to customize the lists to display. |
| renderItems | _(el?: HTMLElement, cfg?: ISPFxListWebPartCfg, items?: [Types.SP.IListItem \| Types.SP.IListItemQuery]) =&gt; void_ | The render event including the list items. |

### List Form

The list form webpart inherits the list webpart component, to allow the developer to create custom modern list forms. Refer to the [Code Examples](../examples) for a walkthrough of creating custom SPFx list forms. The code example will walk through creating the custom list form extension, and helper webpart to deploy/retract the solution from a list.

**WebPart Configuration**

| Name | Type | Description |
| --- | --- | --- |
| ListId | _string_ | The list id. |
| ListName | _string_ | The list name. |
| WebUrl | _string_ | The web containing the list. If blank, defaults to the current web. |

#### Webpart Properties

The relevant properties for customizing a list form are shown below.

| Name | Type | Description |
| --- | --- | --- |
| envType | _number_ | The environment type. |
| onGetListInfo | _(props: Helper.IListFormProps) => Helper.IListFormProps_ | Customize the list query that loads the item/list information. |
| onDisplayFormRendering | _(props: IListFormDisplayProps) => IListFormDisplayProps;_ | Allows you to customize the list form display properties before rendering the display form. |
| onDisplayFormRendered | _(form?: IListDisplayForm) => void;_ | Triggered after the display form is rendered. |
| onEditFooterRendering | _(props: ITooltipGroupProps) => ITooltipGroupProps;_ | Allows you to customize the footer buttons. |
| onEditFormRendering | _(props: IListFormEditProps) => IListFormEditProps;_ | Allows you to customize the list form edit properties before rendering the edit form. |
| onEditFormRendered | _(form?: IListEditForm) => void;_ | Triggered after the edit form is rendered. |
| onSaving | _(values: any) => any;_ | Allows you to customize/default the item properties before saving/updating the item. |
| onSaved | _(item: any) => void;_ | Triggered after the list item is created. |
| spfx | _any_ | The SPFx extension/webpart object. |

**onGetListInfo**

The get list information properties can be updated to control the fields to render, and allows for an OData query for expanding complex field types.

| Name | Type | Description |
| --- | --- | --- |
| contentType | _string_ | The content type name to use to render the form. |
| excludeFields | _string[]_ | The internal field names to exclude from the form. |
| fields | _string[]_ | The internal field names to render. By default, the content type will determine the fields to render. |
| itemId | _number_ | The item id to load. |
| listName | _string_ | The list name. |
| loadAttachments | _boolean_ | Flag to load and render the attachments. |
| query | _OData_ | The OData query used to load an item. This is useful for expanding lookup field types. |
| webUrl | _string_ | The web containing the list. |

**onDisplayFormRendering**

To further customize the list form, you can use the following properties.

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the element. |
| displayAttachments | _boolean_ | Flag to display the attachments. |
| groupClassName | _string_ | The class name to apply to the group element. |
| rowClassName | _string_ | The class name to apply to the row element. |
| onControlRendered | _(ctrl: IFormControl, field: Types.SP.Field) => void;_ | Triggered after the field control is rendered. |
| onControlRendering | _(ctrl: IFormControlProps, field: Types.SP.Field) => IFormControlProps | Promise<IFormControlProps>;_ | Allows you to customize the field control. |
| onFormRendered | _(form:IForm) => void_ | Triggered after the form is rendered. |

**onEditFormRendering**

To further customize the list form, you can use the following properties.

| Name | Type | Description |
| --- | --- | --- |
| className | _string_ | The class name to apply to the element. |
| displayAttachments | _boolean_ | Flag to display the attachments. |
| groupClassName | _string_ | The class name to apply to the group element. |
| rowClassName | _string_ | The class name to apply to the row element. |
| onControlRendered | _(ctrl: IFormControl, field: Types.SP.Field) => void;_ | Triggered after the field control is rendered. |
| onControlRendering | _(ctrl: IFormControlProps, field: Types.SP.Field) => IFormControlProps | Promise&lt;IFormControlProps&gt;;_ | Allows you to customize the field control. |
| onFormRendered | _(form:IForm) => void_ | Triggered after the form is rendered. |

**onEditFooterRendering**

The edit form footer event will require you to return the tooltips group properties that is passed into the event. This will allow you to modify, add and/or remove tooltip buttons from the bottom of the form.

## Code Example

This simple walkthrough will give a high-level overview of creating a basic list webpart.

### Basic Setup

#### Add Library

After creating the SPFx project and adding a webpart to it, you will first need to reference the `gd-sprest-bs` library.

```
npm i --save gd-sprest-bs
```

#### Import Library

In the webpart code file, import the `WebParts` from the library.

```ts
import { WebParts } from "gd-sprest-bs";
```

#### Set Configuration

Update the webpart property interface and ensure the `configuration` property is set. This will hold any custom properties you will need for your solution.

```ts
export interface IExampleWebPartProps {
  configuration: string;
}
```

#### Set SPFx onRender Method

The SPFx `onRender` method will incude the following code to render the webpart contents.

```ts
// Render the custom form webpart
WebParts.SPFxListFormWebPart({
    envType: Environment.type, // Environment is imported from @microsoft/sp-core-library
    spfx: this as any
});
```

### WebPart Configuration

To add a custom property, simply set the `onConfigFormRendering` event to customize the webpart's configuration form.

#### Add Custom WebPart Properties

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

### Render List Data

The list webpart will query the list and return its data to the render method. This will help ensure you do not need to write additional code to query this data.

#### Render Methods

The `render` method will provide the webpart dom element and configuration properties. The `renderItems` method will include the list items as well. The ODATA query is used by default, but a CAML query can also be provided.

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

#### Setting the CAML Query

To specify the CAML query used to get the list items for rendering the webpart, use the `onListItemCAMLQuery` event.

```ts
// Render the custom form webpart
WebParts.SPFxListFormWebPart({
    envType: Environment.type, // Environment is imported from @microsoft/sp-core-library
    spfx: this as any,
    onListItemCAMLQuery: (cfg, query) =&gt; {
        // Return the query
        return `
            <Query>
                <Where>
                    <Neq>
                        <FieldRef Name="Status" />
                        <Value Type="Text">Completed</Value>
                    </Neq>
                </Where>
            </Query>
        `.trim();
    }
});
```

#### Setting the OData Query

To specify the ODATA query used to get the list items for rendering the webpart, use the `onListItemODataQuery` event.

```ts
// Render the custom form webpart
WebParts.SPFxListFormWebPart({
    envType: Environment.type, // Environment is imported from @microsoft/sp-core-library
    spfx: this as any,
    onListItemODataQuery: (cfg, query) =&gt; {
        // Set Filter
        query.Filter = "Status ne 'Completed'";

        // Expand a user field
        query.Expand = ["Author"];

        // Set the fields to select
        query.Select = ["Id", "Title", "Status", "Author/Id", "Author/Title", "Author/EMail"];

        // Set the order
        query.OrderBy = ["Created desc"];

        // Return the query
        return query;
    }
});
```

#### Render Items Example

The `renderItems` property will provide the webpart dom element, configuration properties and list items. This event will trigger when the page is being displayed. This list item default query can be customized by using the `onListItemCAMLQuery` or `onListItemODataQuery` events.

```ts
// Render the custom form webpart
WebParts.SPFxListFormWebPart({
    envType: Environment.type, // Environment is imported from @microsoft/sp-core-library
    spfx: this as any,
    onListItemODataQuery: (cfg, query) =&gt; {
        // Set Filter
        query.Filter = "Status ne 'Completed'";

        // Expand a user field
        query.Expand = ["Author"];

        // Set the fields to select
        query.Select = ["Id", "Title", "Status", "Author/Id", "Author/Title", "Author/EMail"];

        // Set the order
        query.OrderBy = ["Created desc"];

        // Return the query
        return query;
    },
    renderItems: (el, cfg, items) =&gt; {
        // Your code goes here
    }
});
```
