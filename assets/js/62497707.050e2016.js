"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3541],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>d,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){return function(t){var n=u(t.components);return r.createElement(e,i({},t,{components:n}))}},u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"ConstraintSettingInfo"},a="ConstraintSettingInfo",s={unversionedId:"api/build/providers/ConstraintSettingInfo",id:"api/build/providers/ConstraintSettingInfo",title:"ConstraintSettingInfo",description:"Provider that signals that a target can be used as a constraint key. This is the only provider returned by a constraint_setting() target.",source:"@site/../docs/api/build/providers/ConstraintSettingInfo.generated.md",sourceDirName:"api/build/providers",slug:"/api/build/providers/ConstraintSettingInfo",permalink:"/docs/api/build/providers/ConstraintSettingInfo",draft:!1,tags:[],version:"current",frontMatter:{id:"ConstraintSettingInfo"},sidebar:"manualSidebar",previous:{title:"ConfigurationInfo",permalink:"/docs/api/build/providers/ConfigurationInfo"},next:{title:"ConstraintValueInfo",permalink:"/docs/api/build/providers/ConstraintValueInfo"}},l={},c=[{value:"label",id:"label",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"constraintsettinginfo"},"ConstraintSettingInfo"),(0,o.mdx)("p",null,"Provider that signals that a target can be used as a constraint key. This is the only provider returned by a ",(0,o.mdx)("inlineCode",{parentName:"p"},"constraint_setting()")," target."),(0,o.mdx)("h2",{id:"label"},"label"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'label: "target_label"\n')))}u.isMDXComponent=!0}}]);