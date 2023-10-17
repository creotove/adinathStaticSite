/*! For license information please see 843.099d4676.chunk.js.LICENSE.txt */
(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[843],{11843:function(a,e,r){"use strict";r.r(e),r.d(e,{default:function(){return S}});var t=r(74165),s=r(15861),n=r(29439),i=r(72791),o=r(57689),c=r(62649),d=r(47022),u=r(89743),l=r(2677),f=r(1413),v=r(45987),x=r(81694),m=r.n(x),b=r(10162),p=r(80184),Z=["className","bsPrefix","as"],N=i.forwardRef((function(a,e){var r=a.className,t=a.bsPrefix,s=a.as,n=void 0===s?"div":s,i=(0,v.Z)(a,Z);return t=(0,b.vE)(t,"card-group"),(0,p.jsx)(n,(0,f.Z)({ref:e,className:m()(r,t)},i))}));N.displayName="CardGroup";var h=N,g=r(40878),y=r(99033),j=r(27098),P=r(95313),w=r(16157),C=r(24846),k=r(93647),R=r(31243),E=r(59434),O=r(11007),S=function(){var a=(0,E.I0)(),e=(0,o.s0)(),r=(0,i.useState)(""),f=(0,n.Z)(r,2),v=f[0],x=f[1],m=(0,i.useState)(""),b=(0,n.Z)(m,2),Z=b[0],N=b[1],S=function(){var r=(0,s.Z)((0,t.Z)().mark((function r(){var s,n;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s={uniqueId:v,password:Z},r.prev=1,r.next=4,R.Z.post("/api/v1/user/login",s);case 4:if(!(n=r.sent).data.success){r.next=22;break}if(localStorage.setItem("token",n.data.token),c.ZP.success("Login Successful"),a((0,O.a)(n.data.data)),"pending"!==n.data.data.status){r.next=12;break}return console.log("user is pending for approval"),r.abrupt("return",e("/pending"));case 12:if("Master Admin"!==n.data.data.role){r.next=14;break}return r.abrupt("return",e("/master-admin-dashboard"));case 14:if("Admin"!==n.data.data.role){r.next=16;break}return r.abrupt("return",e("/admin-dashboard"));case 16:if("Master Distributor"!==n.data.data.role){r.next=18;break}return r.abrupt("return",e("/master-distributor-dashboard"));case 18:if("Distributor"!==n.data.data.role){r.next=20;break}return r.abrupt("return",e("/distributor-dashboard"));case 20:if("Retailer"!==n.data.data.role){r.next=22;break}return r.abrupt("return",e("/retailer-dashboard"));case 22:r.next=28;break;case 24:r.prev=24,r.t0=r.catch(1),c.ZP.error("Some error occured Please try again later"),console.error(r.t0.response.data.message);case 28:case"end":return r.stop()}}),r,null,[[1,24]])})));return function(){return r.apply(this,arguments)}}();return(0,p.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,p.jsx)(d.Z,{children:(0,p.jsx)(u.Z,{className:"justify-content-center",children:(0,p.jsx)(l.Z,{md:5,children:(0,p.jsx)(h,{children:(0,p.jsx)(g.Z,{className:"p-4",children:(0,p.jsx)(y.Z,{children:(0,p.jsxs)("form",{children:[(0,p.jsx)("h1",{children:"Login"}),(0,p.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,p.jsxs)(j.Z,{className:"mb-3",children:[(0,p.jsx)(j.Z.Text,{id:"basic-addon1",children:"@"}),(0,p.jsx)(P.Z.Control,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:v,onChange:function(a){return x(a.target.value)}})]}),(0,p.jsxs)(P.Z.Group,{children:[(0,p.jsxs)(j.Z,{className:"mb-3",children:[(0,p.jsx)(j.Z.Text,{id:"basic-addon1",children:(0,p.jsx)(C.Z,{icon:k.U})}),(0,p.jsx)(P.Z.Control,{placeholder:"Password","aria-label":"Password","aria-describedby":"basic-addon1",value:Z,onChange:function(a){return N(a.target.value)}})]}),(0,p.jsx)(d.Z,{className:"d-flex justify-content-between",children:(0,p.jsx)(w.Z,{color:"primary",className:"mt-3",active:!0,onClick:function(){return S()},children:"Login Now!"})})]})]})})})})})})})})}},93647:function(a,e,r){"use strict";r.d(e,{U:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]},81694:function(a,e){var r;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var a=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var n=typeof r;if("string"===n||"number"===n)a.push(r);else if(Array.isArray(r)){if(r.length){var i=s.apply(null,r);i&&a.push(i)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){a.push(r.toString());continue}for(var o in r)t.call(r,o)&&r[o]&&a.push(o)}}}return a.join(" ")}a.exports?(s.default=s,a.exports=s):void 0===(r=function(){return s}.apply(e,[]))||(a.exports=r)}()},16157:function(a,e,r){"use strict";r.d(e,{Z:function(){return b}});var t=r(1413),s=r(29439),n=r(45987),i=r(81694),o=r.n(i),c=r(72791),d=r(80184),u=["as","disabled"];function l(a){var e=a.tagName,r=a.disabled,t=a.href,s=a.target,n=a.rel,i=a.role,o=a.onClick,c=a.tabIndex,d=void 0===c?0:c,u=a.type;e||(e=null!=t||null!=s||null!=n?"a":"button");var l={tagName:e};if("button"===e)return[{type:u||"button",disabled:r},l];var f=function(a){(r||"a"===e&&function(a){return!a||"#"===a.trim()}(t))&&a.preventDefault(),r?a.stopPropagation():null==o||o(a)};return"a"===e&&(t||(t="#"),r&&(t=void 0)),[{role:null!=i?i:"button",disabled:void 0,tabIndex:r?void 0:d,href:t,target:"a"===e?s:void 0,"aria-disabled":r||void 0,rel:"a"===e?n:void 0,onClick:f,onKeyDown:function(a){" "===a.key&&(a.preventDefault(),f(a))}},l]}var f=c.forwardRef((function(a,e){var r=a.as,t=a.disabled,n=function(a,e){if(null==a)return{};var r,t,s={},n=Object.keys(a);for(t=0;t<n.length;t++)r=n[t],e.indexOf(r)>=0||(s[r]=a[r]);return s}(a,u),i=l(Object.assign({tagName:r,disabled:t},n)),o=(0,s.Z)(i,2),c=o[0],f=o[1].tagName;return(0,d.jsx)(f,Object.assign({},n,c,{ref:e}))}));f.displayName="Button";var v=r(10162),x=["as","bsPrefix","variant","size","active","disabled","className"],m=c.forwardRef((function(a,e){var r=a.as,i=a.bsPrefix,c=a.variant,u=void 0===c?"primary":c,f=a.size,m=a.active,b=void 0!==m&&m,p=a.disabled,Z=void 0!==p&&p,N=a.className,h=(0,n.Z)(a,x),g=(0,v.vE)(i,"btn"),y=l((0,t.Z)({tagName:r,disabled:Z},h)),j=(0,s.Z)(y,2),P=j[0],w=j[1].tagName;return(0,d.jsx)(w,(0,t.Z)((0,t.Z)((0,t.Z)({},P),h),{},{ref:e,disabled:Z,className:o()(N,g,b&&"active",u&&"".concat(g,"-").concat(u),f&&"".concat(g,"-").concat(f),h.href&&Z&&"disabled")}))}));m.displayName="Button";var b=m},40878:function(a,e,r){"use strict";r.d(e,{Z:function(){return L}});var t=r(1413),s=r(45987),n=r(81694),i=r.n(n),o=r(72791),c=r(10162),d=r(99033),u=r(80184),l=["className","bsPrefix","as"],f=o.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,o=a.as,d=void 0===o?"div":o,f=(0,s.Z)(a,l);return n=(0,c.vE)(n,"card-footer"),(0,u.jsx)(d,(0,t.Z)({ref:e,className:i()(r,n)},f))}));f.displayName="CardFooter";var v=f,x=o.createContext(null);x.displayName="CardHeaderContext";var m=x,b=["bsPrefix","className","as"],p=o.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,d=a.as,l=void 0===d?"div":d,f=(0,s.Z)(a,b),v=(0,c.vE)(r,"card-header"),x=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,u.jsx)(m.Provider,{value:x,children:(0,u.jsx)(l,(0,t.Z)((0,t.Z)({ref:e},f),{},{className:i()(n,v)}))})}));p.displayName="CardHeader";var Z=p,N=["bsPrefix","className","variant","as"],h=o.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,o=a.variant,d=a.as,l=void 0===d?"img":d,f=(0,s.Z)(a,N),v=(0,c.vE)(r,"card-img");return(0,u.jsx)(l,(0,t.Z)({ref:e,className:i()(o?"".concat(v,"-").concat(o):v,n)},f))}));h.displayName="CardImg";var g=h,y=["className","bsPrefix","as"],j=o.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,o=a.as,d=void 0===o?"div":o,l=(0,s.Z)(a,y);return n=(0,c.vE)(n,"card-img-overlay"),(0,u.jsx)(d,(0,t.Z)({ref:e,className:i()(r,n)},l))}));j.displayName="CardImgOverlay";var P=j,w=["className","bsPrefix","as"],C=o.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,o=a.as,d=void 0===o?"a":o,l=(0,s.Z)(a,w);return n=(0,c.vE)(n,"card-link"),(0,u.jsx)(d,(0,t.Z)({ref:e,className:i()(r,n)},l))}));C.displayName="CardLink";var k=C,R=r(27472),E=["className","bsPrefix","as"],O=(0,R.Z)("h6"),S=o.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,o=a.as,d=void 0===o?O:o,l=(0,s.Z)(a,E);return n=(0,c.vE)(n,"card-subtitle"),(0,u.jsx)(d,(0,t.Z)({ref:e,className:i()(r,n)},l))}));S.displayName="CardSubtitle";var I=S,T=["className","bsPrefix","as"],_=o.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,o=a.as,d=void 0===o?"p":o,l=(0,s.Z)(a,T);return n=(0,c.vE)(n,"card-text"),(0,u.jsx)(d,(0,t.Z)({ref:e,className:i()(r,n)},l))}));_.displayName="CardText";var B=_,G=["className","bsPrefix","as"],H=(0,R.Z)("h5"),M=o.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,o=a.as,d=void 0===o?H:o,l=(0,s.Z)(a,G);return n=(0,c.vE)(n,"card-title"),(0,u.jsx)(d,(0,t.Z)({ref:e,className:i()(r,n)},l))}));M.displayName="CardTitle";var z=M,V=["bsPrefix","className","bg","text","border","body","children","as"],D=o.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,o=a.bg,l=a.text,f=a.border,v=a.body,x=void 0!==v&&v,m=a.children,b=a.as,p=void 0===b?"div":b,Z=(0,s.Z)(a,V),N=(0,c.vE)(r,"card");return(0,u.jsx)(p,(0,t.Z)((0,t.Z)({ref:e},Z),{},{className:i()(n,N,o&&"bg-".concat(o),l&&"text-".concat(l),f&&"border-".concat(f)),children:x?(0,u.jsx)(d.Z,{children:m}):m}))}));D.displayName="Card";var L=Object.assign(D,{Img:g,Title:z,Subtitle:I,Body:d.Z,Link:k,Text:B,Header:Z,Footer:v,ImgOverlay:P})},99033:function(a,e,r){"use strict";var t=r(1413),s=r(45987),n=r(72791),i=r(81694),o=r.n(i),c=r(10162),d=r(80184),u=["className","bsPrefix","as"],l=n.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,i=a.as,l=void 0===i?"div":i,f=(0,s.Z)(a,u);return n=(0,c.vE)(n,"card-body"),(0,d.jsx)(l,(0,t.Z)({ref:e,className:o()(r,n)},f))}));l.displayName="CardBody",e.Z=l},47022:function(a,e,r){"use strict";var t=r(1413),s=r(45987),n=r(81694),i=r.n(n),o=r(72791),c=r(10162),d=r(80184),u=["bsPrefix","fluid","as","className"],l=o.forwardRef((function(a,e){var r=a.bsPrefix,n=a.fluid,o=void 0!==n&&n,l=a.as,f=void 0===l?"div":l,v=a.className,x=(0,s.Z)(a,u),m=(0,c.vE)(r,"container"),b="string"===typeof o?"-".concat(o):"-fluid";return(0,d.jsx)(f,(0,t.Z)((0,t.Z)({ref:e},x),{},{className:i()(v,o?"".concat(m).concat(b):m)}))}));l.displayName="Container",e.Z=l},27098:function(a,e,r){"use strict";r.d(e,{Z:function(){return Z}});var t=r(45987),s=r(1413),n=r(81694),i=r.n(n),o=r(72791),c=r(10162),d=r(96882),u=o.createContext(null);u.displayName="InputGroupContext";var l=u,f=r(80184),v=["className","bsPrefix","as"],x=o.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,o=a.as,d=void 0===o?"span":o,u=(0,t.Z)(a,v);return n=(0,c.vE)(n,"input-group-text"),(0,f.jsx)(d,(0,s.Z)({ref:e,className:i()(r,n)},u))}));x.displayName="InputGroupText";var m=x,b=["bsPrefix","size","hasValidation","className","as"],p=o.forwardRef((function(a,e){var r=a.bsPrefix,n=a.size,d=a.hasValidation,u=a.className,v=a.as,x=void 0===v?"div":v,m=(0,t.Z)(a,b);r=(0,c.vE)(r,"input-group");var p=(0,o.useMemo)((function(){return{}}),[]);return(0,f.jsx)(l.Provider,{value:p,children:(0,f.jsx)(x,(0,s.Z)((0,s.Z)({ref:e},m),{},{className:i()(u,r,n&&"".concat(r,"-").concat(n),d&&"has-validation")}))})}));p.displayName="InputGroup";var Z=Object.assign(p,{Text:m,Radio:function(a){return(0,f.jsx)(m,{children:(0,f.jsx)(d.Z,(0,s.Z)({type:"radio"},a))})},Checkbox:function(a){return(0,f.jsx)(m,{children:(0,f.jsx)(d.Z,(0,s.Z)({type:"checkbox"},a))})}})},89743:function(a,e,r){"use strict";var t=r(1413),s=r(45987),n=r(81694),i=r.n(n),o=r(72791),c=r(10162),d=r(80184),u=["bsPrefix","className","as"],l=o.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,o=a.as,l=void 0===o?"div":o,f=(0,s.Z)(a,u),v=(0,c.vE)(r,"row"),x=(0,c.pi)(),m=(0,c.zG)(),b="".concat(v,"-cols"),p=[];return x.forEach((function(a){var e,r=f[a];delete f[a],e=null!=r&&"object"===typeof r?r.cols:r;var t=a!==m?"-".concat(a):"";null!=e&&p.push("".concat(b).concat(t,"-").concat(e))})),(0,d.jsx)(l,(0,t.Z)((0,t.Z)({ref:e},f),{},{className:i().apply(void 0,[n,v].concat(p))}))}));l.displayName="Row",e.Z=l},10162:function(a,e,r){"use strict";r.d(e,{SC:function(){return d},pi:function(){return o},vE:function(){return i},zG:function(){return c}});var t=r(72791),s=(r(80184),["xxl","xl","lg","md","sm","xs"]),n=t.createContext({prefixes:{},breakpoints:s,minBreakpoint:"xs"});n.Consumer,n.Provider;function i(a,e){var r=(0,t.useContext)(n).prefixes;return a||r[e]||e}function o(){return(0,t.useContext)(n).breakpoints}function c(){return(0,t.useContext)(n).minBreakpoint}function d(){return"rtl"===(0,t.useContext)(n).dir}},27472:function(a,e,r){"use strict";var t=r(1413),s=r(72791),n=r(81694),i=r.n(n),o=r(80184);e.Z=function(a){return s.forwardRef((function(e,r){return(0,o.jsx)("div",(0,t.Z)((0,t.Z)({},e),{},{ref:r,className:i()(e.className,a)}))}))}},45987:function(a,e,r){"use strict";r.d(e,{Z:function(){return s}});var t=r(63366);function s(a,e){if(null==a)return{};var r,s,n=(0,t.Z)(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(s=0;s<i.length;s++)r=i[s],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(a,r)&&(n[r]=a[r])}return n}},63366:function(a,e,r){"use strict";function t(a,e){if(null==a)return{};var r,t,s={},n=Object.keys(a);for(t=0;t<n.length;t++)r=n[t],e.indexOf(r)>=0||(s[r]=a[r]);return s}r.d(e,{Z:function(){return t}})}}]);
//# sourceMappingURL=843.099d4676.chunk.js.map