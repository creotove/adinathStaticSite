"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[2185],{32185:function(e,a,t){t.r(a);var s=t(74165),r=t(15861),n=t(29439),i=t(72791),d=t(95313),c=t(16157),o=t(47022),l=t(24849),m=t(89743),f=t(40878),h=t(62649),u=t(31243),x=t(80184);a.default=function(){console.log("rendered");var e=(0,i.useState)(!0),a=(0,n.Z)(e,2),t=a[0],v=a[1],p=(0,i.useState)(0),j=(0,n.Z)(p,2),N=j[0],Z=j[1],g=(0,i.useState)(0),y=(0,n.Z)(g,2),b=y[0],w=y[1],P=(0,i.useState)(0),S=(0,n.Z)(P,2),k=S[0],C=S[1],W=(0,i.useState)(0),F=(0,n.Z)(W,2),R=F[0],A=(F[1],(0,i.useState)(0)),G=(0,n.Z)(A,2),E=G[0],B=(G[1],(0,i.useState)(0)),H=(0,n.Z)(B,2),_=H[0],T=H[1],M=(0,i.useState)(0),U=(0,n.Z)(M,2),I=U[0],z=U[1],L=(0,i.useState)(0),O=(0,n.Z)(L,2),q=O[0],D=(O[1],(0,i.useState)(0)),V=(0,n.Z)(D,2),J=V[0],K=(V[1],(0,i.useState)(0)),Q=(0,n.Z)(K,2),X=Q[0],Y=Q[1],$=(0,i.useState)(0),ee=(0,n.Z)($,2),ae=ee[0],te=ee[1],se=(0,i.useState)(0),re=(0,n.Z)(se,2),ne=re[0],ie=re[1],de=(0,i.useState)(0),ce=(0,n.Z)(de,2),oe=ce[0],le=ce[1],me=(0,i.useState)(0),fe=(0,n.Z)(me,2),he=fe[0],ue=fe[1],xe=(0,i.useState)(0),ve=(0,n.Z)(xe,2),pe=ve[0],je=ve[1],Ne=(0,i.useState)(0),Ze=(0,n.Z)(Ne,2),ge=(Ze[0],Ze[1]),ye=(0,i.useState)(0),be=(0,n.Z)(ye,2),we=(be[0],be[1]),Pe=(0,i.useState)(""),Se=(0,n.Z)(Pe,2),ke=Se[0],Ce=Se[1],We=function(e){return e<10?"0".concat(e):e},Fe=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/api/v1/masterAdmin/getCountForMasterAdminPanel");case 3:(a=e.sent).data.success&&(console.log(a.data.approvedUser),Z(a.data.data.pendingUser),w(a.data.data.approvedUser),C(a.data.data.rejectedUser),ge(a.data.data.totalUser),T(a.data.data.pendingCoupon),z(a.data.data.approvedCoupon),we(a.data.data.totalCoupon),Y(a.data.data.pendingAddMoneyToWallet),te(a.data.data.approvedAddMoneyToWallet),ie(a.data.data.rejectedAddMoneyToWallet),le(a.data.data.pendingWalletWithdrawal),ue(a.data.data.approvedWalletWithdrawal),je(a.data.data.rejectedWalletWithdrawal),v(!1)),e.next=12;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),h.ZP.error("Something went wrong"),v(!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),Re=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(a){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,u.Z.patch("/api/v1/masterAdmin/changeAlert",{setAlert:ke});case 4:e.sent.data.success&&h.ZP.success("Alert Changed"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(a){return e.apply(this,arguments)}}(),Ae=(0,i.useMemo)((function(){return(0,x.jsxs)(d.Z,{className:"d-flex justify-content-end align-items-center",noValidate:!0,onSubmit:Re,children:[(0,x.jsx)("div",{className:"d-flex align-tems-center justify-content-center bg-black text-white rounded-start-3"}),(0,x.jsx)("div",{className:"me-3 col-4",children:(0,x.jsx)(d.Z.Control,{type:"text",value:ke,onChange:function(e){return Ce(e.target.value)}})}),(0,x.jsx)("div",{children:(0,x.jsx)(c.Z,{className:"myCustomBtn",type:"submit",children:"Change Alert"})})]})}),[ke]);return(0,i.useEffect)((function(){Fe()}),[]),(0,x.jsx)(x.Fragment,{children:t?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(o.Z,{fluid:!0,className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(l.Z,{animation:"border",role:"status",children:(0,x.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.Z,{className:"mb-3",children:Ae}),(0,x.jsxs)(o.Z,{className:"d-flex flex-column flex-md-row mb-3",children:[(0,x.jsxs)(f.Z,{className:"col-12 col-md-4",children:[(0,x.jsx)(f.Z.Header,{className:"text-center",children:(0,x.jsx)("h5",{style:{whiteSpace:"nowrap"},children:"Pending & Approved Users"})}),(0,x.jsxs)(f.Z.Body,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"text-center rounded-1 fs-6",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Pending : ",We(N)]})})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"text-center rounded-1 fs-6 mt-2",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Approved : ",We(b)]})}),(0,x.jsx)("div",{className:"text-center rounded-1 fs-6 mt-2",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Rejected : ",We(k)]})})]})]})]}),(0,x.jsxs)(f.Z,{className:"col-12 col-md-4 my-3 my-md-0 mx-0 mx-md-2",children:[(0,x.jsx)(f.Z.Header,{className:"text-center",children:(0,x.jsx)("h5",{style:{whiteSpace:"nowrap"},children:"Wallet Add Req."})}),(0,x.jsxs)(f.Z.Body,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"text-center rounded-1 fs-6",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Pending : ",We(X)]})})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"text-center rounded-1 fs-6 mt-2",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Approved : ",We(ae)]})}),(0,x.jsx)("div",{className:"text-center rounded-1 fs-6 mt-2",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Rejected : ",We(ne)]})})]})]})]}),(0,x.jsxs)(f.Z,{className:"col-12 col-md-4 ",children:[(0,x.jsx)(f.Z.Header,{className:"text-center",children:(0,x.jsx)("h5",{style:{whiteSpace:"nowrap"},children:"Wallet Withdrawal Req."})}),(0,x.jsxs)(f.Z.Body,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"text-center rounded-1 fs-6",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-valuePrefixer(5) fs-4",children:["Pending : ",We(oe)]})})}),(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"text-center rounded-1 fs-6 mt-2",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-valuePrefixer(5) fs-4",children:["Approved : ",We(he)]})}),(0,x.jsx)("div",{className:"text-center rounded-1 fs-6 mt-2",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-valuePrefixer(5) fs-4",children:["Rejected : ",We(pe)]})})]})]})]})]}),(0,x.jsxs)(o.Z,{className:"d-flex flex-column flex-md-row",children:[(0,x.jsxs)(f.Z,{className:"col-12 col-md-4",children:[(0,x.jsx)(f.Z.Header,{className:"text-center",children:(0,x.jsxs)("h5",{style:{whiteSpace:"nowrap"},children:["Purchase Coupon"," "]})}),(0,x.jsxs)(f.Z.Body,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"text-center rounded-1 fs-6",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-valuePrefixer(5) fs-4",children:["Pending : ",We(_)]})})}),(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"text-center rounded-1 fs-6 mt-2",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-valuePrefixer(5) fs-4",children:["Approved : ",We(I)]})})})]})]}),(0,x.jsxs)(f.Z,{className:"col-12 col-md-4  my-3 my-md-0 mx-0 mx-md-2",children:[(0,x.jsx)(f.Z.Header,{className:"text-center",children:(0,x.jsx)("h5",{style:{whiteSpace:"nowrap"},children:"Role Change"})}),(0,x.jsxs)(f.Z.Body,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"text-center rounded-1 fs-6",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Pending : ",We(q)]})})}),(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"text-center rounded-1 fs-6 mt-2",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Approved : ",We(J)]})})})]})]}),(0,x.jsxs)(f.Z,{className:"col-12 col-md-4",children:[(0,x.jsx)(f.Z.Header,{className:"text-center",children:(0,x.jsxs)("h5",{style:{whiteSpace:"nowrap"},children:["Complaint"," "]})}),(0,x.jsxs)(f.Z.Body,{children:[(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"text-center rounded-1 fs-6",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Pending : ",We(R)]})})}),(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"text-center rounded-1 fs-6 mt-2",style:{height:"100%",width:"100%",cursor:"pointer",background:"#003366",fontFamily:"Gabarito, sans-serif !important",fontWeight:"900 !important"},children:(0,x.jsxs)("div",{className:"text-white rounded-5 fs-4",children:["Resolved : ",We(E)]})})})]})]})]})]})})}},40878:function(e,a,t){t.d(a,{Z:function(){return z}});var s=t(1413),r=t(45987),n=t(81694),i=t.n(n),d=t(72791),c=t(10162),o=t(99033),l=t(80184),m=["className","bsPrefix","as"],f=d.forwardRef((function(e,a){var t=e.className,n=e.bsPrefix,d=e.as,o=void 0===d?"div":d,f=(0,r.Z)(e,m);return n=(0,c.vE)(n,"card-footer"),(0,l.jsx)(o,(0,s.Z)({ref:a,className:i()(t,n)},f))}));f.displayName="CardFooter";var h=f,u=d.createContext(null);u.displayName="CardHeaderContext";var x=u,v=["bsPrefix","className","as"],p=d.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,m=void 0===o?"div":o,f=(0,r.Z)(e,v),h=(0,c.vE)(t,"card-header"),u=(0,d.useMemo)((function(){return{cardHeaderBsPrefix:h}}),[h]);return(0,l.jsx)(x.Provider,{value:u,children:(0,l.jsx)(m,(0,s.Z)((0,s.Z)({ref:a},f),{},{className:i()(n,h)}))})}));p.displayName="CardHeader";var j=p,N=["bsPrefix","className","variant","as"],Z=d.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.variant,o=e.as,m=void 0===o?"img":o,f=(0,r.Z)(e,N),h=(0,c.vE)(t,"card-img");return(0,l.jsx)(m,(0,s.Z)({ref:a,className:i()(d?"".concat(h,"-").concat(d):h,n)},f))}));Z.displayName="CardImg";var g=Z,y=["className","bsPrefix","as"],b=d.forwardRef((function(e,a){var t=e.className,n=e.bsPrefix,d=e.as,o=void 0===d?"div":d,m=(0,r.Z)(e,y);return n=(0,c.vE)(n,"card-img-overlay"),(0,l.jsx)(o,(0,s.Z)({ref:a,className:i()(t,n)},m))}));b.displayName="CardImgOverlay";var w=b,P=["className","bsPrefix","as"],S=d.forwardRef((function(e,a){var t=e.className,n=e.bsPrefix,d=e.as,o=void 0===d?"a":d,m=(0,r.Z)(e,P);return n=(0,c.vE)(n,"card-link"),(0,l.jsx)(o,(0,s.Z)({ref:a,className:i()(t,n)},m))}));S.displayName="CardLink";var k=S,C=t(27472),W=["className","bsPrefix","as"],F=(0,C.Z)("h6"),R=d.forwardRef((function(e,a){var t=e.className,n=e.bsPrefix,d=e.as,o=void 0===d?F:d,m=(0,r.Z)(e,W);return n=(0,c.vE)(n,"card-subtitle"),(0,l.jsx)(o,(0,s.Z)({ref:a,className:i()(t,n)},m))}));R.displayName="CardSubtitle";var A=R,G=["className","bsPrefix","as"],E=d.forwardRef((function(e,a){var t=e.className,n=e.bsPrefix,d=e.as,o=void 0===d?"p":d,m=(0,r.Z)(e,G);return n=(0,c.vE)(n,"card-text"),(0,l.jsx)(o,(0,s.Z)({ref:a,className:i()(t,n)},m))}));E.displayName="CardText";var B=E,H=["className","bsPrefix","as"],_=(0,C.Z)("h5"),T=d.forwardRef((function(e,a){var t=e.className,n=e.bsPrefix,d=e.as,o=void 0===d?_:d,m=(0,r.Z)(e,H);return n=(0,c.vE)(n,"card-title"),(0,l.jsx)(o,(0,s.Z)({ref:a,className:i()(t,n)},m))}));T.displayName="CardTitle";var M=T,U=["bsPrefix","className","bg","text","border","body","children","as"],I=d.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.bg,m=e.text,f=e.border,h=e.body,u=void 0!==h&&h,x=e.children,v=e.as,p=void 0===v?"div":v,j=(0,r.Z)(e,U),N=(0,c.vE)(t,"card");return(0,l.jsx)(p,(0,s.Z)((0,s.Z)({ref:a},j),{},{className:i()(n,N,d&&"bg-".concat(d),m&&"text-".concat(m),f&&"border-".concat(f)),children:u?(0,l.jsx)(o.Z,{children:x}):x}))}));I.displayName="Card";var z=Object.assign(I,{Img:g,Title:M,Subtitle:A,Body:o.Z,Link:k,Text:B,Header:j,Footer:h,ImgOverlay:w})},99033:function(e,a,t){var s=t(1413),r=t(45987),n=t(72791),i=t(81694),d=t.n(i),c=t(10162),o=t(80184),l=["className","bsPrefix","as"],m=n.forwardRef((function(e,a){var t=e.className,n=e.bsPrefix,i=e.as,m=void 0===i?"div":i,f=(0,r.Z)(e,l);return n=(0,c.vE)(n,"card-body"),(0,o.jsx)(m,(0,s.Z)({ref:a,className:d()(t,n)},f))}));m.displayName="CardBody",a.Z=m},89743:function(e,a,t){var s=t(1413),r=t(45987),n=t(81694),i=t.n(n),d=t(72791),c=t(10162),o=t(80184),l=["bsPrefix","className","as"],m=d.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,d=e.as,m=void 0===d?"div":d,f=(0,r.Z)(e,l),h=(0,c.vE)(t,"row"),u=(0,c.pi)(),x=(0,c.zG)(),v="".concat(h,"-cols"),p=[];return u.forEach((function(e){var a,t=f[e];delete f[e],a=null!=t&&"object"===typeof t?t.cols:t;var s=e!==x?"-".concat(e):"";null!=a&&p.push("".concat(v).concat(s,"-").concat(a))})),(0,o.jsx)(m,(0,s.Z)((0,s.Z)({ref:a},f),{},{className:i().apply(void 0,[n,h].concat(p))}))}));m.displayName="Row",a.Z=m},24849:function(e,a,t){var s=t(1413),r=t(45987),n=t(81694),i=t.n(n),d=t(72791),c=t(10162),o=t(80184),l=["bsPrefix","variant","animation","size","as","className"],m=d.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,d=e.animation,m=void 0===d?"border":d,f=e.size,h=e.as,u=void 0===h?"div":h,x=e.className,v=(0,r.Z)(e,l);t=(0,c.vE)(t,"spinner");var p="".concat(t,"-").concat(m);return(0,o.jsx)(u,(0,s.Z)((0,s.Z)({ref:a},v),{},{className:i()(x,p,f&&"".concat(p,"-").concat(f),n&&"text-".concat(n))}))}));m.displayName="Spinner",a.Z=m},27472:function(e,a,t){var s=t(1413),r=t(72791),n=t(81694),i=t.n(n),d=t(80184);a.Z=function(e){return r.forwardRef((function(a,t){return(0,d.jsx)("div",(0,s.Z)((0,s.Z)({},a),{},{ref:t,className:i()(a.className,e)}))}))}}}]);
//# sourceMappingURL=2185.b6ea2a63.chunk.js.map