!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,u={f:a&&!c.call({1:2},1)?function(t){var e=a(this,t);return!!e&&e.enumerable}:c},l=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},f={}.toString,s=function(t){return f.call(t).slice(8,-1)},p="".split,d=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?p.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},h=function(t){return d(g(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},v=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},S={}.hasOwnProperty,m=function(t,e){return S.call(t,e)},b=r.document,E=y(b)&&y(b.createElement),x=!i&&!o((function(){return 7!=Object.defineProperty((t="div",E?b.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),w=Object.getOwnPropertyDescriptor,P={f:i?w:function(t,e){if(t=h(t),e=v(e,!0),x)try{return w(t,e)}catch(t){}if(m(t,e))return l(!u.f.call(t,e),t[e])}},O=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},A=Object.defineProperty,T={f:i?A:function(t,e,n){if(O(t),e=v(e,!0),O(n),x)try{return A(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},R=i?function(t,e,n){return T.f(t,e,l(1,n))}:function(t,e,n){return t[e]=n,t},L=function(t,e){try{R(r,t,e)}catch(n){r[t]=e}return e},C=r["__core-js_shared__"]||L("__core-js_shared__",{}),_=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(t){return _.call(t)});var I,j,M,U,k=C.inspectSource,N=r.WeakMap,D="function"==typeof N&&/native code/.test(k(N)),G=e((function(t){(t.exports=function(t,e){return C[t]||(C[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),V=0,H=Math.random(),F=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++V+H).toString(36)},z=G("keys"),B={},q=r.WeakMap;if(D){var $=new q,K=$.get,W=$.has,Y=$.set;I=function(t,e){return Y.call($,t,e),e},j=function(t){return K.call($,t)||{}},M=function(t){return W.call($,t)}}else{var X=z[U="state"]||(z[U]=F(U));B[X]=!0,I=function(t,e){return R(t,X,e),e},j=function(t){return m(t,X)?t[X]:{}},M=function(t){return m(t,X)}}var J,Q,Z={set:I,get:j,has:M,enforce:function(t){return M(t)?j(t):I(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=j(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},tt=e((function(t){var e=Z.get,n=Z.enforce,o=String(String).split("String");(t.exports=function(t,e,i,c){var a=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof e||m(i,"name")||R(i,"name",e),n(i).source=o.join("string"==typeof e?e:"")),t!==r?(a?!l&&t[e]&&(u=!0):delete t[e],u?t[e]=i:R(t,e,i)):u?t[e]=i:L(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||k(this)}))})),et=r,nt=function(t){return"function"==typeof t?t:void 0},rt=function(t,e){return arguments.length<2?nt(et[t])||nt(r[t]):et[t]&&et[t][e]||r[t]&&r[t][e]},ot=Math.ceil,it=Math.floor,ct=function(t){return isNaN(t=+t)?0:(t>0?it:ot)(t)},at=Math.min,ut=function(t){return t>0?at(ct(t),9007199254740991):0},lt=Math.max,ft=Math.min,st=function(t){return function(e,n,r){var o,i=h(e),c=ut(i.length),a=function(t,e){var n=ct(t);return n<0?lt(n+e,0):ft(n,e)}(r,c);if(t&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},pt={includes:st(!0),indexOf:st(!1)}.indexOf,dt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),gt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=h(t),o=0,i=[];for(n in r)!m(B,n)&&m(r,n)&&i.push(n);for(;e.length>o;)m(r,n=e[o++])&&(~pt(i,n)||i.push(n));return i}(t,dt)}},ht={f:Object.getOwnPropertySymbols},yt=rt("Reflect","ownKeys")||function(t){var e=gt.f(O(t)),n=ht.f;return n?e.concat(n(t)):e},vt=function(t,e){for(var n=yt(e),r=T.f,o=P.f,i=0;i<n.length;i++){var c=n[i];m(t,c)||r(t,c,o(e,c))}},St=/#|\.prototype\./,mt=function(t,e){var n=Et[bt(t)];return n==wt||n!=xt&&("function"==typeof e?o(e):!!e)},bt=mt.normalize=function(t){return String(t).replace(St,".").toLowerCase()},Et=mt.data={},xt=mt.NATIVE="N",wt=mt.POLYFILL="P",Pt=mt,Ot=P.f,At=function(t,e){var n,o,i,c,a,u=t.target,l=t.global,f=t.stat;if(n=l?r:f?r[u]||L(u,{}):(r[u]||{}).prototype)for(o in e){if(c=e[o],i=t.noTargetGet?(a=Ot(n,o))&&a.value:n[o],!Pt(l?o:u+(f?".":"#")+o,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;vt(c,i)}(t.sham||i&&i.sham)&&R(c,"sham",!0),tt(n,o,c,t)}},Tt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Rt=Array.isArray||function(t){return"Array"==s(t)},Lt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),Ct=Lt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,_t=G("wks"),It=r.Symbol,jt=Ct?It:It&&It.withoutSetter||F,Mt=function(t){return m(_t,t)||(Lt&&m(It,t)?_t[t]=It[t]:_t[t]=jt("Symbol."+t)),_t[t]},Ut=Mt("species"),kt=function(t,e){var n;return Rt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Rt(n.prototype)?y(n)&&null===(n=n[Ut])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Nt=[].push,Dt=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=5==t||i;return function(a,u,l,f){for(var s,p,h=Object(g(a)),y=d(h),v=function(t,e,n){if(Tt(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}(u,l,3),S=ut(y.length),m=0,b=f||kt,E=e?b(a,S):n?b(a,0):void 0;S>m;m++)if((c||m in y)&&(p=v(s=y[m],m,h),t))if(e)E[m]=p;else if(p)switch(t){case 3:return!0;case 5:return s;case 6:return m;case 2:Nt.call(E,s)}else if(o)return!1;return i?-1:r||o?o:E}},Gt={forEach:Dt(0),map:Dt(1),filter:Dt(2),some:Dt(3),every:Dt(4),find:Dt(5),findIndex:Dt(6)},Vt=rt("navigator","userAgent")||"",Ht=r.process,Ft=Ht&&Ht.versions,zt=Ft&&Ft.v8;zt?Q=(J=zt.split("."))[0]+J[1]:Vt&&(!(J=Vt.match(/Edge\/(\d+)/))||J[1]>=74)&&(J=Vt.match(/Chrome\/(\d+)/))&&(Q=J[1]);var Bt=Q&&+Q,qt=Mt("species"),$t=function(t){return Bt>=51||!o((function(){var e=[];return(e.constructor={})[qt]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},Kt=Object.defineProperty,Wt={},Yt=function(t){throw t},Xt=function(t,e){if(m(Wt,t))return Wt[t];e||(e={});var n=[][t],r=!!m(e,"ACCESSORS")&&e.ACCESSORS,c=m(e,0)?e[0]:Yt,a=m(e,1)?e[1]:void 0;return Wt[t]=!!n&&!o((function(){if(r&&!i)return!0;var t={length:-1};r?Kt(t,1,{enumerable:!0,get:Yt}):t[1]=1,n.call(t,c,a)}))},Jt=Gt.filter,Qt=$t("filter"),Zt=Xt("filter");At({target:"Array",proto:!0,forced:!Qt||!Zt},{filter:function(t){return Jt(this,t,arguments.length>1?arguments[1]:void 0)}});var te,ee,ne=Gt.forEach,re=!!(ee=[]["forEach"])&&o((function(){ee.call(null,te||function(){throw 1},1)})),oe=Xt("forEach"),ie=re&&oe?[].forEach:function(t){return ne(this,t,arguments.length>1?arguments[1]:void 0)};At({target:"Array",proto:!0,forced:[].forEach!=ie},{forEach:ie});var ce=Gt.map,ae=$t("map"),ue=Xt("map");At({target:"Array",proto:!0,forced:!ae||!ue},{map:function(t){return ce(this,t,arguments.length>1?arguments[1]:void 0)}});var le=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return O(n),function(t){if(!y(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),fe=Mt("match"),se=function(t){var e;return y(t)&&(void 0!==(e=t[fe])?!!e:"RegExp"==s(t))},pe=function(){var t=O(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function de(t,e){return RegExp(t,e)}var ge={UNSUPPORTED_Y:o((function(){var t=de("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:o((function(){var t=de("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},he=Mt("species"),ye=T.f,ve=gt.f,Se=Z.set,me=Mt("match"),be=r.RegExp,Ee=be.prototype,xe=/a/g,we=/a/g,Pe=new be(xe)!==xe,Oe=ge.UNSUPPORTED_Y;if(i&&Pt("RegExp",!Pe||Oe||o((function(){return we[me]=!1,be(xe)!=xe||be(we)==we||"/a/i"!=be(xe,"i")})))){for(var Ae=function(t,e){var n,r=this instanceof Ae,o=se(t),i=void 0===e;if(!r&&o&&t.constructor===Ae&&i)return t;Pe?o&&!i&&(t=t.source):t instanceof Ae&&(i&&(e=pe.call(t)),t=t.source),Oe&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var c,a,u,l,f,s=(c=Pe?new be(t,e):be(t,e),a=r?this:Ee,u=Ae,le&&"function"==typeof(l=a.constructor)&&l!==u&&y(f=l.prototype)&&f!==u.prototype&&le(c,f),c);return Oe&&n&&Se(s,{sticky:n}),s},Te=function(t){t in Ae||ye(Ae,t,{configurable:!0,get:function(){return be[t]},set:function(e){be[t]=e}})},Re=ve(be),Le=0;Re.length>Le;)Te(Re[Le++]);Ee.constructor=Ae,Ae.prototype=Ee,tt(r,"RegExp",Ae)}!function(t){var e=rt(t),n=T.f;i&&e&&!e[he]&&n(e,he,{configurable:!0,get:function(){return this}})}("RegExp");var Ce=RegExp.prototype.exec,_e=String.prototype.replace,Ie=Ce,je=function(){var t=/a/,e=/b*/g;return Ce.call(t,"a"),Ce.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),Me=ge.UNSUPPORTED_Y||ge.BROKEN_CARET,Ue=void 0!==/()??/.exec("")[1];(je||Ue||Me)&&(Ie=function(t){var e,n,r,o,i=this,c=Me&&i.sticky,a=pe.call(i),u=i.source,l=0,f=t;return c&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),f=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(u="(?: "+u+")",f=" "+f,l++),n=new RegExp("^(?:"+u+")",a)),Ue&&(n=new RegExp("^"+u+"$(?!\\s)",a)),je&&(e=i.lastIndex),r=Ce.call(c?n:i,f),c?r?(r.input=r.input.slice(l),r[0]=r[0].slice(l),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:je&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),Ue&&r&&r.length>1&&_e.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r});var ke=Ie;At({target:"RegExp",proto:!0,forced:/./.exec!==ke},{exec:ke});var Ne=RegExp.prototype,De=Ne.toString,Ge=o((function(){return"/a/b"!=De.call({source:"a",flags:"b"})})),Ve="toString"!=De.name;(Ge||Ve)&&tt(RegExp.prototype,"toString",(function(){var t=O(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in Ne)?pe.call(t):n)}),{unsafe:!0});var He=Mt("species"),Fe=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),ze="$0"==="a".replace(/./,"$0"),Be=Mt("replace"),qe=!!/./[Be]&&""===/./[Be]("a","$0"),$e=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),Ke=Mt("species"),We=function(t){return function(e,n){var r,o,i=String(g(e)),c=ct(n),a=i.length;return c<0||c>=a?t?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===a||(o=i.charCodeAt(c+1))<56320||o>57343?t?i.charAt(c):r:t?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},Ye={codeAt:We(!1),charAt:We(!0)}.charAt,Xe=function(t,e,n){return e+(n?Ye(t,e).length:1)},Je=function(t,e){var n=t.exec;if("function"==typeof n){var r=n.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==s(t))throw TypeError("RegExp#exec called on incompatible receiver");return ke.call(t,e)},Qe=[].push,Ze=Math.min,tn=!o((function(){return!RegExp(4294967295,"y")}));!function(t,e,n,r){var i=Mt(t),c=!o((function(){var e={};return e[i]=function(){return 7},7!=""[t](e)})),a=c&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[He]=function(){return n},n.flags="",n[i]=/./[i]),n.exec=function(){return e=!0,null},n[i](""),!e}));if(!c||!a||"replace"===t&&(!Fe||!ze||qe)||"split"===t&&!$e){var u=/./[i],l=n(i,""[t],(function(t,e,n,r,o){return e.exec===ke?c&&!o?{done:!0,value:u.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:ze,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:qe}),f=l[0],s=l[1];tt(String.prototype,t,f),tt(RegExp.prototype,i,2==e?function(t,e){return s.call(t,this,e)}:function(t){return s.call(t,this)})}r&&R(RegExp.prototype[i],"sham",!0)}("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(g(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[r];if(!se(t))return e.call(r,t,o);for(var i,c,a,u=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,s=new RegExp(t.source,l+"g");(i=ke.call(s,r))&&!((c=s.lastIndex)>f&&(u.push(r.slice(f,i.index)),i.length>1&&i.index<r.length&&Qe.apply(u,i.slice(1)),a=i[0].length,f=c,u.length>=o));)s.lastIndex===i.index&&s.lastIndex++;return f===r.length?!a&&s.test("")||u.push(""):u.push(r.slice(f)),u.length>o?u.slice(0,o):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=g(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var i=n(r,t,this,o,r!==e);if(i.done)return i.value;var c=O(t),a=String(this),u=function(t,e){var n,r=O(t).constructor;return void 0===r||null==(n=O(r)[Ke])?e:Tt(n)}(c,RegExp),l=c.unicode,f=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(tn?"y":"g"),s=new u(tn?c:"^(?:"+c.source+")",f),p=void 0===o?4294967295:o>>>0;if(0===p)return[];if(0===a.length)return null===Je(s,a)?[a]:[];for(var d=0,g=0,h=[];g<a.length;){s.lastIndex=tn?g:0;var y,v=Je(s,tn?a:a.slice(g));if(null===v||(y=Ze(ut(s.lastIndex+(tn?0:g)),a.length))===d)g=Xe(a,g,l);else{if(h.push(a.slice(d,g)),h.length===p)return h;for(var S=1;S<=v.length-1;S++)if(h.push(v[S]),h.length===p)return h;g=d=y}}return h.push(a.slice(d)),h}]}),!tn);for(var en in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var nn=r[en],rn=nn&&nn.prototype;if(rn&&rn.forEach!==ie)try{R(rn,"forEach",ie)}catch(t){rn.forEach=ie}}function on(t,e){var n=document.querySelectorAll(t);return[].filter.call(n,(function(t){return RegExp(e).test(t.textContent)}))}function cn(){null!=on("a",un)&&on("a",un).map((function(t,e,n){var r=t.closest("div[title]"),o=t.innerHTML.split(un)[2],i=function(t){return t.split(un)[3]}(t.innerHTML),c=t.innerHTML.split(un)[4];if(t.innerHTML=an(t.innerHTML),null!=r){if(r.querySelector("a[onclick]").setAttribute("onclick",""),null!=c&&r.querySelector("a[href]").setAttribute("href",c),r.setAttribute("title",an(r.getAttribute("title"))),null!=o){var a=r.getAttribute("style");r.setAttribute("style",a+"; background-color: "+o)}if(null!=i){var u=t.getAttribute("style");t.setAttribute("style",u+"; color: "+i+" !important")}r.setAttribute("display","block")}}))}function an(t){return t.split(un)[0]}var un="|||";Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),window.WaitForCalendarToLoad=function(){document.querySelectorAll(".ms-acal-item").forEach((function(t){t.style.display="none"})),LoadSodByKey("SP.UI.ApplicationPages.Calendar.js",(function(){SP.UI.ApplicationPages.DetailCalendarView.prototype.renderGrids_Old=SP.UI.ApplicationPages.DetailCalendarView.prototype.renderGrids,SP.UI.ApplicationPages.DetailCalendarView.prototype.renderGrids=function(t){this.renderGrids_Old(t),cn()},SP.UI.ApplicationPages.SummaryCalendarView.prototype.renderGrids_Old=SP.UI.ApplicationPages.SummaryCalendarView.prototype.renderGrids,SP.UI.ApplicationPages.SummaryCalendarView.prototype.renderGrids=function(t){this.renderGrids_Old(t),cn()},SP.UI.ApplicationPages.CalendarStateHandler.prototype.parentResized_Old=SP.UI.ApplicationPages.CalendarStateHandler.prototype.parentResized,SP.UI.ApplicationPages.CalendarStateHandler.prototype.parentResized=function(){this.parentResized_Old(),cn()},cn()}))},window.ColorCalendar=cn,_spBodyOnLoadFunctionNames.push("WaitForCalendarToLoad")}();
//# sourceMappingURL=bundle.js.map
