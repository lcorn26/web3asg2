(this.webpackJsonpdev=this.webpackJsonpdev||[]).push([[0],{153:function(e,t,c){},154:function(e,t,c){},242:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),s=c(37),a=c.n(s),l=(c(153),c(154),c(48)),r=c(21),j=c(53),d=c(26),b=c(81),o=c(45),h=c(247),O=c(145),x=c(52),u=c(6),p=function(){var e=Object(r.f)(),t=Object(n.useState)(!1),c=Object(d.a)(t,2),i=(c[0],c[1]),s=Object(n.useState)([]),a=Object(d.a)(s,2),p=a[0],f=a[1];Object(n.useEffect)((function(){fetch("/api/list").then((function(e){return e.json()})).then((function(e){localStorage.setItem("playsList",JSON.stringify(e)),f(e)})),i(!0)}),[]);return Object(u.jsx)("div",{children:Object(u.jsx)(b.a,{justify:"space-around",align:"middle",children:Object(u.jsxs)(o.a,{span:12,children:[Object(u.jsx)("h1",{id:"mainHeader",children:"Play Browser"}),Object(u.jsxs)(h.a,{name:"normal_login",className:"login-form",onFinish:function(t){var c=[];if(t.title){var n=p.filter((function(e){return e.title.includes(t.title)}));console.log(n),c.push.apply(c,Object(j.a)(n))}localStorage.setItem("playsList",JSON.stringify(c)),e("/play-list")},children:[Object(u.jsx)(h.a.Item,{name:"title",children:Object(u.jsx)(O.a,{placeholder:"Title"})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsxs)(b.a,{justify:"space-around",children:[Object(u.jsx)(o.a,{span:8,children:Object(u.jsx)(x.a,{type:"primary",htmlType:"submit",className:"login-form-button",children:"Show Matching Plays"})}),Object(u.jsx)(o.a,{span:8,offset:8,children:Object(u.jsx)(l.b,{to:"/play-list",children:Object(u.jsx)(x.a,{type:"primary",htmlType:"button",className:"login-form-button",children:"Show All Plays"})})})]})}),Object(u.jsx)("div",{id:"credit",children:"Image retrieved from NIKON CORPORATION, NIKON D750 Published on December 26, 2017"})]})]})})})},f=c(245),m=c(88),g=c(62),y=c(246),v=c(248),I=c(250),S=c(251),k=c(106),N=c.n(k);function C(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],i=t[1];return Object(u.jsxs)("div",{className:"modal-window",children:[Object(u.jsx)("div",{className:"about-button",onClick:function(){return i(!0)},children:"About"}),Object(u.jsxs)(N.a,{isOpen:c,shouldCloseOnOverlayClick:!1,onRequestClose:function(){return i(!1)},children:[Object(u.jsxs)("h1",{align:"center",children:["WEB 3 Assignment 2 | ",Object(u.jsx)("a",{href:"https://github.com/lcorn26/web3asg2",children:"Github Link"})]}),Object(u.jsxs)("h2",{align:"center",children:[" ",Object(u.jsxs)("p",{className:"modal-content",children:[Object(u.jsx)("p",{children:"Website made by: Andre Co, Liam Cormwall, Meet Suthar"}),Object(u.jsx)("p",{children:"React UI: Ant Design"})]})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{align:"center",children:[Object(u.jsx)("h3",{children:"Resources Used: "}),Object(u.jsx)("li",{children:"React Library"}),Object(u.jsx)("li",{children:"React (modal, router, useEffect, useState) "}),Object(u.jsx)("li",{children:"JavaScript"}),Object(u.jsx)("li",{children:"HTML"}),Object(u.jsx)("li",{children:"CSS"}),Object(u.jsx)("li",{children:"Hosting Service (Google App Engine)"}),Object(u.jsx)("li",{children:"Ant Design"})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("p",{align:"center",children:[Object(u.jsx)("h2",{children:"API Links"}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/api/list",children:"/api/list"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/api/play/hamlet",children:"/api/play/hamlet"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/api/user/1",children:"/api/user/1"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/login",children:"/login"})})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("div",{align:"center",children:Object(u.jsx)("button",{className:"close-about-button",onClick:function(){return i(!1)},children:"Close"})})]})]})}function w(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(),a=Object(d.a)(s,2),l=a[0],r=a[1];Object(n.useEffect)((function(){if(!l){fetch("/loggedInUser").then((function(e){return e.json()})).then((function(e){var t="/api/user/"+e[0].id;fetch(t).then((function(e){return e.json()})).then((function(e){r(e[0])}))}))}}),[]);var j=function(){if(l)return Object(u.jsxs)("div",{className:"profile",children:[Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:[l.details.firstname," ",l.details.lastname]}),Object(u.jsxs)("p",{children:[l.details.city,", ",l.details.country]}),Object(u.jsxs)("p",{children:["Email: ",l.email]}),Object(u.jsxs)("p",{children:["Date joined: ",l.membership.date_joined]}),Object(u.jsxs)("p",{children:["Likes: ",l.membership.likes]})]}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:"pplarge",src:l.picture.large})}),Object(u.jsx)("div",{})]})};return Object(u.jsxs)("div",{className:"modal-window2",children:[Object(u.jsx)("div",{className:"acc-button",onClick:function(){return i(!0)},children:"Account Info"}),Object(u.jsxs)(N.a,{isOpen:c,shouldCloseOnOverlayClick:!1,onRequestClose:function(){return i(!1)},children:[function(){if(l)return Object(u.jsx)("div",{children:j()})}(),Object(u.jsx)("div",{align:"center",children:Object(u.jsx)("button",{className:"close-about-button",onClick:function(){return i(!1)},children:"Close"})})]})]})}var T=f.a.Header,D=f.a.Content,A=m.a.Option,L=function(){var e=Object(r.f)(),t=Object(n.useState)(!1),c=Object(d.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(JSON.parse(localStorage.getItem("playsList"))),p=Object(d.a)(a,2),k=p[0],N=p[1],L=Object(n.useState)(JSON.parse(localStorage.getItem("playsList"))),E=Object(d.a)(L,2),F=E[0],H=E[1],J=Object(n.useState)([]),P=Object(d.a)(J,2),R=P[0],Y=P[1],z=h.a.useForm(),M=Object(d.a)(z,1)[0],B=Object(n.useState)(!0),G=Object(d.a)(B,2),K=G[0],U=G[1];Object(n.useEffect)((function(){k||fetch("/api/list").then((function(e){return e.json()})).then((function(e){localStorage.setItem("playsList",JSON.stringify(e)),N(e),H(e)})),s(!0)}),[k]);var W=[{title:Object(u.jsx)("a",{id:"title",href:"#",children:"Title"}),dataIndex:"title",key:"title"},{title:Object(u.jsx)("a",{id:"year",href:"#",children:"Year"}),dataIndex:"likelyDate"},{title:"",dataIndex:"address",render:function(t,c,n){return Object(u.jsxs)("div",{children:[Object(u.jsx)(x.a,{type:"primary",icon:Object(u.jsx)(I.a,{}),onClick:function(){return function(e){Y((function(t){return[].concat(Object(j.a)(t),[e])})),N(k.filter((function(t){return t.id!==e.id})))}(c)}}),Object(u.jsx)(x.a,{onClick:function(){return function(t){localStorage.setItem("playDetails",JSON.stringify(t)),e("/play-details/"+t.id)}(c)},children:" View "})]})}}],q=[{title:"Title",dataIndex:"title",key:"title"},{title:"Year",dataIndex:"likelyDate"},{title:"",dataIndex:"address",render:function(e,t,c){return Object(u.jsx)("div",{children:Object(u.jsx)(x.a,{type:"primary",icon:Object(u.jsx)(S.a,{}),onClick:function(){return function(e){N((function(t){return[e].concat(Object(j.a)(t))})),Y(R.filter((function(t){return t.id!==e.id})))}(t)}})})}}];return Object(u.jsx)("div",{children:Object(u.jsxs)(f.a,{children:[Object(u.jsx)(T,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(u.jsxs)(g.a,{theme:"dark",mode:"horizontal",children:[Object(u.jsxs)(g.a.Item,{children:[" ",Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("img",{src:"https://i.gifer.com/YIgY.gif",alt:"home",width:"30px",height:"30px"})})]},"1"),Object(u.jsx)(g.a.Item,{children:Object(u.jsx)(C,{})},"2"),Object(u.jsx)(g.a.Item,{children:Object(u.jsx)(w,{})},"3"),Object(u.jsx)(g.a.Item,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"/logout"}),"Logout"]})},"4")]})}),Object(u.jsx)(D,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(o.a,{span:1,children:Object(u.jsx)("p",{children:Object(u.jsx)("button",{style:{margin:5},class:"btn-minimize",onClick:function(){return U(!K)},children:"\u25cd"})})}),Object(u.jsx)(o.a,{span:7,children:K?Object(u.jsxs)("div",{id:"fav",className:"site-layout-background",style:{padding:24,minHeight:380},children:[Object(u.jsx)("h1",{children:"Favourites"}),i?Object(u.jsx)(y.a,{pagination:!1,dataSource:R,columns:q}):null]}):null}),Object(u.jsx)(o.a,{span:8,children:Object(u.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:[Object(u.jsx)("h1",{children:"Play Filters"}),Object(u.jsx)(v.a,{children:Object(u.jsxs)(h.a,{layout:{labelCol:{span:4},wrapperCol:{span:14}},onFinish:function(e){console.log(e);var t=[];if(e.title){var c=F.filter((function(t){return t.title.includes(e.title)}));console.log(c),t.push(c)}if(e.before&&e.after){var n=F.filter((function(t){return+t.likelyDate<+e.before&&+t.likelyDate>+e.after}));console.log(n),t.push.apply(t,Object(j.a)(n))}if(e.after&&!e.before){var i=F.filter((function(t){return+t.likelyDate>+e.after}));console.log(i),t.push.apply(t,Object(j.a)(i))}if(!e.after&&e.before){var s=F.filter((function(t){return+t.likelyDate<+e.before}));console.log(s),t.push.apply(t,Object(j.a)(s))}if(e.genre){var a=F.filter((function(t){return t.genre===e.genre}));console.log(a),t.push.apply(t,Object(j.a)(a))}console.log(t),N(t)},form:M,children:[Object(u.jsx)(h.a.Item,{name:"title",label:"Title",children:Object(u.jsx)(O.a,{placeholder:""})}),Object(u.jsx)(h.a.Item,{label:"Year",children:Object(u.jsxs)(b.a,{gutter:8,children:[Object(u.jsx)(o.a,{span:24,children:Object(u.jsx)(h.a.Item,{name:"before",label:"Before",children:Object(u.jsx)(O.a,{})})}),Object(u.jsx)(o.a,{span:24,children:Object(u.jsx)(h.a.Item,{name:"after",label:"After",children:Object(u.jsx)(O.a,{})})})]})}),Object(u.jsx)(h.a.Item,{name:"genre",label:"Genre",children:Object(u.jsxs)(m.a,{children:[Object(u.jsx)(A,{value:"comedy",children:"Comedy"}),Object(u.jsx)(A,{value:"tragedy",children:"Tragedy"}),Object(u.jsx)(A,{value:"history",children:"History"})]})}),Object(u.jsxs)(h.a.Item,{layout:{wrapperCol:{offset:8,span:16}},children:[Object(u.jsx)(x.a,{type:"primary",htmlType:"submit",children:"Filter"}),Object(u.jsx)(x.a,{htmlType:"button",onClick:function(){M.resetFields()},children:"Clear"})]})]})})]})}),Object(u.jsxs)(o.a,{span:8,children:[" ",Object(u.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:[Object(u.jsx)("h1",{children:"List / Matches"}),i?Object(u.jsx)(y.a,{pagination:!1,dataSource:k,columns:W,scroll:{y:767}}):null]})]})]})})]})})};function E(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Favourites"})})}var F=c(122),H=c(54),J=c(249),P=f.a.Header,R=f.a.Content,Y=m.a.Option,z=F.a.TabPane,M=function(){var e,t=Object(r.g)().id,c=Object(n.useState)(!1),i=Object(d.a)(c,2),s=(i[0],i[1]),a=Object(n.useState)(!1),j=Object(d.a)(a,2),O=j[0],x=j[1],p=JSON.parse(localStorage.getItem("playDetails"));Object(n.useEffect)((function(){fetch("/api/play/"+t).then((function(e){return e.json()})).then((function(e){x(e),s(!0)}))}),[t]);var y=Object(n.useState)(!0),I=Object(d.a)(y,2);I[0],I[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{}),Object(u.jsxs)(f.a,{children:[Object(u.jsx)(P,{style:{position:"fixed",zIndex:1,width:"100%"},children:Object(u.jsxs)(g.a,{theme:"dark",mode:"horizontal",children:[Object(u.jsxs)(g.a.Item,{children:[" ",Object(u.jsx)(l.b,{to:"/",children:Object(u.jsx)("img",{src:"https://i.gifer.com/YIgY.gif",alt:"home",width:"30px",height:"30px"})})]},"1"),Object(u.jsx)(g.a.Item,{children:Object(u.jsx)(C,{})},"2"),Object(u.jsx)(g.a.Item,{children:Object(u.jsx)(w,{})},"3"),Object(u.jsx)(g.a.Item,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("a",{href:"/logout"}),"Logout"]})},"4")]})}),Object(u.jsx)(R,{className:"site-layout",style:{padding:"0 50px",marginTop:64},children:O.message?Object(u.jsx)(b.a,{children:Object(u.jsx)(o.a,{span:24,children:Object(u.jsx)(v.a,{children:Object(u.jsx)(H.a,{description:O.message})})})}):Object(u.jsxs)(b.a,{gutter:8,children:[Object(u.jsx)(o.a,{span:8,children:Object(u.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)("h1",{children:O.title}),Object(u.jsxs)(h.a,{children:[Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(m.a,{value:"1",children:Object(u.jsx)(Y,{value:"1",children:"ACT 1"})})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(m.a,{value:"1",children:Object(u.jsx)(Y,{value:"1",children:"SCENE 1"})})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(m.a,{value:"1",children:Object(u.jsx)(Y,{value:"1"})})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)("input",{type:"text"})})]})]})})}),Object(u.jsx)(o.a,{span:16,children:Object(u.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object(u.jsx)(v.a,{children:Object(u.jsxs)(F.a,{defaultActiveKey:"1",onChange:function(){},children:[Object(u.jsxs)(z,{tab:"Details",children:[Object(u.jsx)("p",{children:p.title}),Object(u.jsxs)("p",{children:["Genre: ",p.genre]}),Object(u.jsxs)("p",{children:["Wiki: ",p.wiki]}),Object(u.jsxs)("p",{children:["Shakespear Org: ",p.shakespeareOrg]}),Object(u.jsxs)("p",{children:["Synopsis: ",p.synopsis]}),Object(u.jsxs)("p",{children:["gutenberg: ",p.gutenberg]})]},"1"),Object(u.jsx)(z,{tab:"Characters",children:Object(u.jsx)(J.b,{dataSource:O.persona,renderItem:function(e){return Object(u.jsx)(J.b.Item,{extra:Object(u.jsx)("p",{children:e.desc}),children:e.player})}})},"2"),Object(u.jsxs)(z,{tab:"Text",children:[Object(u.jsx)("h1",{children:O.title}),null===O||void 0===O||null===(e=O.acts)||void 0===e?void 0:e.map((function(e,t){var c;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:e.name}),null===(c=e.scenes)||void 0===c?void 0:c.map((function(e,t){var c;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:e.title})}),Object(u.jsx)("p",{children:e.stageDirection}),null===(c=e.speeches)||void 0===c?void 0:c.map((function(e,t){var c;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:Object(u.jsx)("b",{children:e.speaker})}),null===(c=e.lines)||void 0===c?void 0:c.map((function(e,t){return Object(u.jsx)("p",{children:e})}))]})}))]})}))]})}))]},"3")]})})})})]})})]})]})};function B(){return Object(u.jsx)("div",{children:Object(u.jsx)(l.a,{basename:window.location.pathname||"",children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:p,element:Object(u.jsx)(p,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/play-list",component:L,element:Object(u.jsx)(L,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/play-details/:id",component:M,element:Object(u.jsx)(M,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/favourites",component:E,element:Object(u.jsx)(E,{})})]})})})}var G=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(B,{})})};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(G,{})}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.db99c91e.chunk.js.map