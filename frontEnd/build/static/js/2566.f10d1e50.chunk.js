"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[2566],{12566:function(e,t,s){s.r(t);var n=s(74165),a=s(15861),r=s(29439),c=s(62649),i=s(31243),l=s(72791),o=s(89743),d=s(47022),h=s(62591),x=s(16157),u=s(89708),m=s(96048),p=s.n(m),j=s(80184);t.default=function(){var e=(0,l.useState)(!1),t=(0,r.Z)(e,2),s=t[0],m=t[1],g=function(){return m(!1)},f=function(){return m(!0)},N=(0,l.useState)([]),v=(0,r.Z)(N,2),b=v[0],Z=v[1],C=(0,l.useState)(1),k=(0,r.Z)(C,2),y=k[0],w=k[1],_=(0,l.useRef)(1),P=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var s,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/api/v1/masterAdmin/getUserComplaints?page=".concat(_.current,"&limit=").concat(8));case 3:(s=e.sent).data.success&&(0===(a=s.data.data).results.length?Z([]):(Z(a.results),w(a.totalPages))),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),c.ZP.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){_.current=1,P()}),[]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.Z,{className:"mb-3",children:(0,j.jsxs)(d.Z,{fluid:!0,children:[(0,j.jsx)("h3",{children:"Contact Details of users"}),(0,j.jsx)(o.Z,{children:(0,j.jsxs)(h.Z,{responsive:!0,children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{className:"text-center",children:"Sn"}),(0,j.jsx)("th",{className:"text-center",children:"First Name"}),(0,j.jsx)("th",{className:"text-center",children:"UniqueId"}),(0,j.jsx)("th",{className:"text-center",children:"Mobile Number"}),(0,j.jsx)("th",{className:"text-center",children:"Title"}),(0,j.jsx)("th",{className:"text-center",children:"Ticket ID"}),(0,j.jsx)("th",{className:"text-center",children:"Action"})]})}),(0,j.jsx)("tbody",{children:b&&b.length>0?b.map((function(e,t){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("tr",{children:[(0,j.jsx)("td",{className:"text-center",children:t+1}),(0,j.jsx)("td",{className:"text-center",children:e.firstName}),(0,j.jsx)("td",{className:"text-center",children:e.userId}),(0,j.jsx)("td",{className:"text-center",children:e.mobile}),(0,j.jsx)("td",{className:"text-center",children:e.complaintTitle}),(0,j.jsx)("td",{className:"text-center",children:e.ticketId}),(0,j.jsx)("td",{className:"text-center",children:(0,j.jsx)(x.Z,{onClick:f,className:"myCustomBtn",children:"View More"})})]},t),(0,j.jsxs)(u.Z,{show:s,onHide:g,animation:!1,children:[(0,j.jsx)(u.Z.Header,{closeButton:!0,children:(0,j.jsx)(u.Z.Title,{children:e.complaintTitle})}),(0,j.jsxs)(u.Z.Body,{children:[e.complaintMessage,(0,j.jsx)("div",{className:"bg-black d-flex justify-content-center align-items-center",style:{width:"100%",height:"10rem",opacity:"0.2"},children:(0,j.jsx)("img",{src:e.screenshot,alt:"",style:{width:"100%",height:"100%",objectFit:"contain"}})})]}),(0,j.jsx)(u.Z.Footer,{children:(0,j.jsx)(x.Z,{className:"myCustomBtn",onClick:g,children:"Set as Resolved"})})]})]})})):(0,j.jsx)("tr",{children:(0,j.jsx)("td",{colSpan:8,className:"text-center text-danger",children:"No data found"})})})]})})]})}),(0,j.jsx)(o.Z,{children:(0,j.jsx)(p(),{breakLabel:"...",nextLabel:"next >",onPageChange:function(e){var t=e.selected+1;_.current=t,P(t)},pageRangeDisplayed:5,pageCount:y,previousLabel:"< previous",renderOnZeroPageCount:null,marginPagesDisplayed:2,containerClassName:"pagination justify-content-center",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",activeClassName:"active"})})]})}},62591:function(e,t,s){var n=s(1413),a=s(45987),r=s(81694),c=s.n(r),i=s(72791),l=s(10162),o=s(80184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],h=i.forwardRef((function(e,t){var s=e.bsPrefix,r=e.className,i=e.striped,h=e.bordered,x=e.borderless,u=e.hover,m=e.size,p=e.variant,j=e.responsive,g=(0,a.Z)(e,d),f=(0,l.vE)(s,"table"),N=c()(r,f,p&&"".concat(f,"-").concat(p),m&&"".concat(f,"-").concat(m),i&&"".concat(f,"-").concat("string"===typeof i?"striped-".concat(i):"striped"),h&&"".concat(f,"-bordered"),x&&"".concat(f,"-borderless"),u&&"".concat(f,"-hover")),v=(0,o.jsx)("table",(0,n.Z)((0,n.Z)({},g),{},{className:N,ref:t}));if(j){var b="".concat(f,"-responsive");return"string"===typeof j&&(b="".concat(b,"-").concat(j)),(0,o.jsx)("div",{className:b,children:v})}return v}));t.Z=h}}]);
//# sourceMappingURL=2566.f10d1e50.chunk.js.map