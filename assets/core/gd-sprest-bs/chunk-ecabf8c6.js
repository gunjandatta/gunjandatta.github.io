import{a as t}from"./chunk-7e340ae1.js";class e{render(){if(this.el.hasAttribute("data-init"))return;let e=t(this.el,{className:this.className,dropLeft:this.dropLeft,dropRight:this.dropRight,dropUp:this.dropUp,el:this.el,formFl:this.formFl,id:this.id,isSplit:this.isSplit,label:this.label,menuOnly:this.menuOnly,multi:this.multi,setLabelToValue:this.setLabelToValue,type:this.type,value:this.value});this.el.removeAttribute("id"),GD.Components.Dropdown(e),this.el.setAttribute("data-init","true")}static get is(){return"bs-dropdown"}static get properties(){return{className:{type:String,attr:"class-name"},dropLeft:{type:Boolean,attr:"drop-left"},dropRight:{type:Boolean,attr:"drop-right"},dropUp:{type:Boolean,attr:"drop-up"},el:{elementRef:!0},formFl:{type:Boolean,attr:"form-fl"},id:{type:String,attr:"id"},isSplit:{type:Boolean,attr:"is-split"},label:{type:String,attr:"label"},menuOnly:{type:Boolean,attr:"menu-only"},multi:{type:Boolean,attr:"multi"},setLabelToValue:{type:Boolean,attr:"set-label-to-value"},type:{type:Number,attr:"type"},value:{type:String,attr:"value"}}}}export{e as a};