_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{oQ5g:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return a}));var r=e("nKUr"),s=e("o0o1"),u=e.n(s);function o(t,n,e,r,s,u,o){try{var a=t[u](o),i=a.value}catch(c){return void e(c)}a.done?n(i):Promise.resolve(i).then(r,s)}function a(){var t=function(){var t,n=(t=u.a.mark((function t(n){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("/api/status",{body:JSON.stringify({status:n.target.status.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return e=t.sent,t.next=6,e.json();case 6:t.sent;case 7:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,s){var u=t.apply(n,e);function a(t){o(u,r,s,a,i,"next",t)}function i(t){o(u,r,s,a,i,"throw",t)}a(void 0)}))});return function(t){return n.apply(this,arguments)}}();return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsx)("label",{htmlFor:"status",children:"status"}),Object(r.jsx)("input",{id:"status",name:"status",type:"text",autoComplete:"status",required:!0}),Object(r.jsx)("button",{type:"submit",children:"Register"})]})}},tXO1:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/status/post",function(){return e("oQ5g")}])}},[["tXO1",0,1,2]]]);