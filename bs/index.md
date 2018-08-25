---
layout: default
---
<div class="page-info" markdown="1">

[Back](/)
## Bootstrap

</div>

This library extends the [Bootstrap Library](https://getbootstrap.com/), to help create modern components in SharePoint 2013/Online (Classic) environments. Reference the [Bootstrap library](https://gunjandatta.github.io/bs) for information on this library, or [SharePoint REST Framework](https://gunjandatta.github.io) for a full overview of the framework.

_This library is in development. Feel free to try it out, and provide feedback. If you like this library, please [Star it](https://github.com/gunjandatta/sprest-bs). If you want specific components requested, add an issue and I'll get to it asap._

### Installation
```
npm i --save gd-sprest-bs
```

### Reference through RawGit
```
<script type="text/javascript" src="https://rawgit.com/gunjandatta/sprest-bs/master/dist/gd-sprest-bs.min.js"></script>
```

### Components
- [Alert](components/alert)
- [Badge](components/badge)
- [Breadcrumb](components/breadcrumb)
- [Button](components/button)
- [Button Group](components/buttongroup)
- [Card](components/card)
- [Card Group](components/cardgroup)
- [Dropdown](components/dropdown)
- [Form](components/form)
- [Input Group](components/inputgroup)
- [Modal](components/modal)
- [Navigation](components/navigation)

### WebParts
- [WebPart](webparts/webpart)
- [List](webparts/list)
- [Search](webparts/search)
- [Tabs](webparts/tabs)
- [Taxonomy](webparts/taxonomy)

### [WebPack Configuration](webpack)

### Size of Library
This package includes the gd-sprest core library and the full bootstrap css/javascript library.
- Uncompressed: _1.285MB_
- Minified: _526KB_