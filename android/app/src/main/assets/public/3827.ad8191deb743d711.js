"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3827],{3827:(Z,c,o)=>{o.r(c),o.d(c,{TemperaturaPageModule:()=>P});var l=o(6895),u=o(433),n=o(2078),d=o(2254),p=o(655),e=(o(9386),o(4650)),m=o(4123);const g=function(t){return{"--p":t}};function h(t,r){if(1&t&&(e.TgZ(0,"ion-item",9),e._uU(1),e.TgZ(2,"div",10),e._uU(3),e.qZA()()),2&t){const a=e.oxw();e.xp6(1),e.hij(" ","Temperatura"," "),e.xp6(1),e.Q6J("ngStyle",e.VKq(3,g,a.data1)),e.xp6(1),e.hij(" ",a.data.temperatura,"\xb0c ")}}function f(t,r){if(1&t&&(e.TgZ(0,"ion-item",9)(1,"div",11),e._uU(2),e.qZA(),e._uU(3),e.qZA()),2&t){const a=e.oxw();e.xp6(1),e.Q6J("ngStyle",e.VKq(3,g,a.data3)),e.xp6(1),e.hij(" ",a.data.humedad,"% "),e.xp6(1),e.hij(" ","Humedad"," ")}}function b(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1," La bombilla esta encendida "),e.qZA())}function v(t,r){1&t&&(e.TgZ(0,"div"),e._uU(1," La bombilla esta apagada "),e.qZA())}const T=[{path:"",component:(()=>{class t{constructor(a,i){this.dataService=a,this.alertController=i,this.toggleValue=!1}handleToggleClick(){this.enviardatos(),this.presentAlert()}ngOnInit(){this.dataService.getData().subscribe(a=>{this.data=a,console.log(this.data)}),this.dataService.leerDatos("/planta_baja/temperatura").subscribe(a=>{this.data1=a}),this.dataService.leerDatos("/planta_baja/ctrfoco").subscribe(a=>{this.data2=a,this.toggleValue=this.data2}),this.dataService.leerDatos("/planta_baja/humedad").subscribe(a=>{this.data3=a})}enviardatos(){0==this.data2?this.dataService.activar_foco("/planta_baja/ctrfoco",!0):1==this.data2&&this.dataService.activar_foco("/planta_baja/ctrfoco",!1)}presentAlert(){return(0,p.mG)(this,void 0,void 0,function*(){let a,i;this.toggleValue?(a="Alerta",i="La temperatura es inestable, no puede apagar la bombilla"):(a="Alerta",i="La temperatura es estale, no puede prender la bombilla"),yield(yield this.alertController.create({header:a,message:i,buttons:["OK"]})).present()})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(m.g),e.Y36(n.Br))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-temperatura"]],decls:22,vars:5,consts:[["slot","start"],["defaultHref","/"],[2,"text-align","center","align-items","center","margin-top","auto"],[1,"ion-text-center",2,"margin-top","20%"],["lines","none",4,"ngIf"],[1,"ion-text-center"],[4,"ngIf","ngIfElse"],["toggleFalseMessage",""],[2,"justify-content","center","margin","40px",3,"checked","click"],["lines","none"],[1,"pie",2,"--p","50","--b","10px","--c","blue",3,"ngStyle"],[1,"pie",2,"--p","50","--b","10px","--c","aqua",3,"ngStyle"]],template:function(a,i){if(1&a&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Clima en el hotel"),e.qZA()()(),e.TgZ(6,"ion-content",2)(7,"ion-grid")(8,"ion-row")(9,"ion-col")(10,"div",3),e.YNc(11,h,4,5,"ion-item",4),e.qZA()()()(),e.TgZ(12,"ion-grid")(13,"ion-row")(14,"ion-col")(15,"div",5),e.YNc(16,f,4,5,"ion-item",4),e.qZA()()()(),e._UZ(17,"br"),e.YNc(18,b,2,0,"div",6),e.YNc(19,v,2,0,"ng-template",null,7,e.W1O),e.TgZ(21,"ion-toggle",8),e.NdJ("click",function(){return i.handleToggleClick()}),e.qZA()()),2&a){const s=e.MAs(20);e.xp6(11),e.Q6J("ngIf",i.data),e.xp6(5),e.Q6J("ngIf",i.data),e.xp6(2),e.Q6J("ngIf",i.toggleValue)("ngIfElse",s),e.xp6(3),e.Q6J("checked",i.toggleValue)}},dependencies:[l.O5,l.PC,n.oU,n.Sm,n.wI,n.W2,n.jY,n.Gu,n.Ie,n.Nd,n.wd,n.ho,n.sr,n.w,n.cs],styles:['.pie[_ngcontent-%COMP%]{--w:50%;width:var(--w);aspect-ratio:1;position:relative;display:inline-grid;place-content:center;margin:5%;font-size:25px;font-weight:700;font-family:sans-serif}.pie[_ngcontent-%COMP%]:before{content:"";position:absolute;border-radius:50%;inset:0;background:conic-gradient(var(--c) calc(var(--p) * 1%),rgba(255,255,255,0) 0);-webkit-mask:radial-gradient(farthest-side,rgba(0,0,0,0) calc(99% - var(--b)),#000 calc(100% - var(--b)));mask:radial-gradient(farthest-side,rgba(255,255,255,0) calc(99% - var(--b)),#000 calc(100% - var(--b)))}ion-toggle[_ngcontent-%COMP%]{height:10px;width:65px;padding:12px;--background: #ddd;--background-checked: #ddd;--handle-background: #eb7769;--handle-background-checked: #95c34e;--handle-width: 25px;--handle-height: 27px;--handle-max-height: auto;--handle-spacing: 6px;--handle-border-radius: 4px;--handle-box-shadow: none;overflow:visible;contain:none}ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse}']}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(T),d.Bz]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,u.u5,n.Pc,x]}),t})()}}]);