"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[21],{85021:function(e,t,n){n.r(t);var r=n(74165),s=n(15861),a=n(29439),c=n(72791),i=n(47022),l=n(16157),d=n(62649),o=n(31243),u=n(78983),x=n(80184);t.default=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],h=t[1],N=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/v1/masterAdmin/getUserForApproval");case 3:(t=e.sent).data.success&&(0===t.data.data.length?h(null):h(t.data.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),d.ZP.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){N()}),[]);var m=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.patch("/api/v1/masterAdmin/approveUser",{uniqueId:t});case 3:(n=e.sent).data.success?(d.ZP.success(n.data.message),N()):d.ZP.error(n.data.message),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),d.ZP.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsx)(i.Z,{fluid:!0,children:(0,x.jsx)(u.rb,{className:"mb-4",children:(0,x.jsx)(u.b7,{xs:!0,children:(0,x.jsxs)(u.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,x.jsx)(u.V,{color:"light",children:(0,x.jsxs)(u.T6,{children:[(0,x.jsx)(u.is,{className:"text-center",children:"#"}),(0,x.jsx)(u.is,{className:"text-center",children:"Transaction Id"}),(0,x.jsx)(u.is,{className:"text-center",children:"Paid"}),(0,x.jsx)(u.is,{className:"text-center",children:"Unique Id"}),(0,x.jsx)(u.is,{className:"text-center",children:"Role "}),(0,x.jsx)(u.is,{className:"text-center",children:"Name"}),(0,x.jsx)(u.NN,{className:"text-center",colSpan:2,children:"Action"})]})}),(0,x.jsx)(u.NR,{children:n&&n.map((function(e,t){return(0,x.jsxs)(u.T6,{"v-for":"item in tableItems",children:[(0,x.jsx)(u.NN,{className:"text-center",children:t+1}),(0,x.jsx)(u.NN,{className:"text-center",children:e.transactionId}),(0,x.jsx)(u.NN,{className:"text-center",children:e.paid?"Paid":"False"}),(0,x.jsx)(u.NN,{className:"text-center",children:e.uniqueId}),(0,x.jsx)(u.NN,{className:"text-center",children:e.role}),(0,x.jsx)(u.NN,{className:"text-center",children:e.name}),(0,x.jsx)(u.NN,{className:"text-center",children:(0,x.jsx)(l.Z,{className:"btn-danger",children:"Reject"})}),(0,x.jsx)(u.NN,{className:"text-center",children:(0,x.jsx)(l.Z,{className:"btn-primary",onClick:function(){return m(e.uniqueId)},children:"Approve"})})]},t+1)}))})]})})})})}}}]);
//# sourceMappingURL=21.54a71cd9.chunk.js.map