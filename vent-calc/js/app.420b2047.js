(function(t){function e(e){for(var n,o,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)o=i[d],r[o]&&p.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["default"],{iconfont:"md"});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-header"),a("v-content",[a("router-view")],1),a("app-footer")],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{staticClass:"hidden-md-and-up",attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.menuItems,function(e,n){return a("v-list-tile",{key:"navdrawer"+n,attrs:{to:e.route,flat:""}},[a("v-list-tile-action",[a("v-icon",{domProps:{innerHTML:t._s(e.icon)}},[t._v(t._s(e.title))])],1),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}),1)],1),a("v-toolbar",{staticClass:"primary",attrs:{app:"",dark:""}},[a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span"}},[a("v-toolbar-title",{domProps:{textContent:t._s("Vent Calc")}})],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.menuItems,function(e,n){return a("v-btn",{key:"menuItem"+n,attrs:{to:e.route,flat:""}},[a("v-icon",{attrs:{left:""},domProps:{innerHTML:t._s(e.icon)}}),t._v("\n\t\t\t\t"+t._s(e.title)+"\n\t\t\t")],1)}),t.isUserAuthenticated?a("v-btn",{attrs:{flat:""},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[a("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n\t\t\t\tВыйти\n\t\t\t")],1):t._e()],2)],1)],1)},l=[],c={data:function(){return{drawer:!1}},computed:{isUserAuthenticated:function(){return this.$store.getters.isUserAuthenticated},menuItems:function(){return this.isUserAuthenticated?[{icon:"dashboard",title:"Калькулятор",route:"/calc"},{icon:"account_circle",title:"Мой кабинет",route:"/profile"}]:[{icon:"dashboard",title:"Калькулятор",route:"/calc"},{icon:"input",title:"Войти",route:"/signin"},{icon:"lock_open",title:"Зарегистрироваться",route:"/signup"}]}},methods:{signout:function(){var t=this;this.$confirm("Вы точно хотите выйти?").then(function(e){e&&t.$store.dispatch("SIGNOUT")})}}},u=c,d=a("2877"),p=a("6544"),f=a.n(p),v=a("8336"),m=a("132d"),h=a("8860"),g=a("ba95"),b=a("40fe"),_=a("5d23"),x=a("f774"),y=a("9910"),w=a("71d9"),V=a("2a7f"),C=a("706c"),S=Object(d["a"])(u,i,l,!1,null,"1d994a9a",null),T=S.exports;f()(S,{VBtn:v["a"],VIcon:m["a"],VList:h["a"],VListTile:g["a"],VListTileAction:b["a"],VListTileContent:_["g"],VListTileTitle:_["i"],VNavigationDrawer:x["a"],VSpacer:y["e"],VToolbar:w["a"],VToolbarItems:V["b"],VToolbarSideIcon:C["a"],VToolbarTitle:V["d"]});var E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-footer",{attrs:{fixed:!0,app:""}},[a("span",[t._v("Vent Calc ©2019")])])],1)},A=[],k={},O=k,R=a("553a"),I=Object(d["a"])(O,E,A,!1,null,"5bea04bf",null),$=I.exports;f()(I,{VFooter:R["a"]});var P={components:{AppHeader:T,AppFooter:$}},j=P,U=a("7496"),N=a("549c"),G=Object(d["a"])(j,s,o,!1,null,null,null),L=G.exports;f()(G,{VApp:U["a"],VContent:N["a"]});var D=a("8c4f"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},M=[],B={name:"home",components:{}},H=B,q=Object(d["a"])(H,F,M,!1,null,null,null),z=q.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{wrap:"","justify-center":"","justify-space-around":""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm6":""}},[a("calculate-list")],1)],1)],1)},W=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-expansion-panel",{attrs:{dark:""}},t._l(t.dataVent,function(e){return a("v-expansion-panel-content",{key:e.id,staticClass:"primary",scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"subheading font-weight-medium"},[t._v(t._s(e.titleCategory))])]},proxy:!0}],null,!0)},[a("v-expansion-panel",{attrs:{light:""}},t._l(e.subCategory,function(e,n){return a("v-expansion-panel-content",{key:n,staticClass:"white black--text",scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"body-2 font-weight-regular"},[t._v(t._s(e))])]},proxy:!0}],null,!0)},[a("card",[a("rect-duct")],1)],1)}),1)],1)}),1)},K=[],X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"pa-2 mb-4"},[a("v-img",{staticClass:"mb-4 mr-1 ml-1",attrs:{src:"https://cdn.vuetifyjs.com/images/cards/desert.jpg","aspect-ratio":"2"}}),a("div",{staticClass:"pr-2 pl-2"},[a("v-layout",[a("v-flex",{staticClass:"mt-3",attrs:{xs7:""}},[a("span",[t._v("Высота, A (мм)")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-flex",t._g({attrs:{xs5:""}},n),[a("v-text-field",{attrs:{height:"17"}})],1)]}}])},[a("span",[t._v("от 50 до 5000")])])],1),a("v-layout",[a("v-flex",{staticClass:"mt-3",attrs:{xs7:""}},[a("span",[t._v("Ширина, B (мм)")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-flex",t._g({attrs:{xs5:""}},n),[a("v-text-field",{attrs:{height:"17"}})],1)]}}])},[a("span",[t._v("от 50 до 5000")])])],1),a("v-layout",[a("v-flex",{staticClass:"mt-3",attrs:{xs7:""}},[a("span",[t._v("Длина, L (м)")])]),a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-flex",t._g({attrs:{xs5:""}},n),[a("v-text-field",{attrs:{height:"17"}})],1)]}}])},[a("span",[t._v("от 0.1 до 10")])])],1),a("v-layout",[a("v-flex",{staticClass:"mt-3",attrs:{xs7:""}},[a("span",[t._v("Толщина металла, t (мм)")])]),a("v-flex",{attrs:{xs5:""}},[a("v-select",{attrs:{items:t.metalThickness,height:"17"}})],1)],1),a("v-layout",[a("v-flex",{staticClass:"mt-3",attrs:{xs7:""}},[a("span",[t._v("Тип металла")])]),a("v-flex",{attrs:{xs5:""}},[a("v-select",{attrs:{items:t.metalType,height:"17"}})],1)],1),a("v-layout",[a("v-flex",{staticClass:"mt-3",attrs:{xs7:""}},[a("span",[t._v("Тип соединения")])]),a("v-flex",{attrs:{xs5:""}},[a("v-select",{attrs:{items:t.connectionType,height:"17"}})],1)],1),a("v-divider",{staticClass:"ma-3"}),a("v-layout",[a("v-flex",{staticClass:"mt-3",attrs:{xs7:""}},[a("span",[t._v("Кол-во, шт")])]),a("v-flex",{attrs:{xs5:""}},[a("v-text-field",{attrs:{height:"17"}})],1)],1)],1),a("v-card-actions",[a("v-btn",{attrs:{large:"",block:"",color:"success"}},[t._v("Добавить в заказ")])],1)],1)},Q=[],Z={data:function(){return{metalThickness:["0.5","0.55","0.6","0.7","1.0"],metalType:["Оц. сталь","Нерж. сталь"],connectionType:["Фланец №20","Фланец №30","Нет"]}}},tt=Z,et=a("b0af"),at=a("99d9"),nt=a("ce7e"),rt=a("0e8f"),st=a("adda"),ot=a("a722"),it=a("b56d"),lt=a("2677"),ct=a("3a2f"),ut=Object(d["a"])(tt,X,Q,!1,null,"5703f08b",null),dt=ut.exports;f()(ut,{VBtn:v["a"],VCard:et["a"],VCardActions:at["b"],VDivider:nt["a"],VFlex:rt["a"],VImg:st["a"],VLayout:ot["a"],VSelect:it["a"],VTextField:lt["a"],VTooltip:ct["a"]});var pt={components:{RectDuct:dt},computed:{dataVent:function(){return this.$store.getters.getDataVent}},methods:{}},ft=pt,vt=a("cd55"),mt=a("49e2"),ht=Object(d["a"])(ft,Y,K,!1,null,"44e507a0",null),gt=ht.exports;f()(ht,{VExpansionPanel:vt["a"],VExpansionPanelContent:mt["a"]});var bt={components:{CalculateList:gt}},_t=bt,xt=a("a523"),yt=Object(d["a"])(_t,J,W,!1,null,"29703ed4",null),wt=yt.exports;f()(yt,{VContainer:xt["a"],VFlex:rt["a"],VLayout:ot["a"]});var Vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Profile")])])}],St={},Tt=St,Et=Object(d["a"])(Tt,Vt,Ct,!1,null,"0121cb58",null),At=Et.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Регистрация")])],1),a("v-card-text",[a("v-alert",{attrs:{value:t.error,type:"warning"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.error)+"\n\t\t\t\t\t")]),a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Е-майл",type:"email",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Пароль",id:"password",type:"password",required:"",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",disabled:t.processing||!t.valid},on:{click:function(e){return e.preventDefault(),t.signup(e)}}},[t._v("Зарегистрироваться\n\t\t\t\t\t")])],1)],1)],1)],1)],1)},Ot=[],Rt={data:function(){return{email:null,password:null,valid:!1,emailRules:[function(t){return!!t||"Пожалуйста введите е-мейл"},function(t){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)||"Неправильный е-майл"}],passwordRules:[function(t){return!!t||"Пожалуйста введите пароль"},function(t){return t&&t.length>=6||"Пароль слишком короткий - минимум 6 символов"}]}},computed:{error:function(){return this.$store.getters.getError},processing:function(){return this.$store.getters.getProcessing},isUserAuthenticated:function(){return this.$store.getters.isUserAuthenticated}},watch:{isUserAuthenticated:function(t){!0===t&&this.$router.push("/")}},methods:{signup:function(){this.$store.dispatch("SIGNUP",{email:this.email,password:this.password})}}},It=Rt,$t=a("0798"),Pt=a("4bd4"),jt=Object(d["a"])(It,kt,Ot,!1,null,"c6ead968",null),Ut=jt.exports;f()(jt,{VAlert:$t["a"],VBtn:v["a"],VCard:et["a"],VCardActions:at["b"],VCardText:at["d"],VContainer:xt["a"],VFlex:rt["a"],VForm:Pt["a"],VLayout:ot["a"],VSpacer:y["e"],VTextField:lt["a"],VToolbar:w["a"],VToolbarTitle:V["d"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Вход")])],1),a("v-card-text",[a("v-alert",{attrs:{value:t.error,type:"warning"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.error)+"\n\t\t\t\t\t")]),a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Е-майл",type:"email",required:"",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Пароль",id:"password",type:"password",required:"",rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",disabled:t.processing||!t.valid},on:{click:function(e){return e.preventDefault(),t.signin(e)}}},[t._v("Войти\n\t\t\t\t\t")])],1)],1)],1)],1)],1)},Gt=[],Lt={data:function(){return{email:null,password:null,valid:!1,emailRules:[function(t){return!!t||"Пожалуйста введите е-мейл"},function(t){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)||"Неправильный е-майл"}],passwordRules:[function(t){return!!t||"Пожалуйста введите пароль"},function(t){return t&&t.length>=6||"Пароль слишком короткий - минимум 6 символов"}]}},computed:{error:function(){return this.$store.getters.getError},processing:function(){return this.$store.getters.getProcessing},isUserAuthenticated:function(){return this.$store.getters.isUserAuthenticated}},watch:{isUserAuthenticated:function(t){!0===t&&this.$router.push("/")}},methods:{signin:function(){this.$store.dispatch("SIGNIN",{email:this.email,password:this.password})}}},Dt=Lt,Ft=Object(d["a"])(Dt,Nt,Gt,!1,null,"f83c9208",null),Mt=Ft.exports;f()(Ft,{VAlert:$t["a"],VBtn:v["a"],VCard:et["a"],VCardActions:at["b"],VCardText:at["d"],VContainer:xt["a"],VFlex:rt["a"],VForm:Pt["a"],VLayout:ot["a"],VSpacer:y["e"],VTextField:lt["a"],VToolbar:w["a"],VToolbarTitle:V["d"]});var Bt=a("2f62"),Ht=a("8aa5"),qt=a.n(Ht),zt={state:{user:{isAuthenticated:!1,uid:null}},mutations:{SET_USER:function(t,e){t.user.isAuthenticated=!0,t.user.uid=e},UNSET_USER:function(t){t.user={isAuthenticated:!1,uid:null}}},actions:{SIGNUP:function(t,e){var a=t.commit;a("SET_PROCESSING",!0),qt.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(){a("SET_PROCESSING",!1)}).catch(function(t){a("SET_PROCESSING",!1),a("SET_ERROR",t.message)})},SIGNIN:function(t,e){var a=t.commit;a("SET_PROCESSING",!0),qt.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(){a("SET_PROCESSING",!1)}).catch(function(t){a("SET_PROCESSING",!1),a("SET_ERROR",t.message)})},SIGNOUT:function(){qt.a.auth().signOut()},STATE_CHANGED:function(t,e){var a=t.commit;e?a("SET_USER",e.uid):a("UNSET_USER")}},getters:{isUserAuthenticated:function(t){return t.user.isAuthenticated}}},Jt={state:{processing:!1,error:null},mutations:{SET_PROCESSING:function(t,e){t.processing=e},SET_ERROR:function(t,e){t.error=e},CLEAN_ERROR:function(t){t.error=null}},getters:{getProcessing:function(t){return t.processing},getError:function(t){return t.error}}},Wt={state:{dataVent:[{id:"4564613246543",titleCategory:"Воздуховоды и фасонные изделия круглого сечения",subCategory:["Воздуховод спирально-навивной","Воздуховод прямошовный","Нипель","Заглушка","Врезка прямая","Врезка седло","Муфта","Переход центральный","Переход односторонний","Переход центральный","Тройник","Тройник Y-образный","Отвод сегментный"]},{id:"45646132465435",titleCategory:"Сетевое оборудование для вентсистем круглого сечения",subCategory:["Дроссель-клапан (пластиковая ручка)","Дроссель-клапан DSV (металлическая ручка)","Обратный клапан","Зонт крышный","Дефлектор","Шумоглушитель"]},{id:"456461324654378",titleCategory:"Воздуховоды и фасонные изделия прямоугольного сечения",subCategory:["Воздуховод прямоугольный","Переход центральный прямоугольный","Переход односторонний прямоугольный в круг","Тройник прямоугольный","Тройник прямоугольный «орел»","Тройник прямоугольный «штаны»","Крестовина","Отвод прямоугольный (колено)","Заглушка","Врезка","Адаптер"]},{id:"456461354246543",titleCategory:"Сетевое оборудование для вентсистем прямоугольного сечения",subCategory:["Дроссель-клапан","Гравитационный клапан","Зонт крышный","Шумоглушитель"]},{id:"454554246543",titleCategory:"Прочее",subCategory:["Шинорейка №20","Шинорейка №30","Фланец №20","Фланец №30"]}]},mutations:{SET_DATAVENT:function(t,e){t.dataVent=e}},getters:{getDataVent:function(t){return t.dataVent}}};n["a"].use(Bt["a"]);var Yt=new Bt["a"].Store({modules:{generalModule:Jt,userModule:zt,calculateModule:Wt}});n["a"].use(D["a"]);var Kt=new D["a"]({routes:[{path:"/",name:"home",component:z},{path:"/calc",name:"calc",component:wt},{path:"/profile",name:"profile",component:At,beforeEnter:Xt},{path:"/signup",name:"signup",component:Ut},{path:"/signin",name:"signin",component:Mt}],mode:"history"});function Xt(t,e,a){Yt.getters.isUserAuthenticated?a():a("/signin")}var Qt=a("619b"),Zt=a.n(Qt),te=a("9eed"),ee=a.n(te),ae={apiKey:"AIzaSyAICEGejTELga8txOMYHMXJ_Az3GmS0t-o",authDomain:"ventcalc-7136b.firebaseapp.com",databaseURL:"https://ventcalc-7136b.firebaseio.com",projectId:"ventcalc-7136b",storageBucket:"ventcalc-7136b.appspot.com",messagingSenderId:"889548656969",appId:"1:889548656969:web:65ec43f5b8964a74"};n["a"].config.productionTip=!1,n["a"].use(ee.a,{buttonTrueText:"Да",buttonFalseText:"Нет",color:"primary",icon:"warning",title:"Выход",width:400,property:"$confirm"}),qt.a.initializeApp(ae),new n["a"]({router:Kt,store:Yt,materialIcons:Zt.a,render:function(t){return t(L)},created:function(){var t=this;qt.a.auth().onAuthStateChanged(function(e){t.$store.dispatch("STATE_CHANGED",e)})}}).$mount("#app")}});
//# sourceMappingURL=app.420b2047.js.map