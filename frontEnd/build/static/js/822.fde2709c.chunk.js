"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[822],{16822:function(e,r,t){t.r(r);var a=t(74165),l=t(15861),s=t(29439),n=t(72791),c=t(47022),o=t(95313),d=t(89743),i=t(62591),u=t(45736),x=t(16157),m=t(2677),h=t(89708),Z=t(31243),p=t(62649),b=t(80184);r.default=function(){var e=(0,n.useState)(!1),r=(0,s.Z)(e,2),t=r[0],j=r[1],f=(0,n.useState)(""),N=(0,s.Z)(f,2),v=N[0],g=N[1],C=(0,n.useState)(""),y=(0,s.Z)(C,2),S=y[0],I=y[1],q=(0,n.useState)(""),w=(0,s.Z)(q,2),A=w[0],G=w[1],M=(0,n.useState)(""),P=(0,s.Z)(M,2),L=P[0],B=P[1],E=(0,n.useState)(""),k=(0,s.Z)(E,2),_=k[0],D=k[1],U=(0,n.useState)(""),R=(0,s.Z)(U,2),z=R[0],T=R[1],F=(0,n.useState)(""),H=(0,s.Z)(F,2),O=H[0],V=H[1],W=(0,n.useState)(""),J=(0,s.Z)(W,2),K=J[0],Q=J[1],X=(0,n.useState)(""),Y=(0,s.Z)(X,2),$=Y[0],ee=Y[1],re=(0,n.useState)(""),te=(0,s.Z)(re,2),ae=te[0],le=te[1],se=(0,n.useState)(""),ne=(0,s.Z)(se,2),ce=ne[0],oe=ne[1],de=(0,n.useState)(""),ie=(0,s.Z)(de,2),ue=ie[0],xe=ie[1],me=(0,n.useState)([]),he=(0,s.Z)(me,2),Ze=he[0],pe=he[1],be=(0,n.useState)(""),je=(0,s.Z)(be,2),fe=je[0],Ne=je[1],ve=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.Z.get("api/v1/masterAdmin/allUsers");case 3:(r=e.sent).data.success&&(console.log(r.data),pe(r.data.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),p.ZP.error("Internal Server Error");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=(0,l.Z)((0,a.Z)().mark((function e(r){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"filterBy"!==r){e.next=4;break}return ve(),e.abrupt("return");case 4:return e.next=6,Z.Z.get("api/v1/masterAdmin/".concat(r));case 6:(t=e.sent).data.success&&(console.log(t.data),pe(t.data.data)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),p.ZP.error("Internal Server Error");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(r){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){ve()}),[]),(0,b.jsxs)(c.Z,{fluid:!0,children:[(0,b.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,b.jsx)("h3",{children:"Master Admin All Users"}),(0,b.jsx)(o.Z,{children:(0,b.jsx)(d.Z,{className:"mb-3",children:(0,b.jsx)(o.Z.Group,{className:"mb-3",controlId:"formBasicEmail",children:(0,b.jsxs)(o.Z.Select,{onChange:function(e){ge(e.target.value)},children:[(0,b.jsx)("option",{value:"filterBy",children:"Filter By"}),(0,b.jsx)("option",{value:"admin",children:"Admin"}),(0,b.jsx)("option",{value:"masterDistributor",children:"Master Distributor"}),(0,b.jsx)("option",{value:"distributor",children:"Distributor"}),(0,b.jsx)("option",{value:"retailer",children:"Retailer"})]})})})})]}),(0,b.jsxs)(i.Z,{responsive:!0,children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{className:"text-center",children:"Sn"}),(0,b.jsx)("th",{className:"text-center",children:"Name"}),(0,b.jsx)("th",{className:"text-center",children:"Role"}),(0,b.jsx)("th",{className:"text-center",children:"Unique Id"}),(0,b.jsx)("th",{className:"text-center",children:"PAN Card"}),(0,b.jsx)("th",{className:"text-center",children:"Status"}),(0,b.jsx)("th",{className:"text-center",children:"Actions"})]})}),(0,b.jsx)("tbody",{children:Ze&&Ze.length>0?Ze.map((function(e,r){return(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{className:"text-center",children:r+1}),(0,b.jsx)("td",{className:"text-center",children:e.name}),(0,b.jsx)("td",{className:"text-center",children:e.role}),(0,b.jsx)("td",{className:"text-center",children:e.uniqueId}),(0,b.jsx)("td",{className:"text-center",children:e.panCard}),(0,b.jsx)("td",{className:"text-center",children:(0,b.jsx)(u.Z,{className:"".concat("pending"===e.status?"bg-warning":"bg-success"),children:e.status})}),(0,b.jsx)("td",{className:"text-center",children:(0,b.jsx)(x.Z,{className:"myCustomBtn",onClick:function(){j(!0),console.log(fe),Ne(e.uniqueId),g(e.name),I(e.mobileNumber),G(e.role),B(e.email),D(e.createdBy?e.createdBy:"Owner"),T(e.panCard),V(e.uniqueId),Q(e.aadharCard?e.aadharCard:"Not Available"),ee(e.partners.length),le(e.state),oe(e.city),xe(e.pinCode)},children:"View More"})})]},r)})):(0,b.jsx)("tr",{children:(0,b.jsx)("td",{colSpan:"7",className:"text-center",children:"No Data Found"})})}),(0,b.jsxs)(h.Z,{size:"lg",show:t,onHide:function(){return j(!1)},children:[(0,b.jsx)(h.Z.Header,{closeButton:!0,children:(0,b.jsx)(h.Z.Title,{children:"User Details"})}),(0,b.jsxs)(c.Z,{fluid:!0,className:"p-5",children:[(0,b.jsxs)(d.Z,{className:"mb-3",children:[(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formName",children:[(0,b.jsx)(o.Z.Label,{children:"Name"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"Enter Name",onChange:function(e){g(e.target.value)},value:v,required:!0,disabled:!0})]}),(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formMobileNumber",children:[(0,b.jsx)(o.Z.Label,{children:"WhatsApp Number"}),(0,b.jsx)(o.Z.Control,{type:"number",placeholder:"Enter Mobile Number",onChange:function(e){return I(e.target.value)},value:S,required:!0,disabled:!0})]}),(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formMobileNumber",children:[(0,b.jsx)(o.Z.Label,{children:"Role"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"Enter Mobile Number",onChange:function(e){return G(e.target.value)},value:A,required:!0,disabled:!0})]})]}),(0,b.jsxs)(d.Z,{className:"mb-3",children:[(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formName",children:[(0,b.jsx)(o.Z.Label,{children:"Email"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"Email",onChange:function(e){B(e.target.value)},value:L,required:!0,disabled:!0})]}),(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formMobileNumber",children:[(0,b.jsx)(o.Z.Label,{children:"Created By"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"Created By",onChange:function(e){return D(e.target.value)},value:_,required:!0,disabled:!0})]}),(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formMobileNumber",children:[(0,b.jsx)(o.Z.Label,{children:"PAN No."}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"PAN No.",onChange:function(e){return T(e.target.value)},value:z,required:!0,disabled:!0})]})]}),(0,b.jsxs)(d.Z,{className:"mb-3",children:[(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formName",children:[(0,b.jsx)(o.Z.Label,{children:"Unique ID"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"Unique ID",onChange:function(e){V(e.target.value)},value:O,required:!0,disabled:!0})]}),(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formMobileNumber",children:[(0,b.jsx)(o.Z.Label,{children:"Aadhar Card"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"Aadhar Card",onChange:function(e){return Q(e.target.value)},value:K,required:!0,disabled:!0})]}),(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formMobileNumber",children:[(0,b.jsx)(o.Z.Label,{children:"Total Partner Created"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"Total Partner Created",onChange:function(e){return ee(e.target.value)},value:$,required:!0,disabled:!0})]})]}),(0,b.jsxs)(d.Z,{className:"mb-3",children:[(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formName",children:[(0,b.jsx)(o.Z.Label,{children:"State"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"State",onChange:function(e){le(e.target.value)},value:ae,required:!0,disabled:!0})]}),(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formMobileNumber",children:[(0,b.jsx)(o.Z.Label,{children:"City"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"City",onChange:function(e){return oe(e.target.value)},value:ce,required:!0,disabled:!0})]}),(0,b.jsxs)(o.Z.Group,{as:m.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formMobileNumber",children:[(0,b.jsx)(o.Z.Label,{children:"Pin Code"}),(0,b.jsx)(o.Z.Control,{type:"text",placeholder:"Pin code",onChange:function(e){return xe(e.target.value)},value:ue,required:!0,disabled:!0})]})]})]})]})]})]})}},45736:function(e,r,t){var a=t(1413),l=t(45987),s=t(81694),n=t.n(s),c=t(72791),o=t(10162),d=t(80184),i=["bsPrefix","bg","pill","text","className","as"],u=c.forwardRef((function(e,r){var t=e.bsPrefix,s=e.bg,c=void 0===s?"primary":s,u=e.pill,x=void 0!==u&&u,m=e.text,h=e.className,Z=e.as,p=void 0===Z?"span":Z,b=(0,l.Z)(e,i),j=(0,o.vE)(t,"badge");return(0,d.jsx)(p,(0,a.Z)((0,a.Z)({ref:r},b),{},{className:n()(h,j,x&&"rounded-pill",m&&"text-".concat(m),c&&"bg-".concat(c))}))}));u.displayName="Badge",r.Z=u},62591:function(e,r,t){var a=t(1413),l=t(45987),s=t(81694),n=t.n(s),c=t(72791),o=t(10162),d=t(80184),i=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=c.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,c=e.striped,u=e.bordered,x=e.borderless,m=e.hover,h=e.size,Z=e.variant,p=e.responsive,b=(0,l.Z)(e,i),j=(0,o.vE)(t,"table"),f=n()(s,j,Z&&"".concat(j,"-").concat(Z),h&&"".concat(j,"-").concat(h),c&&"".concat(j,"-").concat("string"===typeof c?"striped-".concat(c):"striped"),u&&"".concat(j,"-bordered"),x&&"".concat(j,"-borderless"),m&&"".concat(j,"-hover")),N=(0,d.jsx)("table",(0,a.Z)((0,a.Z)({},b),{},{className:f,ref:r}));if(p){var v="".concat(j,"-responsive");return"string"===typeof p&&(v="".concat(v,"-").concat(p)),(0,d.jsx)("div",{className:v,children:N})}return N}));r.Z=u}}]);
//# sourceMappingURL=822.fde2709c.chunk.js.map