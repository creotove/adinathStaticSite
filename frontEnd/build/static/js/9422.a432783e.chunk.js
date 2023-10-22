"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[9422],{16559:function(e,t,s){s(72791);var a=s(78983),r=s(80184);t.Z=function(e){var t=e.status,s="pending"===t?"warning":"rejected"===t?"danger":"success",n="pending"===t?"Pending":"rejected"===t?"Rejected":"Approved";return(0,r.jsx)(a.C_,{className:"text-white",color:s,children:n})}},29422:function(e,t,s){s.r(t);var a=s(74165),r=s(1413),n=s(15861),c=s(29439),l=s(72791),i=s(89708),d=s(47022),o=s(89743),u=s(95313),x=s(2677),h=s(16157),m=s(59434),p=s(62649),j=s(31243),N=s(11007),v=s(16559),f=s(80184);t.default=function(){var e=(0,m.v9)((function(e){return e.user.user})),t=(0,l.useState)(!1),s=(0,c.Z)(t,2),Z=s[0],g=s[1],b=(0,l.useState)(0),C=(0,c.Z)(b,2),y=C[0],w=C[1],P=(0,l.useState)(0),I=(0,c.Z)(P,2),S=I[0],q=I[1],k=(0,l.useState)([]),_=(0,c.Z)(k,2),R=_[0],z=_[1],B=(0,m.I0)(),G=function(e){var t=new Date(e);return"".concat(t.getFullYear(),"-").concat(String(t.getMonth()+1).padStart(2,"0"),"-").concat(String(t.getDate()).padStart(2,"0")," ").concat(String(t.getHours()).padStart(2,"0"),":").concat(String(t.getMinutes()).padStart(2,"0"),":").concat(String(t.getSeconds()).padStart(2,"0"))},D=function(){var t=(0,n.Z)((0,a.Z)().mark((function t(s){var n,c;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,s.preventDefault(),s.stopPropagation(),""!==y&&0!==y){t.next=6;break}return g(!1),t.abrupt("return",p.ZP.error("Coupon quantity must be greater than 0"));case 6:if(!(y>e.walletBalance/e.couponPrice)){t.next=9;break}return g(!1),t.abrupt("return",p.ZP.error("Insufficient wallet balance"));case 9:return n=y*e.couponPrice,c={userId:e.uniqueId,singleCouponPrice:e.couponPrice,quantity:y},t.next=13,j.Z.post("/api/v1/retailer/initiateCouponPurchase",c);case 13:t.sent.data.success?(p.ZP.success("Coupon purchase request sent successfully"),B((0,N.a)((0,r.Z)((0,r.Z)({},e),{},{walletBalance:e.walletBalance-n}))),L(),g(!1)):g(!1),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log(t.t0);case 20:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=(0,n.Z)((0,a.Z)().mark((function t(){var s,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,s=e._id,t.next=4,j.Z.post("/api/v1/retailer/getPurchaseCouponHistory",{userId:s});case 4:(r=t.sent).data.success?z(r.data.data):p.ZP.error(r.data.message),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return(0,l.useEffect)((function(){L()}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(i.Z,{show:Z,onHide:function(){return g(!1)},centered:!0,children:[(0,f.jsx)(i.Z.Header,{closeButton:!0,children:(0,f.jsx)(i.Z.Title,{children:"Coupon Request"})}),(0,f.jsx)(d.Z,{className:"p-3",children:(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(u.Z,{noValidate:!0}),(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-md-6",children:(0,f.jsxs)(u.Z.Group,{as:x.Z,controlId:"formName",children:[(0,f.jsx)(u.Z.Label,{children:"Coupon"}),(0,f.jsx)(u.Z.Control,{size:"sm",type:"text",placeholder:"P Coupon",disabled:!0,value:"P Coupon",required:!0})]})}),(0,f.jsx)("div",{className:"col-md-6",children:(0,f.jsxs)(u.Z.Group,{as:x.Z,controlId:"formName",children:[(0,f.jsx)(u.Z.Label,{children:"Retailer Id"}),(0,f.jsx)(u.Z.Control,{size:"sm",type:"text",placeholder:"Retailer ID",disabled:!0,value:e&&e.uniqueId,required:!0})]})})]}),(0,f.jsxs)("div",{className:"row mt-2",children:[(0,f.jsxs)(u.Z.Group,{as:x.Z,controlId:"formName",children:[(0,f.jsx)(u.Z.Label,{children:"User Name"}),(0,f.jsx)(u.Z.Control,{size:"sm",type:"text",placeholder:"User Name",disabled:!0,value:e&&e.name,required:!0})]}),(0,f.jsx)("div",{className:"col-md-4",children:(0,f.jsxs)(u.Z.Group,{as:x.Z,controlId:"formName",children:[(0,f.jsx)(u.Z.Label,{children:"Coupon Quantity"}),(0,f.jsx)(u.Z.Control,{size:"sm",type:"number",placeholder:"Enter Coupon quantity",onChange:function(t){!function(t){var s=t.target.value;/^-?\d*$/.test(s)&&(w(s),q(s*e.couponPrice))}(t)},value:y,required:!0})]})})]}),(0,f.jsxs)("div",{className:"row mt-2",children:[(0,f.jsx)("div",{className:"col-md-6",children:(0,f.jsxs)(u.Z.Group,{as:x.Z,controlId:"formName",children:[(0,f.jsx)(u.Z.Label,{children:"Single Coupon Price"}),(0,f.jsx)(u.Z.Control,{size:"sm",type:"number",placeholder:"Enter Coupon quantity",value:e&&e.couponPrice,disabled:!0,required:!0})]})}),(0,f.jsx)("div",{className:"col-md-6",children:(0,f.jsxs)(u.Z.Group,{as:x.Z,controlId:"formName",children:[(0,f.jsx)(u.Z.Label,{children:"Total Amount"}),(0,f.jsx)(u.Z.Control,{size:"sm",type:"number",placeholder:"Total Amount",value:S,disabled:!0,required:!0})]})})]})]})}),(0,f.jsx)("div",{className:"m-4",children:(0,f.jsx)(d.Z,{className:"d-flex justify-content-end",children:(0,f.jsx)(h.Z,{className:"myCustomBtn",onClick:D,children:"Purchase"})})})]}),(0,f.jsxs)(d.Z,{fluid:!0,className:"mb-3",children:[(0,f.jsx)("div",{className:"content-header mt-1",children:(0,f.jsxs)("div",{className:"row mb-2",children:[(0,f.jsx)("div",{className:"col-sm-6"}),(0,f.jsx)("div",{className:"col-sm-6",children:(0,f.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end ",children:(0,f.jsxs)(h.Z,{className:"myCustomBtn",onClick:function(){g(!0)},children:[(0,f.jsx)("i",{className:"fas fa-plus"})," Purchase Coupon"]})})})]})}),(0,f.jsx)("div",{className:"row",children:(0,f.jsx)("div",{className:"col-md-12",children:(0,f.jsxs)("div",{className:"card",children:[(0,f.jsx)("div",{className:"card-header",children:(0,f.jsxs)("div",{className:"row",children:[(0,f.jsx)("div",{className:"col-md-8 col-lg-8 col-xl-8",children:(0,f.jsx)("h3",{className:"card-title",children:"Coupons"})}),(0,f.jsx)("div",{className:" col-md-2 col-lg-2 col-xl-2"})]})}),(0,f.jsx)("div",{className:"card-body table-responsive p-0",style:{height:450},children:(0,f.jsxs)("table",{className:"table table-head-fixed text-nowrap",children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{className:"text-center",children:"SN"}),(0,f.jsx)("th",{className:"text-center",children:"Date & Time"}),(0,f.jsx)("th",{className:"text-center",children:"Req By"}),(0,f.jsx)("th",{className:"text-center",children:"Retailer Id"}),(0,f.jsx)("th",{className:"text-center",children:"PSA Id"}),(0,f.jsx)("th",{className:"text-center",children:"Qty"}),(0,f.jsx)("th",{className:"text-center",children:"Price"}),(0,f.jsx)("th",{className:"text-center",children:"Single Coupon Price"}),(0,f.jsx)("th",{className:"text-center",children:"Status"})]})}),(0,f.jsx)("tbody",{children:R&&R.length>0?R.map((function(t,s){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:"text-center",children:s+1}),(0,f.jsx)("td",{className:"text-center",children:G(t.purchaseDate)}),(0,f.jsx)("td",{className:"text-center",children:t.retailerId.name}),(0,f.jsx)("td",{className:"text-center",children:t.retailerId.uniqueId}),(0,f.jsx)("td",{className:"text-center",children:t.retailerId.psaId?t.retailerId.psaId:"N/A"}),(0,f.jsx)("td",{className:"text-center",children:t.quantity}),(0,f.jsx)("td",{className:"text-center",children:t.totalPrice}),(0,f.jsx)("td",{className:"text-center",children:e&&e.couponPrice}),(0,f.jsx)("td",{className:"text-center",children:(0,f.jsx)(v.Z,{status:t.status})})]},s)})):(0,f.jsx)("tr",{children:(0,f.jsx)("td",{colSpan:9,className:"text-center text-danger",children:"No data found"})})})]})})]})})})]})]})}},89743:function(e,t,s){var a=s(1413),r=s(45987),n=s(81694),c=s.n(n),l=s(72791),i=s(10162),d=s(80184),o=["bsPrefix","className","as"],u=l.forwardRef((function(e,t){var s=e.bsPrefix,n=e.className,l=e.as,u=void 0===l?"div":l,x=(0,r.Z)(e,o),h=(0,i.vE)(s,"row"),m=(0,i.pi)(),p=(0,i.zG)(),j="".concat(h,"-cols"),N=[];return m.forEach((function(e){var t,s=x[e];delete x[e],t=null!=s&&"object"===typeof s?s.cols:s;var a=e!==p?"-".concat(e):"";null!=t&&N.push("".concat(j).concat(a,"-").concat(t))})),(0,d.jsx)(u,(0,a.Z)((0,a.Z)({ref:t},x),{},{className:c().apply(void 0,[n,h].concat(N))}))}));u.displayName="Row",t.Z=u}}]);
//# sourceMappingURL=9422.a432783e.chunk.js.map