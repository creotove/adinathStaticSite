"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[676],{64676:function(e,a,r){r.r(a);var l=r(74165),n=r(15861),t=r(29439),s=r(72791),o=r(57689),c=r(78983),i=r(95313),d=r(89743),u=r(2677),h=r(16157),x=r(62649),m=r(31243),j=r(59434),p=r(3162),v=r(80184);a.default=function(){var e=(0,j.v9)((function(e){return e.user.user})),a=(0,j.v9)((function(e){return e.partners.partners})),r=(0,o.s0)(),g=(0,s.useState)(!1),N=(0,t.Z)(g,2),Z=N[0],f=N[1],b=(0,s.useState)(""),C=(0,t.Z)(b,2),P=C[0],y=C[1],S=(0,s.useState)(""),w=(0,t.Z)(S,2),A=w[0],k=w[1],D=(0,s.useState)("Retailer"),R=(0,t.Z)(D,2),I=R[0],q=R[1],G=(0,s.useState)("Gujarat"),L=(0,t.Z)(G,2),M=L[0],E=L[1],B=(0,s.useState)(""),T=(0,t.Z)(B,2),_=T[0],U=T[1],K=(0,s.useState)(""),O=(0,t.Z)(K,2),V=O[0],H=O[1],z=(0,s.useState)(""),J=(0,t.Z)(z,2),F=J[0],W=J[1],Q=(0,s.useState)(""),X=(0,t.Z)(Q,2),Y=X[0],$=X[1],ee=(0,s.useState)(""),ae=(0,t.Z)(ee,2),re=ae[0],le=ae[1],ne=(0,s.useState)(""),te=(0,t.Z)(ne,2),se=te[0],oe=te[1],ce=(0,s.useState)(""),ie=(0,t.Z)(ce,2),de=ie[0],ue=ie[1],he=(0,s.useState)(""),xe=(0,t.Z)(he,2),me=xe[0],je=xe[1],pe=(0,s.useState)(!1),ve=(0,t.Z)(pe,2),ge=ve[0],Ne=ve[1],Ze=(0,j.I0)(),fe=(0,s.useState)(!1),be=(0,t.Z)(fe,2),Ce=be[0],Pe=(be[1],function(){var a=(0,n.Z)((0,l.Z)().mark((function a(n){var t,s;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!1!==n.currentTarget.checkValidity()){a.next=8;break}return n.preventDefault(),n.stopPropagation(),de!==me&&x.ZP.error("Password and Confirm Password does not match"),Ne(!0),a.abrupt("return");case 8:return n.preventDefault(),n.stopPropagation(),t={name:P,mobileNumber:A,role:I,age:Y,email:F,uniqueId:_,state:M,pan:V,city:re,password:de,pinCode:se,createdBy:e._id},console.log(t),a.next=14,m.Z.post("/api/v1/user/createUser",t);case 14:(s=a.sent).data.success?(y(""),k(""),q(""),E(""),U(""),W(""),$(""),le(""),oe(""),ue(""),je(""),x.ZP.success("Partner Added successfull"),r("/allpartner")):x.ZP.error(s.data.message),a.next=22;break;case 18:a.prev=18,a.t0=a.catch(0),x.ZP.error("Error in adding Partner"),console.log(a.t0);case 22:n.preventDefault();case 23:case"end":return a.stop()}}),a,null,[[0,18]])})));return function(e){return a.apply(this,arguments)}}()),ye=(0,s.useCallback)((0,n.Z)((0,l.Z)().mark((function a(){var r,n;return(0,l.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!e){a.next=7;break}return r=e.uniqueId,a.next=5,m.Z.post("/api/v1/user/getAllPartnersCreatedByUser",{uniqueId:r});case 5:(n=a.sent).data.success?n.data.data&&0!==n.data.data.length?null===n.data.data?(Ze(p.LO.actions.setPartners(null)),console.log(null)):(Ze(p.LO.actions.setPartners(n.data.data)),console.log(n.data.data)):x.ZP.info("No Partners Found"):x.ZP.error(n.data.message);case 7:a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),x.ZP.error("Error in getting Partners"),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,9]])}))),[e,Ze]);return(0,s.useEffect)((function(){ye()}),[ye]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(c.KB,{fluid:!0,className:"d-flex justify-content-end",children:[(0,v.jsx)(c.u5,{onClick:function(){return f(!Z)},className:"mb-3 myCustomBtn",children:"Create Partner"}),(0,v.jsxs)(c.Tk,{size:"lg",visible:Z,onClose:function(){return f(!1)},"aria-labelledby":"OptionalSizesExample2",children:[(0,v.jsx)(c.p0,{children:(0,v.jsx)(c.fl,{id:"CreatePartnerModal",children:"Create Partner"})}),(0,v.jsx)(c.sD,{children:(0,v.jsx)("div",{className:"container justify-content-center d-flex mt-5 w-100 ",children:(0,v.jsxs)(i.Z,{noValidate:!0,validated:ge,onSubmit:Pe,autoComplete:"off",children:[(0,v.jsxs)(d.Z,{className:"mb-3",children:[(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formName",children:[(0,v.jsx)(i.Z.Label,{children:"Name"}),(0,v.jsx)(i.Z.Control,{type:"text",placeholder:"Enter Name",onChange:function(e){y(e.target.value)},value:P,required:!0})]}),(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formMobileNumber",children:[(0,v.jsx)(i.Z.Label,{children:"WhatsApp Number"}),(0,v.jsx)(i.Z.Control,{type:"number",placeholder:"Enter Mobile Number",onChange:function(e){return k(e.target.value)},value:A,required:!0})]}),(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formRole",children:[(0,v.jsx)(i.Z.Label,{children:"Role"}),e&&"Admin"===e.role?(0,v.jsxs)(i.Z.Select,{onChange:function(e){q(e.target.value),console.log(e.target.value)},defaultValue:"Retailer",value:I,required:!0,children:[(0,v.jsx)("option",{value:"Select Role",disabled:!0,children:"Select Role"}),(0,v.jsx)("option",{value:"Master Distributor",children:"Master Distributor"}),(0,v.jsx)("option",{value:"Distributor",children:"Distributor"}),(0,v.jsx)("option",{value:"Retailer",children:"Retailer"})]}):e&&"Master Distributor"===e.role?(0,v.jsxs)(i.Z.Select,{onChange:function(e){q(e.target.value),console.log(e.target.value)},defaultValue:"Retailer",value:I,required:!0,children:[(0,v.jsx)("option",{value:"Select Role",disabled:!0,children:"Select Role"}),(0,v.jsx)("option",{value:"Distributor",children:"Distributor"}),(0,v.jsx)("option",{value:"Retailer",children:"Retailer"})]}):e&&"Distributor"===e.role?(0,v.jsxs)(i.Z.Select,{onChange:function(e){q(e.target.value),console.log(e.target.value)},defaultValue:"Retailer",value:I,required:!0,children:[(0,v.jsx)("option",{value:"Select Role",disabled:!0,children:"Select Role"}),(0,v.jsx)("option",{value:"Retailer",children:"Retailer"})]}):null]})]}),(0,v.jsxs)(d.Z,{className:"mb-3",children:[(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formAge",children:[(0,v.jsx)(i.Z.Label,{children:"Age"}),(0,v.jsx)(i.Z.Control,{type:"number",placeholder:"Enter Age",onChange:function(e){return $(e.target.value)},value:Y,required:!0})]}),(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"UniqueId",children:[(0,v.jsx)(i.Z.Label,{children:"Unique Id"}),(0,v.jsx)(i.Z.Control,{type:"text",className:"disabled",placeholder:"Unique Id",onChange:function(e){return function(e){var a=A.slice(-6);U("ADI-".concat(a))}()},value:_,required:!0})]}),(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formEmail",children:[(0,v.jsx)(i.Z.Label,{children:"Email"}),(0,v.jsx)(i.Z.Control,{type:"text",className:"email",placeholder:"Email",onChange:function(e){return W(e.target.value)},value:F,required:!0})]})]}),(0,v.jsxs)(d.Z,{className:"mb-3",children:[(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formState",children:[(0,v.jsx)(i.Z.Label,{children:"State"}),(0,v.jsxs)(i.Z.Select,{onChange:function(e){return E(e.target.value)},defaultValue:"Gujarat",value:M,required:!0,children:[(0,v.jsx)("option",{value:"Select State",disabled:!0,children:"State..."}),(0,v.jsx)("option",{value:"Assam",children:"Assam"}),(0,v.jsx)("option",{value:"Andaman And Nicobar",children:"Andaman And Nicobar"}),(0,v.jsx)("option",{value:"Chandigarh",children:"Chandigarh"}),(0,v.jsx)("option",{value:"Dadra And Nagar Haveli And Daman And Diu",children:"Dadra And Nagar Haveli And Daman And Diu"}),(0,v.jsx)("option",{value:"Maharashtra",children:"Maharashtra"}),(0,v.jsx)("option",{value:"Madhya Pradesh",children:"Madhya Pradesh"}),(0,v.jsx)("option",{value:"Rajesthan",children:"Rajesthan"}),(0,v.jsx)("option",{value:"Utter Pradesh",children:"Utter Pradesh"}),(0,v.jsx)("option",{value:"Uttrakhand",children:"Uttrakhand"}),(0,v.jsx)("option",{value:"Jammu Kashmir",children:"Jammu Kashmir"}),(0,v.jsx)("option",{value:"Jharkhand",children:"Jharkhand"}),(0,v.jsx)("option",{value:"Meghalaya",children:"Meghalaya"}),(0,v.jsx)("option",{value:"Goa",children:"Goa"}),(0,v.jsx)("option",{value:"Manipur",children:"Manipur"}),(0,v.jsx)("option",{value:"Karnataka",children:"Karnataka"}),(0,v.jsx)("option",{value:"Telangana",children:"Telangana"}),(0,v.jsx)("option",{value:"Andra Pradesh",children:"Andra Pradesh"}),(0,v.jsx)("option",{value:"Arunachal Pradesh",children:"Arunachal Pradesh"}),(0,v.jsx)("option",{value:"Punjab",children:"Punjab"}),(0,v.jsx)("option",{value:"Chhattisgarh",children:"Chhattisgarh"}),(0,v.jsx)("option",{value:"Tamilnadu",children:"Tamilnadu"}),(0,v.jsx)("option",{value:"Odisha",children:"Odisha"}),(0,v.jsx)("option",{value:"West Bengal",children:"West Bengal"}),(0,v.jsx)("option",{value:"Gujarat",children:"Gujarat"}),(0,v.jsx)("option",{value:"Mizoram",children:"Mizoram"}),(0,v.jsx)("option",{value:"Nagaland",children:"Nagaland"}),(0,v.jsx)("option",{value:"Himachal Pradesh",children:"Himachal Pradesh"}),(0,v.jsx)("option",{value:"Sikkim",children:"Sikkim"}),(0,v.jsx)("option",{value:"Panducherry",children:"Panducherry"}),(0,v.jsx)("option",{value:"Delhi",children:"Delhi"}),(0,v.jsx)("option",{value:"Bihar",children:"Bihar"}),(0,v.jsx)("option",{value:"Haryana",children:"Haryana"}),(0,v.jsx)("option",{value:"Kerala",children:"Kerala"}),(0,v.jsx)("option",{value:"Tripura",children:"Tripura"}),(0,v.jsx)("option",{value:"Ladakh",children:"Ladakh"}),(0,v.jsx)("option",{value:"New Delhi",children:"New Delhi"}),(0,v.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formCity",children:[(0,v.jsx)(i.Z.Label,{children:"City "}),(0,v.jsx)(i.Z.Control,{type:"text",placeholder:"Enter City",onChange:function(e){return le(e.target.value)},value:re,required:!0})]}),(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formPinCode",children:[(0,v.jsx)(i.Z.Label,{children:"PinCode "}),(0,v.jsx)(i.Z.Control,{type:"number",placeholder:"Pin code",onChange:function(e){return oe(e.target.value)},value:se,required:!0})]})]}),(0,v.jsxs)(d.Z,{className:"mb-3",children:[(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formPassword",children:[(0,v.jsx)(i.Z.Label,{children:"Pan Car Number"}),(0,v.jsx)(i.Z.Control,{type:"text",placeholder:"Enter Pan Card Number",onChange:function(e){return H(e.target.value)},value:V,required:!0})]}),(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formPassword",children:[(0,v.jsx)(i.Z.Label,{children:"Password "}),(0,v.jsx)(i.Z.Control,{type:"password",placeholder:"Enter Password",onChange:function(e){return ue(e.target.value)},value:de,required:!0})]}),(0,v.jsxs)(i.Z.Group,{as:u.Z,className:"col-sm-12 col-lg-4 col-xs-12 col-md-4 col-12",controlId:"formCnfrmPassword",children:[(0,v.jsx)(i.Z.Label,{children:"Confirm Password"}),(0,v.jsx)(i.Z.Control,{type:"password",placeholder:"Re-enter Password",onChange:function(e){return je(e.target.value)},value:me,required:!0})]})]}),(0,v.jsx)(h.Z,{variant:"primary",className:"col-3 col-sm-12 col-lg-3 col-xs-12 col-md-3 col-12 offset-md-9",type:"submit",children:"Submit"})]})})})]})]}),(0,v.jsx)(c.KB,{fluid:!0,children:(0,v.jsx)(c.rb,{children:(0,v.jsx)(c.b7,{xs:!0,children:(0,v.jsxs)(c.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,v.jsx)(c.V,{color:"light",children:(0,v.jsxs)(c.T6,{children:[(0,v.jsx)(c.is,{className:"text-center",children:(0,v.jsx)("b",{children:"Sn"})}),(0,v.jsx)(c.is,{className:"text-center",children:(0,v.jsx)("b",{children:"Date"})}),(0,v.jsx)(c.is,{className:"text-center",children:(0,v.jsx)("b",{children:"Unique Id"})}),(0,v.jsx)(c.is,{className:"text-center",children:(0,v.jsx)("b",{children:"Role"})}),(0,v.jsx)(c.is,{className:"text-center",children:(0,v.jsx)("b",{children:"Name"})}),(0,v.jsx)(c.is,{className:"text-center",children:(0,v.jsx)("b",{children:"PAN"})}),(0,v.jsx)(c.is,{className:"text-center",children:(0,v.jsx)("b",{children:"City"})}),(0,v.jsx)(c.is,{className:"text-center",children:(0,v.jsx)("b",{children:"Created By"})}),(0,v.jsx)(c.is,{className:"text-center",children:(0,v.jsx)("b",{children:"Status"})})]})}),(0,v.jsx)(c.NR,{children:a?a.map((function(a,r){return(0,v.jsxs)(c.T6,{"v-for":"item in tableItems",children:[(0,v.jsx)(c.NN,{className:"text-center",children:(0,v.jsx)("strong",{children:r+1})}),(0,v.jsx)(c.NN,{className:"text-center",children:new Date(e.createdAt).toLocaleDateString()}),(0,v.jsx)(c.NN,{className:"text-center",children:a.uniqueId}),(0,v.jsx)(c.NN,{className:"text-center",children:a.role}),(0,v.jsx)(c.NN,{className:"text-center",children:a.name}),(0,v.jsx)(c.NN,{className:"text-center",children:a.pan}),(0,v.jsx)(c.NN,{className:"text-center",children:a.city}),(0,v.jsx)(c.NN,{className:"text-center",children:a.createdBy}),(0,v.jsx)(c.NN,{className:"text-center",children:"pending"===a.status?(0,v.jsx)(c.C_,{color:"warning",shape:"rounded-pill",children:"Pending"}):(0,v.jsx)(c.C_,{color:"success",shape:"rounded-pill",children:"Approved"})})]},r)})):(0,v.jsx)(c.T6,{"v-for":"item in tableItems",children:(0,v.jsx)(c.NN,{className:"text-center",colSpan:9,children:Ce?(0,v.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,v.jsx)("div",{className:"spinner-border text-primary",role:"status",children:(0,v.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):(0,v.jsx)("h4",{className:"text-center text-danger",children:"No partners Found"})})})})]})})})})]})}},89743:function(e,a,r){var l=r(1413),n=r(44925),t=r(81694),s=r.n(t),o=r(72791),c=r(10162),i=r(80184),d=["bsPrefix","className","as"],u=o.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.as,u=void 0===o?"div":o,h=(0,n.Z)(e,d),x=(0,c.vE)(r,"row"),m=(0,c.pi)(),j=(0,c.zG)(),p="".concat(x,"-cols"),v=[];return m.forEach((function(e){var a,r=h[e];delete h[e],a=null!=r&&"object"===typeof r?r.cols:r;var l=e!==j?"-".concat(e):"";null!=a&&v.push("".concat(p).concat(l,"-").concat(a))})),(0,i.jsx)(u,(0,l.Z)((0,l.Z)({ref:a},h),{},{className:s().apply(void 0,[t,x].concat(v))}))}));u.displayName="Row",a.Z=u}}]);
//# sourceMappingURL=676.28f3e6e5.chunk.js.map