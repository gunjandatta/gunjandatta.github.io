import{a as t}from"./chunk-b675a82d.js";class e{render(){if(this.el.hasAttribute("data-init"))return;let e=t(this.el,{className:this.className,el:this.el,isAnimated:this.isAnimated,isStriped:this.isStriped,label:this.label,max:this.max,min:this.min,size:this.size});GD.Components.Progress(e),this.el.setAttribute("data-init","true")}static get is(){return"bs-progress"}static get properties(){return{className:{type:String,attr:"class-name"},el:{elementRef:!0},isAnimated:{type:Boolean,attr:"is-animated"},isStriped:{type:Boolean,attr:"is-striped"},label:{type:String,attr:"label"},max:{type:Number,attr:"max"},min:{type:Number,attr:"min"},size:{type:Number,attr:"size"}}}}export{e as a};