import{a as f}from"./bootstrap-32fd8995.js";import{_ as c}from"./lang-643e0c49.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{r as m,o as a,c as n,a as t,t as r,f as _,F as v,b,e as u,y as V}from"./runtime-core.esm-bundler-a9e64527.js";const x={data(){return{finalValue:1,virtualStock:null,allSelected:!0,isLoading:!1,keys:[...[1,2,3].map(e=>({identifier:e,value:e})),...[4,5,6].map(e=>({identifier:e,value:e})),...[7,8,9].map(e=>({identifier:e,value:e})),{identifier:"backspace",icon:"la-backspace"},{identifier:0,value:0},{identifier:"next",icon:"la-share"}]}},mounted(){this.$popup.event.subscribe(e=>{e.event==="click-overlay"&&this.closePopup()}),this.$popupParams.quantity&&(this.finalValue=this.$popupParams.quantity),document.addEventListener("keyup",this.handleKeyPress)},destroyed(){document.removeEventListener("keypress",this.handleKeyPress)},methods:{__:c,handleKeyPress(e){e.keyCode===13&&this.inputValue({identifier:"next"})},closePopup(){this.$popupParams.reject(!1),this.$popup.close()},inputValue(e){if(e.identifier==="next"){this.$popupParams;const i=parseFloat(this.finalValue);if(i===0)return f.error(c("Please provide a quantity")).subscribe();this.resolve({quantity:i})}else e.identifier==="backspace"?this.allSelected?(this.finalValue=0,this.allSelected=!1):(this.finalValue=this.finalValue.toString(),this.finalValue=this.finalValue.substr(0,this.finalValue.length-1)||0):this.allSelected?(this.finalValue=e.value,this.finalValue=parseFloat(this.finalValue),this.allSelected=!1):(this.finalValue+=""+e.value,this.finalValue=parseFloat(this.finalValue))},resolve(e){this.$popupParams.resolve(e),this.$popup.close()}}},y={class:"ns-box shadow min-h-2/5-screen w-3/4-screen md:w-3/5-screen lg:w-3/5-screen xl:w-2/5-screen relative"},P={class:"flex-shrink-0 flex p-2 border-b ns-box-header justify-between items-center"},k={class:"text-xl font-bold text-primary text-center"},g={id:"screen",class:"h-16 border-b ns-box-body flex items-center justify-center"},w={class:"font-bold text-3xl"},S={id:"numpad",class:"grid grid-flow-row grid-cols-3 grid-rows-3"},$=["onClick"],C={key:0};function F(e,i,j,q,o,l){const d=m("ns-close-button");return a(),n("div",y,[t("div",P,[t("h1",k,r(l.__("Define Quantity")),1),t("div",null,[_(d,{onClick:i[0]||(i[0]=s=>l.closePopup())})])]),t("div",g,[t("h1",w,r(o.finalValue),1)]),t("div",S,[(a(!0),n(v,null,b(o.keys,(s,p)=>(a(),n("div",{onClick:B=>l.inputValue(s),key:p,class:"text-xl font-bold border ns-numpad-key h-24 flex items-center justify-center cursor-pointer"},[s.value!==void 0?(a(),n("span",C,r(s.value),1)):u("",!0),s.icon?(a(),n("i",{key:1,class:V(["las",s.icon])},null,2)):u("",!0)],8,$))),128))])])}const D=h(x,[["render",F]]);export{D as n};
