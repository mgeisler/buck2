"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9005],{3905:(e,t,a)=>{a.r(t),a.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>x,useMDXComponents:()=>u,withMDXComponents:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){return function(t){var a=u(t.components);return n.createElement(e,r({},t,{components:a}))}},u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=u(a),p=i,c=m["".concat(l,".").concat(p)]||m[p]||h[p]||r;return a?n.createElement(c,o(o({ref:t},s),{},{components:a})):n.createElement(c,o({ref:t},s))}));function x(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},65694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={},l="ctx.actions",o={unversionedId:"generated/native/ctx.actions",id:"generated/native/ctx.actions",title:"ctx.actions",description:"Actions take inputs and produce outputs. Most output filenames can either be artifacts created with declare_output or strings that are implicitly converted to output artifacts.",source:"@site/../docs/generated/native/ctx.actions.md",sourceDirName:"generated/native",slug:"/generated/native/ctx.actions",permalink:"/docs/generated/native/ctx.actions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"manualSidebar",previous:{title:"cmd_args",permalink:"/docs/generated/native/cmd_args"},next:{title:"ctx",permalink:"/docs/generated/native/ctx"}},d={},s=[{value:"anon_target",id:"anon_target",level:2},{value:"anon_targets",id:"anon_targets",level:2},{value:"artifact_tag",id:"artifact_tag",level:2},{value:"cas_artifact",id:"cas_artifact",level:2},{value:"Details",id:"details",level:3},{value:"copied_dir",id:"copied_dir",level:2},{value:"copy_dir",id:"copy_dir",level:2},{value:"copy_file",id:"copy_file",level:2},{value:"declare_output",id:"declare_output",level:2},{value:"Details",id:"details-1",level:3},{value:"download_file",id:"download_file",level:2},{value:"dynamic_output",id:"dynamic_output",level:2},{value:"run",id:"run",level:2},{value:"Details",id:"details-2",level:3},{value:"symlink_dir",id:"symlink_dir",level:2},{value:"symlink_file",id:"symlink_file",level:2},{value:"symlinked_dir",id:"symlinked_dir",level:2},{value:"tset",id:"tset",level:2},{value:"write",id:"write",level:2},{value:"Details",id:"details-3",level:3},{value:"write_json",id:"write_json",level:2},{value:"Details",id:"details-4",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,i.mdx)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"ctxactions"},"ctx.actions"),(0,i.mdx)("p",null,"Actions take inputs and produce outputs. Most output filenames can either be artifacts created with ",(0,i.mdx)("inlineCode",{parentName:"p"},"declare_output")," or strings that are implicitly converted to output artifacts."),(0,i.mdx)("h2",{id:"anon_target"},"anon_target"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def anon_target(rule: "rule", attrs: {str.type: ""}) -> "promise"\n')),(0,i.mdx)("p",null,"Generate an anonymous target"),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"anon_targets"},"anon_targets"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def anon_targets(rules: [("rule", {str.type: ""})]) -> "promise"\n')),(0,i.mdx)("p",null,"Generate a series of anonymous targets"),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"artifact_tag"},"artifact_tag"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def artifact_tag() -> ""\n')),(0,i.mdx)("p",null,"Allocate a new input tag"),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"cas_artifact"},"cas_artifact"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def cas_artifact(\n    output: "",\n    digest: str.type,\n    use_case: str.type,\n    *,\n    expires_after_timestamp: int.type,\n    is_executable: bool.type = None,\n    is_tree: bool.type = None,\n    is_directory: bool.type = None\n) -> ""\n')),(0,i.mdx)("p",null,"Downloads a CAS artifact to an output"),(0,i.mdx)("h3",{id:"details"},"Details"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"digest"),": must look like ",(0,i.mdx)("inlineCode",{parentName:"li"},"SHA1:SIZE")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"use_case"),": your RE use case"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"expires_after_timestamp"),": must be a UNIX timestamp. Your digest's TTL must exceed this timestamp. Your build will break once the digest expires, so make sure the expiry is long enough (preferably, in years)."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"is_executable")," (optional): indicates the resulting file should be marked with executable permissions")),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"copied_dir"},"copied_dir"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def copied_dir(output: "", srcs: "") -> ""\n')),(0,i.mdx)("p",null,"Returns an ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," which is a directory containing copied files. The srcs must be a dictionary of path (as string, relative to the result directory) to the bound ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),", which will be laid out in the directory."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"copy_dir"},"copy_dir"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def copy_dir(dest: "", src: "") -> ""\n')),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"copy_file"},"copy_file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def copy_file(dest: "", src: "") -> ""\n')),(0,i.mdx)("p",null,"Copies the source ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," to the destination (which can be a string representing a filename or an output ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),") and returns the output ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),". The copy works for files or directories."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"declare_output"},"declare_output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def declare_output(prefix: str.type, filename: [None, str.type] = None, *, dir: bool.type = None) -> "artifact"\n')),(0,i.mdx)("p",null,"Returns an ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," with the name filename, which when asked for its name, will return filename (which may include a directory portion)"),(0,i.mdx)("h3",{id:"details-1"},"Details"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"prefix")," (optional): provides a silent part of the filename, which can be used to disambiguate but whose presence will not be visible to anyone using the ",(0,i.mdx)("inlineCode",{parentName:"li"},"artifact"),". By default, outputs are considered files; pass ",(0,i.mdx)("inlineCode",{parentName:"li"},"dir = True")," to indicate it is a directory")),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"download_file"},"download_file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def download_file(\n    output: "",\n    url: str.type,\n    *,\n    sha1: [None, str.type] = None,\n    sha256: [None, str.type] = None,\n    is_executable: bool.type = None,\n    is_deferrable: bool.type = None\n) -> ""\n')),(0,i.mdx)("p",null,"Downloads a URL to an output (filename as string or output artifact). The file at the URL must have the given sha1 or the command will fail. The optional parameter is_executable indicates whether the resulting file should be marked with executable permissions."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"dynamic_output"},"dynamic_output"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def dynamic_output(*, dynamic: ["artifact"], inputs: ["artifact"], outputs: ["output_artifact"], f: "") -> None\n')),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"run"},"run"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def run(\n    arguments: "",\n    *,\n    category: str.type,\n    identifier: [None, str.type] = None,\n    env: [None, {str.type: ""}] = None,\n    local_only: bool.type = None,\n    prefer_local: bool.type = None,\n    always_print_stderr: bool.type = None,\n    weight: [None, int.type] = None,\n    weight_percentage: [None, int.type] = None,\n    dep_files: [None, {str.type: ""}] = None,\n    metadata_env_var: [None, str.type] = None,\n    metadata_path: [None, str.type] = None,\n    no_outputs_cleanup: bool.type = None,\n    allow_cache_upload: bool.type = None,\n    force_full_hybrid_if_capable: bool.type = None\n) -> None\n')),(0,i.mdx)("p",null,"Runs a command"),(0,i.mdx)("h3",{id:"details-2"},"Details"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"arguments"),": must be of type ",(0,i.mdx)("inlineCode",{parentName:"li"},"cmd_args"),", or a type convertible to such (such as a list of strings and artifacts) and must contain at least one ",(0,i.mdx)("inlineCode",{parentName:"li"},".as_output()")," artifact"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"category"),": category and identifier - when used together, identify the action in Buck2's event stream, and must be unique for a given target"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"weight"),": used to note how heavy the command is and will typically be set to a higher value to indicate that less such commands should be run in parallel (if running locally)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"no_outputs_cleanup"),": if this flag is set then Buck2 won't clean the outputs of a previous build that might be present on a disk; in which case, command from arguments should be responsible for the cleanup (that is useful, for example, when an action is supporting incremental mode and its outputs are based on result from a previous build)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_env_var")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"meadata_path")," should be used together: both set or both unset",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_path"),": defines a path relative to the result directory for a file with action metadata, which will be created right before the command will be run."),(0,i.mdx)("li",{parentName:"ul"},"Metadata contains the path relative to the Buck2 project root and hash digest for every action input (this excludes symlinks as they could be resolved by a user script if needed). The resolved path relative to the Buck2 project for the metadata file will be passed to command from arguments, via the environment variable, with its name set by ",(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_env_var")),(0,i.mdx)("li",{parentName:"ul"},"Both ",(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_env_var")," and ",(0,i.mdx)("inlineCode",{parentName:"li"},"metadata_path")," are useful when making actions behave in an incremental manner (for details, see ",(0,i.mdx)("a",{parentName:"li",href:"https://buck2.build/docs/rule_authors/incremental_actions/"},"Incremental Actions"),")")))),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"symlink_dir"},"symlink_dir"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def symlink_dir(dest: "", src: "") -> ""\n')),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"symlink_file"},"symlink_file"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def symlink_file(dest: "", src: "") -> ""\n')),(0,i.mdx)("p",null,"Creates a symlink to the source ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," at the destination (which can be a string representing a filename or an output ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),") and returns the output ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),". The symlink works for files or directories."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"symlinked_dir"},"symlinked_dir"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def symlinked_dir(output: "", srcs: "") -> ""\n')),(0,i.mdx)("p",null,"Returns an ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," that is a directory containing symlinks. The srcs must be a dictionary of path (as string, relative to the result directory) to bound ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact"),", which will be laid out in the directory."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"tset"},"tset"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def tset(definition: "", value: [None, ""] = None, children: [None, ""] = None) -> ""\n')),(0,i.mdx)("p",null,"Creates a new transitive set (for details, see ",(0,i.mdx)("a",{parentName:"p",href:"https://buck2.build/docs/rule_authors/transitive_sets/"},"https://buck2.build/docs/rule_authors/transitive_sets/"),")."),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"write"},"write"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def write(output: "", content: "", *, is_executable: bool.type = None, allow_args: bool.type = None, with_inputs: bool.type = None) -> ""\n')),(0,i.mdx)("p",null,"Returns an ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," whose contents are content"),(0,i.mdx)("h3",{id:"details-3"},"Details"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"is_executable")," (optional): indicates whether the resulting file should be marked with executable permissions"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"allow_args")," (optional): must be set to ",(0,i.mdx)("inlineCode",{parentName:"li"},"True")," if you want to write parameter arguments to the file (in particular, macros that write to file)",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"If it is true, the result will be a pair of the ",(0,i.mdx)("inlineCode",{parentName:"li"},"artifact")," containing content and a list of artifact values that were written by macros, which should be used in hidden fields or similar")))),(0,i.mdx)("hr",null),(0,i.mdx)("h2",{id:"write_json"},"write_json"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'def write_json(output: "", content: "", *, with_inputs: bool.type = None) -> ""\n')),(0,i.mdx)("p",null,"Returns an ",(0,i.mdx)("inlineCode",{parentName:"p"},"artifact")," whose contents are content written as a JSON value"),(0,i.mdx)("h3",{id:"details-4"},"Details"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"filename"),": can be a string, or an existing artifact created with ",(0,i.mdx)("inlineCode",{parentName:"li"},"declare_output")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"content"),":  must be composed of the basic json types (Boolean, number, string, list/tuple, dictionary) plus artifacts and command lines",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"An artifact will be written as a string containing the path"),(0,i.mdx)("li",{parentName:"ul"},"A command line will be written as a list of strings, unless ",(0,i.mdx)("inlineCode",{parentName:"li"},"joined=True")," is set, in which case it will be a string"))),(0,i.mdx)("li",{parentName:"ul"},"If you pass ",(0,i.mdx)("inlineCode",{parentName:"li"},"with_inputs = True"),", you'll get back a ",(0,i.mdx)("inlineCode",{parentName:"li"},"cmd_args")," that expands to the JSON file but carries all the underlying inputs as dependencies (so you don't have to use, for example, ",(0,i.mdx)("inlineCode",{parentName:"li"},"hidden")," for them to be added to an action that already receives the JSON file)")))}u.isMDXComponent=!0}}]);