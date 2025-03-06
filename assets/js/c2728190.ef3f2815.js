"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[121],{477:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/page-34f0e416181c26c2a4faf02f3b53fb37.png"},3600:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/data-model-5b6ab484c45e29b9a41d37cd31042844.png"},6530:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"concepts/index","title":"Concepts","description":"Separation between data and content","source":"@site/docs/concepts/index.md","sourceDirName":"concepts","slug":"/concepts/","permalink":"/docs/concepts/","draft":false,"unlisted":false,"editUrl":"https://github.com/swiss-architecture-knife/docs/docs/concepts/index.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Intro","permalink":"/docs/intro"},"next":{"title":"Configuration Item Types","permalink":"/docs/concepts/configuration-item-types"}}');var s=n(4848),i=n(8453);const o={sidebar_position:10},r="Concepts",c={},d=[{value:"Separation between data and content",id:"separation-between-data-and-content",level:2},{value:"Data - structured information",id:"data---structured-information",level:3},{value:"Content - unstructured information",id:"content---unstructured-information",level:3},{value:"Pages",id:"pages",level:2}];function h(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"concepts",children:"Concepts"})}),"\n",(0,s.jsx)(t.h2,{id:"separation-between-data-and-content",children:"Separation between data and content"}),"\n",(0,s.jsx)(t.p,{children:"swark strictly separates data and content. This is important so that you can mix structured and unstructured information."}),"\n",(0,s.jsx)(t.h3,{id:"data---structured-information",children:"Data - structured information"}),"\n",(0,s.jsxs)(t.p,{children:["Everything in your database is ",(0,s.jsx)(t.em,{children:"data"}),". Your data consists upon ",(0,s.jsx)(t.strong,{children:"configuration item types"}),", e.g. ",(0,s.jsx)(t.code,{children:"server"}),", ",(0,s.jsx)(t.code,{children:"software"})," or ",(0,s.jsx)(t.code,{children:"version"}),".\nEach ",(0,s.jsx)(t.em,{children:"configuration item type"})," has a defined set of properties, e.g. ",(0,s.jsx)(t.code,{children:"IP"})," or ",(0,s.jsx)(t.code,{children:"Hostname"})," for a ",(0,s.jsx)(t.code,{children:"server"}),".  Most used ",(0,s.jsx)(t.em,{children:"Configuration item types"})," and their ",(0,s.jsx)(t.em,{children:"properties"})," are part of the swark's data model. You get it automatically set up when you install swark. You can also add new properties or configuration items types at any time."]}),"\n",(0,s.jsxs)(t.p,{children:["Based upon the data model you can create specific__configuration items__. They may have the same properties as other configuration items but they are not the same instance. For example, you have two ",(0,s.jsx)(t.code,{children:"servers"})," with the same IP address and hostname. They have the same properties but they are definitely not the same.\nBetween ",(0,s.jsx)(t.em,{children:"configuration items"})," can exist ",(0,s.jsx)(t.strong,{children:"relations"}),". ",(0,s.jsx)(t.em,{children:"Relations"})," show how one configuration item interacts with another one. Which ",(0,s.jsx)(t.em,{children:"relation"})," you can use is defined in the data model."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Data model",src:n(3600).A+"",width:"1355",height:"807"})}),"\n",(0,s.jsx)(t.p,{children:"You can manage configuration items and their relations through the management interface, via API or initially import them.\nFor changing the data model you need some kind of knowledge how databases have to be structured and how Laravel works."}),"\n",(0,s.jsx)(t.h3,{id:"content---unstructured-information",children:"Content - unstructured information"}),"\n",(0,s.jsxs)(t.p,{children:["Having a lot of tables and automatically generated diagrams gives you an overview over your architecture. But neither you nor your users are will be understand it without having a context. In swark, ",(0,s.jsx)(t.em,{children:"content"})," describes everything what is unstructured and available in your brains or any kind of custom diagrams or Word documents."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Content",src:n(9753).A+"",width:"998",height:"633"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"content"})," in swark describes why a decision has been made, why a software is installed on a specific server in another way or how an interaction of different configuration items works."]}),"\n",(0,s.jsx)(t.h2,{id:"pages",children:"Pages"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Pages"})," present your structured and unstructured information. Each page you visit in swark's frontend pulls structured information from the database or unstructured information from your content store and combines them in a meaningful way."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Content",src:n(477).A+"",width:"531",height:"561"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(6540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}},9753:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/content-66a0eab81824ffbe3494deedebac359d.png"}}]);