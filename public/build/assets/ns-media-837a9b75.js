import{b as w,p as C,n as m,a as g}from"./bootstrap-32fd8995.js";import{_ as f}from"./lang-643e0c49.js";import E from"./ns-pos-confirm-popup-16fa8fc0.js";import{V as F}from"./vue-upload-component-37fc7a3b.js";import{v as S}from"./runtime-dom.esm-bundler-eae6104b.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{r as P,o as d,c as i,a as e,t as a,F as b,b as v,y as u,f as y,e as c,z as j,h as x}from"./runtime-core.esm-bundler-a9e64527.js";import"./vue.runtime.esm-bundler-1bae6fe8.js";const O={name:"ns-media",props:["$popup"],components:{VueUpload:F},data(){return{searchFieldDebounce:null,searchField:"",pages:[{label:f("Upload"),name:"upload",selected:!1},{label:f("Gallery"),name:"gallery",selected:!0}],resources:[],isDragging:!1,response:{data:[],current_page:0,from:0,to:0,next_page_url:"",prev_page_url:"",path:"",per_page:0,total:0,last_page:0,first_page:0},queryPage:1,bulkSelect:!1,files:[]}},mounted(){this.popupCloser();const t=this.pages.filter(s=>s.name==="gallery")[0];this.select(t)},watch:{searchField(){clearTimeout(this.searchFieldDebounce),this.searchFieldDebounce=setTimeout(()=>{this.loadGallery(1)},500)},files:{handler(){this.uploadFiles()},deep:!0}},computed:{postMedia(){return w.applyFilters("http-client-url","/api/medias")},currentPage(){return this.pages.filter(t=>t.selected)[0]},hasOneSelected(){return this.response.data.filter(t=>t.selected).length>0},selectedResource(){return this.response.data.filter(t=>t.selected)[0]},csrf(){return ns.authentication.csrf},isPopup(){return typeof this.$popup<"u"},user_id(){return this.isPopup&&this.$popupParams.user_id||0},panelOpened(){return!this.bulkSelect&&this.hasOneSelected},popupInstance(){return this.$popup}},methods:{popupCloser:C,__:f,cancelBulkSelect(){this.bulkSelect=!1,this.response.data.forEach(t=>t.selected=!1)},deleteSelected(){Popup.show(E,{title:f("Confirm Your Action"),message:f("You're about to delete selected resources. Would you like to proceed?"),onAction:t=>{t&&m.post("/api/medias/bulk-delete",{ids:this.response.data.filter(s=>s.selected).map(s=>s.id)}).subscribe({next:s=>{g.success(s.message).subscribe(),this.loadGallery()},error:s=>{g.error(s.message).subscribe()}})}})},loadUploadScreen(){setTimeout(()=>{this.setDropZone()},1e3)},setDropZone(){const t=document.getElementById("dropping-zone");t.addEventListener("dragenter",r=>this.preventDefaults(r),!1),t.addEventListener("dragleave",r=>this.preventDefaults(r),!1),t.addEventListener("dragover",r=>this.preventDefaults(r),!1),t.addEventListener("drop",r=>this.preventDefaults(r),!1),["dragenter","dragover"].forEach(r=>{t.addEventListener(r,()=>{this.isDragging=!0})}),["dragleave","drop"].forEach(r=>{t.addEventListener(r,()=>{this.isDragging=!1})}),t.addEventListener("drop",r=>this.handleDrop(r),!1),this.$refs.files.addEventListener("change",r=>this.processFiles(r.currentTarget.files))},async uploadFiles(){const t=this.files.filter(s=>s.uploaded===!1&&s.progress===0&&s.failed===!1);for(let s=0;s<t.length;s++){const r=t[s];try{r.progress=1;const p=await new Promise((o,l)=>{const h=new FormData;h.append("file",r.file),m.post("/api/medias",h,{headers:{"Content-Type":"multipart/form-data"}}).subscribe({next:n=>{r.uploaded=!0,r.progress=100,o(n)},error:n=>{l(n)}})})}catch{r.failed=!0}}},handleDrop(t){this.processFiles(t.dataTransfer.files),t.preventDefault(),t.stopPropagation()},preventDefaults(t){t.preventDefault(),t.stopPropagation()},triggerManualUpload(){this.$refs.files.click()},processFiles(t){Array.from(t).filter(p=>["image/png","image/gif","image/jpg","image/jpeg"].includes(p.type)).forEach(p=>{this.files.unshift({file:p,uploaded:!1,failed:!1,progress:0})})},select(t){this.pages.forEach(s=>s.selected=!1),t.selected=!0,t.name==="gallery"?this.loadGallery():t.name==="upload"&&this.loadUploadScreen()},loadGallery(t=null){t=t===null?this.queryPage:t,this.queryPage=t,m.get(`/api/medias?page=${t}&user_id=${this.user_id}${this.searchField.length>0?`&search=${this.searchField}`:""}`).subscribe(s=>{s.data.forEach(r=>r.selected=!1),this.response=s})},submitChange(t,s){m.put(`/api/medias/${s.id}`,{name:t.srcElement.textContent}).subscribe({next:r=>{s.fileEdit=!1,g.success(r.message,"OK").subscribe()},error:r=>{s.fileEdit=!1,g.success(r.message||f("An unexpected error occured."),"OK").subscribe()}})},useSelectedEntries(){this.$popupParams.resolve({event:"use-selected",value:this.response.data.filter(t=>t.selected)}),this.$popup.close()},selectResource(t){this.bulkSelect||this.response.data.forEach((s,r)=>{r!==this.response.data.indexOf(t)&&(s.selected=!1)}),t.fileEdit=!1,t.selected=!t.selected}}},B={class:"sidebar w-48 md:h-full flex-shrink-0"},R={class:"text-xl font-bold my-4 text-center"},U={class:"sidebar-menus flex md:block mt-8"},L=["onClick"],T={key:0,class:"content w-full flex-col overflow-hidden flex"},M={key:0,class:"p-2 flex bg-box-background flex-shrink-0 justify-between"},V=e("div",null,null,-1),G={class:"text-lg md:text-xl font-bold text-center text-primary mb-4"},N={style:{display:"none"},type:"file",name:"",multiple:"",ref:"files",id:""},z={class:"rounded w-full md:w-2/3 text-primary h-56 overflow-y-auto ns-scrollbar p-2"},A={class:"rounded bg-info-primary flex items-center justify-center text-xs p-2"},I={key:1,class:"content flex-col w-full overflow-hidden flex"},q={key:0,class:"p-2 flex bg-box-background flex-shrink-0 justify-between"},H=e("div",null,null,-1),Y={class:"flex flex-auto overflow-hidden"},K={class:"shadow ns-grid flex flex-auto flex-col overflow-y-auto ns-scrollbar"},Z={class:"p-2 border-b border-box-background"},W={class:"ns-input border-2 rounded border-input-edge bg-input-background flex"},J=["placeholder"],Q={key:0,class:"flex items-center justify-center w-20 p-1"},X={class:"flex flex-auto"},$={class:"p-2 overflow-x-auto"},ee={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},se={class:"p-2"},te=["onClick"],le=["src","alt"],re={key:0,class:"flex flex-auto items-center justify-center"},ne={class:"text-2xl font-bold"},oe={id:"preview",class:"ns-media-preview-panel hidden lg:block w-64 flex-shrink-0"},de={class:"h-64 bg-gray-800 flex items-center justify-center"},ie=["src","alt"],ae={key:0,id:"details",class:"p-4 text-gray-700 text-sm"},ce={class:"flex flex-col mb-2"},ue={class:"font-bold block"},pe=["contenteditable"],fe={class:"flex flex-col mb-2"},he={class:"font-bold block"},_e={class:"flex flex-col mb-2"},me={class:"font-bold block"},ge={class:"p-2 flex ns-media-footer flex-shrink-0 justify-between"},be={class:"flex -mx-2 flex-shrink-0"},ve={key:0,class:"px-2"},xe={class:"ns-button shadow rounded overflow-hidden info"},ye=e("i",{class:"las la-times"},null,-1),ke={key:1,class:"px-2"},we={class:"ns-button shadow rounded overflow-hidden info"},Ce=e("i",{class:"las la-check-circle"},null,-1),Ee={key:2,class:"px-2"},Fe={class:"ns-button shadow rounded overflow-hidden warning"},Se=e("i",{class:"las la-trash"},null,-1),De={class:"flex-shrink-0 -mx-2 flex"},Pe={class:"px-2"},je={class:"rounded shadow overflow-hidden flex text-sm"},Oe=["disabled"],Be=e("hr",{class:"border-r border-gray-700"},null,-1),Re=["disabled"],Ue={key:0,class:"px-2"},Le={class:"ns-button info"};function Te(t,s,r,p,o,l){const h=P("ns-close-button");return d(),i("div",{class:u(["flex md:flex-row flex-col ns-box shadow-xl overflow-hidden",l.isPopup?"w-6/7-screen h-6/7-screen":"w-full h-full"]),id:"ns-media"},[e("div",B,[e("h3",R,a(l.__("Medias Manager")),1),e("ul",U,[(d(!0),i(b,null,v(o.pages,(n,_)=>(d(),i("li",{onClick:k=>l.select(n),class:u(["py-2 px-3 cursor-pointer border-l-8",n.selected?"active":""]),key:_},a(n.label),11,L))),128))])]),l.currentPage.name==="upload"?(d(),i("div",T,[l.isPopup?(d(),i("div",M,[V,e("div",null,[y(h,{onClick:s[0]||(s[0]=n=>l.popupInstance.close())})])])):c("",!0),e("div",{id:"dropping-zone",onClick:s[1]||(s[1]=n=>l.triggerManualUpload()),class:u([o.isDragging?"border-dashed border-2":"","flex flex-auto m-2 p-2 flex-col border-info-primary items-center justify-center"])},[e("h3",G,a(l.__("Click Here Or Drop Your File To Upload")),1),e("input",N,null,512),e("div",z,[e("ul",null,[(d(!0),i(b,null,v(o.files,(n,_)=>(d(),i("li",{key:_,class:"p-2 mb-2 shadow ns-media-upload-item flex items-center justify-between rounded"},[e("span",null,a(n.file.name),1),e("span",A,a(n.progress)+"%",1)]))),128))])])],2)])):c("",!0),l.currentPage.name==="gallery"?(d(),i("div",I,[l.isPopup?(d(),i("div",q,[H,e("div",null,[y(h,{onClick:s[2]||(s[2]=n=>l.popupInstance.close())})])])):c("",!0),e("div",Y,[e("div",K,[e("div",Z,[e("div",W,[j(e("input",{id:"search",type:"text","onUpdate:modelValue":s[3]||(s[3]=n=>o.searchField=n),placeholder:l.__("Search Medias"),class:"px-4 block w-full sm:text-sm sm:leading-5 h-10"},null,8,J),[[S,o.searchField]]),o.searchField.length>0?(d(),i("div",Q,[e("button",{onClick:s[4]||(s[4]=n=>o.searchField=""),class:"h-full w-full rounded-tr rounded-br overflow-hidden"},a(l.__("Cancel")),1)])):c("",!0)])]),e("div",X,[e("div",$,[e("div",ee,[(d(!0),i(b,null,v(o.response.data,(n,_)=>(d(),i("div",{key:_,class:""},[e("div",se,[e("div",{onClick:k=>l.selectResource(n),class:u([n.selected?"ns-media-image-selected ring-4":"","rounded-lg aspect-square bg-gray-500 m-2 overflow-hidden flex items-center justify-center"])},[e("img",{class:"object-cover h-full",src:n.sizes.thumb,alt:n.name},null,8,le)],10,te)])]))),128))])]),o.response.data.length===0?(d(),i("div",re,[e("h3",ne,a(l.__("Nothing has already been uploaded")),1)])):c("",!0)])]),e("div",oe,[e("div",de,[l.panelOpened?(d(),i("img",{key:0,src:l.selectedResource.sizes.thumb,alt:l.selectedResource.name},null,8,ie)):c("",!0)]),l.panelOpened?(d(),i("div",ae,[e("p",ce,[e("strong",ue,a(l.__("File Name"))+": ",1),e("span",{class:u(["p-2",l.selectedResource.fileEdit?"border-b border-input-edge bg-input-background":""]),onBlur:s[5]||(s[5]=n=>l.submitChange(n,l.selectedResource)),contenteditable:l.selectedResource.fileEdit?"true":"false",onClick:s[6]||(s[6]=n=>l.selectedResource.fileEdit=!0)},a(l.selectedResource.name),43,pe)]),e("p",fe,[e("strong",he,a(l.__("Uploaded At"))+":",1),e("span",null,a(l.selectedResource.created_at),1)]),e("p",_e,[e("strong",me,a(l.__("By"))+" :",1),e("span",null,a(l.selectedResource.user.username),1)])])):c("",!0)])]),e("div",ge,[e("div",be,[o.bulkSelect?(d(),i("div",ve,[e("div",xe,[e("button",{onClick:s[7]||(s[7]=n=>l.cancelBulkSelect()),class:"py-2 px-3"},[ye,x(" "+a(l.__("Cancel")),1)])])])):c("",!0),l.hasOneSelected&&!o.bulkSelect?(d(),i("div",ke,[e("div",we,[e("button",{onClick:s[8]||(s[8]=n=>o.bulkSelect=!0),class:"py-2 px-3"},[Ce,x(" "+a(l.__("Bulk Select")),1)])])])):c("",!0),l.hasOneSelected?(d(),i("div",Ee,[e("div",Fe,[e("button",{onClick:s[9]||(s[9]=n=>l.deleteSelected()),class:"py-2 px-3"},[Se,x(" "+a(l.__("Delete")),1)])])])):c("",!0)]),e("div",De,[e("div",Pe,[e("div",je,[e("div",{class:u(["ns-button",o.response.current_page===1?"disabled cursor-not-allowed":"info"])},[e("button",{disabled:o.response.current_page===1,onClick:s[10]||(s[10]=n=>l.loadGallery(o.response.current_page-1)),class:"p-2"},a(l.__("Previous")),9,Oe)],2),Be,e("div",{class:u(["ns-button",o.response.current_page===o.response.last_page?"disabled cursor-not-allowed":"info"])},[e("button",{disabled:o.response.current_page===o.response.last_page,onClick:s[11]||(s[11]=n=>l.loadGallery(o.response.current_page+1)),class:"p-2"},a(l.__("Next")),9,Re)],2)])]),l.isPopup&&l.hasOneSelected?(d(),i("div",Ue,[e("div",Le,[e("button",{class:"rounded shadow p-2 text-sm",onClick:s[12]||(s[12]=n=>l.useSelectedEntries())},a(l.__("Use Selected")),1)])])):c("",!0)])])])):c("",!0)],2)}const He=D(O,[["render",Te]]);export{He as default};
