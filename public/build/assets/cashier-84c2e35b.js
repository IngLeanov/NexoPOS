var o=Object.defineProperty;var h=(r,s,e)=>s in r?o(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e;var t=(r,s,e)=>(h(r,typeof s!="symbol"?s+"":s,e),e);import{n as i,B as p,a as n}from"./bootstrap-32fd8995.js";import{_ as a}from"./lang-643e0c49.js";import"./runtime-dom.esm-bundler-eae6104b.js";import"./runtime-core.esm-bundler-a9e64527.js";class c{constructor(){t(this,"_mysales");t(this,"_reports",{mysales:i.get("/api/reports/cashier-report")});this._mysales=new p({});for(let s in this._reports)this.loadReport(s)}loadReport(s){return this._reports[s].subscribe(e=>{this[`_${s}`].next(e)})}refreshReport(){i.get("/api/reports/cashier-report?refresh=true").subscribe(s=>{this._mysales.next(s),n.success(a("The report has been refreshed."),a("OK")).subscribe()})}get mysales(){return this._mysales}}window.Cashier=new c;
