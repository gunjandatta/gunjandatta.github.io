import{a as t}from"./chunk-7e340ae1.js";class e{render(){if(this.el.hasAttribute("data-init"))return;let e=t(this.el,{className:this.className,el:this.el,isMultiple:this.isMultiple});GD.Components.ProgressGroup(e),this.el.setAttribute("data-init","true")}static get is(){return"bs-progress-group"}static get properties(){return{className:{type:String,attr:"class-name"},el:{elementRef:!0},isMultiple:{type:Boolean,attr:"is-multiple"}}}}export{e as a};