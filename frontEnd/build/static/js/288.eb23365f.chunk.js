"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[288],{4288:function(e,a,r){r.r(a);var s=r(74165),t=r(15861),n=r(29439),c=r(72791),i=r(89743),o=r(47022),l=r(40878),d=r(62591),u=r(31243),x=r(62649),f=r(96048),m=r.n(f),v=r(80184);a.default=function(){var e=(0,c.useState)([]),a=(0,n.Z)(e,2),r=a[0],f=a[1],p=(0,c.useState)(1),h=(0,n.Z)(p,2),N=h[0],g=h[1],Z=(0,c.useRef)(1),b=function(e){var a=new Date(e);return"".concat(a.getFullYear(),"-").concat(String(a.getMonth()+1).padStart(2,"0"),"-").concat(String(a.getDate()).padStart(2,"0")," ").concat(String(a.getHours()).padStart(2,"0"),":").concat(String(a.getMinutes()).padStart(2,"0"),":").concat(String(a.getSeconds()).padStart(2,"0"))},j=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(a){var r,t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/api/v1/masterAdmin/getCouponRequests?page=".concat(Z.current,"&limit=").concat(8));case 3:(r=e.sent).data.success&&(0===(t=r.data.data).results.length?f():(f(t.results),g(t.totalPages))),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),x.ZP.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(a){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){Z.current=1,j()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.Z,{className:"mb-3",children:(0,v.jsxs)(o.Z,{fluid:!0,children:[(0,v.jsx)("h3",{children:"ApprovePCoupon"}),(0,v.jsx)(i.Z,{children:(0,v.jsxs)(l.Z,{children:[(0,v.jsx)(l.Z.Header,{children:"Purchase Coupon Requests"}),(0,v.jsx)(l.Z.Body,{children:(0,v.jsxs)(d.Z,{responsive:!0,children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{className:"text-center",children:"Sn"}),(0,v.jsx)("th",{className:"text-center",children:"Date"}),(0,v.jsx)("th",{className:"text-center",children:"Requested By"}),(0,v.jsx)("th",{className:"text-center",children:"Unique ID"}),(0,v.jsx)("th",{className:"text-center",children:"Quantity"}),(0,v.jsx)("th",{className:"text-center",children:"Single Coupon Price"}),(0,v.jsx)("th",{className:"text-center",children:"Total"}),(0,v.jsx)("th",{colSpan:2,className:"text-center",children:"Action"})]})}),(0,v.jsx)("tbody",{children:r&&r.length>0?r.map((function(e,a){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"text-center",children:a+1}),(0,v.jsx)("td",{className:"text-center",children:b(e.purchaseDate)}),(0,v.jsx)("td",{className:"text-center",children:e.retailerId.name}),(0,v.jsx)("td",{className:"text-center",children:e.retailerId.uniqueId}),(0,v.jsx)("td",{className:"text-center",children:e.quantity}),(0,v.jsx)("td",{className:"text-center",children:e.retailerId.couponPrice}),(0,v.jsx)("td",{className:"text-center",children:e.totalPrice}),(0,v.jsxs)("td",{className:"text-center",children:[(0,v.jsx)("button",{className:"btn btn-success me-3",onClick:(0,t.Z)((0,s.Z)().mark((function a(){var r;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r={uniqueId:e.retailerId.uniqueId,singleCouponPrice:e.retailerId.couponPrice,quantity:e.quantity,coupon_id:e._id},a.next=4,u.Z.post("api/v1/test/calculateAndAssignCommissions",r);case 4:a.sent.data.success&&(x.ZP.success("Coupon Aprrove successfully"),j()),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),x.ZP.error("Retailer PSA ID not set or internal server error"),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,8]])}))),children:"Approve"}),(0,v.jsx)("button",{className:"btn btn-danger",onClick:(0,t.Z)((0,s.Z)().mark((function a(){var r;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r={purchaseId:e._id},a.next=4,u.Z.post("api/v1/masterAdmin/rejectCouponPurchase",r);case 4:a.sent.data.success&&j(),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])}))),children:"Reject"})]})]},a)})):(0,v.jsx)("tr",{children:(0,v.jsx)("td",{colSpan:"8",className:"text-center text-danger",children:"No Coupon Requests"})})})]})})]})})]})}),(0,v.jsx)(i.Z,{children:(0,v.jsx)(m(),{breakLabel:"...",nextLabel:"next >",onPageChange:function(e){var a=e.selected+1;Z.current=a,j(a)},pageRangeDisplayed:5,pageCount:N,previousLabel:"< previous",renderOnZeroPageCount:null,marginPagesDisplayed:2,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",activeClassName:"active"})})]})}},40878:function(e,a,r){r.d(a,{Z:function(){return M}});var s=r(1413),t=r(45987),n=r(81694),c=r.n(n),i=r(72791),o=r(10162),l=r(99033),d=r(80184),u=["className","bsPrefix","as"],x=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,l=void 0===i?"div":i,x=(0,t.Z)(e,u);return n=(0,o.vE)(n,"card-footer"),(0,d.jsx)(l,(0,s.Z)({ref:a,className:c()(r,n)},x))}));x.displayName="CardFooter";var f=x,m=i.createContext(null);m.displayName="CardHeaderContext";var v=m,p=["bsPrefix","className","as"],h=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,l=e.as,u=void 0===l?"div":l,x=(0,t.Z)(e,p),f=(0,o.vE)(r,"card-header"),m=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,d.jsx)(v.Provider,{value:m,children:(0,d.jsx)(u,(0,s.Z)((0,s.Z)({ref:a},x),{},{className:c()(n,f)}))})}));h.displayName="CardHeader";var N=h,g=["bsPrefix","className","variant","as"],Z=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,i=e.variant,l=e.as,u=void 0===l?"img":l,x=(0,t.Z)(e,g),f=(0,o.vE)(r,"card-img");return(0,d.jsx)(u,(0,s.Z)({ref:a,className:c()(i?"".concat(f,"-").concat(i):f,n)},x))}));Z.displayName="CardImg";var b=Z,j=["className","bsPrefix","as"],P=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,l=void 0===i?"div":i,u=(0,t.Z)(e,j);return n=(0,o.vE)(n,"card-img-overlay"),(0,d.jsx)(l,(0,s.Z)({ref:a,className:c()(r,n)},u))}));P.displayName="CardImgOverlay";var C=P,y=["className","bsPrefix","as"],w=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,l=void 0===i?"a":i,u=(0,t.Z)(e,y);return n=(0,o.vE)(n,"card-link"),(0,d.jsx)(l,(0,s.Z)({ref:a,className:c()(r,n)},u))}));w.displayName="CardLink";var k=w,S=r(27472),R=["className","bsPrefix","as"],I=(0,S.Z)("h6"),E=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,l=void 0===i?I:i,u=(0,t.Z)(e,R);return n=(0,o.vE)(n,"card-subtitle"),(0,d.jsx)(l,(0,s.Z)({ref:a,className:c()(r,n)},u))}));E.displayName="CardSubtitle";var q=E,_=["className","bsPrefix","as"],A=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,l=void 0===i?"p":i,u=(0,t.Z)(e,_);return n=(0,o.vE)(n,"card-text"),(0,d.jsx)(l,(0,s.Z)({ref:a,className:c()(r,n)},u))}));A.displayName="CardText";var D=A,L=["className","bsPrefix","as"],H=(0,S.Z)("h5"),B=i.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,i=e.as,l=void 0===i?H:i,u=(0,t.Z)(e,L);return n=(0,o.vE)(n,"card-title"),(0,d.jsx)(l,(0,s.Z)({ref:a,className:c()(r,n)},u))}));B.displayName="CardTitle";var T=B,F=["bsPrefix","className","bg","text","border","body","children","as"],O=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,i=e.bg,u=e.text,x=e.border,f=e.body,m=void 0!==f&&f,v=e.children,p=e.as,h=void 0===p?"div":p,N=(0,t.Z)(e,F),g=(0,o.vE)(r,"card");return(0,d.jsx)(h,(0,s.Z)((0,s.Z)({ref:a},N),{},{className:c()(n,g,i&&"bg-".concat(i),u&&"text-".concat(u),x&&"border-".concat(x)),children:m?(0,d.jsx)(l.Z,{children:v}):v}))}));O.displayName="Card";var M=Object.assign(O,{Img:b,Title:T,Subtitle:q,Body:l.Z,Link:k,Text:D,Header:N,Footer:f,ImgOverlay:C})},99033:function(e,a,r){var s=r(1413),t=r(45987),n=r(72791),c=r(81694),i=r.n(c),o=r(10162),l=r(80184),d=["className","bsPrefix","as"],u=n.forwardRef((function(e,a){var r=e.className,n=e.bsPrefix,c=e.as,u=void 0===c?"div":c,x=(0,t.Z)(e,d);return n=(0,o.vE)(n,"card-body"),(0,l.jsx)(u,(0,s.Z)({ref:a,className:i()(r,n)},x))}));u.displayName="CardBody",a.Z=u},62591:function(e,a,r){var s=r(1413),t=r(45987),n=r(81694),c=r.n(n),i=r(72791),o=r(10162),l=r(80184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=i.forwardRef((function(e,a){var r=e.bsPrefix,n=e.className,i=e.striped,u=e.bordered,x=e.borderless,f=e.hover,m=e.size,v=e.variant,p=e.responsive,h=(0,t.Z)(e,d),N=(0,o.vE)(r,"table"),g=c()(n,N,v&&"".concat(N,"-").concat(v),m&&"".concat(N,"-").concat(m),i&&"".concat(N,"-").concat("string"===typeof i?"striped-".concat(i):"striped"),u&&"".concat(N,"-bordered"),x&&"".concat(N,"-borderless"),f&&"".concat(N,"-hover")),Z=(0,l.jsx)("table",(0,s.Z)((0,s.Z)({},h),{},{className:g,ref:a}));if(p){var b="".concat(N,"-responsive");return"string"===typeof p&&(b="".concat(b,"-").concat(p)),(0,l.jsx)("div",{className:b,children:Z})}return Z}));a.Z=u},27472:function(e,a,r){var s=r(1413),t=r(72791),n=r(81694),c=r.n(n),i=r(80184);a.Z=function(e){return t.forwardRef((function(a,r){return(0,i.jsx)("div",(0,s.Z)((0,s.Z)({},a),{},{ref:r,className:c()(a.className,e)}))}))}}}]);
//# sourceMappingURL=288.eb23365f.chunk.js.map