"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[21],{85021:function(e,t,r){r.r(t);var n=r(74165),s=r(15861),a=r(29439),c=r(72791),l=r(47022),i=r(16157),d=r(62649),o=r(31243),u=r(78983),x=r(80184);t.default=function(){console.log("rendering approve user page");var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],h=t[1],N=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/v1/masterAdmin/getUserForApproval");case 3:(t=e.sent).data.success&&(0===t.data.data.length?h(null):h(t.data.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),d.ZP.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){N()}),[]);var m=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.patch("/api/v1/masterAdmin/approveUser",{uniqueId:t});case 3:(r=e.sent).data.success?(d.ZP.success(r.data.message),N()):d.ZP.error(r.data.message),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),d.ZP.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsx)(l.Z,{fluid:!0,children:(0,x.jsx)(u.rb,{className:"mb-4",children:(0,x.jsx)(u.b7,{xs:!0,children:(0,x.jsxs)(u.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,x.jsx)(u.V,{color:"light",children:(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.is,{className:"text-center",children:"#"}),(0,x.jsx)(u.is,{className:"text-center",children:"Transaction Id"}),(0,x.jsx)(u.is,{className:"text-center",children:"Paid"}),(0,x.jsx)(u.is,{className:"text-center",children:"Unique Id"}),(0,x.jsx)(u.is,{className:"text-center",children:"Role "}),(0,x.jsx)(u.is,{className:"text-center",children:"Name"}),(0,x.jsx)(u.NN,{className:"text-center",colSpan:2,children:"Action"})]})}),(0,x.jsx)(u.NR,{children:r&&r.map((function(e,t){return(0,x.jsxs)(u.T6,{"v-for":"item in tableItems",children:[(0,x.jsx)(u.NN,{className:"text-center",children:t+1}),(0,x.jsx)(u.NN,{className:"text-center",children:e.transactionId}),(0,x.jsx)(u.NN,{className:"text-center",children:e.paid?"Paid":"False"}),(0,x.jsx)(u.NN,{className:"text-center",children:e.uniqueId}),(0,x.jsx)(u.NN,{className:"text-center",children:e.role}),(0,x.jsx)(u.NN,{className:"text-center",children:e.name}),(0,x.jsx)(u.NN,{className:"text-center",children:(0,x.jsx)(i.Z,{className:"btn-danger",children:"Reject"})}),(0,x.jsx)(u.NN,{className:"text-center",children:(0,x.jsx)(i.Z,{className:"btn-primary",onClick:function(){return m(e.uniqueId)},children:"Approve"})})]},t+1)}))})]})})})})}}}]);
//# sourceMappingURL=21.3ec709ab.chunk.js.map