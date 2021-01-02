(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{1196:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(41),s=n(320),c=n(83),i=n(69);t.a=function(e){var t=Object(l.a)().accent;return r.a.createElement(c.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:o.g.small}},r.a.createElement(i.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:o.d?24:18,paddingBottom:o.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(s.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:o.g.tiny}}))}},1200:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(41),s=n(61),c=n(69);t.a=function(e){var t=Object(s.a)(),n=Object(l.a)(),a=n.textDark,i=n.textLight,u=n.placeholder;return r.a.createElement(c.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:e.disabled?u:e.amount?a:i}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1201:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(61),l=n(320);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(l.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1202:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),s=n(41);t.a=function(e){var t=Object(s.a)().border;return r.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?l.g.tiny:l.g.small,marginBottom:e.small?l.g.tiny:l.g.small+l.g.tiny}})}},1204:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),s=n(69);t.a=function(e){var t=e.error;return r.a.createElement(o.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:l.g.tiny,marginTop:l.g.small}},t.code&&r.a.createElement(s.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),r.a.createElement(s.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1205:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(11),l=n.n(o),s=n(0),c=n.n(s),i=n(4),u=n(25),b=n(49),d=n(41),m=n(408);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(s.useContext)(b.a).darkMode,n=Object(d.a)(),a=n.backgroundLight,o=n.borderDark,l=Object(m.a)().border;return c.a.createElement(i.a,r()({},e,{style:[p(p({},l({color:t?o:a})),{},{backgroundColor:a,marginTop:u.g.normal+u.g.small,padding:u.g.small+u.g.tiny}),e.style]}))}},1207:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(19),l=n.n(o),s=n(0),c=n.n(s),i=n(4),u=n(25),b=n(57),d=n(61),m=n(320);t.a=function(e){var t,n=Object(d.a)(),a=Object(s.useContext)(b.b).approveToken,o=Object(s.useState)(!1),f=l()(o,2),p=f[0],g=f[1],h=Object(s.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),g(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,g(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?c.a.createElement(i.a,null):c.a.createElement(m.a,{title:n("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:h,loading:p,containerStyle:{marginBottom:u.g.tiny}})}},1209:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(61),l=n(320);t.a=function(){var e=Object(o.a)();return r.a.createElement(l.a,{title:e("fetching"),disabled:!0})}},1211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(41),s=n(156),c=n(61),i=n(83),u=n(69);t.a=function(e){var t=Object(c.a)(),n=Object(l.a)(),a=n.textMedium,b=n.textLight,d=n.placeholder,m=Object(s.a)(e.url||"","","_blank"),f=e.disabled?"N/A":e.text?e.text+(e.suffix?" "+e.suffix:""):t("fetching");return r.a.createElement(i.a,{style:{justifyContent:"space-between",marginTop:4}},r.a.createElement(u.a,{note:!o.d,fontWeight:"bold",style:{color:e.disabled?d:a}},e.label),r.a.createElement(u.a,{note:!o.d,onPress:e.url?m:void 0,style:{color:e.disabled?d:e.text?a:b,textDecorationLine:e.url?"underline":"none"}},f))}},1212:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),s=n(41),c=n(408),i=n(320),u=n(69);t.a=function(e){var t=Object(s.a)().textLight,n=(0,Object(c.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(o.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(u.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(i.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.g.tiny}}))}},1213:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(0),l=n.n(o),s=n(12),c=n(4),i=n(32),u=n(25),b=n(41),d=n(408),m=n(22),f=n(320),p=n(1196),g=n(1216);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=Object(b.a)().accent,n=Object(o.useCallback)((function(){if(e.token){var t=e.token.balance;if(Object(m.h)(e.token)){var n=Object(m.n)(16);t=t.gt(n)?t.sub(n):i.ethers.constants.Zero}e.updateAmount(Object(m.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return l.a.createElement(c.a,{style:{position:"absolute",right:12,bottom:"web"===s.a.OS?12:24}},l.a.createElement(f.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(u.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:n,buttonStyle:{paddingHorizontal:u.g.tiny}}))};t.a=function(e){var t,n,a=Object(d.a)().border,r=Object(o.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(m.l)(t,e.token.decimals),e.onAmountChanged(t)}catch(n){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return l.a.createElement(c.a,null,e.title&&l.a.createElement(p.a,{text:e.title}),l.a.createElement(c.a,null,l.a.createElement(g.a,{label:e.label,value:e.amount,onChangeText:r,placeholder:"0.0",keyboardType:"numeric",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:u.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:y(y({},a()),{},{paddingHorizontal:u.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(n=t.balance)?void 0:n.gt(0))&&!e.hideMaxButton&&l.a.createElement(O,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1216:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(0),l=n.n(o),s=n(12),c=n(76),i=n(41);t.a=function(e){var t=Object(i.a)(),n=t.textDark,a=t.textMedium,u=t.textLight,b=e.size||"normal",d=e.color||n,m="small"===b?16:"large"===b?24:20,f=Object(o.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var n=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&n.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||n.push(e.error)})),n.length>0&&(null==e.onError||e.onError(n.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return l.a.createElement(c.c,r()({},e,{inputStyle:[{fontSize:m,fontFamily:"regular",paddingBottom:4,color:d,marginTop:0,minHeight:32},"web"===s.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:a},e.labelStyle],placeholderTextColor:e.placeholderTextColor||u,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:f}))}},1237:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(19),l=n.n(o),s=n(0),c=n(32),i=n(138),u=n.n(i),b=n(62),d=n(57),m=n(22),f=n(100),p=function(){return{enter:Object(s.useCallback)((function(e,t){var n,a,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(m.g)("SushiBar",b.f,t),l.next=3,r.a.awrap(n.estimateGas.enter(e));case 3:return a=l.sent,l.next=6,r.a.awrap(n.enter(e,{gasLimit:a.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.enter()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[]),leave:Object(s.useCallback)((function(e,t){var n,a,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(m.g)("SushiBar",b.f,t),l.next=3,r.a.awrap(n.estimateGas.leave(e));case 3:return a=l.sent,l.next=6,r.a.awrap(n.leave(e,{gasLimit:a.mul(120).div(100)}));case 6:return o=l.sent,l.abrupt("return",Object(f.a)(o,"SushiBar.leave()",e.toString()));case 8:case"end":return l.stop()}}),null,null,null,Promise)}),[])}};t.a=function(){var e=Object(s.useContext)(d.b),t=e.signer,n=e.address,a=e.getTokenAllowance,o=e.tokens,i=e.updateTokens,f=p(),g=f.enter,h=f.leave,y=Object(s.useState)(),O=l()(y,2),x=O[0],j=O[1],v=Object(s.useState)(),E=l()(v,2),S=E[0],k=E[1],w=Object(s.useState)(),C=l()(w,2),P=C[0],T=C[1],A=Object(s.useState)(""),B=l()(A,2),z=B[0],D=B[1],H=Object(s.useState)(!1),L=l()(H,2),W=L[0],M=L[1],F=Object(s.useState)(!1),I=l()(F,2),Z=I[0],N=I[1],U=Object(s.useState)(!1),X=l()(U,2),G=X[0],J=X[1],R=Object(s.useState)(!1),V=l()(R,2),_=V[0],q=V[1],K=Object(s.useState)(!1),Q=l()(K,2),Y=Q[0],$=Q[1],ee=Object(s.useMemo)((function(){return o.find((function(e){return"SUSHI"===e.symbol}))}),[o]),te=Object(s.useMemo)((function(){return o.find((function(e){return"xSUSHI"===e.symbol}))}),[o]);Object(s.useEffect)((function(){D("")}),[n]),u()((function(){var e,n,o,l,s;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(ee&&te&&t)){i.next=34;break}return M(!1),N(!1),J(!0),i.prev=4,e=c.ethers.BigNumber.from(2).pow(96).sub(1),i.next=8,r.a.awrap(a(ee.address,b.f));case 8:return n=i.sent,M(c.ethers.BigNumber.from(n).gte(e)),i.next=12,r.a.awrap(a(te.address,b.f));case 12:return o=i.sent,N(c.ethers.BigNumber.from(o).gte(e)),l=Object(m.g)("ERC20",ee.address,t),i.t0=j,i.next=18,r.a.awrap(l.balanceOf(b.f));case 18:return i.t1=i.sent,(0,i.t0)(i.t1),i.t2=k,i.next=23,r.a.awrap(l.totalSupply());case 23:return i.t3=i.sent,(0,i.t2)(i.t3),s=Object(m.g)("ERC20",te.address,t),i.t4=T,i.next=29,r.a.awrap(s.totalSupply());case 29:i.t5=i.sent,(0,i.t4)(i.t5);case 31:return i.prev=31,J(!1),i.finish(31);case 34:case"end":return i.stop()}}),null,null,[[4,,31,34]],Promise)}),[ee,te,t]);var ne=Object(s.useCallback)((function(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(z&&ee&&t)){a.next=16;break}return q(!0),a.prev=2,e=Object(m.l)(z,ee.decimals),a.next=6,r.a.awrap(g(e,t));case 6:if(!(n=a.sent)){a.next=13;break}return a.next=10,r.a.awrap(n.wait());case 10:return a.next=12,r.a.awrap(i());case 12:D("");case 13:return a.prev=13,q(!1),a.finish(13);case 16:case"end":return a.stop()}}),null,null,[[2,,13,16]],Promise)}),[z,ee,t]),ae=Object(s.useCallback)((function(){var e,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(z&&te&&t)){a.next=16;break}return $(!0),a.prev=2,e=Object(m.l)(z,te.decimals),a.next=6,r.a.awrap(h(e,t));case 6:if(!(n=a.sent)){a.next=13;break}return a.next=10,r.a.awrap(n.wait());case 10:return a.next=12,r.a.awrap(i());case 12:D("");case 13:return a.prev=13,$(!1),a.finish(13);case 16:case"end":return a.stop()}}),null,null,[[2,,13,16]],Promise)}),[z,te,t]);return{sushi:ee,xSushi:te,sushiStaked:x,sushiSupply:S,xSushiSupply:P,amount:z,setAmount:D,sushiAllowed:W,setSushiAllowed:M,xSushiAllowed:Z,setXSushiAllowed:N,loading:G,onEnter:ne,entering:_,onLeave:ae,leaving:Y}}},1376:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(19),l=n.n(o),s=n(0),c=n.n(s),i=n(12),u=n(4),b=n(1200),d=n(1207),m=n(412),f=n(1202),p=n(320),g=n(409),h=n(410),y=n(1204),O=n(1209),x=n(1196),j=n(1205),v=n(1201),E=n(1211),S=n(1212),k=n(69),w=n(411),C=n(1213),P=n(415),T=n(416),A=n(62),B=n(25),z=n(157),D=n(1237),H=n(61),L=n(22),W=n(413),M=function(){var e=Object(H.a)(),t=Object(D.a)();return c.a.createElement(u.a,{style:{marginTop:B.g.large}},c.a.createElement(F,{state:t}),c.a.createElement(f.a,null),c.a.createElement(I,{state:t}),t.sushi&&t.sushi.balance.isZero()&&c.a.createElement(S.a,{text:e("you-dont-have-sushi"),color:"orange",style:{marginTop:B.g.small}}),c.a.createElement(Z,{state:t}))},F=function(e){var t=e.state,n=Object(H.a)();return c.a.createElement(u.a,null,c.a.createElement(x.a,{text:n("your-sushi")}),c.a.createElement(b.a,{amount:t.sushi?Object(L.d)(t.sushi.balance,t.sushi.decimals):"",suffix:"SUSHI"}))},I=function(e){var t=e.state,n=Object(H.a)();return!t.sushi||t.sushi.balance.isZero()?c.a.createElement(x.a,{text:n("amount-to-stake"),disabled:!0}):c.a.createElement(u.a,null,c.a.createElement(x.a,{text:n("amount-to-stake")}),c.a.createElement(C.a,{token:t.sushi,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:B.d}))},Z=function(e){var t=e.state,n=Object(H.a)(),a=!t.sushi||t.sushi.balance.isZero()||!t.xSushi||!t.sushiStaked||!t.xSushiSupply||Object(L.j)(t.amount),r=a?void 0:Object(L.l)(t.amount,t.sushi.decimals).mul(t.xSushiSupply).div(t.sushiStaked),o=a?void 0:Object(L.d)(t.xSushiSupply,t.xSushi.decimals,8),l=a?void 0:t.xSushi.balance.add(r),s=a?void 0:z.a.from(r.add(l),t.xSushiSupply).toString();return c.a.createElement(j.a,null,c.a.createElement(b.a,{amount:r?Object(L.d)(r,t.xSushi.decimals,8):"",suffix:"xSUSHI",disabled:a}),c.a.createElement(E.a,{label:n("xsushi-share"),text:s,suffix:"%",disabled:a}),c.a.createElement(E.a,{label:n("total-xsushi"),text:o,disabled:a}),c.a.createElement(N,{state:t}))},N=function(e){var t=e.state,n=Object(s.useState)({}),a=l()(n,2),r=a[0],o=a[1];return c.a.createElement(u.a,{style:{marginTop:B.g.normal}},!t.sushi||t.sushi.balance.isZero()||Object(L.j)(t.amount)?c.a.createElement(U,{state:t,onError:o,disabled:!0}):Object(L.l)(t.amount,t.sushi.decimals).gt(t.sushi.balance)?c.a.createElement(v.a,{symbol:t.sushi.symbol}):t.loading?c.a.createElement(O.a,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{token:t.sushi,spender:A.f,onSuccess:function(){return t.setSushiAllowed(!0)},onError:o,hidden:t.sushiAllowed}),c.a.createElement(U,{state:t,onError:o,disabled:!t.sushiAllowed})),r.message&&4001!==r.code&&c.a.createElement(y.a,{error:r}))},U=function(e){var t=e.state,n=e.onError,a=e.disabled,o=Object(H.a)();return c.a.createElement(p.a,{title:o("stake"),loading:t.entering,onPress:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onEnter());case 4:t.setAmount(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)},disabled:a})};t.default=function(){var e=Object(H.a)();return c.a.createElement(W.a,null,c.a.createElement(g.a,null,c.a.createElement(m.a,null),c.a.createElement(h.a,null,c.a.createElement(w.a,{text:e("stake")}),c.a.createElement(k.a,{light:!0},e("stake-desc")),c.a.createElement(M,null)),"web"===i.a.OS&&c.a.createElement(P.a,null)),c.a.createElement(T.d,null))}}}]);
//# sourceMappingURL=7.c886645e.chunk.js.map