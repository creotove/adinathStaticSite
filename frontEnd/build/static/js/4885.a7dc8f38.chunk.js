"use strict";(self.webpackChunk_spellgrowth_adi_nath_group=self.webpackChunk_spellgrowth_adi_nath_group||[]).push([[4885],{74885:function(e,t,r){r.r(t);var n=r(74165),s=r(15861),a=r(29439),c=r(72791),i=r(47022),l=r(16157),o=r(62649),u=r(31243),d=r(78983),x=r(80184);t.default=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],h=t[1],m=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("/api/v1/masterAdmin/getMasterDistributorForApproval");case 3:(t=e.sent).data.success&&(0===t.data.data.length?h(null):h(t.data.data)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),o.ZP.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){m()}),[]);var p=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.patch("/api/v1/masterAdmin/approveUser",{uniqueId:t});case 3:(r=e.sent).data.success?(o.ZP.success(r.data.message),m()):o.ZP.error(r.data.message),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),o.ZP.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.patch("/api/v1/masterAdmin/rejectUser",{uniqueId:t});case 3:(r=e.sent).data.success?(o.ZP.success(r.data.message),m()):o.ZP.error(r.data.message),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),o.ZP.error("Something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsx)(i.Z,{fluid:!0,children:(0,x.jsx)(d.rb,{className:"mb-4",children:(0,x.jsx)(d.b7,{xs:!0,children:(0,x.jsxs)(d.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,x.jsx)(d.V,{color:"light",children:(0,x.jsxs)(d.T6,{children:[(0,x.jsx)(d.is,{className:"text-center",children:"#"}),(0,x.jsx)(d.is,{className:"text-center",children:"Transaction Id"}),(0,x.jsx)(d.is,{className:"text-center",children:"Paid"}),(0,x.jsx)(d.is,{className:"text-center",children:"Unique Id"}),(0,x.jsx)(d.is,{className:"text-center",children:"Role "}),(0,x.jsx)(d.is,{className:"text-center",children:"Name"}),(0,x.jsx)(d.NN,{className:"text-center",colSpan:2,children:"Action"})]})}),(0,x.jsx)(d.NR,{children:r&&r.length>0?r.map((function(e,t){return(0,x.jsxs)(d.T6,{"v-for":"item in tableItems",children:[(0,x.jsx)(d.NN,{className:"text-center",children:t+1}),(0,x.jsx)(d.NN,{className:"text-center",children:e.transactionId}),(0,x.jsx)(d.NN,{className:"text-center",children:e.paid?"Paid":"False"}),(0,x.jsx)(d.NN,{className:"text-center",children:e.uniqueId}),(0,x.jsx)(d.NN,{className:"text-center",children:e.role}),(0,x.jsx)(d.NN,{className:"text-center",children:e.name}),(0,x.jsxs)(d.NN,{className:"text-center",children:[(0,x.jsx)(l.Z,{style:{backgroundColor:"red",border:"none"},className:"mx-3",onClick:function(){return N(e.uniqueId)},children:"Reject"}),(0,x.jsx)(l.Z,{className:"btn-success text-white",onClick:function(){return p(e.uniqueId)},children:"Approve"})]})]},t+1)})):(0,x.jsx)(d.T6,{children:(0,x.jsx)(d.NN,{colSpan:8,className:"text-center text-danger",children:"No Data Found"})})})]})})})})}}}]);
//# sourceMappingURL=4885.a7dc8f38.chunk.js.map