(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[95],{1192:function(e,r,t){"use strict";r.a=t.p+"static/media/countrylogo.e6c1a523.svg"},3307:function(e,r,t){"use strict";t.r(r);var n=t(26),a=t(224),c=t(61),i=t(3),o=t(1),s=t(7),l=t(0),u=t(3325),d=t(81),b=t(3379),j=t(682),p=t(453),m=t(696),h=t(113),x=t(694),O=t(213),f=(t(588),t(538)),g=t.n(f),v=t(214),y=t(1032),C=t(42),T=t(1192),k=(t(639),t(4));r.default=function(){var e=Object(l.useState)({}),r=Object(s.a)(e,2),t=r[0],f=r[1],E=Object(l.useState)([]),N=Object(s.a)(E,2),S=N[0],w=N[1],q=Object(l.useState)(!1),B=Object(s.a)(q,2),I=B[0],P=B[1],D=localStorage.getItem("auth_token"),M=Object(l.useState)(!0),A=Object(s.a)(M,2),F=(A[0],A[1],Object(l.useState)(!1)),z=Object(s.a)(F,2),U=(z[0],z[1],Object(l.useState)(!1)),J=Object(s.a)(U,2),L=J[0],W=J[1],_=Object(l.useState)(!1),R=Object(s.a)(_,2),V=R[0],G=R[1],H=u.a.useForm(),K=Object(s.a)(H,1)[0],Q=Object(O.b)().t,X=Object(C.g)();Object(l.useEffect)((function(){}));var Y=function(e,r){f("licenseImage"===r?function(t){return Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},r,e.file.originFileObj))}:function(t){return Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},r,e.fileList))})},Z=function(){var e=Object(c.a)(Object(n.a)().mark((function e(r){var c,i,o,s,l;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),P(!0),t.name){e.next=8;break}return v.b.error(Q("Name is required !")),P(!1),e.abrupt("return");case 8:if(t.emailOrPhone){e.next=14;break}return v.b.error(Q("Phone number is required  !")),P(!1),e.abrupt("return");case 14:if(t.idNumber){e.next=20;break}return v.b.error(Q("National Id number required !")),P(!1),e.abrupt("return");case 20:if(t.city){e.next=26;break}return v.b.error(Q("City is required !")),P(!1),e.abrupt("return");case 26:if(t.carType){e.next=32;break}return v.b.error(Q("Car type is required !")),P(!1),e.abrupt("return");case 32:if(t.carModel){e.next=38;break}return v.b.error(Q("Car model is required !")),P(!1),e.abrupt("return");case 38:if(t.plateNumber){e.next=44;break}return v.b.error(Q("Plate number is required !")),P(!1),e.abrupt("return");case 44:if(L){e.next=50;break}return v.b.error(Q("Driving licence is required !")),P(!1),e.abrupt("return");case 50:if(V){e.next=54;break}return v.b.error(Q("Car Image are required !")),P(!1),e.abrupt("return");case 54:for(i in e.prev=54,(c=new FormData).append("Admin",!0),t)if("carImage"==i){console.log(t[i],"====kkk"),o=Object(a.a)(t[i]);try{for(o.s();!(s=o.n()).done;)l=s.value,c.append("carImage",null===l||void 0===l?void 0:l.originFileObj)}catch(n){o.e(n)}finally{o.f()}}else"city"==i?c.append("city",null===t||void 0===t?void 0:t.city):c.append(i,t[i]);return e.next=60,g.a.post("".concat("https://zomool.com/api","/auth/signupAsDriver"),c,{headers:{Authorization:"Bearer ".concat(D)}});case 60:201===e.sent.status?(P(!1),v.b.success(Q("Data added successfully !!!")),X.push("/app/pages/driver")):v.b.error(Q("Error while adding Data")),e.next=67;break;case 64:e.prev=64,e.t0=e.catch(54),console.log(e.t0);case 67:case"end":return e.stop()}}),e,null,[[54,64]])})));return function(r){return e.apply(this,arguments)}}(),$=(Object(l.useRef)(null),function(e){var r=e.target,t=r.name,n=r.value;f((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},t,n))}))}),ee=d.a.Option;Object(l.useEffect)((function(){g.a.get("".concat("https://zomool.com/api","/transport/getVehicleList")).then((function(e){w(e.data.data),console.log(e.data.data,"ress...")}))}),[]);return Object(k.jsxs)("div",{children:[Object(k.jsx)(b.a,{className:"site-page-header",title:Q("Add Driver"),style:{padding:"0px"}}),Object(k.jsx)(j.a,{}),Object(k.jsxs)(u.a,{form:K,onFinish:Z,children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:[Q("Name of the Driver")," ",Object(k.jsx)("span",{style:{color:"red"},children:"  *"})]}),Object(k.jsx)(p.a,{type:"text",placeholder:"Enter your full name",value:null===t||void 0===t?void 0:t.name,onChange:function(e){return $(e)},name:"name",onPressEnter:function(e){return $(e)}})]}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:[Q("National Id number")," ",Object(k.jsx)("span",{style:{color:"red"},children:"  *"})]}),Object(k.jsx)(p.a,{placeholder:"National Id number",value:null===t||void 0===t?void 0:t.idNumber,onChange:function(e){return $(e)},name:"idNumber",onPressEnter:function(e){return $(e)},required:!0})]}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:[Q("Phone Number"),Object(k.jsx)("span",{style:{color:"red"},children:"  *"})]}),Object(k.jsx)(p.a,{prefix:Object(k.jsx)("img",{src:T.a}),placeholder:"Enter your phone number",value:"".concat(null===t||void 0===t?void 0:t.emailOrPhone),type:"number",onChange:function(e){return $(e)},name:"emailOrPhone",onPressEnter:function(e){return $(e)}})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:Q("Email")}),Object(k.jsx)(p.a,{placeholder:"Email",status:"error",type:"email",value:null===t||void 0===t?void 0:t.email,onChange:function(e){return $(e)},name:"email",onPressEnter:function(e){return $(e)},required:!0})]}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:["   ",Q("City")," ",Object(k.jsx)("span",{style:{color:"red"},children:"  *"})]}),Object(k.jsx)(d.a,{style:{width:"100%"},name:"city",value:t.city,placeholder:"Select cities",onChange:function(e){console.log("Selected Cities:",e),f((function(r){return Object(o.a)(Object(o.a)({},r),{},{city:[e]})}))},showArrow:!0,dropdownMatchSelectWidth:!1,dropdownStyle:{minWidth:"200px"},children:["\u0637\u0628\u0631\u062c\u0644","\u0645\u064a\u0642\u0648\u0639","\u0645\u0643\u0629 \u0627\u0644\u0645\u0643\u0631\u0645\u0629","\u062a\u0628\u0648\u0643","\u062d\u0627\u0626\u0644","\u0648\u0627\u062f\u0649 \u0627\u0644\u062f\u0648\u0627\u0633\u0631","\u0628\u0633\u064a\u0637\u0627","\u0627\u0644\u0642\u0635\u064a\u0645","\u0627\u0644\u0637\u0627\u0626\u0641","\u0627\u0644\u0631\u064a\u0627\u0636","\u062d\u0631\u0636","\u0627\u0644\u0623\u0636\u0627\u0631\u0639","\u0627\u0644\u0646\u0628\u0643 \u0627\u0628\u0648\u0642\u0635\u0631","\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0645\u0646\u0648\u0631\u0629","\u0623\u0628\u0648 \u0639\u062c\u0631\u0645- \u0637\u0628\u0631\u062c\u0644","\u062a\u064a\u0645\u0627\u0621","\u0633\u0627\u062c\u0631","\u062c\u062f\u0629","\u0627\u0644\u062e\u0631\u062c","\u062f\u0648\u0645\u0629 \u0627\u0644\u062c\u0646\u062f\u0644","\u0627\u0644\u062f\u0645\u0627\u0645","\u0627\u0644\u0642\u0631\u064a\u0629 \u0627\u0644\u0639\u0644\u064a\u0627","\u062d\u0641\u0631 \u0627\u0644\u0628\u0627\u0637\u0646","\u0631\u0641\u062d\u0627\u0621","\u0639\u0631\u0639\u0631","\u0637\u0631\u064a\u0641","\u0627\u0644\u0642\u0631\u064a\u0627\u062a","\u0633\u0643\u0627\u0643\u0627","\u064a\u0646\u0628\u0639","\u062a\u062e\u0627\u0628\u064a\u0644","\u0646\u062c\u0631\u0627\u0646","\u0627\u0644\u0645\u0630\u0646\u0628","\u0627\u0644\u062c\u0648\u0641","\u0628\u064a\u0634\u0647","\u0627\u0644\u0634\u064a\u062d\u064a\u0647","\u0627\u0644\u0643\u0647\u0641\u0647","\u0627\u0644\u062f\u0648\u0627\u0645\u0649","\u0627\u0644\u0646\u0627\u0635\u0641\u0647","\u0628\u0631\u064a\u062f\u0629","\u0639\u0646\u064a\u0632\u0629","\u0627\u0644\u0639\u064a\u0633\u0627\u0648\u064a\u0629","\u0627\u0644\u0648\u062c\u0647","\u0623\u0645\u0644\u062c","\u0631\u0627\u0628\u063a","\u062a\u0631\u0628\u0647","\u0631\u0646\u064a\u0647","\u0627\u0644\u0642\u064a\u0635\u0648\u0645\u0647","\u0627\u0644\u0631\u0633","\u0627\u0644\u063a\u0627\u0637","\u0639\u0641\u064a\u0641","\u0631\u0645\u0627\u062d","\u0627\u0644\u0645\u0632\u0627\u062d\u0645\u064a\u0629","\u062d\u0631\u0636","\u0627\u0644\u0631\u064a\u0646","\u0627\u0644\u0633\u0644\u064a\u0644","\u0627\u0644\u0623\u0641\u0644\u0627\u062c","\u0634\u0642\u0631\u0627\u0621","\u0627\u0644\u0642\u0631\u0646\u0647","\u0627\u0644\u0642\u0648\u064a\u0639\u064a\u0647"].map((function(e){return Object(k.jsx)(ee,{value:e,label:Q(e),children:Q(e)})}))})]}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:["   ",Q("Car Type")," ",Object(k.jsx)("span",{style:{color:"red"},children:"  *"})]}),Object(k.jsx)(d.a,{onChange:function(e){console.log("Selected Car Type:",e),f((function(r){return Object(o.a)(Object(o.a)({},r),{},{carType:e})}))},style:{width:"100%"},name:"carType",placeholder:"Select car type",value:t.carType,children:null===S||void 0===S?void 0:S.map((function(e){return Object(k.jsx)(ee,{value:e._id,children:e.vehicleName})}))})]}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:[Q("Car Modal")," ",Object(k.jsx)("span",{style:{color:"red"},children:"  *"})]}),Object(k.jsx)(p.a,{placeholder:"Enter your Car Modal",value:null===t||void 0===t?void 0:t.carModel,onChange:function(e){return $(e)},name:"carModel",onPressEnter:function(e){return $(e)},required:!0})]}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:[Q("Car plate number")," ",Object(k.jsx)("span",{style:{color:"red"},children:"  *"})]}),Object(k.jsx)(p.a,{placeholder:"Enter your Car plate number",value:null===t||void 0===t?void 0:t.plateNumber,onChange:function(e){return $(e)},name:"plateNumber",onPressEnter:function(e){return $(e)}})]}),Object(k.jsxs)("div",{children:[Object(k.jsxs)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:[Q("Driving licence")," ",Object(k.jsx)("span",{style:{color:"red"},children:"  *"})]}),Object(k.jsx)(m.a,{maxCount:1,listType:"picture",beforeUpload:function(){return!0},onChange:function(e){Y(e,"licenseImage"),W(!0)},children:Object(k.jsx)(h.a,{icon:Object(k.jsx)(x.a,{}),children:Q("Uploading Image of licence")})})]}),Object(k.jsxs)("div",{style:{marginBottom:"10px",marginTop:"10px"},children:[Object(k.jsxs)("h5",{style:{marginBottom:"10px",marginTop:"10px"},children:[Q("Car Images"),Object(k.jsx)("span",{style:{color:"red"},children:"  *"})]}),Object(k.jsx)(m.a,{onChange:function(e){Y(e,"carImage"),G(!0)},listType:"picture-card",maxCount:3,style:{width:"100%"},children:Object(k.jsxs)("div",{children:[Object(k.jsx)(y.a,{}),Object(k.jsx)("div",{style:{marginTop:8},children:Q("Upload")})]})})]}),Object(k.jsxs)("div",{className:"d-flex ",style:{marginTop:"20px",gap:"30px"},children:[Object(k.jsx)(h.a,{type:"primary",htmlType:"submit",loading:I,onClick:Z,children:Q("Submit")}),Object(k.jsx)(h.a,{onClick:function(){X.push("/app/pages/driver")},children:Q("Cancel")},"back"),","]})]})]})}}}]);
//# sourceMappingURL=95.bab4f9df.chunk.js.map