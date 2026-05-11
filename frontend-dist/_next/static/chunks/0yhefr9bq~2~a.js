(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,12574,e=>{"use strict";var t,r,n,o=e.i(140212),i=!o.isServer&&!!o.DEV,a=()=>void 0,l=e=>null!=e,s=e=>"function"!=typeof e||e.length?e:e(),d=e=>Array.isArray(e)?e:e?[e]:[],c=i?e=>(0,o.getOwner)()?(0,o.onCleanup)(e):e:o.onCleanup,u=e=>{if(!e)return"";let t="";for(let r in e){if(!e.hasOwnProperty(r))continue;let n=e[r];t+=n instanceof Date?`; ${r}=${n.toUTCString()}`:"boolean"==typeof n?`; ${r}`:`; ${r}=${n}`}return t},p=("function"==typeof(t={_cookies:[globalThis.document,"cookie"],getItem:e=>p._cookies[0][p._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?.pop()??null,setItem:(e,t,r)=>{let n=p.getItem(e);p._cookies[0][p._cookies[1]]=`${e}=${t}${u(r)}`;let o=Object.assign(new Event("storage"),{key:e,oldValue:n,newValue:t,url:globalThis.document.URL,storageArea:p});window.dispatchEvent(o)},removeItem:e=>{p._cookies[0][p._cookies[1]]=`${e}=deleted${u({expires:new Date(0)})}`},key:e=>{let t=null,r=0;return p._cookies[0][p._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(n,o)=>(!t&&o&&r++===e&&(t=o),"")),t},get length(){let e=0;return p._cookies[0][p._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=+!!t,"")),e}}).clear||(t.clear=()=>{let e;for(;e=t.key(0);)t.removeItem(e)}),t),g="bottom",f=Object.keys(o.sortFns)[0],h=Object.keys(o.mutationSortFns)[0],m=(0,o.createContext)({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function y(){return(0,o.useContext)(m)}var b=class extends Error{},v=(0,o.createContext)(void 0),w=()=>(0,o.createMemo)(()=>{let e=(0,o.useContext)(v);if(!e)throw Error("usePiPWindow must be used within a PiPProvider");return e()}),x=(0,o.createContext)(()=>"dark");function C(){return(0,o.useContext)(x)}var k={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z"},S=RegExp(Object.keys(k).join("|"),"g");function $(e,t,r){var n;if((r=r||{}).threshold=null!=(n=r.threshold)?n:1,!r.accessors){let n=E(e,t,r);return{rankedValue:e,rank:n,accessorIndex:-1,accessorThreshold:r.threshold,passed:n>=r.threshold}}let o=function(e,t){let r=[];for(let o=0,i=t.length;o<i;o++){var n;let i=t[o],a="function"==typeof(n=i)?q:{...q,...n},l=function(e,t){let r=t;"object"==typeof t&&(r=t.accessor);let n=r(e);return null==n?[]:Array.isArray(n)?n:[String(n)]}(e,i);for(let e=0,t=l.length;e<t;e++)r.push({itemValue:l[e],attributes:a})}return r}(e,r.accessors),i={rankedValue:e,rank:0,accessorIndex:-1,accessorThreshold:r.threshold,passed:!1};for(let e=0;e<o.length;e++){let n=o[e],a=E(n.itemValue,t,r),{minRanking:l,maxRanking:s,threshold:d=r.threshold}=n.attributes;a<l&&a>=1?a=l:a>s&&(a=s),(a=Math.min(a,s))>=d&&a>i.rank&&(i.rank=a,i.passed=!0,i.accessorIndex=e,i.accessorThreshold=d,i.rankedValue=n.itemValue)}return i}function E(e,t,r){let n;return(e=M(e,r),(t=M(t,r)).length>e.length)?0:e===t?7:(e=e.toLowerCase())===(t=t.toLowerCase())?6:e.startsWith(t)?5:e.includes(` ${t}`)?4:e.includes(t)?3:1===t.length?0:(n="",e.split(" ").forEach(e=>{e.split("-").forEach(e=>{n+=e.substr(0,1)})}),n).includes(t)?2:function(e,t){let r=0,n=0;function o(e,t,n){for(let o=n,i=t.length;o<i;o++)if(t[o]===e)return r+=1,o+1;return -1}let i=o(t[0],e,0);if(i<0)return 0;n=i;for(let r=1,i=t.length;r<i;r++)if(!((n=o(t[r],e,n))>-1))return 0;return 1+1/(n-i)*(r/t.length)}(e,t)}function M(e,t){let{keepDiacritics:r}=t;return e=`${e}`,r||(e=e.replace(S,e=>k[e])),e}var q={maxRanking:1/0,minRanking:-1/0},A={data:""},F=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,P=/\/\*[^]*?\*\/|  +/g,L=/\n+/g,T=(e,t)=>{let r="",n="",o="";for(let i in e){let a=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+a+";":n+="f"==i[1]?T(a,i):i+"{"+T(a,"k"==i[1]?"":t)+"}":"object"==typeof a?n+=T(a,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=a&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=T.p?T.p(i,a):i+":"+a+";")}return r+(t&&o?t+"{"+o+"}":o)+n},D={},z=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+z(e[r]);return t}return e};function I(e){let t,r,n,o=this||{},i=e.call?e(o.p):e;return((e,t,r,n,o)=>{var i;let a=z(e),l=D[a]||(D[a]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(a));if(!D[l]){let t=a!==e?e:(e=>{let t,r,n=[{}];for(;t=F.exec(e.replace(P,""));)t[4]?n.shift():t[3]?(r=t[3].replace(L," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(L," ").trim();return n[0]})(e);D[l]=T(o?{["@keyframes "+l]:t}:t,r?"":"."+l)}let s=r&&D.g?D.g:null;return r&&(D.g=D[l]),i=D[l],s?t.data=t.data.replace(s,i):-1===t.data.indexOf(i)&&(t.data=n?i+t.data:t.data+i),l})(i.unshift?i.raw?(t=[].slice.call(arguments,1),r=o.p,i.reduce((e,n,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":T(e,""):!1===e?"":e}return e+n+(null==i?"":i)},"")):i.reduce((e,t)=>Object.assign(e,t&&t.call?t(o.p):t),{}):i,(n=o.target,"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||A),o.g,o.o,o.k)}function O(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t)if(Array.isArray(t)){var i=t.length;for(r=0;r<i;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n)}else for(n in t)t[n]&&(o&&(o+=" "),o+=n);return o}(e))&&(n&&(n+=" "),n+=t);return n}function R(...e){return(...t)=>{for(let r of e)r&&r(...t)}}I.bind({g:1}),I.bind({k:1});var K=o.isServer?e=>null!=e&&"object"==typeof e&&"t"in e:e=>e instanceof Element;function N(e){requestAnimationFrame(()=>requestAnimationFrame(e))}var B=e=>{let t=(0,o.createMemo)(()=>{let t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}});return function(e,t){let r=(0,o.untrack)(e);if(o.isServer){let e=r.slice();return()=>e}let{onChange:n}=t,i=new Set(t.appear?void 0:r),a=new WeakSet,[l,s]=(0,o.createSignal)([],{equals:!1}),[d]=(0,o.useTransition)(),c=e=>{for(let t of(s(t=>(t.push.apply(t,e),t)),e))a.delete(t)},u=(e,t,r)=>e.splice(r,0,t);return(0,o.createMemo)(t=>{let r=l(),s=e();if(s[o.$TRACK],(0,o.untrack)(d))return d(),t;if(r.length){let e=t.filter(e=>!r.includes(e));return r.length=0,n({list:e,added:[],removed:[],unchanged:e,finishRemoved:c}),e}return(0,o.untrack)(()=>{let e=new Set(s),r=s.slice(),o=[],l=[],d=[];for(let e of s)(i.has(e)?d:o).push(e);let p=!o.length;for(let n=0;n<t.length;n++){let o=t[n];e.has(o)||(a.has(o)||(l.push(o),a.add(o)),u(r,o,n)),p&&o!==r[n]&&(p=!1)}return!l.length&&p?t:(n({list:r,added:o,removed:l,unchanged:d,finishRemoved:c}),i=e,r)})},t.appear?[]:r.slice())}(function(e,t=K,r=K){let n=(0,o.createMemo)(e),i=(0,o.createMemo)(()=>(function e(t,r){if(r(t))return t;if("function"==typeof t&&!t.length)return e(t(),r);if(Array.isArray(t)){let n=[];for(let o of t){let t=e(o,r);t&&(Array.isArray(t)?n.push.apply(n,t):n.push(t))}return n.length?n:null}return null})(n(),o.isServer?r:t));return i.toArray=()=>{let e=i();return Array.isArray(e)?e:e?[e]:[]},i}(()=>e.children).toArray,{appear:e.appear,onChange({added:r,removed:n,finishRemoved:o,list:i}){let a=t();for(let t of r)!function(e,t,r){let{onBeforeEnter:n,onEnter:o,onAfterEnter:i}=t;function a(t){t&&t.target!==r||(r.removeEventListener("transitionend",a),r.removeEventListener("animationend",a),r.classList.remove(...e.enterActive),r.classList.remove(...e.enterTo),i?.(r))}n?.(r),r.classList.add(...e.enter),r.classList.add(...e.enterActive),queueMicrotask(()=>{r.parentNode&&o?.(r,()=>a())}),N(()=>{r.classList.remove(...e.enter),r.classList.add(...e.enterTo),(!o||o.length<2)&&(r.addEventListener("transitionend",a),r.addEventListener("animationend",a))})}(a,e,t);let l=[];for(let e of i)e.isConnected&&(e instanceof HTMLElement||e instanceof SVGElement)&&l.push({el:e,rect:e.getBoundingClientRect()});for(let t of(queueMicrotask(()=>{let e=[];for(let{el:t,rect:r}of l)if(t.isConnected){let n=t.getBoundingClientRect(),o=r.left-n.left,i=r.top-n.top;(o||i)&&(t.style.transform=`translate(${o}px, ${i}px)`,t.style.transitionDuration="0s",e.push(t))}for(let t of(document.body.offsetHeight,e)){let e=function(r){(r.target===t||/transform$/.test(r.propertyName))&&(t.removeEventListener("transitionend",e),t.classList.remove(...a.move))};t.classList.add(...a.move),t.style.transform=t.style.transitionDuration="",t.addEventListener("transitionend",e)}}),n))!function(e,t,r,n){let{onBeforeExit:o,onExit:i,onAfterExit:a}=t;if(!r.parentNode)return n?.();function l(t){t&&t.target!==r||(n?.(),r.removeEventListener("transitionend",l),r.removeEventListener("animationend",l),r.classList.remove(...e.exitActive),r.classList.remove(...e.exitTo),a?.(r))}o?.(r),r.classList.add(...e.exit),r.classList.add(...e.exitActive),i?.(r,()=>l()),N(()=>{r.classList.remove(...e.exit),r.classList.add(...e.exitTo),(!i||i.length<2)&&(r.addEventListener("transitionend",l),r.addEventListener("animationend",l))})}(a,e,t,()=>o([t]))}})},U=Symbol("fallback");function G(e){for(let t of e)t.dispose()}function H(e){let{by:t}=e;return(0,o.createMemo)(function(e,t,r,n={}){if(o.isServer){let t=e(),o=[];if(t&&t.length)for(let e=0,n=t.length;e<n;e++)o.push(r(()=>t[e],()=>e));else n.fallback&&(o=[n.fallback()]);return()=>o}let i=new Map;return(0,o.onCleanup)(()=>G(i.values())),()=>{let r=e()||[];return r[o.$TRACK],(0,o.untrack)(()=>{if(!r.length)return(G(i.values()),i.clear(),n.fallback)?[(0,o.createRoot)(e=>(i.set(U,{dispose:e}),n.fallback()))]:[];let e=Array(r.length),l=i.get(U);if(!i.size||l){l?.dispose(),i.delete(U);for(let n=0;n<r.length;n++){let o=r[n],i=t(o,n);a(e,o,n,i)}return e}let s=new Set(i.keys());for(let n=0;n<r.length;n++){let o=r[n],l=t(o,n);s.delete(l);let d=i.get(l);d?(e[n]=d.mapped,d.setIndex?.(n),d.setItem(()=>o)):a(e,o,n,l)}for(let e of s)i.get(e)?.dispose(),i.delete(e);return e})};function a(e,t,n,a){(0,o.createRoot)(l=>{let[s,d]=(0,o.createSignal)(t),c={setItem:d,dispose:l};if(r.length>1){let[e,t]=(0,o.createSignal)(n);c.setIndex=t,c.mapped=r(s,e)}else c.mapped=r(s);i.set(a,c),e[n]=c.mapped})}}(()=>e.each,"function"==typeof t?t:e=>e[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function V(e,t,r){if(o.isServer)return;let n=new WeakMap,{observe:i,unobserve:c}=function(e,t){if(o.isServer)return{observe:a,unobserve:a};let r=new ResizeObserver(e);return(0,o.onCleanup)(r.disconnect.bind(r)),{observe:e=>r.observe(e,t),unobserve:r.unobserve.bind(r)}}(e=>{for(let r of e){let{contentRect:e,target:o}=r,i=Math.round(e.width),a=Math.round(e.height),l=n.get(o);l&&l.width===i&&l.height===a||(t(e,o,r),n.set(o,{width:i,height:a}))}},r);(0,o.createEffect)(t=>{let r=d(s(e)).filter(l);return!function(e,t,r,n){let o,i,a=e.length,l=t.length,s=0;if(!l){for(;s<a;s++)r(e[s]);return}if(!a){for(;s<l;s++)n(t[s]);return}for(;s<l&&t[s]===e[s];s++);for(o of(t=t.slice(s),e=e.slice(s),t))e.includes(o)||n(o);for(i of e)t.includes(i)||r(i)}(r,t,i,c),r},[])}var j=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Q(e){let t,r={};for(;t=j.exec(e);)r[t[1]]=t[2];return r}function W(e,t){if("string"==typeof e){if("string"==typeof t)return`${e};${t}`;e=Q(e)}else"string"==typeof t&&(t=Q(t));return{...e,...t}}function _(e,t){let r=[...e],n=r.indexOf(t);return -1!==n&&r.splice(n,1),r}function X(e){return"[object String]"===Object.prototype.toString.call(e)}function Z(e){return t=>`${e()}-${t}`}function Y(e,t){return!!e&&(e===t||e.contains(t))}function J(e,t=!1){let{activeElement:r}=ee(e);if(!r?.nodeName)return null;if(et(r)&&r.contentDocument)return J(r.contentDocument.body,t);if(t){let e=r.getAttribute("aria-activedescendant");if(e){let t=ee(r).getElementById(e);if(t)return t}}return r}function ee(e){return e?e.ownerDocument||e:document}function et(e){return"IFRAME"===e.tagName}var er=((r=er||{}).Escape="Escape",r.Enter="Enter",r.Tab="Tab",r.Space=" ",r.ArrowDown="ArrowDown",r.ArrowLeft="ArrowLeft",r.ArrowRight="ArrowRight",r.ArrowUp="ArrowUp",r.End="End",r.Home="Home",r.PageDown="PageDown",r.PageUp="PageUp",r);function en(e){return"u">typeof window&&null!=window.navigator&&e.test(window.navigator.userAgentData?.platform||window.navigator.platform)}function eo(){return en(/^Mac/i)}function ei(e,t){return t&&("function"==typeof t?t(e):t[0](t[1],e)),e?.defaultPrevented}function ea(e){return t=>{for(let r of e)ei(t,r)}}function el(e){if(e)if(function(){if(null==es){es=!1;try{document.createElement("div").focus({get preventScroll(){return es=!0,!0}})}catch(e){}}return es}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,r=[],n=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==n;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&r.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return n instanceof HTMLElement&&r.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),r}(e);e.focus(),function(e){for(let{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}(t)}}var es=null,ed=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],ec=[...ed,'[tabindex]:not([tabindex="-1"]):not([disabled])'],eu=ed.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",ep=ec.join(':not([hidden]):not([tabindex="-1"]),');function eg(e){return ef(e)&&!(0>parseInt(e.getAttribute("tabindex")||"0",10))}function ef(e){return e.matches(eu)&&eh(e)}function eh(e,t){var r,n;return"#comment"!==e.nodeName&&function(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:r}=e.style,n="none"!==t&&"hidden"!==r&&"collapse"!==r;if(n){if(!e.ownerDocument.defaultView)return n;let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:r,visibility:o}=t(e);n="none"!==r&&"hidden"!==o&&"collapse"!==o}return n}(e)&&(r=e,n=t,!r.hasAttribute("hidden")&&("DETAILS"!==r.nodeName||!n||"SUMMARY"===n.nodeName||r.hasAttribute("open")))&&(!e.parentElement||eh(e.parentElement,e))}function em(e){var t;let r;for(;e&&(t=e,r=window.getComputedStyle(t),!/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY));)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function ey(){}function eb(e,t){return(0,o.mergeProps)(e,t)}var ev=new Map,ew=new Set;function ex(){if("u"<typeof window)return;let e=t=>{if(!t.target)return;let r=ev.get(t.target);if(r&&(r.delete(t.propertyName),0===r.size&&(t.target.removeEventListener("transitioncancel",e),ev.delete(t.target)),0===ev.size)){for(let e of ew)e();ew.clear()}};document.body.addEventListener("transitionrun",t=>{if(!t.target)return;let r=ev.get(t.target);r||(r=new Set,ev.set(t.target,r),t.target.addEventListener("transitioncancel",e)),r.add(t.propertyName)}),document.body.addEventListener("transitionend",e)}function eC(e,t){let r=ek(e,t,"left"),n=ek(e,t,"top"),o=t.offsetWidth,i=t.offsetHeight,a=e.scrollLeft,l=e.scrollTop,s=a+e.offsetWidth,d=l+e.offsetHeight;r<=a?a=r:r+o>s&&(a+=r+o-s),n<=l?l=n:n+i>d&&(l+=n+i-d),e.scrollLeft=a,e.scrollTop=l}function ek(e,t,r){let n="left"===r?"offsetLeft":"offsetTop",o=0;for(;t.offsetParent&&(o+=t[n],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[n];break}t=t.offsetParent}return o}"u">typeof document&&("loading"!==document.readyState?ex():document.addEventListener("DOMContentLoaded",ex));var eS={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function e$(e){return t=>(e(t),()=>e(void 0))}function eE(e,t){let[r,n]=(0,o.createSignal)(eM(t?.()));return(0,o.createEffect)(()=>{n(e()?.tagName.toLowerCase()||eM(t?.()))}),r}function eM(e){return X(e)?e:void 0}function eq(e){let[t,r]=(0,o.splitProps)(e,["as"]);if(!t.as)throw Error("[kobalte]: Polymorphic is missing the required `as` prop.");return(0,o.createComponent)(o.Dynamic,(0,o.mergeProps)(r,{get component(){return t.as}}))}var eA=["id","name","validationState","required","disabled","readOnly"],eF=(0,o.createContext)();function eP(){let e=(0,o.useContext)(eF);if(void 0===e)throw Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function eL(e){let t=eP(),r=eb({id:t.generateId("description")},e);return(0,o.createEffect)(()=>(0,o.onCleanup)(t.registerDescription(r.id))),(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div"},()=>t.dataset(),r))}function eT(e){let t=eP(),r=eb({id:t.generateId("error-message")},e),[n,i]=(0,o.splitProps)(r,["forceMount"]);return(0,o.createEffect)(()=>{"invalid"===t.validationState()&&(0,o.onCleanup)(t.registerErrorMessage(i.id))}),(0,o.createComponent)(o.Show,{get when(){return n.forceMount||"invalid"===t.validationState()},get children(){return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div"},()=>t.dataset(),i))}})}function eD(e){let t,r=eP(),n=eb({id:r.generateId("label")},e),[i,a]=(0,o.splitProps)(n,["ref"]),l=eE(()=>t,()=>"label");return(0,o.createEffect)(()=>(0,o.onCleanup)(r.registerLabel(a.id))),(0,o.createComponent)(eq,(0,o.mergeProps)({as:"label",ref(e){let r=R(e=>t=e,i.ref);"function"==typeof r&&r(e)},get for(){return(0,o.memo)(()=>"label"===l())()?r.fieldId():void 0}},()=>r.dataset(),a))}function ez(e){let[t,r]=(0,o.createSignal)(e.defaultValue?.()),n=(0,o.createMemo)(()=>e.value?.()!==void 0),i=(0,o.createMemo)(()=>n()?e.value?.():t());return[i,t=>{(0,o.untrack)(()=>{let o=function(e,...t){return"function"==typeof e?e(...t):e}(t,i());return Object.is(o,i())||(n()||r(o),e.onChange?.(o)),o})}]}function eI(e){let[t,r]=ez(e);return[()=>t()??!1,r]}var eO=Object.defineProperty,eR=(e,t)=>{for(var r in t)eO(e,r,{get:t[r],enumerable:!0})},eK=(0,o.createContext)();function eN(){return(0,o.useContext)(eK)}function eB(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function eU(e,t){let r,n,o=(r=e.map((e,t)=>[t,e]),n=!1,(r.sort(([e,t],[r,o])=>{let i=t.ref(),a=o.ref();return i!==a&&i&&a?eB(i,a)?(e>r&&(n=!0),-1):(e<r&&(n=!0),1):0}),n)?r.map(([e,t])=>t):e);e!==o&&t(o)}var eG=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),eH=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function eV(){let e="u">typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:!function(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize().script??"";return eG.has(t)}let t=e.split("-")[0];return eH.has(t)}(e)?"ltr":"rtl"}}var ej=eV(),eQ=new Set;function eW(){for(let e of(ej=eV(),eQ))e(ej)}var e_=(0,o.createContext)();function eX(){let e=function(){let e={locale:"en-US",direction:"ltr"},[t,r]=(0,o.createSignal)(ej),n=(0,o.createMemo)(()=>o.isServer?e:t());return(0,o.onMount)(()=>{0===eQ.size&&window.addEventListener("languagechange",eW),eQ.add(r),(0,o.onCleanup)(()=>{eQ.delete(r),0===eQ.size&&window.removeEventListener("languagechange",eW)})}),{locale:()=>n().locale,direction:()=>n().direction}}();return(0,o.useContext)(e_)||e}var eZ=new Map,eY=class e extends Set{anchorKey;currentKey;constructor(t,r,n){super(t),t instanceof e?(this.anchorKey=r||t.anchorKey,this.currentKey=n||t.currentKey):(this.anchorKey=r,this.currentKey=n)}};function eJ(e){return eo()||en(/^iPhone/i)||en(/^iPad/i)||eo()&&navigator.maxTouchPoints>1?e.altKey:e.ctrlKey}function e0(e){return eo()?e.metaKey:e.ctrlKey}function e1(e,t){let r=()=>s(e.key),n=()=>s(e.shouldUseVirtualFocus),i=t=>{"none"!==s(e.selectionManager).selectionMode()&&("single"===s(e.selectionManager).selectionMode()?s(e.selectionManager).isSelected(r())&&!s(e.selectionManager).disallowEmptySelection()?s(e.selectionManager).toggleSelection(r()):s(e.selectionManager).replaceSelection(r()):t?.shiftKey?s(e.selectionManager).extendSelection(r()):"toggle"===s(e.selectionManager).selectionBehavior()||e0(t)||"pointerType"in t&&"touch"===t.pointerType?s(e.selectionManager).toggleSelection(r()):s(e.selectionManager).replaceSelection(r()))},a=()=>s(e.disabled)||s(e.selectionManager).isDisabled(r()),l=()=>!a()&&s(e.selectionManager).canSelectItem(r()),d=null,c=(0,o.createMemo)(()=>{if(!(n()||a()))return r()===s(e.selectionManager).focusedKey()?0:-1}),u=(0,o.createMemo)(()=>s(e.virtualized)?void 0:r());return(0,o.createEffect)((0,o.on)([t,r,n,()=>s(e.selectionManager).focusedKey(),()=>s(e.selectionManager).isFocused()],([t,r,n,o,i])=>{t&&r===o&&i&&!n&&document.activeElement!==t&&(e.focus?e.focus():el(t))})),{isSelected:()=>s(e.selectionManager).isSelected(r()),isDisabled:a,allowsSelection:l,tabIndex:c,dataKey:u,onPointerDown:t=>{l()&&(d=t.pointerType,"mouse"!==t.pointerType||0!==t.button||s(e.shouldSelectOnPressUp)||i(t))},onPointerUp:t=>{l()&&"mouse"===t.pointerType&&0===t.button&&s(e.shouldSelectOnPressUp)&&s(e.allowsDifferentPressOrigin)&&i(t)},onClick:t=>{l()&&(s(e.shouldSelectOnPressUp)&&!s(e.allowsDifferentPressOrigin)||"mouse"!==d)&&i(t)},onKeyDown:t=>{l()&&["Enter"," "].includes(t.key)&&(eJ(t)?s(e.selectionManager).toggleSelection(r()):i(t))},onMouseDown:e=>{a()&&e.preventDefault()},onFocus:o=>{let i=t();!(n()||a())&&i&&o.target===i&&s(e.selectionManager).setFocusedKey(r())}}}var e2=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(null==e||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if("none"===this.state.selectionMode())return!1;let t=this.getKey(e);return null!=t&&this.state.selectedKeys().has(t)}isEmpty(){return 0===this.state.selectedKeys().size}isSelectAll(){if(this.isEmpty())return!1;let e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(let t of this.state.selectedKeys()){let r=this.collection().getItem(t),n=r?.index!=null&&e?.index!=null&&r.index<e.index;(!e||n)&&(e=r)}return e?.key}lastSelectedKey(){let e;for(let t of this.state.selectedKeys()){let r=this.collection().getItem(t),n=r?.index!=null&&e?.index!=null&&r.index>e.index;(!e||n)&&(e=r)}return e?.key}extendSelection(e){if("none"===this.selectionMode())return;if("single"===this.selectionMode())return void this.replaceSelection(e);let t=this.getKey(e);if(null==t)return;let r=this.state.selectedKeys(),n=r.anchorKey||t,o=new eY(r,n,t);for(let e of this.getKeyRange(n,r.currentKey||t))o.delete(e);for(let e of this.getKeyRange(t,n))this.canSelectItem(e)&&o.add(e);this.state.setSelectedKeys(o)}getKeyRange(e,t){let r=this.collection().getItem(e),n=this.collection().getItem(t);return r&&n?null!=r.index&&null!=n.index&&r.index<=n.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let r=[],n=e;for(;null!=n;){let e=this.collection().getItem(n);if(e&&"item"===e.type&&r.push(n),n===t)return r;n=this.collection().getKeyAfter(n)}return[]}getKey(e){let t=this.collection().getItem(e);return t?t&&"item"===t.type?t.key:null:e}toggleSelection(e){if("none"===this.selectionMode())return;if("single"===this.selectionMode()&&!this.isSelected(e))return void this.replaceSelection(e);let t=this.getKey(e);if(null==t)return;let r=new eY(this.state.selectedKeys());r.has(t)?r.delete(t):this.canSelectItem(t)&&(r.add(t),r.anchorKey=t,r.currentKey=t),this.disallowEmptySelection()&&0===r.size||this.state.setSelectedKeys(r)}replaceSelection(e){if("none"===this.selectionMode())return;let t=this.getKey(e);if(null==t)return;let r=this.canSelectItem(t)?new eY([t],t,t):new eY;this.state.setSelectedKeys(r)}setSelectedKeys(e){if("none"===this.selectionMode())return;let t=new eY;for(let r of e){let e=this.getKey(r);if(null!=e&&(t.add(e),"single"===this.selectionMode()))break}this.state.setSelectedKeys(t)}selectAll(){"multiple"===this.selectionMode()&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){let e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new eY)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){"none"!==this.selectionMode()&&("single"===this.selectionMode()?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):"toggle"===this.selectionBehavior()||t&&"touch"===t.pointerType?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;let t=this.selectedKeys();if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;for(let r of t)if(!e.has(r))return!1;return!0}canSelectItem(e){if("none"===this.state.selectionMode())return!1;let t=this.collection().getItem(e);return null!=t&&!t.disabled}isDisabled(e){let t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){let e=[];return(t=>{for(;null!=t;){if(this.canSelectItem(t)){let r=this.collection().getItem(t);if(!r)continue;"item"===r.type&&e.push(t)}t=this.collection().getKeyAfter(t)}})(this.collection().getFirstKey()),e}},e5=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){let t;for(const t of(this.iterable=e,e))this.keyMap.set(t.key,t);if(0===this.keyMap.size)return;let r=0;for(const[e,n]of this.keyMap)t?(t.nextKey=e,n.prevKey=t.key):(this.firstKey=e,n.prevKey=void 0),"item"===n.type&&(n.index=r++),(t=n).nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}},e3=e=>"function"==typeof e?e():e,e4=e=>{let t=(0,o.createMemo)(()=>{let t=e3(e.element);if(t)return getComputedStyle(t)}),r=()=>t()?.animationName??"none",[n,i]=(0,o.createSignal)(e3(e.show)?"present":"hidden"),a="none";return(0,o.createEffect)(n=>{let l=e3(e.show);return(0,o.untrack)(()=>{if(n===l)return l;let e=a,o=r();l?i("present"):"none"===o||t()?.display==="none"?i("hidden"):!0===n&&e!==o?i("hiding"):i("hidden")}),l}),(0,o.createEffect)(()=>{let t=e3(e.element);if(!t)return;let l=e=>{e.target===t&&(a=r())},s=e=>{let o=r().includes(e.animationName);e.target===t&&o&&"hiding"===n()&&i("hidden")};t.addEventListener("animationstart",l),t.addEventListener("animationcancel",s),t.addEventListener("animationend",s),(0,o.onCleanup)(()=>{t.removeEventListener("animationstart",l),t.removeEventListener("animationcancel",s),t.removeEventListener("animationend",s)})}),{present:()=>"present"===n()||"hiding"===n(),state:n}},e6="data-kb-top-layer",e9=!1,e8=[];function e7(e){return e8.findIndex(t=>t.node===e)}function te(){return e8.filter(e=>e.isPointerBlocking)}function tt(){return te().length>0}function tr(e){let t=e7([...te()].slice(-1)[0]?.node);return e7(e)<t}var tn=function(e){return e8[e8.length-1].node===e},to=function(e){e8.push(e)},ti=function(e){let t=e7(e);t<0||e8.splice(t,1)},ta=function(){for(let{node:e}of e8)e.style.pointerEvents=tr(e)?"none":"auto"},tl=function(e){if(tt()&&!e9){let t=ee(e);n=document.body.style.pointerEvents,t.body.style.pointerEvents="none",e9=!0}},ts=function(e){if(tt())return;let t=ee(e);t.body.style.pointerEvents=n,0===t.body.style.length&&t.body.removeAttribute("style"),e9=!1};eR({},{Button:()=>tu,Root:()=>tc});var td=["button","color","file","image","reset","submit"];function tc(e){let t,r=eb({type:"button"},e),[n,i]=(0,o.splitProps)(r,["ref","type","disabled"]),a=eE(()=>t,()=>"button"),l=(0,o.createMemo)(()=>{var e;let t,r=a();return null!=r&&("button"===(t=(e={tagName:r,type:n.type}).tagName.toLowerCase())||"input"===t&&!!e.type&&-1!==td.indexOf(e.type))}),s=(0,o.createMemo)(()=>"input"===a()),d=(0,o.createMemo)(()=>"a"===a()&&t?.getAttribute("href")!=null);return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"button",ref(e){let r=R(e=>t=e,n.ref);"function"==typeof r&&r(e)},get type(){return l()||s()?n.type:void 0},get role(){return l()||d()?void 0:"button"},get tabIndex(){return l()||d()||n.disabled?void 0:0},get disabled(){return l()||s()?n.disabled:void 0},get"aria-disabled"(){return!(l()||s())&&!!n.disabled||void 0},get"data-disabled"(){return n.disabled?"":void 0}},i))}var tu=tc,tp=["top","right","bottom","left"],tg=Math.min,tf=Math.max,th=Math.round,tm=Math.floor,ty=e=>({x:e,y:e}),tb={left:"right",right:"left",bottom:"top",top:"bottom"},tv={start:"end",end:"start"};function tw(e,t){return"function"==typeof e?e(t):e}function tx(e){return e.split("-")[0]}function tC(e){return e.split("-")[1]}function tk(e){return"x"===e?"y":"x"}function tS(e){return"y"===e?"height":"width"}function t$(e){return["top","bottom"].includes(tx(e))?"y":"x"}function tE(e){return e.replace(/start|end/g,e=>tv[e])}function tM(e){return e.replace(/left|right|bottom|top/g,e=>tb[e])}function tq(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function tA(e){let{x:t,y:r,width:n,height:o}=e;return{width:n,height:o,top:r,left:t,right:t+n,bottom:r+o,x:t,y:r}}function tF(e,t,r){let n,{reference:o,floating:i}=e,a=t$(t),l=tk(t$(t)),s=tS(l),d=tx(t),c="y"===a,u=o.x+o.width/2-i.width/2,p=o.y+o.height/2-i.height/2,g=o[s]/2-i[s]/2;switch(d){case"top":n={x:u,y:o.y-i.height};break;case"bottom":n={x:u,y:o.y+o.height};break;case"right":n={x:o.x+o.width,y:p};break;case"left":n={x:o.x-i.width,y:p};break;default:n={x:o.x,y:o.y}}switch(tC(t)){case"start":n[l]-=g*(r&&c?-1:1);break;case"end":n[l]+=g*(r&&c?-1:1)}return n}var tP=async(e,t,r)=>{let{placement:n="bottom",strategy:o="absolute",middleware:i=[],platform:a}=r,l=i.filter(Boolean),s=await (null==a.isRTL?void 0:a.isRTL(t)),d=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:c,y:u}=tF(d,n,s),p=n,g={},f=0;for(let r=0;r<l.length;r++){let{name:i,fn:h}=l[r],{x:m,y:y,data:b,reset:v}=await h({x:c,y:u,initialPlacement:n,placement:p,strategy:o,middlewareData:g,rects:d,platform:a,elements:{reference:e,floating:t}});c=null!=m?m:c,u=null!=y?y:u,g={...g,[i]:{...g[i],...b}},v&&f<=50&&(f++,"object"==typeof v&&(v.placement&&(p=v.placement),v.rects&&(d=!0===v.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):v.rects),{x:c,y:u}=tF(d,p,s)),r=-1)}return{x:c,y:u,placement:p,strategy:o,middlewareData:g}};async function tL(e,t){var r;void 0===t&&(t={});let{x:n,y:o,platform:i,rects:a,elements:l,strategy:s}=e,{boundary:d="clippingAncestors",rootBoundary:c="viewport",elementContext:u="floating",altBoundary:p=!1,padding:g=0}=tw(t,e),f=tq(g),h=l[p?"floating"===u?"reference":"floating":u],m=tA(await i.getClippingRect({element:null==(r=await (null==i.isElement?void 0:i.isElement(h)))||r?h:h.contextElement||await (null==i.getDocumentElement?void 0:i.getDocumentElement(l.floating)),boundary:d,rootBoundary:c,strategy:s})),y="floating"===u?{x:n,y:o,width:a.floating.width,height:a.floating.height}:a.reference,b=await (null==i.getOffsetParent?void 0:i.getOffsetParent(l.floating)),v=await (null==i.isElement?void 0:i.isElement(b))&&await (null==i.getScale?void 0:i.getScale(b))||{x:1,y:1},w=tA(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:b,strategy:s}):y);return{top:(m.top-w.top+f.top)/v.y,bottom:(w.bottom-m.bottom+f.bottom)/v.y,left:(m.left-w.left+f.left)/v.x,right:(w.right-m.right+f.right)/v.x}}function tT(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function tD(e){return tp.some(t=>e[t]>=0)}async function tz(e,t){let{placement:r,platform:n,elements:o}=e,i=await (null==n.isRTL?void 0:n.isRTL(o.floating)),a=tx(r),l=tC(r),s="y"===t$(r),d=["left","top"].includes(a)?-1:1,c=i&&s?-1:1,u=tw(t,e),{mainAxis:p,crossAxis:g,alignmentAxis:f}="number"==typeof u?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&"number"==typeof f&&(g="end"===l?-1*f:f),s?{x:g*c,y:p*d}:{x:p*d,y:g*c}}function tI(e){return tK(e)?(e.nodeName||"").toLowerCase():"#document"}function tO(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function tR(e){var t;return null==(t=(tK(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function tK(e){return e instanceof Node||e instanceof tO(e).Node}function tN(e){return e instanceof Element||e instanceof tO(e).Element}function tB(e){return e instanceof HTMLElement||e instanceof tO(e).HTMLElement}function tU(e){return!("u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof tO(e).ShadowRoot)}function tG(e){let{overflow:t,overflowX:r,overflowY:n,display:o}=tW(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+r)&&!["inline","contents"].includes(o)}function tH(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch(e){return!1}})}function tV(e){let t=tj(),r=tN(e)?tW(e):e;return"none"!==r.transform||"none"!==r.perspective||!!r.containerType&&"normal"!==r.containerType||!t&&!!r.backdropFilter&&"none"!==r.backdropFilter||!t&&!!r.filter&&"none"!==r.filter||["transform","perspective","filter"].some(e=>(r.willChange||"").includes(e))||["paint","layout","strict","content"].some(e=>(r.contain||"").includes(e))}function tj(){return!("u"<typeof CSS)&&!!CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")}function tQ(e){return["html","body","#document"].includes(tI(e))}function tW(e){return tO(e).getComputedStyle(e)}function t_(e){return tN(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function tX(e){if("html"===tI(e))return e;let t=e.assignedSlot||e.parentNode||tU(e)&&e.host||tR(e);return tU(t)?t.host:t}function tZ(e,t,r){var n;void 0===t&&(t=[]),void 0===r&&(r=!0);let o=function e(t){let r=tX(t);return tQ(r)?t.ownerDocument?t.ownerDocument.body:t.body:tB(r)&&tG(r)?r:e(r)}(e),i=o===(null==(n=e.ownerDocument)?void 0:n.body),a=tO(o);return i?t.concat(a,a.visualViewport||[],tG(o)?o:[],a.frameElement&&r?tZ(a.frameElement):[]):t.concat(o,tZ(o,[],r))}function tY(e){let t=tW(e),r=parseFloat(t.width)||0,n=parseFloat(t.height)||0,o=tB(e),i=o?e.offsetWidth:r,a=o?e.offsetHeight:n,l=th(r)!==i||th(n)!==a;return l&&(r=i,n=a),{width:r,height:n,$:l}}function tJ(e){return tN(e)?e:e.contextElement}function t0(e){let t=tJ(e);if(!tB(t))return ty(1);let r=t.getBoundingClientRect(),{width:n,height:o,$:i}=tY(t),a=(i?th(r.width):r.width)/n,l=(i?th(r.height):r.height)/o;return a&&Number.isFinite(a)||(a=1),l&&Number.isFinite(l)||(l=1),{x:a,y:l}}var t1=ty(0);function t2(e){let t=tO(e);return tj()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:t1}function t5(e,t,r,n){var o;void 0===t&&(t=!1),void 0===r&&(r=!1);let i=e.getBoundingClientRect(),a=tJ(e),l=ty(1);t&&(n?tN(n)&&(l=t0(n)):l=t0(e));let s=(void 0===(o=r)&&(o=!1),n&&(!o||n===tO(a))&&o)?t2(a):ty(0),d=(i.left+s.x)/l.x,c=(i.top+s.y)/l.y,u=i.width/l.x,p=i.height/l.y;if(a){let e=tO(a),t=n&&tN(n)?tO(n):n,r=e,o=r.frameElement;for(;o&&n&&t!==r;){let e=t0(o),t=o.getBoundingClientRect(),n=tW(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;d*=e.x,c*=e.y,u*=e.x,p*=e.y,d+=i,c+=a,o=(r=tO(o)).frameElement}}return tA({width:u,height:p,x:d,y:c})}function t3(e){return t5(tR(e)).left+t_(e).scrollLeft}function t4(e,t,r){var n;let o;if("viewport"===t)o=function(e,t){let r=tO(e),n=tR(e),o=r.visualViewport,i=n.clientWidth,a=n.clientHeight,l=0,s=0;if(o){i=o.width,a=o.height;let e=tj();(!e||e&&"fixed"===t)&&(l=o.offsetLeft,s=o.offsetTop)}return{width:i,height:a,x:l,y:s}}(e,r);else if("document"===t){let t,r,i,a,l,s,d;n=tR(e),t=tR(n),r=t_(n),i=n.ownerDocument.body,a=tf(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),l=tf(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),s=-r.scrollLeft+t3(n),d=-r.scrollTop,"rtl"===tW(i).direction&&(s+=tf(t.clientWidth,i.clientWidth)-a),o={width:a,height:l,x:s,y:d}}else if(tN(t)){let e,n,i,a,l,s;n=(e=t5(t,!0,"fixed"===r)).top+t.clientTop,i=e.left+t.clientLeft,a=tB(t)?t0(t):ty(1),l=t.clientWidth*a.x,s=t.clientHeight*a.y,o={width:l,height:s,x:i*a.x,y:n*a.y}}else{let r=t2(e);o={...t,x:t.x-r.x,y:t.y-r.y}}return tA(o)}function t6(e){return"static"===tW(e).position}function t9(e,t){return tB(e)&&"fixed"!==tW(e).position?t?t(e):e.offsetParent:null}function t8(e,t){let r=tO(e);if(tH(e))return r;if(!tB(e)){let t=tX(e);for(;t&&!tQ(t);){if(tN(t)&&!t6(t))return t;t=tX(t)}return r}let n=t9(e,t);for(;n&&["table","td","th"].includes(tI(n))&&t6(n);)n=t9(n,t);return n&&tQ(n)&&t6(n)&&!tV(n)?r:n||function(e){let t=tX(e);for(;tB(t)&&!tQ(t);){if(tV(t))return t;if(tH(t))break;t=tX(t)}return null}(e)||r}var t7=async function(e){let t=this.getOffsetParent||t8,r=this.getDimensions,n=await r(e.floating);return{reference:function(e,t,r){let n=tB(t),o=tR(t),i="fixed"===r,a=t5(e,!0,i,t),l={scrollLeft:0,scrollTop:0},s=ty(0);if(n||!n&&!i)if(("body"!==tI(t)||tG(o))&&(l=t_(t)),n){let e=t5(t,!0,i,t);s.x=e.x+t.clientLeft,s.y=e.y+t.clientTop}else o&&(s.x=t3(o));return{x:a.left+l.scrollLeft-s.x,y:a.top+l.scrollTop-s.y,width:a.width,height:a.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},re={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:n,strategy:o}=e,i="fixed"===o,a=tR(n),l=!!t&&tH(t.floating);if(n===a||l&&i)return r;let s={scrollLeft:0,scrollTop:0},d=ty(1),c=ty(0),u=tB(n);if((u||!u&&!i)&&(("body"!==tI(n)||tG(a))&&(s=t_(n)),tB(n))){let e=t5(n);d=t0(n),c.x=e.x+n.clientLeft,c.y=e.y+n.clientTop}return{width:r.width*d.x,height:r.height*d.y,x:r.x*d.x-s.scrollLeft*d.x+c.x,y:r.y*d.y-s.scrollTop*d.y+c.y}},getDocumentElement:tR,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:n,strategy:o}=e,i=[..."clippingAncestors"===r?tH(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let n=tZ(e,[],!1).filter(e=>tN(e)&&"body"!==tI(e)),o=null,i="fixed"===tW(e).position,a=i?tX(e):e;for(;tN(a)&&!tQ(a);){let t=tW(a),r=tV(a);r||"fixed"!==t.position||(o=null),(i?!r&&!o:!r&&"static"===t.position&&!!o&&["absolute","fixed"].includes(o.position)||tG(a)&&!r&&function e(t,r){let n=tX(t);return!(n===r||!tN(n)||tQ(n))&&("fixed"===tW(n).position||e(n,r))}(e,a))?n=n.filter(e=>e!==a):o=t,a=tX(a)}return t.set(e,n),n}(t,this._c):[].concat(r),n],a=i[0],l=i.reduce((e,r)=>{let n=t4(t,r,o);return e.top=tf(n.top,e.top),e.right=tg(n.right,e.right),e.bottom=tg(n.bottom,e.bottom),e.left=tf(n.left,e.left),e},t4(t,a,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:t8,getElementRects:t7,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=tY(e);return{width:t,height:r}},getScale:t0,isElement:tN,isRTL:function(e){return"rtl"===tW(e).direction}},rt=(0,o.createContext)();function rr(){let e=(0,o.useContext)(rt);if(void 0===e)throw Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var rn=(0,o.template)('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),ro={top:180,right:-90,bottom:0,left:90};function ri(e){let t=rr(),r=eb({size:30},e),[n,i]=(0,o.splitProps)(r,["ref","style","size"]),a=()=>t.currentPlacement().split("-")[0],l=function(e){let[t,r]=(0,o.createSignal)();return(0,o.createEffect)(()=>{let t=e();t&&r((ee(t).defaultView||window).getComputedStyle(t))}),t}(t.contentRef);return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",ref(e){let r=R(t.setArrowRef,n.ref);"function"==typeof r&&r(e)},"aria-hidden":"true",get style(){return W({position:"absolute","font-size":`${n.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:l()?.getPropertyValue("background-color")||"none",stroke:l()?.getPropertyValue(`border-${a()}-color`)||"none","stroke-width":2*Number.parseInt(l()?.getPropertyValue(`border-${a()}-width`)||"0px")*(30/n.size)},n.style)}},i,{get children(){let e=rn(),t=e.firstChild;return(0,o.createRenderEffect)(()=>(0,o.setAttribute)(t,"transform",`rotate(${ro[a()]} 15 15) translate(0 2)`)),e}}))}function ra(e){let{x:t=0,y:r=0,width:n=0,height:o=0}=e??{};if("function"==typeof DOMRect)return new DOMRect(t,r,n,o);let i={x:t,y:r,width:n,height:o,top:r,right:t+n,bottom:r+o,left:t};return{...i,toJSON:()=>i}}function rl(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var rs={top:"bottom",right:"left",bottom:"top",left:"right"},rd=Object.assign(function(e){let t=eb({getAnchorRect:e=>e?.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[r,n]=(0,o.createSignal)(),[i,a]=(0,o.createSignal)(),[l,s]=(0,o.createSignal)(t.placement),d=()=>{var e,r;return e=t.anchorRef?.(),r=t.getAnchorRect,{contextElement:e,getBoundingClientRect:()=>{let t=r(e);return t?ra(t):e?e.getBoundingClientRect():ra()}}},{direction:c}=eX();async function u(){var e,n,o,a,l,u;let p,g,f,h,m,y=d(),b=r(),v=i();if(!y||!b)return;let w=(v?.clientHeight||0)/2,x="number"==typeof t.gutter?t.gutter+w:t.gutter??w;b.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),y.getBoundingClientRect();let C=[(void 0===(e=({placement:e})=>({mainAxis:x,crossAxis:e.split("-")[1]?void 0:t.shift,alignmentAxis:t.shift}))&&(e=0),{name:"offset",options:e,async fn(t){var r,n;let{x:o,y:i,placement:a,middlewareData:l}=t,s=await tz(t,e);return a===(null==(r=l.offset)?void 0:r.placement)&&null!=(n=l.arrow)&&n.alignmentOffset?{}:{x:o+s.x,y:i+s.y,data:{...s,placement:a}}}})];if(!1!==t.flip){let e="string"==typeof t.flip?t.flip.split(" "):void 0;if(void 0!==e&&!e.every(rl))throw Error("`flip` expects a spaced-delimited list of placements");C.push({name:"flip",options:n={padding:t.overflowPadding,fallbackPlacements:e},async fn(e){var t,r,o,i,a,l,s,d;let c,u,p,{placement:g,middlewareData:f,rects:h,initialPlacement:m,platform:y,elements:b}=e,{mainAxis:v=!0,crossAxis:w=!0,fallbackPlacements:x,fallbackStrategy:C="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:S=!0,...$}=tw(n,e);if(null!=(t=f.arrow)&&t.alignmentOffset)return{};let E=tx(g),M=t$(m),q=tx(m)===m,A=await (null==y.isRTL?void 0:y.isRTL(b.floating)),F=x||(q||!S?[tM(m)]:(c=tM(m),[tE(m),c,tE(c)])),P="none"!==k;!x&&P&&F.push(...(u=tC(m),p=function(e,t,r){let n=["left","right"],o=["right","left"];switch(e){case"top":case"bottom":if(r)return t?o:n;return t?n:o;case"left":case"right":return t?["top","bottom"]:["bottom","top"];default:return[]}}(tx(m),"start"===k,A),u&&(p=p.map(e=>e+"-"+u),S&&(p=p.concat(p.map(tE)))),p));let L=[m,...F],T=await tL(e,$),D=[],z=(null==(r=f.flip)?void 0:r.overflows)||[];if(v&&D.push(T[E]),w){let e,t,r,n,o=(l=g,s=h,void 0===(d=A)&&(d=!1),e=tC(l),r=tS(t=tk(t$(l))),n="x"===t?e===(d?"end":"start")?"right":"left":"start"===e?"bottom":"top",s.reference[r]>s.floating[r]&&(n=tM(n)),[n,tM(n)]);D.push(T[o[0]],T[o[1]])}if(z=[...z,{placement:g,overflows:D}],!D.every(e=>e<=0)){let e=((null==(o=f.flip)?void 0:o.index)||0)+1,t=L[e];if(t)return{data:{index:e,overflows:z},reset:{placement:t}};let r=null==(i=z.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:i.placement;if(!r)switch(C){case"bestFit":{let e=null==(a=z.filter(e=>{if(P){let t=t$(e.placement);return t===M||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:a[0];e&&(r=e);break}case"initialPlacement":r=m}if(g!==r)return{reset:{placement:r}}}return{}}})}(t.slide||t.overlap)&&C.push({name:"shift",options:o={mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding},async fn(e){let{x:t,y:r,placement:n}=e,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...s}=tw(o,e),d={x:t,y:r},c=await tL(e,s),u=t$(tx(n)),p=tk(u),g=d[p],f=d[u];if(i){let e="y"===p?"top":"left",t="y"===p?"bottom":"right",r=g+c[e],n=g-c[t];g=tf(r,tg(g,n))}if(a){let e="y"===u?"top":"left",t="y"===u?"bottom":"right",r=f+c[e],n=f-c[t];f=tf(r,tg(f,n))}let h=l.fn({...e,[p]:g,[u]:f});return{...h,data:{x:h.x-t,y:h.y-r}}}}),C.push({name:"size",options:a={padding:t.overflowPadding,apply({availableWidth:e,availableHeight:r,rects:n}){let o=Math.round(n.reference.width);e=Math.floor(e),r=Math.floor(r),b.style.setProperty("--kb-popper-anchor-width",`${o}px`),b.style.setProperty("--kb-popper-content-available-width",`${e}px`),b.style.setProperty("--kb-popper-content-available-height",`${r}px`),t.sameWidth&&(b.style.width=`${o}px`),t.fitViewport&&(b.style.maxWidth=`${e}px`,b.style.maxHeight=`${r}px`)}},async fn(e){let t,r,{placement:n,rects:o,platform:i,elements:l}=e,{apply:s=()=>{},...d}=tw(a,e),c=await tL(e,d),u=tx(n),p=tC(n),g="y"===t$(n),{width:f,height:h}=o.floating;"top"===u||"bottom"===u?(t=u,r=p===(await (null==i.isRTL?void 0:i.isRTL(l.floating))?"start":"end")?"left":"right"):(r=u,t="end"===p?"top":"bottom");let m=h-c.top-c.bottom,y=f-c.left-c.right,b=tg(h-c[t],m),v=tg(f-c[r],y),w=!e.middlewareData.shift,x=b,C=v;if(g?C=p||w?tg(v,y):y:x=p||w?tg(b,m):m,w&&!p){let e=tf(c.left,0),t=tf(c.right,0),r=tf(c.top,0),n=tf(c.bottom,0);g?C=f-2*(0!==e||0!==t?e+t:tf(c.left,c.right)):x=h-2*(0!==r||0!==n?r+n:tf(c.top,c.bottom))}await s({...e,availableWidth:C,availableHeight:x});let k=await i.getDimensions(l.floating);return f!==k.width||h!==k.height?{reset:{rects:!0}}:{}}}),t.hideWhenDetached&&C.push({name:"hide",options:l={padding:t.detachedPadding},async fn(e){let{rects:t}=e,{strategy:r="referenceHidden",...n}=tw(l,e);switch(r){case"referenceHidden":{let r=tT(await tL(e,{...n,elementContext:"reference"}),t.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:tD(r)}}}case"escaped":{let r=tT(await tL(e,{...n,altBoundary:!0}),t.floating);return{data:{escapedOffsets:r,escaped:tD(r)}}}default:return{}}}}),v&&C.push({name:"arrow",options:g={element:v,padding:t.arrowPadding},async fn(e){let{x:t,y:r,placement:n,rects:o,platform:i,elements:a,middlewareData:l}=e,{element:s,padding:d=0}=tw(g,e)||{};if(null==s)return{};let c=tq(d),u={x:t,y:r},p=tk(t$(n)),f=tS(p),h=await i.getDimensions(s),m="y"===p,y=m?"clientHeight":"clientWidth",b=o.reference[f]+o.reference[p]-u[p]-o.floating[f],v=u[p]-o.reference[p],w=await (null==i.getOffsetParent?void 0:i.getOffsetParent(s)),x=w?w[y]:0;x&&await (null==i.isElement?void 0:i.isElement(w))||(x=a.floating[y]||o.floating[f]);let C=x/2-h[f]/2-1,k=tg(c[m?"top":"left"],C),S=tg(c[m?"bottom":"right"],C),$=x-h[f]-S,E=x/2-h[f]/2+(b/2-v/2),M=tf(k,tg(E,$)),q=!l.arrow&&null!=tC(n)&&E!==M&&o.reference[f]/2-(E<k?k:S)-h[f]/2<0,A=q?E<k?E-k:E-$:0;return{[p]:u[p]+A,data:{[p]:M,centerOffset:E-M-A,...q&&{alignmentOffset:A}},reset:q}}});let k=await (u={placement:t.placement,strategy:"absolute",middleware:C,platform:{...re,isRTL:()=>"rtl"===c()}},f=new Map,m={...(h={platform:re,...u}).platform,_c:f},tP(y,b,{...h,platform:m}));if(s(k.placement),t.onCurrentPlacementChange?.(k.placement),!b)return;b.style.setProperty("--kb-popper-content-transform-origin",function(e,t){let[r,n]=e.split("-"),o=rs[r];return n?"left"===r||"right"===r?`${o} ${"start"===n?"top":"bottom"}`:"start"===n?`${o} ${"rtl"===t?"right":"left"}`:`${o} ${"rtl"===t?"left":"right"}`:`${o} center`}(k.placement,c()));let S=Math.round(k.x),$=Math.round(k.y);if(t.hideWhenDetached&&(p=k.middlewareData.hide?.referenceHidden?"hidden":"visible"),Object.assign(b.style,{top:"0",left:"0",transform:`translate3d(${S}px, ${$}px, 0)`,visibility:p}),v&&k.middlewareData.arrow){let{x:e,y:t}=k.middlewareData.arrow,r=k.placement.split("-")[0];Object.assign(v.style,{left:null!=e?`${e}px`:"",top:null!=t?`${t}px`:"",[r]:"100%"})}}return(0,o.createEffect)(()=>{let e=d(),t=r();if(!e||!t)return;let n=function(e,t,r,n){let o;void 0===n&&(n={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:s="function"==typeof IntersectionObserver,animationFrame:d=!1}=n,c=tJ(e),u=i||a?[...c?tZ(c):[],...tZ(t)]:[];u.forEach(e=>{i&&e.addEventListener("scroll",r,{passive:!0}),a&&e.addEventListener("resize",r)});let p=c&&s?function(e,t){let r,n=null,o=tR(e);function i(){var e;clearTimeout(r),null==(e=n)||e.disconnect(),n=null}return!function a(l,s){void 0===l&&(l=!1),void 0===s&&(s=1),i();let{left:d,top:c,width:u,height:p}=e.getBoundingClientRect();if(l||t(),!u||!p)return;let g={rootMargin:-tm(c)+"px "+-tm(o.clientWidth-(d+u))+"px "+-tm(o.clientHeight-(c+p))+"px "+-tm(d)+"px",threshold:tf(0,tg(1,s))||1},f=!0;function h(e){let t=e[0].intersectionRatio;if(t!==s){if(!f)return a();t?a(!1,t):r=setTimeout(()=>{a(!1,1e-7)},1e3)}f=!1}try{n=new IntersectionObserver(h,{...g,root:o.ownerDocument})}catch(e){n=new IntersectionObserver(h,g)}n.observe(e)}(!0),i}(c,r):null,g=-1,f=null;l&&(f=new ResizeObserver(e=>{let[n]=e;n&&n.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var e;null==(e=f)||e.observe(t)})),r()}),c&&!d&&f.observe(c),f.observe(t));let h=d?t5(e):null;return d&&function t(){let n=t5(e);h&&(n.x!==h.x||n.y!==h.y||n.width!==h.width||n.height!==h.height)&&r(),h=n,o=requestAnimationFrame(t)}(),r(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener("scroll",r),a&&e.removeEventListener("resize",r)}),null==p||p(),null==(e=f)||e.disconnect(),f=null,d&&cancelAnimationFrame(o)}}(e,t,u,{elementResize:"function"==typeof ResizeObserver});(0,o.onCleanup)(n)}),(0,o.createEffect)(()=>{let e=r(),n=t.contentRef?.();e&&n&&queueMicrotask(()=>{e.style.zIndex=getComputedStyle(n).zIndex})}),(0,o.createComponent)(rt.Provider,{value:{currentPlacement:l,contentRef:()=>t.contentRef?.(),setPositionerRef:n,setArrowRef:a},get children(){return t.children}})},{Arrow:ri,Context:rt,usePopperContext:rr,Positioner:function(e){let t=rr(),[r,n]=(0,o.splitProps)(e,["ref","style"]);return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",ref(e){let n=R(t.setPositionerRef,r.ref);"function"==typeof n&&n(e)},"data-popper-positioner":"",get style(){return W({position:"absolute",top:0,left:0,"min-width":"max-content"},r.style)}},n))}}),rc="interactOutside.pointerDownOutside",ru="interactOutside.focusOutside",rp=(0,o.createContext)();function rg(e){var t,r;let n,i,a,l,d,c,u,p,g,f,h=(0,o.useContext)(rp),[m,y]=(0,o.splitProps)(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),b=new Set([]);return t={shouldExcludeElement:e=>!!n&&(m.excludedElements?.some(t=>Y(t(),e))||[...b].some(t=>Y(t,e))),onPointerDownOutside:e=>{!n||tr(n)||(m.bypassTopMostLayerCheck||tn(n))&&(m.onPointerDownOutside?.(e),m.onInteractOutside?.(e),e.defaultPrevented||m.onDismiss?.())},onFocusOutside:e=>{m.onFocusOutside?.(e),m.onInteractOutside?.(e),e.defaultPrevented||m.onDismiss?.()}},a=ey,l=e=>t.onPointerDownOutside?.(e),d=e=>t.onFocusOutside?.(e),c=e=>t.onInteractOutside?.(e),u=e=>{let r=e.target;return!(!(r instanceof HTMLElement)||r.closest(`[${e6}]`)||!Y(ee((()=>n)()),r)||Y((()=>n)(),r))&&!t.shouldExcludeElement?.(r)},p=e=>{function t(){let t=(()=>n)(),r=e.target;if(!t||!r||!u(e))return;let o=ea([l,c]);r.addEventListener(rc,o,{once:!0});let i=new CustomEvent(rc,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:2===e.button||(eo()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey)&&0===e.button}});r.dispatchEvent(i)}"touch"===e.pointerType?(ee((()=>n)()).removeEventListener("click",t),a=t,ee((()=>n)()).addEventListener("click",t,{once:!0})):t()},g=e=>{let t=(()=>n)(),r=e.target;if(!t||!r||!u(e))return;let o=ea([d,c]);r.addEventListener(ru,o,{once:!0});let i=new CustomEvent(ru,{bubbles:!1,cancelable:!0,detail:{originalEvent:e,isContextMenu:!1}});r.dispatchEvent(i)},(0,o.createEffect)(()=>{o.isServer||s(t.isDisabled)||(i=window.setTimeout(()=>{ee((()=>n)()).addEventListener("pointerdown",p,!0)},0),ee((()=>n)()).addEventListener("focusin",g,!0),(0,o.onCleanup)(()=>{window.clearTimeout(i),ee((()=>n)()).removeEventListener("click",a),ee((()=>n)()).removeEventListener("pointerdown",p,!0),ee((()=>n)()).removeEventListener("focusin",g,!0)}))}),r={ownerDocument:()=>ee(n),onEscapeKeyDown:e=>{n&&tn(n)&&(m.onEscapeKeyDown?.(e),!e.defaultPrevented&&m.onDismiss&&(e.preventDefault(),m.onDismiss()))}},f=e=>{e.key===er.Escape&&r.onEscapeKeyDown?.(e)},(0,o.createEffect)(()=>{if(o.isServer||s(r.isDisabled))return;let e=r.ownerDocument?.()??ee();e.addEventListener("keydown",f),(0,o.onCleanup)(()=>{e.removeEventListener("keydown",f)})}),(0,o.onMount)(()=>{if(!n)return;to({node:n,isPointerBlocking:m.disableOutsidePointerEvents,dismiss:m.onDismiss});let e=h?.registerNestedLayer(n);ta(),tl(n),(0,o.onCleanup)(()=>{n&&(ti(n),e?.(),ta(),ts(n))})}),(0,o.createEffect)((0,o.on)([()=>n,()=>m.disableOutsidePointerEvents],([e,t])=>{if(!e)return;let r=e8[e7(e)];r&&r.isPointerBlocking!==t&&(r.isPointerBlocking=t,ta()),t&&tl(e),(0,o.onCleanup)(()=>{ts(e)})},{defer:!0})),(0,o.createComponent)(rp.Provider,{value:{registerNestedLayer:e=>{b.add(e);let t=h?.registerNestedLayer(e);return()=>{b.delete(e),t?.()}}},get children(){return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",ref(e){let t=R(e=>n=e,m.ref);"function"==typeof t&&t(e)}},y))}})}function rf(e={}){let[t,r]=eI({value:()=>s(e.open),defaultValue:()=>!!s(e.defaultOpen),onChange:t=>e.onOpenChange?.(t)}),n=()=>{r(!0)},o=()=>{r(!1)};return{isOpen:t,setIsOpen:r,open:n,close:o,toggle:()=>{t()?o():n()}}}var rh={};eR(rh,{Description:()=>eL,ErrorMessage:()=>eT,Item:()=>rw,ItemControl:()=>rx,ItemDescription:()=>rC,ItemIndicator:()=>rk,ItemInput:()=>rS,ItemLabel:()=>r$,Label:()=>rE,RadioGroup:()=>rq,Root:()=>rM});var rm=(0,o.createContext)();function ry(){let e=(0,o.useContext)(rm);if(void 0===e)throw Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var rb=(0,o.createContext)();function rv(){let e=(0,o.useContext)(rb);if(void 0===e)throw Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function rw(e){let t=eP(),r=ry(),n=eb({id:`${t.generateId("item")}-${(0,o.createUniqueId)()}`},e),[i,a]=(0,o.splitProps)(n,["value","disabled","onPointerDown"]),[l,s]=(0,o.createSignal)(),[d,c]=(0,o.createSignal)(),[u,p]=(0,o.createSignal)(),[g,f]=(0,o.createSignal)(),[h,m]=(0,o.createSignal)(!1),y=(0,o.createMemo)(()=>r.isSelectedValue(i.value)),b=(0,o.createMemo)(()=>i.disabled||t.isDisabled()||!1),v=e=>{ei(e,i.onPointerDown),h()&&e.preventDefault()},w=(0,o.createMemo)(()=>({...t.dataset(),"data-disabled":b()?"":void 0,"data-checked":y()?"":void 0})),x={value:()=>i.value,dataset:w,isSelected:y,isDisabled:b,inputId:l,labelId:d,descriptionId:u,inputRef:g,select:()=>r.setSelectedValue(i.value),generateId:Z(()=>a.id),registerInput:e$(s),registerLabel:e$(c),registerDescription:e$(p),setIsFocused:m,setInputRef:f};return(0,o.createComponent)(rb.Provider,{value:x,get children(){return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",role:"group",onPointerDown:v},w,a))}})}function rx(e){let t=rv(),r=eb({id:t.generateId("control")},e),[n,i]=(0,o.splitProps)(r,["onClick","onKeyDown"]);return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",onClick:e=>{ei(e,n.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:e=>{ei(e,n.onKeyDown),e.key===er.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),i))}function rC(e){let t=rv(),r=eb({id:t.generateId("description")},e);return(0,o.createEffect)(()=>(0,o.onCleanup)(t.registerDescription(r.id))),(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div"},()=>t.dataset(),r))}function rk(e){let t=rv(),r=eb({id:t.generateId("indicator")},e),[n,i]=(0,o.splitProps)(r,["ref","forceMount"]),[a,l]=(0,o.createSignal)(),{present:s}=e4({show:()=>n.forceMount||t.isSelected(),element:()=>a()??null});return(0,o.createComponent)(o.Show,{get when(){return s()},get children(){return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",ref(e){let t=R(l,n.ref);"function"==typeof t&&t(e)}},()=>t.dataset(),i))}})}function rS(e){let t=eP(),r=ry(),n=rv(),i=eb({id:n.generateId("input")},e),[a,l]=(0,o.splitProps)(i,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),[s,d]=(0,o.createSignal)(!1);return(0,o.createEffect)((0,o.on)([()=>n.isSelected(),()=>n.value()],e=>{if(!e[0]&&e[1]===n.value())return;d(!0);let t=n.inputRef();t?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),t?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),(0,o.createEffect)(()=>(0,o.onCleanup)(n.registerInput(l.id))),(0,o.createComponent)(eq,(0,o.mergeProps)({as:"input",ref(e){let t=R(n.setInputRef,a.ref);"function"==typeof t&&t(e)},type:"radio",get name(){return t.name()},get value(){return n.value()},get checked(){return n.isSelected()},get required(){return t.isRequired()},get disabled(){return n.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return W({...eS},a.style)},get"aria-labelledby"(){return[a["aria-labelledby"],n.labelId(),null!=a["aria-labelledby"]&&null!=l["aria-label"]?l.id:void 0].filter(Boolean).join(" ")||void 0},get"aria-describedby"(){return[a["aria-describedby"],n.descriptionId(),r.ariaDescribedBy()].filter(Boolean).join(" ")||void 0},onChange:e=>{ei(e,a.onChange),e.stopPropagation(),s()||(r.setSelectedValue(n.value()),e.target.checked=n.isSelected()),d(!1)},onFocus:e=>{ei(e,a.onFocus),n.setIsFocused(!0)},onBlur:e=>{ei(e,a.onBlur),n.setIsFocused(!1)}},()=>n.dataset(),l))}function r$(e){let t=rv(),r=eb({id:t.generateId("label")},e);return(0,o.createEffect)(()=>(0,o.onCleanup)(t.registerLabel(r.id))),(0,o.createComponent)(eq,(0,o.mergeProps)({as:"label",get for(){return t.inputId()}},()=>t.dataset(),r))}function rE(e){return(0,o.createComponent)(eD,(0,o.mergeProps)({as:"span"},e))}function rM(e){var t;let r,n=eb({id:`radiogroup-${(0,o.createUniqueId)()}`,orientation:"vertical"},e),[i,a,l]=(0,o.splitProps)(n,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],eA),[d,c]=ez({value:()=>i.value,defaultValue:()=>i.defaultValue,onChange:e=>i.onChange?.(e)}),{formControlContext:u}=function(e){let t=eb({id:`form-control-${(0,o.createUniqueId)()}`},e),[r,n]=(0,o.createSignal)(),[i,a]=(0,o.createSignal)(),[l,d]=(0,o.createSignal)(),[c,u]=(0,o.createSignal)();return{formControlContext:{name:()=>s(t.name)??s(t.id),dataset:(0,o.createMemo)(()=>({"data-valid":"valid"===s(t.validationState)?"":void 0,"data-invalid":"invalid"===s(t.validationState)?"":void 0,"data-required":s(t.required)?"":void 0,"data-disabled":s(t.disabled)?"":void 0,"data-readonly":s(t.readOnly)?"":void 0})),validationState:()=>s(t.validationState),isRequired:()=>s(t.required),isDisabled:()=>s(t.disabled),isReadOnly:()=>s(t.readOnly),labelId:r,fieldId:i,descriptionId:l,errorMessageId:c,getAriaLabelledBy:(e,t,n)=>{let o=null!=n||null!=r();return[n,r(),o&&null!=t?e:void 0].filter(Boolean).join(" ")||void 0},getAriaDescribedBy:e=>[l(),c(),e].filter(Boolean).join(" ")||void 0,generateId:Z(()=>s(t.id)),registerLabel:e$(n),registerField:e$(a),registerDescription:e$(d),registerErrorMessage:e$(u)}}}(a);t=()=>c(i.defaultValue??""),(0,o.createEffect)((0,o.on)(()=>r,e=>{var r;if(null==e)return;let n=(r=e).matches("textarea, input, select, button")?r.form:r.closest("form");null!=n&&(n.addEventListener("reset",t,{passive:!0}),(0,o.onCleanup)(()=>{n.removeEventListener("reset",t)}))}));let p=()=>u.getAriaDescribedBy(i["aria-describedby"]),g=e=>e===d(),f={ariaDescribedBy:p,isSelectedValue:g,setSelectedValue:e=>{if(!(u.isReadOnly()||u.isDisabled())&&(c(e),r))for(let e of r.querySelectorAll("[type='radio']"))e.checked=g(e.value)}};return(0,o.createComponent)(eF.Provider,{value:u,get children(){return(0,o.createComponent)(rm.Provider,{value:f,get children(){return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",ref(e){let t=R(e=>r=e,i.ref);"function"==typeof t&&t(e)},role:"radiogroup",get id(){return s(a.id)},get"aria-invalid"(){return"invalid"===u.validationState()||void 0},get"aria-required"(){return u.isRequired()||void 0},get"aria-disabled"(){return u.isDisabled()||void 0},get"aria-readonly"(){return u.isReadOnly()||void 0},get"aria-orientation"(){return i.orientation},get"aria-labelledby"(){return u.getAriaLabelledBy(s(a.id),l["aria-label"],i["aria-labelledby"])},get"aria-describedby"(){return p()}},()=>u.dataset(),l))}})}})}var rq=Object.assign(rM,{Description:eL,ErrorMessage:eT,Item:rw,ItemControl:rx,ItemDescription:rC,ItemIndicator:rk,ItemInput:rS,ItemLabel:r$,Label:rE}),rA=class{collection;ref;collator;constructor(e,t,r){this.collection=e,this.ref=t,this.collator=r}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;null!=t;){let e=this.collection().getItem(t);if(e&&"item"===e.type&&!e.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;null!=t;){let e=this.collection().getItem(t);if(e&&"item"===e.type&&!e.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;null!=e;){let t=this.collection().getItem(e);if(t&&"item"===t.type&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;null!=e;){let t=this.collection().getItem(e);if(t&&"item"===t.type&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){let t=this.ref?.(),r=this.getItem(e);if(!t||!r)return;let n=Math.max(0,r.offsetTop+r.offsetHeight-t.offsetHeight),o=e;for(;o&&r&&r.offsetTop>n;)r=null!=(o=this.getKeyAbove(o))?this.getItem(o):null;return o}getKeyPageBelow(e){let t=this.ref?.(),r=this.getItem(e);if(!t||!r)return;let n=Math.min(t.scrollHeight,r.offsetTop-r.offsetHeight+t.offsetHeight),o=e;for(;o&&r&&r.offsetTop<n;)r=null!=(o=this.getKeyBelow(o))?this.getItem(o):null;return o}getKeyForSearch(e,t){let r=this.collator?.();if(!r)return;let n=null!=t?this.getKeyBelow(t):this.getFirstKey();for(;null!=n;){let t=this.collection().getItem(n);if(t){let o=t.textValue.slice(0,e.length);if(t.textValue&&0===r.compare(o,e))return n}n=this.getKeyBelow(n)}}},rF="focusScope.autoFocusOnMount",rP="focusScope.autoFocusOnUnmount",rL={bubbles:!1,cancelable:!0},rT={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=_(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=_(this.stack,e),this.active()?.resume()}},rD=new WeakMap,rz=[],rI=new Map,rO=e=>{(0,o.createEffect)(()=>{let t=e3(e.style)??{},r=e3(e.properties)??[],n={};for(let r in t)n[r]=e.element.style[r];let i=rI.get(e.key);for(let t of(i?i.activeCount++:rI.set(e.key,{activeCount:1,originalStyles:n,properties:r.map(e=>e.key)}),Object.assign(e.element.style,e.style),r))e.element.style.setProperty(t.key,t.value);(0,o.onCleanup)(()=>{let t=rI.get(e.key);if(t){if(1!==t.activeCount)return void t.activeCount--;for(let[r,n]of(rI.delete(e.key),Object.entries(t.originalStyles)))e.element.style[r]=n;for(let r of t.properties)e.element.style.removeProperty(r);0===e.element.style.length&&e.element.removeAttribute("style"),e.cleanup?.()}})})},rR=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},rK=(e,t)=>{let r=getComputedStyle(e),n="x"===t?r.overflowX:r.overflowY;return"auto"===n||"scroll"===n||"HTML"===e.tagName&&"visible"===n},[rN,rB]=(0,o.createSignal)([]),rU=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],rG=(e,t,r,n)=>{let o=null!==n&&rH(n,e),[i,a]=((e,t,r)=>{let n="x"===t&&"rtl"===window.getComputedStyle(e).direction?-1:1,o=e,i=0,a=0,l=!1;do{let[e,s,d]=rR(o,t),c=d-e-n*s;(0!==s||0!==c)&&rK(o,t)&&(i+=c,a+=s),o===(r??document.documentElement)?l=!0:o=o._$host??o.parentElement}while(o&&!l)return[i,a]})(e,t,o?n:void 0);return!(r>0&&1>=Math.abs(i)||r<0&&1>Math.abs(a))},rH=(e,t)=>{if(e.contains(t))return!0;let r=t;for(;r;){if(r===e)return!0;r=r._$host??r.parentElement}return!1},rV=(0,o.createContext)();function rj(){return(0,o.useContext)(rV)}function rQ(){let e=rj();if(void 0===e)throw Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var rW=(0,o.createContext)();function r_(){let e=(0,o.useContext)(rW);if(void 0===e)throw Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var rX=(0,o.createContext)();function rZ(){let e=(0,o.useContext)(rX);if(void 0===e)throw Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function rY(e){let t,r,n,i=rZ(),a=rQ(),l=eb({id:i.generateId(`item-${(0,o.createUniqueId)()}`)},e),[s,d]=(0,o.splitProps)(l,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[c,u]=(0,o.createSignal)(),[p,g]=(0,o.createSignal)(),[f,h]=(0,o.createSignal)(),m=()=>a.listState().selectionManager(),y=()=>d.id,b=()=>{s.onSelect?.(),s.closeOnSelect&&setTimeout(()=>{a.close(!0)})};r=function(){let e=eN();if(void 0===e)throw Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}(),n=eb({shouldRegisterItem:!0},{getItem:()=>({ref:()=>t,type:"item",key:y(),textValue:s.textValue??f()?.textContent??t?.textContent??"",disabled:s.disabled??!1})}),(0,o.createEffect)(()=>{if(!n.shouldRegisterItem)return;let e=r.registerItem(n.getItem());(0,o.onCleanup)(e)});let v=e1({key:y,selectionManager:m,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},()=>t),w=e=>{ei(e,s.onPointerMove),"mouse"===e.pointerType&&(s.disabled?a.onItemLeave(e):(a.onItemEnter(e),e.defaultPrevented||(el(e.currentTarget),a.listState().selectionManager().setFocused(!0),a.listState().selectionManager().setFocusedKey(y()))))},x=e=>{ei(e,s.onPointerLeave),"mouse"===e.pointerType&&a.onItemLeave(e)},C=e=>{ei(e,s.onPointerUp),s.disabled||0!==e.button||b()},k=e=>{if((ei(e,s.onKeyDown),!e.repeat)&&!s.disabled)switch(e.key){case"Enter":case" ":b()}},S=(0,o.createMemo)(()=>s.indeterminate?"mixed":null!=s.checked?s.checked:void 0),$=(0,o.createMemo)(()=>({"data-indeterminate":s.indeterminate?"":void 0,"data-checked":s.checked&&!s.indeterminate?"":void 0,"data-disabled":s.disabled?"":void 0,"data-highlighted":m().focusedKey()===y()?"":void 0})),E={isChecked:()=>s.checked,dataset:$,setLabelRef:h,generateId:Z(()=>d.id),registerLabel:e$(u),registerDescription:e$(g)};return(0,o.createComponent)(rW.Provider,{value:E,get children(){return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",ref(e){let r=R(e=>t=e,s.ref);"function"==typeof r&&r(e)},get tabIndex(){return v.tabIndex()},get"aria-checked"(){return S()},get"aria-disabled"(){return s.disabled},get"aria-labelledby"(){return c()},get"aria-describedby"(){return p()},get"data-key"(){return v.dataKey()},get onPointerDown(){return ea([s.onPointerDown,v.onPointerDown])},get onPointerUp(){return ea([C,v.onPointerUp])},get onClick(){return ea([s.onClick,v.onClick])},get onKeyDown(){return ea([k,v.onKeyDown])},get onMouseDown(){return ea([s.onMouseDown,v.onMouseDown])},get onFocus(){return ea([s.onFocus,v.onFocus])},onPointerMove:w,onPointerLeave:x},$,d))}})}function rJ(e){let t=eb({closeOnSelect:!1},e),[r,n]=(0,o.splitProps)(t,["checked","defaultChecked","onChange","onSelect"]),i=function(e={}){let[t,r]=eI({value:()=>s(e.isSelected),defaultValue:()=>!!s(e.defaultIsSelected),onChange:t=>e.onSelectedChange?.(t)});return{isSelected:t,setIsSelected:t=>{s(e.isReadOnly)||s(e.isDisabled)||r(t)},toggle:()=>{s(e.isReadOnly)||s(e.isDisabled)||r(!t())}}}({isSelected:()=>r.checked,defaultIsSelected:()=>r.defaultChecked,onSelectedChange:e=>r.onChange?.(e),isDisabled:()=>n.disabled});return(0,o.createComponent)(rY,(0,o.mergeProps)({role:"menuitemcheckbox",get checked(){return i.isSelected()},onSelect:()=>{r.onSelect?.(),i.toggle()}},n))}var r0=(0,o.createContext)();function r1(){return(0,o.useContext)(r0)}var r2={next:(e,t)=>"ltr"===e?"horizontal"===t?"ArrowRight":"ArrowDown":"horizontal"===t?"ArrowLeft":"ArrowUp",previous:(e,t)=>r2.next("ltr"===e?"rtl":"ltr",t)};function r5(e){let t=rZ(),r=rQ(),n=r1(),{direction:i}=eX(),a=eb({id:t.generateId("trigger")},e),[l,s]=(0,o.splitProps)(a,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]),d=()=>t.value();void 0!==n&&(d=()=>t.value()??l.id,void 0===n.lastValue()&&n.setLastValue(d));let c=eE(()=>r.triggerRef(),()=>"button"),u=(0,o.createMemo)(()=>"a"===c()&&r.triggerRef()?.getAttribute("href")!=null);(0,o.createEffect)((0,o.on)(()=>n?.value(),e=>{u()&&e===d()&&r.triggerRef()?.focus()}));let p=()=>{void 0!==n?r.isOpen()?n.value()===d()&&n.closeMenu():(n.autoFocusMenu()||n.setAutoFocusMenu(!0),r.open(!1)):r.toggle(!0)};return(0,o.createEffect)(()=>(0,o.onCleanup)(r.registerTriggerId(l.id))),(0,o.createComponent)(tc,(0,o.mergeProps)({ref(e){let t=R(r.setTriggerRef,l.ref);"function"==typeof t&&t(e)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return l.id},get disabled(){return l.disabled},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return(0,o.memo)(()=>!!r.isOpen())()?r.contentId():void 0},get"data-highlighted"(){return void 0!==d()&&n?.value()===d()||void 0},get tabIndex(){return void 0!==n?n.value()===d()||n.lastValue()===d()?0:-1:void 0},onPointerDown:e=>{ei(e,l.onPointerDown),e.currentTarget.dataset.pointerType=e.pointerType,l.disabled||"touch"===e.pointerType||0!==e.button||p()},onMouseOver:e=>{ei(e,l.onMouseOver),r.triggerRef()?.dataset.pointerType!=="touch"&&(l.disabled||void 0===n||void 0===n.value()||n.setValue(d))},onClick:e=>{ei(e,l.onClick),l.disabled||"touch"!==e.currentTarget.dataset.pointerType||p()},onKeyDown:e=>{if(ei(e,l.onKeyDown),!l.disabled){if(u())switch(e.key){case"Enter":case" ":return}switch(e.key){case"Enter":case" ":case"horizontal"===t.orientation()?"ArrowDown":"ArrowRight":e.stopPropagation(),e.preventDefault(),function(e){if(document.contains(e)){let t=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(t).overflow){let r=em(e);for(;e&&r&&e!==t&&r!==t;)eC(r,e),r=em(e=r)}else{let{left:t,top:r}=e.getBoundingClientRect();e?.scrollIntoView?.({block:"nearest"});let{left:n,top:o}=e.getBoundingClientRect();(Math.abs(t-n)>1||Math.abs(r-o)>1)&&e.scrollIntoView?.({block:"nearest"})}}}(e.currentTarget),r.open("first"),n?.setAutoFocusMenu(!0),n?.setValue(d);break;case"horizontal"===t.orientation()?"ArrowUp":"ArrowLeft":e.stopPropagation(),e.preventDefault(),r.open("last");break;case r2.next(i(),t.orientation()):if(void 0===n)break;e.stopPropagation(),e.preventDefault(),n.nextMenu();break;case r2.previous(i(),t.orientation()):if(void 0===n)break;e.stopPropagation(),e.preventDefault(),n.previousMenu()}}},onFocus:e=>{ei(e,l.onFocus),void 0!==n&&"touch"!==e.currentTarget.dataset.pointerType&&n.setValue(d)},role:void 0!==n?"menuitem":void 0},()=>r.dataset(),s))}var r3=(0,o.createContext)();function r4(){return(0,o.useContext)(r3)}function r6(e){var t,r;let n,i,a=rZ(),l=rQ(),u=r1(),p=r4(),{direction:g}=eX(),f=eb({id:a.generateId(`content-${(0,o.createUniqueId)()}`)},e),[h,m]=(0,o.splitProps)(f,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]),y=0,b=()=>null==l.parentMenuContext()&&void 0===u&&a.isModal(),v=(t={selectionManager:l.listState().selectionManager,collection:l.listState().collection,autoFocus:l.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!l.listState().selectionManager().isFocused(),orientation:()=>"horizontal"===a.orientation()?"vertical":"horizontal"},r=()=>n,i=function(e){let{locale:t}=eX(),r=(0,o.createMemo)(()=>t()+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():""));return(0,o.createMemo)(()=>{let n,o=r();return eZ.has(o)&&(n=eZ.get(o)),n||(n=new Intl.Collator(t(),e),eZ.set(o,n)),n})}({usage:"search",sensitivity:"base"}),function(e,t){let r=(0,o.mergeProps)({selectOnFocus:()=>"replace"===s(e.selectionManager).selectionBehavior()},e),n=()=>t(),{direction:i}=eX(),a={top:0,left:0};!function(e,t,r){if(o.isServer)return;let n=()=>{d(s(e)).forEach(e=>{e&&d(s(t)).forEach(t=>{var n;return n=void 0,e.addEventListener(t,r,n),c(e.removeEventListener.bind(e,t,r,n))})})};"function"==typeof e?(0,o.createEffect)(n):(0,o.createRenderEffect)(n)}(()=>s(r.isVirtualized)?void 0:n(),"scroll",()=>{let e=n();e&&(a={top:e.scrollTop,left:e.scrollLeft})});let{typeSelectHandlers:l}=function(e){let[t,r]=(0,o.createSignal)(""),[n,i]=(0,o.createSignal)(-1);return{typeSelectHandlers:{onKeyDown:o=>{var a,l;if(s(e.isDisabled))return;let d=s(e.keyboardDelegate),c=s(e.selectionManager);if(!d.getKeyForSearch)return;let u=1!==(a=o.key).length&&/^[A-Z]/i.test(a)?"":a;if(!u||o.ctrlKey||o.metaKey)return;" "===u&&t().trim().length>0&&(o.preventDefault(),o.stopPropagation());let p=r(e=>e+u),g=d.getKeyForSearch(p,c.focusedKey())??d.getKeyForSearch(p);null==g&&(l=p).split("").every(e=>e===l[0])&&(p=p[0],g=d.getKeyForSearch(p,c.focusedKey())??d.getKeyForSearch(p)),null!=g&&(c.setFocusedKey(g),e.onTypeSelect?.(g)),clearTimeout(n()),i(window.setTimeout(()=>r(""),500))}}}}({isDisabled:()=>s(r.disallowTypeAhead),keyboardDelegate:()=>s(r.keyboardDelegate),selectionManager:()=>s(r.selectionManager)}),u=()=>s(r.orientation)??"vertical",p=()=>{let e,n=s(r.autoFocus);if(!n)return;let o=s(r.selectionManager),i=s(r.keyboardDelegate);"first"===n&&(e=i.getFirstKey?.()),"last"===n&&(e=i.getLastKey?.());let a=o.selectedKeys();a.size&&(e=a.values().next().value),o.setFocused(!0),o.setFocusedKey(e);let l=t();l&&null==e&&!s(r.shouldUseVirtualFocus)&&el(l)};return(0,o.onMount)(()=>{r.deferAutoFocus?setTimeout(p,0):p()}),(0,o.createEffect)((0,o.on)([n,()=>s(r.isVirtualized),()=>s(r.selectionManager).focusedKey()],e=>{let[t,n,o]=e;if(n)o&&r.scrollToKey?.(o);else if(o&&t){let e=t.querySelector(`[data-key="${o}"]`);e&&eC(t,e)}})),{tabIndex:(0,o.createMemo)(()=>{if(!s(r.shouldUseVirtualFocus))return null==s(r.selectionManager).focusedKey()?0:-1}),onKeyDown:e=>{ei(e,l.onKeyDown),e.altKey&&"Tab"===e.key&&e.preventDefault();let n=t();if(!n?.contains(e.target))return;let o=s(r.selectionManager),a=s(r.selectOnFocus),d=t=>{null!=t&&(o.setFocusedKey(t),e.shiftKey&&"multiple"===o.selectionMode()?o.extendSelection(t):a&&!eJ(e)&&o.replaceSelection(t))},c=s(r.keyboardDelegate),p=s(r.shouldFocusWrap),g=o.focusedKey();switch(e.key){case"vertical"===u()?"ArrowDown":"ArrowRight":if(c.getKeyBelow){let t;e.preventDefault(),null==(t=null!=g?c.getKeyBelow(g):c.getFirstKey?.())&&p&&(t=c.getFirstKey?.(g)),d(t)}break;case"vertical"===u()?"ArrowUp":"ArrowLeft":if(c.getKeyAbove){let t;e.preventDefault(),null==(t=null!=g?c.getKeyAbove(g):c.getLastKey?.())&&p&&(t=c.getLastKey?.(g)),d(t)}break;case"vertical"===u()?"ArrowLeft":"ArrowUp":if(c.getKeyLeftOf){e.preventDefault();let t="rtl"===i();d(null!=g?c.getKeyLeftOf(g):t?c.getFirstKey?.():c.getLastKey?.())}break;case"vertical"===u()?"ArrowRight":"ArrowDown":if(c.getKeyRightOf){e.preventDefault();let t="rtl"===i();d(null!=g?c.getKeyRightOf(g):t?c.getLastKey?.():c.getFirstKey?.())}break;case"Home":if(c.getFirstKey){e.preventDefault();let t=c.getFirstKey(g,e0(e));null!=t&&(o.setFocusedKey(t),e0(e)&&e.shiftKey&&"multiple"===o.selectionMode()?o.extendSelection(t):a&&o.replaceSelection(t))}break;case"End":if(c.getLastKey){e.preventDefault();let t=c.getLastKey(g,e0(e));null!=t&&(o.setFocusedKey(t),e0(e)&&e.shiftKey&&"multiple"===o.selectionMode()?o.extendSelection(t):a&&o.replaceSelection(t))}break;case"PageDown":c.getKeyPageBelow&&null!=g&&(e.preventDefault(),d(c.getKeyPageBelow(g)));break;case"PageUp":c.getKeyPageAbove&&null!=g&&(e.preventDefault(),d(c.getKeyPageAbove(g)));break;case"a":e0(e)&&"multiple"===o.selectionMode()&&!0!==s(r.disallowSelectAll)&&(e.preventDefault(),o.selectAll());break;case"Escape":!e.defaultPrevented&&(e.preventDefault(),s(r.disallowEmptySelection)||o.clearSelection());break;case"Tab":if(!s(r.allowsTabNavigation))if(e.shiftKey)n.focus();else{var f;let e,t,r,o,i=(f={tabbable:!0},r=f?.tabbable?ep:eu,o=document.createTreeWalker(n,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>f?.from?.contains(e)?NodeFilter.FILTER_REJECT:e.matches(r)&&eh(e)&&(!f?.accept||f.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}),f?.from&&(o.currentNode=f.from),o);do(t=i.lastChild())&&(e=t);while(t)e&&!e.contains(document.activeElement)&&el(e)}}},onMouseDown:e=>{n()===e.target&&e.preventDefault()},onFocusIn:e=>{let t=s(r.selectionManager),o=s(r.keyboardDelegate),i=s(r.selectOnFocus);if(t.isFocused()){e.currentTarget.contains(e.target)||t.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(t.setFocused(!0),null==t.focusedKey()){let r=e=>{null!=e&&(t.setFocusedKey(e),i&&t.replaceSelection(e))},n=e.relatedTarget;n&&e.currentTarget.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING?r(t.lastSelectedKey()??o.getLastKey?.()):r(t.firstSelectedKey()??o.getFirstKey?.())}else if(!s(r.isVirtualized)){let e=n();if(e){e.scrollTop=a.top,e.scrollLeft=a.left;let r=e.querySelector(`[data-key="${t.focusedKey()}"]`);r&&(el(r),eC(e,r))}}}},onFocusOut:e=>{let t=s(r.selectionManager);e.currentTarget.contains(e.relatedTarget)||t.setFocused(!1)}}}({selectionManager:()=>s(t.selectionManager),keyboardDelegate:(0,o.createMemo)(()=>{let e=s(t.keyboardDelegate);return e||new rA(t.collection,r,i)}),autoFocus:()=>s(t.autoFocus),deferAutoFocus:()=>s(t.deferAutoFocus),shouldFocusWrap:()=>s(t.shouldFocusWrap),disallowEmptySelection:()=>s(t.disallowEmptySelection),selectOnFocus:()=>s(t.selectOnFocus),disallowTypeAhead:()=>s(t.disallowTypeAhead),shouldUseVirtualFocus:()=>s(t.shouldUseVirtualFocus),allowsTabNavigation:()=>s(t.allowsTabNavigation),isVirtualized:()=>s(t.isVirtualized),scrollToKey:e=>s(t.scrollToKey)?.(e),orientation:()=>s(t.orientation)},r));!function(e,t){let[r,n]=(0,o.createSignal)(!1),i={pause(){n(!0)},resume(){n(!1)}},a=null,l=t=>e.onMountAutoFocus?.(t),d=t=>e.onUnmountAutoFocus?.(t),c=()=>{let e=ee(t()).createElement("span");return e.setAttribute("data-focus-trap",""),e.tabIndex=0,Object.assign(e.style,eS),e},u=()=>{let e=t();return e?(function e(t,r){let n=Array.from(t.querySelectorAll(eu)).filter(eg);return r&&eg(t)&&n.unshift(t),n.forEach((t,r)=>{if(et(t)&&t.contentDocument){let o=e(t.contentDocument.body,!1);n.splice(r,1,...o)}}),n})(e,!0).filter(e=>!e.hasAttribute("data-focus-trap")):[]},p=()=>{let e=u();return e.length>0?e[0]:null};(0,o.createEffect)(()=>{if(o.isServer)return;let e=t();if(!e)return;rT.add(i);let r=J(e);if(!Y(e,r)){let t=new CustomEvent(rF,rL);e.addEventListener(rF,l),e.dispatchEvent(t),t.defaultPrevented||setTimeout(()=>{el(p()),J(e)===r&&el(e)},0)}(0,o.onCleanup)(()=>{e.removeEventListener(rF,l),setTimeout(()=>{let n=new CustomEvent(rP,rL);(()=>{let e=t();if(!e)return!1;let r=J(e);return!(!r||Y(e,r))&&ef(r)})()&&n.preventDefault(),e.addEventListener(rP,d),e.dispatchEvent(n),n.defaultPrevented||el(r??ee(t()).body),e.removeEventListener(rP,d),rT.remove(i)},0)})}),(0,o.createEffect)(()=>{if(o.isServer)return;let n=t();if(!n||!s(e.trapFocus)||r())return;let i=e=>{let t=e.target;t?.closest(`[${e6}]`)||(Y(n,t)?a=t:el(a))},l=e=>{let t=e.relatedTarget??J(n);!t?.closest(`[${e6}]`)&&(Y(n,t)||el(a))};ee(t()).addEventListener("focusin",i),ee(t()).addEventListener("focusout",l),(0,o.onCleanup)(()=>{ee(t()).removeEventListener("focusin",i),ee(t()).removeEventListener("focusout",l)})}),(0,o.createEffect)(()=>{if(o.isServer)return;let n=t();if(!n||!s(e.trapFocus)||r())return;let i=c();n.insertAdjacentElement("afterbegin",i);let a=c();function l(e){let t,r=p(),n=(t=u()).length>0?t[t.length-1]:null;e.relatedTarget===r?el(n):el(r)}n.insertAdjacentElement("beforeend",a),i.addEventListener("focusin",l),a.addEventListener("focusin",l);let d=new MutationObserver(e=>{for(let t of e)t.previousSibling===a&&(a.remove(),n.insertAdjacentElement("beforeend",a)),t.nextSibling===i&&(i.remove(),n.insertAdjacentElement("afterbegin",i))});d.observe(n,{childList:!0,subtree:!1}),(0,o.onCleanup)(()=>{i.removeEventListener("focusin",l),a.removeEventListener("focusin",l),i.remove(),a.remove(),d.disconnect()})})}({trapFocus:()=>b()&&l.isOpen(),onMountAutoFocus:e=>{void 0===u&&h.onOpenAutoFocus?.(e)},onUnmountAutoFocus:h.onCloseAutoFocus},()=>n);let w=e=>{h.onEscapeKeyDown?.(e),u?.setAutoFocusMenu(!1),l.close(!0)},x=e=>{h.onFocusOutside?.(e),a.isModal()&&e.preventDefault()};(0,o.createEffect)(()=>(0,o.onCleanup)(l.registerContentId(h.id)));let C={ref:R(e=>{l.setContentRef(e),n=e},h.ref),role:"menu",get id(){return h.id},get tabIndex(){return v.tabIndex()},get"aria-labelledby"(){return l.triggerId()},onKeyDown:ea([h.onKeyDown,v.onKeyDown,e=>{if(Y(e.currentTarget,e.target)&&("Tab"===e.key&&l.isOpen()&&e.preventDefault(),void 0!==u&&"true"!==e.currentTarget.getAttribute("aria-haspopup")))switch(e.key){case r2.next(g(),a.orientation()):e.stopPropagation(),e.preventDefault(),l.close(!0),u.setAutoFocusMenu(!0),u.nextMenu();break;case r2.previous(g(),a.orientation()):if(e.currentTarget.hasAttribute("data-closed"))break;e.stopPropagation(),e.preventDefault(),l.close(!0),u.setAutoFocusMenu(!0),u.previousMenu()}}]),onMouseDown:ea([h.onMouseDown,v.onMouseDown]),onFocusIn:ea([h.onFocusIn,v.onFocusIn]),onFocusOut:ea([h.onFocusOut,v.onFocusOut]),onPointerEnter:e=>{ei(e,h.onPointerEnter),l.isOpen()&&(l.parentMenuContext()?.listState().selectionManager().setFocused(!1),l.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},onPointerMove:e=>{if(ei(e,h.onPointerMove),"mouse"!==e.pointerType)return;let t=e.target,r=y!==e.clientX;Y(e.currentTarget,t)&&r&&(l.setPointerDir(e.clientX>y?"right":"left"),y=e.clientX)},get"data-orientation"(){return a.orientation()}};return(0,o.createComponent)(o.Show,{get when(){return l.contentPresent()},get children(){return(0,o.createComponent)(o.Show,{get when(){return void 0===p||null!=l.parentMenuContext()},get fallback(){return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div"},()=>l.dataset(),C,m))},get children(){return(0,o.createComponent)(rd.Positioner,{get children(){return(0,o.createComponent)(rg,(0,o.mergeProps)({get disableOutsidePointerEvents(){return(0,o.memo)(()=>!!b())()&&l.isOpen()},get excludedElements(){return[l.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return W({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},h.style)},onEscapeKeyDown:w,onFocusOutside:x,get onDismiss(){return l.close}},()=>l.dataset(),C,m))}})}})}})}function r9(e){var t;let r,n,i,a,l,s,d,c,u,p=rZ(),g=rQ(),[f,h]=(0,o.splitProps)(e,["ref"]);return t={element:()=>r??null,enabled:()=>g.contentPresent()&&p.preventScroll()},n=(0,o.mergeProps)({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},t),i=(0,o.createUniqueId)(),a=[0,0],l=null,s=null,(0,o.createEffect)(()=>{e3(n.enabled)&&(rB(e=>[...e,i]),(0,o.onCleanup)(()=>{rB(e=>e.filter(e=>e!==i))}))}),(0,o.createEffect)(()=>{if(!e3(n.enabled)||!e3(n.hideScrollbar))return;let{body:e}=document,t=window.innerWidth-e.offsetWidth;if(e3(n.preventScrollbarShift)){let r={overflow:"hidden"},o=[];t>0&&("padding"===e3(n.preventScrollbarShiftMode)?r.paddingRight=`calc(${window.getComputedStyle(e).paddingRight} + ${t}px)`:r.marginRight=`calc(${window.getComputedStyle(e).marginRight} + ${t}px)`,o.push({key:"--scrollbar-width",value:`${t}px`}));let i=window.scrollY,a=window.scrollX;rO({key:"prevent-scroll",element:e,style:r,properties:o,cleanup:()=>{e3(n.restoreScrollPosition)&&t>0&&window.scrollTo(a,i)}})}else rO({key:"prevent-scroll",element:e,style:{overflow:"hidden"}})}),(0,o.createEffect)(()=>{rN().indexOf(i)===rN().length-1&&e3(n.enabled)&&(document.addEventListener("wheel",c,{passive:!1}),document.addEventListener("touchstart",d,{passive:!1}),document.addEventListener("touchmove",u,{passive:!1}),(0,o.onCleanup)(()=>{document.removeEventListener("wheel",c),document.removeEventListener("touchstart",d),document.removeEventListener("touchmove",u)}))}),d=e=>{a=rU(e),l=null,s=null},c=e=>{let t,r=e.target,o=e3(n.element),i=[(t=e).deltaX,t.deltaY],a=Math.abs(i[0])>Math.abs(i[1])?"x":"y",l="x"===a?i[0]:i[1],s=rG(r,a,l,o);o&&rH(o,r)&&s||!e.cancelable||e.preventDefault()},u=e=>{let t,r=e3(n.element),o=e.target;if(2===e.touches.length)t=!e3(n.allowPinchZoom);else{if(null==l||null===s){let t=rU(e).map((e,t)=>a[t]-e),r=Math.abs(t[0])>Math.abs(t[1])?"x":"y";l=r,s="x"===r?t[0]:t[1]}if("range"===o.type)t=!1;else{let e=rG(o,l,s,r);t=!(r&&rH(r,o))||!e}}t&&e.cancelable&&e.preventDefault()},(0,o.createComponent)(r6,(0,o.mergeProps)({ref(e){let t=R(e=>{r=e},f.ref);"function"==typeof t&&t(e)}},h))}var r8=(0,o.createContext)();function r7(e){let t=eb({id:rZ().generateId(`group-${(0,o.createUniqueId)()}`)},e),[r,n]=(0,o.createSignal)(),i={generateId:Z(()=>t.id),registerLabelId:e$(n)};return(0,o.createComponent)(r8.Provider,{value:i,get children(){return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",role:"group",get"aria-labelledby"(){return r()}},t))}})}function ne(e){let t=function(){let e=(0,o.useContext)(r8);if(void 0===e)throw Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}(),r=eb({id:t.generateId("label")},e),[n,i]=(0,o.splitProps)(r,["id"]);return(0,o.createEffect)(()=>(0,o.onCleanup)(t.registerLabelId(n.id))),(0,o.createComponent)(eq,(0,o.mergeProps)({as:"span",get id(){return n.id},"aria-hidden":"true"},i))}function nt(e){let t=rQ(),r=eb({children:"▼"},e);return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"span","aria-hidden":"true"},()=>t.dataset(),r))}function nr(e){return(0,o.createComponent)(rY,(0,o.mergeProps)({role:"menuitem",closeOnSelect:!0},e))}function nn(e){let t=r_(),r=eb({id:t.generateId("description")},e),[n,i]=(0,o.splitProps)(r,["id"]);return(0,o.createEffect)(()=>(0,o.onCleanup)(t.registerDescription(n.id))),(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",get id(){return n.id}},()=>t.dataset(),i))}function no(e){let t=r_(),r=eb({id:t.generateId("indicator")},e),[n,i]=(0,o.splitProps)(r,["forceMount"]);return(0,o.createComponent)(o.Show,{get when(){return n.forceMount||t.isChecked()},get children(){return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div"},()=>t.dataset(),i))}})}function ni(e){let t=r_(),r=eb({id:t.generateId("label")},e),[n,i]=(0,o.splitProps)(r,["ref","id"]);return(0,o.createEffect)(()=>(0,o.onCleanup)(t.registerLabel(n.id))),(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",ref(e){let r=R(t.setLabelRef,n.ref);"function"==typeof r&&r(e)},get id(){return n.id}},()=>t.dataset(),i))}function na(e){let t=rQ();return(0,o.createComponent)(o.Show,{get when(){return t.contentPresent()},get children(){return(0,o.createComponent)(o.Portal,e)}})}var nl=(0,o.createContext)();function ns(e){let t=eb({id:rZ().generateId(`radiogroup-${(0,o.createUniqueId)()}`)},e),[r,n]=(0,o.splitProps)(t,["value","defaultValue","onChange","disabled"]),[i,a]=ez({value:()=>r.value,defaultValue:()=>r.defaultValue,onChange:e=>r.onChange?.(e)});return(0,o.createComponent)(nl.Provider,{value:{isDisabled:()=>r.disabled,isSelectedValue:e=>e===i(),setSelectedValue:a},get children(){return(0,o.createComponent)(r7,n)}})}function nd(e){let t=function(){let e=(0,o.useContext)(nl);if(void 0===e)throw Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}(),r=eb({closeOnSelect:!1},e),[n,i]=(0,o.splitProps)(r,["value","onSelect"]);return(0,o.createComponent)(rY,(0,o.mergeProps)({role:"menuitemradio",get checked(){return t.isSelectedValue(n.value)},onSelect:()=>{n.onSelect?.(),t.setSelectedValue(n.value)}},i))}function nc(e){var t,r;let n,i,a,l=rZ(),d=eN(),c=rj(),u=r1(),p=r4(),g=eb({placement:"horizontal"===l.orientation()?"bottom-start":"right-start"},e),[f,h]=(0,o.splitProps)(g,["open","defaultOpen","onOpenChange"]),m=0,y=null,b="right",[v,w]=(0,o.createSignal)(),[x,C]=(0,o.createSignal)(),[k,S]=(0,o.createSignal)(),[$,E]=(0,o.createSignal)(),[M,q]=(0,o.createSignal)(!0),[A,F]=(0,o.createSignal)(h.placement),[P,L]=(0,o.createSignal)([]),[T,D]=(0,o.createSignal)([]),{DomCollectionProvider:z}=function(e={}){let[t,r]=function(e){let[t,r]=ez(e);return[()=>t()??[],r]}({value:()=>s(e.items),onChange:t=>e.onItemsChange?.(t)});!function(e,t){if("function"!=typeof IntersectionObserver)return(0,o.createEffect)(()=>{let r=setTimeout(()=>{eU(e(),t)});(0,o.onCleanup)(()=>clearTimeout(r))});let r=[];(0,o.createEffect)(()=>{let n=new IntersectionObserver(()=>{let n=!!r.length;r=e(),n&&eU(e(),t)},{root:function(e){let t=e[0],r=e[e.length-1]?.ref(),n=t?.ref()?.parentElement;for(;n;){if(r&&n.contains(r))return n;n=n.parentElement}return ee(n).body}(e())});for(let t of e()){let e=t.ref();e&&n.observe(e)}(0,o.onCleanup)(()=>n.disconnect())})}(t,r);let n=e=>(r(t=>{let r=function(e,t){let r=t.ref();if(!r)return -1;let n=e.length;if(!n)return -1;for(;n--;){let t=e[n]?.ref();if(t&&eB(t,r))return n+1}return 0}(t,e);return function(e,t,r=-1){return r in e?[...e.slice(0,r),t,...e.slice(r)]:[...e,t]}(t,e,r)}),()=>{r(t=>{let r=t.filter(t=>t.ref()!==e.ref());return t.length===r.length?t:r})});return{DomCollectionProvider:e=>(0,o.createComponent)(eK.Provider,{value:{registerItem:n},get children(){return e.children}})}}({items:T,onItemsChange:D}),I=rf({open:()=>f.open,defaultOpen:()=>f.defaultOpen,onOpenChange:e=>f.onOpenChange?.(e)}),{present:O}=e4({show:()=>l.forceMount()||I.isOpen(),element:()=>$()??null}),R=(n=function(e){let t=eb({selectionMode:"none",selectionBehavior:"toggle"},e),[r,n]=(0,o.createSignal)(!1),[i,a]=(0,o.createSignal)(),[l,d]=function(e){let[t,r]=ez(e);return[()=>t()??new eY,r]}({value:(0,o.createMemo)(()=>{let e=s(t.selectedKeys);return null!=e?new eY(e):e}),defaultValue:(0,o.createMemo)(()=>{let e=s(t.defaultSelectedKeys);return null!=e?new eY(e):new eY}),onChange:e=>t.onSelectionChange?.(e)}),[c,u]=(0,o.createSignal)(s(t.selectionBehavior));return(0,o.createEffect)(()=>{let e=l();"replace"===s(t.selectionBehavior)&&"toggle"===c()&&"object"==typeof e&&0===e.size&&u("replace")}),(0,o.createEffect)(()=>{u(s(t.selectionBehavior)??"toggle")}),{selectionMode:()=>s(t.selectionMode),disallowEmptySelection:()=>s(t.disallowEmptySelection)??!1,selectionBehavior:c,setSelectionBehavior:u,isFocused:r,setFocused:n,focusedKey:i,setFocusedKey:a,selectedKeys:l,setSelectedKeys:e=>{(s(t.allowDuplicateSelectionEvents)||!function(e,t){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}(e,l()))&&d(e)}}}(t={selectionMode:"none",dataSource:T}),a=new e2(i=function(e,t=[]){return(0,o.createMemo)(()=>{let r=function e(t){let r=t.startIndex??0,n=t.startLevel??0,o=[],i=e=>{if(null==e)return"";let r=t.getKey??"key",n=X(r)?e[r]:r(e);return null!=n?String(n):""},a=e=>{if(null==e)return"";let r=t.getTextValue??"textValue",n=X(r)?e[r]:r(e);return null!=n?String(n):""},l=e=>{if(null==e)return!1;let r=t.getDisabled??"disabled";return(X(r)?e[r]:r(e))??!1},s=e=>{if(null!=e)return X(t.getSectionChildren)?e[t.getSectionChildren]:t.getSectionChildren?.(e)};for(let d of t.dataSource){if(X(d)||"number"==typeof d){o.push({type:"item",rawValue:d,key:String(d),textValue:String(d),disabled:l(d),level:n,index:r}),r++;continue}if(null!=s(d)){o.push({type:"section",rawValue:d,key:"",textValue:"",disabled:!1,level:n,index:r}),r++;let i=s(d)??[];if(i.length>0){let a=e({dataSource:i,getKey:t.getKey,getTextValue:t.getTextValue,getDisabled:t.getDisabled,getSectionChildren:t.getSectionChildren,startIndex:r,startLevel:n+1});o.push(...a),r+=a.length}}else o.push({type:"item",rawValue:d,key:i(d),textValue:a(d),disabled:l(d),level:n,index:r}),r++}return o}({dataSource:s(e.dataSource),getKey:s(e.getKey),getTextValue:s(e.getTextValue),getDisabled:s(e.getDisabled),getSectionChildren:s(e.getSectionChildren)});for(let e=0;e<t.length;e++)t[e]();return e.factory(r)})}({dataSource:()=>s(t.dataSource),getKey:()=>s(t.getKey),getTextValue:()=>s(t.getTextValue),getDisabled:()=>s(t.getDisabled),getSectionChildren:()=>s(t.getSectionChildren),factory:e=>new e5(t.filter?t.filter(e):e)},[()=>t.filter]),n),(0,o.createComputed)(()=>{let e=n.focusedKey();null==e||i().getItem(e)||n.setFocusedKey(void 0)}),{collection:i,selectionManager:()=>a}),K=e=>{q(e),I.open()},N=(e=!1)=>{I.close(),e&&c&&c.close(!0)},B=()=>{let e=$();e&&(el(e),R.selectionManager().setFocused(!0),R.selectionManager().setFocusedKey(void 0))},U=()=>{null!=p?setTimeout(()=>B()):B()},G=e=>{var t;return b===y?.side&&!!(t=y?.area)&&function(e,t){let[r,n]=e,o=!1,i=t.length;for(let e=0,a=i-1;e<i;a=e++){let[l,s]=t[e],[d,c]=t[a],[,u]=t[0===a?i-1:a-1]||[0,0],p=(s-c)*(r-l)-(l-d)*(n-s);if(c<s){if(n>=c&&n<s){if(0===p)return!0;p>0&&(n===c?n>u&&(o=!o):o=!o)}}else if(s<c){if(n>s&&n<=c){if(0===p)return!0;p<0&&(n===c?n<u&&(o=!o):o=!o)}}else if(n==s&&(r>=d&&r<=l||r>=l&&r<=d))return!0}return o}([e.clientX,e.clientY],t)};r={isDisabled:()=>!(null==c&&I.isOpen()&&l.isModal()),targets:()=>[$(),...P()].filter(Boolean)},(0,o.createEffect)(()=>{s(r.isDisabled)||(0,o.onCleanup)(function(e,t=document.body){let r=new Set(e),n=new Set,o=e=>{for(let t of e.querySelectorAll(`[data-live-announcer], [${e6}]`))r.add(t);let t=e=>{if(r.has(e)||e.parentElement&&n.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let t of r)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),a=t(e);if(a===NodeFilter.FILTER_ACCEPT&&i(e),a!==NodeFilter.FILTER_REJECT){let e=o.nextNode();for(;null!=e;)i(e),e=o.nextNode()}},i=e=>{let t=rD.get(e)??0;("true"!==e.getAttribute("aria-hidden")||0!==t)&&(0===t&&e.setAttribute("aria-hidden","true"),n.add(e),rD.set(e,t+1))};rz.length&&rz[rz.length-1].disconnect(),o(t);let a=new MutationObserver(e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...r,...n].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(r.delete(e),n.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&("true"===e.dataset.liveAnnouncer||"true"===e.dataset.reactAriaTopLayer)?r.add(e):e instanceof Element&&o(e)}});a.observe(t,{childList:!0,subtree:!0});let l={observe(){a.observe(t,{childList:!0,subtree:!0})},disconnect(){a.disconnect()}};return rz.push(l),()=>{for(let e of(a.disconnect(),n)){let t=rD.get(e);if(null==t)return;1===t?(e.removeAttribute("aria-hidden"),rD.delete(e)):rD.set(e,t-1)}l===rz[rz.length-1]?(rz.pop(),rz.length&&rz[rz.length-1].observe()):rz.splice(rz.indexOf(l),1)}}(s(r.targets),s(r.root)))}),(0,o.createEffect)(()=>{let e=$();if(!e||!c)return;let t=c.registerNestedMenu(e);(0,o.onCleanup)(()=>{t()})}),(0,o.createEffect)(()=>{void 0===c&&u?.registerMenu(l.value(),[$(),...P()])}),(0,o.createEffect)(()=>{void 0===c&&void 0!==u&&(u.value()===l.value()?(k()?.focus(),u.autoFocusMenu()&&K(!0)):N())}),(0,o.createEffect)(()=>{void 0===c&&void 0!==u&&I.isOpen()&&u.setValue(l.value())}),(0,o.onCleanup)(()=>{void 0===c&&u?.unregisterMenu(l.value())});let H={dataset:(0,o.createMemo)(()=>({"data-expanded":I.isOpen()?"":void 0,"data-closed":I.isOpen()?void 0:""})),isOpen:I.isOpen,contentPresent:O,nestedMenus:P,currentPlacement:A,pointerGraceTimeoutId:()=>m,autoFocus:M,listState:()=>R,parentMenuContext:()=>c,triggerRef:k,contentRef:$,triggerId:v,contentId:x,setTriggerRef:S,setContentRef:E,open:K,close:N,toggle:e=>{q(e),I.toggle()},focusContent:U,onItemEnter:e=>{G(e)&&e.preventDefault()},onItemLeave:e=>{G(e)||U()},onTriggerLeave:e=>{G(e)&&e.preventDefault()},setPointerDir:e=>b=e,setPointerGraceTimeoutId:e=>m=e,setPointerGraceIntent:e=>y=e,registerNestedMenu:e=>{L(t=>[...t,e]);let t=c?.registerNestedMenu(e);return()=>{L(t=>_(t,e)),t?.()}},registerItemToParentDomCollection:d?.registerItem,registerTriggerId:e$(w),registerContentId:e$(C)};return(0,o.createComponent)(z,{get children(){return(0,o.createComponent)(rV.Provider,{value:H,get children(){return(0,o.createComponent)(o.Show,{when:void 0===p,get fallback(){return h.children},get children(){return(0,o.createComponent)(rd,(0,o.mergeProps)({anchorRef:k,contentRef:$,onCurrentPlacementChange:F},h))}})}})}})}function nu(e){let{direction:t}=eX();return(0,o.createComponent)(nc,(0,o.mergeProps)({get placement(){return"rtl"===t()?"left-start":"right-start"},flip:!0},e))}function np(e){let t=rQ(),r=rZ(),[n,i]=(0,o.splitProps)(e,["onFocusOutside","onKeyDown"]),{direction:a}=eX();return(0,o.createComponent)(r6,(0,o.mergeProps)({onOpenAutoFocus:e=>{e.preventDefault()},onCloseAutoFocus:e=>{e.preventDefault()},onFocusOutside:e=>{n.onFocusOutside?.(e);let r=e.target;Y(t.triggerRef(),r)||t.close()},onKeyDown:e=>{let o,i;ei(e,n.onKeyDown);let l=Y(e.currentTarget,e.target),s=(o=a(),i=r.orientation(),"ltr"===o?["horizontal"===i?"ArrowLeft":"ArrowUp"]:["horizontal"===i?"ArrowRight":"ArrowDown"]).includes(e.key),d=null!=t.parentMenuContext();l&&s&&d&&(t.close(),el(t.triggerRef()))}},i))}var ng=["Enter"," "];function nf(e){let t,r=rZ(),n=rQ(),i=eb({id:r.generateId(`sub-trigger-${(0,o.createUniqueId)()}`)},e),[a,l]=(0,o.splitProps)(i,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),s=null,d=()=>{o.isServer||(s&&window.clearTimeout(s),s=null)},{direction:c}=eX(),u=()=>a.id,p=()=>{let e=n.parentMenuContext();if(null==e)throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return e.listState().selectionManager()},g=e1({key:u,selectionManager:p,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>a.disabled},()=>t),f=e=>{ei(e,a.onClick),n.isOpen()||a.disabled||n.open(!0)},h=e=>{let t,o;ei(e,a.onKeyDown),e.repeat||!a.disabled&&(t=c(),o=r.orientation(),"ltr"===t?[...ng,"horizontal"===o?"ArrowRight":"ArrowDown"]:[...ng,"horizontal"===o?"ArrowLeft":"ArrowUp"]).includes(e.key)&&(e.stopPropagation(),e.preventDefault(),p().setFocused(!1),p().setFocusedKey(void 0),n.isOpen()||n.open("first"),n.focusContent(),n.listState().selectionManager().setFocused(!0),n.listState().selectionManager().setFocusedKey(n.listState().collection().getFirstKey()))};return(0,o.createEffect)(()=>{if(null==n.registerItemToParentDomCollection)throw Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");let e=n.registerItemToParentDomCollection({ref:()=>t,type:"item",key:u(),textValue:a.textValue??t?.textContent??"",disabled:a.disabled??!1});(0,o.onCleanup)(e)}),(0,o.createEffect)((0,o.on)(()=>n.parentMenuContext()?.pointerGraceTimeoutId(),e=>{(0,o.onCleanup)(()=>{window.clearTimeout(e),n.parentMenuContext()?.setPointerGraceIntent(null)})})),(0,o.createEffect)(()=>(0,o.onCleanup)(n.registerTriggerId(a.id))),(0,o.onCleanup)(()=>{d()}),(0,o.createComponent)(eq,(0,o.mergeProps)({as:"div",ref(e){let r=R(e=>{n.setTriggerRef(e),t=e},a.ref);"function"==typeof r&&r(e)},get id(){return a.id},role:"menuitem",get tabIndex(){return g.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return(0,o.memo)(()=>!!n.isOpen())()?n.contentId():void 0},get"aria-disabled"(){return a.disabled},get"data-key"(){return g.dataKey()},get"data-highlighted"(){return p().focusedKey()===u()?"":void 0},get"data-disabled"(){return a.disabled?"":void 0},get onPointerDown(){return ea([a.onPointerDown,g.onPointerDown])},get onPointerUp(){return ea([a.onPointerUp,g.onPointerUp])},get onClick(){return ea([f,g.onClick])},get onKeyDown(){return ea([h,g.onKeyDown])},get onMouseDown(){return ea([a.onMouseDown,g.onMouseDown])},get onFocus(){return ea([a.onFocus,g.onFocus])},onPointerMove:e=>{if(ei(e,a.onPointerMove),"mouse"!==e.pointerType)return;let t=n.parentMenuContext();if(t?.onItemEnter(e),!e.defaultPrevented){if(a.disabled)return void t?.onItemLeave(e);n.isOpen()||s||(n.parentMenuContext()?.setPointerGraceIntent(null),s=window.setTimeout(()=>{n.open(!1),d()},100)),t?.onItemEnter(e),e.defaultPrevented||(n.listState().selectionManager().isFocused()&&(n.listState().selectionManager().setFocused(!1),n.listState().selectionManager().setFocusedKey(void 0)),el(e.currentTarget),t?.listState().selectionManager().setFocused(!0),t?.listState().selectionManager().setFocusedKey(u()))}},onPointerLeave:e=>{if(ei(e,a.onPointerLeave),"mouse"!==e.pointerType)return;d();let t=n.parentMenuContext(),r=n.contentRef();if(r){t?.setPointerGraceIntent({area:function(e,t,r){let n=e.split("-")[0],o=r.getBoundingClientRect(),i=[],a=t.clientX,l=t.clientY;switch(n){case"top":i.push([a,l+5]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]);break;case"right":i.push([a-5,l]),i.push([o.left,o.top]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]);break;case"bottom":i.push([a,l-5]),i.push([o.right,o.top]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]);break;case"left":i.push([a+5,l]),i.push([o.right,o.bottom]),i.push([o.left,o.bottom]),i.push([o.left,o.top]),i.push([o.right,o.top])}return i}(n.currentPlacement(),e,r),side:n.currentPlacement().split("-")[0]}),window.clearTimeout(t?.pointerGraceTimeoutId());let o=window.setTimeout(()=>{t?.setPointerGraceIntent(null)},300);t?.setPointerGraceTimeoutId(o)}else{if(t?.onTriggerLeave(e),e.defaultPrevented)return;t?.setPointerGraceIntent(null)}t?.onItemLeave(e)}},()=>n.dataset(),l))}function nh(e){let t=r1(),r=eb({id:`menu-${(0,o.createUniqueId)()}`,modal:!0},e),[n,i]=(0,o.splitProps)(r,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),a=rf({open:()=>n.open,defaultOpen:()=>n.defaultOpen,onOpenChange:e=>n.onOpenChange?.(e)}),l={isModal:()=>n.modal??!0,preventScroll:()=>n.preventScroll??l.isModal(),forceMount:()=>n.forceMount??!1,generateId:Z(()=>n.id),value:()=>n.value,orientation:()=>n.orientation??t?.orientation()??"horizontal"};return(0,o.createComponent)(rX.Provider,{value:l,get children(){return(0,o.createComponent)(nc,(0,o.mergeProps)({get open(){return a.isOpen()},get onOpenChange(){return a.setIsOpen}},i))}})}function nm(e){let t,r=eb({orientation:"horizontal"},e),[n,i]=(0,o.splitProps)(r,["ref","orientation"]),a=eE(()=>t,()=>"hr");return(0,o.createComponent)(eq,(0,o.mergeProps)({as:"hr",ref(e){let r=R(e=>t=e,n.ref);"function"==typeof r&&r(e)},get role(){return"hr"!==a()?"separator":void 0},get"aria-orientation"(){return"vertical"===n.orientation?"vertical":void 0},get"data-orientation"(){return n.orientation}},i))}eR({},{Root:()=>nm,Separator:()=>ny});var ny=nm,nb={};function nv(e){let t=rZ(),r=rQ(),[n,i]=(0,o.splitProps)(e,["onCloseAutoFocus","onInteractOutside"]),a=!1;return(0,o.createComponent)(r9,(0,o.mergeProps)({onCloseAutoFocus:e=>{n.onCloseAutoFocus?.(e),a||el(r.triggerRef()),a=!1,e.preventDefault()},onInteractOutside:e=>{n.onInteractOutside?.(e),(!t.isModal()||e.detail.isContextMenu)&&(a=!0)}},i))}function nw(e){let t=eb({id:`dropdownmenu-${(0,o.createUniqueId)()}`},e);return(0,o.createComponent)(nh,t)}eR(nb,{Arrow:()=>ri,CheckboxItem:()=>rJ,Content:()=>nv,DropdownMenu:()=>nx,Group:()=>r7,GroupLabel:()=>ne,Icon:()=>nt,Item:()=>nr,ItemDescription:()=>nn,ItemIndicator:()=>no,ItemLabel:()=>ni,Portal:()=>na,RadioGroup:()=>ns,RadioItem:()=>nd,Root:()=>nw,Separator:()=>nm,Sub:()=>nu,SubContent:()=>np,SubTrigger:()=>nf,Trigger:()=>r5});var nx=Object.assign(nw,{Arrow:ri,CheckboxItem:rJ,Content:nv,Group:r7,GroupLabel:ne,Icon:nt,Item:nr,ItemDescription:nn,ItemIndicator:no,ItemLabel:ni,Portal:na,RadioGroup:ns,RadioItem:nd,Separator:nm,Sub:nu,SubContent:np,SubTrigger:nf,Trigger:r5}),nC={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsqd-font-size) * 0.625)",xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)",lg:"calc(var(--tsqd-font-size) * 1.125)",xl:"calc(var(--tsqd-font-size) * 1.25)","2xl":"calc(var(--tsqd-font-size) * 1.5)","3xl":"calc(var(--tsqd-font-size) * 1.875)","4xl":"calc(var(--tsqd-font-size) * 2.25)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.75)","7xl":"calc(var(--tsqd-font-size) * 4.5)","8xl":"calc(var(--tsqd-font-size) * 6)","9xl":"calc(var(--tsqd-font-size) * 8)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)",lg:"calc(var(--tsqd-font-size) * 1.75)",xl:"calc(var(--tsqd-font-size) * 2)","2xl":"calc(var(--tsqd-font-size) * 2.25)","3xl":"calc(var(--tsqd-font-size) * 2.5)","4xl":"calc(var(--tsqd-font-size) * 2.75)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.25)","7xl":"calc(var(--tsqd-font-size) * 3.5)","8xl":"calc(var(--tsqd-font-size) * 3.75)","9xl":"calc(var(--tsqd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",md:"calc(var(--tsqd-font-size) * 0.375)",lg:"calc(var(--tsqd-font-size) * 0.5)",xl:"calc(var(--tsqd-font-size) * 0.75)","2xl":"calc(var(--tsqd-font-size) * 1)","3xl":"calc(var(--tsqd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",5.5:"calc(var(--tsqd-font-size) * 1.375)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",7:"calc(var(--tsqd-font-size) * 1.75)",8:"calc(var(--tsqd-font-size) * 2)",9:"calc(var(--tsqd-font-size) * 2.25)",10:"calc(var(--tsqd-font-size) * 2.5)",11:"calc(var(--tsqd-font-size) * 2.75)",12:"calc(var(--tsqd-font-size) * 3)",14:"calc(var(--tsqd-font-size) * 3.5)",16:"calc(var(--tsqd-font-size) * 4)",20:"calc(var(--tsqd-font-size) * 5)",24:"calc(var(--tsqd-font-size) * 6)",28:"calc(var(--tsqd-font-size) * 7)",32:"calc(var(--tsqd-font-size) * 8)",36:"calc(var(--tsqd-font-size) * 9)",40:"calc(var(--tsqd-font-size) * 10)",44:"calc(var(--tsqd-font-size) * 11)",48:"calc(var(--tsqd-font-size) * 12)",52:"calc(var(--tsqd-font-size) * 13)",56:"calc(var(--tsqd-font-size) * 14)",60:"calc(var(--tsqd-font-size) * 15)",64:"calc(var(--tsqd-font-size) * 16)",72:"calc(var(--tsqd-font-size) * 18)",80:"calc(var(--tsqd-font-size) * 20)",96:"calc(var(--tsqd-font-size) * 24)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},nk=(0,o.template)('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),nS=(0,o.template)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),n$=(0,o.template)('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),nE=(0,o.template)('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),nM=(0,o.template)('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),nq=(0,o.template)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nA=(0,o.template)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nF=(0,o.template)('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nP=(0,o.template)('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),nL=(0,o.template)('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),nT=(0,o.template)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nD=(0,o.template)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nz=(0,o.template)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),nI=(0,o.template)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nO=(0,o.template)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nR=(0,o.template)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nK=(0,o.template)('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),nN=(0,o.template)('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nB=(0,o.template)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nU=(0,o.template)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),nG=(0,o.template)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nH=(0,o.template)('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),nV=(0,o.template)('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function nj(){return nk()}function nQ(){return nS()}function nW(){return n$()}function n_(){return nE()}function nX(){return nM()}function nZ(){var e;return(e=nM()).style.setProperty("transform","rotate(90deg)"),e}function nY(){var e;return(e=nM()).style.setProperty("transform","rotate(-90deg)"),e}function nJ(){return nq()}function n0(){return nA()}function n1(){return nF()}function n2(){return nP()}function n5(){return nL()}function n3(){return nT()}function n4(){return nD()}function n6(){return nz()}function n9(){return nI()}function n8(e){var t,r;return r=(t=nO()).firstChild,(0,o.createRenderEffect)(()=>(0,o.setAttribute)(r,"stroke","dark"===e.theme?"#12B76A":"#027A48")),t}function n7(){return nR()}function oe(){return nK()}function ot(e){return[(0,o.createComponent)(o.Show,{get when(){return e.checked},get children(){var t=nO(),r=t.firstChild;return(0,o.createRenderEffect)(()=>(0,o.setAttribute)(r,"stroke","dark"===e.theme?"#9B8AFB":"#6938EF")),t}}),(0,o.createComponent)(o.Show,{get when(){return!e.checked},get children(){var n=nN(),i=n.firstChild;return(0,o.createRenderEffect)(()=>(0,o.setAttribute)(i,"stroke","dark"===e.theme?"#9B8AFB":"#6938EF")),n}})]}function or(){return nB()}function on(){return nU()}function oo(){return nG()}function oi(){return nH()}function oa(){var e,t,r,n,i,a,l,s,d,c,u,p,g,f,h,m,y,b,v,w,x,C,k,S,$,E,M,q,A,F,P,L,T,D,z,I,O,R,K,N,B,U,G,H,V,j,Q,W,_,X,Z,Y,J,ee,et,er,en,eo,ei,ea,el,es,ed,ec,eu,ep,eg,ef,eh,em,ey,eb,ev,ew,ex,eC,ek,eS,e$,eE,eM,eq,eA,eF,eP,eL,eT,eD,ez;let eI=(0,o.createUniqueId)();return i=(n=(r=(t=(e=nV()).firstChild).nextSibling).nextSibling).firstChild,l=(a=n.nextSibling).firstChild,c=(d=(s=a.nextSibling).nextSibling).firstChild,p=(u=d.nextSibling).firstChild,h=(f=(g=u.nextSibling).nextSibling).firstChild,y=(m=f.nextSibling).firstChild,w=(v=(b=m.nextSibling).nextSibling).firstChild,C=(x=v.nextSibling).firstChild,$=(S=(k=x.nextSibling).nextSibling).firstChild,M=(E=S.nextSibling).firstChild,F=(A=(q=E.nextSibling).nextSibling).firstChild,L=(P=A.nextSibling).firstChild,z=(D=(T=P.nextSibling).nextSibling).firstChild,O=(I=D.nextSibling).firstChild,N=(K=(R=I.nextSibling).firstChild.nextSibling.nextSibling.nextSibling).nextSibling,U=(B=R.nextSibling).firstChild,H=(G=B.nextSibling).firstChild,ei=(eo=(en=(er=(et=(ee=(J=(Y=(Z=(X=(_=(W=(Q=(j=(V=G.nextSibling).firstChild).nextSibling).nextSibling.firstChild).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling,el=(ea=V.nextSibling).firstChild,ed=(es=ea.nextSibling).firstChild,ep=(eu=(ec=es.nextSibling).firstChild).nextSibling,ef=(eg=ec.nextSibling).firstChild,em=(eh=eg.nextSibling).firstChild,ez=(eD=(eT=(eL=(eP=(eF=(eA=(eq=(eM=(eE=(e$=(eS=(ek=(eC=(ex=(ew=(ev=(eb=(ey=eh.nextSibling).firstChild).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling).nextSibling,(0,o.setAttribute)(t,"id",`a-${eI}`),(0,o.setAttribute)(r,"fill",`url(#a-${eI})`),(0,o.setAttribute)(i,"id",`am-${eI}`),(0,o.setAttribute)(a,"id",`b-${eI}`),(0,o.setAttribute)(l,"filter",`url(#am-${eI})`),(0,o.setAttribute)(s,"mask",`url(#b-${eI})`),(0,o.setAttribute)(c,"id",`ah-${eI}`),(0,o.setAttribute)(u,"id",`k-${eI}`),(0,o.setAttribute)(p,"filter",`url(#ah-${eI})`),(0,o.setAttribute)(g,"mask",`url(#k-${eI})`),(0,o.setAttribute)(h,"id",`ae-${eI}`),(0,o.setAttribute)(m,"id",`j-${eI}`),(0,o.setAttribute)(y,"filter",`url(#ae-${eI})`),(0,o.setAttribute)(b,"mask",`url(#j-${eI})`),(0,o.setAttribute)(w,"id",`ai-${eI}`),(0,o.setAttribute)(x,"id",`i-${eI}`),(0,o.setAttribute)(C,"filter",`url(#ai-${eI})`),(0,o.setAttribute)(k,"mask",`url(#i-${eI})`),(0,o.setAttribute)($,"id",`aj-${eI}`),(0,o.setAttribute)(E,"id",`h-${eI}`),(0,o.setAttribute)(M,"filter",`url(#aj-${eI})`),(0,o.setAttribute)(q,"mask",`url(#h-${eI})`),(0,o.setAttribute)(F,"id",`ag-${eI}`),(0,o.setAttribute)(P,"id",`g-${eI}`),(0,o.setAttribute)(L,"filter",`url(#ag-${eI})`),(0,o.setAttribute)(T,"mask",`url(#g-${eI})`),(0,o.setAttribute)(z,"id",`af-${eI}`),(0,o.setAttribute)(I,"id",`f-${eI}`),(0,o.setAttribute)(O,"filter",`url(#af-${eI})`),(0,o.setAttribute)(R,"mask",`url(#f-${eI})`),(0,o.setAttribute)(K,"id",`m-${eI}`),(0,o.setAttribute)(N,"fill",`url(#m-${eI})`),(0,o.setAttribute)(U,"id",`ak-${eI}`),(0,o.setAttribute)(G,"id",`e-${eI}`),(0,o.setAttribute)(H,"filter",`url(#ak-${eI})`),(0,o.setAttribute)(V,"mask",`url(#e-${eI})`),(0,o.setAttribute)(j,"id",`n-${eI}`),(0,o.setAttribute)(Q,"fill",`url(#n-${eI})`),(0,o.setAttribute)(W,"id",`r-${eI}`),(0,o.setAttribute)(_,"fill",`url(#r-${eI})`),(0,o.setAttribute)(X,"id",`s-${eI}`),(0,o.setAttribute)(Z,"fill",`url(#s-${eI})`),(0,o.setAttribute)(Y,"id",`q-${eI}`),(0,o.setAttribute)(J,"fill",`url(#q-${eI})`),(0,o.setAttribute)(ee,"id",`p-${eI}`),(0,o.setAttribute)(et,"fill",`url(#p-${eI})`),(0,o.setAttribute)(er,"id",`o-${eI}`),(0,o.setAttribute)(en,"fill",`url(#o-${eI})`),(0,o.setAttribute)(eo,"id",`l-${eI}`),(0,o.setAttribute)(ei,"fill",`url(#l-${eI})`),(0,o.setAttribute)(el,"id",`al-${eI}`),(0,o.setAttribute)(es,"id",`d-${eI}`),(0,o.setAttribute)(ed,"filter",`url(#al-${eI})`),(0,o.setAttribute)(ec,"mask",`url(#d-${eI})`),(0,o.setAttribute)(eu,"id",`u-${eI}`),(0,o.setAttribute)(ep,"fill",`url(#u-${eI})`),(0,o.setAttribute)(ef,"id",`ad-${eI}`),(0,o.setAttribute)(eh,"id",`c-${eI}`),(0,o.setAttribute)(em,"filter",`url(#ad-${eI})`),(0,o.setAttribute)(ey,"mask",`url(#c-${eI})`),(0,o.setAttribute)(eb,"id",`t-${eI}`),(0,o.setAttribute)(ev,"fill",`url(#t-${eI})`),(0,o.setAttribute)(ew,"id",`v-${eI}`),(0,o.setAttribute)(ex,"stroke",`url(#v-${eI})`),(0,o.setAttribute)(eC,"id",`aa-${eI}`),(0,o.setAttribute)(ek,"stroke",`url(#aa-${eI})`),(0,o.setAttribute)(eS,"id",`w-${eI}`),(0,o.setAttribute)(e$,"stroke",`url(#w-${eI})`),(0,o.setAttribute)(eE,"id",`ac-${eI}`),(0,o.setAttribute)(eM,"stroke",`url(#ac-${eI})`),(0,o.setAttribute)(eq,"id",`ab-${eI}`),(0,o.setAttribute)(eA,"stroke",`url(#ab-${eI})`),(0,o.setAttribute)(eF,"id",`y-${eI}`),(0,o.setAttribute)(eP,"stroke",`url(#y-${eI})`),(0,o.setAttribute)(eL,"id",`x-${eI}`),(0,o.setAttribute)(eT,"stroke",`url(#x-${eI})`),(0,o.setAttribute)(eD,"id",`z-${eI}`),(0,o.setAttribute)(ez,"stroke",`url(#z-${eI})`),e}var ol=(0,o.template)('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),os=(0,o.template)('<button title="Copy object to clipboard">'),od=(0,o.template)('<button title="Remove all items"aria-label="Remove all items">'),oc=(0,o.template)('<button title="Delete item"aria-label="Delete item">'),ou=(0,o.template)('<button title="Toggle value"aria-label="Toggle value">'),op=(0,o.template)('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),og=(0,o.template)("<div>"),of=(0,o.template)("<div><button> <span></span> <span> "),oh=(0,o.template)("<input>"),om=(0,o.template)("<span>"),oy=(0,o.template)("<div><label>:"),ob=(0,o.template)("<div><div><button> [<!>...<!>]"),ov=e=>{var t;let r=C(),n=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,i=(0,o.createMemo)(()=>"dark"===r()?oq(n):oM(n));return t=ol(),(0,o.createRenderEffect)(()=>(0,o.className)(t,O(i().expander,n`
          transform: rotate(${90*!!e.expanded}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),t},ow=e=>{var t;let r=C(),n=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,i=(0,o.createMemo)(()=>"dark"===r()?oq(n):oM(n)),[a,l]=(0,o.createSignal)("NoCopy");return t=os(),(0,o.addEventListener)(t,"click","NoCopy"===a()?()=>{navigator.clipboard.writeText((0,o.stringify)(e.value)).then(()=>{l("SuccessCopy"),setTimeout(()=>{l("NoCopy")},1500)},e=>{l("ErrorCopy"),setTimeout(()=>{l("NoCopy")},1500)})}:void 0,!0),(0,o.insert)(t,(0,o.createComponent)(o.Switch,{get children(){return[(0,o.createComponent)(o.Match,{get when(){return"NoCopy"===a()},get children(){return(0,o.createComponent)(n6,{})}}),(0,o.createComponent)(o.Match,{get when(){return"SuccessCopy"===a()},get children(){return(0,o.createComponent)(n8,{get theme(){return r()}})}}),(0,o.createComponent)(o.Match,{get when(){return"ErrorCopy"===a()},get children(){return(0,o.createComponent)(n7,{})}})]}})),(0,o.createRenderEffect)(e=>{var r=i().actionButton,n=`${"NoCopy"===a()?"Copy object to clipboard":"SuccessCopy"===a()?"Object copied to clipboard":"Error copying object to clipboard"}`;return r!==e.e&&(0,o.className)(t,e.e=r),n!==e.t&&(0,o.setAttribute)(t,"aria-label",e.t=n),e},{e:void 0,t:void 0}),t},ox=e=>{var t;let r=C(),n=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,i=(0,o.createMemo)(()=>"dark"===r()?oq(n):oM(n)),a=y().client;return(t=od()).$$click=()=>{let t=e.activeQuery.state.data,r=(0,o.updateNestedDataByPath)(t,e.dataPath,[]);a.setQueryData(e.activeQuery.queryKey,r)},(0,o.insert)(t,(0,o.createComponent)(oe,{})),(0,o.createRenderEffect)(()=>(0,o.className)(t,i().actionButton)),t},oC=e=>{var t;let r=C(),n=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,i=(0,o.createMemo)(()=>"dark"===r()?oq(n):oM(n)),a=y().client;return(t=oc()).$$click=()=>{let t=e.activeQuery.state.data,r=(0,o.deleteNestedDataByPath)(t,e.dataPath);a.setQueryData(e.activeQuery.queryKey,r)},(0,o.insert)(t,(0,o.createComponent)(nQ,{})),(0,o.createRenderEffect)(()=>(0,o.className)(t,O(i().actionButton))),t},ok=e=>{var t;let r=C(),n=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,i=(0,o.createMemo)(()=>"dark"===r()?oq(n):oM(n)),a=y().client;return(t=ou()).$$click=()=>{let t=e.activeQuery.state.data,r=(0,o.updateNestedDataByPath)(t,e.dataPath,!e.value);a.setQueryData(e.activeQuery.queryKey,r)},(0,o.insert)(t,(0,o.createComponent)(ot,{get theme(){return r()},get checked(){return e.value}})),(0,o.createRenderEffect)(()=>(0,o.className)(t,O(i().actionButton,n`
          width: ${nC.size[3.5]};
          height: ${nC.size[3.5]};
        `))),t};function oS(e){return Symbol.iterator in e}function o$(e){var t;let r=C(),n=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,i=(0,o.createMemo)(()=>"dark"===r()?oq(n):oM(n)),a=y().client,[l,s]=(0,o.createSignal)((e.defaultExpanded||[]).includes(e.label)),[d,c]=(0,o.createSignal)([]),u=(0,o.createMemo)(()=>Array.isArray(e.value)?e.value.map((e,t)=>({label:t.toString(),value:e})):null!==e.value&&"object"==typeof e.value&&oS(e.value)&&"function"==typeof e.value[Symbol.iterator]?e.value instanceof Map?Array.from(e.value,([e,t])=>({label:e,value:t})):Array.from(e.value,(e,t)=>({label:t.toString(),value:e})):"object"==typeof e.value&&null!==e.value?Object.entries(e.value).map(([e,t])=>({label:e,value:t})):[]),p=(0,o.createMemo)(()=>Array.isArray(e.value)?"array":null!==e.value&&"object"==typeof e.value&&oS(e.value)&&"function"==typeof e.value[Symbol.iterator]?"Iterable":"object"==typeof e.value&&null!==e.value?"object":typeof e.value),g=(0,o.createMemo)(()=>(function(e){let t=0,r=[];for(;t<e.length;)r.push(e.slice(t,t+100)),t+=100;return r})(u())),f=e.dataPath??[],h=(0,o.createUniqueId)();return t=og(),(0,o.insert)(t,(0,o.createComponent)(o.Show,{get when(){return g().length},get children(){var m,b,v,w,x,k;return[(k=(x=(w=(v=(b=(m=of()).firstChild).firstChild).nextSibling).nextSibling.nextSibling).firstChild,b.$$click=()=>s(e=>!e),(0,o.insert)(b,(0,o.createComponent)(ov,{get expanded(){return l()}}),v),(0,o.insert)(w,()=>e.label),(0,o.insert)(x,()=>"iterable"===String(p()).toLowerCase()?"(Iterable) ":"",k),(0,o.insert)(x,()=>u().length,k),(0,o.insert)(x,()=>u().length>1?"items":"item",null),(0,o.insert)(m,(0,o.createComponent)(o.Show,{get when(){return e.editable},get children(){var S=og();return(0,o.insert)(S,(0,o.createComponent)(ow,{get value(){return e.value}}),null),(0,o.insert)(S,(0,o.createComponent)(o.Show,{get when(){return e.itemsDeletable&&void 0!==e.activeQuery},get children(){return(0,o.createComponent)(oC,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),(0,o.insert)(S,(0,o.createComponent)(o.Show,{get when(){return"array"===p()&&void 0!==e.activeQuery},get children(){return(0,o.createComponent)(ox,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),(0,o.insert)(S,(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>!!e.onEdit)()&&!(0,o.serialize)(e.value).meta},get children(){var $=op();return $.$$click=()=>{e.onEdit?.()},(0,o.insert)($,(0,o.createComponent)(n9,{})),(0,o.createRenderEffect)(()=>(0,o.className)($,i().actionButton)),$}}),null),(0,o.createRenderEffect)(()=>(0,o.className)(S,i().actions)),S}}),null),(0,o.createRenderEffect)(e=>{var t=i().expanderButtonContainer,r=i().expanderButton,n=l()?"true":"false",a=i().info;return t!==e.e&&(0,o.className)(m,e.e=t),r!==e.t&&(0,o.className)(b,e.t=r),n!==e.a&&(0,o.setAttribute)(b,"aria-expanded",e.a=n),a!==e.o&&(0,o.className)(x,e.o=a),e},{e:void 0,t:void 0,a:void 0,o:void 0}),m),(0,o.createComponent)(o.Show,{get when(){return l()},get children(){return[(0,o.createComponent)(o.Show,{get when(){return 1===g().length},get children(){var E=og();return(0,o.insert)(E,(0,o.createComponent)(H,{get each(){return u()},by:e=>e.label,children:t=>(0,o.createComponent)(o$,{get defaultExpanded(){return e.defaultExpanded},get label(){return t().label},get value(){return t().value},get editable(){return e.editable},get dataPath(){return[...f,t().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return"array"===p()||"Iterable"===p()||"object"===p()}})})),(0,o.createRenderEffect)(()=>(0,o.className)(E,i().subEntry)),E}}),(0,o.createComponent)(o.Show,{get when(){return g().length>1},get children(){var M=og();return(0,o.insert)(M,(0,o.createComponent)(o.Index,{get each(){return g()},children:(t,r)=>{var n,a,l,s,u,p;return(p=(u=(s=(l=(a=(n=ob()).firstChild).firstChild).firstChild).nextSibling).nextSibling.nextSibling).nextSibling,l.$$click=()=>c(e=>e.includes(r)?e.filter(e=>e!==r):[...e,r]),(0,o.insert)(l,(0,o.createComponent)(ov,{get expanded(){return d().includes(r)}}),s),(0,o.insert)(l,100*r,u),(0,o.insert)(l,100*r+100-1,p),(0,o.insert)(a,(0,o.createComponent)(o.Show,{get when(){return d().includes(r)},get children(){var g=og();return(0,o.insert)(g,(0,o.createComponent)(H,{get each(){return t()},by:e=>e.label,children:t=>(0,o.createComponent)(o$,{get defaultExpanded(){return e.defaultExpanded},get label(){return t().label},get value(){return t().value},get editable(){return e.editable},get dataPath(){return[...f,t().label]},get activeQuery(){return e.activeQuery}})})),(0,o.createRenderEffect)(()=>(0,o.className)(g,i().subEntry)),g}}),null),(0,o.createRenderEffect)(e=>{var t=i().entry,r=i().expanderButton;return t!==e.e&&(0,o.className)(a,e.e=t),r!==e.t&&(0,o.className)(l,e.t=r),e},{e:void 0,t:void 0}),n}})),(0,o.createRenderEffect)(()=>(0,o.className)(M,i().subEntry)),M}})]}})]}}),null),(0,o.insert)(t,(0,o.createComponent)(o.Show,{get when(){return 0===g().length},get children(){var q=oy(),A=q.firstChild,F=A.firstChild;return(0,o.setAttribute)(A,"for",h),(0,o.insert)(A,()=>e.label,F),(0,o.insert)(q,(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>!!(e.editable&&void 0!==e.activeQuery))()&&("string"===p()||"number"===p()||"boolean"===p())},get fallback(){var P;return P=om(),(0,o.insert)(P,()=>(0,o.displayValue)(e.value)),(0,o.createRenderEffect)(()=>(0,o.className)(P,i().value)),P},get children(){return[(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>!!(e.editable&&void 0!==e.activeQuery))()&&("string"===p()||"number"===p())},get children(){var L=oh();return L.addEventListener("change",t=>{let r=e.activeQuery.state.data,n=(0,o.updateNestedDataByPath)(r,f,"number"===p()?t.target.valueAsNumber:t.target.value);a.setQueryData(e.activeQuery.queryKey,n)}),(0,o.setAttribute)(L,"id",h),(0,o.createRenderEffect)(e=>{var t="number"===p()?"number":"text",r=O(i().value,i().editableInput);return t!==e.e&&(0,o.setAttribute)(L,"type",e.e=t),r!==e.t&&(0,o.className)(L,e.t=r),e},{e:void 0,t:void 0}),(0,o.createRenderEffect)(()=>L.value=e.value),L}}),(0,o.createComponent)(o.Show,{get when(){return"boolean"===p()},get children(){var T=om();return(0,o.insert)(T,(0,o.createComponent)(ok,{get activeQuery(){return e.activeQuery},dataPath:f,get value(){return e.value}}),null),(0,o.insert)(T,()=>(0,o.displayValue)(e.value),null),(0,o.createRenderEffect)(()=>(0,o.className)(T,O(i().value,i().actions,i().editableInput))),T}})]}}),null),(0,o.insert)(q,(0,o.createComponent)(o.Show,{get when(){return e.editable&&e.itemsDeletable&&void 0!==e.activeQuery},get children(){return(0,o.createComponent)(oC,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),(0,o.createRenderEffect)(e=>{var t=i().row,r=i().label;return t!==e.e&&(0,o.className)(q,e.e=t),r!==e.t&&(0,o.className)(A,e.t=r),e},{e:void 0,t:void 0}),q}}),null),(0,o.createRenderEffect)(()=>(0,o.className)(t,i().entry)),t}var oE=(e,t)=>{let{colors:r,font:n,size:o,border:i}=nC,a=(t,r)=>"light"===e?t:r;return{entry:t`
      & * {
        font-size: ${n.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${a(r.gray[300],r.darkGray[400])};
      /* outline: 1px solid ${r.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${r.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${r.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${r.green[400]}; */

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${a(r.gray[500],r.gray[500])};
      font-size: ${n.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${r.yellow[400]}; */
    `,label:t`
      color: ${a(r.gray[700],r.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${a(r.purple[600],r.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${i.radius.xs};
      background-color: ${a(r.gray[200],r.darkGray[500])};

      &:hover {
        background-color: ${a(r.gray[300],r.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${a(r.gray[500],r.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${a(r.gray[600],r.gray[400])};
      }

      &:focus-visible {
        border-radius: ${i.radius.xs};
        outline: 2px solid ${r.blue[800]};
        outline-offset: 2px;
      }
    `}},oM=e=>oE("light",e),oq=e=>oE("dark",e);(0,o.delegateEvents)(["click"]);var oA=(0,o.template)('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),oF=(0,o.template)("<div>"),oP=(0,o.template)('<aside aria-label="Tanstack query devtools"><div role=separator aria-label="Resize devtools panel"tabindex=0></div><button aria-label="Close tanstack query devtools">'),oL=(0,o.template)('<select name=tsqd-queries-filter-sort aria-label="Sort queries by">'),oT=(0,o.template)('<select name=tsqd-mutations-filter-sort aria-label="Sort mutations by">'),oD=(0,o.template)("<span>Asc"),oz=(0,o.template)("<span>Desc"),oI=(0,o.template)('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),oO=(0,o.template)("<div>Settings"),oR=(0,o.template)("<span>Position"),oK=(0,o.template)("<span>Top"),oN=(0,o.template)("<span>Bottom"),oB=(0,o.template)("<span>Left"),oU=(0,o.template)("<span>Right"),oG=(0,o.template)("<span>Theme"),oH=(0,o.template)("<span>Light"),oV=(0,o.template)("<span>Dark"),oj=(0,o.template)("<span>System"),oQ=(0,o.template)("<span>Disabled Queries"),oW=(0,o.template)("<span>Show"),o_=(0,o.template)("<span>Hide"),oX=(0,o.template)("<div><div class=tsqd-queries-container>"),oZ=(0,o.template)("<div><div class=tsqd-mutations-container>"),oY=(0,o.template)('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),oJ=(0,o.template)("<option>Sort by "),o0=(0,o.template)("<div class=tsqd-query-disabled-indicator aria-hidden=true>disabled"),o1=(0,o.template)("<div class=tsqd-query-static-indicator aria-hidden=true>static"),o2=(0,o.template)("<button><div></div><code class=tsqd-query-hash>"),o5=(0,o.template)("<div role=tooltip id=tsqd-status-tooltip>"),o3=(0,o.template)("<span>"),o4=(0,o.template)("<button><span aria-hidden=true></span><span>"),o6=(0,o.template)("<button><span aria-hidden=true></span> Error"),o9=(0,o.template)('<div><span aria-hidden=true></span>Trigger Error<select aria-label="Select error type to trigger"><option value=""disabled selected>'),o8=(0,o.template)('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),o7=(0,o.template)('<form><textarea name=data aria-label="Edit query data as JSON"></textarea><div><span></span><div><button type=button>Cancel</button><button>Save'),ie=(0,o.template)('<div><div role=heading aria-level=2>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div role=heading aria-level=2>Actions</div><div><button><span aria-hidden=true></span>Refetch</button><button><span aria-hidden=true></span>Invalidate</button><button><span aria-hidden=true></span>Reset</button><button><span aria-hidden=true></span>Remove</button><button><span aria-hidden=true></span> Loading</button></div><div role=heading aria-level=2>Data </div><div role=heading aria-level=2>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),it=(0,o.template)("<option>"),ir=(0,o.template)('<div><div role=heading aria-level=2>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span role=status aria-live=polite></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div role=heading aria-level=2>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div role=heading aria-level=2>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[io,ii]=(0,o.createSignal)(null),[ia,il]=(0,o.createSignal)(null),[is,id]=(0,o.createSignal)(0),[ic,iu]=(0,o.createSignal)(!1),ip=e=>{var t;let r=w(),n=C(),i=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,a=(0,o.createMemo)(()=>"dark"===n()?iL(i):iP(i));return(0,o.createEffect)(()=>{let e=r().pipWindow,t=()=>{e&&id(e.innerWidth)};e&&(e.addEventListener("resize",t),t()),(0,o.onCleanup)(()=>{e&&e.removeEventListener("resize",t)})}),(t=oF()).style.setProperty("--tsqd-font-size","16px"),t.style.setProperty("max-height","100vh"),t.style.setProperty("height","100vh"),t.style.setProperty("width","100vw"),(0,o.insert)(t,()=>e.children),(0,o.createRenderEffect)(()=>(0,o.className)(t,O(a().panel,(()=>{let{colors:e}=nC,t=(e,t)=>"dark"===n()?t:e;return 796>is()?i`
        flex-direction: column;
        background-color: ${t(e.gray[300],e.gray[600])};
      `:i`
      flex-direction: row;
      background-color: ${t(e.gray[200],e.darkGray[900])};
    `})(),{[i`
            min-width: min-content;
          `]:700>is()},"tsqd-main-panel"))),t},ig=e=>{var t,r,n,i,a;let l,s,d=C(),c=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,u=(0,o.createMemo)(()=>"dark"===d()?iL(c):iP(c));(0,o.onMount)(()=>{l.focus()});let[p,f]=(0,o.createSignal)(!1),h=(0,o.createMemo)(()=>e.localStore.position||y().position||g);return(0,o.onMount)(()=>{V(s,({width:e},t)=>{t===s&&id(e)})}),(0,o.createEffect)(()=>{let t=s.parentElement?.parentElement?.parentElement;if(!t)return;let r=e.localStore.position||g,n=(0,o.getSidedProp)("padding",r),i="left"===e.localStore.position||"right"===e.localStore.position,a=(({padding:e,paddingTop:t,paddingBottom:r,paddingLeft:n,paddingRight:o})=>({padding:e,paddingTop:t,paddingBottom:r,paddingLeft:n,paddingRight:o}))(t.style);t.style[n]=`${i?e.localStore.width:e.localStore.height}px`,(0,o.onCleanup)(()=>{Object.entries(a).forEach(([e,r])=>{t.style[e]=r})})}),n=(r=(t=oP()).firstChild).nextSibling,"function"==typeof(i=s)?(0,o.use)(i,t):s=t,r.$$keydown=t=>{let r=(0,o.convertRemToPixels)(3.5),n=(0,o.convertRemToPixels)(12);if("top"===h()||"bottom"===h()){if("ArrowUp"===t.key||"ArrowDown"===t.key){t.preventDefault();let n=Math.max(r,Number(e.localStore.height||500)+("bottom"===h()?"ArrowUp"===t.key?10:-10:"ArrowDown"===t.key?10:-10));e.setLocalStore("height",String(n))}}else if("ArrowLeft"===t.key||"ArrowRight"===t.key){t.preventDefault();let r=Math.max(n,Number(e.localStore.width||500)+("right"===h()?"ArrowLeft"===t.key?10:-10:"ArrowRight"===t.key?10:-10));e.setLocalStore("width",String(r))}},r.$$mousedown=t=>{let r=t.currentTarget.parentElement;if(!r)return;f(!0);let{height:n,width:i}=r.getBoundingClientRect(),a=t.clientX,l=t.clientY,s=0,d=(0,o.convertRemToPixels)(3.5),c=(0,o.convertRemToPixels)(12),u=t=>{if(t.preventDefault(),"left"===h()||"right"===h()){(s=Math.round(i+("right"===h()?a-t.clientX:t.clientX-a)))<c&&(s=c),e.setLocalStore("width",String(Math.round(s)));let n=r.getBoundingClientRect().width;Number(e.localStore.width)<n&&e.setLocalStore("width",String(n))}else(s=Math.round(n+("bottom"===h()?l-t.clientY:t.clientY-l)))<d&&(s=d,ii(null)),e.setLocalStore("height",String(Math.round(s)))},g=()=>{p()&&f(!1),document.removeEventListener("mousemove",u,!1),document.removeEventListener("mouseup",g,!1)};document.addEventListener("mousemove",u,!1),document.addEventListener("mouseup",g,!1)},n.$$click=()=>e.setLocalStore("open","false"),"function"==typeof(a=l)?(0,o.use)(a,n):l=n,(0,o.insert)(n,(0,o.createComponent)(nW,{})),(0,o.insert)(t,(0,o.createComponent)(ih,e),null),(0,o.createRenderEffect)(i=>{var a=O(u().panel,u()[`panel-position-${h()}`],(()=>{let{colors:e}=nC,t=(e,t)=>"dark"===d()?t:e;return 796>is()?c`
        flex-direction: column;
        background-color: ${t(e.gray[300],e.gray[600])};
      `:c`
      flex-direction: row;
      background-color: ${t(e.gray[200],e.darkGray[900])};
    `})(),{[c`
            min-width: min-content;
          `]:700>is()&&("right"===h()||"left"===h())},"tsqd-main-panel"),l="bottom"===h()||"top"===h()?`${e.localStore.height||500}px`:"auto",s="right"===h()||"left"===h()?`${e.localStore.width||500}px`:"auto",p="top"===h()||"bottom"===h()?"horizontal":"vertical",g="top"===h()||"bottom"===h()?(0,o.convertRemToPixels)(3.5):(0,o.convertRemToPixels)(12),f="top"===h()||"bottom"===h()?Number(e.localStore.height||500):Number(e.localStore.width||500),m=O(u().dragHandle,u()[`dragHandle-position-${h()}`],"tsqd-drag-handle"),y=O(u().closeBtn,u()[`closeBtn-position-${h()}`],"tsqd-minimize-btn");return a!==i.e&&(0,o.className)(t,i.e=a),l!==i.t&&(null!=(i.t=l)?t.style.setProperty("height",l):t.style.removeProperty("height")),s!==i.a&&(null!=(i.a=s)?t.style.setProperty("width",s):t.style.removeProperty("width")),p!==i.o&&(0,o.setAttribute)(r,"aria-orientation",i.o=p),g!==i.i&&(0,o.setAttribute)(r,"aria-valuemin",i.i=g),f!==i.n&&(0,o.setAttribute)(r,"aria-valuenow",i.n=f),m!==i.s&&(0,o.className)(r,i.s=m),y!==i.h&&(0,o.className)(n,i.h=y),i},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),t},ih=e=>{var t,r,n,i,a,l,s,d,c,u,p,g,m,b,v,x,k,S;let E;iS(),iM();let M=C(),q=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,A=(0,o.createMemo)(()=>"dark"===M()?iL(q):iP(q)),F=w(),[P,L]=(0,o.createSignal)("queries"),T=(0,o.createMemo)(()=>e.localStore.sort||f),D=(0,o.createMemo)(()=>Number(e.localStore.sortOrder)||1),z=(0,o.createMemo)(()=>e.localStore.mutationSort||h),R=(0,o.createMemo)(()=>Number(e.localStore.mutationSortOrder)||1),K=(0,o.createMemo)(()=>o.sortFns[T()]),N=(0,o.createMemo)(()=>o.mutationSortFns[z()]),B=(0,o.createMemo)(()=>y().onlineManager),U=(0,o.createMemo)(()=>y().client.getQueryCache()),G=(0,o.createMemo)(()=>y().client.getMutationCache()),V=i$(e=>e().getAll().length,!1),j=(0,o.createMemo)((0,o.on)(()=>[V(),e.localStore.filter,T(),D(),e.localStore.hideDisabledQueries],()=>{let t=U().getAll(),r=e.localStore.filter?t.filter(t=>$(t.queryHash,e.localStore.filter||"").passed):[...t];return"true"===e.localStore.hideDisabledQueries&&(r=r.filter(e=>!e.isDisabled())),K()?r.sort((e,t)=>K()(e,t)*D()):r})),Q=iq(e=>e().getAll().length,!1),W=(0,o.createMemo)((0,o.on)(()=>[Q(),e.localStore.mutationFilter,z(),R()],()=>{let t=G().getAll(),r=e.localStore.mutationFilter?t.filter(t=>$(`${t.options.mutationKey?JSON.stringify(t.options.mutationKey)+" - ":""}${new Date(t.state.submittedAt).toLocaleString()}`,e.localStore.mutationFilter||"").passed):[...t];return N()?r.sort((e,t)=>N()(e,t)*R()):r})),_=e=>{let t=getComputedStyle(E).getPropertyValue("--tsqd-font-size");e.style.setProperty("--tsqd-font-size",t)};return[(s=(l=(a=(i=(n=(r=(t=oY()).firstChild).firstChild).firstChild).firstChild).nextSibling).firstChild,p=(u=(c=(d=r.nextSibling).firstChild).firstChild).firstChild,m=(g=u.nextSibling).nextSibling,x=(v=(b=c.nextSibling).firstChild).nextSibling,"function"==typeof(k=E)?(0,o.use)(k,t):E=t,i.$$click=()=>{F().pipWindow||e.showPanelViewOnly?e.onClose&&e.onClose():e.setLocalStore("open","false")},(0,o.insert)(l,()=>y().queryFlavor,s),(0,o.insert)(l,()=>y().version,null),(0,o.insert)(n,(0,o.createComponent)(rh.Root,{get class(){return O(A().viewToggle)},get value(){return P()},"aria-label":"Toggle between queries and mutations view",onChange:e=>{L(e),ii(null),il(null)},get children(){return[(0,o.createComponent)(rh.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[(0,o.createComponent)(rh.ItemInput,{}),(0,o.createComponent)(rh.ItemControl,{get children(){return(0,o.createComponent)(rh.ItemIndicator,{})}}),(0,o.createComponent)(rh.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),(0,o.createComponent)(rh.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[(0,o.createComponent)(rh.ItemInput,{}),(0,o.createComponent)(rh.ItemControl,{get children(){return(0,o.createComponent)(rh.ItemIndicator,{})}}),(0,o.createComponent)(rh.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),(0,o.insert)(r,(0,o.createComponent)(o.Show,{get when(){return"queries"===P()},get children(){return(0,o.createComponent)(ib,{})}}),null),(0,o.insert)(r,(0,o.createComponent)(o.Show,{get when(){return"mutations"===P()},get children(){return(0,o.createComponent)(iv,{})}}),null),(0,o.insert)(u,(0,o.createComponent)(nj,{}),p),p.$$input=t=>{"queries"===P()?e.setLocalStore("filter",t.currentTarget.value):e.setLocalStore("mutationFilter",t.currentTarget.value)},(0,o.insert)(g,(0,o.createComponent)(o.Show,{get when(){return"queries"===P()},get children(){var X=oL();return X.addEventListener("change",t=>{e.setLocalStore("sort",t.currentTarget.value)}),(0,o.insert)(X,()=>Object.keys(o.sortFns).map(e=>{var t;return(t=oJ()).firstChild,t.value=e,(0,o.insert)(t,e,null),t})),(0,o.createRenderEffect)(()=>X.value=T()),X}}),null),(0,o.insert)(g,(0,o.createComponent)(o.Show,{get when(){return"mutations"===P()},get children(){var Z=oT();return Z.addEventListener("change",t=>{e.setLocalStore("mutationSort",t.currentTarget.value)}),(0,o.insert)(Z,()=>Object.keys(o.mutationSortFns).map(e=>{var t;return(t=oJ()).firstChild,t.value=e,(0,o.insert)(t,e,null),t})),(0,o.createRenderEffect)(()=>Z.value=z()),Z}}),null),(0,o.insert)(g,(0,o.createComponent)(nW,{}),null),m.$$click=()=>{"queries"===P()?e.setLocalStore("sortOrder",String(-1*D())):e.setLocalStore("mutationSortOrder",String(-1*R()))},(0,o.insert)(m,(0,o.createComponent)(o.Show,{get when(){return("queries"===P()?D():R())===1},get children(){return[oD(),(0,o.createComponent)(n_,{})]}}),null),(0,o.insert)(m,(0,o.createComponent)(o.Show,{get when(){return("queries"===P()?D():R())===-1},get children(){return[oz(),(0,o.createComponent)(nX,{})]}}),null),v.$$click=()=>{"queries"===P()?(iA({type:"CLEAR_QUERY_CACHE"}),U().clear()):(iA({type:"CLEAR_MUTATION_CACHE"}),G().clear())},(0,o.insert)(v,(0,o.createComponent)(nQ,{})),x.$$click=()=>{B().setOnline(!B().isOnline())},(0,o.insert)(x,(S=(0,o.memo)(()=>!!ic()),()=>S()?(0,o.createComponent)(n5,{}):(0,o.createComponent)(n2,{}))),(0,o.insert)(b,(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>!F().pipWindow)()&&!F().disabled},get children(){var Y=oI();return Y.$$click=()=>{F().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},(0,o.insert)(Y,(0,o.createComponent)(n4,{})),(0,o.createRenderEffect)(()=>(0,o.className)(Y,O(A().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),Y}}),null),(0,o.insert)(b,(0,o.createComponent)(nb.Root,{gutter:4,get children(){return[(0,o.createComponent)(nb.Trigger,{get class(){return O(A().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},"aria-label":"Open settings menu",title:"Open settings menu",get children(){return(0,o.createComponent)(n3,{})}}),(0,o.createComponent)(nb.Portal,{ref:e=>_(e),get mount(){return(0,o.memo)(()=>!!F().pipWindow)()?F().pipWindow.document.body:document.body},get children(){return(0,o.createComponent)(nb.Content,{get class(){return O(A().settingsMenu,"tsqd-settings-menu")},get children(){var J;return[(J=oO(),(0,o.createRenderEffect)(()=>(0,o.className)(J,O(A().settingsMenuHeader,"tsqd-settings-menu-header"))),J),(0,o.createComponent)(o.Show,{get when(){return!e.showPanelViewOnly},get children(){return(0,o.createComponent)(nb.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[(0,o.createComponent)(nb.SubTrigger,{get class(){return O(A().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[oR(),(0,o.createComponent)(nW,{})]}}),(0,o.createComponent)(nb.Portal,{ref:e=>_(e),get mount(){return(0,o.memo)(()=>!!F().pipWindow)()?F().pipWindow.document.body:document.body},get children(){return(0,o.createComponent)(nb.SubContent,{get class(){return O(A().settingsMenu,"tsqd-settings-submenu")},get children(){return(0,o.createComponent)(nb.RadioGroup,{"aria-label":"Position settings",get value(){return e.localStore.position},onChange:t=>{e.setLocalStore("position",t)},get children(){return[(0,o.createComponent)(nb.RadioItem,{value:"top",get class(){return O(A().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[oK(),(0,o.createComponent)(n_,{})]}}),(0,o.createComponent)(nb.RadioItem,{value:"bottom",get class(){return O(A().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[oN(),(0,o.createComponent)(nX,{})]}}),(0,o.createComponent)(nb.RadioItem,{value:"left",get class(){return O(A().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[oB(),(0,o.createComponent)(nZ,{})]}}),(0,o.createComponent)(nb.RadioItem,{value:"right",get class(){return O(A().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[oU(),(0,o.createComponent)(nY,{})]}})]}})}})}})]}})}}),(0,o.createComponent)(nb.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[(0,o.createComponent)(nb.SubTrigger,{get class(){return O(A().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[oG(),(0,o.createComponent)(nW,{})]}}),(0,o.createComponent)(nb.Portal,{ref:e=>_(e),get mount(){return(0,o.memo)(()=>!!F().pipWindow)()?F().pipWindow.document.body:document.body},get children(){return(0,o.createComponent)(nb.SubContent,{get class(){return O(A().settingsMenu,"tsqd-settings-submenu")},get children(){return(0,o.createComponent)(nb.RadioGroup,{get value(){return e.localStore.theme_preference},onChange:t=>{e.setLocalStore("theme_preference",t)},"aria-label":"Theme preference",get children(){return[(0,o.createComponent)(nb.RadioItem,{value:"light",get class(){return O(A().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[oH(),(0,o.createComponent)(nJ,{})]}}),(0,o.createComponent)(nb.RadioItem,{value:"dark",get class(){return O(A().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[oV(),(0,o.createComponent)(n0,{})]}}),(0,o.createComponent)(nb.RadioItem,{value:"system",get class(){return O(A().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[oj(),(0,o.createComponent)(n1,{})]}})]}})}})}})]}}),(0,o.createComponent)(nb.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[(0,o.createComponent)(nb.SubTrigger,{get class(){return O(A().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-disabled-queries")},get children(){return[oQ(),(0,o.createComponent)(nW,{})]}}),(0,o.createComponent)(nb.Portal,{ref:e=>_(e),get mount(){return(0,o.memo)(()=>!!F().pipWindow)()?F().pipWindow.document.body:document.body},get children(){return(0,o.createComponent)(nb.SubContent,{get class(){return O(A().settingsMenu,"tsqd-settings-submenu")},get children(){return(0,o.createComponent)(nb.RadioGroup,{get value(){return e.localStore.hideDisabledQueries},"aria-label":"Hide disabled queries setting",onChange:t=>e.setLocalStore("hideDisabledQueries",t),get children(){return[(0,o.createComponent)(nb.RadioItem,{value:"false",get class(){return O(A().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-show")},get children(){return[oW(),(0,o.createComponent)(o.Show,{get when(){return"true"!==e.localStore.hideDisabledQueries},get children(){return(0,o.createComponent)(or,{})}})]}}),(0,o.createComponent)(nb.RadioItem,{value:"true",get class(){return O(A().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-hide")},get children(){return[o_(),(0,o.createComponent)(o.Show,{get when(){return"true"===e.localStore.hideDisabledQueries},get children(){return(0,o.createComponent)(or,{})}})]}})]}})}})}})]}})]}})}})]}}),null),(0,o.insert)(t,(0,o.createComponent)(o.Show,{get when(){return"queries"===P()},get children(){var ee=oX(),et=ee.firstChild;return(0,o.insert)(et,(0,o.createComponent)(H,{by:e=>e.queryHash,get each(){return j()},children:e=>(0,o.createComponent)(im,{get query(){return e()}})})),(0,o.createRenderEffect)(()=>(0,o.className)(ee,O(A().overflowQueryContainer,"tsqd-queries-overflow-container"))),ee}}),null),(0,o.insert)(t,(0,o.createComponent)(o.Show,{get when(){return"mutations"===P()},get children(){var er=oZ(),en=er.firstChild;return(0,o.insert)(en,(0,o.createComponent)(H,{by:e=>e.mutationId,get each(){return W()},children:e=>(0,o.createComponent)(iy,{get mutation(){return e()}})})),(0,o.createRenderEffect)(()=>(0,o.className)(er,O(A().overflowQueryContainer,"tsqd-mutations-overflow-container"))),er}}),null),(0,o.createRenderEffect)(e=>{var s=O(A().queriesContainer,796>is()&&(io()||ia())&&q`
              height: 50%;
              max-height: 50%;
            `,796>is()&&!(io()||ia())&&q`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),f=O(A().row,"tsqd-header"),h=A().logoAndToggleContainer,y=O(A().logo,"tsqd-text-logo-container"),w=O(A().tanstackLogo,"tsqd-text-logo-tanstack"),C=O(A().queryFlavorLogo,"tsqd-text-logo-query-flavor"),k=O(A().row,"tsqd-filters-actions-container"),S=O(A().filtersContainer,"tsqd-filters-container"),$=O(A().filterInput,"tsqd-query-filter-textfield-container"),E=O("tsqd-query-filter-textfield"),M=O(A().filterSelect,"tsqd-query-filter-sort-container"),F=`Sort order ${("queries"===P()?D():R())===-1?"descending":"ascending"}`,L=("queries"===P()?D():R())===-1,T=O(A().actionsContainer,"tsqd-actions-container"),z=O(A().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),I=`Clear ${P()} cache`,K=O(A().actionsBtn,ic()&&A().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),N=`${ic()?"Unset offline mocking behavior":"Mock offline behavior"}`,B=ic(),U=`${ic()?"Unset offline mocking behavior":"Mock offline behavior"}`;return s!==e.e&&(0,o.className)(t,e.e=s),f!==e.t&&(0,o.className)(r,e.t=f),h!==e.a&&(0,o.className)(n,e.a=h),y!==e.o&&(0,o.className)(i,e.o=y),w!==e.i&&(0,o.className)(a,e.i=w),C!==e.n&&(0,o.className)(l,e.n=C),k!==e.s&&(0,o.className)(d,e.s=k),S!==e.h&&(0,o.className)(c,e.h=S),$!==e.r&&(0,o.className)(u,e.r=$),E!==e.d&&(0,o.className)(p,e.d=E),M!==e.l&&(0,o.className)(g,e.l=M),F!==e.u&&(0,o.setAttribute)(m,"aria-label",e.u=F),L!==e.c&&(0,o.setAttribute)(m,"aria-pressed",e.c=L),T!==e.w&&(0,o.className)(b,e.w=T),z!==e.m&&(0,o.className)(v,e.m=z),I!==e.f&&(0,o.setAttribute)(v,"title",e.f=I),K!==e.y&&(0,o.className)(x,e.y=K),N!==e.g&&(0,o.setAttribute)(x,"aria-label",e.g=N),B!==e.p&&(0,o.setAttribute)(x,"aria-pressed",e.p=B),U!==e.b&&(0,o.setAttribute)(x,"title",e.b=U),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),(0,o.createRenderEffect)(()=>p.value="queries"===P()?e.localStore.filter||"":e.localStore.mutationFilter||""),t),(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>"queries"===P())()&&io()},get children(){return(0,o.createComponent)(ix,{})}}),(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>"mutations"===P())()&&ia()},get children(){return(0,o.createComponent)(iC,{})}})]},im=e=>{let t=C(),r=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,n=(0,o.createMemo)(()=>"dark"===t()?iL(r):iP(r)),{colors:i,alpha:a}=nC,l=(e,r)=>"dark"===t()?r:e,s=i$(t=>t().find({queryKey:e.query.queryKey})?.state,!0,t=>t.query.queryHash===e.query.queryHash),d=i$(t=>t().find({queryKey:e.query.queryKey})?.isDisabled()??!1,!0,t=>t.query.queryHash===e.query.queryHash),c=i$(t=>t().find({queryKey:e.query.queryKey})?.isStatic()??!1,!0,t=>t.query.queryHash===e.query.queryHash),u=i$(t=>t().find({queryKey:e.query.queryKey})?.isStale()??!1,!0,t=>t.query.queryHash===e.query.queryHash),p=i$(t=>t().find({queryKey:e.query.queryKey})?.getObserversCount()??0,!0,t=>t.query.queryHash===e.query.queryHash),g=(0,o.createMemo)(()=>(0,o.getQueryStatusColor)({queryState:s(),observerCount:p(),isStale:u()}));return(0,o.createComponent)(o.Show,{get when(){return s()},get children(){var f=o2(),h=f.firstChild,m=h.nextSibling;return f.$$click=()=>ii(e.query.queryHash===io()?null:e.query.queryHash),(0,o.insert)(h,p),(0,o.insert)(m,()=>e.query.queryHash),(0,o.insert)(f,(0,o.createComponent)(o.Show,{get when(){return d()},get children(){return o0()}}),null),(0,o.insert)(f,(0,o.createComponent)(o.Show,{get when(){return c()},get children(){return o1()}}),null),(0,o.createRenderEffect)(t=>{var s=O(n().queryRow,io()===e.query.queryHash&&n().selectedQueryRow,"tsqd-query-row"),u=`Query key ${e.query.queryHash}${d()?", disabled":""}${c()?", static":""}`,p=O("gray"===g()?r`
        background-color: ${l(i[g()][200],i[g()][700])};
        color: ${l(i[g()][700],i[g()][300])};
      `:r`
      background-color: ${l(i[g()][200]+a[80],i[g()][900])};
      color: ${l(i[g()][800],i[g()][300])};
    `,"tsqd-query-observer-count");return s!==t.e&&(0,o.className)(f,t.e=s),u!==t.t&&(0,o.setAttribute)(f,"aria-label",t.t=u),p!==t.a&&(0,o.className)(h,t.a=p),t},{e:void 0,t:void 0,a:void 0}),f}})},iy=e=>{let t=C(),r=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,n=(0,o.createMemo)(()=>"dark"===t()?iL(r):iP(r)),{colors:i,alpha:a}=nC,l=(e,r)=>"dark"===t()?r:e,s=iq(t=>{let r=t().getAll().find(t=>t.mutationId===e.mutation.mutationId);return r?.state}),d=iq(t=>{let r=t().getAll().find(t=>t.mutationId===e.mutation.mutationId);return!!r&&r.state.isPaused}),c=iq(t=>{let r=t().getAll().find(t=>t.mutationId===e.mutation.mutationId);return r?r.state.status:"idle"}),u=(0,o.createMemo)(()=>(0,o.getMutationStatusColor)({isPaused:d(),status:c()}));return(0,o.createComponent)(o.Show,{get when(){return s()},get children(){var p=o2(),g=p.firstChild,f=g.nextSibling;return p.$$click=()=>{il(e.mutation.mutationId===ia()?null:e.mutation.mutationId)},(0,o.insert)(g,(0,o.createComponent)(o.Show,{get when(){return"purple"===u()},get children(){return(0,o.createComponent)(oi,{})}}),null),(0,o.insert)(g,(0,o.createComponent)(o.Show,{get when(){return"green"===u()},get children(){return(0,o.createComponent)(or,{})}}),null),(0,o.insert)(g,(0,o.createComponent)(o.Show,{get when(){return"red"===u()},get children(){return(0,o.createComponent)(oo,{})}}),null),(0,o.insert)(g,(0,o.createComponent)(o.Show,{get when(){return"yellow"===u()},get children(){return(0,o.createComponent)(on,{})}}),null),(0,o.insert)(f,(0,o.createComponent)(o.Show,{get when(){return e.mutation.options.mutationKey},get children(){return[(0,o.memo)(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),(0,o.insert)(f,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),(0,o.createRenderEffect)(t=>{var s=O(n().queryRow,ia()===e.mutation.mutationId&&n().selectedQueryRow,"tsqd-query-row"),d=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,c=O("gray"===u()?r`
        background-color: ${l(i[u()][200],i[u()][700])};
        color: ${l(i[u()][700],i[u()][300])};
      `:r`
      background-color: ${l(i[u()][200]+a[80],i[u()][900])};
      color: ${l(i[u()][800],i[u()][300])};
    `,"tsqd-query-observer-count");return s!==t.e&&(0,o.className)(p,t.e=s),d!==t.t&&(0,o.setAttribute)(p,"aria-label",t.t=d),c!==t.a&&(0,o.className)(g,t.a=c),t},{e:void 0,t:void 0,a:void 0}),p}})},ib=()=>{var e;let t=i$(e=>e().getAll().filter(e=>"stale"===(0,o.getQueryStatusLabel)(e)).length),r=i$(e=>e().getAll().filter(e=>"fresh"===(0,o.getQueryStatusLabel)(e)).length),n=i$(e=>e().getAll().filter(e=>"fetching"===(0,o.getQueryStatusLabel)(e)).length),i=i$(e=>e().getAll().filter(e=>"paused"===(0,o.getQueryStatusLabel)(e)).length),a=i$(e=>e().getAll().filter(e=>"inactive"===(0,o.getQueryStatusLabel)(e)).length),l=C(),s=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,d=(0,o.createMemo)(()=>"dark"===l()?iL(s):iP(s));return e=oF(),(0,o.insert)(e,(0,o.createComponent)(iw,{label:"Fresh",color:"green",get count(){return r()}}),null),(0,o.insert)(e,(0,o.createComponent)(iw,{label:"Fetching",color:"blue",get count(){return n()}}),null),(0,o.insert)(e,(0,o.createComponent)(iw,{label:"Paused",color:"purple",get count(){return i()}}),null),(0,o.insert)(e,(0,o.createComponent)(iw,{label:"Stale",color:"yellow",get count(){return t()}}),null),(0,o.insert)(e,(0,o.createComponent)(iw,{label:"Inactive",color:"gray",get count(){return a()}}),null),(0,o.createRenderEffect)(()=>(0,o.className)(e,O(d().queryStatusContainer,"tsqd-query-status-container"))),e},iv=()=>{var e;let t=iq(e=>e().getAll().filter(e=>"green"===(0,o.getMutationStatusColor)({isPaused:e.state.isPaused,status:e.state.status})).length),r=iq(e=>e().getAll().filter(e=>"yellow"===(0,o.getMutationStatusColor)({isPaused:e.state.isPaused,status:e.state.status})).length),n=iq(e=>e().getAll().filter(e=>"purple"===(0,o.getMutationStatusColor)({isPaused:e.state.isPaused,status:e.state.status})).length),i=iq(e=>e().getAll().filter(e=>"red"===(0,o.getMutationStatusColor)({isPaused:e.state.isPaused,status:e.state.status})).length),a=C(),l=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,s=(0,o.createMemo)(()=>"dark"===a()?iL(l):iP(l));return e=oF(),(0,o.insert)(e,(0,o.createComponent)(iw,{label:"Paused",color:"purple",get count(){return n()}}),null),(0,o.insert)(e,(0,o.createComponent)(iw,{label:"Pending",color:"yellow",get count(){return r()}}),null),(0,o.insert)(e,(0,o.createComponent)(iw,{label:"Success",color:"green",get count(){return t()}}),null),(0,o.insert)(e,(0,o.createComponent)(iw,{label:"Error",color:"red",get count(){return i()}}),null),(0,o.createRenderEffect)(()=>(0,o.className)(e,O(s().queryStatusContainer,"tsqd-query-status-container"))),e},iw=e=>{var t,r,n,i;let a,l=C(),s=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,d=(0,o.createMemo)(()=>"dark"===l()?iL(s):iP(s)),{colors:c,alpha:u}=nC,p=(e,t)=>"dark"===l()?t:e,[g,f]=(0,o.createSignal)(!1),[h,m]=(0,o.createSignal)(!1),b=(0,o.createMemo)(()=>!(io()&&1024>is()&&is()>796||796>is()));return n=(r=(t=o4()).firstChild).nextSibling,"function"==typeof(i=a)?(0,o.use)(i,t):a=t,t.addEventListener("mouseleave",()=>{f(!1),m(!1)}),t.addEventListener("mouseenter",()=>f(!0)),t.addEventListener("blur",()=>m(!1)),t.addEventListener("focus",()=>m(!0)),(0,o.spread)(t,(0,o.mergeProps)({get disabled(){return b()},get"aria-label"(){return`${e.label}: ${e.count}`},get class(){return O(d().queryStatusTag,!b()&&s`
            cursor: pointer;
            &:hover {
              background: ${p(c.gray[200],c.darkGray[400])}${u[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>g()||h()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),(0,o.insert)(t,(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>!b())()&&(g()||h())},get children(){var v=o5();return(0,o.insert)(v,()=>e.label),(0,o.createRenderEffect)(()=>(0,o.className)(v,O(d().statusTooltip,"tsqd-query-status-tooltip"))),v}}),r),(0,o.insert)(t,(0,o.createComponent)(o.Show,{get when(){return b()},get children(){var w=o3();return(0,o.insert)(w,()=>e.label),(0,o.createRenderEffect)(()=>(0,o.className)(w,O(d().queryStatusTagLabel,"tsqd-query-status-tag-label"))),w}}),n),(0,o.insert)(n,()=>e.count),(0,o.createRenderEffect)(t=>{var i=O(s`
            width: ${nC.size[1.5]};
            height: ${nC.size[1.5]};
            border-radius: ${nC.border.radius.full};
            background-color: ${nC.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),a=O(d().queryStatusCount,e.count>0&&"gray"!==e.color&&s`
              background-color: ${p(c[e.color][100],c[e.color][900])};
              color: ${p(c[e.color][700],c[e.color][300])};
            `,"tsqd-query-status-tag-count");return i!==t.e&&(0,o.className)(r,t.e=i),a!==t.t&&(0,o.className)(n,t.t=a),t},{e:void 0,t:void 0}),t},ix=()=>{let e=C(),t=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,r=(0,o.createMemo)(()=>"dark"===e()?iL(t):iP(t)),{colors:n}=nC,i=(t,r)=>"dark"===e()?r:t,a=y().client,[l,s]=(0,o.createSignal)(!1),[d,c]=(0,o.createSignal)("view"),[u,p]=(0,o.createSignal)(!1),g=(0,o.createMemo)(()=>y().errorTypes||[]),f=i$(e=>e().getAll().find(e=>e.queryHash===io()),!1),h=i$(e=>e().getAll().find(e=>e.queryHash===io()),!1),m=i$(e=>e().getAll().find(e=>e.queryHash===io())?.state,!1),b=i$(e=>e().getAll().find(e=>e.queryHash===io())?.state.data,!1),v=i$(e=>{let t=e().getAll().find(e=>e.queryHash===io());return t?(0,o.getQueryStatusLabel)(t):"inactive"}),w=i$(e=>{let t=e().getAll().find(e=>e.queryHash===io());return t?t.state.status:"pending"}),x=i$(e=>e().getAll().find(e=>e.queryHash===io())?.getObserversCount()??0),k=(0,o.createMemo)(()=>(0,o.getQueryStatusColorByLabel)(v())),S=()=>{iA({type:"REFETCH",queryHash:f()?.queryHash});let e=f()?.fetch();e?.catch(()=>{})},$=e=>{let t=f();if(!t)return;iA({type:"TRIGGER_ERROR",queryHash:t.queryHash,metadata:{error:e?.name}});let r=e?.initializer(t)??Error("Unknown error from devtools"),n=t.options;t.setState({data:void 0,status:"error",error:r,fetchMeta:{...t.state.fetchMeta,__previousQueryOptions:n}})};return(0,o.createEffect)(()=>{"fetching"!==v()&&s(!1)}),(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>!!f())()&&m()},get children(){var E=ie(),M=E.firstChild,q=M.nextSibling,A=q.firstChild,F=A.firstChild,P=F.firstChild,L=F.nextSibling,T=A.nextSibling,D=T.firstChild.nextSibling,z=T.nextSibling.firstChild.nextSibling,R=q.nextSibling,K=R.nextSibling,N=K.firstChild,B=N.firstChild,U=N.nextSibling,G=U.firstChild,H=U.nextSibling,V=H.firstChild,j=H.nextSibling,Q=j.firstChild,W=j.nextSibling,_=W.firstChild,X=_.nextSibling,Z=K.nextSibling;Z.firstChild;var Y=Z.nextSibling,J=Y.nextSibling;return(0,o.insert)(P,()=>(0,o.displayValue)(f().queryKey,!0)),(0,o.insert)(L,v),(0,o.insert)(D,x),(0,o.insert)(z,()=>new Date(m().dataUpdatedAt).toLocaleTimeString()),N.$$click=S,U.$$click=()=>{iA({type:"INVALIDATE",queryHash:f()?.queryHash}),a.invalidateQueries(f())},H.$$click=()=>{iA({type:"RESET",queryHash:f()?.queryHash}),a.resetQueries(f())},j.$$click=()=>{iA({type:"REMOVE",queryHash:f()?.queryHash}),a.removeQueries(f()),ii(null)},W.$$click=()=>{if(f()?.state.data===void 0)s(!0),(()=>{let e=f();if(!e)return;iA({type:"RESTORE_LOADING",queryHash:e.queryHash});let t=e.state,r=e.state.fetchMeta?e.state.fetchMeta.__previousQueryOptions:null;e.cancel({silent:!0}),e.setState({...t,fetchStatus:"idle",fetchMeta:null}),r&&e.fetch(r)})();else{let e=f();if(!e)return;iA({type:"TRIGGER_LOADING",queryHash:e.queryHash});let t=e.options;e.fetch({...t,queryFn:()=>new Promise(()=>{}),gcTime:-1}),e.setState({data:void 0,status:"pending",fetchMeta:{...e.state.fetchMeta,__previousQueryOptions:t}})}},(0,o.insert)(W,()=>"pending"===w()?"Restore":"Trigger",X),(0,o.insert)(K,(0,o.createComponent)(o.Show,{get when(){return 0===g().length||"error"===w()},get children(){var ee=o6(),et=ee.firstChild,er=et.nextSibling;return ee.$$click=()=>{f().state.error?(iA({type:"RESTORE_ERROR",queryHash:f()?.queryHash}),a.resetQueries(f())):$()},(0,o.insert)(ee,()=>"error"===w()?"Restore":"Trigger",er),(0,o.createRenderEffect)(e=>{var r=O(t`
                  color: ${i(n.red[500],n.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),a="pending"===w(),l=t`
                  background-color: ${i(n.red[500],n.red[400])};
                `;return r!==e.e&&(0,o.className)(ee,e.e=r),a!==e.t&&(ee.disabled=e.t=a),l!==e.a&&(0,o.className)(et,e.a=l),e},{e:void 0,t:void 0,a:void 0}),ee}}),null),(0,o.insert)(K,(0,o.createComponent)(o.Show,{get when(){return 0!==g().length&&"error"!==w()},get children(){var en=o9(),eo=en.firstChild,ei=eo.nextSibling.nextSibling;return ei.firstChild,ei.addEventListener("change",e=>{$(g().find(t=>t.name===e.currentTarget.value))}),(0,o.insert)(ei,(0,o.createComponent)(o.For,{get each(){return g()},children:e=>{var t;return t=it(),(0,o.insert)(t,()=>e.name),(0,o.createRenderEffect)(()=>t.value=e.name),t}}),null),(0,o.insert)(en,(0,o.createComponent)(nW,{}),null),(0,o.createRenderEffect)(e=>{var n=O(r().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),i=t`
                  background-color: ${nC.colors.red[400]};
                `,a="pending"===w();return n!==e.e&&(0,o.className)(en,e.e=n),i!==e.t&&(0,o.className)(eo,e.t=i),a!==e.a&&(ei.disabled=e.a=a),e},{e:void 0,t:void 0,a:void 0}),en}}),null),(0,o.insert)(Z,()=>"view"===d()?"Explorer":"Editor",null),(0,o.insert)(E,(0,o.createComponent)(o.Show,{get when(){return"view"===d()},get children(){var ea=o8();return(0,o.insert)(ea,(0,o.createComponent)(o$,{label:"Data",defaultExpanded:["Data"],get value(){return b()},editable:!0,onEdit:()=>c("edit"),get activeQuery(){return f()}})),(0,o.createRenderEffect)(e=>null!=(e=nC.size[2])?ea.style.setProperty("padding",e):ea.style.removeProperty("padding")),ea}}),Y),(0,o.insert)(E,(0,o.createComponent)(o.Show,{get when(){return"edit"===d()},get children(){var el=o7(),es=el.firstChild,ed=es.nextSibling,ec=ed.firstChild,eu=ec.nextSibling,ep=eu.firstChild,eg=ep.nextSibling;return el.addEventListener("submit",e=>{e.preventDefault();let t=new FormData(e.currentTarget).get("data");try{let e=JSON.parse(t);f().setState({...f().state,data:e}),c("view")}catch(e){p(!0)}}),es.addEventListener("focus",()=>p(!1)),(0,o.insert)(ec,()=>u()?"Invalid Value":""),ep.$$click=()=>c("view"),(0,o.createRenderEffect)(e=>{var a=O(r().devtoolsEditForm,"tsqd-query-details-data-editor"),l=r().devtoolsEditTextarea,s=u(),d=r().devtoolsEditFormActions,c=r().devtoolsEditFormError,p=r().devtoolsEditFormActionContainer,g=O(r().devtoolsEditFormAction,t`
                      color: ${i(n.gray[600],n.gray[300])};
                    `),f=O(r().devtoolsEditFormAction,t`
                      color: ${i(n.blue[600],n.blue[400])};
                    `);return a!==e.e&&(0,o.className)(el,e.e=a),l!==e.t&&(0,o.className)(es,e.t=l),s!==e.a&&(0,o.setAttribute)(es,"data-error",e.a=s),d!==e.o&&(0,o.className)(ed,e.o=d),c!==e.i&&(0,o.className)(ec,e.i=c),p!==e.n&&(0,o.className)(eu,e.n=p),g!==e.s&&(0,o.className)(ep,e.s=g),f!==e.h&&(0,o.className)(eg,e.h=f),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),(0,o.createRenderEffect)(()=>es.value=JSON.stringify(b(),null,2)),el}}),Y),(0,o.insert)(J,(0,o.createComponent)(o$,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return h()}})),(0,o.createRenderEffect)(e=>{var a=O(r().detailsContainer,"tsqd-query-details-container"),s=O(r().detailsHeader,"tsqd-query-details-header"),d=O(r().detailsBody,"tsqd-query-details-summary-container"),c=O(r().queryDetailsStatus,"gray"===k()?t`
        background-color: ${i(n[k()][200],n[k()][700])};
        color: ${i(n[k()][700],n[k()][300])};
        border-color: ${i(n[k()][400],n[k()][600])};
      `:t`
      background-color: ${i(n[k()][100],n[k()][900])};
      color: ${i(n[k()][700],n[k()][300])};
      border-color: ${i(n[k()][400],n[k()][600])};
    `),u=O(r().detailsHeader,"tsqd-query-details-header"),p=O(r().actionsBody,"tsqd-query-details-actions-container"),g=O(t`
                color: ${i(n.blue[600],n.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),f="fetching"===v(),h=t`
                background-color: ${i(n.blue[600],n.blue[400])};
              `,m=O(t`
                color: ${i(n.yellow[600],n.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),y="pending"===w(),b=t`
                background-color: ${i(n.yellow[600],n.yellow[400])};
              `,x=O(t`
                color: ${i(n.gray[600],n.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),C="pending"===w(),S=t`
                background-color: ${i(n.gray[600],n.gray[400])};
              `,$=O(t`
                color: ${i(n.pink[500],n.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),A="fetching"===v(),F=t`
                background-color: ${i(n.pink[500],n.pink[400])};
              `,P=O(t`
                color: ${i(n.cyan[500],n.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),T=l(),D=t`
                background-color: ${i(n.cyan[500],n.cyan[400])};
              `,z=O(r().detailsHeader,"tsqd-query-details-header"),I=O(r().detailsHeader,"tsqd-query-details-header"),X=nC.size[2];return a!==e.e&&(0,o.className)(E,e.e=a),s!==e.t&&(0,o.className)(M,e.t=s),d!==e.a&&(0,o.className)(q,e.a=d),c!==e.o&&(0,o.className)(L,e.o=c),u!==e.i&&(0,o.className)(R,e.i=u),p!==e.n&&(0,o.className)(K,e.n=p),g!==e.s&&(0,o.className)(N,e.s=g),f!==e.h&&(N.disabled=e.h=f),h!==e.r&&(0,o.className)(B,e.r=h),m!==e.d&&(0,o.className)(U,e.d=m),y!==e.l&&(U.disabled=e.l=y),b!==e.u&&(0,o.className)(G,e.u=b),x!==e.c&&(0,o.className)(H,e.c=x),C!==e.w&&(H.disabled=e.w=C),S!==e.m&&(0,o.className)(V,e.m=S),$!==e.f&&(0,o.className)(j,e.f=$),A!==e.y&&(j.disabled=e.y=A),F!==e.g&&(0,o.className)(Q,e.g=F),P!==e.p&&(0,o.className)(W,e.p=P),T!==e.b&&(W.disabled=e.b=T),D!==e.T&&(0,o.className)(_,e.T=D),z!==e.A&&(0,o.className)(Z,e.A=z),I!==e.O&&(0,o.className)(Y,e.O=I),X!==e.I&&(null!=(e.I=X)?J.style.setProperty("padding",X):J.style.removeProperty("padding")),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),E}})},iC=()=>{let e=C(),t=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,r=(0,o.createMemo)(()=>"dark"===e()?iL(t):iP(t)),{colors:n}=nC,i=(t,r)=>"dark"===e()?r:t,a=iq(e=>{let t=e().getAll().find(e=>e.mutationId===ia());return!!t&&t.state.isPaused}),l=iq(e=>{let t=e().getAll().find(e=>e.mutationId===ia());return t?t.state.status:"idle"}),s=(0,o.createMemo)(()=>(0,o.getMutationStatusColor)({isPaused:a(),status:l()})),d=iq(e=>e().getAll().find(e=>e.mutationId===ia()),!1);return(0,o.createComponent)(o.Show,{get when(){return d()},get children(){var c=ir(),u=c.firstChild,p=u.nextSibling,g=p.firstChild,f=g.firstChild,h=f.firstChild,m=f.nextSibling,b=g.nextSibling.firstChild.nextSibling,v=p.nextSibling,w=v.nextSibling,x=w.nextSibling,k=x.nextSibling,S=k.nextSibling,$=S.nextSibling,E=$.nextSibling,M=E.nextSibling;return(0,o.insert)(h,(0,o.createComponent)(o.Show,{get when(){return d().options.mutationKey},fallback:"No mutationKey found",get children(){return(0,o.displayValue)(d().options.mutationKey,!0)}})),(0,o.insert)(m,(0,o.createComponent)(o.Show,{get when(){return"purple"===s()},children:"pending"}),null),(0,o.insert)(m,(0,o.createComponent)(o.Show,{get when(){return"purple"!==s()},get children(){return l()}}),null),(0,o.insert)(b,()=>new Date(d().state.submittedAt).toLocaleTimeString()),(0,o.insert)(w,(0,o.createComponent)(o$,{label:"Variables",defaultExpanded:["Variables"],get value(){return d().state.variables}})),(0,o.insert)(k,(0,o.createComponent)(o$,{label:"Context",defaultExpanded:["Context"],get value(){return d().state.context}})),(0,o.insert)($,(0,o.createComponent)(o$,{label:"Data",defaultExpanded:["Data"],get value(){return d().state.data}})),(0,o.insert)(M,(0,o.createComponent)(o$,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return d()}})),(0,o.createRenderEffect)(e=>{var a=O(r().detailsContainer,"tsqd-query-details-container"),l=O(r().detailsHeader,"tsqd-query-details-header"),d=O(r().detailsBody,"tsqd-query-details-summary-container"),g=O(r().queryDetailsStatus,"gray"===s()?t`
        background-color: ${i(n[s()][200],n[s()][700])};
        color: ${i(n[s()][700],n[s()][300])};
        border-color: ${i(n[s()][400],n[s()][600])};
      `:t`
      background-color: ${i(n[s()][100],n[s()][900])};
      color: ${i(n[s()][700],n[s()][300])};
      border-color: ${i(n[s()][400],n[s()][600])};
    `),f=O(r().detailsHeader,"tsqd-query-details-header"),h=nC.size[2],y=O(r().detailsHeader,"tsqd-query-details-header"),b=nC.size[2],C=O(r().detailsHeader,"tsqd-query-details-header"),q=nC.size[2],A=O(r().detailsHeader,"tsqd-query-details-header"),F=nC.size[2];return a!==e.e&&(0,o.className)(c,e.e=a),l!==e.t&&(0,o.className)(u,e.t=l),d!==e.a&&(0,o.className)(p,e.a=d),g!==e.o&&(0,o.className)(m,e.o=g),f!==e.i&&(0,o.className)(v,e.i=f),h!==e.n&&(null!=(e.n=h)?w.style.setProperty("padding",h):w.style.removeProperty("padding")),y!==e.s&&(0,o.className)(x,e.s=y),b!==e.h&&(null!=(e.h=b)?k.style.setProperty("padding",b):k.style.removeProperty("padding")),C!==e.r&&(0,o.className)(S,e.r=C),q!==e.d&&(null!=(e.d=q)?$.style.setProperty("padding",q):$.style.removeProperty("padding")),A!==e.l&&(0,o.className)(E,e.l=A),F!==e.u&&(null!=(e.u=F)?M.style.setProperty("padding",F):M.style.removeProperty("padding")),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),c}})},ik=new Map,iS=()=>{let e=(0,o.createMemo)(()=>y().client.getQueryCache()),t=e().subscribe(t=>{(0,o.batch)(()=>{for(let[r,n]of ik.entries())n.shouldUpdate(t)&&n.setter(r(e))})});return(0,o.onCleanup)(()=>{ik.clear(),t()}),t},i$=(e,t=!0,r=()=>!0)=>{let n=(0,o.createMemo)(()=>y().client.getQueryCache()),[i,a]=(0,o.createSignal)(e(n),t?void 0:{equals:!1});return(0,o.createEffect)(()=>{a(e(n))}),ik.set(e,{setter:a,shouldUpdate:r}),(0,o.onCleanup)(()=>{ik.delete(e)}),i},iE=new Map,iM=()=>{let e=(0,o.createMemo)(()=>y().client.getMutationCache()),t=e().subscribe(()=>{for(let[t,r]of iE.entries())queueMicrotask(()=>{r(t(e))})});return(0,o.onCleanup)(()=>{iE.clear(),t()}),t},iq=(e,t=!0)=>{let r=(0,o.createMemo)(()=>y().client.getMutationCache()),[n,i]=(0,o.createSignal)(e(r),t?void 0:{equals:!1});return(0,o.createEffect)(()=>{i(e(r))}),iE.set(e,i),(0,o.onCleanup)(()=>{iE.delete(e)}),n},iA=({type:e,queryHash:t,metadata:r})=>{let n=new CustomEvent("@tanstack/query-devtools-event",{detail:{type:e,queryHash:t,metadata:r},bubbles:!0,cancelable:!0});window.dispatchEvent(n)},iF=(e,t)=>{let{colors:r,font:n,size:o,alpha:i,shadow:a,border:l}=nC,s=(t,r)=>"light"===e?t:r;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${a.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${r.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${nC.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(r.gray[300],r.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(r.gray[400],r.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${nC.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${s(r.gray[300],r.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${s(r.gray[400],r.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${s(r.gray[50],r.darkGray[700])};
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${r.blue[600]};
      }
      & svg {
        color: ${s(r.gray[600],r.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${l.radius.sm} ${l.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${l.radius.sm} ${l.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-radius: ${l.radius.sm} 0px 0px ${l.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-top: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-bottom: ${s(r.gray[400],r.darkGray[300])} 1px solid;
      border-radius: 0px ${l.radius.sm} ${l.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${s(r.gray[50],r.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${r.purple[400]}${s("",i[90])};
      }
      &:focus {
        outline: none;
        background-color: ${r.purple[400]}${s("",i[90])};
      }
      &:focus-visible {
        outline: 2px solid ${r.blue[800]};
        outline-offset: -2px;
        background-color: ${r.purple[400]}${s("",i[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${nC.size[2]} ${nC.size[2.5]};
      gap: ${nC.size[2.5]};
      border-bottom: ${s(r.gray[300],r.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${nC.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${nC.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${n.size.md};
      font-weight: ${n.weight.bold};
      line-height: ${n.lineHeight.xs};
      white-space: nowrap;
      color: ${s(r.gray[600],r.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${n.weight.semibold};
      font-size: ${n.size.xs};
      background: linear-gradient(
        to right,
        ${s("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${nC.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${nC.size[1.5]};
      box-sizing: border-box;
      height: ${nC.size[6.5]};
      background: ${s(r.gray[50],r.darkGray[500])};
      color: ${s(r.gray[700],r.gray[300])};
      border-radius: ${nC.border.radius.sm};
      font-size: ${n.size.sm};
      padding: ${nC.size[1]};
      padding-left: ${nC.size[1.5]};
      align-items: center;
      font-weight: ${n.weight.medium};
      border: ${s("1px solid "+r.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${r.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${n.size.xs};
    `,queryStatusCount:t`
      font-size: ${n.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${s(r.gray[500],r.gray[400])};
      background-color: ${s(r.gray[200],r.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${nC.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${s(r.gray[50],r.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${nC.size[2]}));
      padding: ${nC.size[.5]} ${nC.size[2]};
      border-radius: ${nC.border.radius.sm};
      font-size: ${n.size.xs};
      border: 1px solid ${s(r.gray[400],r.gray[600])};
      color: ${s(r.gray[600],r.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${s(r.gray[400],r.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${s(r.gray[100],r.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${nC.size[2]};
      & > button {
        cursor: pointer;
        padding: ${nC.size[.5]} ${nC.size[1.5]} ${nC.size[.5]}
          ${nC.size[2]};
        border-radius: ${nC.border.radius.sm};
        background-color: ${s(r.gray[100],r.darkGray[400])};
        border: 1px solid ${s(r.gray[300],r.darkGray[200])};
        color: ${s(r.gray[700],r.gray[300])};
        font-size: ${n.size.xs};
        display: flex;
        align-items: center;
        line-height: ${n.lineHeight.sm};
        gap: ${nC.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${r.blue[800]};
        }
        & svg {
          width: ${nC.size[3]};
          height: ${nC.size[3]};
          color: ${s(r.gray[500],r.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${nC.border.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${nC.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      height: min-content;
      color: ${s(r.gray[600],r.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${n.size.xs};
        width: 100%;
        background-color: ${s(r.gray[100],r.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${n.lineHeight.sm};
        color: ${s(r.gray[700],r.gray[300])};
        &::placeholder {
          color: ${s(r.gray[700],r.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,filterSelect:t`
      padding: ${nC.size[.5]} ${nC.size[2]};
      border-radius: ${nC.border.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${nC.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${s(r.gray[600],r.gray[400])};
        width: ${nC.size[2]};
        height: ${nC.size[2]};
      }
      & > select {
        appearance: none;
        color: ${s(r.gray[700],r.gray[300])};
        min-width: 100px;
        line-height: ${n.lineHeight.sm};
        font-size: ${n.size.xs};
        background-color: ${s(r.gray[100],r.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${nC.size[2]};
    `,actionsBtn:t`
      border-radius: ${nC.border.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[400])};
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      width: ${nC.size[6.5]};
      height: ${nC.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${nC.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      & svg {
        color: ${s(r.gray[700],r.gray[300])};
        width: ${nC.size[3]};
        height: ${nC.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${s(r.yellow[700],r.yellow[500])};
        fill: ${s(r.yellow[700],r.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${s(r.gray[700],r.gray[300])};
      background-color: ${s(r.gray[50],r.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${s(r.gray[200],r.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${nC.size[1]};
        user-select: none;
        min-width: ${nC.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${n.size.xs};
        font-weight: ${n.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${s(r.gray[300],r.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${n.size.xs};
        display: flex;
        align-items: center;
        min-height: ${nC.size[6]};
        flex: 1;
        padding: ${nC.size[1]} ${nC.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${s(r.gray[300],r.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${nC.size[2]};
        color: ${s(r.gray[800],r.gray[300])};
        background-color: ${s(r.gray[300],r.darkGray[600])};
        border-bottom: 1px solid ${s(r.gray[300],r.darkGray[400])};
        font-size: ${n.size.xs};
      }

      & .tsqd-query-static-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${nC.size[2]};
        color: ${s(r.teal[800],r.teal[300])};
        background-color: ${s(r.teal[100],r.teal[900])};
        border-bottom: 1px solid ${s(r.teal[300],r.teal[700])};
        font-size: ${n.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${s(r.gray[200],r.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${s(r.gray[50],r.darkGray[700])};
      color: ${s(r.gray[700],r.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${s(r.gray[200],r.darkGray[600])};
      padding: ${nC.size[1.5]} ${nC.size[2]};
      font-weight: ${n.weight.medium};
      font-size: ${n.size.xs};
      line-height: ${n.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${nC.size[1.5]} 0px ${nC.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${nC.size[2]};
        line-height: ${n.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${n.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${nC.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${n.size.xs};
        line-height: ${n.lineHeight.xs};
        max-width: 100%;
        white-space: pre-wrap;
        overflow-wrap: anywhere;
        word-break: break-word;
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${r.darkGray[200]};
      border-radius: ${nC.border.radius.sm};
      font-weight: ${n.weight.medium};
      padding: ${nC.size[1]} ${nC.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${nC.size[2]} 0px ${nC.size[2]} 0px;
      display: flex;
      gap: ${nC.size[2]};
      padding: 0px ${nC.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${n.size.xs};
        padding: ${nC.size[1]} ${nC.size[2]};
        display: flex;
        border-radius: ${nC.border.radius.sm};
        background-color: ${s(r.gray[100],r.darkGray[600])};
        border: 1px solid ${s(r.gray[300],r.darkGray[400])};
        align-items: center;
        gap: ${nC.size[2]};
        font-weight: ${n.weight.medium};
        line-height: ${n.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${l.radius.xs};
          outline: 2px solid ${r.blue[800]};
        }
        &:hover {
          background-color: ${s(r.gray[200],r.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${nC.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${n.size.xs};
      padding: ${nC.size[.5]} ${nC.size[2]};
      display: flex;
      border-radius: ${nC.border.radius.sm};
      overflow: hidden;
      background-color: ${s(r.gray[100],r.darkGray[600])};
      border: 1px solid ${s(r.gray[300],r.darkGray[400])};
      align-items: center;
      gap: ${nC.size[2]};
      font-weight: ${n.weight.medium};
      line-height: ${n.lineHeight.sm};
      color: ${s(r.red[500],r.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${nC.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${nC.colors.red[400]};
      }
      & svg {
        width: ${nC.size[2]};
        height: ${nC.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${nC.border.radius.sm};
      border: 1px solid ${s(r.gray[300],r.gray[700])};
      background-color: ${s(r.gray[50],r.darkGray[600])};
      font-size: ${n.size.xs};
      color: ${s(r.gray[700],r.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${nC.border.radius.xs};
      padding: ${nC.size[1]} ${nC.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${s(r.gray[700],r.gray[300])};
      & svg {
        color: ${s(r.gray[600],r.gray[400])};
        transform: rotate(-90deg);
        width: ${nC.size[2]};
        height: ${nC.size[2]};
      }
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${r.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${nC.size[1]} ${nC.size[1]};
      font-weight: ${n.weight.medium};
      border-bottom: 1px solid ${s(r.gray[300],r.darkGray[400])};
      color: ${s(r.gray[500],r.gray[400])};
      font-size: ${n.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${s(r.gray[700],r.gray[300])};
      font-size: ${n.size.xs};
      border-radius: ${nC.border.radius.xs};
      padding: ${nC.size[1]} ${nC.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${s(r.gray[600],r.gray[400])};
      }
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${r.blue[800]};
      }
      &[data-checked] {
        background-color: ${s(r.purple[100],r.purple[900])};
        color: ${s(r.purple[700],r.purple[300])};
        & svg {
          color: ${s(r.purple[700],r.purple[300])};
        }
        &:hover {
          background-color: ${s(r.purple[100],r.purple[900])};
        }
      }
    `,viewToggle:t`
      border-radius: ${nC.border.radius.sm};
      background-color: ${s(r.gray[200],r.darkGray[600])};
      border: 1px solid ${s(r.gray[300],r.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${n.size.xs};
      color: ${s(r.gray[700],r.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${r.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${n.lineHeight.md};
        }

        & label:hover {
          background-color: ${s(r.gray[100],r.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${s(r.gray[100],r.darkGray[400])};
        & label:hover {
          background-color: ${s(r.gray[100],r.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${nC.size[1.5]} 0 ${nC.size[2]};
        }
        border-right: 1px solid ${s(r.gray[300],r.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${nC.size[2]} 0 ${nC.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${s(r.red[200],r.red[800])};
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${n.size.xs};
      border-radius: ${l.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${s(r.gray[100],r.darkGray[800])};
      color: ${s(r.gray[900],r.gray[100])};
      border: 1px solid ${s(r.gray[200],r.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${s(r.blue[200],r.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${n.size.xs};
    `,devtoolsEditFormError:t`
      color: ${s(r.red[700],r.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${n.size.xs};
      padding: ${o[1]} ${nC.size[2]};
      display: flex;
      border-radius: ${l.radius.sm};
      background-color: ${s(r.gray[100],r.darkGray[600])};
      border: 1px solid ${s(r.gray[300],r.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${n.weight.medium};
      line-height: ${n.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${r.blue[800]};
      }
      &:hover {
        background-color: ${s(r.gray[200],r.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},iP=e=>iF("light",e),iL=e=>iF("dark",e);(0,o.delegateEvents)(["click","mousedown","keydown","input"]),e.s(["ContentView",0,ih,"Devtools",0,e=>{var t,r;let n,i=C(),a=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,l=(0,o.createMemo)(()=>"dark"===i()?iL(a):iP(a)),s=(0,o.createMemo)(()=>y().onlineManager);(0,o.onMount)(()=>{let e=s().subscribe(e=>{iu(!e)});(0,o.onCleanup)(()=>{e()})});let d=w(),c=(0,o.createMemo)(()=>y().buttonPosition||"bottom-right"),u=(0,o.createMemo)(()=>"true"===e.localStore.open||"false"!==e.localStore.open&&(y().initialIsOpen||!1)),p=(0,o.createMemo)(()=>e.localStore.position||y().position||g);(0,o.createEffect)(()=>{let t=n.parentElement,r=e.localStore.height||500,o=e.localStore.width||500,i=p();t.style.setProperty("--tsqd-panel-height",`${"top"===i?"-":""}${r}px`),t.style.setProperty("--tsqd-panel-width",`${"left"===i?"-":""}${o}px`)}),(0,o.onMount)(()=>{let e=()=>{let e=n.parentElement,t=getComputedStyle(e).fontSize;e.style.setProperty("--tsqd-font-size",t)};e(),window.addEventListener("focus",e),(0,o.onCleanup)(()=>{window.removeEventListener("focus",e)})});let f=(0,o.createMemo)(()=>e.localStore.pip_open??"false");return[(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>!!d().pipWindow)()&&"true"==f()},get children(){return(0,o.createComponent)(o.Portal,{get mount(){return d().pipWindow?.document.body},get children(){return(0,o.createComponent)(ip,{get children(){return(0,o.createComponent)(ih,e)}})}})}}),(t=oF(),"function"==typeof(r=n)?(0,o.use)(r,t):n=t,(0,o.insert)(t,(0,o.createComponent)(B,{name:"tsqd-panel-transition",get children(){return(0,o.createComponent)(o.Show,{get when(){return(0,o.memo)(()=>!!(u()&&!d().pipWindow))()&&"false"==f()},get children(){return(0,o.createComponent)(ig,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),(0,o.insert)(t,(0,o.createComponent)(B,{name:"tsqd-button-transition",get children(){return(0,o.createComponent)(o.Show,{get when(){return!u()},get children(){var h=oA(),m=h.firstChild,b=m.nextSibling;return(0,o.insert)(m,(0,o.createComponent)(oa,{})),b.$$click=()=>e.setLocalStore("open","true"),(0,o.insert)(b,(0,o.createComponent)(oa,{})),(0,o.createRenderEffect)(()=>(0,o.className)(h,O(l().devtoolsBtn,l()[`devtoolsBtn-position-${c()}`],"tsqd-open-btn-container"))),h}})}}),null),(0,o.createRenderEffect)(()=>(0,o.className)(t,O(a`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${"top"===p()||"bottom"===p()?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${"relative"===c()?"none;":"top-left"===c()?"translateX(-72px);":"top-right"===c()?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),t)]},"ParentPanel",0,e=>{var t,r;let n,i=C(),a=y().shadowDOMTarget?I.bind({target:y().shadowDOMTarget}):I,l=(0,o.createMemo)(()=>"dark"===i()?iL(a):iP(a));return(0,o.onMount)(()=>{V(n,({width:e},t)=>{t===n&&id(e)})}),t=oF(),"function"==typeof(r=n)?(0,o.use)(r,t):n=t,t.style.setProperty("--tsqd-font-size","16px"),(0,o.insert)(t,()=>e.children),(0,o.createRenderEffect)(()=>(0,o.className)(t,O(l().parentPanel,(()=>{let{colors:e}=nC,t=(e,t)=>"dark"===i()?t:e;return 796>is()?a`
        flex-direction: column;
        background-color: ${t(e.gray[300],e.gray[600])};
      `:a`
      flex-direction: row;
      background-color: ${t(e.gray[200],e.darkGray[900])};
    `})(),{[a`
            min-width: min-content;
          `]:700>is()},"tsqd-main-panel"))),t},"PiPProvider",0,e=>{let[t,r]=(0,o.createSignal)(null),n=()=>{let e=t();null!=e&&(e.close(),r(null))},i=(n,i)=>{if(null!=t())return;let a=window.open("","TSQD-Devtools-Panel",`width=${n},height=${i},popup`);if(!a)throw new b("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");a.document.head.innerHTML="",a.document.body.innerHTML="",(0,o.clearDelegatedEvents)(a.document),a.document.title="TanStack Query Devtools",a.document.body.style.margin="0",a.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),r(null)}),[...(y().shadowDOMTarget||document).styleSheets].forEach(e=>{try{let t=[...e.cssRules].map(e=>e.cssText).join(""),r=document.createElement("style"),n=e.ownerNode,o="";n&&"id"in n&&(o=n.id),o&&r.setAttribute("id",o),r.textContent=t,a.document.head.appendChild(r)}catch(r){let t=document.createElement("link");if(null==e.href)return;t.rel="stylesheet",t.type=e.type,t.media=e.media.toString(),t.href=e.href,a.document.head.appendChild(t)}}),(0,o.delegateEvents)(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],a.document),e.setLocalStore("pip_open","true"),r(a)};(0,o.createEffect)(()=>{if("true"===(e.localStore.pip_open??"false")&&!e.disabled)try{i(Number(window.innerWidth),Number(e.localStore.height||500))}catch(t){if(t instanceof b){e.setLocalStore("pip_open","false"),e.setLocalStore("open","false");return}throw t}}),(0,o.createEffect)(()=>{let e=(y().shadowDOMTarget||document).querySelector("#_goober"),r=t();if(e&&r){let t=new MutationObserver(()=>{let t=(y().shadowDOMTarget||r.document).querySelector("#_goober");t&&(t.textContent=e.textContent)});t.observe(e,{childList:!0,subtree:!0,characterDataOldValue:!0}),(0,o.onCleanup)(()=>{t.disconnect()})}});let a=(0,o.createMemo)(()=>({pipWindow:t(),requestPipWindow:i,closePipWindow:n,disabled:e.disabled??!1}));return(0,o.createComponent)(v.Provider,{value:a,get children(){return e.children}})},"QueryDevtoolsContext",0,m,"THEME_PREFERENCE",0,"system","ThemeContext",0,x,"createLocalStorage",0,function(e){let[t,r]=(0,o.createSignal)(),n=e?.throw?(e,t)=>{throw r(e instanceof Error?e:Error(t)),e}:(e,t)=>{r(e instanceof Error?e:Error(t))},i=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),a=e?.prefix?`${e.prefix}.`:"",l=new Map,s=new Proxy({},{get(t,r){let s=l.get(r);s||(s=(0,o.createSignal)(void 0,{equals:!1}),l.set(r,s)),s[0]();let d=i.reduce((e,t)=>{if(null!==e||!t)return e;try{return t.getItem(`${a}${r}`)}catch(e){return n(e,`Error reading ${a}${r} from ${t.name}`),null}},null);return null!==d&&e?.deserializer?e.deserializer(d,r,e.options):d}});return e?.sync!==!1&&(0,o.onMount)(()=>{let e=e=>{let t=!1;i.forEach(r=>{try{r!==e.storageArea&&e.key&&e.newValue!==r.getItem(e.key)&&(e.newValue?r.setItem(e.key,e.newValue):r.removeItem(e.key),t=!0)}catch(t){n(t,`Error synching api ${r.name} from storage event (${e.key}=${e.newValue})`)}}),t&&e.key&&l.get(e.key)?.[1]()};"addEventListener"in globalThis?(globalThis.addEventListener("storage",e),(0,o.onCleanup)(()=>globalThis.removeEventListener("storage",e))):(i.forEach(t=>t.addEventListener?.("storage",e)),(0,o.onCleanup)(()=>i.forEach(t=>t.removeEventListener?.("storage",e))))}),[s,(t,r,o)=>{let s=e?.serializer?e.serializer(r,t,o??e.options):r,d=`${a}${t}`;i.forEach(e=>{try{e.getItem(d)!==s&&e.setItem(d,s)}catch(r){n(r,`Error setting ${a}${t} to ${s} in ${e.name}`)}});let c=l.get(t);c&&c[1]()},{clear:()=>i.forEach(e=>{try{e.clear()}catch(t){n(t,`Error clearing ${e.name}`)}}),error:t,remove:e=>i.forEach(t=>{try{t.removeItem(`${a}${e}`)}catch(r){n(r,`Error removing ${a}${e} from ${t.name}`)}}),toJSON:()=>{let t={},r=(r,n)=>{if(!t.hasOwnProperty(r)){let o=n&&e?.deserializer?e.deserializer(n,r,e.options):n;o&&(t[r]=o)}};return i.forEach(e=>{if("function"==typeof e.getAll){let t;try{t=e.getAll()}catch(t){n(t,`Error getting all values from in ${e.name}`)}for(let e of t)r(e,t[e])}else{let o=0,i;try{for(;i=e.key(o++);)t.hasOwnProperty(i)||r(i,e.getItem(i))}catch(t){n(t,`Error getting all values from ${e.name}`)}}}),t}}]}])}]);