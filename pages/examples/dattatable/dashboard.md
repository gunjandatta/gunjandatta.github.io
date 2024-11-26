---
title: "Dashboard"
category: dattatable
permalink: /examples/dattatable/dashboard/
---
The dashboard component allows you to generate an accordion, datatable, or tiles. It has built-in options for a jumbotron, navigation, sub-navigation, footer, filtering, paging and search. You can reference the [Basic Dashboard](https://github.com/gunjandatta/sp-dashboard/wiki) solution example for a step-by-step guidance for using this component.

### Constructor

| Name | Type | Required? | Description |
| --- | --- | --- | --- |
| __Properties__ |
| el | HtmlElement | Yes | The element to render the dashboard to. |
| hideFooter | boolean | No | True to hide the footer. |
| hideHeader | boolean | No | True to hide the header. |
| hideNavigation | boolean | No | True to hide the navigation. |
| hideSubNavigation | boolean | No | True to hide the sub-navigation. |
| items | any[] | No | The data for the dashboard. |
| useModal | boolean | No | True to use a modal for the item form. |
| __Events__ |
| onRendered | (el) => void | No | Triggered after the dashboard is rendered. |
| __Accordion__ |
| If set, the dashboard will render the items in an accordion. |
| bodyFields | string[] | No | |
| bodyTemplate | string | No | |
| filterFields | string[] | No | |
| paginationLimit | number | No | |
| showPagination | boolean | No | False to hide pagination. |
| titleFields | string[] | No | |
| titleTemplate | string | No | |
| __Accordion Events__ |
| onItemBodyRender | (el, item) => void | No | Triggered when the accordion body is rendered. |
| onItemClick | (el, item) => void | No | Triggered when the accordion item is clicked. |
| onItemHeaderRendered | (el, item) => void | No | Triggered when the header is rendered. |
| onItemRendered | (el, item) => void | No | Triggered when the item is rendered. |
| onPaginationClick | (pageNumber) => void | No | Triggered when the pagination is clicked. |
| onPaginationRender | (el) => void | No | Triggered when the pagination is rendered. |
| __Footer__ |
| className | string | No | Class names to apply to the footer element. |
| items | NavbarItem[] | No | Navigation items to display on the left side. |
| itemsEnd | NavbarItem[] | No | Navigation items to display on the right side. |
| onRendering | (props) => void | No | Triggered before the footer is rendered. |
| onRendered | (el) => void | No | Triggered after the footer is rendered. |
| __Filters__ |
| __Header__ |
| __Navigation__ |
| __Sub Navigation__ |
| __Table__ |
| If set, the dashboard will render the items in an datatable. |
| __Tiles__ |
| If set, the dashboard will render the items as tiles. |


### Properties