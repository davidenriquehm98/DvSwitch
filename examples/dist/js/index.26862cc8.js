(function(e){function t(t){for(var a,r,i=t[0],c=t[1],s=t[2],p=0,u=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,s||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,i=1;i<o.length;i++){var c=o[i];0!==l[c]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=o[0]))}return e}var a={},l={index:0},n=[];function r(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=a,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=c;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("8365")},8365:function(e,t,o){"use strict";o.r(t);o("ac1f"),o("5319"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{"fill-height":"","grid-list-xl":""}},[o("v-layout",{attrs:{"justify-center":"",wrap:""}},[o("v-flex",{attrs:{xs12:"",md10:""}},[o("span",{staticClass:"display-1"},[e._v(" Simple Switch ")]),o("br"),o("v-chip",{attrs:{label:"",outline:"",color:"red"}},[o("strong",[e._v(" dv-switch ")])]),o("v-card",[o("v-card-text",[o("v-container",[o("v-layout",[o("dv-switch",{attrs:{items:e.items,color:"pink",outline:"",badge:"",item_value:"texto"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),o("v-text-field",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1),o("v-container",[o("v-layout",[o("dv-switch",{attrs:{items:e.items,destacar:{prop:"texto",value:"Color"},color:"blue-grey",label:""},model:{value:e.selected2,callback:function(t){e.selected2=t},expression:"selected2"}}),o("v-text-field",{model:{value:e.selected2,callback:function(t){e.selected2=t},expression:"selected2"}})],1)],1),o("v-container",[o("v-layout",[o("dv-switch",{attrs:{items:e.items,color:"cyan",destacar:{prop:"prepend_activo",value:"swap_vertical_circle"},label:"",return_object:""},model:{value:e.selected3,callback:function(t){e.selected3=t},expression:"selected3"}})],1)],1)],1),e._v(" "+e._s(e.selected3)+" "),o("tabs-propiedades",{attrs:{propiedades:e.propiedades}})],1)],1),o("v-flex",{attrs:{xs12:"",md2:""}})],1)],1)},n=[],r={name:"App",data:function(){return{selected:"Peliculas",selected2:4,selected3:{texto:"Color",append:"backup",value:!1},items:[{texto:"Todas",color:"orange",prepend_activo:"swap_vertical_circle",prepend_inactivo:"settings_bluetooth"},{texto:"animales",imagen_append_activo:"https://cdn.iconscout.com/icon/premium/png-64-thumb/crisis-management-2534703-2129518.png",imagen_prepend:"https://cdn.iconscout.com/icon/premium/png-64-thumb/delivery-product-2534902-2129568.png",color:"deep-purple"},{texto:"Importantes",color:"indigo",append:"settings_bluetooth"},{texto:"Plantas",imagen_append:"https://cdn.iconscout.com/icon/premium/png-64-thumb/delivery-product-2534902-2129568.png",color:"cyan"},{texto:"Imagenes",color:"blue",prepend:"extension"},{texto:"Paises",imagen_prepend:"replace",color:"light-green darken-3"},{texto:"Color",append:"backup"},{texto:"Comida",imagen_append_activo:"https://cdn.iconscout.com/icon/premium/png-64-thumb/delivery-product-2534902-2129568.png",imagen_append_inactivo:"https://cdn.iconscout.com/icon/premium/png-64-thumb/delivery-product-2534902-2129568.png",color:"amber darken-1"},{texto:"Texto",color:"red",prepend:"bug_report"},{texto:"Bebidas",imagen_prepend:"productos",color:"blue-grey darken-2",badge_value:5},{texto:"tamaño",color:"yellow",append:"mail"},{texto:"Peliculas",imagen_append:"favicon",imagen_prepend:"productos",append:"backup",prepend:"swap_vertical_circle"}],propiedades:[{nombre:"color",default:"primary",tipo:"String",descripcion:"Define el color de la Caja de Texto."},{nombre:"disabled",default:"false",tipo:"Boolean",descripcion:"Desactiva todos los controles del switch"},{nombre:"items",default:"[]",tipo:"Array",descripcion:"Contiene la lista de controles que tendra el switch",important:!0},{nombre:"item_value",default:"null",tipo:"String",descripcion:"Define la propiedad de el item que devolvera el switch, si se omite se devolvera el index",important:!0},{nombre:"label",default:"false",tipo:"Boolean",descripcion:"Controles con estilo Label"},{nombre:"outline",default:"false",tipo:"Boolean",descripcion:"Controles con estilo Outline"},{nombre:"return_object",default:"false",tipo:"Boolean",descripcion:"define que el switch devuelva todo el objeto seleccionado"},{nombre:"small",default:"false",tipo:"Boolean",descripcion:"Controles con estilo Small"},{nombre:"text_color",default:"black",tipo:"String",descripcion:"Define el color de texto en generas, siempre y cuando no haya uno a nivel de item"},{nombre:"unactive_color",default:"grey lighten-1",tipo:"String",descripcion:"Define el color del control desactivado en generas, siempre y cuando no haya uno a nivel de item"}]}}},i=r,c=o("2877"),s=o("6544"),d=o.n(s),p=o("b0af"),u=o("99d9"),v=o("cc20"),_=o("a523"),m=o("0e8f"),f=o("a722"),b=o("2677"),g=Object(c["a"])(i,l,n,!1,null,null,null),h=g.exports;d()(g,{VCard:p["a"],VCardText:u["a"],VChip:v["a"],VContainer:_["a"],VFlex:m["a"],VLayout:f["a"],VTextField:b["a"]});var y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{staticClass:"text-xs-center",attrs:{md12:"",sm12:"",xs12:""}},[o("v-tabs",{attrs:{centered:e.center,right:e.right,"show-arrows":"",color:"transparent"}},[o("v-tabs-slider",{attrs:{color:"transparent"}}),e._l(e.items,(function(t){return o("v-tab",{key:e.items.indexOf(t),staticClass:"myTb",attrs:{ripple:!1}},[!0===t.value?o("v-chip",{class:e.disabled?"":"ss-chip",attrs:{color:t.color?t.color:e.color,"text-color":t.text_color?t.text_color:e.text_color,label:e.label,outline:e.outline,small:e.small}},[t.prepend_activo?o("i",{staticClass:"pr-1",class:t.prepend_activo,attrs:{color:t.icon_color?t.icon_color:e.icon_color}}):e._e(),null!=e.destacar.prop&&t[e.destacar.prop]===e.destacar.value?o("v-icon",{staticClass:"pr-1",attrs:{small:"",color:"yellow"}},[e._v(" "+e._s(e.destacado_icon)+" ")]):e._e(),t.prepend_activo?o("v-icon",{staticClass:"pr-1",attrs:{color:t.icon_color?t.icon_color:e.icon_color}},[e._v(" "+e._s(t.prepend_activo)+" ")]):e._e(),t.imagen_prepend_activo?o("img",{staticClass:"pr-1",attrs:{src:t.imagen_prepend_activo,height:"25px"}}):e._e(),o("strong",{staticClass:"text-capitalize"},[e._v(" "+e._s(t.texto)+" ")]),t.imagen_append_activo?o("img",{staticClass:"pl-1",attrs:{src:t.imagen_append_activo,height:"25px"}}):e._e(),t.append_activo?o("v-icon",{staticClass:"pl-1",attrs:{color:t.icon_color?t.icon_color:e.icon_color}},[e._v(" "+e._s(t.append_activo)+" ")]):e._e(),e.badge?o("v-avatar",{staticClass:" font-weight-bold ml-2",style:"color: "+(t.badge_text_color?t.badge_text_color:e.text_color),attrs:{color:t.badge_color?t.badge_color:e.color}},[e._v(" "+e._s(t.badge_value?t.badge_value:0)+" ")]):e._e(),e.edit?o("v-icon",{staticClass:"pl-1",attrs:{color:t.text_color?t.text_color:e.text_color},on:{click:function(o){return e.editItem(t)}}},[e._v(" "+e._s(e.edit_icon)+" ")]):e._e(),e.close?o("v-icon",{staticClass:"pl-1",attrs:{color:t.text_color?t.text_color:e.text_color},on:{click:function(o){return e.removeItem(t)}}},[e._v(" "+e._s(e.clear_icon)+" ")]):e._e()],1):o("v-chip",{class:e.disabled?"":"ss-chip",attrs:{color:t.unactive_color?t.unactive_color:e.unactive_color,disabled:e.disabled,label:e.label,outline:e.outline,small:e.small,"text-color":t.unactive_text_color?t.unactive_text_color:e.unactive_text_color},on:{click:function(o){!e.disabled&&e.select(t)},keyup:function(o){if(!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter"))return null;!e.disabled&&e.select(t)}}},[null!=e.destacar.prop&&t[e.destacar.prop]===e.destacar.value?o("v-icon",{staticClass:"pr-1",attrs:{small:"",color:"yellow"}},[e._v(" "+e._s(e.destacado_icon)+" ")]):e._e(),t.prepend_inactivo?o("v-icon",{staticClass:"pr-1"},[e._v(" "+e._s(t.prepend_inactivo)+" ")]):e._e(),t.imagen_prepend_inactivo?o("img",{staticClass:"pr-1",staticStyle:{filter:"grayscale(100%)"},attrs:{src:t.imagen_prepend_inactivo,height:"25px"}}):e._e(),o("strong",{staticClass:"text-capitalize"},[e._v(" "+e._s(t.texto)+" ")]),t.imagen_append_inactivo?o("img",{staticClass:"pl-1",staticStyle:{filter:"grayscale(100%)"},attrs:{src:t.imagen_append_inactivo,height:"25px"}}):e._e(),t.append_inactivo?o("v-icon",{staticClass:"pl-1"},[e._v(" "+e._s(t.append_inactivo)+" ")]):e._e(),e.badge?o("v-avatar",{staticClass:"font-weight-bold  ml-2 badgeAvatar ",style:"color: "+(t.badge_text_color?t.badge_text_color:e.text_color),attrs:{color:t.badge_color?t.badge_color:e.color}},[e._v(" "+e._s(t.badge_value?t.badge_value:0)+" ")]):e._e(),e.edit?o("v-icon",{staticClass:"pl-1",attrs:{color:t.unactive_text_color?t.unactive_text_color:e.unactive_text_color},on:{click:function(o){return e.editItem(t)}}},[e._v(" "+e._s(e.edit_icon)+" ")]):e._e(),e.close?o("v-icon",{staticClass:"pl-1",attrs:{color:t.unactive_text_color?t.unactive_text_color:e.unactive_text_color},on:{click:function(o){return e.removeItem(t)}}},[e._v(" "+e._s(e.clear_icon)+" ")]):e._e()],1)],1)}))],2)],1)],1)},x=[],C=(o("4160"),o("c975"),o("a9e3"),o("e25e"),o("159b"),{name:"DvSwitch",model:{prop:"selected",event:"input"},props:{close:{type:Boolean,default:!1},color:{type:String,default:"#616161"},disabled:{type:Boolean,default:!1},center:{type:Boolean,default:!1},clear_icon:{type:String,default:"close"},destacar:{type:Object,default:function(){return{}}},destacado_icon:{type:String,default:"star"},edit:{type:Boolean,default:!1},edit_icon:{type:String,default:"edit"},items:{type:Array,default:function(){return[]}},item_value:{type:String,default:null},label:{type:Boolean,default:!1},outline:{type:Boolean,default:!1},selected:{type:[Number,String,Array,Object],required:!0},small:{type:Boolean,default:!1},text_color:{type:String,default:"black"},icon_color:{type:String,default:"black"},unactive_color:{type:String,default:"#b5b5b5"},unactive_text_color:{type:String,default:"grey darken-3"},rules:{type:Array,default:function(){return[]}},right:{type:Boolean,default:!1},return_object:{type:Boolean,default:!1},badge:{type:Boolean,default:!1}},data:function(){return{modelo:null}},watch:{selected:function(){var e=this;this.modelo=this.selected,this.items.forEach((function(t){!0===e.return_object?JSON.stringify(t)===JSON.stringify(e.selected)?(t.value=!0,e.enviarModelo()):t.value=!1:null===e.item_value?e.items.indexOf(t)===parseInt(e.selected)?(t.value=!0,e.enviarModelo()):t.value=!1:void 0!==t[e.item_value]&&(t[e.item_value]===e.selected?(t.value=!0,e.enviarModelo()):t.value=!1)})),this.$forceUpdate()},rules:function(){}},created:function(){var e=this;this.modelo=this.selected,this.items.forEach((function(t){!0===e.return_object?JSON.stringify(t)===JSON.stringify(e.selected)?(t.value=!0,e.enviarModelo()):t.value=!1:null===e.item_value?e.items.indexOf(t)===parseInt(e.selected)?(t.value=!0,e.enviarModelo()):t.value=!1:void 0!==t[e.item_value]&&(t[e.item_value]===e.selected?(t.value=!0,e.enviarModelo()):t.value=!1)})),this.$forceUpdate()},methods:{enviarModelo:function(){this.$emit("input",this.modelo)},select:function(e){var t=this;this.items.forEach((function(o){o===e?(o.value=!0,t.$forceUpdate(),!0===t.return_object?t.modelo=o:null===t.item_value?t.modelo=t.items.indexOf(o):void 0===o[t.item_value]?t.modelo="undefined":t.modelo=o[t.item_value],t.enviarModelo()):o.value=!1})),this.$forceUpdate(),this.$emit("change")},reset:function(){this.select(null),this.modelo=null,this.enviarModelo()},removeItem:function(e){var t=this;this.$alertify.confirmWithTitle("Eliminar Registro","¿Esta seguro de Eliminar el Registro de "+e.tipo+" ?",(function(){t.$emit("removeItem",e)}),(function(){}))},editItem:function(e){this.$emit("editItem",e)}}}),w=C,k=o("8212"),S=o("132d"),O=o("71a3"),j=o("fe57"),B=o("9a96"),V=Object(c["a"])(w,y,x,!1,null,null,null),E=V.exports;d()(V,{VAvatar:k["a"],VChip:v["a"],VFlex:m["a"],VIcon:S["a"],VLayout:f["a"],VTab:O["a"],VTabs:j["a"],VTabsSlider:B["a"]});var T={install:function(e){e.component("dv-switch",E)}},I=o("bb71"),M=(o("da64"),o("c0a4")),D=o.n(M),$=o("d7a2");a["default"].use(T),a["default"].use(I["a"],{iconfont:"md",theme:{primary:"#12491D",accent:D.a.grey.darken3,secondary:"#8A322C",info:D.a.teal.lighten1,warning:D.a.amber.base,error:D.a.deepOrange.accent4,success:D.a.lightGreen.darken4,update:"#2196F3",accent1:"#62737D",accent2:"#2E2D2E",base:"#12491D",sombra1:"#115746",sombra2:"#136139",sombra3:"#1B6113",sombra4:"#315711",complementarioa:"#4FE36D",complementario1:"#359648",complementariob:"#39A34E",complementarioc:"#E30B28",complementario2:"#96081C",complementariod:"#A3081D"},directives:{Ripple:$["Ripple"],Scroll:$["Scroll"],ClickOutside:$["ClickOutside"]},options:{minifyTheme:function(e){return e.replace(/[\s|\r\n|\r|\n]/g,"")}}}),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=index.26862cc8.js.map