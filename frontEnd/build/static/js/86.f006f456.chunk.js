"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[86],{30086:function(a,e,r){r.r(e),r.d(e,{default:function(){return S}});var s=r(74165),t=r(15861),n=r(29439),i=r(72791),c=r(57689),o=r(62649),d=r(47022),l=r(89743),u=r(2677),f=r(1413),v=r(45987),x=r(81694),m=r.n(x),p=r(10162),b=r(80184),Z=["className","bsPrefix","as"],N=i.forwardRef((function(a,e){var r=a.className,s=a.bsPrefix,t=a.as,n=void 0===t?"div":t,i=(0,v.Z)(a,Z);return s=(0,p.vE)(s,"card-group"),(0,b.jsx)(n,(0,f.Z)({ref:e,className:m()(r,s)},i))}));N.displayName="CardGroup";var h=N,j=r(40878),g=r(99033),y=r(27098),P=r(95313),w=r(16157),C=r(24846),k=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"],R=r(31243),E=r(59434),I=r(11007),S=function(){var a=(0,E.I0)(),e=(0,c.s0)(),r=(0,i.useState)(""),f=(0,n.Z)(r,2),v=f[0],x=f[1],m=(0,i.useState)(""),p=(0,n.Z)(m,2),Z=p[0],N=p[1],S=function(){var r=(0,t.Z)((0,s.Z)().mark((function r(){var t,n;return(0,s.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t={uniqueId:v,password:Z},r.prev=1,r.next=4,R.Z.post("/api/v1/user/login",t);case 4:if(!(n=r.sent).data.success){r.next=30;break}if(localStorage.setItem("token",n.data.token),o.ZP.success("Login Successful"),a((0,I.a)(n.data.data)),"rejected"!==n.data.data.status){r.next=12;break}return console.log("user is pending for approval"),r.abrupt("return",e("/rejected"));case 12:if("registeredViaSite"!==n.data.data.status){r.next=15;break}return console.log("user is pending for approval"),r.abrupt("return",e("/pending"));case 15:if("pending"!==n.data.data.status){r.next=18;break}return console.log("user is pending for approval"),r.abrupt("return",e("/pendingUser"));case 18:if("Master Admin"!==n.data.data.role){r.next=20;break}return r.abrupt("return",e("/master-admin-dashboard"));case 20:if("Admin"!==n.data.data.role){r.next=22;break}return r.abrupt("return",e("/admin-dashboard"));case 22:if("Master Distributor"!==n.data.data.role){r.next=24;break}return r.abrupt("return",e("/master-distributor-dashboard"));case 24:if("Distributor"!==n.data.data.role){r.next=26;break}return r.abrupt("return",e("/distributor-dashboard"));case 26:if("Retailer"!==n.data.data.role){r.next=28;break}return r.abrupt("return",e("/retailer-dashboard"));case 28:if("isWalletApprover"!==n.data.data.perms){r.next=30;break}return r.abrupt("return",e("/wallet-approver-dashboard"));case 30:r.next=36;break;case 32:r.prev=32,r.t0=r.catch(1),o.ZP.error("Some error occured Please try again later"),console.error(r.t0.response.data.message);case 36:case"end":return r.stop()}}),r,null,[[1,32]])})));return function(){return r.apply(this,arguments)}}();return(0,b.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,b.jsx)(d.Z,{children:(0,b.jsx)(l.Z,{className:"justify-content-center",children:(0,b.jsx)(u.Z,{md:5,children:(0,b.jsx)(h,{children:(0,b.jsx)(j.Z,{className:"p-4",children:(0,b.jsx)(g.Z,{children:(0,b.jsxs)("form",{children:[(0,b.jsx)("h1",{children:"Login"}),(0,b.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,b.jsxs)(y.Z,{className:"mb-3",children:[(0,b.jsx)(y.Z.Text,{id:"basic-addon1",children:"@"}),(0,b.jsx)(P.Z.Control,{placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:v,onChange:function(a){return x(a.target.value)}})]}),(0,b.jsxs)(P.Z.Group,{children:[(0,b.jsxs)(y.Z,{className:"mb-3",children:[(0,b.jsx)(y.Z.Text,{id:"basic-addon1",children:(0,b.jsx)(C.Z,{icon:k})}),(0,b.jsx)(P.Z.Control,{placeholder:"Password","aria-label":"Password",type:"password","aria-describedby":"basic-addon1",value:Z,onChange:function(a){return N(a.target.value)}})]}),(0,b.jsx)(d.Z,{className:"d-flex justify-content-between",children:(0,b.jsx)(w.Z,{color:"primary",className:"mt-3",active:!0,onClick:function(){return S()},children:"Login Now!"})})]})]})})})})})})})})}},40878:function(a,e,r){r.d(e,{Z:function(){return B}});var s=r(1413),t=r(45987),n=r(81694),i=r.n(n),c=r(72791),o=r(10162),d=r(99033),l=r(80184),u=["className","bsPrefix","as"],f=c.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,c=a.as,d=void 0===c?"div":c,f=(0,t.Z)(a,u);return n=(0,o.vE)(n,"card-footer"),(0,l.jsx)(d,(0,s.Z)({ref:e,className:i()(r,n)},f))}));f.displayName="CardFooter";var v=f,x=c.createContext(null);x.displayName="CardHeaderContext";var m=x,p=["bsPrefix","className","as"],b=c.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,d=a.as,u=void 0===d?"div":d,f=(0,t.Z)(a,p),v=(0,o.vE)(r,"card-header"),x=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,l.jsx)(m.Provider,{value:x,children:(0,l.jsx)(u,(0,s.Z)((0,s.Z)({ref:e},f),{},{className:i()(n,v)}))})}));b.displayName="CardHeader";var Z=b,N=["bsPrefix","className","variant","as"],h=c.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,c=a.variant,d=a.as,u=void 0===d?"img":d,f=(0,t.Z)(a,N),v=(0,o.vE)(r,"card-img");return(0,l.jsx)(u,(0,s.Z)({ref:e,className:i()(c?"".concat(v,"-").concat(c):v,n)},f))}));h.displayName="CardImg";var j=h,g=["className","bsPrefix","as"],y=c.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,c=a.as,d=void 0===c?"div":c,u=(0,t.Z)(a,g);return n=(0,o.vE)(n,"card-img-overlay"),(0,l.jsx)(d,(0,s.Z)({ref:e,className:i()(r,n)},u))}));y.displayName="CardImgOverlay";var P=y,w=["className","bsPrefix","as"],C=c.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,c=a.as,d=void 0===c?"a":c,u=(0,t.Z)(a,w);return n=(0,o.vE)(n,"card-link"),(0,l.jsx)(d,(0,s.Z)({ref:e,className:i()(r,n)},u))}));C.displayName="CardLink";var k=C,R=r(27472),E=["className","bsPrefix","as"],I=(0,R.Z)("h6"),S=c.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,c=a.as,d=void 0===c?I:c,u=(0,t.Z)(a,E);return n=(0,o.vE)(n,"card-subtitle"),(0,l.jsx)(d,(0,s.Z)({ref:e,className:i()(r,n)},u))}));S.displayName="CardSubtitle";var T=S,_=["className","bsPrefix","as"],H=c.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,c=a.as,d=void 0===c?"p":c,u=(0,t.Z)(a,_);return n=(0,o.vE)(n,"card-text"),(0,l.jsx)(d,(0,s.Z)({ref:e,className:i()(r,n)},u))}));H.displayName="CardText";var M=H,V=["className","bsPrefix","as"],G=(0,R.Z)("h5"),L=c.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,c=a.as,d=void 0===c?G:c,u=(0,t.Z)(a,V);return n=(0,o.vE)(n,"card-title"),(0,l.jsx)(d,(0,s.Z)({ref:e,className:i()(r,n)},u))}));L.displayName="CardTitle";var O=L,z=["bsPrefix","className","bg","text","border","body","children","as"],A=c.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,c=a.bg,u=a.text,f=a.border,v=a.body,x=void 0!==v&&v,m=a.children,p=a.as,b=void 0===p?"div":p,Z=(0,t.Z)(a,z),N=(0,o.vE)(r,"card");return(0,l.jsx)(b,(0,s.Z)((0,s.Z)({ref:e},Z),{},{className:i()(n,N,c&&"bg-".concat(c),u&&"text-".concat(u),f&&"border-".concat(f)),children:x?(0,l.jsx)(d.Z,{children:m}):m}))}));A.displayName="Card";var B=Object.assign(A,{Img:j,Title:O,Subtitle:T,Body:d.Z,Link:k,Text:M,Header:Z,Footer:v,ImgOverlay:P})},99033:function(a,e,r){var s=r(1413),t=r(45987),n=r(72791),i=r(81694),c=r.n(i),o=r(10162),d=r(80184),l=["className","bsPrefix","as"],u=n.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,i=a.as,u=void 0===i?"div":i,f=(0,t.Z)(a,l);return n=(0,o.vE)(n,"card-body"),(0,d.jsx)(u,(0,s.Z)({ref:e,className:c()(r,n)},f))}));u.displayName="CardBody",e.Z=u},27098:function(a,e,r){r.d(e,{Z:function(){return Z}});var s=r(45987),t=r(1413),n=r(81694),i=r.n(n),c=r(72791),o=r(10162),d=r(96882),l=c.createContext(null);l.displayName="InputGroupContext";var u=l,f=r(80184),v=["className","bsPrefix","as"],x=c.forwardRef((function(a,e){var r=a.className,n=a.bsPrefix,c=a.as,d=void 0===c?"span":c,l=(0,s.Z)(a,v);return n=(0,o.vE)(n,"input-group-text"),(0,f.jsx)(d,(0,t.Z)({ref:e,className:i()(r,n)},l))}));x.displayName="InputGroupText";var m=x,p=["bsPrefix","size","hasValidation","className","as"],b=c.forwardRef((function(a,e){var r=a.bsPrefix,n=a.size,d=a.hasValidation,l=a.className,v=a.as,x=void 0===v?"div":v,m=(0,s.Z)(a,p);r=(0,o.vE)(r,"input-group");var b=(0,c.useMemo)((function(){return{}}),[]);return(0,f.jsx)(u.Provider,{value:b,children:(0,f.jsx)(x,(0,t.Z)((0,t.Z)({ref:e},m),{},{className:i()(l,r,n&&"".concat(r,"-").concat(n),d&&"has-validation")}))})}));b.displayName="InputGroup";var Z=Object.assign(b,{Text:m,Radio:function(a){return(0,f.jsx)(m,{children:(0,f.jsx)(d.Z,(0,t.Z)({type:"radio"},a))})},Checkbox:function(a){return(0,f.jsx)(m,{children:(0,f.jsx)(d.Z,(0,t.Z)({type:"checkbox"},a))})}})},89743:function(a,e,r){var s=r(1413),t=r(45987),n=r(81694),i=r.n(n),c=r(72791),o=r(10162),d=r(80184),l=["bsPrefix","className","as"],u=c.forwardRef((function(a,e){var r=a.bsPrefix,n=a.className,c=a.as,u=void 0===c?"div":c,f=(0,t.Z)(a,l),v=(0,o.vE)(r,"row"),x=(0,o.pi)(),m=(0,o.zG)(),p="".concat(v,"-cols"),b=[];return x.forEach((function(a){var e,r=f[a];delete f[a],e=null!=r&&"object"===typeof r?r.cols:r;var s=a!==m?"-".concat(a):"";null!=e&&b.push("".concat(p).concat(s,"-").concat(e))})),(0,d.jsx)(u,(0,s.Z)((0,s.Z)({ref:e},f),{},{className:i().apply(void 0,[n,v].concat(b))}))}));u.displayName="Row",e.Z=u},27472:function(a,e,r){var s=r(1413),t=r(72791),n=r(81694),i=r.n(n),c=r(80184);e.Z=function(a){return t.forwardRef((function(e,r){return(0,c.jsx)("div",(0,s.Z)((0,s.Z)({},e),{},{ref:r,className:i()(e.className,a)}))}))}}}]);
//# sourceMappingURL=86.f006f456.chunk.js.map