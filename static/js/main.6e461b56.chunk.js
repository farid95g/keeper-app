(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(7),j=n.n(r),a=n(38),i=n(22),o=n(34),s=n.n(o),l=n(2);var b=function(){return Object(l.jsx)("header",{children:Object(l.jsxs)("h1",{children:[Object(l.jsx)(s.a,{}),"Keeper App"]})})};var u=function(){var e=(new Date).getFullYear();return Object(l.jsx)("footer",{children:Object(l.jsxs)("p",{children:["Copyright \xa9 ",e]})})},O=n(36),d=n.n(O);var h=function(e){return Object(l.jsxs)("div",{className:"note",children:[Object(l.jsx)("h1",{children:e.title}),Object(l.jsx)("p",{children:e.content}),Object(l.jsx)("button",{onClick:function(){return e.onDelete(e.id)},children:Object(l.jsx)(d.a,{})})]})},x=n(26),p=n(33),f=n(71),v=n(70),m=n(37),g=n.n(m);var k=function(e){var t=Object(c.useState)({title:"",content:""}),n=Object(i.a)(t,2),r=n[0],j=n[1],a=Object(c.useState)(!1),o=Object(i.a)(a,2),s=o[0],b=o[1];function u(e){var t=e.target,n=t.name,c=t.value;j(Object(p.a)(Object(p.a)({},r),{},Object(x.a)({},n,c)))}return Object(l.jsx)("div",{children:Object(l.jsxs)("form",{onSubmit:function(t){e.onAdd(r),j({title:"",content:""}),t.preventDefault()},children:[s&&Object(l.jsx)("input",{onChange:u,name:"title",placeholder:"Title",value:r.title,style:{display:s?"block":"none"}}),Object(l.jsx)("textarea",{onChange:u,onClick:function(){b(!s)},name:"content",placeholder:"Take a note...",rows:s?3:1,value:r.content}),Object(l.jsx)(f.a,{in:s,children:Object(l.jsx)(v.a,{type:"submit",children:Object(l.jsx)(g.a,{})})})]})})};var w=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function j(e){console.log("delete was triggered"),r(n.filter((function(t,n){return n!==e})))}return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsx)(k,{onAdd:function(e){r([].concat(Object(a.a)(n),[e]))}}),Object(l.jsx)("div",{className:"notes",children:n.map((function(e,t){return Object(l.jsx)(h,{id:t,title:e.title,content:e.content,onDelete:j},t)}))}),Object(l.jsx)(u,{})]})};j.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.6e461b56.chunk.js.map