(this.webpackJsonphackssi=this.webpackJsonphackssi||[]).push([[0],{132:function(e,t){},134:function(e,t){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t);var a=n(5),i=n.n(a),c=n(85),o=n.n(c),r=(n(95),n(12)),s=(n.p,n(96),n(9)),l=n.n(s),d=n(17),u=n(86),j=n.n(u),m=n(3);var f=function(e){var t=e.icon,n=e.onClick;return Object(m.jsx)("div",{className:j.a.container,onClick:n,children:t})},_=n(87),b=n(29),h=n(60),x=n.n(h);var v=function(e){var t=e.goToHome;return Object(m.jsx)("div",{className:x.a.container,children:Object(m.jsxs)("div",{className:x.a.menu,children:[Object(m.jsx)(f,{icon:Object(m.jsx)(_.a,{}),onClick:function(){t("dashboard")}}),Object(m.jsx)(f,{icon:Object(m.jsx)(b.b,{}),onClick:function(){t("plants")}})]})})},O=n(15),p=n(16),y=n(88),N=n.n(y),w=(n(116),function(){function e(){Object(O.a)(this,e)}return Object(p.a)(e,[{key:"getTodayWeather",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:"455903",N.a.create(),e.abrupt("return",{by:"woeid",valid_key:!1,results:{temp:20,date:"22/08/2021",time:"01:46",condition_code:"27",description:"Tempo limpo",currently:"noite",cid:"",city:"Ribeir\xe3o Preto, SP",img_id:"27n",humidity:40,wind_speedy:"3.09 km/h",sunrise:"06:28 am",sunset:"05:59 pm",condition_slug:"clear_night",city_name:"Ribeir\xe3o Preto",forecast:[{date:"08-22",weekday:"Sun",max:32,min:16,description:"Night Mostly cloudy",condition:"clear_day"},{date:"08-23",weekday:"Mon",max:35,min:17,description:"Night Mostly cloudy",condition:"clear_day"},{date:"08-24",weekday:"Tue",max:37,min:19,description:"Night Mostly cloudy",condition:"clear_day"},{date:"08-25",weekday:"Wed",max:37,min:20,description:"Night Mostly cloudy",condition:"clear_day"},{date:"08-26",weekday:"Thu",max:37,min:22,description:"Night partly cloudy",condition:"cloudly_day"},{date:"08-27",weekday:"Fri",max:35,min:17,description:"Scattered showers",condition:"rain"},{date:"08-28",weekday:"Sat",max:33,min:20,description:"Day mostly cloudy",condition:"cloudly_day"},{date:"08-29",weekday:"Sun",max:26,min:18,description:"Day mostly cloudy",condition:"cloudly_day"},{date:"08-30",weekday:"Mon",max:20,min:17,description:"Thundershowers",condition:"rain"},{date:"08-31",weekday:"Tue",max:30,min:15,description:"Scattered showers",condition:"rain"}]},execution_time:0,from_cache:!0});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),g=n(28),I=n.n(g),k=n(89),P=n(90);var C=function(e){var t=e.weatherInfo;return Object(m.jsxs)("div",{className:I.a.container,children:[Object(m.jsx)("div",{className:I.a.left_square,children:Object(m.jsx)(k.a,{size:75,color:"#A8D2C0"})}),Object(m.jsxs)("div",{className:I.a.info_container,children:[Object(m.jsx)("h3",{className:I.a.today,children:"Hoje"}),Object(m.jsx)("h2",{className:I.a.temp,children:(null===t||void 0===t?void 0:t.temp)+"\xb0C"}),Object(m.jsxs)("h3",{className:I.a.city,children:[Object(m.jsx)(P.a,{})," "+(null===t||void 0===t?void 0:t.city)]})]})]})},T=n(37),S=n.n(T),A=n(36);var M=function(e){var t=e.forecast;return Object(m.jsxs)("div",{className:S.a.container,children:[Object(m.jsx)(A.b,{size:60,color:"A8D2C0"}),Object(m.jsx)("h1",{className:S.a.date,children:null===t||void 0===t?void 0:t.date}),Object(m.jsx)("h3",{className:S.a.temp,children:"min "+(null===t||void 0===t?void 0:t.min)+" | m\xe1x "+(null===t||void 0===t?void 0:t.max)}),Object(m.jsx)("h3",{className:S.a.description,children:null===t||void 0===t?void 0:t.description})]})},W=n(61),D=n.n(W),F=n(45),E=n.n(F);var J=function(e){var t=e.title,n=e.info;return Object(m.jsxs)("div",{className:E.a.container,children:[Object(m.jsx)("h2",{className:E.a.title,children:t}),Object(m.jsx)("h2",{className:E.a.info,children:n})]})};var V=function(e){var t=e.weatherInfo;return void 0!=t&&Object(m.jsxs)("div",{className:D.a.container,children:[Object(m.jsxs)("h2",{className:D.a.main_title,children:[Object(m.jsx)(b.a,{color:"gray"})," ","Informa\xe7\xf5es da sua cidade"]}),Object(m.jsx)(J,{title:"Nascer do Sol",info:null===t||void 0===t?void 0:t.sunrise}),Object(m.jsx)("hr",{}),Object(m.jsx)(J,{title:"P\xf4r do Sol",info:null===t||void 0===t?void 0:t.sunset}),Object(m.jsx)("hr",{}),Object(m.jsx)(J,{title:"Velocidade do Vento",info:null===t||void 0===t?void 0:t.wind_speedy}),Object(m.jsx)("hr",{}),Object(m.jsx)(J,{title:"Umidade do Ar",info:(null===t||void 0===t?void 0:t.humidity)+"%"}),Object(m.jsx)("hr",{}),Object(m.jsx)(J,{title:"Atualizado",info:null===t||void 0===t?void 0:t.time}),Object(m.jsx)("hr",{}),Object(m.jsx)(J,{title:"Condi\xe7\xe3o",info:null===t||void 0===t?void 0:t.description})]})},B=n(62),z=n.n(B),U=n(46),G=n.n(U);var L=function(e){var t=e.title,n=e.info;return Object(m.jsxs)("div",{className:G.a.container,children:[Object(m.jsx)("h2",{className:G.a.title,children:t}),Object(m.jsx)("h2",{className:G.a.info,children:n})]})};var X=function(e){var t=e.localInfo;return Object(m.jsxs)("div",{className:z.a.container,style:{border:"1px solid",borderColor:null===t||void 0===t?void 0:t.led},children:[Object(m.jsxs)("h2",{className:z.a.main_title,children:[" ",Object(m.jsx)(b.a,{color:null===t||void 0===t?void 0:t.led}),"  ","Informa\xe7\xf5es dos Sensores"]}),Object(m.jsx)(L,{title:"Temperatura",info:(null===t||void 0===t?void 0:t.temperature)+"\xb0C"}),Object(m.jsx)("hr",{}),Object(m.jsx)(L,{title:"Resist\xeancia da planta\xe7\xe3o",info:(null===t||void 0===t?void 0:t.plant_resistance)+" / 5"}),Object(m.jsx)("hr",{}),Object(m.jsx)(L,{title:"Umidade",info:(null===t||void 0===t?void 0:t.humidity)+"%"}),Object(m.jsx)("hr",{}),Object(m.jsx)(L,{title:"\xcdndice de Luminosidade",info:null===t||void 0===t?void 0:t.photoresistor}),Object(m.jsx)("hr",{}),Object(m.jsx)(L,{title:"Tipo Clim\xe1tico",info:function(e){var t=new Map;return t.set(1,"Tropical"),t.set(2,"\xc1rido"),t.set(3,"Temperado"),t.set(4,"Continental"),t.set(5,"Polar"),t.get(e)}(null===t||void 0===t?void 0:t.climate_type)}),Object(m.jsx)("hr",{}),Object(m.jsx)(L,{title:"Objeto mais Pr\xf3ximo",info:(null===t||void 0===t?void 0:t.distance)+"cm"})]})},q=n(38),H=n.n(q);var R=function(e){var t=e.text,n=e.id,a=e.close;return Object(m.jsxs)("div",{className:H.a.container,children:[Object(m.jsxs)("div",{className:H.a.alert,children:[Object(m.jsx)("div",{className:H.a.icon,children:Object(m.jsx)(A.a,{size:20,color:"#E26E6E"})}),Object(m.jsx)("h2",{children:t})]}),Object(m.jsx)("div",{className:H.a.icon,children:Object(m.jsx)(A.c,{color:"#E26E6E",onClick:function(){a(n)}})})]})},K=n(30),Q=n.n(K);var Z=function(){var e=Object(a.useState)(new Map),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(!1),o=Object(r.a)(c,2),s=o[0],l=o[1],d=function(e){var t=n;t.delete(e),i(t),l(!s)};return Object(a.useEffect)((function(){!function(){var e=new Map;e.set(0,"Aten\xe7\xe3o \xe0s temperaturas inst\xe1veis esta semana!"),e.set(1,"Chuvas intensas nas pr\xf3ximas semanas"),e.set(2,"Geada no pr\xf3ximo m\xeas"),i(e)}()}),[]),Object(m.jsxs)("div",{className:Q.a.container,children:[Object(m.jsxs)("div",{className:Q.a.col1,children:[Object(m.jsx)("h2",{className:Q.a.welcome,children:"Bem Vindo, Jos\xe9!"}),Object(m.jsx)("h2",{className:Q.a.hru,children:"Como vai hoje?"})]}),Object(m.jsx)("div",{className:Q.a.col2,children:Array.from(n).map((function(e){return Object(m.jsx)(R,{id:e[0],text:e[1],close:d})}))})]})},Y=n(47),$=n.n(Y);var ee=function(e){var t=e.title,n=e.list;return Object(m.jsxs)("div",{className:$.a.container,children:[Object(m.jsx)("div",{className:$.a.title,children:t}),Object(m.jsx)("div",{className:$.a.list,children:Array.from(n).map((function(e){return e}))})]})},te=n(63),ne=n.n(te),ae=n(48),ie=n.n(ae),ce=n(49),oe=n.n(ce);var re=function(e){var t=e.title,n=e.info;return Object(m.jsxs)("div",{className:oe.a.container,children:[Object(m.jsx)("h2",{className:oe.a.title,children:t}),Object(m.jsx)("h2",{className:oe.a.info,children:n})]})};var se=function(e){var t=e.plant;return Object(m.jsxs)("div",{className:ie.a.container,children:[Object(m.jsx)("div",{className:ie.a.image_container}),Object(m.jsx)("div",{className:ie.a.name,children:t.name}),Object(m.jsx)(re,{title:"Resist\xeancia",info:t.resistency}),Object(m.jsx)(re,{title:"Esta\xe7\xe3o",info:t.season}),Object(m.jsx)(re,{title:"Clima",info:t.weather}),Object(m.jsx)(re,{title:"Umidade",info:t.humidity}),Object(m.jsx)(re,{title:"Luminosidade",info:t.luminosity})]})},le=function(){function e(){Object(O.a)(this,e)}return Object(p.a)(e,[{key:"getAllPlants",value:function(){return[{name:"Mandioca",image:"",season:"Ver\xe3o",weather:"Tropical",luminosity:"Alta",humidity:"70%",resistency:"4/5",wind:"Moderado"},{name:"Cana-de-a\xe7\xfacar",image:"",season:"Inverno",weather:"Sub Tropical",luminosity:"Alta",humidity:"84%",resistency:"4/5",wind:"Moderado"},{name:"Milho",image:"",season:"Primavera",weather:"Sub Tropical",luminosity:"Alta",humidity:"75%",resistency:"4/5",wind:"Moderado"},{name:"Caf\xe9",image:"",season:"Primavera",weather:"Tropical",luminosity:"M\xe9dia",humidity:"30%",resistency:"3/5",wind:"Moderado"}]}}]),e}(),de=n(64),ue=n.n(de),je=n(50),me=n.n(je);var fe=function(e){var t=e.title,n=e.info;return Object(m.jsxs)("div",{className:me.a.container,children:[Object(m.jsx)("h2",{className:me.a.title,children:t}),Object(m.jsx)("h2",{className:me.a.info,children:n})]})};var _e=function(e){var t=e.pest;return Object(m.jsxs)("div",{className:ue.a.container,children:[Object(m.jsx)("div",{className:ue.a.name,children:t.name}),Object(m.jsx)(fe,{title:"Esta\xe7\xe3o",info:t.season}),Object(m.jsx)(fe,{title:"Danos",info:t.damage}),Object(m.jsx)(fe,{title:"Controle",info:t.control})]})},be=function(){function e(){Object(O.a)(this,e)}return Object(p.a)(e,[{key:"getAllPests",value:function(){return[{name:"Pulg\xe3o",damage:"Seca dos galhos",season:"Ver\xe3o",control:"Chuva e inimigos naturais"},{name:"Pulg\xe3o",damage:"Seca dos galhos",season:"Ver\xe3o",control:"Chuva e inimigos naturais"}]}}]),e}(),he=function(){function e(){Object(O.a)(this,e)}return Object(p.a)(e,[{key:"getAllDisease",value:function(){return[{name:"Ferrugem Asi\xe1tica",damage:"Perca significativa",season:"Todas",control:"Uso de fungicida"},{name:"Ferrugem Asi\xe1tica",damage:"Perca significativa",season:"Todas",control:"Uso de fungicida"}]}}]),e}();var xe=function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new le,e.next=3,t.getAllPlants();case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new be,e.next=3,t.getAllPests();case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new he,e.next=3,t.getAllDisease();case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=Object(a.useState)([]),c=Object(r.a)(i,2),o=c[0],s=c[1],u=Object(a.useState)([]),j=Object(r.a)(u,2),f=j[0],_=j[1],b=Object(a.useState)([]),h=Object(r.a)(b,2),x=h[0],v=h[1];return Object(a.useEffect)(Object(d.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.t0=_,a.next=3,t();case 3:return a.t1=a.sent,(0,a.t0)(a.t1),a.t2=s,a.next=8,e();case 8:return a.t3=a.sent,(0,a.t2)(a.t3),a.t4=v,a.next=13,n();case 13:a.t5=a.sent,(0,a.t4)(a.t5);case 15:case"end":return a.stop()}}),a)}))),[]),Object(m.jsxs)("div",{className:ne.a.container,children:[Object(m.jsx)("div",{className:ne.a.info,children:"Consulte qual as melhores condi\xe7\xf5es para seu tipo de cultura!"}),Object(m.jsx)(ee,{title:"Plantas",list:Array.from(o).map((function(e){return Object(m.jsx)(se,{plant:e})}))}),Object(m.jsx)(ee,{title:"Doen\xe7as",list:Array.from(x).map((function(e){return Object(m.jsx)(_e,{pest:e})}))}),Object(m.jsx)(ee,{title:"Pragas",list:Array.from(f).map((function(e){return Object(m.jsx)(_e,{pest:e})}))})]})},ve=n(31),Oe=n.n(ve);n(39);var pe=function(e){e.goToHome;var t,n,i=Object(a.useState)(),c=Object(r.a)(i,2),o=c[0],s=c[1],u=Object(a.useState)(),j=Object(r.a)(u,2),f=j[0],_=j[1],b=Object(a.useState)(!1),h=Object(r.a)(b,2),x=h[0],O=(h[1],Object(a.useState)("dashboard")),p=Object(r.a)(O,2),y=p[0],N=p[1],g=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new w,e.next=3,t.getTodayWeather();case 3:n=e.sent,s(null===n||void 0===n?void 0:n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _({climate_type:5,distance:250,humidity:45,led:"#FF0000",photoresistor:"Alta",plant_resistance:5,temperature:22}),e.next=3,g();case 3:case"end":return e.stop()}}),e)}))),[]),Object(m.jsxs)("div",{className:Oe.a.container,children:[Object(m.jsx)(v,{goToHome:N}),"dashboard"===y&&Object(m.jsxs)("div",{className:Oe.a.right_col,children:[Object(m.jsx)(Z,{}),Object(m.jsxs)("div",{className:Oe.a.row1,children:[Object(m.jsx)(C,{weatherInfo:o}),Object(m.jsx)("div",{className:Oe.a.forecast,children:void 0!=o&&(null===(t=Array.from(null===o||void 0===o?void 0:o.forecast))||void 0===t||null===(n=t.splice(1,3))||void 0===n?void 0:n.map((function(e){return Object(m.jsx)(M,{forecast:e})})))})]}),(x||!x)&&Object(m.jsxs)("div",{className:Oe.a.row2,children:[Object(m.jsx)(V,{weatherInfo:o}),Object(m.jsx)(X,{localInfo:f})]})]}),"plants"===y&&(x||!x)&&Object(m.jsx)(xe,{})]})};n(190);var ye=function(){var e=Object(a.useState)(Object(m.jsx)(pe,{})),t=Object(r.a)(e,2),n=t[0];return t[1],Object(m.jsx)("div",{className:"body",children:Object(m.jsx)("div",{className:"container",children:n})})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,193)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),c(e),o(e)}))};n(191);o.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(ye,{})}),document.getElementById("root")),Ne()},28:function(e,t,n){e.exports={container:"TodayWeather_container__2JNQ5",left_square:"TodayWeather_left_square__3wsyy",info_container:"TodayWeather_info_container__2do8r",today:"TodayWeather_today__3r0vy",temp:"TodayWeather_temp__2vCpx",city:"TodayWeather_city__2fJZS"}},30:function(e,t,n){e.exports={container:"Welcome_container__2WrZ9",col1:"Welcome_col1__1J83X",welcome:"Welcome_welcome__3Vp2O",hru:"Welcome_hru__3YvzK",col2:"Welcome_col2__2TPcq"}},31:function(e,t,n){e.exports={container:"Dashboard_container__2oJTU",right_col:"Dashboard_right_col__BCXb0",row1:"Dashboard_row1__udxDX",forecast:"Dashboard_forecast__2KSDx",row2:"Dashboard_row2__3jXJi"}},37:function(e,t,n){e.exports={container:"Forecast_container__CftgT",date:"Forecast_date__2Kyfp",temp:"Forecast_temp__u9Q-7",description:"Forecast_description__2ilBt"}},38:function(e,t,n){e.exports={container:"Alert_container__2OhrN",alert:"Alert_alert__x9kU3"}},45:function(e,t,n){e.exports={container:"InfoItem_container__3kgB0",title:"InfoItem_title__3jXJI",info:"InfoItem_info__188-U"}},46:function(e,t,n){e.exports={container:"InfoItem_container__3PdGR",title:"InfoItem_title__1UmdB",info:"InfoItem_info__3If3W"}},47:function(e,t,n){e.exports={container:"Generic_container__37kko",title:"Generic_title__1Ov56",list:"Generic_list__2zsa5"}},48:function(e,t,n){e.exports={container:"PlantCard_container__NaelA",name:"PlantCard_name__1y1zV"}},49:function(e,t,n){e.exports={container:"InfoItem_container__X8Gm0",title:"InfoItem_title__1bBhr",info:"InfoItem_info__39_lW"}},50:function(e,t,n){e.exports={container:"InfoItem_container__1PPsX",title:"InfoItem_title__jbdBO",info:"InfoItem_info__2y52H"}},60:function(e,t,n){e.exports={container:"SideMenu_container__2zLo_",menu:"SideMenu_menu__2xVJV"}},61:function(e,t,n){e.exports={container:"Info_container__2pVop",main_title:"Info_main_title__1OiPB"}},62:function(e,t,n){e.exports={container:"Info_container__LBn-W",main_title:"Info_main_title__27nqG"}},63:function(e,t,n){e.exports={container:"Plants_container__xevJx",info:"Plants_info__PeibP"}},64:function(e,t,n){e.exports={container:"PestCard_container__2KmV6",name:"PestCard_name__31kOJ"}},86:function(e,t,n){e.exports={container:"MenuItem_container__2PLzj"}},95:function(e,t,n){},96:function(e,t,n){}},[[192,1,2]]]);
//# sourceMappingURL=main.f586703f.chunk.js.map