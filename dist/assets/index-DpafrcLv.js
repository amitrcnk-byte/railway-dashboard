(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function tT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var My={exports:{}},Kl={},by={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),nT=Symbol.for("react.portal"),rT=Symbol.for("react.fragment"),iT=Symbol.for("react.strict_mode"),sT=Symbol.for("react.profiler"),oT=Symbol.for("react.provider"),aT=Symbol.for("react.context"),lT=Symbol.for("react.forward_ref"),uT=Symbol.for("react.suspense"),cT=Symbol.for("react.memo"),hT=Symbol.for("react.lazy"),Kp=Symbol.iterator;function dT(t){return t===null||typeof t!="object"?null:(t=Kp&&t[Kp]||t["@@iterator"],typeof t=="function"?t:null)}var Fy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uy=Object.assign,jy={};function Qi(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Fy}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zy(){}zy.prototype=Qi.prototype;function ad(t,e,n){this.props=t,this.context=e,this.refs=jy,this.updater=n||Fy}var ld=ad.prototype=new zy;ld.constructor=ad;Uy(ld,Qi.prototype);ld.isPureReactComponent=!0;var Qp=Array.isArray,By=Object.prototype.hasOwnProperty,ud={current:null},$y={key:!0,ref:!0,__self:!0,__source:!0};function Hy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)By.call(e,r)&&!$y.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ko,type:t,key:s,ref:o,props:i,_owner:ud.current}}function fT(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function pT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yp=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?pT(""+t.key):e.toString(36)}function La(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case nT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+tc(o,0):r,Qp(i)?(n="",t!=null&&(n=t.replace(Yp,"$&/")+"/"),La(i,e,n,"",function(h){return h})):i!=null&&(cd(i)&&(i=fT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Yp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Qp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+tc(s,l);o+=La(s,e,n,u,i)}else if(u=dT(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+tc(s,l++),o+=La(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var r=[],i=0;return La(t,r,"","",function(s){return e.call(n,s,i++)}),r}function mT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Ma={transition:null},gT={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ma,ReactCurrentOwner:ud};function Wy(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!cd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Qi;Z.Fragment=rT;Z.Profiler=sT;Z.PureComponent=ad;Z.StrictMode=iT;Z.Suspense=uT;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gT;Z.act=Wy;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Uy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ud.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)By.call(e,u)&&!$y.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:ko,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:aT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:oT,_context:t},t.Consumer=t};Z.createElement=Hy;Z.createFactory=function(t){var e=Hy.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:lT,render:t}};Z.isValidElement=cd;Z.lazy=function(t){return{$$typeof:hT,_payload:{_status:-1,_result:t},_init:mT}};Z.memo=function(t,e){return{$$typeof:cT,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Ma.transition;Ma.transition={};try{t()}finally{Ma.transition=e}};Z.unstable_act=Wy;Z.useCallback=function(t,e){return at.current.useCallback(t,e)};Z.useContext=function(t){return at.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return at.current.useDeferredValue(t)};Z.useEffect=function(t,e){return at.current.useEffect(t,e)};Z.useId=function(){return at.current.useId()};Z.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return at.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};Z.useRef=function(t){return at.current.useRef(t)};Z.useState=function(t){return at.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return at.current.useTransition()};Z.version="18.3.1";by.exports=Z;var fe=by.exports;const yT=tT(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _T=fe,vT=Symbol.for("react.element"),ET=Symbol.for("react.fragment"),wT=Object.prototype.hasOwnProperty,TT=_T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IT={key:!0,ref:!0,__self:!0,__source:!0};function qy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)wT.call(e,r)&&!IT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vT,type:t,key:s,ref:o,props:i,_owner:TT.current}}Kl.Fragment=ET;Kl.jsx=qy;Kl.jsxs=qy;My.exports=Kl;var N=My.exports,Uc={},Gy={exports:{}},It={},Ky={exports:{}},Qy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,K){var X=z.length;z.push(K);e:for(;0<X;){var ye=X-1>>>1,ae=z[ye];if(0<i(ae,K))z[ye]=K,z[X]=ae,X=ye;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var K=z[0],X=z.pop();if(X!==K){z[0]=X;e:for(var ye=0,ae=z.length,Se=ae>>>1;ye<Se;){var ln=2*(ye+1)-1,un=z[ln],cn=ln+1,hn=z[cn];if(0>i(un,X))cn<ae&&0>i(hn,un)?(z[ye]=hn,z[cn]=X,ye=cn):(z[ye]=un,z[ln]=X,ye=ln);else if(cn<ae&&0>i(hn,X))z[ye]=hn,z[cn]=X,ye=cn;else break e}}return K}function i(z,K){var X=z.sortIndex-K.sortIndex;return X!==0?X:z.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,A=!1,k=!1,V=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(z){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=z)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function x(z){if(V=!1,S(z),!k)if(n(u)!==null)k=!0,os(j);else{var K=n(h);K!==null&&an(x,K.startTime-z)}}function j(z,K){k=!1,V&&(V=!1,I(y),y=-1),A=!0;var X=g;try{for(S(K),p=n(u);p!==null&&(!(p.expirationTime>K)||z&&!C());){var ye=p.callback;if(typeof ye=="function"){p.callback=null,g=p.priorityLevel;var ae=ye(p.expirationTime<=K);K=t.unstable_now(),typeof ae=="function"?p.callback=ae:p===n(u)&&r(u),S(K)}else r(u);p=n(u)}if(p!==null)var Se=!0;else{var ln=n(h);ln!==null&&an(x,ln.startTime-K),Se=!1}return Se}finally{p=null,g=X,A=!1}}var U=!1,E=null,y=-1,v=5,w=-1;function C(){return!(t.unstable_now()-w<v)}function P(){if(E!==null){var z=t.unstable_now();w=z;var K=!0;try{K=E(!0,z)}finally{K?T():(U=!1,E=null)}}else U=!1}var T;if(typeof _=="function")T=function(){_(P)};else if(typeof MessageChannel<"u"){var At=new MessageChannel,Ir=At.port2;At.port1.onmessage=P,T=function(){Ir.postMessage(null)}}else T=function(){M(P,0)};function os(z){E=z,U||(U=!0,T())}function an(z,K){y=M(function(){z(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||A||(k=!0,os(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var X=g;g=K;try{return z()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,K){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var X=g;g=z;try{return K()}finally{g=X}},t.unstable_scheduleCallback=function(z,K,X){var ye=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ye+X:ye):X=ye,z){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=X+ae,z={id:f++,callback:K,priorityLevel:z,startTime:X,expirationTime:ae,sortIndex:-1},X>ye?(z.sortIndex=X,e(h,z),n(u)===null&&z===n(h)&&(V?(I(y),y=-1):V=!0,an(x,X-ye))):(z.sortIndex=ae,e(u,z),k||A||(k=!0,os(j))),z},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(z){var K=g;return function(){var X=g;g=K;try{return z.apply(this,arguments)}finally{g=X}}}})(Qy);Ky.exports=Qy;var ST=Ky.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AT=fe,Tt=ST;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yy=new Set,eo={};function Xr(t,e){Mi(t,e),Mi(t+"Capture",e)}function Mi(t,e){for(eo[t]=e,t=0;t<e.length;t++)Yy.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=Object.prototype.hasOwnProperty,CT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xp={},Jp={};function RT(t){return jc.call(Jp,t)?!0:jc.call(Xp,t)?!1:CT.test(t)?Jp[t]=!0:(Xp[t]=!0,!1)}function PT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function kT(t,e,n,r){if(e===null||typeof e>"u"||PT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var hd=/[\-:]([a-z])/g;function dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hd,dd);He[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hd,dd);He[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hd,dd);He[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function fd(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(kT(e,n,i,r)&&(n=null),r||i===null?RT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=AT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),di=Symbol.for("react.portal"),fi=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),Xy=Symbol.for("react.provider"),Jy=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),Bc=Symbol.for("react.suspense"),$c=Symbol.for("react.suspense_list"),gd=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),Zy=Symbol.for("react.offscreen"),Zp=Symbol.iterator;function Es(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,nc;function Ps(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var rc=!1;function ic(t,e){if(!t||rc)return"";rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function NT(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=ic(t.type,!1),t;case 11:return t=ic(t.type.render,!1),t;case 1:return t=ic(t.type,!0),t;default:return""}}function Hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fi:return"Fragment";case di:return"Portal";case zc:return"Profiler";case pd:return"StrictMode";case Bc:return"Suspense";case $c:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jy:return(t.displayName||"Context")+".Consumer";case Xy:return(t._context.displayName||"Context")+".Provider";case md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gd:return e=t.displayName||null,e!==null?e:Hc(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return Hc(t(e))}catch{}}return null}function DT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hc(e);case 8:return e===pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function VT(t){var e=e_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function da(t){t._valueTracker||(t._valueTracker=VT(t))}function t_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function em(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n_(t,e){e=e.checked,e!=null&&fd(t,"checked",e,!1)}function qc(t,e){n_(t,e);var n=ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Gc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Gc(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Gc(t,e,n){(e!=="number"||rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ks=Array.isArray;function Ai(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Kc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(ks(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function r_(t,e){var n=ar(e.value),r=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fa,s_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function to(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xT=["Webkit","ms","Moz","O"];Object.keys(Fs).forEach(function(t){xT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fs[e]=Fs[t]})});function o_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fs.hasOwnProperty(t)&&Fs[t]?(""+e).trim():e+"px"}function a_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var OT=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yc(t,e){if(e){if(OT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function yd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,Ci=null,Ri=null;function im(t){if(t=Vo(t)){if(typeof Zc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Zl(e),Zc(t.stateNode,t.type,e))}}function l_(t){Ci?Ri?Ri.push(t):Ri=[t]:Ci=t}function u_(){if(Ci){var t=Ci,e=Ri;if(Ri=Ci=null,im(t),e)for(t=0;t<e.length;t++)im(e[t])}}function c_(t,e){return t(e)}function h_(){}var sc=!1;function d_(t,e,n){if(sc)return t(e,n);sc=!0;try{return c_(t,e,n)}finally{sc=!1,(Ci!==null||Ri!==null)&&(h_(),u_())}}function no(t,e){var n=t.stateNode;if(n===null)return null;var r=Zl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var eh=!1;if(Tn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){eh=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{eh=!1}function LT(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Us=!1,il=null,sl=!1,th=null,MT={onError:function(t){Us=!0,il=t}};function bT(t,e,n,r,i,s,o,l,u){Us=!1,il=null,LT.apply(MT,arguments)}function FT(t,e,n,r,i,s,o,l,u){if(bT.apply(this,arguments),Us){if(Us){var h=il;Us=!1,il=null}else throw Error(b(198));sl||(sl=!0,th=h)}}function Jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sm(t){if(Jr(t)!==t)throw Error(b(188))}function UT(t){var e=t.alternate;if(!e){if(e=Jr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return sm(i),t;if(s===r)return sm(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function p_(t){return t=UT(t),t!==null?m_(t):null}function m_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=m_(t);if(e!==null)return e;t=t.sibling}return null}var g_=Tt.unstable_scheduleCallback,om=Tt.unstable_cancelCallback,jT=Tt.unstable_shouldYield,zT=Tt.unstable_requestPaint,Ce=Tt.unstable_now,BT=Tt.unstable_getCurrentPriorityLevel,_d=Tt.unstable_ImmediatePriority,y_=Tt.unstable_UserBlockingPriority,ol=Tt.unstable_NormalPriority,$T=Tt.unstable_LowPriority,__=Tt.unstable_IdlePriority,Ql=null,Yt=null;function HT(t){if(Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:GT,WT=Math.log,qT=Math.LN2;function GT(t){return t>>>=0,t===0?32:31-(WT(t)/qT|0)|0}var pa=64,ma=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ns(l):(s&=o,s!==0&&(r=Ns(s)))}else o=n&~i,o!==0?r=Ns(o):s!==0&&(r=Ns(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-zt(e),i=1<<n,r|=t[n],e&=~i;return r}function KT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function QT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=KT(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=pa;return pa<<=1,!(pa&4194240)&&(pa=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function No(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zt(e),t[e]=n}function YT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function E_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w_,Ed,T_,I_,S_,rh=!1,ga=[],Kn=null,Qn=null,Yn=null,ro=new Map,io=new Map,Un=[],XT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function am(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vo(e),e!==null&&Ed(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function JT(t,e,n,r,i){switch(e){case"focusin":return Kn=Ts(Kn,t,e,n,r,i),!0;case"dragenter":return Qn=Ts(Qn,t,e,n,r,i),!0;case"mouseover":return Yn=Ts(Yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ro.set(s,Ts(ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,io.set(s,Ts(io.get(s)||null,t,e,n,r,i)),!0}return!1}function A_(t){var e=Dr(t.target);if(e!==null){var n=Jr(e);if(n!==null){if(e=n.tag,e===13){if(e=f_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){T_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jc=r,n.target.dispatchEvent(r),Jc=null}else return e=Vo(n),e!==null&&Ed(e),t.blockedOn=n,!1;e.shift()}return!0}function lm(t,e,n){ba(t)&&n.delete(e)}function ZT(){rh=!1,Kn!==null&&ba(Kn)&&(Kn=null),Qn!==null&&ba(Qn)&&(Qn=null),Yn!==null&&ba(Yn)&&(Yn=null),ro.forEach(lm),io.forEach(lm)}function Is(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,ZT)))}function so(t){function e(i){return Is(i,t)}if(0<ga.length){Is(ga[0],t);for(var n=1;n<ga.length;n++){var r=ga[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kn!==null&&Is(Kn,t),Qn!==null&&Is(Qn,t),Yn!==null&&Is(Yn,t),ro.forEach(e),io.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)A_(n),n.blockedOn===null&&Un.shift()}var Pi=Nn.ReactCurrentBatchConfig,ll=!0;function eI(t,e,n,r){var i=oe,s=Pi.transition;Pi.transition=null;try{oe=1,wd(t,e,n,r)}finally{oe=i,Pi.transition=s}}function tI(t,e,n,r){var i=oe,s=Pi.transition;Pi.transition=null;try{oe=4,wd(t,e,n,r)}finally{oe=i,Pi.transition=s}}function wd(t,e,n,r){if(ll){var i=ih(t,e,n,r);if(i===null)gc(t,e,r,ul,n),am(t,r);else if(JT(i,t,e,n,r))r.stopPropagation();else if(am(t,r),e&4&&-1<XT.indexOf(t)){for(;i!==null;){var s=Vo(i);if(s!==null&&w_(s),s=ih(t,e,n,r),s===null&&gc(t,e,r,ul,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gc(t,e,r,null,n)}}var ul=null;function ih(t,e,n,r){if(ul=null,t=yd(r),t=Dr(t),t!==null)if(e=Jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ul=t,null}function C_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BT()){case _d:return 1;case y_:return 4;case ol:case $T:return 16;case __:return 536870912;default:return 16}default:return 16}}var Wn=null,Td=null,Fa=null;function R_(){if(Fa)return Fa;var t,e=Td,n=e.length,r,i="value"in Wn?Wn.value:Wn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fa=i.slice(t,1<r?1-r:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ya(){return!0}function um(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ya:um,this.isPropagationStopped=um,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),e}var Yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Id=St(Yi),Do=Ee({},Yi,{view:0,detail:0}),nI=St(Do),ac,lc,Ss,Yl=Ee({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ss&&(Ss&&t.type==="mousemove"?(ac=t.screenX-Ss.screenX,lc=t.screenY-Ss.screenY):lc=ac=0,Ss=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),cm=St(Yl),rI=Ee({},Yl,{dataTransfer:0}),iI=St(rI),sI=Ee({},Do,{relatedTarget:0}),uc=St(sI),oI=Ee({},Yi,{animationName:0,elapsedTime:0,pseudoElement:0}),aI=St(oI),lI=Ee({},Yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),uI=St(lI),cI=Ee({},Yi,{data:0}),hm=St(cI),hI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=fI[t])?!!e[t]:!1}function Sd(){return pI}var mI=Ee({},Do,{key:function(t){if(t.key){var e=hI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?dI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),gI=St(mI),yI=Ee({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dm=St(yI),_I=Ee({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),vI=St(_I),EI=Ee({},Yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),wI=St(EI),TI=Ee({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),II=St(TI),SI=[9,13,27,32],Ad=Tn&&"CompositionEvent"in window,js=null;Tn&&"documentMode"in document&&(js=document.documentMode);var AI=Tn&&"TextEvent"in window&&!js,P_=Tn&&(!Ad||js&&8<js&&11>=js),fm=" ",pm=!1;function k_(t,e){switch(t){case"keyup":return SI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pi=!1;function CI(t,e){switch(t){case"compositionend":return N_(e);case"keypress":return e.which!==32?null:(pm=!0,fm);case"textInput":return t=e.data,t===fm&&pm?null:t;default:return null}}function RI(t,e){if(pi)return t==="compositionend"||!Ad&&k_(t,e)?(t=R_(),Fa=Td=Wn=null,pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return P_&&e.locale!=="ko"?null:e.data;default:return null}}var PI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PI[t.type]:e==="textarea"}function D_(t,e,n,r){l_(r),e=cl(e,"onChange"),0<e.length&&(n=new Id("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zs=null,oo=null;function kI(t){B_(t,0)}function Xl(t){var e=yi(t);if(t_(e))return t}function NI(t,e){if(t==="change")return e}var V_=!1;if(Tn){var cc;if(Tn){var hc="oninput"in document;if(!hc){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),hc=typeof gm.oninput=="function"}cc=hc}else cc=!1;V_=cc&&(!document.documentMode||9<document.documentMode)}function ym(){zs&&(zs.detachEvent("onpropertychange",x_),oo=zs=null)}function x_(t){if(t.propertyName==="value"&&Xl(oo)){var e=[];D_(e,oo,t,yd(t)),d_(kI,e)}}function DI(t,e,n){t==="focusin"?(ym(),zs=e,oo=n,zs.attachEvent("onpropertychange",x_)):t==="focusout"&&ym()}function VI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(oo)}function xI(t,e){if(t==="click")return Xl(e)}function OI(t,e){if(t==="input"||t==="change")return Xl(e)}function LI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $t=typeof Object.is=="function"?Object.is:LI;function ao(t,e){if($t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jc.call(e,i)||!$t(t[i],e[i]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vm(t,e){var n=_m(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_m(n)}}function O_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L_(){for(var t=window,e=rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=rl(t.document)}return e}function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function MI(t){var e=L_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O_(n.ownerDocument.documentElement,n)){if(r!==null&&Cd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=vm(n,s);var o=vm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bI=Tn&&"documentMode"in document&&11>=document.documentMode,mi=null,sh=null,Bs=null,oh=!1;function Em(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||mi==null||mi!==rl(r)||(r=mi,"selectionStart"in r&&Cd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bs&&ao(Bs,r)||(Bs=r,r=cl(sh,"onSelect"),0<r.length&&(e=new Id("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=mi)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gi={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},dc={},M_={};Tn&&(M_=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function Jl(t){if(dc[t])return dc[t];if(!gi[t])return t;var e=gi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M_)return dc[t]=e[n];return t}var b_=Jl("animationend"),F_=Jl("animationiteration"),U_=Jl("animationstart"),j_=Jl("transitionend"),z_=new Map,wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,e){z_.set(t,e),Xr(e,[t])}for(var fc=0;fc<wm.length;fc++){var pc=wm[fc],FI=pc.toLowerCase(),UI=pc[0].toUpperCase()+pc.slice(1);gr(FI,"on"+UI)}gr(b_,"onAnimationEnd");gr(F_,"onAnimationIteration");gr(U_,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(j_,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function Tm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,FT(r,e,void 0,t),t.currentTarget=null}function B_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Tm(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Tm(i,l,h),s=u}}}if(sl)throw t=th,sl=!1,th=null,t}function de(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||($_(e,t,2,!1),n.add(r))}function mc(t,e,n){var r=0;e&&(r|=4),$_(n,t,r,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[va]){t[va]=!0,Yy.forEach(function(n){n!=="selectionchange"&&(jI.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[va]||(e[va]=!0,mc("selectionchange",!1,e))}}function $_(t,e,n,r){switch(C_(e)){case 1:var i=eI;break;case 4:i=tI;break;default:i=wd}n=i.bind(null,e,n,t),i=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Dr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}d_(function(){var h=s,f=yd(n),p=[];e:{var g=z_.get(t);if(g!==void 0){var A=Id,k=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":A=gI;break;case"focusin":k="focus",A=uc;break;case"focusout":k="blur",A=uc;break;case"beforeblur":case"afterblur":A=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=iI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=vI;break;case b_:case F_:case U_:A=aI;break;case j_:A=wI;break;case"scroll":A=nI;break;case"wheel":A=II;break;case"copy":case"cut":case"paste":A=uI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=dm}var V=(e&4)!==0,M=!V&&t==="scroll",I=V?g!==null?g+"Capture":null:g;V=[];for(var _=h,S;_!==null;){S=_;var x=S.stateNode;if(S.tag===5&&x!==null&&(S=x,I!==null&&(x=no(_,I),x!=null&&V.push(uo(_,x,S)))),M)break;_=_.return}0<V.length&&(g=new A(g,k,null,n,f),p.push({event:g,listeners:V}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Jc&&(k=n.relatedTarget||n.fromElement)&&(Dr(k)||k[In]))break e;if((A||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,A?(k=n.relatedTarget||n.toElement,A=h,k=k?Dr(k):null,k!==null&&(M=Jr(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):(A=null,k=h),A!==k)){if(V=cm,x="onMouseLeave",I="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(V=dm,x="onPointerLeave",I="onPointerEnter",_="pointer"),M=A==null?g:yi(A),S=k==null?g:yi(k),g=new V(x,_+"leave",A,n,f),g.target=M,g.relatedTarget=S,x=null,Dr(f)===h&&(V=new V(I,_+"enter",k,n,f),V.target=S,V.relatedTarget=M,x=V),M=x,A&&k)t:{for(V=A,I=k,_=0,S=V;S;S=ai(S))_++;for(S=0,x=I;x;x=ai(x))S++;for(;0<_-S;)V=ai(V),_--;for(;0<S-_;)I=ai(I),S--;for(;_--;){if(V===I||I!==null&&V===I.alternate)break t;V=ai(V),I=ai(I)}V=null}else V=null;A!==null&&Im(p,g,A,V,!1),k!==null&&M!==null&&Im(p,M,k,V,!0)}}e:{if(g=h?yi(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var j=NI;else if(mm(g))if(V_)j=OI;else{j=VI;var U=DI}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=xI);if(j&&(j=j(t,h))){D_(p,j,n,f);break e}U&&U(t,g,h),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&Gc(g,"number",g.value)}switch(U=h?yi(h):window,t){case"focusin":(mm(U)||U.contentEditable==="true")&&(mi=U,sh=h,Bs=null);break;case"focusout":Bs=sh=mi=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,Em(p,n,f);break;case"selectionchange":if(bI)break;case"keydown":case"keyup":Em(p,n,f)}var E;if(Ad)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else pi?k_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(P_&&n.locale!=="ko"&&(pi||y!=="onCompositionStart"?y==="onCompositionEnd"&&pi&&(E=R_()):(Wn=f,Td="value"in Wn?Wn.value:Wn.textContent,pi=!0)),U=cl(h,y),0<U.length&&(y=new hm(y,t,null,n,f),p.push({event:y,listeners:U}),E?y.data=E:(E=N_(n),E!==null&&(y.data=E)))),(E=AI?CI(t,n):RI(t,n))&&(h=cl(h,"onBeforeInput"),0<h.length&&(f=new hm("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=E))}B_(p,e)})}function uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=no(t,n),s!=null&&r.unshift(uo(t,s,i)),s=no(t,e),s!=null&&r.push(uo(t,s,i))),t=t.return}return r}function ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Im(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=no(n,s),u!=null&&o.unshift(uo(n,u,l))):i||(u=no(n,s),u!=null&&o.push(uo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zI=/\r\n?/g,BI=/\u0000|\uFFFD/g;function Sm(t){return(typeof t=="string"?t:""+t).replace(zI,`
`).replace(BI,"")}function Ea(t,e,n){if(e=Sm(e),Sm(t)!==e&&n)throw Error(b(425))}function hl(){}var ah=null,lh=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,$I=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,HI=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(WI)}:ch;function WI(t){setTimeout(function(){throw t})}function yc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),so(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);so(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Xi=Math.random().toString(36).slice(2),Qt="__reactFiber$"+Xi,co="__reactProps$"+Xi,In="__reactContainer$"+Xi,hh="__reactEvents$"+Xi,qI="__reactListeners$"+Xi,GI="__reactHandles$"+Xi;function Dr(t){var e=t[Qt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[Qt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cm(t);t!==null;){if(n=t[Qt])return n;t=Cm(t)}return e}t=n,n=t.parentNode}return null}function Vo(t){return t=t[Qt]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Zl(t){return t[co]||null}var dh=[],_i=-1;function yr(t){return{current:t}}function me(t){0>_i||(t.current=dh[_i],dh[_i]=null,_i--)}function ce(t,e){_i++,dh[_i]=t.current,t.current=e}var lr={},tt=yr(lr),ft=yr(!1),Ur=lr;function bi(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function dl(){me(ft),me(tt)}function Rm(t,e,n){if(tt.current!==lr)throw Error(b(168));ce(tt,e),ce(ft,n)}function H_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,DT(t)||"Unknown",i));return Ee({},n,r)}function fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Ur=tt.current,ce(tt,t),ce(ft,ft.current),!0}function Pm(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=H_(t,e,Ur),r.__reactInternalMemoizedMergedChildContext=t,me(ft),me(tt),ce(tt,t)):me(ft),ce(ft,n)}var mn=null,eu=!1,_c=!1;function W_(t){mn===null?mn=[t]:mn.push(t)}function KI(t){eu=!0,W_(t)}function _r(){if(!_c&&mn!==null){_c=!0;var t=0,e=oe;try{var n=mn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,eu=!1}catch(i){throw mn!==null&&(mn=mn.slice(t+1)),g_(_d,_r),i}finally{oe=e,_c=!1}}return null}var vi=[],Ei=0,pl=null,ml=0,Ct=[],Rt=0,jr=null,gn=1,yn="";function Pr(t,e){vi[Ei++]=ml,vi[Ei++]=pl,pl=t,ml=e}function q_(t,e,n){Ct[Rt++]=gn,Ct[Rt++]=yn,Ct[Rt++]=jr,jr=t;var r=gn;t=yn;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var s=32-zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-zt(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function Rd(t){t.return!==null&&(Pr(t,1),q_(t,1,0))}function Pd(t){for(;t===pl;)pl=vi[--Ei],vi[Ei]=null,ml=vi[--Ei],vi[Ei]=null;for(;t===jr;)jr=Ct[--Rt],Ct[Rt]=null,yn=Ct[--Rt],Ct[Rt]=null,gn=Ct[--Rt],Ct[Rt]=null}var wt=null,vt=null,ge=!1,Ut=null;function G_(t,e){var n=Nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wt=t,vt=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wt=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wt=t,vt=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(ge){var e=vt;if(e){var n=e;if(!km(t,e)){if(fh(t))throw Error(b(418));e=Xn(n.nextSibling);var r=wt;e&&km(t,e)?G_(r,n):(t.flags=t.flags&-4097|2,ge=!1,wt=t)}}else{if(fh(t))throw Error(b(418));t.flags=t.flags&-4097|2,ge=!1,wt=t}}}function Nm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wt=t}function wa(t){if(t!==wt)return!1;if(!ge)return Nm(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=vt)){if(fh(t))throw K_(),Error(b(418));for(;e;)G_(t,e),e=Xn(e.nextSibling)}if(Nm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=wt?Xn(t.stateNode.nextSibling):null;return!0}function K_(){for(var t=vt;t;)t=Xn(t.nextSibling)}function Fi(){vt=wt=null,ge=!1}function kd(t){Ut===null?Ut=[t]:Ut.push(t)}var QI=Nn.ReactCurrentBatchConfig;function As(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Ta(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dm(t){var e=t._init;return e(t._payload)}function Q_(t){function e(I,_){if(t){var S=I.deletions;S===null?(I.deletions=[_],I.flags|=16):S.push(_)}}function n(I,_){if(!t)return null;for(;_!==null;)e(I,_),_=_.sibling;return null}function r(I,_){for(I=new Map;_!==null;)_.key!==null?I.set(_.key,_):I.set(_.index,_),_=_.sibling;return I}function i(I,_){return I=tr(I,_),I.index=0,I.sibling=null,I}function s(I,_,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<_?(I.flags|=2,_):S):(I.flags|=2,_)):(I.flags|=1048576,_)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,_,S,x){return _===null||_.tag!==6?(_=Ac(S,I.mode,x),_.return=I,_):(_=i(_,S),_.return=I,_)}function u(I,_,S,x){var j=S.type;return j===fi?f(I,_,S.props.children,x,S.key):_!==null&&(_.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&Dm(j)===_.type)?(x=i(_,S.props),x.ref=As(I,_,S),x.return=I,x):(x=qa(S.type,S.key,S.props,null,I.mode,x),x.ref=As(I,_,S),x.return=I,x)}function h(I,_,S,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Cc(S,I.mode,x),_.return=I,_):(_=i(_,S.children||[]),_.return=I,_)}function f(I,_,S,x,j){return _===null||_.tag!==7?(_=Mr(S,I.mode,x,j),_.return=I,_):(_=i(_,S),_.return=I,_)}function p(I,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ac(""+_,I.mode,S),_.return=I,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ha:return S=qa(_.type,_.key,_.props,null,I.mode,S),S.ref=As(I,null,_),S.return=I,S;case di:return _=Cc(_,I.mode,S),_.return=I,_;case bn:var x=_._init;return p(I,x(_._payload),S)}if(ks(_)||Es(_))return _=Mr(_,I.mode,S,null),_.return=I,_;Ta(I,_)}return null}function g(I,_,S,x){var j=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return j!==null?null:l(I,_,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ha:return S.key===j?u(I,_,S,x):null;case di:return S.key===j?h(I,_,S,x):null;case bn:return j=S._init,g(I,_,j(S._payload),x)}if(ks(S)||Es(S))return j!==null?null:f(I,_,S,x,null);Ta(I,S)}return null}function A(I,_,S,x,j){if(typeof x=="string"&&x!==""||typeof x=="number")return I=I.get(S)||null,l(_,I,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ha:return I=I.get(x.key===null?S:x.key)||null,u(_,I,x,j);case di:return I=I.get(x.key===null?S:x.key)||null,h(_,I,x,j);case bn:var U=x._init;return A(I,_,S,U(x._payload),j)}if(ks(x)||Es(x))return I=I.get(S)||null,f(_,I,x,j,null);Ta(_,x)}return null}function k(I,_,S,x){for(var j=null,U=null,E=_,y=_=0,v=null;E!==null&&y<S.length;y++){E.index>y?(v=E,E=null):v=E.sibling;var w=g(I,E,S[y],x);if(w===null){E===null&&(E=v);break}t&&E&&w.alternate===null&&e(I,E),_=s(w,_,y),U===null?j=w:U.sibling=w,U=w,E=v}if(y===S.length)return n(I,E),ge&&Pr(I,y),j;if(E===null){for(;y<S.length;y++)E=p(I,S[y],x),E!==null&&(_=s(E,_,y),U===null?j=E:U.sibling=E,U=E);return ge&&Pr(I,y),j}for(E=r(I,E);y<S.length;y++)v=A(E,I,y,S[y],x),v!==null&&(t&&v.alternate!==null&&E.delete(v.key===null?y:v.key),_=s(v,_,y),U===null?j=v:U.sibling=v,U=v);return t&&E.forEach(function(C){return e(I,C)}),ge&&Pr(I,y),j}function V(I,_,S,x){var j=Es(S);if(typeof j!="function")throw Error(b(150));if(S=j.call(S),S==null)throw Error(b(151));for(var U=j=null,E=_,y=_=0,v=null,w=S.next();E!==null&&!w.done;y++,w=S.next()){E.index>y?(v=E,E=null):v=E.sibling;var C=g(I,E,w.value,x);if(C===null){E===null&&(E=v);break}t&&E&&C.alternate===null&&e(I,E),_=s(C,_,y),U===null?j=C:U.sibling=C,U=C,E=v}if(w.done)return n(I,E),ge&&Pr(I,y),j;if(E===null){for(;!w.done;y++,w=S.next())w=p(I,w.value,x),w!==null&&(_=s(w,_,y),U===null?j=w:U.sibling=w,U=w);return ge&&Pr(I,y),j}for(E=r(I,E);!w.done;y++,w=S.next())w=A(E,I,y,w.value,x),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),_=s(w,_,y),U===null?j=w:U.sibling=w,U=w);return t&&E.forEach(function(P){return e(I,P)}),ge&&Pr(I,y),j}function M(I,_,S,x){if(typeof S=="object"&&S!==null&&S.type===fi&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case ha:e:{for(var j=S.key,U=_;U!==null;){if(U.key===j){if(j=S.type,j===fi){if(U.tag===7){n(I,U.sibling),_=i(U,S.props.children),_.return=I,I=_;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===bn&&Dm(j)===U.type){n(I,U.sibling),_=i(U,S.props),_.ref=As(I,U,S),_.return=I,I=_;break e}n(I,U);break}else e(I,U);U=U.sibling}S.type===fi?(_=Mr(S.props.children,I.mode,x,S.key),_.return=I,I=_):(x=qa(S.type,S.key,S.props,null,I.mode,x),x.ref=As(I,_,S),x.return=I,I=x)}return o(I);case di:e:{for(U=S.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(I,_.sibling),_=i(_,S.children||[]),_.return=I,I=_;break e}else{n(I,_);break}else e(I,_);_=_.sibling}_=Cc(S,I.mode,x),_.return=I,I=_}return o(I);case bn:return U=S._init,M(I,_,U(S._payload),x)}if(ks(S))return k(I,_,S,x);if(Es(S))return V(I,_,S,x);Ta(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(I,_.sibling),_=i(_,S),_.return=I,I=_):(n(I,_),_=Ac(S,I.mode,x),_.return=I,I=_),o(I)):n(I,_)}return M}var Ui=Q_(!0),Y_=Q_(!1),gl=yr(null),yl=null,wi=null,Nd=null;function Dd(){Nd=wi=yl=null}function Vd(t){var e=gl.current;me(gl),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ki(t,e){yl=t,Nd=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dt=!0),t.firstContext=null)}function xt(t){var e=t._currentValue;if(Nd!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(yl===null)throw Error(b(308));wi=t,yl.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var Vr=null;function xd(t){Vr===null?Vr=[t]:Vr.push(t)}function X_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Fn=!1;function Od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Sn(t,n)}return i=r.interleaved,i===null?(e.next=e,xd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Sn(t,n)}function ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vd(t,n)}}function Vm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,r){var i=t.updateQueue;Fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,A=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,V=l;switch(g=e,A=n,V.tag){case 1:if(k=V.payload,typeof k=="function"){p=k.call(A,p,g);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=V.payload,g=typeof k=="function"?k.call(A,p,g):k,g==null)break e;p=Ee({},p,g);break e;case 2:Fn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=p):f=f.next=A,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=p}}function xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var xo={},Xt=yr(xo),ho=yr(xo),fo=yr(xo);function xr(t){if(t===xo)throw Error(b(174));return t}function Ld(t,e){switch(ce(fo,e),ce(ho,t),ce(Xt,xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qc(e,t)}me(Xt),ce(Xt,e)}function ji(){me(Xt),me(ho),me(fo)}function Z_(t){xr(fo.current);var e=xr(Xt.current),n=Qc(e,t.type);e!==n&&(ce(ho,t),ce(Xt,n))}function Md(t){ho.current===t&&(me(Xt),me(ho))}var _e=yr(0);function vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vc=[];function bd(){for(var t=0;t<vc.length;t++)vc[t]._workInProgressVersionPrimary=null;vc.length=0}var za=Nn.ReactCurrentDispatcher,Ec=Nn.ReactCurrentBatchConfig,zr=0,ve=null,Ve=null,be=null,El=!1,$s=!1,po=0,YI=0;function Qe(){throw Error(b(321))}function Fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$t(t[n],e[n]))return!1;return!0}function Ud(t,e,n,r,i,s){if(zr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,za.current=t===null||t.memoizedState===null?eS:tS,t=n(r,i),$s){s=0;do{if($s=!1,po=0,25<=s)throw Error(b(301));s+=1,be=Ve=null,e.updateQueue=null,za.current=nS,t=n(r,i)}while($s)}if(za.current=wl,e=Ve!==null&&Ve.next!==null,zr=0,be=Ve=ve=null,El=!1,e)throw Error(b(300));return t}function jd(){var t=po!==0;return po=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ve.memoizedState=be=t:be=be.next=t,be}function Ot(){if(Ve===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=be===null?ve.memoizedState:be.next;if(e!==null)be=e,Ve=t;else{if(t===null)throw Error(b(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},be===null?ve.memoizedState=be=t:be=be.next=t}return be}function mo(t,e){return typeof e=="function"?e(t):e}function wc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((zr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,ve.lanes|=f,Br|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,$t(r,e.memoizedState)||(dt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);$t(s,e.memoizedState)||(dt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ev(){}function tv(t,e){var n=ve,r=Ot(),i=e(),s=!$t(r.memoizedState,i);if(s&&(r.memoizedState=i,dt=!0),r=r.queue,zd(iv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,go(9,rv.bind(null,n,r,i,e),void 0,null),Fe===null)throw Error(b(349));zr&30||nv(n,e,i)}return i}function nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,r){e.value=n,e.getSnapshot=r,sv(e)&&ov(t)}function iv(t,e,n){return n(function(){sv(e)&&ov(t)})}function sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$t(t,n)}catch{return!0}}function ov(t){var e=Sn(t,1);e!==null&&Bt(e,t,1,-1)}function Om(t){var e=Gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},e.queue=t,t=t.dispatch=ZI.bind(null,ve,t),[e.memoizedState,t]}function go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function av(){return Ot().memoizedState}function Ba(t,e,n,r){var i=Gt();ve.flags|=t,i.memoizedState=go(1|e,n,void 0,r===void 0?null:r)}function tu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Ve!==null){var o=Ve.memoizedState;if(s=o.destroy,r!==null&&Fd(r,o.deps)){i.memoizedState=go(e,n,s,r);return}}ve.flags|=t,i.memoizedState=go(1|e,n,s,r)}function Lm(t,e){return Ba(8390656,8,t,e)}function zd(t,e){return tu(2048,8,t,e)}function lv(t,e){return tu(4,2,t,e)}function uv(t,e){return tu(4,4,t,e)}function cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){return n=n!=null?n.concat([t]):null,tu(4,4,cv.bind(null,e,t),n)}function Bd(){}function dv(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fv(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Fd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pv(t,e,n){return zr&21?($t(n,e)||(n=v_(),ve.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dt=!0),t.memoizedState=n)}function XI(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Ec.transition;Ec.transition={};try{t(!1),e()}finally{oe=n,Ec.transition=r}}function mv(){return Ot().memoizedState}function JI(t,e,n){var r=er(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gv(t))yv(e,n);else if(n=X_(t,e,n,r),n!==null){var i=ot();Bt(n,t,r,i),_v(n,e,r)}}function ZI(t,e,n){var r=er(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(t))yv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,$t(l,o)){var u=e.interleaved;u===null?(i.next=i,xd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=X_(t,e,i,r),n!==null&&(i=ot(),Bt(n,t,r,i),_v(n,e,r))}}function gv(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function yv(t,e){$s=El=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,vd(t,n)}}var wl={readContext:xt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},eS={readContext:xt,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:xt,useEffect:Lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ba(4194308,4,cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ba(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ba(4,2,t,e)},useMemo:function(t,e){var n=Gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=JI.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:Om,useDebugValue:Bd,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=Om(!1),e=t[0];return t=XI.bind(null,t[1]),Gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Gt();if(ge){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Fe===null)throw Error(b(349));zr&30||nv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Lm(iv.bind(null,r,s,t),[t]),r.flags|=2048,go(9,rv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gt(),e=Fe.identifierPrefix;if(ge){var n=yn,r=gn;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=po++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=YI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},tS={readContext:xt,useCallback:dv,useContext:xt,useEffect:zd,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:wc,useRef:av,useState:function(){return wc(mo)},useDebugValue:Bd,useDeferredValue:function(t){var e=Ot();return pv(e,Ve.memoizedState,t)},useTransition:function(){var t=wc(mo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},nS={readContext:xt,useCallback:dv,useContext:xt,useEffect:zd,useImperativeHandle:hv,useInsertionEffect:lv,useLayoutEffect:uv,useMemo:fv,useReducer:Tc,useRef:av,useState:function(){return Tc(mo)},useDebugValue:Bd,useDeferredValue:function(t){var e=Ot();return Ve===null?e.memoizedState=t:pv(e,Ve.memoizedState,t)},useTransition:function(){var t=Tc(mo)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function bt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nu={isMounted:function(t){return(t=t._reactInternals)?Jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=er(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Bt(e,t,i,r),ja(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=er(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Jn(t,s,i),e!==null&&(Bt(e,t,i,r),ja(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=er(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=Jn(t,i,r),e!==null&&(Bt(e,t,r,n),ja(e,t,r))}};function Mm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ao(n,r)||!ao(i,s):!0}function vv(t,e,n){var r=!1,i=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=xt(s):(i=pt(e)?Ur:tt.current,r=e.contextTypes,s=(r=r!=null)?bi(t,i):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&nu.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Od(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=xt(s):(s=pt(e)?Ur:tt.current,i.context=bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&nu.enqueueReplaceState(i,i.state,null),_l(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zi(t,e){try{var n="",r=e;do n+=NT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _h(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var rS=typeof WeakMap=="function"?WeakMap:Map;function Ev(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Il||(Il=!0,Ph=r),_h(t,e)},n}function wv(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_h(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_h(t,e),typeof r!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new rS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yS.bind(null,t,e,n),e.then(t,t))}function Um(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,Jn(n,e,1))),n.lanes|=1),t)}var iS=Nn.ReactCurrentOwner,dt=!1;function st(t,e,n,r){e.child=t===null?Y_(e,null,n,r):Ui(e,t.child,n,r)}function zm(t,e,n,r,i){n=n.render;var s=e.ref;return ki(e,i),r=Ud(t,e,n,r,s,i),n=jd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ge&&n&&Rd(e),e.flags|=1,st(t,e,r,i),e.child)}function Bm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Tv(t,e,s,r,i)):(t=qa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ao,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=tr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Tv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ao(s,r)&&t.ref===e.ref)if(dt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(dt=!0);else return e.lanes=t.lanes,An(t,e,i)}return vh(t,e,n,r,i)}function Iv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Ii,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ce(Ii,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ce(Ii,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ce(Ii,_t),_t|=r;return st(t,e,i,n),e.child}function Sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function vh(t,e,n,r,i){var s=pt(n)?Ur:tt.current;return s=bi(e,s),ki(e,i),n=Ud(t,e,n,r,s,i),r=jd(),t!==null&&!dt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(ge&&r&&Rd(e),e.flags|=1,st(t,e,n,i),e.child)}function $m(t,e,n,r,i){if(pt(n)){var s=!0;fl(e)}else s=!1;if(ki(e,i),e.stateNode===null)$a(t,e),vv(e,n,r),yh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=xt(h):(h=pt(n)?Ur:tt.current,h=bi(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&bm(e,o,r,h),Fn=!1;var g=e.memoizedState;o.state=g,_l(e,r,o,i),u=e.memoizedState,l!==r||g!==u||ft.current||Fn?(typeof f=="function"&&(gh(e,n,f,r),u=e.memoizedState),(l=Fn||Mm(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,J_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:bt(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=xt(u):(u=pt(n)?Ur:tt.current,u=bi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&bm(e,o,r,u),Fn=!1,g=e.memoizedState,o.state=g,_l(e,r,o,i);var k=e.memoizedState;l!==p||g!==k||ft.current||Fn?(typeof A=="function"&&(gh(e,n,A,r),k=e.memoizedState),(h=Fn||Mm(e,n,h,r,g,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Eh(t,e,n,r,s,i)}function Eh(t,e,n,r,i,s){Sv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Pm(e,n,!1),An(t,e,s);r=e.stateNode,iS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ui(e,t.child,null,s),e.child=Ui(e,null,l,s)):st(t,e,l,s),e.memoizedState=r.state,i&&Pm(e,n,!0),e.child}function Av(t){var e=t.stateNode;e.pendingContext?Rm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rm(t,e.context,!1),Ld(t,e.containerInfo)}function Hm(t,e,n,r,i){return Fi(),kd(i),e.flags|=256,st(t,e,n,r),e.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Th(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cv(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ce(_e,i&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=su(o,r,0,null),t=Mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Th(n),e.memoizedState=wh,t):$d(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return sS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=tr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=tr(l,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=wh,r}return s=t.child,t=s.sibling,r=tr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function $d(t,e){return e=su({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,r){return r!==null&&kd(r),Ui(e,t.child,null,n),t=$d(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ic(Error(b(422))),Ia(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=su({mode:"visible",children:r.children},i,0,null),s=Mr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ui(e,t.child,null,o),e.child.memoizedState=Th(o),e.memoizedState=wh,s);if(!(e.mode&1))return Ia(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=Ic(s,r,void 0),Ia(t,e,o,r)}if(l=(o&t.childLanes)!==0,dt||l){if(r=Fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Sn(t,i),Bt(r,t,i,-1))}return Qd(),r=Ic(Error(b(421))),Ia(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_S.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=Xn(i.nextSibling),wt=e,ge=!0,Ut=null,t!==null&&(Ct[Rt++]=gn,Ct[Rt++]=yn,Ct[Rt++]=jr,gn=t.id,yn=t.overflow,jr=e),e=$d(e,r.children),e.flags|=4096,e)}function Wm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function Sc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,n,e);else if(t.tag===19)Wm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ce(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function $a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function oS(t,e,n){switch(e.tag){case 3:Av(e),Fi();break;case 5:Z_(e);break;case 1:pt(e.type)&&fl(e);break;case 4:Ld(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ce(gl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ce(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?Cv(t,e,n):(ce(_e,_e.current&1),t=An(t,e,n),t!==null?t.sibling:null);ce(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ce(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,Iv(t,e,n)}return An(t,e,n)}var Pv,Ih,kv,Nv;Pv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ih=function(){};kv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xr(Xt.current);var s=null;switch(n){case"input":i=Wc(t,i),r=Wc(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Kc(t,i),r=Kc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hl)}Yc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(eo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(eo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&de("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Nv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Cs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function aS(t,e,n){var r=e.pendingProps;switch(Pd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return pt(e.type)&&dl(),Ye(e),null;case 3:return r=e.stateNode,ji(),me(ft),me(tt),bd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(wa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(Dh(Ut),Ut=null))),Ih(t,e),Ye(e),null;case 5:Md(e);var i=xr(fo.current);if(n=e.type,t!==null&&e.stateNode!=null)kv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Ye(e),null}if(t=xr(Xt.current),wa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Qt]=e,r[co]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<Ds.length;i++)de(Ds[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":em(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":nm(r,s),de("invalid",r)}Yc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ea(r.textContent,l,t),i=["children",""+l]):eo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":da(r),tm(r,s,!0);break;case"textarea":da(r),rm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Qt]=e,t[co]=r,Pv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ds.length;i++)de(Ds[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":em(t,r),i=Wc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),de("invalid",t);break;case"textarea":nm(t,r),i=Kc(t,r),de("invalid",t);break;default:i=r}Yc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?a_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&s_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&to(t,u):typeof u=="number"&&to(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(eo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&de("scroll",t):u!=null&&fd(t,s,u,o))}switch(n){case"input":da(t),tm(t,r,!1);break;case"textarea":da(t),rm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ai(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ai(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)Nv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=xr(fo.current),xr(Xt.current),wa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Qt]=e,(s=r.nodeValue!==n)&&(t=wt,t!==null))switch(t.tag){case 3:Ea(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ea(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Qt]=e,e.stateNode=r}return Ye(e),null;case 13:if(me(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&vt!==null&&e.mode&1&&!(e.flags&128))K_(),Fi(),e.flags|=98560,s=!1;else if(s=wa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Qt]=e}else Fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Ut!==null&&(Dh(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?xe===0&&(xe=3):Qd())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return ji(),Ih(t,e),t===null&&lo(e.stateNode.containerInfo),Ye(e),null;case 10:return Vd(e.type._context),Ye(e),null;case 17:return pt(e.type)&&dl(),Ye(e),null;case 19:if(me(_e),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Cs(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vl(t),o!==null){for(e.flags|=128,Cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ce(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ce()>Bi&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Ye(e),null}else 2*Ce()-s.renderingStartTime>Bi&&n!==1073741824&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ce(),e.sibling=null,n=_e.current,ce(_e,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Kd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function lS(t,e){switch(Pd(e),e.tag){case 1:return pt(e.type)&&dl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ji(),me(ft),me(tt),bd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Md(e),null;case 13:if(me(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(_e),null;case 4:return ji(),null;case 10:return Vd(e.type._context),null;case 22:case 23:return Kd(),null;case 24:return null;default:return null}}var Sa=!1,Ze=!1,uS=typeof WeakSet=="function"?WeakSet:Set,H=null;function Ti(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Sh(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var qm=!1;function cS(t,e){if(ah=ll,t=L_(),Cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var A;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},ll=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var V=k.memoizedProps,M=k.memoizedState,I=e.stateNode,_=I.getSnapshotBeforeUpdate(e.elementType===e.type?V:bt(e.type,V),M);I.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){Ie(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return k=qm,qm=!1,k}function Hs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Sh(e,n,s)}i=i.next}while(i!==r)}}function ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dv(t){var e=t.alternate;e!==null&&(t.alternate=null,Dv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qt],delete e[co],delete e[hh],delete e[qI],delete e[GI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vv(t){return t.tag===5||t.tag===3||t.tag===4}function Gm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hl));else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var je=null,Ft=!1;function Ln(t,e,n){for(n=n.child;n!==null;)xv(t,e,n),n=n.sibling}function xv(t,e,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:Ze||Ti(n,e);case 6:var r=je,i=Ft;je=null,Ln(t,e,n),je=r,Ft=i,je!==null&&(Ft?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Ft?(t=je,n=n.stateNode,t.nodeType===8?yc(t.parentNode,n):t.nodeType===1&&yc(t,n),so(t)):yc(je,n.stateNode));break;case 4:r=je,i=Ft,je=n.stateNode.containerInfo,Ft=!0,Ln(t,e,n),je=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sh(n,e,o),i=i.next}while(i!==r)}Ln(t,e,n);break;case 1:if(!Ze&&(Ti(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,e,l)}Ln(t,e,n);break;case 21:Ln(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Ln(t,e,n),Ze=r):Ln(t,e,n);break;default:Ln(t,e,n)}}function Km(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new uS),e.forEach(function(r){var i=vS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Ft=!1;break e;case 3:je=l.stateNode.containerInfo,Ft=!0;break e;case 4:je=l.stateNode.containerInfo,Ft=!0;break e}l=l.return}if(je===null)throw Error(b(160));xv(s,o,i),je=null,Ft=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ie(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ov(e,t),e=e.sibling}function Ov(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),qt(t),r&4){try{Hs(3,t,t.return),ru(3,t)}catch(V){Ie(t,t.return,V)}try{Hs(5,t,t.return)}catch(V){Ie(t,t.return,V)}}break;case 1:Mt(e,t),qt(t),r&512&&n!==null&&Ti(n,n.return);break;case 5:if(Mt(e,t),qt(t),r&512&&n!==null&&Ti(n,n.return),t.flags&32){var i=t.stateNode;try{to(i,"")}catch(V){Ie(t,t.return,V)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&n_(i,s),Xc(l,o);var h=Xc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?a_(i,p):f==="dangerouslySetInnerHTML"?s_(i,p):f==="children"?to(i,p):fd(i,f,p,h)}switch(l){case"input":qc(i,s);break;case"textarea":r_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Ai(i,!!s.multiple,A,!1):g!==!!s.multiple&&(s.defaultValue!=null?Ai(i,!!s.multiple,s.defaultValue,!0):Ai(i,!!s.multiple,s.multiple?[]:"",!1))}i[co]=s}catch(V){Ie(t,t.return,V)}}break;case 6:if(Mt(e,t),qt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(V){Ie(t,t.return,V)}}break;case 3:if(Mt(e,t),qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{so(e.containerInfo)}catch(V){Ie(t,t.return,V)}break;case 4:Mt(e,t),qt(t);break;case 13:Mt(e,t),qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qd=Ce())),r&4&&Km(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(h=Ze)||f,Mt(e,t),Ze=h):Mt(e,t),qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(p=H=f;H!==null;){switch(g=H,A=g.child,g.tag){case 0:case 11:case 14:case 15:Hs(4,g,g.return);break;case 1:Ti(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(V){Ie(r,n,V)}}break;case 5:Ti(g,g.return);break;case 22:if(g.memoizedState!==null){Ym(p);continue}}A!==null?(A.return=g,H=A):Ym(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=o_("display",o))}catch(V){Ie(t,t.return,V)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(V){Ie(t,t.return,V)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Mt(e,t),qt(t),r&4&&Km(t);break;case 21:break;default:Mt(e,t),qt(t)}}function qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vv(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(to(i,""),r.flags&=-33);var s=Gm(t);Rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Gm(t);Ch(t,l,o);break;default:throw Error(b(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hS(t,e,n){H=t,Lv(t)}function Lv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var i=H,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Sa;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Ze;l=Sa;var h=Ze;if(Sa=o,(Ze=u)&&!h)for(H=i;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?Xm(i):u!==null?(u.return=o,H=u):Xm(i);for(;s!==null;)H=s,Lv(s),s=s.sibling;H=i,Sa=l,Ze=h}Qm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,H=s):Qm(t)}}function Qm(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&so(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Ze||e.flags&512&&Ah(e)}catch(g){Ie(e,e.return,g)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function Ym(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function Xm(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ru(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{Ah(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{Ah(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){H=null;break}var l=e.sibling;if(l!==null){l.return=e.return,H=l;break}H=e.return}}var dS=Math.ceil,Tl=Nn.ReactCurrentDispatcher,Hd=Nn.ReactCurrentOwner,Dt=Nn.ReactCurrentBatchConfig,re=0,Fe=null,ke=null,$e=0,_t=0,Ii=yr(0),xe=0,yo=null,Br=0,iu=0,Wd=0,Ws=null,ct=null,qd=0,Bi=1/0,pn=null,Il=!1,Ph=null,Zn=null,Aa=!1,qn=null,Sl=0,qs=0,kh=null,Ha=-1,Wa=0;function ot(){return re&6?Ce():Ha!==-1?Ha:Ha=Ce()}function er(t){return t.mode&1?re&2&&$e!==0?$e&-$e:QI.transition!==null?(Wa===0&&(Wa=v_()),Wa):(t=oe,t!==0||(t=window.event,t=t===void 0?16:C_(t.type)),t):1}function Bt(t,e,n,r){if(50<qs)throw qs=0,kh=null,Error(b(185));No(t,n,r),(!(re&2)||t!==Fe)&&(t===Fe&&(!(re&2)&&(iu|=n),xe===4&&jn(t,$e)),mt(t,r),n===1&&re===0&&!(e.mode&1)&&(Bi=Ce()+500,eu&&_r()))}function mt(t,e){var n=t.callbackNode;QT(t,e);var r=al(t,t===Fe?$e:0);if(r===0)n!==null&&om(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&om(n),e===1)t.tag===0?KI(Jm.bind(null,t)):W_(Jm.bind(null,t)),HI(function(){!(re&6)&&_r()}),n=null;else{switch(E_(r)){case 1:n=_d;break;case 4:n=y_;break;case 16:n=ol;break;case 536870912:n=__;break;default:n=ol}n=$v(n,Mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Mv(t,e){if(Ha=-1,Wa=0,re&6)throw Error(b(327));var n=t.callbackNode;if(Ni()&&t.callbackNode!==n)return null;var r=al(t,t===Fe?$e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Al(t,r);else{e=r;var i=re;re|=2;var s=Fv();(Fe!==t||$e!==e)&&(pn=null,Bi=Ce()+500,Lr(t,e));do try{mS();break}catch(l){bv(t,l)}while(!0);Dd(),Tl.current=s,re=i,ke!==null?e=0:(Fe=null,$e=0,e=xe)}if(e!==0){if(e===2&&(i=nh(t),i!==0&&(r=i,e=Nh(t,i))),e===1)throw n=yo,Lr(t,0),jn(t,r),mt(t,Ce()),n;if(e===6)jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!fS(i)&&(e=Al(t,r),e===2&&(s=nh(t),s!==0&&(r=s,e=Nh(t,s))),e===1))throw n=yo,Lr(t,0),jn(t,r),mt(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:kr(t,ct,pn);break;case 3:if(jn(t,r),(r&130023424)===r&&(e=qd+500-Ce(),10<e)){if(al(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ch(kr.bind(null,t,ct,pn),e);break}kr(t,ct,pn);break;case 4:if(jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*dS(r/1960))-r,10<r){t.timeoutHandle=ch(kr.bind(null,t,ct,pn),r);break}kr(t,ct,pn);break;case 5:kr(t,ct,pn);break;default:throw Error(b(329))}}}return mt(t,Ce()),t.callbackNode===n?Mv.bind(null,t):null}function Nh(t,e){var n=Ws;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Al(t,e),t!==2&&(e=ct,ct=n,e!==null&&Dh(e)),t}function Dh(t){ct===null?ct=t:ct.push.apply(ct,t)}function fS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!$t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jn(t,e){for(e&=~Wd,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zt(e),r=1<<n;t[n]=-1,e&=~r}}function Jm(t){if(re&6)throw Error(b(327));Ni();var e=al(t,0);if(!(e&1))return mt(t,Ce()),null;var n=Al(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=Nh(t,r))}if(n===1)throw n=yo,Lr(t,0),jn(t,e),mt(t,Ce()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,ct,pn),mt(t,Ce()),null}function Gd(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Bi=Ce()+500,eu&&_r())}}function $r(t){qn!==null&&qn.tag===0&&!(re&6)&&Ni();var e=re;re|=1;var n=Dt.transition,r=oe;try{if(Dt.transition=null,oe=1,t)return t()}finally{oe=r,Dt.transition=n,re=e,!(re&6)&&_r()}}function Kd(){_t=Ii.current,me(Ii)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$I(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Pd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dl();break;case 3:ji(),me(ft),me(tt),bd();break;case 5:Md(r);break;case 4:ji();break;case 13:me(_e);break;case 19:me(_e);break;case 10:Vd(r.type._context);break;case 22:case 23:Kd()}n=n.return}if(Fe=t,ke=t=tr(t.current,null),$e=_t=e,xe=0,yo=null,Wd=iu=Br=0,ct=Ws=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Vr=null}return t}function bv(t,e){do{var n=ke;try{if(Dd(),za.current=wl,El){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}El=!1}if(zr=0,be=Ve=ve=null,$s=!1,po=0,Hd.current=null,n===null||n.return===null){xe=1,yo=e,ke=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Um(o);if(A!==null){A.flags&=-257,jm(A,o,l,s,e),A.mode&1&&Fm(s,h,e),e=A,u=h;var k=e.updateQueue;if(k===null){var V=new Set;V.add(u),e.updateQueue=V}else k.add(u);break e}else{if(!(e&1)){Fm(s,h,e),Qd();break e}u=Error(b(426))}}else if(ge&&l.mode&1){var M=Um(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),jm(M,o,l,s,e),kd(zi(u,l));break e}}s=u=zi(u,l),xe!==4&&(xe=2),Ws===null?Ws=[s]:Ws.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=Ev(s,u,e);Vm(s,I);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Zn===null||!Zn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=wv(s,l,e);Vm(s,x);break e}}s=s.return}while(s!==null)}jv(n)}catch(j){e=j,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Fv(){var t=Tl.current;return Tl.current=wl,t===null?wl:t}function Qd(){(xe===0||xe===3||xe===2)&&(xe=4),Fe===null||!(Br&268435455)&&!(iu&268435455)||jn(Fe,$e)}function Al(t,e){var n=re;re|=2;var r=Fv();(Fe!==t||$e!==e)&&(pn=null,Lr(t,e));do try{pS();break}catch(i){bv(t,i)}while(!0);if(Dd(),re=n,Tl.current=r,ke!==null)throw Error(b(261));return Fe=null,$e=0,xe}function pS(){for(;ke!==null;)Uv(ke)}function mS(){for(;ke!==null&&!jT();)Uv(ke)}function Uv(t){var e=Bv(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?jv(t):ke=e,Hd.current=null}function jv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=lS(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,ke=null;return}}else if(n=aS(n,e,_t),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);xe===0&&(xe=5)}function kr(t,e,n){var r=oe,i=Dt.transition;try{Dt.transition=null,oe=1,gS(t,e,n,r)}finally{Dt.transition=i,oe=r}return null}function gS(t,e,n,r){do Ni();while(qn!==null);if(re&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(YT(t,s),t===Fe&&(ke=Fe=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Aa||(Aa=!0,$v(ol,function(){return Ni(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=oe;oe=1;var l=re;re|=4,Hd.current=null,cS(t,n),Ov(n,t),MI(lh),ll=!!ah,lh=ah=null,t.current=n,hS(n),zT(),re=l,oe=o,Dt.transition=s}else t.current=n;if(Aa&&(Aa=!1,qn=t,Sl=i),s=t.pendingLanes,s===0&&(Zn=null),HT(n.stateNode),mt(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Il)throw Il=!1,t=Ph,Ph=null,t;return Sl&1&&t.tag!==0&&Ni(),s=t.pendingLanes,s&1?t===kh?qs++:(qs=0,kh=t):qs=0,_r(),null}function Ni(){if(qn!==null){var t=E_(Sl),e=Dt.transition,n=oe;try{if(Dt.transition=null,oe=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,Sl=0,re&6)throw Error(b(331));var i=re;for(re|=4,H=t.current;H!==null;){var s=H,o=s.child;if(H.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(H=h;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:Hs(8,f,s)}var p=f.child;if(p!==null)p.return=f,H=p;else for(;H!==null;){f=H;var g=f.sibling,A=f.return;if(Dv(f),f===h){H=null;break}if(g!==null){g.return=A,H=g;break}H=A}}}var k=s.alternate;if(k!==null){var V=k.child;if(V!==null){k.child=null;do{var M=V.sibling;V.sibling=null,V=M}while(V!==null)}}H=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,H=o;else e:for(;H!==null;){if(s=H,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Hs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,H=I;break e}H=s.return}}var _=t.current;for(H=_;H!==null;){o=H;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,H=S;else e:for(o=_;H!==null;){if(l=H,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ru(9,l)}}catch(j){Ie(l,l.return,j)}if(l===o){H=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,H=x;break e}H=l.return}}if(re=i,_r(),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(Ql,t)}catch{}r=!0}return r}finally{oe=n,Dt.transition=e}}return!1}function Zm(t,e,n){e=zi(n,e),e=Ev(t,e,1),t=Jn(t,e,1),e=ot(),t!==null&&(No(t,1,e),mt(t,e))}function Ie(t,e,n){if(t.tag===3)Zm(t,t,n);else for(;e!==null;){if(e.tag===3){Zm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){t=zi(n,t),t=wv(e,t,1),e=Jn(e,t,1),t=ot(),e!==null&&(No(e,1,t),mt(e,t));break}}e=e.return}}function yS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Fe===t&&($e&n)===n&&(xe===4||xe===3&&($e&130023424)===$e&&500>Ce()-qd?Lr(t,0):Wd|=n),mt(t,e)}function zv(t,e){e===0&&(t.mode&1?(e=ma,ma<<=1,!(ma&130023424)&&(ma=4194304)):e=1);var n=ot();t=Sn(t,e),t!==null&&(No(t,e,n),mt(t,n))}function _S(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zv(t,n)}function vS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),zv(t,n)}var Bv;Bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)dt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dt=!1,oS(t,e,n);dt=!!(t.flags&131072)}else dt=!1,ge&&e.flags&1048576&&q_(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;$a(t,e),t=e.pendingProps;var i=bi(e,tt.current);ki(e,n),i=Ud(null,e,r,t,i,n);var s=jd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,fl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Od(e),i.updater=nu,e.stateNode=i,i._reactInternals=e,yh(e,r,t,n),e=Eh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&Rd(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch($a(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=wS(r),t=bt(r,t),i){case 0:e=vh(null,e,r,t,n);break e;case 1:e=$m(null,e,r,t,n);break e;case 11:e=zm(null,e,r,t,n);break e;case 14:e=Bm(null,e,r,bt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),$m(t,e,r,i,n);case 3:e:{if(Av(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,J_(t,e),_l(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=zi(Error(b(423)),e),e=Hm(t,e,r,n,i);break e}else if(r!==i){i=zi(Error(b(424)),e),e=Hm(t,e,r,n,i);break e}else for(vt=Xn(e.stateNode.containerInfo.firstChild),wt=e,ge=!0,Ut=null,n=Y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){e=An(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return Z_(e),t===null&&ph(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uh(r,i)?o=null:s!==null&&uh(r,s)&&(e.flags|=32),Sv(t,e),st(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return Cv(t,e,n);case 4:return Ld(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ui(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),zm(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ce(gl,r._currentValue),r._currentValue=o,s!==null)if($t(s.value,o)){if(s.children===i.children&&!ft.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=En(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),mh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ki(e,n),i=xt(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=bt(r,e.pendingProps),i=bt(r.type,i),Bm(t,e,r,i,n);case 15:return Tv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:bt(r,i),$a(t,e),e.tag=1,pt(r)?(t=!0,fl(e)):t=!1,ki(e,n),vv(e,r,i),yh(e,r,i,n),Eh(null,e,r,!0,t,n);case 19:return Rv(t,e,n);case 22:return Iv(t,e,n)}throw Error(b(156,e.tag))};function $v(t,e){return g_(t,e)}function ES(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(t,e,n,r){return new ES(t,e,n,r)}function Yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wS(t){if(typeof t=="function")return Yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===md)return 11;if(t===gd)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fi:return Mr(n.children,i,s,e);case pd:o=8,i|=8;break;case zc:return t=Nt(12,n,e,i|2),t.elementType=zc,t.lanes=s,t;case Bc:return t=Nt(13,n,e,i),t.elementType=Bc,t.lanes=s,t;case $c:return t=Nt(19,n,e,i),t.elementType=$c,t.lanes=s,t;case Zy:return su(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xy:o=10;break e;case Jy:o=9;break e;case md:o=11;break e;case gd:o=14;break e;case bn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Nt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mr(t,e,n,r){return t=Nt(7,t,r,e),t.lanes=n,t}function su(t,e,n,r){return t=Nt(22,t,r,e),t.elementType=Zy,t.lanes=n,t.stateNode={isHidden:!1},t}function Ac(t,e,n){return t=Nt(6,t,null,e),t.lanes=n,t}function Cc(t,e,n){return e=Nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function TS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xd(t,e,n,r,i,s,o,l,u){return t=new TS(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Od(s),t}function IS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hv(t){if(!t)return lr;t=t._reactInternals;e:{if(Jr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(pt(n))return H_(t,n,e)}return e}function Wv(t,e,n,r,i,s,o,l,u){return t=Xd(n,r,!0,t,i,s,o,l,u),t.context=Hv(null),n=t.current,r=ot(),i=er(n),s=En(r,i),s.callback=e??null,Jn(n,s,i),t.current.lanes=i,No(t,i,r),mt(t,r),t}function ou(t,e,n,r){var i=e.current,s=ot(),o=er(i);return n=Hv(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Jn(i,e,o),t!==null&&(Bt(t,i,o,s),ja(t,i,o)),o}function Cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function eg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jd(t,e){eg(t,e),(t=t.alternate)&&eg(t,e)}function SS(){return null}var qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}au.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));ou(t,e,null,null)};au.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){ou(null,t,null,null)}),e[In]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var e=I_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&A_(t)}};function ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tg(){}function AS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Cl(o);s.call(h)}}var o=Wv(e,r,t,0,null,!1,!1,"",tg);return t._reactRootContainer=o,t[In]=o.current,lo(t.nodeType===8?t.parentNode:t),$r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Cl(u);l.call(h)}}var u=Xd(t,0,!1,null,null,!1,!1,"",tg);return t._reactRootContainer=u,t[In]=u.current,lo(t.nodeType===8?t.parentNode:t),$r(function(){ou(e,u,n,r)}),u}function uu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Cl(o);l.call(u)}}ou(e,o,t,i)}else o=AS(n,e,t,i,r);return Cl(o)}w_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(vd(e,n|1),mt(e,Ce()),!(re&6)&&(Bi=Ce()+500,_r()))}break;case 13:$r(function(){var r=Sn(t,1);if(r!==null){var i=ot();Bt(r,t,1,i)}}),Jd(t,1)}};Ed=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=ot();Bt(e,t,134217728,n)}Jd(t,134217728)}};T_=function(t){if(t.tag===13){var e=er(t),n=Sn(t,e);if(n!==null){var r=ot();Bt(n,t,e,r)}Jd(t,e)}};I_=function(){return oe};S_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Zc=function(t,e,n){switch(e){case"input":if(qc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zl(r);if(!i)throw Error(b(90));t_(r),qc(r,i)}}}break;case"textarea":r_(t,n);break;case"select":e=n.value,e!=null&&Ai(t,!!n.multiple,e,!1)}};c_=Gd;h_=$r;var CS={usingClientEntryPoint:!1,Events:[Vo,yi,Zl,l_,u_,Gd]},Rs={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},RS={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=p_(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||SS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{Ql=Ca.inject(RS),Yt=Ca}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CS;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(e))throw Error(b(200));return IS(t,e,null,n)};It.createRoot=function(t,e){if(!ef(t))throw Error(b(299));var n=!1,r="",i=qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xd(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,lo(t.nodeType===8?t.parentNode:t),new Zd(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=p_(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return $r(t)};It.hydrate=function(t,e,n){if(!lu(e))throw Error(b(200));return uu(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!ef(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=qv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wv(e,null,t,1,n??null,i,!1,s,o),t[In]=e.current,lo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new au(e)};It.render=function(t,e,n){if(!lu(e))throw Error(b(200));return uu(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!lu(t))throw Error(b(40));return t._reactRootContainer?($r(function(){uu(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};It.unstable_batchedUpdates=Gd;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lu(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return uu(t,e,n,!1,r)};It.version="18.3.1-next-f1338f8080-20240426";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(t){console.error(t)}}Gv(),Gy.exports=It;var PS=Gy.exports,ng=PS;Uc.createRoot=ng.createRoot,Uc.hydrateRoot=ng.hydrateRoot;const kS=()=>{};var rg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[f],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new DS;const g=s<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VS=function(t){const e=Kv(t);return Qv.encodeByteArray(e,!0)},Rl=function(t){return VS(t).replace(/\./g,"")},Yv=function(t){try{return Qv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS=()=>xS().__FIREBASE_DEFAULTS__,LS=()=>{if(typeof process>"u"||typeof rg>"u")return;const t=rg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yv(t[1]);return e&&JSON.parse(e)},cu=()=>{try{return kS()||OS()||LS()||MS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xv=t=>{var e,n;return(n=(e=cu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bS=t=>{const e=Xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jv=()=>{var t;return(t=cu())===null||t===void 0?void 0:t.config},Zv=t=>{var e;return(e=cu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function eE(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Rl(JSON.stringify(n)),Rl(JSON.stringify(o)),""].join(".")}const Gs={};function jS(){const t={prod:[],emulator:[]};for(const e of Object.keys(Gs))Gs[e]?t.emulator.push(e):t.prod.push(e);return t}function zS(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ig=!1;function tE(t,e){if(typeof window>"u"||typeof document>"u"||!Ji(window.location.host)||Gs[t]===e||Gs[t]||ig)return;Gs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=jS().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ig=!0,o()},g}function f(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=zS(r),A=n("text"),k=document.getElementById(A)||document.createElement("span"),V=n("learnmore"),M=document.getElementById(V)||document.createElement("a"),I=n("preprendIcon"),_=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const S=g.element;l(S),f(M,V);const x=h();u(_,I),S.append(_,k,M,x),document.body.appendChild(S)}s?(k.innerText="Preview backend disconnected.",_.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function $S(){var t;const e=(t=cu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GS(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KS(){return!$S()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function QS(){try{return typeof indexedDB=="object"}catch{return!1}}function YS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XS,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JS(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,l,r)}}function JS(t,e){return t.replace(ZS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZS=/\{\$([^}]+)}/g;function e1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sg(s)&&sg(o)){if(!Hr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Vs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function xs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function t1(t,e){const n=new n1(t,e);return n.subscribe.bind(n)}class n1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");r1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Rc),i.error===void 0&&(i.error=Rc),i.complete===void 0&&(i.complete=Rc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class Wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o1(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s1(t){return t===Nr?void 0:t}function o1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const l1={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},u1=ee.INFO,c1={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},h1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=c1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tf{constructor(e){this.name=e,this._logLevel=u1,this._logHandler=h1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const d1=(t,e)=>e.some(n=>t instanceof n);let og,ag;function f1(){return og||(og=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p1(){return ag||(ag=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nE=new WeakMap,Vh=new WeakMap,rE=new WeakMap,Pc=new WeakMap,nf=new WeakMap;function m1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nE.set(n,t)}).catch(()=>{}),nf.set(e,t),e}function g1(t){if(Vh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Vh.set(t,e)}let xh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y1(t){xh=t(xh)}function _1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kc(this),e,...n);return rE.set(r,e.sort?e.sort():[e]),nr(r)}:p1().includes(t)?function(...e){return t.apply(kc(this),e),nr(nE.get(this))}:function(...e){return nr(t.apply(kc(this),e))}}function v1(t){return typeof t=="function"?_1(t):(t instanceof IDBTransaction&&g1(t),d1(t,f1())?new Proxy(t,xh):t)}function nr(t){if(t instanceof IDBRequest)return m1(t);if(Pc.has(t))return Pc.get(t);const e=v1(t);return e!==t&&(Pc.set(t,e),nf.set(e,t)),e}const kc=t=>nf.get(t);function E1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=nr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(nr(o.result),u.oldVersion,u.newVersion,nr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const w1=["get","getKey","getAll","getAllKeys","count"],T1=["put","add","delete","clear"],Nc=new Map;function lg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nc.get(e))return Nc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=T1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||w1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Nc.set(e,s),s}y1(t=>({...t,get:(e,n,r)=>lg(e,n)||t.get(e,n,r),has:(e,n)=>!!lg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function S1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oh="@firebase/app",ug="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new tf("@firebase/app"),A1="@firebase/app-compat",C1="@firebase/analytics-compat",R1="@firebase/analytics",P1="@firebase/app-check-compat",k1="@firebase/app-check",N1="@firebase/auth",D1="@firebase/auth-compat",V1="@firebase/database",x1="@firebase/data-connect",O1="@firebase/database-compat",L1="@firebase/functions",M1="@firebase/functions-compat",b1="@firebase/installations",F1="@firebase/installations-compat",U1="@firebase/messaging",j1="@firebase/messaging-compat",z1="@firebase/performance",B1="@firebase/performance-compat",$1="@firebase/remote-config",H1="@firebase/remote-config-compat",W1="@firebase/storage",q1="@firebase/storage-compat",G1="@firebase/firestore",K1="@firebase/ai",Q1="@firebase/firestore-compat",Y1="firebase",X1="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="[DEFAULT]",J1={[Oh]:"fire-core",[A1]:"fire-core-compat",[R1]:"fire-analytics",[C1]:"fire-analytics-compat",[k1]:"fire-app-check",[P1]:"fire-app-check-compat",[N1]:"fire-auth",[D1]:"fire-auth-compat",[V1]:"fire-rtdb",[x1]:"fire-data-connect",[O1]:"fire-rtdb-compat",[L1]:"fire-fn",[M1]:"fire-fn-compat",[b1]:"fire-iid",[F1]:"fire-iid-compat",[U1]:"fire-fcm",[j1]:"fire-fcm-compat",[z1]:"fire-perf",[B1]:"fire-perf-compat",[$1]:"fire-rc",[H1]:"fire-rc-compat",[W1]:"fire-gcs",[q1]:"fire-gcs-compat",[G1]:"fire-fst",[Q1]:"fire-fst-compat",[K1]:"fire-vertex","fire-js":"fire-js",[Y1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Map,Z1=new Map,Mh=new Map;function cg(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $i(t){const e=t.name;if(Mh.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Mh.set(e,t);for(const n of Pl.values())cg(n,t);for(const n of Z1.values())cg(n,t);return!0}function rf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Oo("app","Firebase",eA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=X1;function iE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=Jv()),!n)throw rr.create("no-options");const s=Pl.get(i);if(s){if(Hr(n,s.options)&&Hr(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new a1(i);for(const u of Mh.values())o.addComponent(u);const l=new tA(n,r,o);return Pl.set(i,l),l}function sE(t=Lh){const e=Pl.get(t);if(!e&&t===Lh&&Jv())return iE();if(!e)throw rr.create("no-app",{appName:t});return e}function ir(t,e,n){var r;let i=(r=J1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}$i(new Wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="firebase-heartbeat-database",rA=1,_o="firebase-heartbeat-store";let Dc=null;function oE(){return Dc||(Dc=E1(nA,rA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_o)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),Dc}async function iA(t){try{const n=(await oE()).transaction(_o),r=await n.objectStore(_o).get(aE(t));return await n.done,r}catch(e){if(e instanceof Dn)Cn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function hg(t,e){try{const r=(await oE()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,aE(t)),await r.done}catch(n){if(n instanceof Dn)Cn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function aE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=1024,oA=30;class aA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>oA){const o=cA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dg(),{heartbeatsToSend:r,unsentEntries:i}=lA(this._heartbeatsCache.heartbeats),s=Rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function dg(){return new Date().toISOString().substring(0,10)}function lA(t,e=sA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),fg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),fg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QS()?YS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function fg(t){return Rl(JSON.stringify({version:2,heartbeats:t})).length}function cA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(t){$i(new Wr("platform-logger",e=>new I1(e),"PRIVATE")),$i(new Wr("heartbeat",e=>new aA(e),"PRIVATE")),ir(Oh,ug,t),ir(Oh,ug,"esm2017"),ir("fire-js","")}hA("");var pg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sr,lE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(w,C,P){for(var T=Array(arguments.length-2),At=2;At<arguments.length;At++)T[At-2]=arguments[At];return y.prototype[C].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,v){v||(v=0);var w=Array(16);if(typeof y=="string")for(var C=0;16>C;++C)w[C]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(C=0;16>C;++C)w[C]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],C=E.g[2];var P=E.g[3],T=y+(P^v&(C^P))+w[0]+3614090360&4294967295;y=v+(T<<7&4294967295|T>>>25),T=P+(C^y&(v^C))+w[1]+3905402710&4294967295,P=y+(T<<12&4294967295|T>>>20),T=C+(v^P&(y^v))+w[2]+606105819&4294967295,C=P+(T<<17&4294967295|T>>>15),T=v+(y^C&(P^y))+w[3]+3250441966&4294967295,v=C+(T<<22&4294967295|T>>>10),T=y+(P^v&(C^P))+w[4]+4118548399&4294967295,y=v+(T<<7&4294967295|T>>>25),T=P+(C^y&(v^C))+w[5]+1200080426&4294967295,P=y+(T<<12&4294967295|T>>>20),T=C+(v^P&(y^v))+w[6]+2821735955&4294967295,C=P+(T<<17&4294967295|T>>>15),T=v+(y^C&(P^y))+w[7]+4249261313&4294967295,v=C+(T<<22&4294967295|T>>>10),T=y+(P^v&(C^P))+w[8]+1770035416&4294967295,y=v+(T<<7&4294967295|T>>>25),T=P+(C^y&(v^C))+w[9]+2336552879&4294967295,P=y+(T<<12&4294967295|T>>>20),T=C+(v^P&(y^v))+w[10]+4294925233&4294967295,C=P+(T<<17&4294967295|T>>>15),T=v+(y^C&(P^y))+w[11]+2304563134&4294967295,v=C+(T<<22&4294967295|T>>>10),T=y+(P^v&(C^P))+w[12]+1804603682&4294967295,y=v+(T<<7&4294967295|T>>>25),T=P+(C^y&(v^C))+w[13]+4254626195&4294967295,P=y+(T<<12&4294967295|T>>>20),T=C+(v^P&(y^v))+w[14]+2792965006&4294967295,C=P+(T<<17&4294967295|T>>>15),T=v+(y^C&(P^y))+w[15]+1236535329&4294967295,v=C+(T<<22&4294967295|T>>>10),T=y+(C^P&(v^C))+w[1]+4129170786&4294967295,y=v+(T<<5&4294967295|T>>>27),T=P+(v^C&(y^v))+w[6]+3225465664&4294967295,P=y+(T<<9&4294967295|T>>>23),T=C+(y^v&(P^y))+w[11]+643717713&4294967295,C=P+(T<<14&4294967295|T>>>18),T=v+(P^y&(C^P))+w[0]+3921069994&4294967295,v=C+(T<<20&4294967295|T>>>12),T=y+(C^P&(v^C))+w[5]+3593408605&4294967295,y=v+(T<<5&4294967295|T>>>27),T=P+(v^C&(y^v))+w[10]+38016083&4294967295,P=y+(T<<9&4294967295|T>>>23),T=C+(y^v&(P^y))+w[15]+3634488961&4294967295,C=P+(T<<14&4294967295|T>>>18),T=v+(P^y&(C^P))+w[4]+3889429448&4294967295,v=C+(T<<20&4294967295|T>>>12),T=y+(C^P&(v^C))+w[9]+568446438&4294967295,y=v+(T<<5&4294967295|T>>>27),T=P+(v^C&(y^v))+w[14]+3275163606&4294967295,P=y+(T<<9&4294967295|T>>>23),T=C+(y^v&(P^y))+w[3]+4107603335&4294967295,C=P+(T<<14&4294967295|T>>>18),T=v+(P^y&(C^P))+w[8]+1163531501&4294967295,v=C+(T<<20&4294967295|T>>>12),T=y+(C^P&(v^C))+w[13]+2850285829&4294967295,y=v+(T<<5&4294967295|T>>>27),T=P+(v^C&(y^v))+w[2]+4243563512&4294967295,P=y+(T<<9&4294967295|T>>>23),T=C+(y^v&(P^y))+w[7]+1735328473&4294967295,C=P+(T<<14&4294967295|T>>>18),T=v+(P^y&(C^P))+w[12]+2368359562&4294967295,v=C+(T<<20&4294967295|T>>>12),T=y+(v^C^P)+w[5]+4294588738&4294967295,y=v+(T<<4&4294967295|T>>>28),T=P+(y^v^C)+w[8]+2272392833&4294967295,P=y+(T<<11&4294967295|T>>>21),T=C+(P^y^v)+w[11]+1839030562&4294967295,C=P+(T<<16&4294967295|T>>>16),T=v+(C^P^y)+w[14]+4259657740&4294967295,v=C+(T<<23&4294967295|T>>>9),T=y+(v^C^P)+w[1]+2763975236&4294967295,y=v+(T<<4&4294967295|T>>>28),T=P+(y^v^C)+w[4]+1272893353&4294967295,P=y+(T<<11&4294967295|T>>>21),T=C+(P^y^v)+w[7]+4139469664&4294967295,C=P+(T<<16&4294967295|T>>>16),T=v+(C^P^y)+w[10]+3200236656&4294967295,v=C+(T<<23&4294967295|T>>>9),T=y+(v^C^P)+w[13]+681279174&4294967295,y=v+(T<<4&4294967295|T>>>28),T=P+(y^v^C)+w[0]+3936430074&4294967295,P=y+(T<<11&4294967295|T>>>21),T=C+(P^y^v)+w[3]+3572445317&4294967295,C=P+(T<<16&4294967295|T>>>16),T=v+(C^P^y)+w[6]+76029189&4294967295,v=C+(T<<23&4294967295|T>>>9),T=y+(v^C^P)+w[9]+3654602809&4294967295,y=v+(T<<4&4294967295|T>>>28),T=P+(y^v^C)+w[12]+3873151461&4294967295,P=y+(T<<11&4294967295|T>>>21),T=C+(P^y^v)+w[15]+530742520&4294967295,C=P+(T<<16&4294967295|T>>>16),T=v+(C^P^y)+w[2]+3299628645&4294967295,v=C+(T<<23&4294967295|T>>>9),T=y+(C^(v|~P))+w[0]+4096336452&4294967295,y=v+(T<<6&4294967295|T>>>26),T=P+(v^(y|~C))+w[7]+1126891415&4294967295,P=y+(T<<10&4294967295|T>>>22),T=C+(y^(P|~v))+w[14]+2878612391&4294967295,C=P+(T<<15&4294967295|T>>>17),T=v+(P^(C|~y))+w[5]+4237533241&4294967295,v=C+(T<<21&4294967295|T>>>11),T=y+(C^(v|~P))+w[12]+1700485571&4294967295,y=v+(T<<6&4294967295|T>>>26),T=P+(v^(y|~C))+w[3]+2399980690&4294967295,P=y+(T<<10&4294967295|T>>>22),T=C+(y^(P|~v))+w[10]+4293915773&4294967295,C=P+(T<<15&4294967295|T>>>17),T=v+(P^(C|~y))+w[1]+2240044497&4294967295,v=C+(T<<21&4294967295|T>>>11),T=y+(C^(v|~P))+w[8]+1873313359&4294967295,y=v+(T<<6&4294967295|T>>>26),T=P+(v^(y|~C))+w[15]+4264355552&4294967295,P=y+(T<<10&4294967295|T>>>22),T=C+(y^(P|~v))+w[6]+2734768916&4294967295,C=P+(T<<15&4294967295|T>>>17),T=v+(P^(C|~y))+w[13]+1309151649&4294967295,v=C+(T<<21&4294967295|T>>>11),T=y+(C^(v|~P))+w[4]+4149444226&4294967295,y=v+(T<<6&4294967295|T>>>26),T=P+(v^(y|~C))+w[11]+3174756917&4294967295,P=y+(T<<10&4294967295|T>>>22),T=C+(y^(P|~v))+w[2]+718787259&4294967295,C=P+(T<<15&4294967295|T>>>17),T=v+(P^(C|~y))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,w=this.B,C=this.h,P=0;P<y;){if(C==0)for(;P<=v;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<y;)if(w[C++]=E.charCodeAt(P++),C==this.blockSize){i(this,w),C=0;break}}else for(;P<y;)if(w[C++]=E[P++],C==this.blockSize){i(this,w),C=0;break}}this.h=C,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var w=0;32>w;w+=8)E[v++]=this.g[y]>>>w&255;return E};function s(E,y){var v=l;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],w=!0,C=E.length-1;0<=C;C--){var P=E[C]|0;w&&P==y||(v[C]=P,w=!1)}this.g=v}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return M(h(-E));for(var y=[],v=1,w=0;E>=v;w++)y[w]=E/v|0,v*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return M(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),w=p,C=0;C<E.length;C+=8){var P=Math.min(8,E.length-C),T=parseInt(E.substring(C,C+P),y);8>P?(P=h(Math.pow(y,P)),w=w.j(P).add(h(T))):(w=w.j(v),w=w.add(h(T)))}return w}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-M(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var w=this.i(v);E+=(0<=w?w:4294967296+w)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(V(this))return"-"+M(this).toString(E);for(var y=h(Math.pow(E,6)),v=this,w="";;){var C=x(v,y).g;v=I(v,C.j(y));var P=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=C,k(v))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function V(E){return E.h==-1}t.l=function(E){return E=I(this,E),V(E)?-1:k(E)?0:1};function M(E){for(var y=E.g.length,v=[],w=0;w<y;w++)v[w]=~E.g[w];return new o(v,~E.h).add(g)}t.abs=function(){return V(this)?M(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0,C=0;C<=y;C++){var P=w+(this.i(C)&65535)+(E.i(C)&65535),T=(P>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);w=T>>>16,P&=65535,T&=65535,v[C]=T<<16|P}return new o(v,v[v.length-1]&-2147483648?-1:0)};function I(E,y){return E.add(M(y))}t.j=function(E){if(k(this)||k(E))return p;if(V(this))return V(E)?M(this).j(M(E)):M(M(this).j(E));if(V(E))return M(this.j(M(E)));if(0>this.l(A)&&0>E.l(A))return h(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],w=0;w<2*y;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<E.g.length;C++){var P=this.i(w)>>>16,T=this.i(w)&65535,At=E.i(C)>>>16,Ir=E.i(C)&65535;v[2*w+2*C]+=T*Ir,_(v,2*w+2*C),v[2*w+2*C+1]+=P*Ir,_(v,2*w+2*C+1),v[2*w+2*C+1]+=T*At,_(v,2*w+2*C+1),v[2*w+2*C+2]+=P*At,_(v,2*w+2*C+2)}for(w=0;w<y;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=y;w<2*y;w++)v[w]=0;return new o(v,0)};function _(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function S(E,y){this.g=E,this.h=y}function x(E,y){if(k(y))throw Error("division by zero");if(k(E))return new S(p,p);if(V(E))return y=x(M(E),y),new S(M(y.g),M(y.h));if(V(y))return y=x(E,M(y)),new S(M(y.g),y.h);if(30<E.g.length){if(V(E)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,w=y;0>=w.l(E);)v=j(v),w=j(w);var C=U(v,1),P=U(w,1);for(w=U(w,2),v=U(v,2);!k(w);){var T=P.add(w);0>=T.l(E)&&(C=C.add(v),P=T),w=U(w,1),v=U(v,1)}return y=I(E,C.j(y)),new S(C,y)}for(C=p;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=h(v),T=P.j(y);V(T)||0<T.l(E);)v-=w,P=h(v),T=P.j(y);k(P)&&(P=g),C=C.add(P),E=I(E,T)}return new S(C,E)}t.A=function(E){return x(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)&E.i(w);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)|E.i(w);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],w=0;w<y;w++)v[w]=this.i(w)^E.i(w);return new o(v,this.h^E.h)};function j(E){for(var y=E.g.length+1,v=[],w=0;w<y;w++)v[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(v,E.h)}function U(E,y){var v=y>>5;y%=32;for(var w=E.g.length-v,C=[],P=0;P<w;P++)C[P]=0<y?E.i(P+v)>>>y|E.i(P+v+1)<<32-y:E.i(P+v);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,sr=o}).apply(typeof pg<"u"?pg:typeof self<"u"?self:typeof window<"u"?window:{});var Ra=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uE,Os,cE,Ga,bh,hE,dE,fE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ra=="object"&&Ra];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in d))break e;d=d[R]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,R={next:function(){if(!m&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function p(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,m),a.apply(c,R)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function k(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,R,D){for(var F=Array(arguments.length-2),le=2;le<arguments.length;le++)F[le-2]=arguments[le];return c.prototype[R].apply(m,F)}}function V(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function M(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const R=a.length||0,D=m.length||0;a.length=R+D;for(let F=0;F<D;F++)a[R+F]=m[F]}else a.push(m)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function x(a){return x[" "](a),a}x[" "]=function(){};var j=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function U(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,c){let d,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(d in m)a[d]=m[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class At{constructor(){this.h=this.g=null}add(c,d){const m=Ir.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ir=new I(()=>new os,a=>a.reset());class os{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let an,z=!1,K=new At,X=()=>{const a=l.Promise.resolve(void 0);an=()=>{a.then(ye)}};var ye=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var c=Ir;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Se(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};var ln=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function un(a,c){if(Se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{x(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:cn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&un.aa.h.call(this)}}k(un,Se);var cn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),S0=0;function A0(a,c,d,m,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=R,this.key=++S0,this.da=this.fa=!1}function qo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Go(a){this.src=a,this.g={},this.h=0}Go.prototype.add=function(a,c,d,m,R){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var F=xu(a,c,m,R);return-1<F?(c=a[F],d||(c.fa=!1)):(c=new A0(c,this.src,D,!!m,R),c.fa=d,a.push(c)),c};function Vu(a,c){var d=c.type;if(d in a.g){var m=a.g[d],R=Array.prototype.indexOf.call(m,c,void 0),D;(D=0<=R)&&Array.prototype.splice.call(m,R,1),D&&(qo(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function xu(a,c,d,m){for(var R=0;R<a.length;++R){var D=a[R];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==m)return R}return-1}var Ou="closure_lm_"+(1e6*Math.random()|0),Lu={};function Qf(a,c,d,m,R){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Qf(a,c[D],d,m,R);return null}return d=Jf(d),a&&a[hn]?a.K(c,d,h(m)?!!m.capture:!1,R):C0(a,c,d,!1,m,R)}function C0(a,c,d,m,R,D){if(!c)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,le=bu(a);if(le||(a[Ou]=le=new Go(a)),d=le.add(c,d,m,F,D),d.proxy)return d;if(m=R0(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)ln||(R=F),R===void 0&&(R=!1),a.addEventListener(c.toString(),m,R);else if(a.attachEvent)a.attachEvent(Xf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function R0(){function a(d){return c.call(a.src,a.listener,d)}const c=P0;return a}function Yf(a,c,d,m,R){if(Array.isArray(c))for(var D=0;D<c.length;D++)Yf(a,c[D],d,m,R);else m=h(m)?!!m.capture:!!m,d=Jf(d),a&&a[hn]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=xu(D,d,m,R),-1<d&&(qo(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=bu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=xu(c,d,m,R)),(d=-1<a?c[a]:null)&&Mu(d))}function Mu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[hn])Vu(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(Xf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=bu(c))?(Vu(d,a),d.h==0&&(d.src=null,c[Ou]=null)):qo(a)}}}function Xf(a){return a in Lu?Lu[a]:Lu[a]="on"+a}function P0(a,c){if(a.da)a=!0;else{c=new un(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&Mu(a),a=d.call(m,c)}return a}function bu(a){return a=a[Ou],a instanceof Go?a:null}var Fu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jf(a){return typeof a=="function"?a:(a[Fu]||(a[Fu]=function(c){return a.handleEvent(c)}),a[Fu])}function qe(){ae.call(this),this.i=new Go(this),this.M=this,this.F=null}k(qe,ae),qe.prototype[hn]=!0,qe.prototype.removeEventListener=function(a,c,d,m){Yf(this,a,c,d,m)};function rt(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Se(c,a);else if(c instanceof Se)c.target=c.target||a;else{var R=c;c=new Se(m,a),w(c,R)}if(R=!0,d)for(var D=d.length-1;0<=D;D--){var F=c.g=d[D];R=Ko(F,m,!0,c)&&R}if(F=c.g=a,R=Ko(F,m,!0,c)&&R,R=Ko(F,m,!1,c)&&R,d)for(D=0;D<d.length;D++)F=c.g=d[D],R=Ko(F,m,!1,c)&&R}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)qo(d[m]);delete a.g[c],a.h--}}this.F=null},qe.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},qe.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function Ko(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,D=0;D<c.length;++D){var F=c[D];if(F&&!F.da&&F.capture==d){var le=F.listener,Ue=F.ha||F.src;F.fa&&Vu(a.i,F),R=le.call(Ue,m)!==!1&&R}}return R&&!m.defaultPrevented}function Zf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function ep(a){a.g=Zf(()=>{a.g=null,a.i&&(a.i=!1,ep(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class k0 extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ep(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function as(a){ae.call(this),this.h=a,this.g={}}k(as,ae);var tp=[];function np(a){U(a.g,function(c,d){this.g.hasOwnProperty(d)&&Mu(c)},a),a.g={}}as.prototype.N=function(){as.aa.N.call(this),np(this)},as.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Uu=l.JSON.stringify,N0=l.JSON.parse,D0=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function ju(){}ju.prototype.h=null;function rp(a){return a.h||(a.h=a.i())}function ip(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zu(){Se.call(this,"d")}k(zu,Se);function Bu(){Se.call(this,"c")}k(Bu,Se);var Sr={},sp=null;function Qo(){return sp=sp||new qe}Sr.La="serverreachability";function op(a){Se.call(this,Sr.La,a)}k(op,Se);function us(a){const c=Qo();rt(c,new op(c))}Sr.STAT_EVENT="statevent";function ap(a,c){Se.call(this,Sr.STAT_EVENT,a),this.stat=c}k(ap,Se);function it(a){const c=Qo();rt(c,new ap(c,a))}Sr.Ma="timingevent";function lp(a,c){Se.call(this,Sr.Ma,a),this.size=c}k(lp,Se);function cs(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function hs(){this.g=!0}hs.prototype.xa=function(){this.g=!1};function V0(a,c,d,m,R,D){a.info(function(){if(a.g)if(D)for(var F="",le=D.split("&"),Ue=0;Ue<le.length;Ue++){var ie=le[Ue].split("=");if(1<ie.length){var Ge=ie[0];ie=ie[1];var Ke=Ge.split("_");F=2<=Ke.length&&Ke[1]=="type"?F+(Ge+"="+ie+"&"):F+(Ge+"=redacted&")}}else F=null;else F=D;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+c+`
`+d+`
`+F})}function x0(a,c,d,m,R,D,F){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+c+`
`+d+`
`+D+" "+F})}function ri(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+L0(a,d)+(m?" "+m:"")})}function O0(a,c){a.info(function(){return"TIMEOUT: "+c})}hs.prototype.info=function(){};function L0(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var R=m[1];if(Array.isArray(R)&&!(1>R.length)){var D=R[0];if(D!="noop"&&D!="stop"&&D!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return Uu(d)}catch{return c}}var Yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},up={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$u;function Xo(){}k(Xo,ju),Xo.prototype.g=function(){return new XMLHttpRequest},Xo.prototype.i=function(){return{}},$u=new Xo;function Vn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new as(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new cp}function cp(){this.i=null,this.g="",this.h=!1}var hp={},Hu={};function Wu(a,c,d){a.L=1,a.v=ta(dn(c)),a.m=d,a.P=!0,dp(a,null)}function dp(a,c){a.F=Date.now(),Jo(a),a.A=dn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Cp(d.i,"t",m),a.C=0,d=a.j.J,a.h=new cp,a.g=Hp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new k0(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(tp[0]=R.toString()),R=tp);for(var D=0;D<R.length;D++){var F=Qf(d,R[D],m||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),us(),V0(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const c=this.M;c&&fn(a)==3?c.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=fn(this.g);var c=this.g.Ba();const oi=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||xp(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=oi?us(3):us(2)),qu(this);var d=this.g.Z();this.X=d;t:if(fp(this)){var m=xp(this.g);a="";var R=m.length,D=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),ds(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(D&&c==R-1)});m.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,x0(this.i,this.u,this.A,this.l,this.R,Ke,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Ue=this.g;if((le=Ue.g?Ue.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(le)){var ie=le;break t}}ie=null}if(d=ie)ri(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gu(this,d);else{this.o=!1,this.s=3,it(12),Ar(this),ds(this);break e}}if(this.P){d=!0;let Lt;for(;!this.J&&this.C<F.length;)if(Lt=M0(this,F),Lt==Hu){Ke==4&&(this.s=4,it(14),d=!1),ri(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==hp){this.s=4,it(15),ri(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else ri(this.i,this.l,Lt,null),Gu(this,Lt);if(fp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||F.length!=0||this.h.h||(this.s=1,it(16),d=!1),this.o=this.o&&d,!d)ri(this.i,this.l,F,"[Invalid Chunked Response]"),Ar(this),ds(this);else if(0<F.length&&!this.W){this.W=!0;var Ge=this.j;Ge.g==this&&Ge.ba&&!Ge.M&&(Ge.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Zu(Ge),Ge.M=!0,it(11))}}else ri(this.i,this.l,F,null),Gu(this,F);Ke==4&&Ar(this),this.o&&!this.J&&(Ke==4?jp(this.j,this):(this.o=!1,Jo(this)))}else Z0(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Ar(this),ds(this)}}}catch{}finally{}};function fp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function M0(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?Hu:(d=Number(c.substring(d,m)),isNaN(d)?hp:(m+=1,m+d>c.length?Hu:(c=c.slice(m,m+d),a.C=m+d,c)))}Vn.prototype.cancel=function(){this.J=!0,Ar(this)};function Jo(a){a.S=Date.now()+a.I,pp(a,a.I)}function pp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=cs(g(a.ba,a),c)}function qu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(O0(this.i,this.A),this.L!=2&&(us(),it(17)),Ar(this),this.s=2,ds(this)):pp(this,this.S-a)};function ds(a){a.j.G==0||a.J||jp(a.j,a)}function Ar(a){qu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,np(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Gu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ku(d.h,a))){if(!a.K&&Ku(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)aa(d),sa(d);else break e;Ju(d),it(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=cs(g(d.Za,d),6e3));if(1>=yp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Rr(d,11)}else if((a.K||d.g==a)&&aa(d),!_(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let ie=R[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const Ge=ie[3];Ge!=null&&(d.la=Ge,d.j.info("VER="+d.la));const Ke=ie[4];Ke!=null&&(d.Aa=Ke,d.j.info("SVER="+d.Aa));const oi=ie[5];oi!=null&&typeof oi=="number"&&0<oi&&(m=1.5*oi,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Lt=a.g;if(Lt){const ua=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ua){var D=m.h;D.g||ua.indexOf("spdy")==-1&&ua.indexOf("quic")==-1&&ua.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Qu(D,D.h),D.h=null))}if(m.D){const ec=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(m.ya=ec,he(m.I,m.D,ec))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var F=a;if(m.qa=$p(m,m.J?m.ia:null,m.W),F.K){_p(m.h,F);var le=F,Ue=m.L;Ue&&(le.I=Ue),le.B&&(qu(le),Jo(le)),m.g=F}else Fp(m);0<d.i.length&&oa(d)}else ie[0]!="stop"&&ie[0]!="close"||Rr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Rr(d,7):Xu(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}us(4)}catch{}}var b0=class{constructor(a,c){this.g=a,this.map=c}};function mp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function gp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function yp(a){return a.h?1:a.g?a.g.size:0}function Ku(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Qu(a,c){a.g?a.g.add(c):a.h=c}function _p(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}mp.prototype.cancel=function(){if(this.i=vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function vp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return V(a.i)}function F0(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function U0(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function Ep(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=U0(a),m=F0(a),R=m.length,D=0;D<R;D++)c.call(void 0,m[D],d&&d[D],a)}var wp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function j0(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),R=null;if(0<=m){var D=a[d].substring(0,m);R=a[d].substring(m+1)}else D=a[d];c(D,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Cr){this.h=a.h,Zo(this,a.j),this.o=a.o,this.g=a.g,ea(this,a.s),this.l=a.l;var c=a.i,d=new ms;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),Tp(this,d),this.m=a.m}else a&&(c=String(a).match(wp))?(this.h=!1,Zo(this,c[1]||"",!0),this.o=fs(c[2]||""),this.g=fs(c[3]||"",!0),ea(this,c[4]),this.l=fs(c[5]||"",!0),Tp(this,c[6]||"",!0),this.m=fs(c[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}Cr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ps(c,Ip,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ps(c,Ip,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ps(d,d.charAt(0)=="/"?$0:B0,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ps(d,W0)),a.join("")};function dn(a){return new Cr(a)}function Zo(a,c,d){a.j=d?fs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ea(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Tp(a,c,d){c instanceof ms?(a.i=c,q0(a.i,a.h)):(d||(c=ps(c,H0)),a.i=new ms(c,a.h))}function he(a,c,d){a.i.set(c,d)}function ta(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ps(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,z0),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function z0(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ip=/[#\/\?@]/g,B0=/[#\?:]/g,$0=/[#\?]/g,H0=/[#\?@]/g,W0=/#/g;function ms(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function xn(a){a.g||(a.g=new Map,a.h=0,a.i&&j0(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ms.prototype,t.add=function(a,c){xn(this),this.i=null,a=ii(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Sp(a,c){xn(a),c=ii(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Ap(a,c){return xn(a),c=ii(a,c),a.g.has(c)}t.forEach=function(a,c){xn(this),this.g.forEach(function(d,m){d.forEach(function(R){a.call(c,R,m,this)},this)},this)},t.na=function(){xn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const R=a[m];for(let D=0;D<R.length;D++)d.push(c[m])}return d},t.V=function(a){xn(this);let c=[];if(typeof a=="string")Ap(this,a)&&(c=c.concat(this.g.get(ii(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return xn(this),this.i=null,a=ii(this,a),Ap(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Cp(a,c,d){Sp(a,c),0<d.length&&(a.i=null,a.g.set(ii(a,c),V(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const D=encodeURIComponent(String(m)),F=this.V(m);for(m=0;m<F.length;m++){var R=D;F[m]!==""&&(R+="="+encodeURIComponent(String(F[m]))),a.push(R)}}return this.i=a.join("&")};function ii(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function q0(a,c){c&&!a.j&&(xn(a),a.i=null,a.g.forEach(function(d,m){var R=m.toLowerCase();m!=R&&(Sp(this,m),Cp(this,R,d))},a)),a.j=c}function G0(a,c){const d=new hs;if(l.Image){const m=new Image;m.onload=A(On,d,"TestLoadImage: loaded",!0,c,m),m.onerror=A(On,d,"TestLoadImage: error",!1,c,m),m.onabort=A(On,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=A(On,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function K0(a,c){const d=new hs,m=new AbortController,R=setTimeout(()=>{m.abort(),On(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(R),D.ok?On(d,"TestPingServer: ok",!0,c):On(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),On(d,"TestPingServer: error",!1,c)})}function On(a,c,d,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(d)}catch{}}function Q0(){this.g=new D0}function Y0(a,c,d){const m=d||"";try{Ep(a,function(R,D){let F=R;h(R)&&(F=Uu(R)),c.push(m+D+"="+encodeURIComponent(F))})}catch(R){throw c.push(m+"type="+encodeURIComponent("_badmap")),R}}function na(a){this.l=a.Ub||null,this.j=a.eb||!1}k(na,ju),na.prototype.g=function(){return new ra(this.l,this.j)},na.prototype.i=function(a){return function(){return a}}({});function ra(a,c){qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(ra,qe),t=ra.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ys(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?gs(this):ys(this),this.readyState==3&&Rp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,gs(this))},t.Qa=function(a){this.g&&(this.response=a,gs(this))},t.ga=function(){this.g&&gs(this)};function gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ys(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ys(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Pp(a){let c="";return U(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function Yu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Pp(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):he(a,c,d))}function Te(a){qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Te,qe);var X0=/^https?$/i,J0=["POST","PUT"];t=Te.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$u.g(),this.v=this.o?rp(this.o):rp($u),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){kp(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)d.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(J0,c,void 0))||m||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,F]of d)this.g.setRequestHeader(D,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vp(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){kp(this,D)}};function kp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Np(a),ia(a)}function Np(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,rt(this,"complete"),rt(this,"abort"),ia(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ia(this,!0)),Te.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Dp(this):this.bb())},t.bb=function(){Dp(this)};function Dp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)Zf(a.Ea,0,a);else if(rt(a,"readystatechange"),fn(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=F===0){var R=String(a.D).match(wp)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),m=!X0.test(R?R.toLowerCase():"")}d=m}if(d)rt(a,"complete"),rt(a,"success");else{a.m=6;try{var D=2<fn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Np(a)}}finally{ia(a)}}}}function ia(a,c){if(a.g){Vp(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||rt(a,"ready");try{d.onreadystatechange=m}catch{}}}function Vp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),N0(c)}};function xp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Z0(a){const c={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(_(a[m]))continue;var d=C(a[m]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[R]||[];c[R]=D,D.push(d)}E(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _s(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Op(a){this.Aa=0,this.i=[],this.j=new hs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_s("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_s("baseRetryDelayMs",5e3,a),this.cb=_s("retryDelaySeedMs",1e4,a),this.Wa=_s("forwardChannelMaxRetries",2,a),this.wa=_s("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new mp(a&&a.concurrentRequestLimit),this.Da=new Q0,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Op.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){it(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=$p(this,null,this.W),oa(this)};function Xu(a){if(Lp(a),a.G==3){var c=a.U++,d=dn(a.I);if(he(d,"SID",a.K),he(d,"RID",c),he(d,"TYPE","terminate"),vs(a,d),c=new Vn(a,a.j,c),c.L=2,c.v=ta(dn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Hp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Jo(c)}Bp(a)}function sa(a){a.g&&(Zu(a),a.g.cancel(),a.g=null)}function Lp(a){sa(a),a.u&&(l.clearTimeout(a.u),a.u=null),aa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function oa(a){if(!gp(a.h)&&!a.s){a.s=!0;var c=a.Ga;an||X(),z||(an(),z=!0),K.add(c,a),a.B=0}}function eT(a,c){return yp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=cs(g(a.Ga,a,c),zp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Vn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),w(D,this.S)):D=this.S),this.m!==null||this.O||(R.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=bp(this,R,c),d=dn(this.I),he(d,"RID",a),he(d,"CVER",22),this.D&&he(d,"X-HTTP-Session-Id",this.D),vs(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(Pp(D)))+"&"+c:this.m&&Yu(d,this.m,D)),Qu(this.h,R),this.Ua&&he(d,"TYPE","init"),this.P?(he(d,"$req",c),he(d,"SID","null"),R.T=!0,Wu(R,d,null)):Wu(R,d,c),this.G=2}}else this.G==3&&(a?Mp(this,a):this.i.length==0||gp(this.h)||Mp(this))};function Mp(a,c){var d;c?d=c.l:d=a.U++;const m=dn(a.I);he(m,"SID",a.K),he(m,"RID",d),he(m,"AID",a.T),vs(a,m),a.m&&a.o&&Yu(m,a.m,a.o),d=new Vn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=bp(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Qu(a.h,d),Wu(d,m,c)}function vs(a,c){a.H&&U(a.H,function(d,m){he(c,m,d)}),a.l&&Ep({},function(d,m){he(c,m,d)})}function bp(a,c,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var R=a.i;let D=-1;for(;;){const F=["count="+d];D==-1?0<d?(D=R[0].g,F.push("ofs="+D)):D=0:F.push("ofs="+D);let le=!0;for(let Ue=0;Ue<d;Ue++){let ie=R[Ue].g;const Ge=R[Ue].map;if(ie-=D,0>ie)D=Math.max(0,R[Ue].g-100),le=!1;else try{Y0(Ge,F,"req"+ie+"_")}catch{m&&m(Ge)}}if(le){m=F.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function Fp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;an||X(),z||(an(),z=!0),K.add(c,a),a.v=0}}function Ju(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=cs(g(a.Fa,a),zp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Up(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=cs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),sa(this),Up(this))};function Zu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Up(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=dn(a.qa);he(c,"RID","rpc"),he(c,"SID",a.K),he(c,"AID",a.T),he(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(c,"TO",a.ja),he(c,"TYPE","xmlhttp"),vs(a,c),a.m&&a.o&&Yu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ta(dn(c)),d.m=null,d.P=!0,dp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,sa(this),Ju(this),it(19))};function aa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function jp(a,c){var d=null;if(a.g==c){aa(a),Zu(a),a.g=null;var m=2}else if(Ku(a.h,c))d=c.D,_p(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=a.B;m=Qo(),rt(m,new lp(m,d)),oa(a)}else Fp(a);else if(R=c.s,R==3||R==0&&0<c.X||!(m==1&&eT(a,c)||m==2&&Ju(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),R){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function zp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function Rr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),m=a.Xa;const R=!m;m=new Cr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Zo(m,"https"),ta(m),R?G0(m.toString(),d):K0(m.toString(),d)}else it(2);a.G=0,a.l&&a.l.sa(c),Bp(a),Lp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Bp(a){if(a.G=0,a.ka=[],a.l){const c=vp(a.h);(c.length!=0||a.i.length!=0)&&(M(a.ka,c),M(a.ka,a.i),a.h.i.length=0,V(a.i),a.i.length=0),a.l.ra()}}function $p(a,c,d){var m=d instanceof Cr?dn(d):new Cr(d);if(m.g!="")c&&(m.g=c+"."+m.g),ea(m,m.s);else{var R=l.location;m=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var D=new Cr(null);m&&Zo(D,m),c&&(D.g=c),R&&ea(D,R),d&&(D.l=d),m=D}return d=a.D,c=a.ya,d&&c&&he(m,d,c),he(m,"VER",a.la),vs(a,m),m}function Hp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Te(new na({eb:d})):new Te(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wp(){}t=Wp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function la(){}la.prototype.g=function(a,c){return new yt(a,c)};function yt(a,c){qe.call(this),this.g=new Op(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!_(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new si(this)}k(yt,qe),yt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yt.prototype.close=function(){Xu(this.g)},yt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Uu(a),a=d);c.i.push(new b0(c.Ya++,a)),c.G==3&&oa(c)},yt.prototype.N=function(){this.g.l=null,delete this.j,Xu(this.g),delete this.g,yt.aa.N.call(this)};function qp(a){zu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}k(qp,zu);function Gp(){Bu.call(this),this.status=1}k(Gp,Bu);function si(a){this.g=a}k(si,Wp),si.prototype.ua=function(){rt(this.g,"a")},si.prototype.ta=function(a){rt(this.g,new qp(a))},si.prototype.sa=function(a){rt(this.g,new Gp)},si.prototype.ra=function(){rt(this.g,"b")},la.prototype.createWebChannel=la.prototype.g,yt.prototype.send=yt.prototype.o,yt.prototype.open=yt.prototype.m,yt.prototype.close=yt.prototype.close,fE=function(){return new la},dE=function(){return Qo()},hE=Sr,bh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Yo.NO_ERROR=0,Yo.TIMEOUT=8,Yo.HTTP_ERROR=6,Ga=Yo,up.COMPLETE="complete",cE=up,ip.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",qe.prototype.listen=qe.prototype.K,Os=ip,Te.prototype.listenOnce=Te.prototype.L,Te.prototype.getLastError=Te.prototype.Ka,Te.prototype.getLastErrorCode=Te.prototype.Ba,Te.prototype.getStatus=Te.prototype.Z,Te.prototype.getResponseJson=Te.prototype.Oa,Te.prototype.getResponseText=Te.prototype.oa,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Ha,uE=Te}).apply(typeof Ra<"u"?Ra:typeof self<"u"?self:typeof window<"u"?window:{});const mg="@firebase/firestore",gg="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let es="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new tf("@firebase/firestore");function li(){return qr.logLevel}function $(t,...e){if(qr.logLevel<=ee.DEBUG){const n=e.map(sf);qr.debug(`Firestore (${es}): ${t}`,...n)}}function Rn(t,...e){if(qr.logLevel<=ee.ERROR){const n=e.map(sf);qr.error(`Firestore (${es}): ${t}`,...n)}}function ur(t,...e){if(qr.logLevel<=ee.WARN){const n=e.map(sf);qr.warn(`Firestore (${es}): ${t}`,...n)}}function sf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,pE(t,r,n)}function pE(t,e,n){let r=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rn(r),new Error(r)}function se(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||pE(e,i,r)}function Y(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class fA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pA{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){se(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new mE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Je(e)}}class mA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new mA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){se(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new yg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new yg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=_A(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Fh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return J(r,i);{const s=gE(),o=vA(s.encode(_g(t,n)),s.encode(_g(e,n)));return o!==0?o:J(r,i)}}n+=r>65535?2:1}return J(t.length,e.length)}function _g(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function vA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return J(t[n],e[n]);return J(t.length,e.length)}function Hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="__name__";class Kt{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&G(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Kt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Kt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Kt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return J(e.length,n.length)}static compareSegments(e,n){const r=Kt.isNumericId(e),i=Kt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Kt.extractNumericId(e).compare(Kt.extractNumericId(n)):Fh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sr.fromString(e.substring(4,e.length-2))}}class ue extends Kt{construct(e,n,r){return new ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ue(n)}static emptyPath(){return new ue([])}}const EA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Kt{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return EA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vg}static keyField(){return new Be([vg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new B(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(ue.fromString(e))}static fromName(e){return new W(ue.fromString(e).popFirst(5))}static empty(){return new W(ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new ue(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(t,e,n){if(!n)throw new B(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wA(t,e,n,r){if(e===!0&&r===!0)throw new B(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Eg(t){if(!W.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wg(t){if(W.isDocumentKey(t))throw new B(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _E(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G(12329,{type:typeof t})}function Jt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hu(t);throw new B(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,e){const n={typeString:t};return e&&(n.value=e),n}function Mo(t,e){if(!_E(t))throw new B(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new B(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=-62135596800,Ig=1e6;class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Ig);return new pe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Tg)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ig}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Mo(e,pe._jsonSchema))return new pe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Tg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pe._jsonSchemaVersion="firestore/timestamp/1.0",pe._jsonSchema={type:De("string",pe._jsonSchemaVersion),seconds:De("number"),nanoseconds:De("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new pe(0,0))}static max(){return new Q(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=-1;function TA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new pe(n+1,0):new pe(n,r));return new cr(i,W.empty(),e)}function IA(t){return new cr(t.readTime,t.key,vo)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(Q.min(),W.empty(),vo)}static max(){return new cr(Q.max(),W.empty(),vo)}}function SA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==AA)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function RA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ns(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}du.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=-1;function fu(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function PA(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="";function kA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Sg(e)),e=NA(t.get(n),e);return Sg(e)}function NA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case vE:n+="";break;default:n+=s}}return n}function Sg(t){return t+vE+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function EE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||ze.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pa(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pa(this.root,e,this.comparator,!0)}}class Pa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ze(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw G(43730,{key:this.key,value:this.value});if(this.right.isRed())throw G(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw G(27949);return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw G(57766)}get value(){throw G(16141)}get color(){throw G(16727)}get left(){throw G(29726)}get right(){throw G(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cg(this.data.getIterator())}getIteratorFrom(e){return new Cg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class Cg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Et([])}unionWith(e){let n=new Oe(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new wE("Invalid base64 string: "+s):s}}(e);return new We(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const DA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(se(!!t,39018),typeof t=="string"){let e=0;const n=DA.exec(t);if(se(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="server_timestamp",IE="__type__",SE="__previous_value__",AE="__local_write_time__";function lf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[IE])===null||n===void 0?void 0:n.stringValue)===TE}function pu(t){const e=t.mapValue.fields[SE];return lf(e)?pu(e):e}function Eo(t){const e=hr(t.mapValue.fields[AE].timestampValue);return new pe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const Nl="(default)";class wo{constructor(e,n){this.projectId=e,this.database=n||Nl}static empty(){return new wo("","")}get isDefaultDatabase(){return this.database===Nl}isEqual(e){return e instanceof wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="__type__",xA="__max__",ka={mapValue:{}},RE="__vector__",Dl="value";function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lf(t)?4:LA(t)?9007199254740991:OA(t)?10:11:G(28295,{value:t})}function on(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Eo(t).isEqual(Eo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=hr(i.timestampValue),l=hr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return dr(i.bytesValue).isEqual(dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?kl(o)===kl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ag(o)!==Ag(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return G(52216,{left:t})}}function To(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function Wi(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Rg(t.timestampValue,e.timestampValue);case 4:return Rg(Eo(t),Eo(e));case 5:return Fh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=dr(s),u=dr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=J(l[h],u[h]);if(f!==0)return f}return J(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=J(Ae(s.latitude),Ae(o.latitude));return l!==0?l:J(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Pg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const p=s.fields||{},g=o.fields||{},A=(l=p[Dl])===null||l===void 0?void 0:l.arrayValue,k=(u=g[Dl])===null||u===void 0?void 0:u.arrayValue,V=J(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Pg(A,k)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ka.mapValue&&o===ka.mapValue)return 0;if(s===ka.mapValue)return 1;if(o===ka.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=Fh(u[p],f[p]);if(g!==0)return g;const A=Wi(l[u[p]],h[f[p]]);if(A!==0)return A}return J(u.length,f.length)}(t.mapValue,e.mapValue);default:throw G(23264,{le:n})}}function Rg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=hr(t),r=hr(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function Pg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Wi(n[i],r[i]);if(s)return s}return J(n.length,r.length)}function qi(t){return Uh(t)}function Uh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Uh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Uh(n.fields[o])}`;return i+"}"}(t.mapValue):G(61005,{value:t})}function Ka(t){switch(fr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pu(t);return e?16+Ka(e):16;case 5:return 2*t.stringValue.length;case 6:return dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ka(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return vr(r.fields,(s,o)=>{i+=s.length+Ka(o)}),i}(t.mapValue);default:throw G(13486,{value:t})}}function kg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function jh(t){return!!t&&"integerValue"in t}function uf(t){return!!t&&"arrayValue"in t}function Ng(t){return!!t&&"nullValue"in t}function Dg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Qa(t){return!!t&&"mapValue"in t}function OA(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[CE])===null||n===void 0?void 0:n.stringValue)===RE}function Ks(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ks(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ks(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===xA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ks(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ht(Ks(this.value))}}function PE(t){const e=[];return vr(t.fields,(n,r)=>{const i=new Be([n]);if(Qa(r)){const s=PE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Et(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new et(e,0,Q.min(),Q.min(),Q.min(),ht.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,Q.min(),Q.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,Q.min(),Q.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.position=e,this.inclusive=n}}function Vg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Wi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function xg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n="asc"){this.field=e,this.dir=n}}function MA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{}class Ne extends kE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FA(e,n,r):n==="array-contains"?new zA(e,r):n==="in"?new BA(e,r):n==="not-in"?new $A(e,r):n==="array-contains-any"?new HA(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UA(e,r):new jA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Wi(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(Wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends kE{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new Ht(e,n)}matches(e){return NE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function NE(t){return t.op==="and"}function DE(t){return bA(t)&&NE(t)}function bA(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function zh(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+qi(t.value);if(DE(t))return t.filters.map(e=>zh(e)).join(",");{const e=t.filters.map(n=>zh(n)).join(",");return`${t.op}(${e})`}}function VE(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&VE(o,i.filters[l]),!0):!1}(t,e):void G(19439)}function xE(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${qi(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(xE).join(" ,")+"}"}(t):"Filter"}class FA extends Ne{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class UA extends Ne{constructor(e,n){super(e,"in",n),this.keys=OE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jA extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=OE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class zA extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return uf(n)&&To(n.arrayValue,this.value)}}class BA extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&To(this.value.arrayValue,n)}}class $A extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!To(this.value.arrayValue,n)}}class HA extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>To(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Pe=null}}function Og(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WA(t,e,n,r,i,s,o)}function cf(t){const e=Y(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qi(r)).join(",")),e.Pe=n}return e.Pe}function hf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!xg(t.startAt,e.startAt)&&xg(t.endAt,e.endAt)}function Bh(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function qA(t,e,n,r,i,s,o,l){return new rs(t,e,n,r,i,s,o,l)}function df(t){return new rs(t)}function Lg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LE(t){return t.collectionGroup!==null}function Qs(t){const e=Y(t);if(e.Te===null){e.Te=[];const n=new Set;for(const s of e.explicitOrderBy)e.Te.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Oe(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Te.push(new Io(s,r))}),n.has(Be.keyField().canonicalString())||e.Te.push(new Io(Be.keyField(),r))}return e.Te}function Zt(t){const e=Y(t);return e.Ie||(e.Ie=GA(e,Qs(t))),e.Ie}function GA(t,e){if(t.limitType==="F")return Og(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Io(i.field,s)});const n=t.endAt?new Vl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vl(t.startAt.position,t.startAt.inclusive):null;return Og(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $h(t,e){const n=t.filters.concat([e]);return new rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Hh(t,e,n){return new rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function mu(t,e){return hf(Zt(t),Zt(e))&&t.limitType===e.limitType}function ME(t){return`${cf(Zt(t))}|lt:${t.limitType}`}function ui(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xE(i)).join(", ")}]`),fu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>qi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>qi(i)).join(",")),`Target(${r})`}(Zt(t))}; limitType=${t.limitType})`}function gu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Qs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Vg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Qs(r),i)||r.endAt&&!function(o,l,u){const h=Vg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Qs(r),i))}(t,e)}function KA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bE(t){return(e,n)=>{let r=!1;for(const i of Qs(t)){const s=QA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function QA(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Wi(u,h):G(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return EE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=new we(W.comparator);function Pn(){return YA}const FE=new we(W.comparator);function Ls(...t){let e=FE;for(const n of t)e=e.insert(n.key,n);return e}function UE(t){let e=FE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Or(){return Ys()}function jE(){return Ys()}function Ys(){return new Zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const XA=new we(W.comparator),JA=new Oe(W.comparator);function te(...t){let e=JA;for(const n of t)e=e.add(n);return e}const ZA=new Oe(J);function eC(){return ZA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function zE(t){return{integerValue:""+t}}function tC(t,e){return PA(e)?zE(e):ff(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(){this._=void 0}}function nC(t,e,n){return t instanceof So?function(i,s){const o={fields:{[IE]:{stringValue:TE},[AE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&lf(s)&&(s=pu(s)),s&&(o.fields[SE]=s),{mapValue:o}}(n,e):t instanceof Ao?$E(t,e):t instanceof Co?HE(t,e):function(i,s){const o=BE(i,s),l=Mg(o)+Mg(i.Ee);return jh(o)&&jh(i.Ee)?zE(l):ff(i.serializer,l)}(t,e)}function rC(t,e,n){return t instanceof Ao?$E(t,e):t instanceof Co?HE(t,e):n}function BE(t,e){return t instanceof xl?function(r){return jh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class So extends yu{}class Ao extends yu{constructor(e){super(),this.elements=e}}function $E(t,e){const n=WE(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class Co extends yu{constructor(e){super(),this.elements=e}}function HE(t,e){let n=WE(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class xl extends yu{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Mg(t){return Ae(t.integerValue||t.doubleValue)}function WE(t){return uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n){this.field=e,this.transform=n}}function sC(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ao&&i instanceof Ao||r instanceof Co&&i instanceof Co?Hi(r.elements,i.elements,on):r instanceof xl&&i instanceof xl?on(r.Ee,i.Ee):r instanceof So&&i instanceof So}(t.transform,e.transform)}class oC{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _u{}function qE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pf(t.key,Vt.none()):new bo(t.key,t.data,Vt.none());{const n=t.data,r=ht.empty();let i=new Oe(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Er(t.key,r,new Et(i.toArray()),Vt.none())}}function aC(t,e,n){t instanceof bo?function(i,s,o){const l=i.value.clone(),u=Fg(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Er?function(i,s,o){if(!Ya(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Fg(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(GE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,r){return t instanceof bo?function(s,o,l,u){if(!Ya(s.precondition,o))return l;const h=s.value.clone(),f=Ug(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Er?function(s,o,l,u){if(!Ya(s.precondition,o))return l;const h=Ug(s.fieldTransforms,u,o),f=o.data;return f.setAll(GE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ya(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function lC(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=BE(r.transform,i||null);s!=null&&(n===null&&(n=ht.empty()),n.set(r.field,s))}return n||null}function bg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hi(r,i,(s,o)=>sC(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends _u{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Er extends _u{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function GE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fg(t,e,n){const r=new Map;se(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,rC(o,l,n[i]))}return r}function Ug(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nC(s,o,e))}return r}class pf extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uC extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aC(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=qE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>bg(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>bg(n,r))}}class mf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=function(){return XA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new mf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,ne;function fC(t){switch(t){case O.OK:return G(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return G(15467,{code:t})}}function KE(t){if(t===void 0)return Rn("GRPC error has no .code"),O.UNKNOWN;switch(t){case Pe.OK:return O.OK;case Pe.CANCELLED:return O.CANCELLED;case Pe.UNKNOWN:return O.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return O.INTERNAL;case Pe.UNAVAILABLE:return O.UNAVAILABLE;case Pe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Pe.NOT_FOUND:return O.NOT_FOUND;case Pe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Pe.ABORTED:return O.ABORTED;case Pe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Pe.DATA_LOSS:return O.DATA_LOSS;default:return G(39323,{code:t})}}(ne=Pe||(Pe={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC=new sr([4294967295,4294967295],0);function jg(t){const e=gE().encode(t),n=new lE;return n.update(e),new Uint8Array(n.digest())}function zg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new sr([n,r],0),new sr([i,s],0)]}class gf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ms(`Invalid padding: ${n}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=sr.fromNumber(this.fe)}pe(e,n,r){let i=e.add(n.multiply(sr.fromNumber(r)));return i.compare(pC)===1&&(i=new sr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=jg(e),[r,i]=zg(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);if(!this.ye(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new gf(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.fe===0)return;const n=jg(e),[r,i]=zg(n);for(let s=0;s<this.hashCount;s++){const o=this.pe(r,i,s);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vu(Q.min(),i,new we(J),Pn(),te())}}class Fo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fo(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n,r,i){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=i}}class QE{constructor(e,n){this.targetId=e,this.De=n}}class YE{constructor(e,n,r=We.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Bg{constructor(){this.ve=0,this.Ce=$g(),this.Fe=We.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=te(),n=te(),r=te();return this.Ce.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G(38017,{changeType:s})}}),new Fo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=$g()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,se(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class mC{constructor(e){this.We=e,this.Ge=new Map,this.ze=Pn(),this.je=Na(),this.Je=Na(),this.He=new we(J)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:G(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,i)=>{this.nt(i)&&n(i)})}it(e){const n=e.targetId,r=e.De.count,i=this.st(n);if(i){const s=i.target;if(Bh(s))if(r===0){const o=new W(s.path);this.Xe(n,o,et.newNoDocument(o,Q.min()))}else se(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const l=this._t(e),u=l?this.ut(l,e,o):1;if(u!==0){this.rt(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=dr(r).toUint8Array()}catch(u){if(u instanceof wE)return ur("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new gf(o,i,s)}catch(u){return ur(u instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.We.lt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,s,null),i++)}),i}Pt(e){const n=new Map;this.Ge.forEach((s,o)=>{const l=this.st(o);if(l){if(s.current&&Bh(l.target)){const u=new W(l.target.path);this.Tt(u).has(o)||this.It(o,u)||this.Xe(o,u,et.newNoDocument(u,e))}s.Ne&&(n.set(o,s.Le()),s.ke())}});let r=te();this.Je.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ze.forEach((s,o)=>o.setReadTime(e));const i=new vu(e,n,this.He,this.ze,r);return this.ze=Pn(),this.je=Na(),this.Je=Na(),this.He=new we(J),i}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,n)?i.qe(n,1):i.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Bg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Oe(J),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Oe(J),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Bg),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Na(){return new we(W.comparator)}function $g(){return new we(W.comparator)}const gC={asc:"ASCENDING",desc:"DESCENDING"},yC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_C={and:"AND",or:"OR"};class vC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wh(t,e){return t.useProto3Json||fu(e)?e:{value:e}}function Ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function XE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EC(t,e){return Ol(t,e.toTimestamp())}function en(t){return se(!!t,49232),Q.fromTimestamp(function(n){const r=hr(n);return new pe(r.seconds,r.nanos)}(t))}function yf(t,e){return qh(t,e).canonicalString()}function qh(t,e){const n=function(i){return new ue(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function JE(t){const e=ue.fromString(t);return se(rw(e),10190,{key:e.toString()}),e}function Gh(t,e){return yf(t.databaseId,e.path)}function Vc(t,e){const n=JE(e);if(n.get(1)!==t.databaseId.projectId)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(ew(n))}function ZE(t,e){return yf(t.databaseId,e)}function wC(t){const e=JE(t);return e.length===4?ue.emptyPath():ew(e)}function Kh(t){return new ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ew(t){return se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Hg(t,e,n){return{name:Gh(t,e),fields:n.value.mapValue.fields}}function TC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:G(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(se(f===void 0||typeof f=="string",58123),We.fromBase64String(f||"")):(se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?O.UNKNOWN:KE(h.code);return new B(f,h.message||"")}(o);n=new YE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vc(t,r.document.name),s=en(r.document.updateTime),o=r.document.createTime?en(r.document.createTime):Q.min(),l=new ht({mapValue:{fields:r.document.fields}}),u=et.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Xa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vc(t,r.document),s=r.readTime?en(r.readTime):Q.min(),o=et.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Xa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vc(t,r.document),s=r.removedTargetIds||[];n=new Xa([],s,i,null)}else{if(!("filter"in e))return G(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dC(i,s),l=r.targetId;n=new QE(l,o)}}return n}function IC(t,e){let n;if(e instanceof bo)n={update:Hg(t,e.key,e.value)};else if(e instanceof pf)n={delete:Gh(t,e.key)};else if(e instanceof Er)n={update:Hg(t,e.key,e.data),updateMask:VC(e.fieldMask)};else{if(!(e instanceof uC))return G(16599,{Rt:e.type});n={verify:Gh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof So)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Co)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xl)return{fieldPath:o.field.canonicalString(),increment:l.Ee};throw G(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:EC(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:G(27497)}(t,e.precondition)),n}function SC(t,e){return t&&t.length>0?(se(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?en(i.updateTime):en(s);return o.isEqual(Q.min())&&(o=en(s)),new oC(o,i.transformResults||[])}(n,e))):[]}function AC(t,e){return{documents:[ZE(t,e.path)]}}function CC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ZE(t,i);const s=function(h){if(h.length!==0)return nw(Ht.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:ci(g.field),direction:kC(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Wh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:i}}function RC(t){let e=wC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=tw(p);return g instanceof Ht&&DE(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new Io(hi(k.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,fu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new Vl(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new Vl(A,g)}(n.endAt)),qA(e,i,o,s,l,"F",u,h)}function PC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hi(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=hi(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=hi(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return G(61313);default:return G(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(hi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return G(58110);default:return G(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>tw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return G(1026)}}(n.compositeFilter.op))}(t):G(30097,{filter:t})}function kC(t){return gC[t]}function NC(t){return yC[t]}function DC(t){return _C[t]}function ci(t){return{fieldPath:t.canonicalString()}}function hi(t){return Be.fromServerFormat(t.fieldPath)}function nw(t){return t instanceof Ne?function(n){if(n.op==="=="){if(Dg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(Ng(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Dg(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(Ng(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:NC(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(i=>nw(i));return r.length===1?r[0]:{compositeFilter:{op:DC(n.op),filters:r}}}(t):G(54877,{filter:t})}function VC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.gt=e}}function OC(t){const e=RC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.Dn=new MC}addToCollectionParentIndex(e,n){return this.Dn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(cr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class MC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iw=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(iw,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Gi(0)}static ur(){return new Gi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="LruGarbageCollector",bC=1048576;function Gg([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class FC{constructor(e){this.Tr=e,this.buffer=new Oe(Gg),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Gg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class UC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){$(qg,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ns(n)?$(qg,"Ignoring IndexedDB error during garbage collection: ",n):await ts(n)}await this.Rr(3e5)})}}class jC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(du.ue);const r=new FC(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.gr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Wg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Wg):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),li()<=ee.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function zC(t,e){return new jC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.changes=new Zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xs(r.mutation,i,Et.empty(),pe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Or();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ls();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Or();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Pn();const o=Ys(),l=function(){return Ys()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Er)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Xs(f.mutation,h,f.mutation.getFieldMask(),pe.now())):o.set(h.key,Et.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new $C(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ys();let i=new we((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Et.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=jE();f.forEach(g=>{if(!s.has(g)){const A=qE(n.get(g),r.get(g));A!==null&&p.set(g,A),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(Or());let l=vo,u=s;return o.next(h=>L.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:UE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Ls();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ls();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(p,g){return new rs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,et.newInvalidDocument(f)))});let l=Ls();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Xs(f.mutation,h,Et.empty(),pe.now()),gu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return L.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(i){return{id:i.id,version:i.version,createTime:en(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(i){return{name:i.name,query:OC(i.bundledQuery),readTime:en(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(){this.overlays=new we(W.comparator),this.kr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Or();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.wt(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.kr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=Or(),s=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Or(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Or(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}wt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hC(n,r));let s=this.kr.get(n);s===void 0&&(s=te(),this.kr.set(n,s)),this.kr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.qr=new Oe(Me.Qr),this.$r=new Oe(Me.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Me(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new W(new ue([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.$r.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new W(new ue([])),r=new Me(n,e),i=new Me(n,e+1);let s=te();return this.$r.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return W.comparator(e.key,n.key)||J(e.Hr,n.Hr)}static Ur(e,n){return J(e.Hr,n.Hr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Oe(Me.Qr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cC(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Yr=this.Yr.add(new Me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?af:this.er-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([r,i],o=>{const l=this.Zr(o.Hr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(J);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([s,o],l=>{r=r.add(l.Hr)})}),L.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new Me(new W(s),0);let l=new Oe(J);return this.Yr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Hr)),!0)},o),L.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return L.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Me(n,0),i=this.Yr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.ni=e,this.docs=function(){return new we(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,l=new W(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||SA(IA(f),r)<=0||(i.has(f.key)||gu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G(9500)}ri(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YC(this)}getSize(e){return L.resolve(this.size)}}class YC extends BC{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(e){this.persistence=e,this.ii=new Zr(n=>cf(n),hf),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.si=0,this.oi=new _f,this.targetCount=0,this._i=Gi.ar()}forEachTarget(e,n){return this.ii.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),L.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Gi(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.hr(n),L.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ii.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.ai={},this.overlays={},this.ui=new du(0),this.ci=!1,this.ci=!0,this.li=new GC,this.referenceDelegate=e(this),this.hi=new XC(this),this.indexManager=new LC,this.remoteDocumentCache=function(i){return new QC(i)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new xC(n),this.Ti=new WC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new qC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new KC(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new JC(this.ui.next());return this.referenceDelegate.Ii(),r(i).next(s=>this.referenceDelegate.di(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return L.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class JC extends CA{constructor(e){super(),this.currentSequenceNumber=e}}class vf{constructor(e){this.persistence=e,this.Ai=new _f,this.Ri=null}static Vi(e){return new vf(e)}get mi(){if(this.Ri)return this.Ri;throw G(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(i=>this.mi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.mi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.mi,r=>{const i=W.fromPath(r);return this.fi(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return L.or([()=>L.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ll{constructor(e,n){this.persistence=e,this.gi=new Zr(r=>kA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=zC(this,n)}static Vi(e,n){return new Ll(e,n)}Ii(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return L.forEach(this.gi,(r,i)=>this.Sr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ri(e,o=>this.Sr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ka(e.data.value)),n}Sr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.gi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=i}static Es(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ef(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return KS()?8:RA(nt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ps(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ys(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new ZC;return this.ws(e,n,o).next(l=>{if(s.result=l,this.Rs)return this.Ss(e,n,o,l.size)})}).next(()=>s.result)}Ss(e,n,r,i){return r.documentReadCount<this.Vs?(li()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",ui(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(li()<=ee.DEBUG&&$("QueryEngine","Query:",ui(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(li()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",ui(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(n))):L.resolve())}ps(e,n){if(Lg(n))return L.resolve(null);let r=Zt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Hh(n,null,"F"),r=Zt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.gs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.bs(n,l);return this.Ds(n,h,o,u.readTime)?this.ps(e,Hh(n,null,"F")):this.vs(e,h,n,u)}))})))}ys(e,n,r,i){return Lg(n)||i.isEqual(Q.min())?L.resolve(null):this.gs.getDocuments(e,r).next(s=>{const o=this.bs(n,s);return this.Ds(n,o,r,i)?L.resolve(null):(li()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ui(n)),this.vs(e,o,n,TA(i,vo)).next(l=>l))})}bs(e,n){let r=new Oe(bE(e));return n.forEach((i,s)=>{gu(e,s)&&(r=r.add(s))}),r}Ds(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ws(e,n,r){return li()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",ui(n)),this.gs.getDocumentsMatchingQuery(e,n,cr.min(),r)}vs(e,n,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="LocalStore",tR=3e8;class nR{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.Fs=new we(J),this.Ms=new Zr(s=>cf(s),hf),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function rR(t,e,n,r){return new nR(t,e,n,r)}async function ow(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Bs:h,removedBatchIds:o,addedBatchIds:l}))})})}function iR(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let A=L.resolve();return g.forEach(k=>{A=A.next(()=>f.getEntry(u,k)).next(V=>{const M=h.docVersions.get(k);se(M!==null,48541),V.version.compareTo(M)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function aw(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function sR(t,e){const n=Y(t),r=e.snapshotVersion;let i=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});i=n.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.hi.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.hi.addMatchingKeys(s,f.addedDocuments,p)));let A=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(We.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(p,A),function(V,M,I){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=tR?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,A,f)&&l.push(n.hi.updateTargetData(s,A))});let u=Pn(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(oR(s,o,e.documentUpdates).next(f=>{u=f.Ls,h=f.ks})),!r.isEqual(Q.min())){const f=n.hi.getLastRemoteSnapshotVersion(s).next(p=>n.hi.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.Fs=i,s))}function oR(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(wf,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ls:o,ks:i}})}function aR(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=af),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lR(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.hi.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.hi.allocateTargetId(r).next(o=>(i=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Qh(t,e,n){const r=Y(t),i=r.Fs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ns(o))throw o;$(wf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Kg(t,e,n){const r=Y(t);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=Y(u),g=p.Ms.get(f);return g!==void 0?L.resolve(p.Fs.get(g)):p.hi.getTargetData(h,f)}(r,o,Zt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:te())).next(l=>(uR(r,KA(e),l),{documents:l,qs:s})))}function uR(t,e,n){let r=t.xs.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.xs.set(e,r)}class Qg{constructor(){this.activeTargetIds=eC()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cR{constructor(){this.Fo=new Qg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Qg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="ConnectivityMonitor";class Xg{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){$(Yg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){$(Yg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Da=null;function Yh(){return Da===null?Da=function(){return 268435456+Math.round(2147483648*Math.random())}():Da++,"0x"+Da.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="RestConnection",dR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class fR{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===Nl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Yh(),l=this.Go(e,n.toUriEncodedString());$(xc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,i,s);const{host:h}=new URL(l),f=Ji(h);return this.jo(e,l,u,r,f).then(p=>($(xc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ur(xc,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Go(e,n){const r=dR[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class mR extends fR{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,i,s){const o=Yh();return new Promise((l,u)=>{const h=new uE;h.setWithCredentials(!0),h.listenOnce(cE.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ga.NO_ERROR:const p=h.getResponseJson();$(Xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Ga.TIMEOUT:$(Xe,`RPC '${e}' ${o} timed out`),u(new B(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ga.HTTP_ERROR:const g=h.getStatus();if($(Xe,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const V=function(I){const _=I.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(_)>=0?_:O.UNKNOWN}(k.status);u(new B(V,k.message))}else u(new B(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new B(O.UNAVAILABLE,"Connection failed."));break;default:G(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{$(Xe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(Xe,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}P_(e,n,r){const i=Yh(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fE(),l=dE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Xe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);this.T_(p);let g=!1,A=!1;const k=new pR({Ho:M=>{A?$(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(g||($(Xe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),$(Xe,`RPC '${e}' stream ${i} sending:`,M),p.send(M))},Yo:()=>p.close()}),V=(M,I,_)=>{M.listen(I,S=>{try{_(S)}catch(x){setTimeout(()=>{throw x},0)}})};return V(p,Os.EventType.OPEN,()=>{A||($(Xe,`RPC '${e}' stream ${i} transport opened.`),k.s_())}),V(p,Os.EventType.CLOSE,()=>{A||(A=!0,$(Xe,`RPC '${e}' stream ${i} transport closed`),k.__(),this.I_(p))}),V(p,Os.EventType.ERROR,M=>{A||(A=!0,ur(Xe,`RPC '${e}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),k.__(new B(O.UNAVAILABLE,"The operation could not be completed")))}),V(p,Os.EventType.MESSAGE,M=>{var I;if(!A){const _=M.data[0];se(!!_,16349);const S=_,x=(S==null?void 0:S.error)||((I=S[0])===null||I===void 0?void 0:I.error);if(x){$(Xe,`RPC '${e}' stream ${i} received error:`,x);const j=x.status;let U=function(v){const w=Pe[v];if(w!==void 0)return KE(w)}(j),E=x.message;U===void 0&&(U=O.INTERNAL,E="Unknown error status: "+j+" with message "+x.message),A=!0,k.__(new B(U,E)),p.close()}else $(Xe,`RPC '${e}' stream ${i} received:`,_),k.a_(_)}}),V(l,hE.STAT_EVENT,M=>{M.stat===bh.PROXY?$(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===bh.NOPROXY&&$(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.o_()},0),k}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t){return new vC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=i,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="PersistentStream";class uw{constructor(e,n,r,i,s,o,l,u){this.Fi=e,this.w_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new lw(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.b_===n&&this.W_(r,i)},r=>{e(()=>{const i=new B(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(i=>{r(()=>this.G_(i))}),this.stream.onMessage(i=>{r(()=>++this.C_==1?this.j_(i):this.onNext(i))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return $(Jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():($(Jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class gR extends uw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=TC(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?en(o.readTime):Q.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Kh(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Bh(u)?{documents:AC(s,u)}:{query:CC(s,u).Vt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=XE(s,o.resumeToken);const h=Wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=Ol(s,o.snapshotVersion.toTimestamp());const h=Wh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=PC(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Kh(this.serializer),n.removeTarget=e,this.k_(n)}}class yR extends uw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=SC(e.writeResults,e.commitTime),r=en(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Kh(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IC(this.serializer,r))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{}class vR extends _R{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,qh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(O.UNKNOWN,s.toString())})}Jo(e,n,r,i,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Jo(e,qh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(O.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class ER{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Rn(n),this._a=!1):$("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="RemoteStore";class wR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{ei(this)&&($(Gr,"Restarting streams for network reachability change."),await async function(u){const h=Y(u);h.Ia.add(4),await Uo(h),h.Aa.set("Unknown"),h.Ia.delete(4),await wu(h)}(this))})}),this.Aa=new ER(r,i)}}async function wu(t){if(ei(t))for(const e of t.da)await e(!0)}async function Uo(t){for(const e of t.da)await e(!1)}function cw(t,e){const n=Y(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Af(n)?Sf(n):is(n).x_()&&If(n,e))}function Tf(t,e){const n=Y(t),r=is(n);n.Ta.delete(e),r.x_()&&hw(n,e),n.Ta.size===0&&(r.x_()?r.B_():ei(n)&&n.Aa.set("Unknown"))}function If(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).H_(e)}function hw(t,e){t.Ra.$e(e),is(t).Y_(e)}function Sf(t){t.Ra=new mC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),is(t).start(),t.Aa.aa()}function Af(t){return ei(t)&&!is(t).M_()&&t.Ta.size>0}function ei(t){return Y(t).Ia.size===0}function dw(t){t.Ra=void 0}async function TR(t){t.Aa.set("Online")}async function IR(t){t.Ta.forEach((e,n)=>{If(t,e)})}async function SR(t,e){dw(t),Af(t)?(t.Aa.la(e),Sf(t)):t.Aa.set("Unknown")}async function AR(t,e,n){if(t.Aa.set("Online"),e instanceof YE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ta.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ta.delete(l),i.Ra.removeTarget(l))}(t,e)}catch(r){$(Gr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ml(t,r)}else if(e instanceof Xa?t.Ra.Ye(e):e instanceof QE?t.Ra.it(e):t.Ra.et(e),!n.isEqual(Q.min()))try{const r=await aw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Ra.Pt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ta.get(h);f&&s.Ta.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ta.get(u);if(!f)return;s.Ta.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),hw(s,u);const p=new Gn(f.target,u,h,f.sequenceNumber);If(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(Gr,"Failed to raise snapshot:",r),await Ml(t,r)}}async function Ml(t,e,n){if(!ns(e))throw e;t.Ia.add(1),await Uo(t),t.Aa.set("Offline"),n||(n=()=>aw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(Gr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await wu(t)})}function fw(t,e){return e().catch(n=>Ml(t,n,e))}async function Tu(t){const e=Y(t),n=pr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:af;for(;CR(e);)try{const i=await aR(e.localStore,r);if(i===null){e.Pa.length===0&&n.B_();break}r=i.batchId,RR(e,i)}catch(i){await Ml(e,i)}pw(e)&&mw(e)}function CR(t){return ei(t)&&t.Pa.length<10}function RR(t,e){t.Pa.push(e);const n=pr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function pw(t){return ei(t)&&!pr(t).M_()&&t.Pa.length>0}function mw(t){pr(t).start()}async function PR(t){pr(t).na()}async function kR(t){const e=pr(t);for(const n of t.Pa)e.X_(n.mutations)}async function NR(t,e,n){const r=t.Pa.shift(),i=mf.from(r,e,n);await fw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Tu(t)}async function DR(t,e){e&&pr(t).Z_&&await async function(r,i){if(function(o){return fC(o)&&o!==O.ABORTED}(i.code)){const s=r.Pa.shift();pr(r).N_(),await fw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Tu(r)}}(t,e),pw(t)&&mw(t)}async function Zg(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),$(Gr,"RemoteStore received new credentials");const r=ei(n);n.Ia.add(3),await Uo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await wu(n)}async function VR(t,e){const n=Y(t);e?(n.Ia.delete(2),await wu(n)):e||(n.Ia.add(2),await Uo(n),n.Aa.set("Unknown"))}function is(t){return t.Va||(t.Va=function(n,r,i){const s=Y(n);return s.ia(),new gR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:TR.bind(null,t),e_:IR.bind(null,t),n_:SR.bind(null,t),J_:AR.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Af(t)?Sf(t):t.Aa.set("Unknown")):(await t.Va.stop(),dw(t))})),t.Va}function pr(t){return t.ma||(t.ma=function(n,r,i){const s=Y(n);return s.ia(),new yR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:PR.bind(null,t),n_:DR.bind(null,t),ea:kR.bind(null,t),ta:NR.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Tu(t)):(await t.ma.stop(),t.Pa.length>0&&($(Gr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Cf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rf(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),ns(t))return new B(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{static emptySet(e){return new Di(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Ls(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.fa=new we(W.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):G(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ki{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ki(e,n,Di.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&mu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class OR{constructor(){this.queries=ty(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const i=Y(n),s=i.queries;i.queries=ty(),s.forEach((o,l)=>{for(const u of l.wa)u.onError(r)})})(this,new B(O.ABORTED,"Firestore shutting down"))}}function ty(){return new Zr(t=>ME(t),mu)}async function LR(t,e){const n=Y(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.ba()&&(r=2):(s=new xR,r=e.ba()?0:1);try{switch(r){case 0:s.ya=await n.onListen(i,!0);break;case 1:s.ya=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Rf(o,`Initialization of query '${ui(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.wa.push(e),e.va(n.onlineState),s.ya&&e.Ca(s.ya)&&Pf(n)}async function MR(t,e){const n=Y(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.wa.indexOf(e);o>=0&&(s.wa.splice(o,1),s.wa.length===0?i=e.ba()?0:1:!s.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bR(t,e){const n=Y(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.wa)l.Ca(i)&&(r=!0);o.ya=i}}r&&Pf(n)}function FR(t,e,n){const r=Y(t),i=r.queries.get(e);if(i)for(const s of i.wa)s.onError(n);r.queries.delete(e)}function Pf(t){t.Da.forEach(e=>{e.next()})}var Xh,ny;(ny=Xh||(Xh={})).Fa="default",ny.Cache="cache";class UR{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ki(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Ki.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Xh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.key=e}}class yw{constructor(e){this.key=e}}class jR{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=te(),this.mutatedKeys=te(),this.Xa=bE(e),this.eu=new Di(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new ey,i=n?n.eu:this.eu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),A=gu(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let M=!1;g&&A?g.data.isEqual(A.data)?k!==V&&(r.track({type:3,doc:A}),M=!0):this.iu(g,A)||(r.track({type:2,doc:A}),M=!0,(u&&this.Xa(A,u)>0||h&&this.Xa(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),M=!0):g&&!A&&(r.track({type:1,doc:g}),M=!0,(u||h)&&(l=!0)),M&&(A?(o=o.add(A),s=V?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:l,mutatedKeys:s}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((f,p)=>function(A,k){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G(20277,{At:M})}};return V(A)-V(k)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),i=i!=null&&i;const l=n&&!i?this.ou():[],u=this.Za.size===0&&this.current&&!i?1:0,h=u!==this.Ya;return this.Ya=u,o.length!==0||h?{snapshot:new Ki(this.query,e.eu,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ey,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=te(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new yw(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new gw(r))}),n}uu(e){this.Ha=e.qs,this.Za=te();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Ki.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const kf="SyncEngine";class zR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BR{constructor(e){this.key=e,this.lu=!1}}class $R{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Zr(l=>ME(l),mu),this.Tu=new Map,this.Iu=new Set,this.du=new we(W.comparator),this.Eu=new Map,this.Au=new _f,this.Ru={},this.Vu=new Map,this.mu=Gi.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function HR(t,e,n=!0){const r=Iw(t);let i;const s=r.Pu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.cu()):i=await _w(r,e,n,!0),i}async function WR(t,e){const n=Iw(t);await _w(n,e,!0,!1)}async function _w(t,e,n,r){const i=await lR(t.localStore,Zt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await qR(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&cw(t.remoteStore,i),l}async function qR(t,e,n,r,i){t.gu=(p,g,A)=>async function(V,M,I,_){let S=M.view.nu(I);S.Ds&&(S=await Kg(V.localStore,M.query,!1).then(({documents:E})=>M.view.nu(E,S)));const x=_&&_.targetChanges.get(M.targetId),j=_&&_.targetMismatches.get(M.targetId)!=null,U=M.view.applyChanges(S,V.isPrimaryClient,x,j);return iy(V,M.targetId,U._u),U.snapshot}(t,p,g,A);const s=await Kg(t.localStore,e,!0),o=new jR(e,s.qs),l=o.nu(s.documents),u=Fo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);iy(t,n,h._u);const f=new zR(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function GR(t,e,n){const r=Y(t),i=r.Pu.get(e),s=r.Tu.get(i.targetId);if(s.length>1)return r.Tu.set(i.targetId,s.filter(o=>!mu(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Qh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Tf(r.remoteStore,i.targetId),Jh(r,i.targetId)}).catch(ts)):(Jh(r,i.targetId),await Qh(r.localStore,i.targetId,!0))}async function KR(t,e){const n=Y(t),r=n.Pu.get(e),i=n.Tu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Tf(n.remoteStore,r.targetId))}async function QR(t,e,n){const r=nP(t);try{const i=await function(o,l){const u=Y(o),h=pe.now(),f=l.reduce((A,k)=>A.add(k.key),te());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=Pn(),V=te();return u.Os.getEntries(A,f).next(M=>{k=M,k.forEach((I,_)=>{_.isValidDocument()||(V=V.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,k)).next(M=>{p=M;const I=[];for(const _ of l){const S=lC(_,p.get(_.key).overlayedDocument);S!=null&&I.push(new Er(_.key,S,PE(S.value.mapValue),Vt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(M=>{g=M;const I=M.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(A,M.batchId,I)})}).then(()=>({batchId:g.batchId,changes:UE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ru[o.currentUser.toKey()];h||(h=new we(J)),h=h.insert(l,u),o.Ru[o.currentUser.toKey()]=h}(r,i.batchId,n),await jo(r,i.changes),await Tu(r.remoteStore)}catch(i){const s=Rf(i,"Failed to persist write");n.reject(s)}}async function vw(t,e){const n=Y(t);try{const r=await sR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.lu=!0:i.modifiedDocuments.size>0?se(o.lu,14607):i.removedDocuments.size>0&&(se(o.lu,42227),o.lu=!1))}),await jo(n,r,e)}catch(r){await ts(r)}}function ry(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Pu.forEach((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=Y(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.wa)g.va(l)&&(h=!0)}),h&&Pf(u)}(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YR(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new we(W.comparator);o=o.insert(s,et.newNoDocument(s,Q.min()));const l=te().add(s),u=new vu(Q.min(),new Map,new we(J),o,l);await vw(r,u),r.du=r.du.remove(s),r.Eu.delete(e),Nf(r)}else await Qh(r.localStore,e,!1).then(()=>Jh(r,e,n)).catch(ts)}async function XR(t,e){const n=Y(t),r=e.batch.batchId;try{const i=await iR(n.localStore,e);ww(n,r,null),Ew(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await jo(n,i)}catch(i){await ts(i)}}async function JR(t,e,n){const r=Y(t);try{const i=await function(o,l){const u=Y(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(se(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);ww(r,e,n),Ew(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await jo(r,i)}catch(i){await ts(i)}}function Ew(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function ww(t,e,n){const r=Y(t);let i=r.Ru[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||Tw(t,r)})}function Tw(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Tf(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Nf(t))}function iy(t,e,n){for(const r of n)r instanceof gw?(t.Au.addReference(r.key,e),ZR(t,r)):r instanceof yw?($(kf,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Tw(t,r.key)):G(19791,{yu:r})}function ZR(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||($(kf,"New document in limbo: "+n),t.Iu.add(r),Nf(t))}function Nf(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new W(ue.fromString(e)),r=t.mu.next();t.Eu.set(r,new BR(n)),t.du=t.du.insert(n,r),cw(t.remoteStore,new Gn(Zt(df(n.path)),r,"TargetPurposeLimboResolution",du.ue))}}async function jo(t,e,n){const r=Y(t),i=[],s=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((l,u)=>{o.push(r.gu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Ef.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.hu.J_(i),await async function(u,h){const f=Y(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,g=>L.forEach(g.Is,A=>f.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>L.forEach(g.ds,A=>f.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!ns(p))throw p;$(wf,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=f.Fs.get(g),k=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(k);f.Fs=f.Fs.insert(g,V)}}}(r.localStore,s))}async function eP(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){$(kf,"User change. New user:",e.toKey());const r=await ow(n.localStore,e);n.currentUser=e,function(s,o){s.Vu.forEach(l=>{l.forEach(u=>{u.reject(new B(O.CANCELLED,o))})}),s.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jo(n,r.Bs)}}function tP(t,e){const n=Y(t),r=n.Eu.get(e);if(r&&r.lu)return te().add(r.key);{let i=te();const s=n.Tu.get(e);if(!s)return i;for(const o of s){const l=n.Pu.get(o);i=i.unionWith(l.view.tu)}return i}}function Iw(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YR.bind(null,e),e.hu.J_=bR.bind(null,e.eventManager),e.hu.pu=FR.bind(null,e.eventManager),e}function nP(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JR.bind(null,e),e}class bl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Eu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return rR(this.persistence,new eR,e.initialUser,this.serializer)}Du(e){return new sw(vf.Vi,this.serializer)}bu(e){return new cR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bl.provider={build:()=>new bl};class rP extends bl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){se(this.persistence.referenceDelegate instanceof Ll,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new UC(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new sw(r=>Ll.Vi(r,n),this.serializer)}}class Zh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ry(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eP.bind(null,this.syncEngine),await VR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new OR}()}createDatastore(e){const n=Eu(e.databaseInfo.databaseId),r=function(s){return new mR(s)}(e.databaseInfo);return function(s,o,l,u){return new vR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new wR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ry(this.syncEngine,n,0),function(){return Xg.C()?new Xg:new hR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new $R(i,s,o,l,u,h);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=Y(i);$(Gr,"RemoteStore shutting down."),s.Ia.add(5),await Uo(s),s.Ea.shutdown(),s.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zh.provider={build:()=>new Zh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="FirestoreClient";class sP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=of.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(mr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(mr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Rf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lc(t,e){t.asyncQueue.verifyOperationInProgress(),$(mr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ow(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>{ur("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{$("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(i=>{ur("Terminating Firestore due to IndexedDb database deletion failed",i)})}),t._offlineComponents=e}async function sy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oP(t);$(mr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Zg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Zg(e.remoteStore,i)),t._onlineComponents=e}async function oP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(mr,"Using user provided OfflineComponentProvider");try{await Lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===O.FAILED_PRECONDITION||i.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ur("Error using user provided cache. Falling back to memory cache: "+n),await Lc(t,new bl)}}else $(mr,"Using default OfflineComponentProvider"),await Lc(t,new rP(void 0));return t._offlineComponents}async function Sw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(mr,"Using user provided OnlineComponentProvider"),await sy(t,t._uninitializedComponentsProvider._online)):($(mr,"Using default OnlineComponentProvider"),await sy(t,new Zh))),t._onlineComponents}function aP(t){return Sw(t).then(e=>e.syncEngine)}async function oy(t){const e=await Sw(t),n=e.eventManager;return n.onListen=HR.bind(null,e.syncEngine),n.onUnlisten=GR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KR.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="firestore.googleapis.com",ly=!0;class uy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cw,this.ssl=ly}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:ly;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<bC)throw new B(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Aw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dA;switch(r.type){case"firstParty":return new gA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ay.get(n);r&&($("ComponentProvider","Removing Datastore"),ay.delete(n),r.terminate())}(this),Promise.resolve()}}function lP(t,e,n,r={}){var i;t=Jt(t,Iu);const s=Ji(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(eE(`https://${u}`),tE("Firestore",!0)),o.host!==Cw&&o.host!==u&&ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!Hr(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Je.MOCK_USER;else{f=US(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new B(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Je(g)}t._authCredentials=new fA(new mE(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ti(this.firestore,e,this._query)}}class Re{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new or(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Re(this.firestore,e,this._key)}toJSON(){return{type:Re._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Mo(n,Re._jsonSchema))return new Re(e,r||null,new W(ue.fromString(n.referencePath)))}}Re._jsonSchemaVersion="firestore/documentReference/1.0",Re._jsonSchema={type:De("string",Re._jsonSchemaVersion),referencePath:De("string")};class or extends ti{constructor(e,n,r){super(e,n,df(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Re(this.firestore,null,new W(e))}withConverter(e){return new or(this.firestore,e,this._path)}}function Rw(t,e,...n){if(t=Le(t),yE("collection","path",e),t instanceof Iu){const r=ue.fromString(e,...n);return wg(r),new or(t,null,r)}{if(!(t instanceof Re||t instanceof or))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return wg(r),new or(t.firestore,null,r)}}function Fl(t,e,...n){if(t=Le(t),arguments.length===1&&(e=of.newId()),yE("doc","path",e),t instanceof Iu){const r=ue.fromString(e,...n);return Eg(r),new Re(t,null,new W(r))}{if(!(t instanceof Re||t instanceof or))throw new B(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ue.fromString(e,...n));return Eg(r),new Re(t.firestore,t instanceof or?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="AsyncQueue";class hy{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new lw(this,"async_queue_retry"),this.oc=()=>{const r=Oc();r&&$(cy,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Oc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new br;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ns(e))throw e;$(cy,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Rn("INTERNAL UNHANDLED ERROR: ",dy(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const i=Cf.createAndSchedule(this,e,n,r,s=>this.lc(s));return this.ec.push(i),i}ac(){this.tc&&G(47125,{hc:dy(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function dy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Kr extends Iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new hy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hy(e),this._firestoreClient=void 0,await e}}}function uP(t,e){const n=typeof t=="object"?t:sE(),r=typeof t=="string"?t:Nl,i=rf(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=bS("firestore");s&&lP(i,...s)}return i}function Pw(t){if(t._terminated)throw new B(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||cP(t),t._firestoreClient}function cP(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new VA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Aw(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new sP(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(We.fromBase64String(e))}catch(n){throw new B(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new kt(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Mo(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:De("string",kt._jsonSchemaVersion),bytes:De("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tn._jsonSchemaVersion}}static fromJSON(e){if(Mo(e,tn._jsonSchema))return new tn(e.latitude,e.longitude)}}tn._jsonSchemaVersion="firestore/geoPoint/1.0",tn._jsonSchema={type:De("string",tn._jsonSchemaVersion),latitude:De("number"),longitude:De("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Mo(e,nn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new nn(e.vectorValues);throw new B(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nn._jsonSchemaVersion="firestore/vectorValue/1.0",nn._jsonSchema={type:De("string",nn._jsonSchemaVersion),vectorValues:De("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=/^__.*__$/;class dP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new bo(e,this.data,n,this.fieldTransforms)}}class kw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Nw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G(40011,{Ec:t})}}class Df{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Df(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ul(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Nw(this.Ec)&&hP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class fP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Eu(e)}Dc(e,n,r,i=!1){return new Df({Ec:e,methodName:n,bc:r,path:Be.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cu(t){const e=t._freezeSettings(),n=Eu(t._databaseId);return new fP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dw(t,e,n,r,i,s={}){const o=t.Dc(s.merge||s.mergeFields?2:0,e,n,i);xf("Data must be an object, but it was:",o,r);const l=Vw(r,o);let u,h;if(s.merge)u=new Et(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=ed(e,p,n);if(!o.contains(g))throw new B(O.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Ow(f,g)||f.push(g)}u=new Et(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new dP(new ht(l),u,h)}class Ru extends Au{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ru}}class Vf extends Au{_toFieldTransform(e){return new iC(e.path,new So)}isEqual(e){return e instanceof Vf}}function pP(t,e,n,r){const i=t.Dc(1,e,n);xf("Data must be an object, but it was:",i,r);const s=[],o=ht.empty();vr(r,(u,h)=>{const f=Of(e,u,n);h=Le(h);const p=i.gc(f);if(h instanceof Ru)s.push(f);else{const g=zo(h,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new Et(s);return new kw(o,l,i.fieldTransforms)}function mP(t,e,n,r,i,s){const o=t.Dc(1,e,n),l=[ed(e,r,n)],u=[i];if(s.length%2!=0)throw new B(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(ed(e,s[g])),u.push(s[g+1]);const h=[],f=ht.empty();for(let g=l.length-1;g>=0;--g)if(!Ow(h,l[g])){const A=l[g];let k=u[g];k=Le(k);const V=o.gc(A);if(k instanceof Ru)h.push(A);else{const M=zo(k,V);M!=null&&(h.push(A),f.set(A,M))}}const p=new Et(h);return new kw(f,p,o.fieldTransforms)}function gP(t,e,n,r=!1){return zo(n,t.Dc(r?4:3,e))}function zo(t,e){if(xw(t=Le(t)))return xf("Unsupported field value:",e,t),Vw(t,e);if(t instanceof Au)return function(r,i){if(!Nw(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=zo(l,i.yc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tC(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=pe.fromDate(r);return{timestampValue:Ol(i.serializer,s)}}if(r instanceof pe){const s=new pe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ol(i.serializer,s)}}if(r instanceof tn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kt)return{bytesValue:XE(i.serializer,r._byteString)};if(r instanceof Re){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:yf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof nn)return function(o,l){return{mapValue:{fields:{[CE]:{stringValue:RE},[Dl]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return ff(l.serializer,h)})}}}}}}(r,i);throw i.wc(`Unsupported field value: ${hu(r)}`)}(t,e)}function Vw(t,e){const n={};return EE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,i)=>{const s=zo(i,e.Vc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function xw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pe||t instanceof tn||t instanceof kt||t instanceof Re||t instanceof Au||t instanceof nn)}function xf(t,e,n){if(!xw(n)||!_E(n)){const r=hu(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function ed(t,e,n){if((e=Le(e))instanceof Su)return e._internalPath;if(typeof e=="string")return Of(t,e);throw Ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const yP=new RegExp("[~\\*/\\[\\]]");function Of(t,e,n){if(e.search(yP)>=0)throw Ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Su(...e.split("."))._internalPath}catch{throw Ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ul(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new B(O.INVALID_ARGUMENT,l+t+u)}function Ow(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _P(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Lf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _P extends Lw{data(){return super.data()}}function Lf(t,e){return typeof e=="string"?Of(t,e):e instanceof Su?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vP(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mf{}class Mw extends Mf{}function EP(t,e,...n){let r=[];e instanceof Mf&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Ff).length,l=s.filter(u=>u instanceof bf).length;if(o>1||o>0&&l>0)throw new B(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class bf extends Mw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bf(e,n,r)}_apply(e){const n=this._parse(e);return bw(e._query,n),new ti(e.firestore,e.converter,$h(e._query,n))}_parse(e){const n=Cu(e.firestore);return function(s,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new B(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){my(p,f);const k=[];for(const V of p)k.push(py(u,s,V));g={arrayValue:{values:k}}}else g=py(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||my(p,f),g=gP(l,o,p,f==="in"||f==="not-in");return Ne.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ff extends Mf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ff(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)bw(o,u),o=$h(o,u)}(e._query,n),new ti(e.firestore,e.converter,$h(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uf extends Mw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Uf(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Io(s,o)}(e._query,this._field,this._direction);return new ti(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new rs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function wP(t,e="asc"){const n=e,r=Lf("orderBy",t);return Uf._create(r,n)}function py(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new B(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!LE(e)&&n.indexOf("/")!==-1)throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ue.fromString(n));if(!W.isDocumentKey(r))throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kg(t,new W(r))}if(n instanceof Re)return kg(t,n._key);throw new B(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hu(n)}.`)}function my(t,e){if(!Array.isArray(t)||t.length===0)throw new B(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bw(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class TP{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw G(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[Dl].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new nn(s)}convertGeoPoint(e){return new tn(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Eo(e));default:return null}}convertTimestamp(e){const n=hr(e);return new pe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ue.fromString(e);se(rw(r),9688,{name:e});const i=new wo(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||Rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Fr extends Lw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ja(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Fr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Fr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Fr._jsonSchema={type:De("string",Fr._jsonSchemaVersion),bundleSource:De("string","DocumentSnapshot"),bundleName:De("string"),bundle:De("string")};class Ja extends Fr{data(e={}){return super.data(e)}}class Vi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new bs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ja(this._firestore,this._userDataWriter,r.key,r,new bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new bs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ja(i._firestore,i._userDataWriter,l.doc.key,l.doc,new bs(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:IP(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=of.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G(61501,{type:t})}}Vi._jsonSchemaVersion="firestore/querySnapshot/1.0",Vi._jsonSchema={type:De("string",Vi._jsonSchemaVersion),bundleSource:De("string","QuerySnapshot"),bundleName:De("string"),bundle:De("string")};class Uw extends TP{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Re(this.firestore,null,n)}}function SP(t,e,n){t=Jt(t,Re);const r=Jt(t.firestore,Kr),i=Fw(t.converter,e);return Pu(r,[Dw(Cu(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Vt.none())])}function AP(t,e,n,...r){t=Jt(t,Re);const i=Jt(t.firestore,Kr),s=Cu(i);let o;return o=typeof(e=Le(e))=="string"||e instanceof Su?mP(s,"updateDoc",t._key,e,n,r):pP(s,"updateDoc",t._key,e),Pu(i,[o.toMutation(t._key,Vt.exists(!0))])}function CP(t){return Pu(Jt(t.firestore,Kr),[new pf(t._key,Vt.none())])}function RP(t,e){const n=Jt(t.firestore,Kr),r=Fl(t),i=Fw(t.converter,e);return Pu(n,[Dw(Cu(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Vt.exists(!1))]).then(()=>r)}function PP(t,...e){var n,r,i;t=Le(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||fy(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(fy(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,h,f;if(t instanceof Re)h=Jt(t.firestore,Kr),f=df(t._key.path),u={next:p=>{e[o]&&e[o](kP(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Jt(t,ti);h=Jt(p.firestore,Kr),f=p._query;const g=new Uw(h);u={next:A=>{e[o]&&e[o](new Vi(h,g,p,A))},error:e[o+1],complete:e[o+2]},vP(t._query)}return function(g,A,k,V){const M=new iP(V),I=new UR(A,M,k);return g.asyncQueue.enqueueAndForget(async()=>LR(await oy(g),I)),()=>{M.Ou(),g.asyncQueue.enqueueAndForget(async()=>MR(await oy(g),I))}}(Pw(h),f,l,u)}function Pu(t,e){return function(r,i){const s=new br;return r.asyncQueue.enqueueAndForget(async()=>QR(await aP(r),i,s)),s.promise}(Pw(t),e)}function kP(t,e,n){const r=n.docs.get(e._key),i=new Uw(t);return new Fr(t,i,e._key,r,new bs(n.hasPendingWrites,n.fromCache),e.converter)}function td(){return new Vf("serverTimestamp")}(function(e,n=!0){(function(i){es=i})(Zi),$i(new Wr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Kr(new pA(r.getProvider("auth-internal")),new yA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new B(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wo(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ir(mg,gg,e),ir(mg,gg,"esm2017")})();function jf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const NP=jw,zw=new Oo("auth","Firebase",jw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=new tf("@firebase/auth");function DP(t,...e){jl.logLevel<=ee.WARN&&jl.warn(`Auth (${Zi}): ${t}`,...e)}function Za(t,...e){jl.logLevel<=ee.ERROR&&jl.error(`Auth (${Zi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw zf(t,...e)}function rn(t,...e){return zf(t,...e)}function Bw(t,e,n){const r=Object.assign(Object.assign({},NP()),{[e]:n});return new Oo("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return Bw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zw.create(t,...e)}function q(t,e,...n){if(!t)throw zf(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Za(e),new Error(e)}function kn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VP(){return gy()==="http:"||gy()==="https:"}function gy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VP()||WS()||"connection"in navigator)?navigator.onLine:!0}function OP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=BS()||qS()}get(){return xP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bP=new Bo(3e4,6e4);function wr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,r,i={}){return Hw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return HS()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ji(t.emulatorConfig.host)&&(h.credentials="include"),$w.fetch()(await Ww(t,t.config.apiHost,n,l),h)})}async function Hw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LP),e);try{const i=new UP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Va(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Bw(t,f,h);Wt(t,f)}}catch(i){if(i instanceof Dn)throw i;Wt(t,"network-request-failed",{message:String(i)})}}async function $o(t,e,n,r,i={}){const s=await Tr(t,e,n,r,i);return"mfaPendingCredential"in s&&Wt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ww(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Bf(t.config,i):`${t.config.apiScheme}://${i}`;return MP.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function FP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),bP.get())})}}function Va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rn(t,e,r);return i.customData._tokenResponse=n,i}function yy(t){return t!==void 0&&t.enterprise!==void 0}class jP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return FP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function zP(t,e){return Tr(t,"GET","/v2/recaptchaConfig",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function zl(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $P(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=$f(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Js(Mc(i.auth_time)),issuedAtTime:Js(Mc(i.iat)),expirationTime:Js(Mc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mc(t){return Number(t)*1e3}function $f(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Za("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yv(n);return i?JSON.parse(i):(Za("Failed to decode base64 JWT payload"),null)}catch(i){return Za("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _y(t){const e=$f(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&HP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ro(t,zl(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?qw(s.providerUserInfo):[],l=GP(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new rd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function qP(t){const e=Le(t);await Bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function qw(t){return t.map(e=>{var{providerId:n}=e,r=jf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KP(t,e){const n=await Hw(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ww(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Ji(t.emulatorConfig.host)&&(u.credentials="include"),$w.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QP(t,e){return Tr(t,"POST","/v2/accounts:revokeToken",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=_y(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xi;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xi,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=jf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $P(this,e)}reload(){return qP(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Ro(this,BP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:x,isAnonymous:j,providerData:U,stsTokenManager:E}=n;q(S&&E,e,"internal-error");const y=xi.fromJSON(this.name,E);q(typeof S=="string",e,"internal-error"),Mn(p,e.name),Mn(g,e.name),q(typeof x=="boolean",e,"internal-error"),q(typeof j=="boolean",e,"internal-error"),Mn(A,e.name),Mn(k,e.name),Mn(V,e.name),Mn(M,e.name),Mn(I,e.name),Mn(_,e.name);const v=new jt({uid:S,auth:e,email:g,emailVerified:x,displayName:p,isAnonymous:j,photoURL:k,phoneNumber:A,tenantId:V,stsTokenManager:y,createdAt:I,lastLoginAt:_});return U&&Array.isArray(U)&&(v.providerData=U.map(w=>Object.assign({},w))),M&&(v._redirectEventId=M),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new xi;i.updateFromServerResponse(n);const s=new jt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Bl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?qw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new xi;l.updateFromIdToken(r);const u=new jt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new Map;function vn(t){kn(t instanceof Function,"Expected a class definition");let e=vy.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gw.type="NONE";const Ey=Gw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t,e,n){return`firebase:${t}:${e}:${n}`}class Oi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=el(this.userKey,i.apiKey,s),this.fullPersistenceKey=el("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await zl(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Oi(vn(Ey),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||vn(Ey);const o=el(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await zl(e,{idToken:f}).catch(()=>{});if(!g)break;p=await jt._fromGetAccountInfoResponse(e,g,f)}else p=jt._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Oi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Oi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zw(e))return"Blackberry";if(e0(e))return"Webos";if(Qw(e))return"Safari";if((e.includes("chrome/")||Yw(e))&&!e.includes("edge/"))return"Chrome";if(Jw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Kw(t=nt()){return/firefox\//i.test(t)}function Qw(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Yw(t=nt()){return/crios\//i.test(t)}function Xw(t=nt()){return/iemobile/i.test(t)}function Jw(t=nt()){return/android/i.test(t)}function Zw(t=nt()){return/blackberry/i.test(t)}function e0(t=nt()){return/webos/i.test(t)}function Hf(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YP(t=nt()){var e;return Hf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function XP(){return GS()&&document.documentMode===10}function t0(t=nt()){return Hf(t)||Jw(t)||e0(t)||Zw(t)||/windows phone/i.test(t)||Xw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(t,e=[]){let n;switch(t){case"Browser":n=wy(nt());break;case"Worker":n=`${wy(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(t,e={}){return Tr(t,"GET","/v2/passwordPolicy",wr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=6;class tk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ek,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ty(this),this.idTokenSubscription=new Ty(this),this.beforeStateQueue=new JP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await Oi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await zl(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pt(this.app))return Promise.reject(wn(this));const n=e?Le(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZP(this),n=new tk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Oi.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=n0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ni(t){return Le(t)}class Ty{constructor(e){this.auth=e,this.observer=null,this.addObserver=t1(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rk(t){ku=t}function r0(t){return ku.loadJS(t)}function ik(){return ku.recaptchaEnterpriseScript}function sk(){return ku.gapiScript}function ok(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ak{constructor(){this.enterprise=new lk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class lk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const uk="recaptcha-enterprise",i0="NO_RECAPTCHA";class ck{constructor(e){this.type=uk,this.auth=ni(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{zP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new jP(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;yy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(i0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ak().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&yy(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ik();u.length!==0&&(u+=l),r0(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Iy(t,e,n,r=!1,i=!1){const s=new ck(t);let o;if(i)o=i0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function id(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Iy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Iy(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e){const n=rf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Hr(s,e??{}))return i;Wt(i,"already-initialized")}return n.initialize({options:e})}function dk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fk(t,e,n){const r=ni(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=s0(e),{host:o,port:l}=pk(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(Hr(h,r.config.emulator)&&Hr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ji(o)?(eE(`${s}//${o}${u}`),tE("Auth",!0)):mk()}function s0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pk(t){const e=s0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sy(o)}}}function Sy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function gk(t,e){return Tr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yk(t,e){return $o(t,"POST","/v1/accounts:signInWithPassword",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _k(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}async function vk(t,e){return $o(t,"POST","/v1/accounts:signInWithEmailLink",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Wf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return id(e,n,"signInWithPassword",yk);case"emailLink":return _k(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return id(e,r,"signUpPassword",gk);case"emailLink":return vk(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t,e){return $o(t,"POST","/v1/accounts:signInWithIdp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="http://localhost";class Qr extends Wf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=jf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Li(e,n)}buildRequest(){const e={requestUri:Ek,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tk(t){const e=Vs(xs(t)).link,n=e?Vs(xs(e)).deep_link_id:null,r=Vs(xs(t)).deep_link_id;return(r?Vs(xs(r)).link:null)||r||n||e||t}class qf{constructor(e){var n,r,i,s,o,l;const u=Vs(xs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,p=wk((i=u.mode)!==null&&i!==void 0?i:null);q(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Tk(e);try{return new qf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return Po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qf.parseLink(n);return q(r,"argument-error"),Po._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho extends o0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ho{constructor(){super("facebook.com")}static credential(e){return Qr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Ho{constructor(){super("github.com")}static credential(e){return Qr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ho{constructor(){super("twitter.com")}static credential(e,n){return Qr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ik(t,e){return $o(t,"POST","/v1/accounts:signUp",wr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await jt._fromIdTokenResponse(e,r,i),o=Ay(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ay(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ay(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends Dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$l.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $l(e,n,r,i)}}function a0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$l._fromErrorAndOperation(t,s,e,r):s})}async function Sk(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ak(t,e,n=!1){const{auth:r}=t;if(Pt(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await Ro(t,a0(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=$f(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,e,n=!1){if(Pt(t.app))return Promise.reject(wn(t));const r="signIn",i=await a0(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ck(t,e){return l0(ni(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t){const e=ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Rk(t,e,n){if(Pt(t.app))return Promise.reject(wn(t));const r=ni(t),o=await id(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ik).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&u0(t),u}),l=await Yr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Pk(t,e,n){return Pt(t.app)?Promise.reject(wn(t)):Ck(Le(t),ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&u0(t),r})}function kk(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function Nk(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function Dk(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function Vk(t){return Le(t).signOut()}const Hl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hl,"1"),this.storage.removeItem(Hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=1e3,Ok=10;class h0 extends c0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=t0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ok):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h0.type="LOCAL";const Lk=h0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0 extends c0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d0.type="SESSION";const f0=d0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await Mk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Gf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function Fk(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p0(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function Uk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zk(){return p0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="firebaseLocalStorageDb",Bk=1,Wl="firebaseLocalStorage",g0="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Du(t,e){return t.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function $k(){const t=indexedDB.deleteDatabase(m0);return new Wo(t).toPromise()}function sd(){const t=indexedDB.open(m0,Bk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wl,{keyPath:g0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wl)?e(r):(r.close(),await $k(),e(await sd()))})})}async function Cy(t,e,n){const r=Du(t,!0).put({[g0]:e,value:n});return new Wo(r).toPromise()}async function Hk(t,e){const n=Du(t,!1).get(e),r=await new Wo(n).toPromise();return r===void 0?null:r.value}function Ry(t,e){const n=Du(t,!0).delete(e);return new Wo(n).toPromise()}const Wk=800,qk=3;class y0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nu._getInstance(zk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Uk(),!this.activeServiceWorker)return;this.sender=new bk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sd();return await Cy(e,Hl,"1"),await Ry(e,Hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ry(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Du(i,!1).getAll();return new Wo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}y0.type="LOCAL";const Gk=y0;new Bo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kk(t,e){return e?vn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf extends Wf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Qk(t){return l0(t.auth,new Kf(t),t.bypassAuthState)}function Yk(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Ak(n,new Kf(t),t.bypassAuthState)}async function Xk(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Sk(n,new Kf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qk;case"linkViaPopup":case"linkViaRedirect":return Xk;case"reauthViaPopup":case"reauthViaRedirect":return Yk;default:Wt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=new Bo(2e3,1e4);class Si extends _0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Si.currentPopupAction&&Si.currentPopupAction.cancel(),Si.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Si.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jk.get())};e()}}Si.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="pendingRedirect",tl=new Map;class eN extends _0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tl.get(this.auth._key());if(!e){try{const r=await tN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tl.set(this.auth._key(),e)}return this.bypassAuthState||tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tN(t,e){const n=iN(e),r=rN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function nN(t,e){tl.set(t._key(),e)}function rN(t){return vn(t._redirectPersistence)}function iN(t){return el(Zk,t.config.apiKey,t.name)}async function sN(t,e,n=!1){if(Pt(t.app))return Promise.reject(wn(t));const r=ni(t),i=Kk(r,e),o=await new eN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=10*60*1e3;class aN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!v0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=oN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Py(e))}saveEventToCache(e){this.cachedEventUids.add(Py(e)),this.lastProcessedEventTime=Date.now()}}function Py(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function v0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return v0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uN(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hN=/^https?/;async function dN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uN(t);for(const n of e)try{if(fN(n))return}catch{}Wt(t,"unauthorized-domain")}function fN(t){const e=nd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hN.test(n))return!1;if(cN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=new Bo(3e4,6e4);function ky(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mN(t){return new Promise((e,n)=>{var r,i,s;function o(){ky(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ky(),n(rn(t,"network-request-failed"))},timeout:pN.get()})}if(!((i=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=sn().gapi)===null||s===void 0)&&s.load)o();else{const l=ok("iframefcb");return sn()[l]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},r0(`${sk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw nl=null,e})}let nl=null;function gN(t){return nl=nl||mN(t),nl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=new Bo(5e3,15e3),_N="__/auth/iframe",vN="emulator/auth/iframe",EN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function TN(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bf(e,vN):`https://${t.config.authDomain}/${_N}`,r={apiKey:e.apiKey,appName:t.name,v:Zi},i=wN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Lo(r).slice(1)}`}async function IN(t){const e=await gN(t),n=sn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:TN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{s(o)},yN.get());function u(){sn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AN=500,CN=600,RN="_blank",PN="http://localhost";class Ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kN(t,e,n,r=AN,i=CN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},SN),{width:r.toString(),height:i.toString(),top:s,left:o}),h=nt().toLowerCase();n&&(l=Yw(h)?RN:n),Kw(h)&&(e=e||PN,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[A,k])=>`${g}${A}=${k},`,"");if(YP(h)&&l!=="_self")return NN(e||"",l),new Ny(null);const p=window.open(e||"",l,f);q(p,t,"popup-blocked");try{p.focus()}catch{}return new Ny(p)}function NN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN="__/auth/handler",VN="emulator/auth/handler",xN=encodeURIComponent("fac");async function Dy(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Zi,eventId:i};if(e instanceof o0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",e1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ho){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${xN}=${encodeURIComponent(u)}`:"";return`${ON(t)}?${Lo(l).slice(1)}${h}`}function ON({config:t}){return t.emulator?Bf(t,VN):`https://${t.authDomain}/${DN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="webStorageSupport";class LN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f0,this._completeRedirectFn=sN,this._overrideRedirectResult=nN}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Dy(e,n,r,nd(),i);return kN(e,o,Gf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Dy(e,n,r,nd(),i);return Fk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await IN(e),r=new aN(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bc,{type:bc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bc];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=dN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return t0()||Qw()||Hf()}}const MN=LN;var Vy="@firebase/auth",xy="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UN(t){$i(new Wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:n0(t)},h=new nk(r,i,s,u);return dk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$i(new Wr("auth-internal",e=>{const n=ni(e.getProvider("auth").getImmediate());return(r=>new bN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ir(Vy,xy,FN(t)),ir(Vy,xy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=5*60,zN=Zv("authIdTokenMaxAge")||jN;let Oy=null;const BN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zN)return;const i=n==null?void 0:n.token;Oy!==i&&(Oy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $N(t=sE()){const e=rf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hk(t,{popupRedirectResolver:MN,persistence:[Gk,Lk,f0]}),r=Zv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=BN(s.toString());Nk(n,o,()=>o(n.currentUser)),kk(n,l=>o(l))}}const i=Xv("auth");return i&&fk(n,`http://${i}`),n}function HN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UN("Browser");var WN="firebase",qN="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ir(WN,qN,"app");const E0={apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0},gt=Object.values(E0).every(Boolean),ql=gt?iE(E0):null,Gl=ql?$N(ql):null,Zs=ql?uP(ql):null,od=[{id:"line-1-231650",line:"LINE-1",coachNo:"231650",coachType:"ECONOMY",progress:50,status:"Work In Progress",pdc:"2026-05-30",supervisor:"A. Kumar",remarks:"Flooring and panel fitment in progress"},{id:"line-2-199520",line:"LINE-2",coachNo:"199520",coachType:"LWS",progress:100,status:"Complete",pdc:"2026-05-18",supervisor:"R. Singh",remarks:"Ready for dispatch clearance"},{id:"line-3-201689",line:"LINE-3",coachNo:"201689",coachType:"LVPH",progress:100,status:"Complete",pdc:"2026-05-10",supervisor:"P. Sharma",remarks:"Inspection completed"},{id:"line-4-199527",line:"LINE-4",coachNo:"199527",coachType:"LWS",progress:98,status:"Ready For Inspection",pdc:"2026-05-19",supervisor:"M. Verma",remarks:"Electrical checklist pending"},{id:"line-5-231166",line:"LINE-5",coachNo:"231166",coachType:"ECONOMY",progress:50,status:"Work In Progress",pdc:"2026-05-30",supervisor:"S. Patel",remarks:"Seat mounting under progress"},{id:"line-6-201011",line:"LINE-6",coachNo:"201011",coachType:"LWFAC",progress:96,status:"Nearly Complete",pdc:"2026-05-21",supervisor:"D. Rao",remarks:"Final furnishing review"},{id:"line-7-224508",line:"LINE-7",coachNo:"224508",coachType:"AC 3T",progress:72,status:"Work In Progress",pdc:"2026-05-17",supervisor:"N. Iyer",remarks:"PDC delay warning"}],Fc={line:"LINE-1",coachNo:"",coachType:"LHB",progress:0,status:"Work In Progress",pdc:"",supervisor:"",remarks:""},w0=["Work In Progress","Nearly Complete","Ready For Inspection","Complete","On Hold"],Ly={"Work In Progress":"border-orange-400/70 bg-orange-500/15 text-orange-200","Nearly Complete":"border-cyan-300/70 bg-cyan-400/15 text-cyan-100","Ready For Inspection":"border-emerald-300/80 bg-emerald-400/15 text-emerald-100",Complete:"border-lime-300/80 bg-lime-400/15 text-lime-100","On Hold":"border-slate-300/60 bg-slate-400/15 text-slate-100"},GN=["LHB","LWS","LWFAC","LVPH","ECONOMY","AC 3T","POWER CAR"];function KN(t){if(!t)return null;const e=new Date(t);return Number.isNaN(e.getTime())?null:e}function T0(t){const e=KN(t);if(!e)return null;const n=new Date;return n.setHours(0,0,0,0),e.setHours(0,0,0,0),Math.ceil((e-n)/864e5)}function xa(t){const e=T0(t.pdc);return t.progress>=100||t.status==="Complete"?"Complete":e!==null&&e<0?"Delayed":t.progress>=95||t.status==="Ready For Inspection"?"Ready":t.progress>=80||t.status==="Nearly Complete"?"Near":"Active"}function QN(t){return t.toLocaleTimeString("en-IN",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"})}function YN(t){return t.toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}function XN(){const[t,e]=fe.useState(od),[n,r]=fe.useState(gt),[i,s]=fe.useState("");return fe.useEffect(()=>{if(!gt){r(!1);return}const o=EP(Rw(Zs,"coaches"),wP("line","asc"));return PP(o,l=>{const u=l.docs.map(h=>({id:h.id,...h.data()}));e(u.length?u:od),r(!1)},l=>{s(l.message),r(!1)})},[]),{coaches:t,loading:n,error:i}}function JN(){const[t,e]=fe.useState(null),[n,r]=fe.useState(gt);return fe.useEffect(()=>{if(!gt){r(!1);return}return Dk(Gl,i=>{e(i),r(!1)})},[]),{user:t,authLoading:n}}async function ZN(t){gt&&await Promise.all(od.map(e=>SP(Fl(Zs,"coaches",e.id),{...e,updatedBy:t,updatedAt:td()})))}function I0(){return N.jsx("div",{className:"rail-logo","aria-label":"Indian Railways",children:N.jsx("span",{children:"IR"})})}function e2({authLoading:t}){const[e,n]=fe.useState("login"),[r,i]=fe.useState("admin@railway.local"),[s,o]=fe.useState("railway123"),[l,u]=fe.useState("");async function h(f){if(f.preventDefault(),u(""),!gt){u("Add Firebase environment variables to enable cloud login.");return}try{e==="register"?await Rk(Gl,r,s):await Pk(Gl,r,s)}catch(p){u(p.message)}}return N.jsxs("section",{className:"login-grid",children:[N.jsxs("div",{className:"login-hero",children:[N.jsx(I0,{}),N.jsx("p",{className:"eyebrow",children:"Indian Railways Industrial Monitoring"}),N.jsx("h1",{children:"Railway Furnishing Shop Monitoring System"}),N.jsx("p",{children:"Cloud dashboard for line-wise coach furnishing progress, PDC tracking, real-time alerts, and fullscreen TV operations."})]}),N.jsxs("form",{className:"login-card",onSubmit:h,children:[N.jsxs("div",{children:[N.jsx("p",{className:"eyebrow",children:"Secure Access"}),N.jsx("h2",{children:e==="login"?"Supervisor Login":"Create Admin User"})]}),N.jsxs("label",{children:["Email",N.jsx("input",{value:r,onChange:f=>i(f.target.value),type:"email",required:!0})]}),N.jsxs("label",{children:["Password",N.jsx("input",{value:s,onChange:f=>o(f.target.value),type:"password",required:!0,minLength:6})]}),l&&N.jsx("div",{className:"alert danger",children:l}),!gt&&N.jsx("div",{className:"alert warn",children:"Demo mode is active. Configure Firebase to enable multi-user cloud login."}),N.jsx("button",{className:"primary-btn",type:"submit",disabled:t,children:e==="login"?"Login":"Register"}),N.jsx("button",{className:"ghost-btn",type:"button",onClick:()=>n(e==="login"?"register":"login"),children:e==="login"?"Create first admin user":"Back to login"})]})]})}function t2({progress:t,status:e}){return N.jsxs("div",{className:"coach-shell",title:`${t}% ${e}`,children:[N.jsx("div",{className:"coach-fill",style:{width:`${t}%`}}),N.jsx("div",{className:"coach-windows",children:Array.from({length:9},(n,r)=>N.jsx("span",{},r))}),N.jsx("div",{className:"coach-name",children:"INDIAN RAILWAYS"}),N.jsxs("div",{className:"wheel-set",children:[N.jsx("span",{}),N.jsx("span",{}),N.jsx("span",{}),N.jsx("span",{})]})]})}function Oa({label:t,value:e,tone:n}){return N.jsxs("article",{className:`stat-card ${n}`,children:[N.jsx("span",{children:t}),N.jsx("strong",{children:e})]})}function n2({status:t,computed:e}){const n=e==="Delayed",r=e==="Ready";return N.jsx("span",{className:`status-badge ${n?"delayed":Ly[t]||Ly["Work In Progress"]}`,children:n?"Delayed":r?"Ready For Inspection":t})}function r2({coaches:t,filters:e,setFilters:n,tvMode:r}){const i=fe.useMemo(()=>{const l=e.search.trim().toLowerCase();return t.filter(u=>{const h=[u.line,u.coachNo,u.coachType,u.status,u.supervisor].join(" ").toLowerCase().includes(l),f=e.line==="All Lines"||u.line===e.line,p=e.status==="All Status"||u.status===e.status;return h&&f&&p})},[t,e]),s=fe.useMemo(()=>{const l=t.length||1,u=Math.round(t.reduce((h,f)=>h+Number(f.progress||0),0)/l);return{total:t.length,average:u,ready:t.filter(h=>xa(h)==="Ready"||xa(h)==="Complete").length,delayed:t.filter(h=>xa(h)==="Delayed").length}},[t]),o=["All Lines",...Array.from(new Set(t.map(l=>l.line))).sort()];return N.jsxs("section",{className:"dashboard",children:[!r&&N.jsxs("div",{className:"toolbar",children:[N.jsx("input",{placeholder:"Search coach, line, type, supervisor",value:e.search,onChange:l=>n(u=>({...u,search:l.target.value}))}),N.jsx("select",{value:e.line,onChange:l=>n(u=>({...u,line:l.target.value})),children:o.map(l=>N.jsx("option",{children:l},l))}),N.jsx("select",{value:e.status,onChange:l=>n(u=>({...u,status:l.target.value})),children:["All Status",...w0].map(l=>N.jsx("option",{children:l},l))})]}),N.jsxs("div",{className:"stats-grid",children:[N.jsx(Oa,{label:"Total Coaches",value:s.total,tone:"cyan"}),N.jsx(Oa,{label:"Avg Progress",value:`${s.average}%`,tone:"yellow"}),N.jsx(Oa,{label:"Ready Alerts",value:s.ready,tone:"green"}),N.jsx(Oa,{label:"Delayed",value:s.delayed,tone:"red"})]}),N.jsxs("div",{className:"coach-table",children:[N.jsxs("div",{className:"table-head",children:[N.jsx("span",{children:"Line"}),N.jsx("span",{children:"Coach"}),N.jsx("span",{children:"Progress Visualization"}),N.jsx("span",{children:"PDC"}),N.jsx("span",{children:"Status"})]}),i.map(l=>{const u=xa(l),h=T0(l.pdc);return N.jsxs("article",{className:`coach-row ${u.toLowerCase()}`,children:[N.jsxs("div",{children:[N.jsx("strong",{children:l.line}),N.jsx("small",{children:l.supervisor||"Supervisor pending"})]}),N.jsxs("div",{children:[N.jsx("strong",{children:l.coachNo}),N.jsx("small",{children:l.coachType})]}),N.jsxs("div",{className:"progress-cell",children:[N.jsx(t2,{progress:Number(l.progress||0),status:l.status}),N.jsxs("b",{children:[l.progress,"%"]})]}),N.jsxs("div",{children:[N.jsx("strong",{children:l.pdc||"Not set"}),N.jsx("small",{children:h===null?"PDC pending":h<0?`${Math.abs(h)} days late`:`${h} days left`})]}),N.jsxs("div",{children:[N.jsx(n2,{status:l.status,computed:u}),l.remarks&&N.jsx("small",{children:l.remarks})]})]},l.id)})]})]})}function i2({coaches:t,user:e}){const[n,r]=fe.useState(Fc),[i,s]=fe.useState(""),[o,l]=fe.useState("");function u(p){s(p.id),r({line:p.line||"",coachNo:p.coachNo||"",coachType:p.coachType||"LHB",progress:p.progress||0,status:p.status||"Work In Progress",pdc:p.pdc||"",supervisor:p.supervisor||"",remarks:p.remarks||""})}async function h(p){p.preventDefault(),l("");const g={...n,progress:Math.min(100,Math.max(0,Number(n.progress))),updatedBy:(e==null?void 0:e.email)||"demo-user",updatedAt:gt?td():new Date().toISOString()};if(!gt){l("Demo mode: add Firebase config to save changes to Firestore.");return}i?await AP(Fl(Zs,"coaches",i),g):await RP(Rw(Zs,"coaches"),{...g,createdAt:td()}),r(Fc),s("")}async function f(p){if(!gt){l("Demo mode: delete is available after Firebase config is added.");return}await CP(Fl(Zs,"coaches",p))}return N.jsxs("section",{className:"admin-grid",children:[N.jsxs("form",{className:"admin-form",onSubmit:h,children:[N.jsxs("div",{children:[N.jsx("p",{className:"eyebrow",children:"Admin Panel"}),N.jsx("h2",{children:i?"Edit Coach":"Add Coach"})]}),N.jsxs("div",{className:"form-grid",children:[N.jsxs("label",{children:["Line",N.jsx("input",{value:n.line,onChange:p=>r({...n,line:p.target.value}),required:!0})]}),N.jsxs("label",{children:["Coach No.",N.jsx("input",{value:n.coachNo,onChange:p=>r({...n,coachNo:p.target.value}),required:!0})]}),N.jsxs("label",{children:["Coach Type",N.jsx("select",{value:n.coachType,onChange:p=>r({...n,coachType:p.target.value}),children:GN.map(p=>N.jsx("option",{children:p},p))})]}),N.jsxs("label",{children:["PDC",N.jsx("input",{type:"date",value:n.pdc,onChange:p=>r({...n,pdc:p.target.value})})]}),N.jsxs("label",{children:["Progress %",N.jsx("input",{type:"number",min:"0",max:"100",value:n.progress,onChange:p=>r({...n,progress:p.target.value})})]}),N.jsxs("label",{children:["Status",N.jsx("select",{value:n.status,onChange:p=>r({...n,status:p.target.value}),children:w0.map(p=>N.jsx("option",{children:p},p))})]}),N.jsxs("label",{children:["Supervisor",N.jsx("input",{value:n.supervisor,onChange:p=>r({...n,supervisor:p.target.value})})]}),N.jsxs("label",{children:["Remarks",N.jsx("input",{value:n.remarks,onChange:p=>r({...n,remarks:p.target.value})})]})]}),o&&N.jsx("div",{className:"alert warn",children:o}),N.jsxs("div",{className:"button-row",children:[N.jsx("button",{className:"primary-btn",type:"submit",children:i?"Update Coach":"Add Coach"}),N.jsx("button",{className:"ghost-btn",type:"button",onClick:()=>ZN(e==null?void 0:e.email),children:"Seed Demo Data"}),i&&N.jsx("button",{className:"ghost-btn",type:"button",onClick:()=>{s(""),r(Fc)},children:"Cancel"})]})]}),N.jsx("div",{className:"admin-list",children:t.map(p=>N.jsxs("article",{children:[N.jsxs("div",{children:[N.jsxs("strong",{children:[p.line," | ",p.coachNo]}),N.jsxs("small",{children:[p.coachType," | ",p.progress,"% | ",p.pdc||"PDC pending"]})]}),N.jsxs("div",{className:"button-row compact",children:[N.jsx("button",{className:"ghost-btn",type:"button",onClick:()=>u(p),children:"Edit"}),N.jsx("button",{className:"danger-btn",type:"button",onClick:()=>f(p.id),children:"Delete"})]})]},p.id))})]})}function s2(){const{user:t,authLoading:e}=JN(),{coaches:n,loading:r,error:i}=XN(),[s,o]=fe.useState(new Date),[l,u]=fe.useState("dashboard"),[h,f]=fe.useState(!1),[p,g]=fe.useState({search:"",line:"All Lines",status:"All Status"});return fe.useEffect(()=>{const A=window.setInterval(()=>o(new Date),1e3);return()=>window.clearInterval(A)},[]),fe.useEffect(()=>(document.body.classList.toggle("tv-mode",h),()=>document.body.classList.remove("tv-mode")),[h]),!t&&gt?N.jsx(e2,{authLoading:e}):N.jsxs("main",{className:`app-shell ${h?"is-tv":""}`,children:[N.jsxs("header",{className:"topbar",children:[N.jsxs("div",{className:"brand-block",children:[N.jsx(I0,{}),N.jsxs("div",{children:[N.jsx("p",{className:"eyebrow",children:"Indian Railways | Furnishing Shop"}),N.jsx("h1",{children:"Coach Progress Monitoring System"}),N.jsx("span",{children:"Line-wise real-time dashboard for PDC, readiness, and production status"})]})]}),N.jsxs("div",{className:"clock-panel",children:[N.jsx("strong",{children:QN(s)}),N.jsx("span",{children:YN(s)})]})]}),!h&&N.jsxs("nav",{className:"nav-strip",children:[N.jsx("button",{className:l==="dashboard"?"active":"",onClick:()=>u("dashboard"),children:"Dashboard"}),N.jsx("button",{className:l==="admin"?"active":"",onClick:()=>u("admin"),children:"Admin Panel"}),N.jsx("button",{onClick:()=>f(!0),children:"TV Fullscreen"}),gt&&t?N.jsx("button",{onClick:()=>Vk(Gl),children:"Logout"}):N.jsx("button",{onClick:()=>u("admin"),children:"Demo Admin"})]}),h&&N.jsx("button",{className:"exit-tv",onClick:()=>f(!1),children:"Exit TV Mode"}),i&&N.jsxs("div",{className:"alert danger",children:["Firestore: ",i]}),r&&N.jsx("div",{className:"alert warn",children:"Loading real-time coach data..."}),!gt&&N.jsx("div",{className:"alert warn",children:"Running local demo mode. Firebase setup is ready in the project files."}),l==="dashboard"||h?N.jsx(r2,{coaches:n,filters:p,setFilters:g,tvMode:h}):N.jsx(i2,{coaches:n,user:t}),N.jsx("footer",{className:"ticker",children:N.jsxs("div",{children:[N.jsx("span",{children:"Safety first | Quality always | Ready coach alerts active | Delayed PDC warnings active | Multi-user cloud dashboard"}),N.jsx("span",{children:"Safety first | Quality always | Ready coach alerts active | Delayed PDC warnings active | Multi-user cloud dashboard"})]})})]})}Uc.createRoot(document.getElementById("root")).render(N.jsx(yT.StrictMode,{children:N.jsx(s2,{})}));
