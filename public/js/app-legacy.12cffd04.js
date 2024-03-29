(function(){"use strict";var e={7789:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var i=n(144),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[i("div",{staticClass:"d-flex align-center justify-center me-3",attrs:{icon:""}},[i("img",{attrs:{src:n(3873),height:"100%",width:"auto"}})]),i("div",{staticClass:"d-flex flex-column align-center"},[i("h2",{staticClass:"hero"},[e._v("フリエンド")]),i("div",{staticClass:"caption hero"},[e._v("Amici di sushi "+e._s(e.version))])]),i("v-spacer"),i("div",[e.isHome?e._e():i("v-btn",{attrs:{icon:""},on:{click:e.goHome}},[i("v-icon",[e._v("mdi-home")])],1)],1)],1),i("v-main",[i("router-view")],1),i("v-snackbar",{attrs:{color:e.mType,top:""},scopedSlots:e._u([{key:"action",fn:function(t){var n=t.attrs;return[i("v-btn",e._b({attrs:{icon:""},on:{click:function(t){e.message=!1}}},"v-btn",n,!1),[i("v-icon",[e._v("mdi-close")])],1)]}}]),model:{value:e.message,callback:function(t){e.message=t},expression:"message"}},[e._v(" "+e._s(e.mText)+" ")])],1)},r=[],a=(n(4916),n(5306),{name:"App",data:function(){return{isHome:!0,message:!1,mType:void 0,mText:void 0}},computed:{version:function(){return"1.1.0"}},beforeMount:function(){this.$bus.$on("home",this.toggleHomeBtn),this.$bus.$on("message",this.createMessage)},beforeDestroy:function(){this.$bus.$off("home",this.toggleHomeBtn),this.$bus.$off("message",this.createMessage)},methods:{toggleHomeBtn:function(e){this.isHome=e},createMessage:function(e){this.mType=e.type,this.mText=e.text,this.message=!0},goHome:function(){this.$router.replace({name:"home"})}}}),s=a,c=n(1001),u=n(3453),l=n.n(u),d=n(7524),m=n(7199),f=n(680),v=n(6428),p=n(7877),h=n(3202),g=n(3631),b=(0,c.Z)(s,o,r,!1,null,"35b99085",null),y=b.exports;l()(b,{VApp:d.Z,VAppBar:m.Z,VBtn:f.Z,VIcon:v.Z,VMain:p.Z,VSnackbar:h.Z,VSpacer:g.Z});var _=n(5205);(0,_.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var x=n(8345),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column align-center py-6",attrs:{"main-content":""}},[n("v-card",{attrs:{width:"min(95ch, 95vw)"}},[n("v-card-text",[n("v-btn",{attrs:{color:"primary",block:""},on:{click:function(t){return e.goToMenu(!0)}}},[e._v(" Avvia un ordine condiviso ")]),n("div",{staticClass:"my-6 d-flex flex-row align-center"},[n("v-divider"),n("span",{staticClass:"mx-4"},[e._v("oppure")]),n("v-divider")],1),n("h2",{staticClass:"mb-4"},[e._v("Collegati a un ordine condiviso")]),n("div",{staticClass:"d-flex flex-row align-center"},[n("v-text-field",{attrs:{placeholder:"Numero del menu",clearable:"",dense:"","hide-details":"",outlined:""},model:{value:e.menuId,callback:function(t){e.menuId=t},expression:"menuId"}}),n("v-btn",{attrs:{disabled:!e.validId,color:"primary",text:""},on:{click:function(t){return e.goToMenu(!1)}}},[e._v(" Collegati ")])],1)],1)],1)],1)},k=[],Z=n(6133),V=n(2751),w=n(3796),$=(n(2222),n(9669)),I=n.n($),T=function(){function e(){(0,Z.Z)(this,e)}return(0,V.Z)(e,null,[{key:"createMenu",value:function(t,n){e.createMenu_netlify(t,n)}},{key:"addToMenu",value:function(t,n,i,o){e.addToMenu_netlify(t,n,i,o)}},{key:"getMenu",value:function(t,n,i){e.getMenu_netlify(t,n,i)}},{key:"createMenu_netlify",value:function(t,n){I().get("".concat(e.NETLIFY_BACKEND_URL,"menu")).then((function(e){return t(e)})).catch((function(e){return n(e)}))}},{key:"addToMenu_netlify",value:function(t,n,i,o){I().post("".concat(e.NETLIFY_BACKEND_URL,"menu/").concat(t),{orders:n}).then((function(e){return i(e)})).catch((function(e){return o(e)}))}},{key:"getMenu_netlify",value:function(t,n,i){I().get("".concat(e.NETLIFY_BACKEND_URL,"menu/").concat(t)).then((function(e){return n(e)})).catch((function(e){return i(e)}))}}]),e}();(0,w.Z)(T,"NETLIFY_BACKEND_URL","/.netlify/functions/server/");var M=T,E={name:"HomePage",data:function(){return{menuId:void 0}},computed:{validId:function(){return!!this.menuId}},beforeMount:function(){this.$bus.$emit("home",!0)},methods:{goToMenu:function(e){var t=this;e?M.createMenu((function(e){t.menuId=e.data.menuId,t.$store.commit("setCreator",!0),t.$router.replace({path:"/menu/".concat(t.menuId)})}),(function(e){t.$bus.$emit("message",{type:"error",text:"Impossibile creare l'ordine: ".concat(e)})})):this.$router.replace({path:"/menu/".concat(this.menuId)})}}},O=E,B=n(3237),L=n(7118),P=n(1418),A=n(5337),N=(0,c.Z)(O,C,k,!1,null,"2377de1a",null),S=N.exports;l()(N,{VBtn:f.Z,VCard:B.Z,VCardText:L.ZB,VDivider:P.Z,VTextField:A.Z});var D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column align-center py-6",attrs:{"main-content":""}},[n("v-card",{staticClass:"mb-6",attrs:{width:"min(95ch, 95vw)"}},[n("v-card-text",[n("v-btn",{attrs:{color:"primary",block:""},on:{click:e.copyMenuCode}},[n("v-icon",{staticClass:"me-3"},[e._v("mdi-share-variant")]),e._v(" Condividi l'ordine ")],1)],1)],1),n("v-card",{staticClass:"mb-6",attrs:{width:"min(95ch, 95vw)"}},[n("v-card-text",[e.sent?n("div",[e._v(" "+e._s(e.creator?'Lista inviata, tu sei il creatore dell\'ordine: premi "Genera la lista di piatti" quando tutti sono pronti':"Qui è tutto pronto, いただきます!")+" ")]):[n("div",{staticClass:"caption"},[e._v(" Inserisci i numeri dei piatti separati da virgole: ")]),n("v-textarea",{staticClass:"mb-4",attrs:{placeholder:"Lista di piatti","hide-details":"",outlined:""},model:{value:e.order,callback:function(t){e.order=t},expression:"order"}}),n("v-btn",{attrs:{disabled:!e.validOrder,color:"primary",block:""},on:{click:e.addToMenu}},[e._v(" Invia le tue scelte ")])]],2)],1),e.sent&&e.dishes.length>0?n("v-card",{staticClass:"mb-6",attrs:{width:"min(95ch, 95vw)"}},[n("v-expansion-panels",{attrs:{flat:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},[n("v-expansion-panel",[n("v-expansion-panel-header",[e._v("Le tue scelte")]),n("v-expansion-panel-content",[n("v-list",{attrs:{dense:""}},e._l(e.dishes,(function(t){return n("v-list-item",{key:"dish-item-"+t,attrs:{dense:""}},[n("v-list-item-icon",[n("v-simple-checkbox",{attrs:{color:"primary"},model:{value:t.checked,callback:function(n){e.$set(t,"checked",n)},expression:"dish.checked"}})],1),n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(t.name))])],1)],1)})),1)],1)],1)],1)],1):e._e(),e.creator||e.generated?n("v-card",{attrs:{width:"min(95ch, 95vw)"}},[n("v-card-text",[e.generated?n("div",[n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-center"},[e._v("Codice piatto")]),n("th",{staticClass:"text-center"},[e._v("Quantità")])])]),n("tbody",e._l(e.menu,(function(t,i){return n("tr",{key:t.order,class:i%2===0?"red lighten-5":""},[n("td",{staticClass:"text-center"},[n("strong",[n("h2",[e._v(e._s(t.order))])])]),n("td",{staticClass:"text-center"},[n("strong",[n("h2",[e._v(e._s(t.count))])])])])})),0)]},proxy:!0}],null,!1,3416321854)})],1):n("v-btn",{attrs:{disabled:!e.sent,color:"primary",block:""},on:{click:e.generate}},[e._v(" Genera la lista di piatti ")])],1)],1):e._e(),n("ConfirmDialog",{ref:"confirmDialog",attrs:{open:e.openConfirm},on:{"btn-negative":function(t){e.openConfirm=!1}}})],1)},H=[],j=(n(1249),n(3123),n(3210),function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.open?n("v-dialog",{attrs:{width:"unset",persistent:""},model:{value:e.stayOpen,callback:function(t){e.stayOpen=t},expression:"stayOpen"}},[n("v-card",[n("v-card-title",[e._v(e._s(e.title))]),n("v-card-text",[n("div",{domProps:{innerHTML:e._s(e.message)}})]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:""},on:{click:e.btnNegative}},[e._v("Annulla")]),n("v-btn",{attrs:{color:"primary",text:""},on:{click:e.btnPositive}},[e._v("Procedi")])],1)],1)],1):e._e()}),F=[],z={name:"ConfirmDialog",props:{open:{type:Boolean,required:!0}},data:function(){return{stayOpen:!0,title:"",message:"",btnPositive:function(){}}},methods:{btnNegative:function(){this.$emit("btn-negative")}}},K=z,R=n(2912),U=(0,c.Z)(K,j,F,!1,null,null,null),Y=U.exports;l()(U,{VBtn:f.Z,VCard:B.Z,VCardActions:L.h7,VCardText:L.ZB,VCardTitle:L.EB,VDialog:R.Z,VSpacer:g.Z});var q={name:"MenuPage",components:{ConfirmDialog:Y},data:function(){return{menuId:void 0,sent:!1,generated:!1,order:void 0,dishes:[],menu:[],openConfirm:!1,panel:void 0}},computed:{creator:function(){return this.$store.getters.creator},validOrder:function(){return!!this.order}},beforeMount:function(){this.$bus.$emit("home",!1),this.menuId=this.$route.params.menuId},methods:{copyMenuCode:function(){var e=document.createElement("input"),t=window.location.href;document.body.appendChild(e),e.value=t,e.select(),document.execCommand("copy"),document.body.removeChild(e),this.$bus.$emit("message",{type:"success",text:"Il link all'ordine è stato copiato negli appunti :)"})},addToMenu:function(){var e=this,t=this.order.split(",").map((function(e){return e.trim()})),n=this.$refs.confirmDialog;this.dishes=t.map((function(e){return{name:e,checked:!1}})),n.title="Invio scelte",n.message="<strong>Attenzione</strong>: inviando la tua lista delle scelte non potrai più aggiungere pietanze al tuo ordine.<br />Vuoi continuare?",n.btnPositive=function(){M.addToMenu(e.menuId,t,(function(){e.sent=!0,e.creator||(e.panel=0)}),(function(t){var n;e.$bus.$emit("message",{type:"error",text:404===(null===t||void 0===t||null===(n=t.response)||void 0===n?void 0:n.status)?"L'ordine è già stato chiuso":"Impossibile inviare la lista: ".concat(t)})})),e.openConfirm=!1},this.openConfirm=!0},generate:function(){var e=this,t=this.$refs.confirmDialog;t.title="Genera lista",t.message="<strong>Attenzione</strong>: generando la lista di piatti i tuoi amici non potranno più inviare le loro scelte.<br />Vuoi continuare?",t.btnPositive=function(){M.getMenu(e.menuId,(function(t){e.menu=t.data.menu,e.generated=!0,e.$store.commit("setCreator",!1)}),(function(t){e.$bus.$emit("message",{type:"error",text:"Impossibile generare la lista di piatti: ".concat(t)})})),e.openConfirm=!1},this.openConfirm=!0}}},G=q,Q=n(6845),J=n(2443),W=n(1192),X=n(5630),ee=n(6816),te=n(7620),ne=n(5398),ie=n(459),oe=n(128),re=n(3568),ae=n(4350),se=(0,c.Z)(G,D,H,!1,null,"a8223cf2",null),ce=se.exports;l()(se,{VBtn:f.Z,VCard:B.Z,VCardText:L.ZB,VExpansionPanel:Q.Z,VExpansionPanelContent:J.Z,VExpansionPanelHeader:W.Z,VExpansionPanels:X.Z,VIcon:v.Z,VList:ee.Z,VListItem:te.Z,VListItemContent:ne.km,VListItemIcon:ie.Z,VListItemTitle:ne.V9,VSimpleCheckbox:oe.Z,VSimpleTable:re.Z,VTextarea:ae.Z}),i.Z.use(x.Z);var ue=[{path:"/",name:"home",component:S},{path:"/menu/:menuId",name:"menu",component:ce},{path:"*",name:"home",component:S}],le=new x.Z({routes:ue}),de=le,me=n(629),fe={state:{creator:!1},mutations:{setCreator:function(e,t){return e.creator=t}},getters:{creator:function(e){return e.creator}}},ve=fe;i.Z.use(me.ZP);var pe=new me.ZP.Store({modules:{data:ve}}),he=n(9973);i.Z.use(he.Z);var ge=new he.Z({icons:{iconfont:"mdi"},theme:{themes:{dark:{primary:"#EF6C00"},light:{primary:"#EF6C00"}}}});document.title="フリエンド - Amici di sushi",i.Z.config.productionTip=!1,i.Z.prototype.$bus=new i.Z,new i.Z({router:de,store:pe,vuetify:ge,render:function(e){return e(y)}}).$mount("#app")},3873:function(e,t,n){e.exports=n.p+"img/nigiri.2eaf757b.png"}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,o,r){if(!i){var a=1/0;for(l=0;l<e.length;l++){i=e[l][0],o=e[l][1],r=e[l][2];for(var s=!0,c=0;c<i.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[c])}))?i.splice(c--,1):(s=!1,r<a&&(a=r));if(s){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[i,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,r,a=i[0],s=i[1],c=i[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(t&&t(i);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},i=self["webpackChunkfuriendo"]=self["webpackChunkfuriendo"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(7789)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.12cffd04.js.map