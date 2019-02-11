---
layout: page
---

## React Item Component

The item form component queries the target list's default content type, in order to render the form fields based on the configuration.

### Configuration
* _**className**_
    The class name to apply to the item form.
* _**controlMode**_
    * The mode to render the item form in.
    * _**Control Modes**_
        * _Display - Displays the field value as a string_
        * _Edit - Does not default the field value, based on the default value defined in SharePoint_
        * _New - Defaults the field value, based on the default value defined in SharePoint_
* _**excludeFields**_
    * An array of string representing the internal field names to exclude from the form.
* _**fields**_
    _If this values is note defined, then the fields will be loaded from the list's default content types._
    * An array of field information objects representing the fields to display in the form.
    * controlMode - The control mode to render the field in.
    * name - The internal field name.
    * onChange - The field value change event.
    * onRender - The render method to override the form field.
* _**item**_
    * An object representing the list item.
* _**listName**_
    * The list name
* _**onAttachmentAdded**_
    * Optional event triggered when an attachment is added.
* _**onAttachmentClick**_
    * Optional event triggered when an attachment is clicked.
* _**onAttachmentRender**_
    * Optional event to override the rendering of an attachment.
* _**onFieldRender**_
    * Optional event to override the field component being rendered.
* _**onRender**_
    * Optional event used to customize the form.
    * _The FormFields property must be set for the save method to work._
* _**onRenderAttachments**_
    * Optional event to override the rendering of the attachments.
* _**query**_
    * The OData query, used when refreshing the item.
* _**queryTop**_
    * Parameter to default the query's top value for field queries.
* _**readOnlyFields**_
    * An array of string representing the internal field names to make "read-only" in the form.
* _**showAttachments**_
    * Flag to display the item attachments.
* _**webUrl**_
    * Optional string representing the relative url of the site containing the list.

### Global Methods/Variables
* **AttachmentField**
    * Reference to the attachment's field component.
* **ControlMode**
    * Reference to the form's control mode.
* **FormFields**
    * Reference to the form fields.
    * _This object fields can be accessed by: FormFields[internalFieldName]_
* **ItemQuery**
    * Reference to the form's item query.
* **List**
    * Reference to the form's list.
* **getFormValues()**
    * Method to return the form's field values.
* **refresh()**
    * Method to refresh the item form.
* **save()**
    * Method to save the form field.
* **update(itemValues)**
    * Method to update the item.

### TypeScript

```tsx
import * as React from "react";
import { ItemForm } from "gd-sprest-react";
import { PrimaryButton } from "office-ui-fabric-react";

class MyForm extends React.Component<null, null> {
    private _form:ItemForm = null;

    // Render the component
    render() {
        return (
            <div>
                <ItemForm
                    listName="Site Assets"
                    ref={form => { this._form = form; }}
                />
                <PrimaryButton
                    text="Save"
                    onClick={this.saveForm}
                />
            </div>
        )
    }

    // Method to save the form
    private saveForm = (ev: React.MouseEvent<HtmlButtonElement>) => {
        // Prevent postback
        ev.preventDefault();

        // Show a saving dialog
        SP.SOD.execute("sp.ui.dialog.js", "SP.UI.ModalDialog.showWaitScreenWithNoClose", "Saving the Item", "This dialog will close after the item is saved");

        // Save the form
        this._form.save().then(item => {
            // Close the save dialog
            SP.SOD.execute("sp.ui.dialog.js", "SP.UI.ModalDialog.commonDialogClose");
        });
    }
}
```