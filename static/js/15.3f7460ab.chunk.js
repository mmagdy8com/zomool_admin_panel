(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[15,41],{1051:function(e,t,a){"use strict";a(0);var c=a(4),n=function(e){var t;switch(e.size){case"lg":t=Object(c.jsx)("h1",{className:"mb-0 font-weight-bold",children:e.value});break;case"md":t=Object(c.jsx)("h2",{className:"mb-0 font-weight-bold",children:e.value});break;default:t=Object(c.jsx)("h3",{className:"mb-0 font-weight-bold",children:e.value})}return t},r=function(e){var t=e.size,a=e.value,r=e.title;return Object(c.jsxs)("div",{children:[Object(c.jsx)(n,{value:a,size:t}),Object(c.jsx)("p",{className:"mb-0 text-muted",children:r})]})};r.defaultProps={size:"md"},t.a=r},1110:function(e,t,a){"use strict";var c=a(1),n=a(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"}}]},name:"bar-chart",theme:"outlined"},l=a(10),o=function(e,t){return n.createElement(l.a,Object(c.a)(Object(c.a)({},e),{},{ref:t,icon:r}))};o.displayName="BarChartOutlined";t.a=n.forwardRef(o)},1148:function(e,t,a){"use strict";var c=a(1),n=(a(0),a(518)),r=a(483),l=a(129),o=a(1051),i=a(4),s=function(e){var t=e.size,a=e.value,s=e.title,d=e.icon,b=e.color,j=e.avatarSize,m=e.vertical,h={size:t,value:a,title:s};return Object(i.jsx)(n.a,{children:Object(i.jsxs)(l.a,{alignItems:"center",flexDirection:m?"column":"row",children:[Object(i.jsx)(r.a,{size:j,shape:"square",icon:d,className:"ant-avatar-".concat(b)}),Object(i.jsx)("div",{className:m?"mt-3 text-center":"ml-3",children:Object(i.jsx)(o.a,Object(c.a)({},h))})]})})};s.defaultProps={avatarSize:50,vertical:!1},t.a=s},1310:function(e,t,a){"use strict";a.r(t);a(0);var c=a(1148),n=a(532),r=a(3382),l=a(582),o=a(518),i=a(1110),s=a(4),d=function(){return Object(s.jsxs)("div",{className:"d-flex align-items-center flex-column",children:[Object(s.jsx)("div",{style:{width:300},children:Object(s.jsx)(c.a,{icon:Object(s.jsx)(i.a,{}),value:"$11,388",title:"Revenue",color:"blue",size:"md",avatarSize:50,vertical:!1})}),Object(s.jsx)("div",{style:{width:300},children:Object(s.jsx)(c.a,{icon:Object(s.jsx)(i.a,{}),value:"$37,212",title:"Net Profit",color:"cyan",size:"md",avatarSize:50,vertical:!0})})]})};t.default=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"DataDisplayWidget"}),Object(s.jsxs)("div",{className:"mt-4",children:[Object(s.jsx)(n.default,{name:"Location",desc:"src/components/shared-components/DataDisplayWidget.js"}),Object(s.jsx)(n.default,{name:"Description",desc:"Display highlight with icon"}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsxs)(o.a,{title:"Example",children:[Object(s.jsx)(d,{}),Object(s.jsx)("div",{className:"mt-4",children:Object(s.jsx)(r.a,{className:"hl-code",language:"jsx",style:l.a,children:'import React from \'react\'\nimport DataDisplayWidget from \'components/shared-components/DataDisplayWidget\'\nimport { BarChartOutlined } from \'@ant-design/icons\';\n\nexport default const Demo = () =>  (\n\treturn (\n\t\t<div className="d-flex align-items-center flex-column">\n\t\t\t<div style={{width: 300}}>\n\t\t\t\t<DataDisplayWidget \n\t\t\t\t\ticon={<BarChartOutlined />}\n\t\t\t\t\tvalue="$11,388"\n\t\t\t\t\ttitle="Revenue"\n\t\t\t\t\tcolor="blue"\n\t\t\t\t\tsize={\'md\'}\n\t\t\t\t\tavatarSize={50}\n\t\t\t\t\tvertical={false}\n\t\t\t\t/>\n\t\t\t</div>\n\t\t\t<div style={{width: 300}}>\n\t\t\t\t<DataDisplayWidget \n\t\t\t\t\ticon={<BarChartOutlined />}\n\t\t\t\t\tvalue="$37,212"\n\t\t\t\t\ttitle="Net Profit"\n\t\t\t\t\tcolor="cyan"\n\t\t\t\t\tsize={\'md\'}\n\t\t\t\t\tavatarSize={50}\n\t\t\t\t\tvertical={true}\n\t\t\t\t/>\n\t\t\t</div>\n\t\t</div>\n\t)\n)'})})]})}),Object(s.jsx)("h4",{className:"mt-4",children:"Props"}),Object(s.jsx)("div",{className:"api-container border-0 p-0",children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Property"}),Object(s.jsx)("th",{children:"Description"}),Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Default"})]})}),Object(s.jsxs)("tbody",{children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"value"}),Object(s.jsx)("td",{children:"Display value"}),Object(s.jsx)("td",{children:"string | number"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"title"}),Object(s.jsx)("td",{children:"Display title"}),Object(s.jsx)("td",{children:"string"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"size"}),Object(s.jsx)("td",{children:"Value size"}),Object(s.jsx)("td",{children:"sm | md | lg"}),Object(s.jsx)("td",{children:"md"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"icon"}),Object(s.jsx)("td",{children:"Custom icon type for icon avatar"}),Object(s.jsx)("td",{children:"ReactNode"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"color"}),Object(s.jsx)("td",{children:"icon color"}),Object(s.jsx)("td",{children:"red | orange | gold | green | blue | cyan | purple | magenta | volcano | lime | geekblue"}),Object(s.jsx)("td",{})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"avatarSize"}),Object(s.jsx)("td",{children:"icon avatar size"}),Object(s.jsx)("td",{children:"numbere"}),Object(s.jsx)("td",{children:"50"})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:"vertical"}),Object(s.jsx)("td",{children:"Display as vertical mode"}),Object(s.jsx)("td",{children:"boolean"}),Object(s.jsx)("td",{children:"false"})]})]})]})})]})]})}},518:function(e,t,a){"use strict";var c=a(3),n=a(5),r=a(0),l=a(6),o=a.n(l),i=a(36),s=a(46),d=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},b=function(e){var t=e.prefixCls,a=e.className,l=e.hoverable,i=void 0===l||l,b=d(e,["prefixCls","className","hoverable"]);return r.createElement(s.a,null,(function(e){var l=(0,e.getPrefixCls)("card",t),s=o()("".concat(l,"-grid"),a,Object(c.a)({},"".concat(l,"-grid-hoverable"),i));return r.createElement("div",Object(n.a)({},b,{className:s}))}))},j=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},m=function(e){return r.createElement(s.a,null,(function(t){var a=t.getPrefixCls,c=e.prefixCls,l=e.className,i=e.avatar,s=e.title,d=e.description,b=j(e,["prefixCls","className","avatar","title","description"]),m=a("card",c),h=o()("".concat(m,"-meta"),l),u=i?r.createElement("div",{className:"".concat(m,"-meta-avatar")},i):null,p=s?r.createElement("div",{className:"".concat(m,"-meta-title")},s):null,O=d?r.createElement("div",{className:"".concat(m,"-meta-description")},d):null,v=p||O?r.createElement("div",{className:"".concat(m,"-meta-detail")},p,O):null;return r.createElement("div",Object(n.a)({},b,{className:h}),u,v)}))},h=a(516),u=a(509),p=a(510),O=a(53),v=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var x=function(e){var t,a,l,d=r.useContext(s.b),j=d.getPrefixCls,m=d.direction,x=r.useContext(O.b),f=e.prefixCls,g=e.className,y=e.extra,E=e.headStyle,C=void 0===E?{}:E,N=e.bodyStyle,z=void 0===N?{}:N,w=e.title,F=e.loading,S=e.bordered,D=void 0===S||S,P=e.size,k=e.type,B=e.cover,A=e.actions,T=e.tabList,W=e.children,H=e.activeTabKey,M=e.defaultActiveTabKey,R=e.tabBarExtraContent,I=e.hoverable,K=e.tabProps,V=void 0===K?{}:K,$=v(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),L=j("card",f),J=0===z.padding||"0px"===z.padding?{padding:24}:void 0,q=r.createElement("div",{className:"".concat(L,"-loading-block")}),G=r.createElement("div",{className:"".concat(L,"-loading-content"),style:J},r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:22},q)),r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:8},q),r.createElement(p.a,{span:15},q)),r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:6},q),r.createElement(p.a,{span:18},q)),r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:13},q),r.createElement(p.a,{span:9},q)),r.createElement(u.a,{gutter:8},r.createElement(p.a,{span:4},q),r.createElement(p.a,{span:3},q),r.createElement(p.a,{span:16},q))),Q=void 0!==H,U=Object(n.a)(Object(n.a)({},V),(t={},Object(c.a)(t,Q?"activeKey":"defaultActiveKey",Q?H:M),Object(c.a)(t,"tabBarExtraContent",R),t)),X=T&&T.length?r.createElement(h.a,Object(n.a)({size:"large"},U,{className:"".concat(L,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),T.map((function(e){return r.createElement(h.a.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(w||y||X)&&(l=r.createElement("div",{className:"".concat(L,"-head"),style:C},r.createElement("div",{className:"".concat(L,"-head-wrapper")},w&&r.createElement("div",{className:"".concat(L,"-head-title")},w),y&&r.createElement("div",{className:"".concat(L,"-extra")},y)),X));var Y=B?r.createElement("div",{className:"".concat(L,"-cover")},B):null,Z=r.createElement("div",{className:"".concat(L,"-body"),style:z},F?G:W),_=A&&A.length?r.createElement("ul",{className:"".concat(L,"-actions")},function(e){return e.map((function(t,a){return r.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},r.createElement("span",null,t))}))}(A)):null,ee=Object(i.a)($,["onTabChange"]),te=P||x,ae=o()(L,(a={},Object(c.a)(a,"".concat(L,"-loading"),F),Object(c.a)(a,"".concat(L,"-bordered"),D),Object(c.a)(a,"".concat(L,"-hoverable"),I),Object(c.a)(a,"".concat(L,"-contain-grid"),function(){var t;return r.Children.forEach(e.children,(function(e){e&&e.type&&e.type===b&&(t=!0)})),t}()),Object(c.a)(a,"".concat(L,"-contain-tabs"),T&&T.length),Object(c.a)(a,"".concat(L,"-").concat(te),te),Object(c.a)(a,"".concat(L,"-type-").concat(k),!!k),Object(c.a)(a,"".concat(L,"-rtl"),"rtl"===m),a),g);return r.createElement("div",Object(n.a)({},ee,{className:ae}),l,Y,Z,_)};x.Grid=b,x.Meta=m;t.a=x},532:function(e,t,a){"use strict";a.r(t);a(0);var c=a(4);t.default=function(e){var t=e.name,a=e.desc;return Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsxs)("span",{className:"font-weight-bold text-dark",children:[t,":"]}),Object(c.jsxs)("span",{className:"text-gray-light",children:[" ",a]})]})}},582:function(e,t,a){"use strict";t.a={'code[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#c5c8c6",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:"Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",direction:"ltr",textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em",background:"#1d1f21"},':not(pre) > code[class*="language-"]':{background:"#1d1f21",padding:".1em",borderRadius:".3em"},comment:{color:"#7C7C7C"},prolog:{color:"#7C7C7C"},doctype:{color:"#7C7C7C"},cdata:{color:"#7C7C7C"},punctuation:{color:"#c5c8c6"},".namespace":{Opacity:".7"},property:{color:"#96CBFE"},keyword:{color:"#96CBFE"},tag:{color:"#96CBFE"},"class-name":{color:"#FFFFB6",textDecoration:"underline"},boolean:{color:"#99CC99"},constant:{color:"#99CC99"},symbol:{color:"#f92672"},deleted:{color:"#f92672"},number:{color:"#FF73FD"},selector:{color:"#A8FF60"},"attr-name":{color:"#A8FF60"},string:{color:"#A8FF60"},char:{color:"#A8FF60"},builtin:{color:"#A8FF60"},inserted:{color:"#A8FF60"},variable:{color:"#C6C5FE"},operator:{color:"#EDEDED"},entity:{color:"#FFFFB6",cursor:"help"},url:{color:"#96CBFE"},".language-css .token.string":{color:"#87C38A"},".style .token.string":{color:"#87C38A"},atrule:{color:"#F9EE98"},"attr-value":{color:"#F9EE98"},function:{color:"#DAD085"},regex:{color:"#E9C062"},important:{color:"#fd971f",fontWeight:"bold"},bold:{fontWeight:"bold"},italic:{fontStyle:"italic"}}}}]);
//# sourceMappingURL=15.3f7460ab.chunk.js.map