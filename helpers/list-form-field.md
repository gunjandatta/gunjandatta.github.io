---
layout: default
---

## List Form Field

The list form field class is designed to handle the interactions with getting list field information.

### Methods

| Name | Return Type | Description |
| --- | --- | --- |
| loadLookupData(_info: IListFormLookupFieldInfo, queryTop?: number_) | _PromiseLike&lt;Array&lt;Types.SP.IListItemQueryResult&gt;&gt;_ | Loads the lookup reference data. |
| loadMMSData(_info: IListFormMMSFieldInfo_) | _PromiseLike&lt;Array&lt;ITermInfo&gt;&gt;_ | Loads the MMS reference data. |
| loadMMSValueField(_info: IListFormMMSFieldInfo_) | _PromiseLike&lt;Types.SP.IFieldManagedMetadata&gt;_ | Loads the MMS hidden note field. |

### IListFormFieldInfo

| Property | Type | Description |
| --- | --- | --- |
| defaultValue | _any_ | The default value. |
| field | _IFieldResult \| IFieldQueryResult_ | The list field. |
| listName | _string_ | The list name. |
| name | _string_ | The internal field name. |
| readOnly | _boolean_ | Flag indicating if the field is read-only. |
| required | _boolean_ | True indicates a required field type. |
| title | _string_ | The display name of the field. |
| type | _number_ | The field type. |
| typeAsString | _string_ | The field type as a string. |
| webUrl | _string_ | The relative web url containing the list. |

### IListFormChoiceFieldInfo

| Property | Type | Description |
| --- | --- | --- |
| choices | _Array&lt;string&gt;_ | The choices. |
| field | _IFieldChoice \| IFieldMultiChoice_ | The choice field. |
| multi | _boolean_ | True if this is a multi-choice field. |

### IListFormDateFieldInfo

| Property | Type | Description |
| --- | --- | --- |
| field | _IFieldDateTime_ | The date/time field. |
| showTime | boolean | True, if the time value is enabled. |

### IListFormLookupFieldInfo

| Property | Type | Description |
| --- | --- | --- |
| field | _IFieldLookup_ | The lookup field. |
| lookupField | _string_ | The internal name of the lookup field. |
| lookupListId**| _string_ | The lookup list id. |
| lookupWebId | _string_ | The lookup web id. |
| multi | _boolean_ | True if this is a multi-lookup field. |

### IListFormMMSFieldInfo

| Property | Type | Description |
| --- | --- | --- |
| field | _IFieldManagedMetadata_ | The mms field. |
| multi | _boolean_ | True if this is a multi-mms field. |
| termId | _string_ | The selected term id. |
| termSetId | _string_ | The term set id. |
| termStoreId | _string_ | The term store id. |

### IListFormNumberFieldInfo

| Property | Type | Description |
| --- | --- | --- |
| field | _IFieldNumber \| IFieldCurrency_ | The number field. |
| maxValue | _number_ | The max allowed number. |
| minValue | _number_ | The min allowed number. |
| showAsPercentage | _boolean_ | True, if the percentage value is enabled. |

### IListFormTextFieldInfo

| Property | Type | Description |
| --- | --- | --- |
| field | _IFieldText \| IFieldNote_ | The text or note field. |
| multiline | _boolean_ | True, if this is a note field. |
| richText | _boolean_ | True, if rich text is enabled. |
| rows | _number_ | The number of rows to display. |

### IListFormUrlFieldInfo

| Property | Type | Description |
| --- | --- | --- |
| field | _IFieldUrl_ | The url field. |

### IListFormUserFieldInfo

| Property | Type | Description |
| --- | --- | --- |
| allowGroups | _boolean_ | True, if groups are allowed. |
| field | _IFieldUser_ | The user field. |
| multi | _boolean_ | True if this is a multi-user field. |