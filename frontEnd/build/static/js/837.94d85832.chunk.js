"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[837],{12837:function(e,a,r){r.r(a),r.d(a,{default:function(){return g}});var s=r(74165),t=r(15861),c=r(29439),n=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M345.994,42.019,179.531,208.481A646.3,646.3,0,0,0,25.325,456.521a24.845,24.845,0,0,0,6,25.708l.087.087a24.84,24.84,0,0,0,17.611,7.342,25.172,25.172,0,0,0,8.1-1.344,646.283,646.283,0,0,0,248.04-154.207L471.62,167.646A88.831,88.831,0,0,0,345.994,42.019ZM282.531,311.48A614.445,614.445,0,0,1,60.419,453.221,614.435,614.435,0,0,1,202.158,231.108l99.162-99.161,80.372,80.372ZM448.993,145.019l-44.674,44.673L323.947,109.32l44.674-44.674a56.832,56.832,0,1,1,80.372,80.373Z' class='ci-primary'/>"],o=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='227.313 363.313 312 278.627 396.687 363.313 419.313 340.687 334.627 256 419.313 171.313 396.687 148.687 312 233.373 227.313 148.687 204.687 171.313 289.373 256 204.687 340.687 227.313 363.313' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M472,64H194.644a24.091,24.091,0,0,0-17.42,7.492L16,241.623v28.754L177.224,440.508A24.091,24.091,0,0,0,194.644,448H472a24.028,24.028,0,0,0,24-24V88A24.028,24.028,0,0,0,472,64Zm-8,352H198.084L48,257.623v-3.246L198.084,96H464Z' class='ci-primary'/>"],l=r(24846),i=r(62649),d=r(31243),u=r(59434),m=r(72791),f=r(47022),x=r(89743),v=r(2677),N=r(91658),Z=r(99033),h=r(95313),p=r(16157),b=r(62591),j=(r(76037),r(80184)),g=function(){console.log("rendering bank account setup");var e=(0,u.v9)((function(e){return e.user.user})),a=((0,u.I0)(),(0,m.useState)([])),r=(0,c.Z)(a,2),g=r[0],y=r[1],C=(0,m.useState)(""),P=(0,c.Z)(C,2),w=P[0],k=P[1],E=(0,m.useState)(""),A=(0,c.Z)(E,2),I=A[0],R=A[1],S=(0,m.useState)(""),H=(0,c.Z)(S,2),L=H[0],z=H[1],_=(0,m.useState)(""),F=(0,c.Z)(_,2),q=F[0],B=F[1],D=(0,m.useState)(!1),G=(0,c.Z)(D,2),M=G[0],T=G[1],O=function(){var a=(0,t.Z)((0,s.Z)().mark((function a(r){var t,c;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,console.log("submit"),!1!==r.currentTarget.checkValidity()){a.next=8;break}return r.preventDefault(),r.stopPropagation(),T(!0),a.abrupt("return");case 8:return r.preventDefault(),r.stopPropagation(),t={userId:e._id,accountNumber:w,accountHolderName:I,ifscCode:L,bankName:q},a.next=13,d.Z.post("/api/v1/user/setAccountDetails",t);case 13:(c=a.sent).data.success?(i.ZP.success(c.data.message),k(""),R(""),z(""),B(""),T("")):i.ZP.error(c.data.message),a.next=21;break;case 17:a.prev=17,a.t0=a.catch(0),i.ZP.error("Error in adding Partner"),console.log(a.t0);case 21:r.preventDefault();case 22:case"end":return a.stop()}}),a,null,[[0,17]])})));return function(e){return a.apply(this,arguments)}}(),V=function(){var a=(0,t.Z)((0,s.Z)().mark((function a(){var r,t;return(0,s.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.uniqueId;case 3:return r=a.sent,a.next=6,d.Z.post("/api/v1/user/getAccountDetails",{uniqueId:r});case 6:(t=a.sent).data.success?y(t.data.data):(i.ZP.error("No Account Details Found"),window.location.reload()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}();return(0,m.useEffect)((function(){g.length||V()}),[g]),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(f.Z,{fluid:!0,children:(0,j.jsxs)(x.Z,{children:[(0,j.jsx)(v.Z,{className:"col-md-4 col-sm-12 mb-5",children:(0,j.jsx)(N.Z,{className:"w-100  shadow-sm",children:(0,j.jsx)(Z.Z,{children:(0,j.jsxs)(h.Z,{noValidate:!0,validated:M,onSubmit:O,autoComplete:"off",children:[(0,j.jsx)(x.Z,{className:"mb-3",children:(0,j.jsxs)(h.Z.Group,{className:"",controlId:"formAccountNumber",children:[(0,j.jsx)(h.Z.Label,{children:"Account Number"}),(0,j.jsx)(h.Z.Control,{size:"sm",type:"number",placeholder:"Enter Account Number",onChange:function(e){k(e.target.value)},value:w,required:!0})]})}),(0,j.jsx)(x.Z,{className:"mb-3",children:(0,j.jsxs)(h.Z.Group,{as:v.Z,className:"",controlId:"formAccountHolderName",children:[(0,j.jsx)(h.Z.Label,{children:"Account holder name"}),(0,j.jsx)(h.Z.Control,{size:"sm",type:"text",placeholder:"Enter Account Holder Name",onChange:function(e){return R(e.target.value)},value:I,required:!0})]})}),(0,j.jsx)(x.Z,{className:"mb-3",children:(0,j.jsxs)(h.Z.Group,{as:v.Z,className:"",controlId:"formRole",children:[(0,j.jsx)(h.Z.Label,{children:"Bank Name"}),(0,j.jsx)(h.Z.Control,{size:"sm",type:"text",placeholder:"Enter Bank Name",onChange:function(e){return B(e.target.value)},value:q,required:!0})]})}),(0,j.jsx)(x.Z,{className:"mb-3",children:(0,j.jsxs)(h.Z.Group,{as:v.Z,className:"",controlId:"formAge",children:[(0,j.jsx)(h.Z.Label,{children:"IFSC Code"}),(0,j.jsx)(h.Z.Control,{size:"sm",type:"text",placeholder:"Enter IFSC Code",onChange:function(e){return z(e.target.value)},value:L,required:!0})]})}),(0,j.jsx)(p.Z,{variant:"primary",type:"submit",children:"Submit"})]})})})}),(0,j.jsx)(v.Z,{className:"col-md-8 col-sm-12",children:(0,j.jsx)(N.Z,{className:"w-100 shadow-sm",children:(0,j.jsx)(Z.Z,{children:(0,j.jsxs)(b.Z,{responsive:!0,children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{className:"text-center",children:"SN"}),(0,j.jsx)("th",{className:"text-center",children:"Account Name"}),(0,j.jsx)("th",{className:"text-center",children:"Account No "}),(0,j.jsx)("th",{className:"text-center",children:"IFSC Code"}),(0,j.jsx)("th",{className:"text-center",children:"Bank Name"}),(0,j.jsx)("th",{className:"text-center",colSpan:2,children:"Action"})]})}),(0,j.jsx)("tbody",{children:g&&g.map((function(e,a){return(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{className:"text-center",children:a+1}),(0,j.jsx)("td",{className:"text-center",children:e.accountHolderName}),(0,j.jsx)("td",{className:"text-center",children:e.accountNumber}),(0,j.jsx)("td",{className:"text-center",children:e.ifscCode}),(0,j.jsx)("td",{className:"text-center",children:e.bankName}),(0,j.jsx)("td",{className:"text-center d-flex justify-content",children:(0,j.jsx)(p.Z,{size:"sm w-100 mb-2 btn-info me-2",children:(0,j.jsx)(l.Z,{icon:n,className:"nav-icon"})})}),(0,j.jsx)("td",{className:"text-center",children:(0,j.jsx)(p.Z,{size:"sm w-100 mb-2 btn-danger me-2",children:(0,j.jsx)(l.Z,{icon:o,className:"nav-icon"})})})]},a)}))})]})})})})]})})})}},91658:function(e,a,r){r.d(a,{Z:function(){return M}});var s=r(1413),t=r(44925),c=r(81694),n=r.n(c),o=r(72791),l=r(10162),i=r(99033),d=r(80184),u=["className","bsPrefix","as"],m=o.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,o=e.as,i=void 0===o?"div":o,m=(0,t.Z)(e,u);return c=(0,l.vE)(c,"card-footer"),(0,d.jsx)(i,(0,s.Z)({ref:a,className:n()(r,c)},m))}));m.displayName="CardFooter";var f=m,x=o.createContext(null);x.displayName="CardHeaderContext";var v=x,N=["bsPrefix","className","as"],Z=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,i=e.as,u=void 0===i?"div":i,m=(0,t.Z)(e,N),f=(0,l.vE)(r,"card-header"),x=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,d.jsx)(v.Provider,{value:x,children:(0,d.jsx)(u,(0,s.Z)((0,s.Z)({ref:a},m),{},{className:n()(c,f)}))})}));Z.displayName="CardHeader";var h=Z,p=["bsPrefix","className","variant","as"],b=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,o=e.variant,i=e.as,u=void 0===i?"img":i,m=(0,t.Z)(e,p),f=(0,l.vE)(r,"card-img");return(0,d.jsx)(u,(0,s.Z)({ref:a,className:n()(o?"".concat(f,"-").concat(o):f,c)},m))}));b.displayName="CardImg";var j=b,g=["className","bsPrefix","as"],y=o.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,o=e.as,i=void 0===o?"div":o,u=(0,t.Z)(e,g);return c=(0,l.vE)(c,"card-img-overlay"),(0,d.jsx)(i,(0,s.Z)({ref:a,className:n()(r,c)},u))}));y.displayName="CardImgOverlay";var C=y,P=["className","bsPrefix","as"],w=o.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,o=e.as,i=void 0===o?"a":o,u=(0,t.Z)(e,P);return c=(0,l.vE)(c,"card-link"),(0,d.jsx)(i,(0,s.Z)({ref:a,className:n()(r,c)},u))}));w.displayName="CardLink";var k=w,E=function(e){return o.forwardRef((function(a,r){return(0,d.jsx)("div",(0,s.Z)((0,s.Z)({},a),{},{ref:r,className:n()(a.className,e)}))}))},A=["className","bsPrefix","as"],I=E("h6"),R=o.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,o=e.as,i=void 0===o?I:o,u=(0,t.Z)(e,A);return c=(0,l.vE)(c,"card-subtitle"),(0,d.jsx)(i,(0,s.Z)({ref:a,className:n()(r,c)},u))}));R.displayName="CardSubtitle";var S=R,H=["className","bsPrefix","as"],L=o.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,o=e.as,i=void 0===o?"p":o,u=(0,t.Z)(e,H);return c=(0,l.vE)(c,"card-text"),(0,d.jsx)(i,(0,s.Z)({ref:a,className:n()(r,c)},u))}));L.displayName="CardText";var z=L,_=["className","bsPrefix","as"],F=E("h5"),q=o.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,o=e.as,i=void 0===o?F:o,u=(0,t.Z)(e,_);return c=(0,l.vE)(c,"card-title"),(0,d.jsx)(i,(0,s.Z)({ref:a,className:n()(r,c)},u))}));q.displayName="CardTitle";var B=q,D=["bsPrefix","className","bg","text","border","body","children","as"],G=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,o=e.bg,u=e.text,m=e.border,f=e.body,x=void 0!==f&&f,v=e.children,N=e.as,Z=void 0===N?"div":N,h=(0,t.Z)(e,D),p=(0,l.vE)(r,"card");return(0,d.jsx)(Z,(0,s.Z)((0,s.Z)({ref:a},h),{},{className:n()(c,p,o&&"bg-".concat(o),u&&"text-".concat(u),m&&"border-".concat(m)),children:x?(0,d.jsx)(i.Z,{children:v}):v}))}));G.displayName="Card";var M=Object.assign(G,{Img:j,Title:B,Subtitle:S,Body:i.Z,Link:k,Text:z,Header:h,Footer:f,ImgOverlay:C})},99033:function(e,a,r){var s=r(1413),t=r(44925),c=r(72791),n=r(81694),o=r.n(n),l=r(10162),i=r(80184),d=["className","bsPrefix","as"],u=c.forwardRef((function(e,a){var r=e.className,c=e.bsPrefix,n=e.as,u=void 0===n?"div":n,m=(0,t.Z)(e,d);return c=(0,l.vE)(c,"card-body"),(0,i.jsx)(u,(0,s.Z)({ref:a,className:o()(r,c)},m))}));u.displayName="CardBody",a.Z=u},89743:function(e,a,r){var s=r(1413),t=r(44925),c=r(81694),n=r.n(c),o=r(72791),l=r(10162),i=r(80184),d=["bsPrefix","className","as"],u=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,o=e.as,u=void 0===o?"div":o,m=(0,t.Z)(e,d),f=(0,l.vE)(r,"row"),x=(0,l.pi)(),v=(0,l.zG)(),N="".concat(f,"-cols"),Z=[];return x.forEach((function(e){var a,r=m[e];delete m[e],a=null!=r&&"object"===typeof r?r.cols:r;var s=e!==v?"-".concat(e):"";null!=a&&Z.push("".concat(N).concat(s,"-").concat(a))})),(0,i.jsx)(u,(0,s.Z)((0,s.Z)({ref:a},m),{},{className:n().apply(void 0,[c,f].concat(Z))}))}));u.displayName="Row",a.Z=u},62591:function(e,a,r){var s=r(1413),t=r(44925),c=r(81694),n=r.n(c),o=r(72791),l=r(10162),i=r(80184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=o.forwardRef((function(e,a){var r=e.bsPrefix,c=e.className,o=e.striped,u=e.bordered,m=e.borderless,f=e.hover,x=e.size,v=e.variant,N=e.responsive,Z=(0,t.Z)(e,d),h=(0,l.vE)(r,"table"),p=n()(c,h,v&&"".concat(h,"-").concat(v),x&&"".concat(h,"-").concat(x),o&&"".concat(h,"-").concat("string"===typeof o?"striped-".concat(o):"striped"),u&&"".concat(h,"-bordered"),m&&"".concat(h,"-borderless"),f&&"".concat(h,"-hover")),b=(0,i.jsx)("table",(0,s.Z)((0,s.Z)({},Z),{},{className:p,ref:a}));if(N){var j="".concat(h,"-responsive");return"string"===typeof N&&(j="".concat(j,"-").concat(N)),(0,i.jsx)("div",{className:j,children:b})}return b}));a.Z=u}}]);
//# sourceMappingURL=837.94d85832.chunk.js.map