"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[4288],{4288:function(e,a,r){r.r(a);var s=r(74165),t=r(15861),c=r(29439),n=r(72791),i=r(47022),o=r(89743),d=r(40878),l=r(62591),u=r(31243),f=r(62649),x=r(80184);a.default=function(){var e=(0,n.useState)([]),a=(0,c.Z)(e,2),r=a[0],v=a[1],m=function(e){var a=new Date(e);return"".concat(a.getFullYear(),"-").concat(String(a.getMonth()+1).padStart(2,"0"),"-").concat(String(a.getDate()).padStart(2,"0")," ").concat(String(a.getHours()).padStart(2,"0"),":").concat(String(a.getMinutes()).padStart(2,"0"),":").concat(String(a.getSeconds()).padStart(2,"0"))},p=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=u.Z.get("api/v1/masterAdmin/getCouponRequests"),e.next=4,a;case 4:if(!e.sent.data.success){e.next=10;break}return e.t0=v,e.next=8,a;case 8:e.t1=e.sent.data.data,(0,e.t0)(e.t1);case 10:e.next=15;break;case 12:e.prev=12,e.t2=e.catch(0),console.log(e.t2);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){p()}),[]),(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(i.Z,{fluid:!0,children:[(0,x.jsx)("h3",{children:"ApprovePCoupon"}),(0,x.jsx)(o.Z,{children:(0,x.jsxs)(d.Z,{children:[(0,x.jsx)(d.Z.Header,{children:"Purchase Coupon Requests"}),(0,x.jsx)(d.Z.Body,{children:(0,x.jsxs)(l.Z,{responsive:!0,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{className:"text-center",children:"Sn"}),(0,x.jsx)("th",{className:"text-center",children:"Date"}),(0,x.jsx)("th",{className:"text-center",children:"Requested By"}),(0,x.jsx)("th",{className:"text-center",children:"Unique ID"}),(0,x.jsx)("th",{className:"text-center",children:"Quantity"}),(0,x.jsx)("th",{className:"text-center",children:"Single Coupon Price"}),(0,x.jsx)("th",{className:"text-center",children:"Total"}),(0,x.jsx)("th",{colSpan:2,className:"text-center",children:"Action"})]})}),(0,x.jsx)("tbody",{children:r&&r.length>0?r.map((function(e,a){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"text-center",children:a+1}),(0,x.jsx)("td",{className:"text-center",children:m(e.purchaseDate)}),(0,x.jsx)("td",{className:"text-center",children:e.retailerId.name}),(0,x.jsx)("td",{className:"text-center",children:e.retailerId.uniqueId}),(0,x.jsx)("td",{className:"text-center",children:e.quantity}),(0,x.jsx)("td",{className:"text-center",children:e.retailerId.couponPrice}),(0,x.jsx)("td",{className:"text-center",children:e.totalPrice}),(0,x.jsxs)("td",{className:"text-center",children:[(0,x.jsx)("button",{className:"btn btn-success me-3",onClick:(0,t.Z)((0,s.Z)().mark((function a(){var r;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r={uniqueId:e.retailerId.uniqueId,singleCouponPrice:e.retailerId.couponPrice,quantity:e.quantity,coupon_id:e._id},a.next=4,u.Z.post("api/v1/test/calculateAndAssignCommissions",r);case 4:a.sent.data.success&&(f.ZP.success("Coupon Aprrove successfully"),p()),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])}))),children:"Approve"}),(0,x.jsx)("button",{className:"btn btn-danger",onClick:(0,t.Z)((0,s.Z)().mark((function a(){var r;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r={purchaseId:e._id},a.next=4,u.Z.post("api/v1/masterAdmin/rejectCouponPurchase",r);case 4:a.sent.data.success&&p(),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])}))),children:"Reject"})]})]},a)})):(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:"8",className:"text-center text-danger",children:"No Coupon Requests"})})})]})})]})})]})})}},40878:function(e,a,r){r.d(a,{Z:function(){return O}});var s=r(1413),t=r(45987),c=r(81694),n=r.n(c),i=r(72791),o=r(10162),d=r(99033),l=r(80184),u=["className","bsPrefix","as"],f=i.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,i=e.as,d=void 0===i?"div":i,f=(0,t.Z)(e,u);return c=(0,o.vE)(c,"card-footer"),(0,l.jsx)(d,(0,s.Z)({ref:a,className:n()(r,c)},f))}));f.displayName="CardFooter";var x=f,v=i.createContext(null);v.displayName="CardHeaderContext";var m=v,p=["bsPrefix","className","as"],h=i.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,d=e.as,u=void 0===d?"div":d,f=(0,t.Z)(e,p),x=(0,o.vE)(r,"card-header"),v=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:x}}),[x]);return(0,l.jsx)(m.Provider,{value:v,children:(0,l.jsx)(u,(0,s.Z)((0,s.Z)({ref:a},f),{},{className:n()(c,x)}))})}));h.displayName="CardHeader";var N=h,b=["bsPrefix","className","variant","as"],Z=i.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,i=e.variant,d=e.as,u=void 0===d?"img":d,f=(0,t.Z)(e,b),x=(0,o.vE)(r,"card-img");return(0,l.jsx)(u,(0,s.Z)({ref:a,className:n()(i?"".concat(x,"-").concat(i):x,c)},f))}));Z.displayName="CardImg";var j=Z,g=["className","bsPrefix","as"],P=i.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,i=e.as,d=void 0===i?"div":i,u=(0,t.Z)(e,g);return c=(0,o.vE)(c,"card-img-overlay"),(0,l.jsx)(d,(0,s.Z)({ref:a,className:n()(r,c)},u))}));P.displayName="CardImgOverlay";var y=P,w=["className","bsPrefix","as"],C=i.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,i=e.as,d=void 0===i?"a":i,u=(0,t.Z)(e,w);return c=(0,o.vE)(c,"card-link"),(0,l.jsx)(d,(0,s.Z)({ref:a,className:n()(r,c)},u))}));C.displayName="CardLink";var R=C,S=r(27472),k=["className","bsPrefix","as"],E=(0,S.Z)("h6"),I=i.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,i=e.as,d=void 0===i?E:i,u=(0,t.Z)(e,k);return c=(0,o.vE)(c,"card-subtitle"),(0,l.jsx)(d,(0,s.Z)({ref:a,className:n()(r,c)},u))}));I.displayName="CardSubtitle";var q=I,_=["className","bsPrefix","as"],A=i.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,i=e.as,d=void 0===i?"p":i,u=(0,t.Z)(e,_);return c=(0,o.vE)(c,"card-text"),(0,l.jsx)(d,(0,s.Z)({ref:a,className:n()(r,c)},u))}));A.displayName="CardText";var H=A,B=["className","bsPrefix","as"],D=(0,S.Z)("h5"),T=i.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,i=e.as,d=void 0===i?D:i,u=(0,t.Z)(e,B);return c=(0,o.vE)(c,"card-title"),(0,l.jsx)(d,(0,s.Z)({ref:a,className:n()(r,c)},u))}));T.displayName="CardTitle";var F=T,z=["bsPrefix","className","bg","text","border","body","children","as"],M=i.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,i=e.bg,u=e.text,f=e.border,x=e.body,v=void 0!==x&&x,m=e.children,p=e.as,h=void 0===p?"div":p,N=(0,t.Z)(e,z),b=(0,o.vE)(r,"card");return(0,l.jsx)(h,(0,s.Z)((0,s.Z)({ref:a},N),{},{className:n()(c,b,i&&"bg-".concat(i),u&&"text-".concat(u),f&&"border-".concat(f)),children:v?(0,l.jsx)(d.Z,{children:m}):m}))}));M.displayName="Card";var O=Object.assign(M,{Img:j,Title:F,Subtitle:q,Body:d.Z,Link:R,Text:H,Header:N,Footer:x,ImgOverlay:y})},99033:function(e,a,r){var s=r(1413),t=r(45987),c=r(72791),n=r(81694),i=r.n(n),o=r(10162),d=r(80184),l=["className","bsPrefix","as"],u=c.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,n=e.as,u=void 0===n?"div":n,f=(0,t.Z)(e,l);return c=(0,o.vE)(c,"card-body"),(0,d.jsx)(u,(0,s.Z)({ref:a,className:i()(r,c)},f))}));u.displayName="CardBody",a.Z=u},89743:function(e,a,r){var s=r(1413),t=r(45987),c=r(81694),n=r.n(c),i=r(72791),o=r(10162),d=r(80184),l=["bsPrefix","className","as"],u=i.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,i=e.as,u=void 0===i?"div":i,f=(0,t.Z)(e,l),x=(0,o.vE)(r,"row"),v=(0,o.pi)(),m=(0,o.zG)(),p="".concat(x,"-cols"),h=[];return v.forEach((function(e){var a,r=f[e];delete f[e],a=null!=r&&"object"===typeof r?r.cols:r;var s=e!==m?"-".concat(e):"";null!=a&&h.push("".concat(p).concat(s,"-").concat(a))})),(0,d.jsx)(u,(0,s.Z)((0,s.Z)({ref:a},f),{},{className:n().apply(void 0,[c,x].concat(h))}))}));u.displayName="Row",a.Z=u},62591:function(e,a,r){var s=r(1413),t=r(45987),c=r(81694),n=r.n(c),i=r(72791),o=r(10162),d=r(80184),l=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=i.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,i=e.striped,u=e.bordered,f=e.borderless,x=e.hover,v=e.size,m=e.variant,p=e.responsive,h=(0,t.Z)(e,l),N=(0,o.vE)(r,"table"),b=n()(c,N,m&&"".concat(N,"-").concat(m),v&&"".concat(N,"-").concat(v),i&&"".concat(N,"-").concat("string"===typeof i?"striped-".concat(i):"striped"),u&&"".concat(N,"-bordered"),f&&"".concat(N,"-borderless"),x&&"".concat(N,"-hover")),Z=(0,d.jsx)("table",(0,s.Z)((0,s.Z)({},h),{},{className:b,ref:a}));if(p){var j="".concat(N,"-responsive");return"string"===typeof p&&(j="".concat(j,"-").concat(p)),(0,d.jsx)("div",{className:j,children:Z})}return Z}));a.Z=u},27472:function(e,a,r){var s=r(1413),t=r(72791),c=r(81694),n=r.n(c),i=r(80184);a.Z=function(e){return t.forwardRef((function(a,r){return(0,i.jsx)("div",(0,s.Z)((0,s.Z)({},a),{},{ref:r,className:n()(a.className,e)}))}))}}}]);
//# sourceMappingURL=4288.4161eb50.chunk.js.map