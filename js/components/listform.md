---
layout: default
---
[Back](/js/components)
## List Form
### Properties
* cacheKey - If defined, the data will be cached to the session storage.
* excludeFields - The form fields to exclude.
* fields - The form fields.
* item - The list item.
* itemId - The item id.
* listName - The list name.
* loadAttachments - Flag to deteremine if we are loading attachments.
* query - OData query used when loading an item.
* webUrl - The relative web url containing the list.

### Methods
create - Creates an instance of the list form.

/**
* Method to load the item attachments
* @param listInfo - The list form information.
*/
loadAttachments(listInfo: IListFormProps): PromiseLike<Array<Types.SP.IAttachment>>

/**
* Method to refresh the item.
* @param listInfo - The list form information.
*/
refreshItem(listInfo: IListFormResult): PromiseLike<IListFormResult>;

/**
* Method to remove attachments from an item.
*/
removeAttachments(listInfo: IListFormProps, attachmentInfo: Array<Types.SP.IAttachment>): PromiseLike<void>;

/**
* Method to render the display form template.
* @param props - The display form properties.
*/
renderDisplayForm(props: IListFormDisplayProps);

/**
* Method to render the edit/new form.
* @param props - The edit/new form properties.
*/
renderEditForm(props: IListFormEditProps): Array<IField>;

/**
* Method to render the form template.
* @param props - The form properties.
*/
renderFormTemplate(props: IListFormDisplayProps);

/**
* Method to save attachments to the item.
* @param listInfo - The list form information.
* @param attachmentInfo - The attachment files to add.
*/
saveAttachments(listInfo: IListFormProps, attachmentInfo: Array<IListFormAttachmentInfo>): PromiseLike<Array<Types.SP.IAttachment>>;

/**
* Method to save the item.
* @param list - The list.
* @param itemValues - The list item values.
*/
saveItem(info: IListFormResult, formValues: any): PromiseLike<IListFormResult>;

### Static Methods


#### List Result

### Code Example
```tsx
import { SPTypes } "gd-sprest";
import { Fabric, Field, ListForm } from "gd-sprest-js";

export const MyField = () => {
    // Get the target element
    let el = document.querySelector("#myfield");
    if(el) {
        // Render a loading dialog
        Fabric.Spinner({
            el,
            text: "Loading the field..."
        });

        // Get the list information
        (new ListInfo({ listName: "My List" })).then(info => {
            // Render the field to the element
            Field({
                el,
                controlMode: SPTypes.ControlMode.Display,
                fieldInfo: {
                    field: info.fields["MyFieldInternalName"],
                    listName: "My List",
                    name: "MyFieldInternalName"
                },
                value: "Default Value"
            });
        });
    }
}
```