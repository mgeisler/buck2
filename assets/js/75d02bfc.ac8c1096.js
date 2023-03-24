"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8965],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>p,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){return function(t){var r=c(t.components);return n.createElement(e,l({},t,{components:r}))}},c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,m=d["".concat(o,".").concat(p)]||d[p]||f[p]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},51624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={},o="lazy_attrs",i={unversionedId:"generated/bxl/lazy_attrs",id:"generated/bxl/lazy_attrs",title:"lazy_attrs",description:"The context for getting attrs lazily on a StarlarkConfiguredTargetNode.",source:"@site/../docs/generated/bxl/lazy_attrs.md",sourceDirName:"generated/bxl",slug:"/generated/bxl/lazy_attrs",permalink:"/docs/generated/bxl/lazy_attrs",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"instant",permalink:"/docs/generated/bxl/instant"},next:{title:"lazy_resolved_attrs",permalink:"/docs/generated/bxl/lazy_resolved_attrs"}},s={},u=[{value:"Members",id:"members",level:3},{value:"get",id:"get",level:2},{value:"Details",id:"details",level:3}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,a.mdx)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"lazy_attrs"},"lazy_attrs"),(0,a.mdx)("p",null,"The context for getting attrs lazily on a ",(0,a.mdx)("inlineCode",{parentName:"p"},"StarlarkConfiguredTargetNode"),"."),(0,a.mdx)("h3",{id:"members"},"Members"),(0,a.mdx)("table",{class:"starlark_table starlark_members_table"},(0,a.mdx)("thead",null,(0,a.mdx)("tr",null,(0,a.mdx)("th",null,"Member"),(0,a.mdx)("th",null,"Description"),(0,a.mdx)("th",null,"Type"))),(0,a.mdx)("tbody",null,(0,a.mdx)("tr",null,(0,a.mdx)("td",null,(0,a.mdx)("p",null,"get")),(0,a.mdx)("td",null,(0,a.mdx)("p",null,"Gets a single attribute. Returns an optional ",(0,a.mdx)("inlineCode",{parentName:"p"},"[StarlarkConfiguredValue]"),".")),(0,a.mdx)("td",null,(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'(\n    attr: str.type\n) -> [None, "configured_attr_val"]\n')))))),(0,a.mdx)("h2",{id:"get"},"get"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def get(attr: str.type) -> [None, "configured_attr_val"]\n')),(0,a.mdx)("p",null,"Gets a single attribute. Returns an optional ",(0,a.mdx)("inlineCode",{parentName:"p"},"[StarlarkConfiguredValue]"),"."),(0,a.mdx)("h3",{id:"details"},"Details"),(0,a.mdx)("p",null,'def _impl_attrs_lazy(ctx):\nnode = ctx.cquery().owner("cell//path/to/TARGETS")',"[0]",'\nattrs = node.attrs_lazy() # cache once\nctx.output.print(attrs.get("some_attributes").value())\nctx.output.print(attrs.get("some_attribute").label)'),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"")))}c.isMDXComponent=!0}}]);