"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5319],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>o,MDXProvider:()=>x,mdx:()=>h,useMDXComponents:()=>s,withMDXComponents:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),m=function(e){return function(n){var t=s(n.components);return a.createElement(e,i({},n,{components:t}))}},s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},x=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=s(t),x=l,c=m["".concat(r,".").concat(x)]||m[x]||u[x]||i;return t?a.createElement(c,d(d({ref:n},o),{},{components:t})):a.createElement(c,d({ref:n},o))}));function h(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=f;var d={};for(var p in n)hasOwnProperty.call(n,p)&&(d[p]=n[p]);d.originalType=e,d[c]="string"==typeof e?e:l,r[1]=d;for(var o=2;o<i;o++)r[o]=t[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},71840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const i={id:"list"},r="list",d={unversionedId:"api/starlark/list",id:"api/starlark/list",title:"list",description:"append",source:"@site/../docs/api/starlark/list.generated.md",sourceDirName:"api/starlark",slug:"/api/starlark/list",permalink:"/docs/api/starlark/list",draft:!1,tags:[],version:"current",frontMatter:{id:"list"},sidebar:"manualSidebar",previous:{title:"function",permalink:"/docs/api/starlark/function"},next:{title:"regex",permalink:"/docs/api/starlark/regex"}},p={},o=[{value:"append",id:"append",level:2},{value:"Details",id:"details",level:4},{value:"clear",id:"clear",level:2},{value:"Details",id:"details-1",level:4},{value:"extend",id:"extend",level:2},{value:"Details",id:"details-2",level:4},{value:"index",id:"index",level:2},{value:"Details",id:"details-3",level:4},{value:"insert",id:"insert",level:2},{value:"Details",id:"details-4",level:4},{value:"pop",id:"pop",level:2},{value:"Details",id:"details-5",level:4},{value:"remove",id:"remove",level:2},{value:"Details",id:"details-6",level:4}],m={toc:o};function s(e){let{components:n,...t}=e;return(0,l.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"list"},"list"),(0,l.mdx)("h2",{id:"append"},"append"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def append(el: "") -> None\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/3705afa472e466b8b061cce44b47c9ddc6db696d/doc/spec.md#list%C2%B7append"},"list.append"),": append an element to a list."),(0,l.mdx)("h4",{id:"details"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"L.append(x)")," appends ",(0,l.mdx)("inlineCode",{parentName:"p"},"x")," to the list L, and returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"None"),"."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"append")," fails if the list is frozen or has active iterators."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"x = []\nx.append(1)\nx.append(2)\nx.append(3)\nx == [1, 2, 3]\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"clear"},"clear"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def clear() -> None\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/3705afa472e466b8b061cce44b47c9ddc6db696d/doc/spec.md#list%C2%B7clear"},"list.clear"),": clear a list"),(0,l.mdx)("h4",{id:"details-1"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"L.clear()")," removes all the elements of the list L and returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"None"),".\nIt fails if the list is frozen or if there are active iterators."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"x = [1, 2, 3]\nx.clear()\nx == []\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"extend"},"extend"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def extend(other: iter("")) -> None\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/3705afa472e466b8b061cce44b47c9ddc6db696d/doc/spec.md#list%C2%B7extend"},"list.extend"),": extend a list with another iterable's content."),(0,l.mdx)("h4",{id:"details-2"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"L.extend(x)")," appends the elements of ",(0,l.mdx)("inlineCode",{parentName:"p"},"x"),", which must be iterable, to\nthe list L, and returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"None"),"."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"extend")," fails if ",(0,l.mdx)("inlineCode",{parentName:"p"},"x")," is not iterable, or if the list L is frozen or has\nactive iterators."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'x = []\nx.extend([1, 2, 3])\nx.extend(["foo"])\nx == [1, 2, 3, "foo"]\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"index"},"index"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def index(needle: "", start: [None, int.type] = None, end: [None, int.type] = None) -> int.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/3705afa472e466b8b061cce44b47c9ddc6db696d/doc/spec.md#list%C2%B7index"},"list.index"),": get the index of an element in the list."),(0,l.mdx)("h4",{id:"details-3"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"L.index(x[, start[, end]])")," finds ",(0,l.mdx)("inlineCode",{parentName:"p"},"x")," within the list L and returns its\nindex."),(0,l.mdx)("p",null,"The optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"start")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"end")," parameters restrict the portion of\nlist L that is inspected.  If provided and not ",(0,l.mdx)("inlineCode",{parentName:"p"},"None"),", they must be list\nindices of type ",(0,l.mdx)("inlineCode",{parentName:"p"},"int"),". If an index is negative, ",(0,l.mdx)("inlineCode",{parentName:"p"},"len(L)")," is effectively\nadded to it, then if the index is outside the range ",(0,l.mdx)("inlineCode",{parentName:"p"},"[0:len(L)]"),", the\nnearest value within that range is used; see ",(0,l.mdx)("a",{parentName:"p",href:"#indexing"},"Indexing"),"."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"index")," fails if ",(0,l.mdx)("inlineCode",{parentName:"p"},"x")," is not found in L, or if ",(0,l.mdx)("inlineCode",{parentName:"p"},"start")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"end"),"\nis not a valid index (",(0,l.mdx)("inlineCode",{parentName:"p"},"int")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"None"),")."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'x = ["b", "a", "n", "a", "n", "a"]\nx.index("a") == 1      # bAnana\nx.index("a", 2) == 3   # banAna\nx.index("a", -2) == 5  # bananA\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"insert"},"insert"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def insert(index: int.type, el: "") -> None\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/3705afa472e466b8b061cce44b47c9ddc6db696d/doc/spec.md#list%C2%B7insert"},"list.insert"),": insert an element in a list."),(0,l.mdx)("h4",{id:"details-4"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"L.insert(i, x)")," inserts the value ",(0,l.mdx)("inlineCode",{parentName:"p"},"x")," in the list L at index ",(0,l.mdx)("inlineCode",{parentName:"p"},"i"),",\nmoving higher-numbered elements along by one.  It returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"None"),"."),(0,l.mdx)("p",null,"As usual, the index ",(0,l.mdx)("inlineCode",{parentName:"p"},"i")," must be an ",(0,l.mdx)("inlineCode",{parentName:"p"},"int"),". If its value is negative,\nthe length of the list is added, then its value is clamped to the\nnearest value in the range ",(0,l.mdx)("inlineCode",{parentName:"p"},"[0:len(L)]")," to yield the effective index."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"insert")," fails if the list is frozen or has active iterators."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'x = ["b", "c", "e"]\nx.insert(0, "a")\nx.insert(-1, "d")\nx == ["a", "b", "c", "d", "e"]\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"pop"},"pop"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def pop(index: [None, ""] = None) -> ""\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/3705afa472e466b8b061cce44b47c9ddc6db696d/doc/spec.md#list%C2%B7pop"},"list.pop"),": removes and returns the last element of a list."),(0,l.mdx)("h4",{id:"details-5"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"L.pop([index])")," removes and returns the last element of the list L, or,\nif the optional index is provided, at that index."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"pop")," fails if the index is negative or not less than the length of\nthe list, of if the list is frozen or has active iterators."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"x = [1, 2, 3]\nx.pop() == 3\nx.pop() == 2\nx == [1]\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"remove"},"remove"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def remove(needle: "") -> None\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/3705afa472e466b8b061cce44b47c9ddc6db696d/doc/spec.md#list%C2%B7remove"},"list.remove"),": remove a value from a list"),(0,l.mdx)("h4",{id:"details-6"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"L.remove(x)")," removes the first occurrence of the value ",(0,l.mdx)("inlineCode",{parentName:"p"},"x")," from the\nlist L, and returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"None"),"."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"remove")," fails if the list does not contain ",(0,l.mdx)("inlineCode",{parentName:"p"},"x"),", is frozen, or has\nactive iterators."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"x = [1, 2, 3, 2]\nx.remove(2)\nx == [1, 3, 2]\nx.remove(2)\nx == [1, 3]\n")),(0,l.mdx)("p",null,"A subsequent call to ",(0,l.mdx)("inlineCode",{parentName:"p"},"x.remove(2)")," would yield an error because the\nelement won't be found."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"x = [1, 2, 3, 2]\nx.remove(2)\nx.remove(2)\nx.remove(2) # error: not found\n")))}s.isMDXComponent=!0}}]);