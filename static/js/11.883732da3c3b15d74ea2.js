(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+0/t":function(t,e,l){},R6lm:function(t,e,l){"use strict";var a=l("JrP0");e.a={list:function(t){var e={page:t.page,size:t.size,title:t.title,level:t.level,status:t.status};return a.a.post("/articles/list",e).then(function(t){return t.data})},detail:function(t){var e={id:t};return a.a.get("/articles/detail",{params:e}).then(function(t){return t.data})},update:function(t){return a.a.post("/articles/update",t).then(function(t){return t.data})},updates:function(t){return a.a.post("/articles/batch",t).then(function(t){return t.data})},auditors:function(){return a.a.post("/account/auditors").then(function(t){return t.data})}}},kiNf:function(t,e,l){"use strict";l.r(e);var a=l("P2sY"),o=l.n(a),i=l("nTMx"),s=l("R6lm"),n={name:"FullFeature",metaInfo:{title:"Sortable table"},mixins:[i.a],data:function(){return{filterData:{title:"",status:"",level:""},statusMap:["all","draft","committed","failing","auditing","audited","deleted"],levelMap:["all",1,2,3,4,5],selected:[],dialogVisible:!1,auditors:[],editForm:null}},methods:{getList:function(){var e=this;this.loading=!0,s.a.list(o()({},this.pages,this.filterData)).then(function(t){e.list=t.list.map(function(t){return e.$set(t,"editing",!1),e.$set(t,"submitting",!1),e.$set(t,"originalTitle",t.title),t}),e.pages=t.pages,e.loading=!1})},handleSelectionChange:function(t){this.selected=t},rebuildEditData:function(){this.editForm={isEdit:!1,author:this.$store.getters.user.username,title:"",summery:"",content:"",level:"",auditor:""}},handleEdit:function(t){this.dialogVisible=!0,t?this.editForm=o()({},t):this.rebuildEditData()},inputQueryFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},inputQuerySearch:function(t,e){e(t?this.auditors.filter(this.inputQueryFilter(t)):this.auditors)},handleBatchUpdate:function(e,l){var a=this,i={status:e?"audited":"deleted"},n=[];l?n=[o()({},l,i)]:this.selected.forEach(function(t){n.push(o()({},t,i))});var t={type:e?"info":"warning",confirmButtonText:"Sure, Go Ahead",cancelButtonText:"Cancel",callback:function(t){"confirm"===t&&s.a.updates(n).then(function(t){a.$message({center:!0,type:t.success?"success":"error",message:(e?"Audit":"Delete")+" executed "+(t.success?"successfully":"failed")+"."}),t.success&&(l?l.status=i.status:a.selected.forEach(function(t,e){a.selected[e].status=i.status}))})}};this.$confirm("Are you sure you want to "+(e?"audit":"delete")+" "+(1<n.length?"these":"this")+" data?","Are you sure?",t)}},created:function(){this.rebuildEditData()},mounted:function(){var e=this;s.a.auditors().then(function(t){e.auditors=t.map(function(t){return e.$set(t,"value",t.username),t})})}},r=(l("tu3y"),l("KHd+")),u=Object(r.a)(n,function(){var l=this,t=l.$createElement,a=l._self._c||t;return a("div",{staticClass:"va-body-container"},[a("el-form",{ref:"formFilter",staticClass:"filter-and-actions",attrs:{model:l.filterData,inline:""}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"Title",clearable:""},model:{value:l.filterData.title,callback:function(t){l.$set(l.filterData,"title",t)},expression:"filterData.title"}})],1),l._v(" "),a("el-form-item",[a("el-select",{staticStyle:{width:"120px"},attrs:{value:"",placeholder:"Status"},model:{value:l.filterData.status,callback:function(t){l.$set(l.filterData,"status",t)},expression:"filterData.status"}},l._l(l.statusMap,function(t,e){return a("el-option",{key:t,attrs:{label:t,value:0===e?null:t}})}))],1),l._v(" "),a("el-form-item",[a("el-select",{staticStyle:{width:"80px"},attrs:{value:"",placeholder:"Level"},model:{value:l.filterData.level,callback:function(t){l.$set(l.filterData,"level",t)},expression:"filterData.level"}},l._l(l.levelMap,function(t,e){return a("el-option",{key:t,attrs:{label:t,value:0===e?null:t}})}))],1),l._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:l.getList}},[l._v("Search")])],1),l._v(" "),a("el-form-item",[a("el-button-group",{staticStyle:{"vertical-align":"top"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){l.handleEdit()}}},[l._v("Add")]),l._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-check",disabled:!l.selected||l.selected.length<1},on:{click:function(t){l.handleBatchUpdate(!0)}}},[l._v("Audit")]),l._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-delete",disabled:!l.selected||l.selected.length<1},on:{click:function(t){l.handleBatchUpdate(!1)}}},[l._v("Delete")])],1)],1)],1),l._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:l.loading,expression:"loading"}],attrs:{"tooltip-effect":"theme",data:l.list,fit:"","highlight-current-row":"","default-sort":{prop:"id",order:"ascending"},"empty-text":"Sorry! This category have nothing data."},on:{"selection-change":l.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"38"}}),l._v(" "),a("el-table-column",{attrs:{label:"ID",prop:"id",width:"38",align:"right"}}),l._v(" "),a("el-table-column",{attrs:{label:"TITLE",prop:"title","show-overflow-tooltip":"",sortable:""}}),l._v(" "),a("el-table-column",{attrs:{label:"CREATE",prop:"display",width:"114",sortable:""},scopedSlots:l._u([{key:"default",fn:function(t){return[l._v(l._s(l._f("dateAgo")(t.row.display)))]}}])}),l._v(" "),a("el-table-column",{attrs:{label:"AUTHOR",prop:"author",width:"104","show-overflow-tooltip":"",sortable:""}}),l._v(" "),a("el-table-column",{attrs:{label:"AUDITOR",prop:"auditor",width:"110","show-overflow-tooltip":"",sortable:""}}),l._v(" "),a("el-table-column",{attrs:{label:"LEVEL",prop:"level",width:"90",align:"center",sortable:""}}),l._v(" "),a("el-table-column",{attrs:{label:"STATUS",prop:"status",width:"100",align:"center",sortable:""},scopedSlots:l._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{size:"small",type:l._f("articleStatus")(t.row.status)}},[l._v(l._s(t.row.status))])]}}])}),l._v(" "),a("el-table-column",{attrs:{label:"PV",prop:"pv",width:"66",sortable:""},scopedSlots:l._u([{key:"default",fn:function(t){return[l._v(l._s(l._f("articlePV")(t.row.pv)))]}}])}),l._v(" "),a("el-table-column",{attrs:{label:"ACTIONS",width:"164","class-name":"has-actions actions-small"},scopedSlots:l._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-check"},on:{click:function(t){l.handleBatchUpdate(!0,e.row)}}}),l._v(" "),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-edit"},on:{click:function(t){l.handleEdit(e.row)}}}),l._v(" "),a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-delete"},on:{click:function(t){l.handleBatchUpdate(!1,e.row)}}})]}}])})],1),l._v(" "),l.list&&0<l.list.length?a("el-pagination",{staticClass:"excel-pagination",attrs:{layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,30,50],"current-page":l.pages.page,"page-size":l.pages.size,total:l.pages.total},on:{"size-change":l.handleSizeChange,"current-change":l.handlePageChange}}):l._e(),l._v(" "),a("el-dialog",{attrs:{visible:l.dialogVisible,title:"Article "+(l.editForm.isEdit?"Edit":"Add"),width:"50%"},on:{"update:visible":function(t){l.dialogVisible=t}}},[a("el-form",{staticStyle:{"margin-right":"60px"},attrs:{model:l.editForm,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"Title",prop:"title"}},[a("el-input",{attrs:{placeholder:"Article title"},model:{value:l.editForm.title,callback:function(t){l.$set(l.editForm,"title",t)},expression:"editForm.title"}})],1),l._v(" "),a("el-form-item",{attrs:{label:"Summery",prop:"summery"}},[a("el-input",{attrs:{placeholder:"Article summery"},model:{value:l.editForm.summery,callback:function(t){l.$set(l.editForm,"summery",t)},expression:"editForm.summery"}})],1),l._v(" "),a("el-form-item",{attrs:{label:"Content",prop:"content"}},[a("el-input",{attrs:{placeholder:"Article content"},model:{value:l.editForm.content,callback:function(t){l.$set(l.editForm,"content",t)},expression:"editForm.content"}})],1),l._v(" "),a("el-form-item",{attrs:{label:"Level",prop:"level"}},[a("el-select",{attrs:{value:"",placeholder:"Article level"},model:{value:l.editForm.level,callback:function(t){l.$set(l.editForm,"level",t)},expression:"editForm.level"}},l._l(l.levelMap,function(t,e){return 0!==e?a("el-option",{key:t,attrs:{label:t,value:t}}):l._e()}))],1),l._v(" "),a("el-form-item",{attrs:{label:"Auditor",prop:"auditor"}},[a("el-autocomplete",{attrs:{placeholder:"Article auditor",debounce:0,"fetch-suggestions":l.inputQuerySearch},model:{value:l.editForm.auditor,callback:function(t){l.$set(l.editForm,"auditor",t)},expression:"editForm.auditor"}})],1)],1),l._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:""},on:{click:function(t){l.dialogVisible=!1}}},[l._v("Cancel")]),l._v(" "),a("el-button",{attrs:{type:"primary"}},[l._v("Submit")])],1)],1)],1)},[],!1,null,"14fdc45a",null);u.options.__file="FullFeature.vue";e.default=u.exports},nTMx:function(t,e,l){"use strict";var a=l("R6lm");e.a={data:function(){return{pages:{page:1,size:10,total:0},list:[],loading:!1}},methods:{getList:function(){var e=this;this.loading=!0,a.a.list(this.pages).then(function(t){e.list=t.list.map(function(t){return e.$set(t,"editing",!1),e.$set(t,"submitting",!1),e.$set(t,"originalTitle",t.title),t}),e.pages=t.pages,e.loading=!1})},handlePageChange:function(t){this.pages.page=t,this.getList()},handleSizeChange:function(t){this.pages.size=t,this.getList()}},mounted:function(){this.getList()}}},tu3y:function(t,e,l){"use strict";var a=l("+0/t");l.n(a).a}}]);