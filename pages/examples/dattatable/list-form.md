---
title: "List Form"
category: dattatable
permalink: /examples/dattatable/list-form/
---
The list form component allows you to generate a new/edit/display form for a list item, using bootstrap.

### Create Form Properties

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| __Properties__ |
| elForm | HTMLElement | No | Will render the form to the element, if provided. |
| info | ListFormResult | No | Will use the list form result information to load the form, otherwise it will load this information. |
| tabInfo | ItemFormTabInfo | No | Will render tabs, if provided. |
| useModal | boolean | No | Will render in a modal by default, otherwise an offcanvas slideout. |
| webUrl | string | No | The site containing the list. |
| __Events__ |
| onCreateEditForm | (props) => props | No | Triggered before the form is rendered, allowing you to customize it. |
| onFormButtonsRendering | (buttons) => buttons | No | Triggered before the form buttons are rendering, allow you to add/remove/edit them. |
| onFormRendered | (form) => void | No | Triggered after the form is rendered. |
| onGetListInfo | (props) => props | No | Triggered before the list information is queried, allowing you to customize it. |
| onResetForm | () => void | No | Triggered before the form is rendered. |
| onSave | (values) => values \| PromiseLike&lt;values&gt; | No | Triggered before an item is saved, so you can futher customize it. |
| onSaveError | (error) => void | No | Triggered when saving the item fails. |
| onSetFooter | (element) => void | No | Triggered after the footer is rendered. |
| onSetHeader | (element) => void | No | Triggered after the header is rendered. |
| onShowForm | (form) => void | No | Triggered when a form is displayed. |
| onUpdate | (item) => void | No | Triggered after the item is saved/updated. |
| onValidation | (values, isValid: boolean) => boolean \| PromiseLike&lt;boolean&gt; | No | Triggered after validation is completed, allowing you to add additional validation and/or cancel the save/update. |

### Edit Form Properties

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| __Properties__ |
| elForm | HTMLElement | No | Will render the form to the element, if provided. |
| info | ListFormResult | No | Will use the list form result information to load the form, otherwise it will load this information. |
| itemId | number | Yes | 
| tabInfo | ItemFormTabInfo | No | Will render tabs, if provided. |
| useModal | boolean | No | Will render in a modal by default, otherwise an offcanvas slideout. |
| webUrl | string | No | The site containing the list. |
| __Events__ |
| onCreateEditForm | (props) => props | No | Triggered before the form is rendered, allowing you to customize it. |
| onFormButtonsRendering | (buttons) => buttons | No | Triggered before the form buttons are rendering, allow you to add/remove/edit them. |
| onFormRendered | (form) => void | No | Triggered after the form is rendered. |
| onGetListInfo | (props) => props | No | Triggered before the list information is queried, allowing you to customize it. |
| onResetForm | () => void | No | Triggered before the form is rendered. |
| onSave | (values) => values \| PromiseLike&lt;values&gt; | No | Triggered before an item is saved, so you can futher customize it. |
| onSaveError | (error) => void | No | Triggered when saving the item fails. |
| onSetFooter | (element) => void | No | Triggered after the footer is rendered. |
| onSetHeader | (element) => void | No | Triggered after the header is rendered. |
| onShowForm | (form) => void | No | Triggered when a form is displayed. |
| onUpdate | (item) => void | No | Triggered after the item is saved/updated. |
| onValidation | (values, isValid: boolean) => boolean \| PromiseLike&lt;boolean&gt; | No | Triggered after validation is completed, allowing you to add additional validation and/or cancel the save/update. |

### View Form Properties

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| __Properties__ |
| elForm | HTMLElement | No | Will render the form to the element, if provided. |
| info | ListFormResult | No | Will use the list form result information to load the form, otherwise it will load this information. |
| itemId | number | Yes | 
| tabInfo | ItemFormTabInfo | No | Will render tabs, if provided. |
| useModal | boolean | No | Will render in a modal by default, otherwise an offcanvas slideout. |
| webUrl | string | No | The site containing the list. |
| __Events__ |
| onCreateViewForm | (props) => props | No | Triggered before the form is rendered, allowing you to customize it. |
| onFormButtonsRendering | (buttons) => buttons | No | Triggered before the form buttons are rendering, allow you to add/remove/edit them. |
| onFormRendered | (form) => void | No | Triggered after the form is rendered. |
| onGetListInfo | (props) => props | No | Triggered before the list information is queried, allowing you to customize it. |
| onResetForm | () => void | No | Triggered before the form is rendered. |
| onSetFooter | (element) => void | No | Triggered after the footer is rendered. |
| onSetHeader | (element) => void | No | Triggered after the header is rendered. |
| onShowForm | (form) => void | No | Triggered when a form is displayed. |