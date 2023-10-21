"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[595],{35595:function(e,a,s){s.r(a);var r=s(74165),t=s(15861),n=s(29439),c=s(72791),l=s(47022),i=s(89743),o=s(40878),d=s(16157),u=s(95313),m=s(2677),f=s(45736),x=s(6447),v=s(62649),h=s(31243),N=s(59434),Z=s(80184);a.default=function(){var e=(0,N.v9)((function(e){return e.user.user})),a=c.useState(""),s=(0,n.Z)(a,2),p=s[0],j=s[1],b=c.useState(""),y=(0,n.Z)(b,2),g=y[0],w=y[1],C=c.useState(),P=(0,n.Z)(C,2),k=P[0],E=P[1],R=function(){var a=(0,t.Z)((0,r.Z)().mark((function a(){var s;return(0,r.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("clicked"),a.prev=1,p&&g){a.next=4;break}return a.abrupt("return",v.ZP.error("Please fill all the fields"));case 4:return s={userId:e._id,amount:p,transactionId:g},a.next=7,h.Z.post("/api/v1/user/addMoneyToWallet",s);case 7:a.sent.data.success&&(v.ZP.success("Add to wallet request sent successfully"),I(),j(""),w("")),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),console.log(a.t0),v.ZP.error("Something went wrong");case 15:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(){return a.apply(this,arguments)}}(),I=function(){var a=(0,t.Z)((0,r.Z)().mark((function a(){var s,t;return(0,r.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s={userId:e._id},a.next=4,h.Z.post("/api/v1/user/getAddMoneyToWalletHistory",s);case 4:(t=a.sent).data.success&&(console.log(t.data),E(t.data.data)),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}();return(0,c.useEffect)((function(){k||I()}),[R]),(0,Z.jsxs)(l.Z,{fluid:!0,className:"col-12 col-md-12",children:[(0,Z.jsx)(i.Z,{className:"mb-3 d-flex align-items-center",children:(0,Z.jsx)("marquee",{className:"text-white fs-5 bg-black p-2",children:"If your Request is approved but amount not updated in your wallet please refresh the page."})}),(0,Z.jsxs)(o.Z,{className:"mb-3 w-100",children:[(0,Z.jsx)(o.Z.Header,{children:"Add to wallet"}),(0,Z.jsxs)(l.Z,{className:"d-flex col-12",children:[(0,Z.jsx)("div",{className:"d-flex col-3",children:(0,Z.jsx)("img",{src:x,style:{width:"100%",height:"100%",objectFit:"contain"},alt:"qrcode"})}),(0,Z.jsxs)("div",{className:"d-flex flex-column col-6 offset-2",children:[(0,Z.jsx)("div",{className:"",children:(0,Z.jsxs)("div",{className:"d-flex align-items-center justify-content-center mt-3",children:[(0,Z.jsx)(d.Z,{type:"button",className:"myCustomBtn myCustomHover mx-1",onClick:function(){return j(100)},children:"100"}),(0,Z.jsx)(d.Z,{type:"button",className:"myCustomBtn myCustomHover mx-1",onClick:function(){return j(200)},children:"200"}),(0,Z.jsx)(d.Z,{type:"button",className:"myCustomBtn myCustomHover mx-1",onClick:function(){return j(500)},children:"500"}),(0,Z.jsx)(d.Z,{type:"button",className:"myCustomBtn myCustomHover mx-1",onClick:function(){return j(1e3)},children:"1000"})]})}),(0,Z.jsxs)("div",{className:"mb-3",children:[" ",(0,Z.jsxs)(u.Z,{autoComplete:"off",children:[(0,Z.jsx)(i.Z,{className:"mb-3",children:(0,Z.jsxs)(u.Z.Group,{as:m.Z,className:"col-12",controlId:"formName",children:[(0,Z.jsx)(u.Z.Label,{children:(0,Z.jsx)("b",{children:"Amount "})}),(0,Z.jsx)(u.Z.Control,{type:"text",placeholder:"Enter Amount",onChange:function(e){j(e.target.value)},value:p,required:!0})]})}),(0,Z.jsx)(i.Z,{className:"mb-3",children:(0,Z.jsxs)(u.Z.Group,{as:m.Z,className:"col-12",controlId:"formName",children:[(0,Z.jsx)(u.Z.Label,{children:(0,Z.jsx)("b",{children:"Transaction ID"})}),(0,Z.jsx)(u.Z.Control,{type:"text",placeholder:"Enter Transaction ID",onChange:function(e){w(e.target.value)},value:g,required:!0})]})}),(0,Z.jsx)(i.Z,{children:(0,Z.jsx)("div",{className:"d-flex justify-content-end",children:(0,Z.jsx)(d.Z,{className:"myCustomBtn",onClick:function(){return R()},children:"Add to wallet"})})})]})]})]})]})]}),(0,Z.jsxs)(o.Z,{className:"mb-3 w-100",children:[(0,Z.jsx)(o.Z.Header,{children:"Add to wallet history"}),(0,Z.jsx)(l.Z,{fluid:!0,children:(0,Z.jsxs)("table",{className:"w-100",children:[(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{className:"text-center",children:"SN"}),(0,Z.jsx)("th",{className:"text-center",children:"Date"}),(0,Z.jsx)("th",{className:"text-center",children:"Transaction ID"}),(0,Z.jsx)("th",{className:"text-center",children:"Amount"}),(0,Z.jsx)("th",{className:"text-center",children:"Status"}),(0,Z.jsx)("th",{className:"text-center",children:"Error"})]}),k&&k.length>0?k.map((function(e,a){return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{className:"text-center",children:a+1}),(0,Z.jsx)("td",{className:"text-center",children:new Date(e.date).toLocaleDateString()}),(0,Z.jsx)("td",{className:"text-center",children:e.transactionId}),(0,Z.jsx)("td",{className:"text-center",children:e.amount}),(0,Z.jsx)("td",{className:"text-center",children:(0,Z.jsx)(f.Z,{className:"".concat("pending"===e.status?"bg-warning":"approved"===e.status?"bg-success":"bg-danger"," text-white"),children:e.status})}),(0,Z.jsx)("td",{className:"text-center",children:e.error})]},a)})):(0,Z.jsx)("tr",{children:(0,Z.jsxs)("td",{colSpan:6,className:"text-center text-danger",children:[(0,Z.jsx)("hr",{className:"w-100"}),"No data found"]})})]})})]})]})}},45736:function(e,a,s){var r=s(1413),t=s(45987),n=s(81694),c=s.n(n),l=s(72791),i=s(10162),o=s(80184),d=["bsPrefix","bg","pill","text","className","as"],u=l.forwardRef((function(e,a){var s=e.bsPrefix,n=e.bg,l=void 0===n?"primary":n,u=e.pill,m=void 0!==u&&u,f=e.text,x=e.className,v=e.as,h=void 0===v?"span":v,N=(0,t.Z)(e,d),Z=(0,i.vE)(s,"badge");return(0,o.jsx)(h,(0,r.Z)((0,r.Z)({ref:a},N),{},{className:c()(x,Z,m&&"rounded-pill",f&&"text-".concat(f),l&&"bg-".concat(l))}))}));u.displayName="Badge",a.Z=u},40878:function(e,a,s){s.d(a,{Z:function(){return G}});var r=s(1413),t=s(45987),n=s(81694),c=s.n(n),l=s(72791),i=s(10162),o=s(99033),d=s(80184),u=["className","bsPrefix","as"],m=l.forwardRef((function(e,a){var s=e.className,n=e.bsPrefix,l=e.as,o=void 0===l?"div":l,m=(0,t.Z)(e,u);return n=(0,i.vE)(n,"card-footer"),(0,d.jsx)(o,(0,r.Z)({ref:a,className:c()(s,n)},m))}));m.displayName="CardFooter";var f=m,x=l.createContext(null);x.displayName="CardHeaderContext";var v=x,h=["bsPrefix","className","as"],N=l.forwardRef((function(e,a){var s=e.bsPrefix,n=e.className,o=e.as,u=void 0===o?"div":o,m=(0,t.Z)(e,h),f=(0,i.vE)(s,"card-header"),x=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,d.jsx)(v.Provider,{value:x,children:(0,d.jsx)(u,(0,r.Z)((0,r.Z)({ref:a},m),{},{className:c()(n,f)}))})}));N.displayName="CardHeader";var Z=N,p=["bsPrefix","className","variant","as"],j=l.forwardRef((function(e,a){var s=e.bsPrefix,n=e.className,l=e.variant,o=e.as,u=void 0===o?"img":o,m=(0,t.Z)(e,p),f=(0,i.vE)(s,"card-img");return(0,d.jsx)(u,(0,r.Z)({ref:a,className:c()(l?"".concat(f,"-").concat(l):f,n)},m))}));j.displayName="CardImg";var b=j,y=["className","bsPrefix","as"],g=l.forwardRef((function(e,a){var s=e.className,n=e.bsPrefix,l=e.as,o=void 0===l?"div":l,u=(0,t.Z)(e,y);return n=(0,i.vE)(n,"card-img-overlay"),(0,d.jsx)(o,(0,r.Z)({ref:a,className:c()(s,n)},u))}));g.displayName="CardImgOverlay";var w=g,C=["className","bsPrefix","as"],P=l.forwardRef((function(e,a){var s=e.className,n=e.bsPrefix,l=e.as,o=void 0===l?"a":l,u=(0,t.Z)(e,C);return n=(0,i.vE)(n,"card-link"),(0,d.jsx)(o,(0,r.Z)({ref:a,className:c()(s,n)},u))}));P.displayName="CardLink";var k=P,E=s(27472),R=["className","bsPrefix","as"],I=(0,E.Z)("h6"),H=l.forwardRef((function(e,a){var s=e.className,n=e.bsPrefix,l=e.as,o=void 0===l?I:l,u=(0,t.Z)(e,R);return n=(0,i.vE)(n,"card-subtitle"),(0,d.jsx)(o,(0,r.Z)({ref:a,className:c()(s,n)},u))}));H.displayName="CardSubtitle";var S=H,_=["className","bsPrefix","as"],B=l.forwardRef((function(e,a){var s=e.className,n=e.bsPrefix,l=e.as,o=void 0===l?"p":l,u=(0,t.Z)(e,_);return n=(0,i.vE)(n,"card-text"),(0,d.jsx)(o,(0,r.Z)({ref:a,className:c()(s,n)},u))}));B.displayName="CardText";var T=B,A=["className","bsPrefix","as"],q=(0,E.Z)("h5"),D=l.forwardRef((function(e,a){var s=e.className,n=e.bsPrefix,l=e.as,o=void 0===l?q:l,u=(0,t.Z)(e,A);return n=(0,i.vE)(n,"card-title"),(0,d.jsx)(o,(0,r.Z)({ref:a,className:c()(s,n)},u))}));D.displayName="CardTitle";var L=D,M=["bsPrefix","className","bg","text","border","body","children","as"],F=l.forwardRef((function(e,a){var s=e.bsPrefix,n=e.className,l=e.bg,u=e.text,m=e.border,f=e.body,x=void 0!==f&&f,v=e.children,h=e.as,N=void 0===h?"div":h,Z=(0,t.Z)(e,M),p=(0,i.vE)(s,"card");return(0,d.jsx)(N,(0,r.Z)((0,r.Z)({ref:a},Z),{},{className:c()(n,p,l&&"bg-".concat(l),u&&"text-".concat(u),m&&"border-".concat(m)),children:x?(0,d.jsx)(o.Z,{children:v}):v}))}));F.displayName="Card";var G=Object.assign(F,{Img:b,Title:L,Subtitle:S,Body:o.Z,Link:k,Text:T,Header:Z,Footer:f,ImgOverlay:w})},99033:function(e,a,s){var r=s(1413),t=s(45987),n=s(72791),c=s(81694),l=s.n(c),i=s(10162),o=s(80184),d=["className","bsPrefix","as"],u=n.forwardRef((function(e,a){var s=e.className,n=e.bsPrefix,c=e.as,u=void 0===c?"div":c,m=(0,t.Z)(e,d);return n=(0,i.vE)(n,"card-body"),(0,o.jsx)(u,(0,r.Z)({ref:a,className:l()(s,n)},m))}));u.displayName="CardBody",a.Z=u},89743:function(e,a,s){var r=s(1413),t=s(45987),n=s(81694),c=s.n(n),l=s(72791),i=s(10162),o=s(80184),d=["bsPrefix","className","as"],u=l.forwardRef((function(e,a){var s=e.bsPrefix,n=e.className,l=e.as,u=void 0===l?"div":l,m=(0,t.Z)(e,d),f=(0,i.vE)(s,"row"),x=(0,i.pi)(),v=(0,i.zG)(),h="".concat(f,"-cols"),N=[];return x.forEach((function(e){var a,s=m[e];delete m[e],a=null!=s&&"object"===typeof s?s.cols:s;var r=e!==v?"-".concat(e):"";null!=a&&N.push("".concat(h).concat(r,"-").concat(a))})),(0,o.jsx)(u,(0,r.Z)((0,r.Z)({ref:a},m),{},{className:c().apply(void 0,[n,f].concat(N))}))}));u.displayName="Row",a.Z=u},27472:function(e,a,s){var r=s(1413),t=s(72791),n=s(81694),c=s.n(n),l=s(80184);a.Z=function(e){return t.forwardRef((function(a,s){return(0,l.jsx)("div",(0,r.Z)((0,r.Z)({},a),{},{ref:s,className:c()(a.className,e)}))}))}},6447:function(e,a,s){e.exports=s.p+"static/media/adiNathMiniQr.afcf03c922938e4dc3b0.png"}}]);
//# sourceMappingURL=595.f625e1a6.chunk.js.map