"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6603],{6603:(h,s,n)=>{n.r(s),n.d(s,{MovimientoPageModule:()=>f});var r=n(6895),c=n(433),i=n(2078),m=n(2254),t=(n(9386),n(4650)),l=n(4123);const d=function(o,a){return{"movimiento-activo":o,"movimiento-inactivo":a}};function g(o,a){if(1&o&&(t.TgZ(0,"ion-card",4)(1,"ion-card-header")(2,"ion-card-title"),t._uU(3),t.qZA()(),t._UZ(4,"img",5),t.qZA()),2&o){const e=t.oxw();t.Q6J("ngClass",t.WLB(3,d,e.movimiento,!e.movimiento)),t.xp6(3),t.hij(" ",e.data.movimiento?"Hay movimiento, revisar el hotel.":"No hay movimiento en el hotel."," "),t.xp6(1),t.Q6J("src",e.movimiento?"../../assets/icon/conmovimiento.png":"../../assets/icon/sinmovimiento.png",t.LSH)}}const v=[{path:"",component:(()=>{class o{constructor(e){this.dataService=e,this.movimiento=!1}ngOnInit(){this.dataService.getData().subscribe(e=>{this.data=e,console.log(this.data)}),this.dataService.leerDatos("/planta_baja/temperatura").subscribe(e=>{this.data1=e}),this.dataService.leerDatos("/planta_baja/movimiento").subscribe(e=>{this.data2=e,0==this.data2?this.movimiento=!1:1==this.data2&&(this.movimiento=!0)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(l.g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-movimiento"]],decls:8,vars:2,consts:[["slot","start"],["defaultHref","/"],[2,"--border-width","0px","align-items","center","text-align","center",3,"fullscreen"],["color","primary","style","margin: 25px; border-radius: 1rem; margin-top: 50%;",3,"ngClass",4,"ngIf"],["color","primary",2,"margin","25px","border-radius","1rem","margin-top","50%",3,"ngClass"],["alt","Imagen de movimiento",3,"src"]],template:function(e,p){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-back-button",1),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Actividad"),t.qZA()()(),t.TgZ(6,"ion-content",2),t.YNc(7,g,5,6,"ion-card",3),t.qZA()),2&e&&(t.xp6(6),t.Q6J("fullscreen",!0),t.xp6(1),t.Q6J("ngIf",p.data))},dependencies:[r.mk,r.O5,i.oU,i.Sm,i.PM,i.Zi,i.Dq,i.W2,i.Gu,i.wd,i.sr,i.cs],styles:["ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse}.movimiento-activo[_ngcontent-%COMP%]{background-image:linear-gradient(to bottom,rgba(255,0,0,.685) 50%,rgb(255,0,0))}.movimiento-inactivo[_ngcontent-%COMP%]{background-image:linear-gradient(to bottom,rgba(0,255,163,.535) 50%,rgba(71,60,194,.56))}"]}),o})()}];let u=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(v),m.Bz]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.ez,c.u5,i.Pc,u]}),o})()}}]);