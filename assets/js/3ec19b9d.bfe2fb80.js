"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7829],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>f,useMDXComponents:()=>m,withMDXComponents:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){return function(t){var n=m(t.components);return a.createElement(e,i({},t,{components:n}))}},m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},x=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,c=p["".concat(o,".").concat(u)]||p[u]||h[u]||i;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=x;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}x.displayName="MDXCreateElement"},98126:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"writing_rules",title:"Writing Rules"},o=void 0,l={unversionedId:"rule_authors/writing_rules",id:"rule_authors/writing_rules",title:"Writing Rules",description:"This page describes how to write rules for Buck2 and explains the flow for implementing rules that are already defined in Buck1.",source:"@site/../docs/rule_authors/writing_rules.md",sourceDirName:"rule_authors",slug:"/rule_authors/writing_rules",permalink:"/docs/rule_authors/writing_rules",draft:!1,tags:[],version:"current",frontMatter:{id:"writing_rules",title:"Writing Rules"},sidebar:"manualSidebar",previous:{title:"Remote Execution",permalink:"/docs/remote_execution"},next:{title:"Rule APIs",permalink:"/docs/rule_authors/rule_api"}},d={},s=[{value:"Workflow by example",id:"workflow-by-example",level:2},{value:"Concepts and design",id:"concepts-and-design",level:2},{value:"Providers",id:"providers",level:3},{value:"Actions",id:"actions",level:3},{value:"Run action",id:"run-action",level:4},{value:"Debugging",id:"debugging",level:2},{value:"Testing Rules",id:"testing-rules",level:2},{value:"New rules",id:"new-rules",level:2}],p=(m="FbInternalOnly",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var m;const u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"This page describes how to write rules for Buck2 and explains the flow for implementing rules that are already defined in Buck1."),(0,r.mdx)("p",null,"For a list of the API functions available, see ",(0,r.mdx)("a",{parentName:"p",href:"/docs/rule_authors/rule_api"},"Rule APIs"),"."),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"Rules such as ",(0,r.mdx)("inlineCode",{parentName:"p"},"@fbcode_macros//build_defs:native_rules.bzl buck_genrule")," are not actually rules, they are ",(0,r.mdx)("em",{parentName:"p"},"macros")," (Starlark functions that eventually call out the underlying ",(0,r.mdx)("inlineCode",{parentName:"p"},"genrule")," ",(0,r.mdx)("em",{parentName:"p"},"rule"),").Macros in Buck2 are mostly compatible with Buck1 and should be written in the same way.")),(0,r.mdx)("h2",{id:"workflow-by-example"},"Workflow by example"),(0,r.mdx)("p",null,"The built-in Buck2 rules are stored in ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbsource")," in ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode/buck2/prelude"),". To add a rule for a language, say ",(0,r.mdx)("inlineCode",{parentName:"p"},"pascal"),":"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Look at ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2/blob/main/prelude/attributes.bzl"},"prelude/attributes.bzl")," to see the attributes that are supported in Buck1 and are mirrored into Buck2. If ",(0,r.mdx)("inlineCode",{parentName:"p"},"pascal")," was an existing rule, you would see what attributes it takes (often it will be ",(0,r.mdx)("inlineCode",{parentName:"p"},"pascal_library")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"pascal_binary"),").")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Create a file at ",(0,r.mdx)("inlineCode",{parentName:"p"},"prelude/pascal.bzl")," that will contain your rule implementations. The details are explained later, but a dummy rule looks like the following:"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def pascal_binary_impl(_ctx: "context") -> ["provider"]:\n    return [DefaultInfo()]\n'))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Register that rule in ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2/blob/main/prelude/rules_impl.bzl"},(0,r.mdx)("inlineCode",{parentName:"a"},"prelude/rules_impl.bzl")),", which involves adding a ",(0,r.mdx)("inlineCode",{parentName:"p"},'load(":pascal.bzl", "pascal_binary_impl")')," at the top and an additional entry in ",(0,r.mdx)("inlineCode",{parentName:"p"},"implemented_rules")," section to wire up ",(0,r.mdx)("inlineCode",{parentName:"p"},"pascal_binary = pascal_binary_impl"),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Create a directory in ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode/buck2/tests/targets/rules/pascal")," with ",(0,r.mdx)("inlineCode",{parentName:"p"},"TARGETS")," and whatever source files and test targets you need to test your project. Note, Apple tests are currently located at ",(0,r.mdx)("inlineCode",{parentName:"p"},"xplat/buck2/tests/apple/..."),".")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Test your code with ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 build fbcode//buck2/tests/targets/rules/pascal:"),". They should succeed with no actual output produced.")),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Now implement the rules (see the rest of this page)."))),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"Before merging a diff, it's important that all your Starlark is warning free (if you don't want to set up Buck2 for local development, test it in CI). ",(0,r.mdx)(p,{mdxType:"FbInternalOnly"},"If you do set it up locally, see the ",(0,r.mdx)("inlineCode",{parentName:"p"},"README.md")," in the root of ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode/buck2"),". Running ",(0,r.mdx)("inlineCode",{parentName:"p"},"./test.py --lint-only")," will confirm your Starlark code is warning free."))),(0,r.mdx)("h2",{id:"concepts-and-design"},"Concepts and design"),(0,r.mdx)("p",null,"A ",(0,r.mdx)("em",{parentName:"p"},"rule")," for a ",(0,r.mdx)("em",{parentName:"p"},"target")," uses ",(0,r.mdx)("em",{parentName:"p"},"attributes")," to declare ",(0,r.mdx)("em",{parentName:"p"},"actions"),", which produce ",(0,r.mdx)("em",{parentName:"p"},"artifacts")," that get included in ",(0,r.mdx)("em",{parentName:"p"},"providers"),"."),(0,r.mdx)("p",null,"For example, given:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'def pascal_binary_impl(ctx: "context") -> ["provider"]:\n    ...\n    binary = ctx.actions.declare_output(ctx.attrs.out)\n    ctx.actions.run(["pascalc", args, "-o", binary.as_output()])\n    return [\n        DefaultInfo(default_output = binary),\n    ]\n\npascal_binary = rule(impl = pascal_binary_impl, attrs = {\n  "out": attrs.string(),\n  ...\n})\n')),(0,r.mdx)("p",null,"In the above snippet:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Rule")," is ",(0,r.mdx)("inlineCode",{parentName:"li"},"pascal_binary"),", which is implemented by ",(0,r.mdx)("inlineCode",{parentName:"li"},"pascal_binary_impl"),". The rule says how to build things."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Target")," will be something like ",(0,r.mdx)("inlineCode",{parentName:"li"},"fbcode//buck2/tests/targets/rules/pascal:my_binary"),". The rule implementation ",(0,r.mdx)("inlineCode",{parentName:"li"},"pascal_binary_impl")," will be called once per target."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Attributes")," are the fields on the target (for example, you might have ",(0,r.mdx)("inlineCode",{parentName:"li"},"out"),", which can be accessed via ",(0,r.mdx)("inlineCode",{parentName:"li"},"ctx.attrs.out"),")."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Actions")," are declared by the rule with things like ",(0,r.mdx)("inlineCode",{parentName:"li"},"ctx.actions.run"),", which takes a command line. Note that the actions are not run by the rule, but declared, so that Buck2 can run them later."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Artifacts")," represent files on disk, which could be source or build outputs (",(0,r.mdx)("inlineCode",{parentName:"li"},"binary")," in the above example).",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"For build outputs, the artifact is produced by an action, and the existence of the artifact does not imply the build has been run: the artifact 'remembers' what should be run if it is required."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Providers")," are returned, which is information that other rules get to use. These will often contain artifacts.")),(0,r.mdx)("p",null,"The rule implementation takes in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx"),", which is the rule context. The two most important fields are ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx.attrs"),", which picks up the attributes declared by the rule, and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx.actions"),", which lets you create new actions to actually do something."),(0,r.mdx)("p",null,"The output of any actions performed will be materialized in ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck-out"),". However, only the defined outputs of providers are available for dependent rules to consume and only the actions necessary to produce those outputs being consumed will be run. By default, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"default_output")," of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"DefaultInfo")," provider is built and output during a ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck build"),"."),(0,r.mdx)("h3",{id:"providers"},"Providers"),(0,r.mdx)("p",null,"Providers are the data returned from a rule and are the only way that information from this rule is available to rules that depend on it. Every rule must return at least the ",(0,r.mdx)("inlineCode",{parentName:"p"},"DefaultInfo")," provider, but most will also return either ",(0,r.mdx)("inlineCode",{parentName:"p"},"RunInfo")," (because they are executable) or some custom provider (because they are incorporated into something that is ultimately executable)."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"DefaultInfo")," provider has a field ",(0,r.mdx)("inlineCode",{parentName:"p"},"default_output"),", which is the file that will be built when someone executes a ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 build")," on this particular target, and the file that will be used when someone runs ",(0,r.mdx)("inlineCode",{parentName:"p"},"$(location target)")," or uses it as a source file (such as ",(0,r.mdx)("inlineCode",{parentName:"p"},'srcs = [":my_target"]'),".)"),(0,r.mdx)("p",null,"The current rule of thumb is that if you can build the ",(0,r.mdx)("inlineCode",{parentName:"p"},"default_output"),", the rule must 'work', and, if usable, should be 'ready'. For example, for a binary, the executable and runtime libraries it depends on might be returned. For a library, because neither the static or dynamic library is the 'default', you merely have to do enough work to ensure that the static and dynamic library probably work."),(0,r.mdx)("p",null,"Similar to how ",(0,r.mdx)("inlineCode",{parentName:"p"},"DefaultInfo")," wraps a list of artifacts and ",(0,r.mdx)("inlineCode",{parentName:"p"},"$(location)")," selects from ",(0,r.mdx)("inlineCode",{parentName:"p"},"DefaultInfo"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"RunInfo")," wraps a command line and ",(0,r.mdx)("inlineCode",{parentName:"p"},"$(exe)")," selects from ",(0,r.mdx)("inlineCode",{parentName:"p"},"RunInfo"),"."),(0,r.mdx)("p",null,"For more information about command lines, see ",(0,r.mdx)("a",{parentName:"p",href:"#run-action"},"Run action"),", below."),(0,r.mdx)("p",null,"For libraries, usually you need to pass some information about the library up to the binary. The ",(0,r.mdx)("em",{parentName:"p"},"only")," information that dependents on the library get are the providers, so designing the information that flows around the provider is critical to designing good rules."),(0,r.mdx)("p",null,"For a hypothetical rule, you may decide you want the name of the library and the artifact that represents the ",(0,r.mdx)("inlineCode",{parentName:"p"},".so")," file, for which you could define the following provider:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'PascalLibraryInfo = provider(fields=[\n    "name",   # The name of the library\n    "object"  # An artifact, the .so file that needs linking in\n    ]\n)\n')),(0,r.mdx)("p",null,"Often, you'll grab your dependencies from all your providers:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"my_deps = [x[PascalLibraryInfo] for x in ctx.attrs.deps]\n")),(0,r.mdx)("p",null,"In many cases, it becomes apparent you need the transitive closure of all libraries (for example, the libraries and everything they depend upon), in which case, the standard pattern is to move to a provider of a list of ",(0,r.mdx)("inlineCode",{parentName:"p"},"record")," (see the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebookexperimental/starlark-rust/blob/main/docs/types.md"},"types.md")," document in GitHub) and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"flatten/dedupe")," functions, defining it as:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'PascalLibraryInfo = provider(fields=["links"]) # a list of LinkData\n\nLinkData = record(name = str.type, object = "artifact")\n')),(0,r.mdx)("p",null,"And then consuming it:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},"my_links = dedupe(flatten([x[PascalLibraryInfo].links for x in ctx.attrs.deps]))\nmy_info = PascalLibraryInfo(links = my_links)\n")),(0,r.mdx)("p",null,"However, this ",(0,r.mdx)("inlineCode",{parentName:"p"},"flatten"),"/",(0,r.mdx)("inlineCode",{parentName:"p"},"dupe")," pattern can get expensive, especially when you have a deep dependency graph. To fix that it's recommended to use ",(0,r.mdx)("a",{parentName:"p",href:"/docs/rule_authors/transitive_sets"},"transitive sets"),"."),(0,r.mdx)("h3",{id:"actions"},"Actions"),(0,r.mdx)("p",null,"There are several actions you can use to create symlink trees, and so on."),(0,r.mdx)("h4",{id:"run-action"},"Run action"),(0,r.mdx)("p",null,"Of the various actions, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"run")," action is by far the most important: it's the one that invokes a command line."),(0,r.mdx)("p",null,"A command line is both a list of string arguments and a list of artifacts they depend on; with syntactic niceties for adding artifacts to command lines in a way that ensures the dependencies are usually correct."),(0,r.mdx)("p",null,"Following are examples of command line manipulations:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'cmd = cmd_args(["some", "arguments"])\ncmd.add("another-arg")\ncmd.add(ctx.attrs.src) # An input artifact\nout = ctx.actions.declare_output("an output")\ncmd.add(out.as_output())\nctx.actions.run(cmd)\n')),(0,r.mdx)("p",null,"The action ",(0,r.mdx)("inlineCode",{parentName:"p"},"declare_output")," creates a new artifact which is not bound to anything. You can call ",(0,r.mdx)("inlineCode",{parentName:"p"},".as_output()")," on it when adding it to a command line to say that this command line doesn't take the artifact as an input but produces it as an output."),(0,r.mdx)("p",null,"From now on, if ",(0,r.mdx)("inlineCode",{parentName:"p"},"out")," is used as a dependency (either to another command line, or in ",(0,r.mdx)("inlineCode",{parentName:"p"},"DefaultInfo"),") then the action will be run to produce that artifact. Typically, these outputs are declared (",(0,r.mdx)("inlineCode",{parentName:"p"},"declare_output"),"), bound in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"ctx.actions.run")," call with ",(0,r.mdx)("inlineCode",{parentName:"p"},".as_output()"),", then either used locally as the input to another action or returned in a provider."),(0,r.mdx)("p",null,"As another example:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'cmd = cmd_args(["cp", input, output.as_output()])\nctx.actions.run(cmd)\n')),(0,r.mdx)("p",null,"A command provides both a string (what to write when used) and a list of artifacts (what must be available when used). Normally, as in the case above, the artifacts that are used correspond to those on the command line. But imagine the rule is changed to write the command to a shell script first:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'sh = ctx.actions.write("test.sh", ["cp", input, output])\ncmd = cmd_args(["sh",sh])\ncmd.hidden([input, output.as_output()])\nctx.actions.run(cmd)\n')),(0,r.mdx)("p",null,"The command has been written to a shell script, which is now run. Beforehand, all the artifacts used by the command appeared on the command line. Now they don't. However, the shell script still accesses input and output. To inform the run command, use the hidden field of the command line to declare the dependency."),(0,r.mdx)("p",null,"For more complicated actions, which perform meaningful logic beyond invoking a simple command, the tendency is to write custom Python scripts. Python scripts are used instead of shell scripts as they have better cross-platform compatibility and fewer hidden corners (especially in error paths)."),(0,r.mdx)("p",null,"As an example of a Python helper, see ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/buck2/blob/main/prelude/cxx/tools/make_comp_db.py"},"make_comp_db.py"),"."),(0,r.mdx)("p",null,"A further advantage of using Python is that these commands can be tested in isolation, outside of Buck2."),(0,r.mdx)("h2",{id:"debugging"},"Debugging"),(0,r.mdx)("p",null,"The functions ",(0,r.mdx)("inlineCode",{parentName:"p"},"fail")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"print")," are your friends. To get started, a ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 build fbcode//buck2/tests/targets/rules/pascal:")," builds everything or ",(0,r.mdx)("inlineCode",{parentName:"p"},"buck2 run fbcode//buck2/tests/targets/rules/pascal:my_binary")," runs a specific binary that returns a ",(0,r.mdx)("inlineCode",{parentName:"p"},"RunInfo"),"."),(0,r.mdx)("h2",{id:"testing-rules"},"Testing Rules"),(0,r.mdx)("p",null,"A common way to test is to use ",(0,r.mdx)("inlineCode",{parentName:"p"},"genrule")," to cause the produced binary to run and assert some properties from it. If your rule is in Buck1 and Buck2, use a ",(0,r.mdx)("inlineCode",{parentName:"p"},"TARGETS")," file so you can test with both. If your tests are incompatible with Buck1 (such as if it is a new rule), use ",(0,r.mdx)("inlineCode",{parentName:"p"},"TARGETS.v2"),", which will only be seen by Buck2 and won't cause errors with Buck1."),(0,r.mdx)("h2",{id:"new-rules"},"New rules"),(0,r.mdx)("p",null,"If your rule is ",(0,r.mdx)("strong",{parentName:"p"},"not")," already in Buck1, then you can define it wherever you like, with a preference for it not being in ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbcode/buck2/prelude"),"."),(0,r.mdx)("p",null,"The only advantage of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"prelude")," is that rules can be used without a corresponding ",(0,r.mdx)("inlineCode",{parentName:"p"},"load"),", which is generally considered a misfeature. The attributes should usually be placed adjacent to the rule itself."),(0,r.mdx)("p",null,"As an example, just below the ",(0,r.mdx)("inlineCode",{parentName:"p"},"pascal_binary_impl")," function, you could write:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'pascal_binary = rule(\n    impl = pascal_binary_impl,\n    attrs = {\n        "deps": attrs.list(attrs.dep()),\n        "src": attrs.source(),\n    }\n)\n')))}c.isMDXComponent=!0}}]);