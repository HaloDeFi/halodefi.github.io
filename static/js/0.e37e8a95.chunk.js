(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{1196:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(25),c=n(41),i=n(320),u=n(83),l=n(69);t.a=function(e){var t=Object(c.a)().accent;return o.a.createElement(u.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:a.g.small}},o.a.createElement(l.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:a.d?24:18,paddingBottom:a.g.tiny},e.style]},e.text),e.buttonText&&o.a.createElement(i.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:a.g.tiny}}))}},1197:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(4),c=10;t.b=function(){return o.a.createElement(a.a,{style:{height:c}})}},1198:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(11),c=n.n(a),i=n(0),u=n.n(i),l=n(54),s=n(4),f=n(1232),d=n(41),b=n(408);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(d.a)(),n=t.borderDark,r=t.accent,a=t.overlay,c=Object(b.a)().border,i=Object(d.a)(),p=i.background,g=i.backgroundLight;return u.a.createElement(f.a,{style:e.containerStyle},(function(t){var i=t.hovered;return u.a.createElement(l.a,{activeOpacity:.7,underlayColor:a,onPress:e.onPress},u.a.createElement(s.a,o()({},e,{style:[m(m({},c({color:e.selected?r:n})),{},{backgroundColor:i&&!e.disabled?g:p}),e.style]})))}))}},1199:function(e,t,n){"use strict";var r=n(19),o=n.n(r),a=n(0),c=n.n(a),i=n(50),u=n(4),l=n(41),s=n(22);t.a=function(e){var t=Object(l.a)().backgroundLight,r=Object(a.useState)(!1),f=o()(r,2),d=f[0],b=f[1],p=e.small?22:27,m=n(1223),g=n(1224),y=e.replaceWETH&&Object(s.k)(e.token)?g:{uri:e.token.logoURI};return c.a.createElement(u.a,{style:[{width:p,height:p,backgroundColor:e.disabled?t:"white",borderRadius:p/2},e.style]},c.a.createElement(i.a,{source:!e.token.logoURI||d?m:y,onError:function(){return b(!0)},style:{width:"100%",height:"100%",borderRadius:p/2,opacity:e.disabled?.5:1}}))}},1202:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),c=n(25),i=n(41);t.a=function(e){var t=Object(i.a)().border;return o.a.createElement(a.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?c.g.tiny:c.g.small,marginBottom:e.small?c.g.tiny:c.g.small+c.g.tiny}})}},1203:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(76),c=n(41);t.a=function(){var e=Object(c.a)().accent;return o.a.createElement(a.b,{type:"material-community",name:"close",color:e,style:{marginLeft:4}})}},1204:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(4),c=n(25),i=n(69);t.a=function(e){var t=e.error;return o.a.createElement(a.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:c.g.tiny,marginTop:c.g.small}},t.code&&o.a.createElement(i.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),o.a.createElement(i.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1205:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(11),c=n.n(a),i=n(0),u=n.n(i),l=n(4),s=n(25),f=n(49),d=n(41),b=n(408);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(i.useContext)(f.a).darkMode,n=Object(d.a)(),r=n.backgroundLight,a=n.borderDark,c=Object(b.a)().border;return u.a.createElement(l.a,o()({},e,{style:[m(m({},c({color:t?a:r})),{},{backgroundColor:r,marginTop:s.g.normal+s.g.small,padding:s.g.small+s.g.tiny}),e.style]}))}},1206:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(76),c=n(41);t.a=function(){var e=Object(c.a)().accent;return o.a.createElement(a.b,{type:"material-community",name:"chevron-right",color:e,style:{marginLeft:4}})}},1208:function(e,t,n){"use strict";var r=n(19),o=n.n(r),a=n(0),c=n.n(a),i=n(4),u=n(61),l=n(1196);t.a=function(e){var t=Object(u.a)(),n=Object(a.useState)(!0),r=o()(n,2),s=r[0],f=r[1],d=e.expanded&&s,b=d?void 0:t("change");return c.a.createElement(i.a,{style:e.style},c.a.createElement(l.a,{text:e.title,buttonText:b,onPressButton:function(){f(!0),null==e.onExpand||e.onExpand()}}),c.a.createElement(i.a,{style:{display:d?"flex":"none"}},e.children))}},1209:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(61),c=n(320);t.a=function(){var e=Object(a.a)();return o.a.createElement(c.a,{title:e("fetching"),disabled:!0})}},1210:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(89),c=n(25);t.a=function(){return o.a.createElement(a.a,{size:"large",style:{marginVertical:c.g.large}})}},1211:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(25),c=n(41),i=n(156),u=n(61),l=n(83),s=n(69);t.a=function(e){var t=Object(u.a)(),n=Object(c.a)(),r=n.textMedium,f=n.textLight,d=n.placeholder,b=Object(i.a)(e.url||"","","_blank"),p=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):t("fetching");return o.a.createElement(l.a,{style:{justifyContent:"space-between",marginTop:4}},o.a.createElement(s.a,{note:!a.d,fontWeight:"bold",style:{color:e.disabled?d:r}},e.label),o.a.createElement(s.a,{note:!a.d,onPress:e.url?b:void 0,style:{color:e.disabled?d:e.text?r:f,textDecorationLine:e.url?"underline":"none"}},p))}},1213:function(e,t,n){"use strict";var r=n(11),o=n.n(r),a=n(0),c=n.n(a),i=n(12),u=n(4),l=n(32),s=n(25),f=n(41),d=n(408),b=n(22),p=n(320),m=n(1196),g=n(1216);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=Object(f.a)().accent,n=Object(a.useCallback)((function(){if(e.token){var t=e.token.balance;if(Object(b.h)(e.token)){var n=Object(b.n)(16);t=t.gt(n)?t.sub(n):l.ethers.constants.Zero}e.updateAmount(Object(b.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return c.a.createElement(u.a,{style:{position:"absolute",right:12,bottom:"web"===i.a.OS?12:24}},c.a.createElement(p.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(s.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:n,buttonStyle:{paddingHorizontal:s.g.tiny}}))};t.a=function(e){var t,n,r=Object(d.a)().border,o=Object(a.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(b.l)(t,e.token.decimals),e.onAmountChanged(t)}catch(n){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return c.a.createElement(u.a,null,e.title&&c.a.createElement(m.a,{text:e.title}),c.a.createElement(u.a,null,c.a.createElement(g.a,{label:e.label,value:e.amount,onChangeText:o,placeholder:"0.0",keyboardType:"numeric",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:s.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:h(h({},r()),{},{paddingHorizontal:s.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(n=t.balance)?void 0:n.gt(0))&&!e.hideMaxButton&&c.a.createElement(O,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1216:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(0),c=n.n(a),i=n(12),u=n(76),l=n(41);t.a=function(e){var t=Object(l.a)(),n=t.textDark,r=t.textMedium,s=t.textLight,f=e.size||"normal",d=e.color||n,b="small"===f?16:"large"===f?24:20,p=Object(a.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var n=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&n.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||n.push(e.error)})),n.length>0&&(null==e.onError||e.onError(n.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return c.a.createElement(u.c,o()({},e,{inputStyle:[{fontSize:b,fontFamily:"regular",paddingBottom:4,color:d,marginTop:0,minHeight:32},"web"===i.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:r},e.labelStyle],placeholderTextColor:e.placeholderTextColor||s,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:p}))}},1221:function(e,t,n){"use strict";var r=n(0),o=n(138),a=n.n(o),c=n(57);t.a=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=Object(r.useContext)(c.b),u=i.addOnBlockListener,l=i.removeOnBlockListener,s=t();a()((function(){return[setTimeout(e,o),setTimeout((function(){return u(s,e)}),o)]}),(function(e){e&&(e.forEach((function(e){return clearTimeout(e)})),l(s))}),n)}},1222:function(e,t,n){"use strict";var r=n(2),o=n.n(r),a=n(19),c=n.n(a),i=n(0),u=n(32),l=n(138),s=n.n(l),f=n(62),d=n(57),b=n(22),p=n(35),m=n(100),g=function(){return{wrapETH:Object(i.useCallback)((function(e,t){var n,r,a;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(b.g)("IWETH",p.l[1].address,t),c.next=3,o.a.awrap(n.estimateGas.deposit({value:e}));case 3:return r=c.sent,c.next=6,o.a.awrap(n.deposit({value:e,gasLimit:r}));case 6:return a=c.sent,c.next=9,o.a.awrap(Object(m.a)(a,"WETH.deposit()"));case 9:return c.abrupt("return",c.sent);case 10:case"end":return c.stop()}}),null,null,null,Promise)}),[]),unwrapETH:Object(i.useCallback)((function(e,t){var n,r,a;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(b.g)("IWETH",p.l[1].address,t),c.next=3,o.a.awrap(n.estimateGas.withdraw(e));case 3:return r=c.sent,c.next=6,o.a.awrap(n.withdraw(e,{gasLimit:r}));case 6:return a=c.sent,c.next=9,o.a.awrap(Object(m.a)(a,"WETH.withdraw()"));case 9:return c.abrupt("return",c.sent);case 10:case"end":return c.stop()}}),null,null,null,Promise)}),[])}};t.a=function(){var e=Object(i.useContext)(d.b),t=e.signer,n=e.address,r=e.tokens,a=e.updateTokens,l=e.getTokenAllowance,p=g(),m=p.wrapETH,y=p.unwrapETH,h=Object(i.useState)(""),O=c()(h,2),v=O[0],j=O[1],w=Object(i.useState)(""),x=c()(w,2),E=x[0],k=x[1],S=Object(i.useState)(""),P=c()(S,2),T=P[0],C=P[1],A=Object(i.useState)(""),D=c()(A,2),B=D[0],H=D[1],R=Object(i.useState)(!1),L=c()(R,2),W=L[0],z=L[1],F=Object(i.useState)(!1),M=c()(F,2),I=M[0],N=M[1],U=Object(i.useState)(!1),X=c()(U,2),G=X[0],J=X[1],V=Object(i.useState)(!1),Y=c()(V,2),Z=Y[0],$=Y[1],_=Object(i.useState)(!1),q=c()(_,2),K=q[0],Q=q[1],ee=r.find((function(e){return e.symbol===v})),te=r.find((function(e){return e.symbol===E}));Object(i.useEffect)((function(){""===v&&k(""),C(""),H("")}),[v,E]),Object(i.useEffect)((function(){j("")}),[n]),s()((function(){var e,n,r;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(ee&&te&&t)){a.next=19;break}if(z(!1),N(!1),J(!0),a.prev=4,e=u.ethers.BigNumber.from(2).pow(96).sub(1),Object(b.h)(ee)){a.next=11;break}return a.next=9,o.a.awrap(l(ee.address,f.d));case 9:n=a.sent,z(u.ethers.BigNumber.from(n).gte(e));case 11:if(Object(b.h)(te)){a.next=16;break}return a.next=14,o.a.awrap(l(te.address,f.d));case 14:r=a.sent,N(u.ethers.BigNumber.from(r).gte(e));case 16:return a.prev=16,J(!1),a.finish(16);case 19:case"end":return a.stop()}}),null,null,[[4,,16,19]],Promise)}),[ee,te,t]);var ne=Object(i.useCallback)((function(){var e;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!T||!t){n.next=15;break}return $(!0),n.prev=2,n.next=5,o.a.awrap(m(Object(b.l)(T),t));case 5:if(!(e=n.sent)){n.next=12;break}return n.next=9,o.a.awrap(e.wait());case 9:return n.next=11,o.a.awrap(a());case 11:j("");case 12:return n.prev=12,$(!1),n.finish(12);case 15:case"end":return n.stop()}}),null,null,[[2,,12,15]],Promise)}),[T,t]),re=Object(i.useCallback)((function(){var e;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!T||!t){n.next=15;break}return Q(!0),n.prev=2,n.next=5,o.a.awrap(y(Object(b.l)(T),t));case 5:if(!(e=n.sent)){n.next=12;break}return n.next=9,o.a.awrap(e.wait());case 9:return n.next=11,o.a.awrap(a());case 11:j("");case 12:return n.prev=12,Q(!1),n.finish(12);case 15:case"end":return n.stop()}}),null,null,[[2,,12,15]],Promise)}),[T,t]);return{fromSymbol:v,setFromSymbol:j,toSymbol:E,setToSymbol:k,fromToken:ee,toToken:te,fromAmount:T,setFromAmount:C,toAmount:B,setToAmount:H,fromTokenAllowed:W,setFromTokenAllowed:z,toTokenAllowed:I,setToTokenAllowed:N,loading:G,onWrap:ne,wrapping:Z,onUnwrap:re,unwrapping:K}}},1223:function(e,t,n){e.exports=n.p+"static/media/empty-token.e8aa64c5.png"},1224:function(e,t,n){e.exports=n.p+"static/media/ETH.ab794f02.png"},1232:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return w}));var r=n(11),o=n.n(r),a=n(19),c=n.n(a),i=n(15),u=n.n(i),l=n(0),s=n(4),f=n(418),d=n(85),b=n(241),p=n(419);function m(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var v="undefined"!==typeof e&&e.release&&"node"===e.release.name,j=function(){var e,t=!v&&window.matchMedia("(pointer:fine)").matches,n=new Map,r={x:0,y:0};function o(t){var r=n.get(t);if(!r)for(var o,a=m(n.keys());!(o=a()).done;){var c=o.value;x(c,t)&&(r=n.get(c))}e&&e(!1),r&&r(!0),e=r}function a(){e&&e(!1)}t&&(document.onmouseover=function(e){o(e.target)},document.onmousemove=function(e){r.x=e.pageX,r.y=e.pageY},document.ontouchstart=a,document.ontouchend=a,document.ontouchcancel=a,document.ontouchmove=a);return{add:function(e,t){n.set(e,t)},remove:function(e){n.delete(e)},mousePosition:r,hover:o}}();function w(e){var t=e.children,n=u()(e,["children"]),r=l.useRef(null),o=l.useState(!1),a=c()(o,2),i=a[0],f=a[1];return l.useEffect((function(){var e=r.current;return j.add(e,f),function(){j.remove(e)}}),[f,r]),l.createElement(s.a,O({ref:r,children:"function"===typeof t?t({hovered:i}):t},n))}function x(e,t){if(e===t)return!0;if(!e)return!1;for(var n,r=m(e.childNodes);!(n=r()).done;){if(x(n.value,t))return!0}return!1}function E(e){var t=function(t){var n=t.forwardedRef,r=t.onScroll,o=t.scrollEventThrottle,a=u()(t,["forwardedRef","onScroll","scrollEventThrottle"]);return l.createElement(e,O({ref:n,onScroll:function(e){r&&r(e);var t=j.mousePosition;(0,j.hover)(document.elementFromPoint(t.x,t.y))},scrollEventThrottle:o||25},a))};return l.forwardRef((function(e,n){return l.createElement(t,O({},e,{forwardedRef:n}))}))}l.forwardRef((function(e,t){var n=e.style,r=e.children,o=u()(e,["style","children"]),a=l.useRef(null),i=l.useState(!1),s=c()(i,2),d=s[0],b=s[1],p=function(e){var t=e.getForwardedRef,n=e.setLocalRef;return function(e){var r=t();n(e),"function"===typeof r?r(e):"object"===typeof r&&null!=r&&(r.current=e)}}({getForwardedRef:function(){return t},setLocalRef:function(e){a.current=e}});return l.useEffect((function(){var e=a.current;return j.add(e,b),function(){j.remove(e)}}),[b,a]),l.createElement(f.a,O({ref:p,style:function(e){return"function"===typeof n?n(h(h({},e),{},{hovered:d})):n},children:function(e){return"function"===typeof r?r(h(h({},e),{},{hovered:d})):r}},o))})),E(d.a),E(b.a),E(p.a)}).call(this,n(28))}}]);
//# sourceMappingURL=0.e37e8a95.chunk.js.map