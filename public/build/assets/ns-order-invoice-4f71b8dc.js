import{n as h}from"./currency-4e1ba4e0.js";import{_ as x}from"./lang-643e0c49.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";import{r as m,o as n,c as l,a as t,f as u,w as b,t as e,e as a,F as o,b as _}from"./runtime-core.esm-bundler-a9e64527.js";const p={props:["order","billing","shipping"],methods:{__:x,nsCurrency:h,printTable(){this.$htmlToPaper("invoice-container")}}},f={class:"shadow ns-box"},w={class:"head p-2 ns-box-title flex justify-between border-b"},v={class:"-mx-2 flex flex-wrap"},g={class:"px-2"},C=t("i",{class:"las la-print"},null,-1),k={class:"body flex flex-col px-2",id:"invoice-container"},j={id:"invoice-header",class:"flex -mx-2 flex-wrap"},D={class:"w-full print:w-1/3 md:w-1/3 px-2"},S={class:"p-2"},T={class:"font-semibold text-xl text-primary border-b border-info-primary py-2"},P={class:"details"},N={class:"my-1"},B={class:"flex justify-between text-secondary text-sm mb-1"},V={class:"font-semibold"},A={class:"flex justify-between text-secondary text-sm mb-1"},E={class:"font-semibold"},F={class:"flex justify-between text-secondary text-sm mb-1"},O={class:"font-semibold"},q={class:"flex justify-between text-secondary text-sm mb-1"},I={class:"font-semibold"},L={class:"flex justify-between text-secondary text-sm mb-1"},Q={class:"font-semibold"},U={class:"flex justify-between text-secondary text-sm mb-1"},z={class:"font-semibold"},G={key:0,class:"flex justify-between text-secondary text-sm mb-1"},H={class:"font-semibold"},J={class:"w-full print:w-1/3 md:w-1/3 px-2"},K={class:"p-2"},M={class:"font-semibold text-xl text-primary border-b border-info-primary py-2"},R={class:"details"},W={class:"my-1"},X={class:"font-semibold"},Y={class:"w-full print:w-1/3 md:w-1/3 px-2"},Z={class:"p-2"},$={class:"font-semibold text-xl text-primary border-b border-info-primary py-2"},tt={class:"details"},et={class:"my-1"},st={class:"font-semibold"},rt={class:"table w-full my-4"},dt={class:"table ns-table w-full"},nt={class:"text-secondary"},lt={width:"400",class:"p-2 border"},at={width:"200",class:"p-2 border"},ot={width:"200",class:"p-2 border"},_t={width:"200",class:"p-2 border"},ct={width:"200",class:"p-2 border"},it={width:"200",class:"p-2 border"},ht={class:"p-2 border"},xt={class:"text-primary"},yt={class:"text-sm text-secondary"},mt={class:"p-2 border text-center text-primary"},ut={class:"p-2 border text-center text-primary"},bt={class:"p-2 border text-center text-primary"},pt={class:"p-2 border text-center text-primary"},ft={class:"p-2 border text-right text-primary"},wt={class:"font-semibold"},vt={class:"p-2 border text-center text-primary",colspan:"2"},gt={key:0,class:"flex justify-between"},Ct=t("td",{class:"p-2 border text-center text-primary",colspan:"2"},null,-1),kt={class:"p-2 border text-primary text-left"},jt={class:"p-2 border text-right text-primary"},Dt={key:0},St=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Tt={class:"p-2 border text-primary text-left"},Pt={class:"p-2 border text-right text-primary"},Nt={key:1},Bt=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Vt={class:"p-2 border text-left text-primary"},At={class:"p-2 border text-right text-primary"},Et={key:2},Ft=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Ot={class:"p-2 border text-primary text-left"},qt={class:"p-2 border text-right text-primary"},It=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Lt={class:"p-2 border text-primary text-left"},Qt={class:"p-2 border text-right text-primary"},Ut=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),zt={class:"p-2 border text-primary text-left"},Gt={class:"p-2 border text-right text-primary"},Ht={key:3,class:"error"},Jt=t("td",{class:"p-2 border text-center",colspan:"4"},null,-1),Kt={class:"p-2 border text-left"},Mt={class:"p-2 border text-right"},Rt={key:4},Wt=t("td",{class:"p-2 border text-center text-primary",colspan:"4"},null,-1),Xt={class:"p-2 border text-primary text-left"},Yt={class:"p-2 border text-right text-primary"};function Zt($t,c,r,te,ee,s){const i=m("ns-button");return n(),l("div",f,[t("div",w,[t("div",v,[t("div",g,[u(i,{onClick:c[0]||(c[0]=d=>s.printTable()),type:"info"},{default:b(()=>[C,t("span",null,e(s.__("Print")),1)]),_:1})])])]),t("div",k,[t("div",j,[t("div",D,[t("div",S,[t("h3",T,e(s.__("Store Details")),1),t("div",P,[t("ul",N,[t("li",B,[t("span",V,e(s.__("Order Code")),1),t("span",null,e(r.order.code),1)]),t("li",A,[t("span",E,e(s.__("Cashier")),1),t("span",null,e(r.order.user.username),1)]),t("li",F,[t("span",O,e(s.__("Date")),1),t("span",null,e(r.order.created_at),1)]),t("li",q,[t("span",I,e(s.__("Customer")),1),t("span",null,e(r.order.customer.name),1)]),t("li",L,[t("span",Q,e(s.__("Type")),1),t("span",null,e(r.order.type),1)]),t("li",U,[t("span",z,e(s.__("Payment Status")),1),t("span",null,e(r.order.paymentStatus),1)]),r.order.type==="delivery"?(n(),l("li",G,[t("span",H,e(s.__("Delivery Status")),1),t("span",null,e(r.order.deliveryStatus),1)])):a("",!0)])])])]),t("div",J,[t("div",K,[t("h3",M,e(s.__("Billing Details")),1),t("div",R,[t("ul",W,[(n(!0),l(o,null,_(r.billing,d=>(n(),l("li",{key:d.id,class:"flex justify-between text-secondary text-sm mb-1"},[t("span",X,e(d.label),1),t("span",null,e(r.order.billing_address[d.name]||"N/A"),1)]))),128))])])])]),t("div",Y,[t("div",Z,[t("h3",$,e(s.__("Shipping Details")),1),t("div",tt,[t("ul",et,[(n(!0),l(o,null,_(r.shipping,d=>(n(),l("li",{key:d.id,class:"flex justify-between text-secondary text-sm mb-1"},[t("span",st,e(d.label),1),t("span",null,e(r.order.shipping_address[d.name]||"N/A"),1)]))),128))])])])])]),t("div",rt,[t("table",dt,[t("thead",nt,[t("tr",null,[t("th",lt,e(s.__("Product")),1),t("th",at,e(s.__("Unit Price")),1),t("th",ot,e(s.__("Quantity")),1),t("th",_t,e(s.__("Discount")),1),t("th",ct,e(s.__("Tax")),1),t("th",it,e(s.__("Total Price")),1)])]),t("tbody",null,[(n(!0),l(o,null,_(r.order.products,d=>(n(),l("tr",{key:d.id},[t("td",ht,[t("h3",xt,e(d.name),1),t("span",yt,e(d.unit),1)]),t("td",mt,e(s.nsCurrency(d.unit_price)),1),t("td",ut,e(d.quantity),1),t("td",bt,e(s.nsCurrency(d.discount)),1),t("td",pt,e(s.nsCurrency(d.tax_value)),1),t("td",ft,e(s.nsCurrency(d.total_price)),1)]))),128))]),t("tfoot",wt,[t("tr",null,[t("td",vt,[["unpaid","partially_paid"].includes(r.order.payment_status)?(n(),l("div",gt,[t("span",null,e(s.__("Expiration Date")),1),t("span",null,e(r.order.final_payment_date),1)])):a("",!0)]),Ct,t("td",kt,e(s.__("Sub Total")),1),t("td",jt,e(s.nsCurrency(r.order.subtotal)),1)]),r.order.discount>0?(n(),l("tr",Dt,[St,t("td",Tt,e(s.__("Discount")),1),t("td",Pt,e(s.nsCurrency(-r.order.discount)),1)])):a("",!0),r.order.total_coupons>0?(n(),l("tr",Nt,[Bt,t("td",Vt,e(s.__("Coupons")),1),t("td",At,e(s.nsCurrency(-r.order.total_coupons)),1)])):a("",!0),r.order.shipping>0?(n(),l("tr",Et,[Ft,t("td",Ot,e(s.__("Shipping")),1),t("td",qt,e(s.nsCurrency(r.order.shipping)),1)])):a("",!0),t("tr",null,[It,t("td",Lt,e(s.__("Total")),1),t("td",Qt,e(s.nsCurrency(r.order.total)),1)]),t("tr",null,[Ut,t("td",zt,e(s.__("Paid")),1),t("td",Gt,e(s.nsCurrency(r.order.tendered)),1)]),["partially_paid","unpaid"].includes(r.order.payment_status)?(n(),l("tr",Ht,[Jt,t("td",Kt,e(s.__("Due")),1),t("td",Mt,e(s.nsCurrency(r.order.change)),1)])):(n(),l("tr",Rt,[Wt,t("td",Xt,e(s.__("Change")),1),t("td",Yt,e(s.nsCurrency(r.order.change)),1)]))])])])])])}const le=y(p,[["render",Zt]]);export{le as default};
