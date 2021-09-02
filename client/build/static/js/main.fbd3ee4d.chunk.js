(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(15),r=n.n(s),o=(n(43),n(2)),i=n.n(o),l=n(6),d=n(4),u=n(3),b=n(19),j=n(12),m=Object(j.c)({name:"user",initialState:{username:"",user_id:"",first_name:"",last_name:"",loggedIn:!1},reducers:{logIn:function(e,t){e.loggedIn=!0,e.username=t.payload.username,e.user_id=t.payload.user_id,e.first_name=t.payload.first_name,e.last_name=t.payload.last_name},logOut:function(e,t){e.loggedIn=!1,e.username="",e.user_id="",e.first_name="",e.last_name=""}}}),O=m.actions,h=O.logIn,f=O.logOut,p=m.reducer,x=n(11),v=n.n(x),N=n(14),g=Object(j.b)("fetchTodos",function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("/todos/",{withCredentials:!0});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),y=Object(j.b)("deleteTodo",function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.delete("/todos/".concat(t),{withCredentials:!0});case 3:e.sent,e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),w=Object(j.b)("addTodo",function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.post("/todos/",{todoName:t.todoName,todoDescription:t.todoDescription},{withCredentials:!0});case 3:return n=e.sent,e.abrupt("return",n);case 7:throw e.prev=7,e.t0=e.catch(0),new Error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()),k=Object(j.c)({name:"todos",initialState:{todos:[]},reducers:{setTodo:function(e,t){e.todos=t.payload}},extraReducers:function(e){e.addCase(g.fulfilled,(function(e,t){e.todos=t.payload})),e.addCase(g.rejected,(function(e,t){e.todos=[]})),e.addCase(y.fulfilled,(function(e,t){e.todos.length-1==0?e.todos=[]:e.todos=e.todos.filter((function(e){return e.todo_id!==t.payload.todo_id}))})),e.addCase(w.fulfilled,(function(e,t){e.todos=[].concat(Object(N.a)(e.todos),[t.payload.data])}))}}),C=k.actions.setTodo,_=k.reducer,S=n(0),D=function(){var e=Object(u.g)(),t=Object(d.b)(),n=function(){var n=Object(l.a)(i.a.mark((function n(a){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v.a.get("/user/logout",{withCredentials:!0});case 2:t(C([])),t(f()),e.push("/");case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(S.jsx)("nav",{className:"navbar navbar-dark bg-dark",children:Object(S.jsxs)("div",{className:"container-fluid",children:[Object(S.jsx)(b.b,{className:"navbar-brand",to:"#",children:"TODOS"}),Object(S.jsx)("div",{className:"d-flex",children:Object(S.jsx)("button",{onClick:n,type:"button btn-lg",className:"btn btn-light",children:"Logout"})})]})})},T=n(5),P=n(38),I=n.n(P),F=(n(82),{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",width:"25%",marginRight:"-50%",transform:"translate(-50%, -50%)"}});function E(){var e=Object(d.b)(),t=Object(a.useState)(""),n=Object(T.a)(t,2),s=n[0],r=n[1],o=Object(a.useState)(""),u=Object(T.a)(o,2),b=u[0],j=u[1],m=c.a.useState(!1),O=Object(T.a)(m,2),h=O[0],f=O[1],p=function(){var t=Object(l.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.preventDefault(),e(w({todoName:s,todoDescription:b})),r(""),j(""),x();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function x(){f(!1)}return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("button",{className:"btn btn-primary addTodoButton",onClick:function(){f(!0)},children:"Add Todo"}),Object(S.jsxs)(I.a,{isOpen:h,onRequestClose:x,style:F,contentLabel:"Example Modal",children:[Object(S.jsx)("h2",{className:"text-center text-success",children:"TODO"}),Object(S.jsxs)("form",{onSubmit:p,children:[Object(S.jsxs)("div",{className:"py-3",children:[Object(S.jsx)("label",{htmlFor:"todoName",className:"form-label",children:"TODO Name"}),Object(S.jsx)("input",{type:"text",id:"todoName",className:"form-control","aria-describedby":"todoNameHelpBlock",value:s,onChange:function(e){return r(e.target.value)}}),Object(S.jsx)("div",{id:"todoNameHelpBlock",className:"form-text ",children:"Please insert a Todo Name."})]}),Object(S.jsxs)("div",{className:"py-3",children:[Object(S.jsx)("label",{htmlFor:"todoDescription",className:"form-label",children:"TODO Description"}),Object(S.jsx)("input",{type:"text",id:"todoDescription",className:"form-control","aria-describedby":"todoDescriptionHelpBlock",value:b,onChange:function(e){return j(e.target.value)}}),Object(S.jsx)("div",{id:"todoDescriptionHelpBlock",className:"form-text",children:"Please insert a Todo Descripton. You are free to explain your TODO as you wish."})]}),Object(S.jsx)("button",{className:"btn btn-success submitButton",type:"submit",children:"Submit"})]}),Object(S.jsx)("div",{className:"d-flex justify-content-center",children:Object(S.jsx)("button",{onClick:x,className:"btn btn-danger",children:"close"})})]})]})}n(83);function B(e){var t=e.data,n=Object(d.b)(),a=function(){var e=Object(l.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(y(t.todo_id));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsx)("div",{children:Object(S.jsx)("div",{className:"accordion my-5",id:"accordionExample",children:Object(S.jsxs)("div",{className:"accordion-item",children:[Object(S.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(S.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(S.jsx)("p",{className:"buttonP",children:t.todo_name})})}),Object(S.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(S.jsxs)("div",{className:"accordion-body ",children:[Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)("p",{className:"desc text-center ",children:Object(S.jsx)("strong",{children:"Description"})}),Object(S.jsxs)("p",{className:"text-center",children:[" ",t.todo_description]})]}),Object(S.jsx)("div",{className:"p-1 text-center",children:Object(S.jsx)("button",{type:"button",className:"btn btn-danger my-2",onClick:a,children:"Done"})})]})})]})})})}n(84);function L(){var e=Object(d.c)((function(e){return e.todos.todos})),t=Object(d.b)(),n=Object(d.c)((function(e){return e.user.first_name})),c=Object(d.c)((function(e){return e.user.last_name})),s=Object(d.c)((function(e){return e.user.loggedIn}));return Object(a.useEffect)((function(){s&&t(g())}),[t,s]),Object(S.jsxs)("div",{className:"todos container ",children:[Object(S.jsx)("h1",{className:"text-info",children:n+" "+c}),0===e.length?Object(S.jsx)("div",{className:"my-5 shadow p-3 mb-5 bg-body rounded",children:Object(S.jsx)("h2",{className:"text-white",children:"TODOS is Empty! Add some TODO."})}):Object(S.jsx)("ul",{children:e.map((function(e){return Object(S.jsx)(B,{data:e},e.todo_id)}))}),Object(S.jsx)(E,{})]})}function R(){var e=Object(d.b)(),t=Object(a.useState)(""),n=Object(T.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(""),o=Object(T.a)(r,2),u=o[0],b=o[1],j=function(){var t=Object(l.a)(i.a.mark((function t(n){var a,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,v.a.post("/user/login",{username:c,password:u},{withCredentials:!0});case 3:a=t.sent,s=a.data,e(h({username:s.username,user_id:s.user_id,first_name:s.first_name,last_name:s.last_name}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(S.jsxs)("form",{onSubmit:j,children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{className:"text-center",children:"Login"}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"username-login",className:"form-label",children:"Username"}),Object(S.jsx)("input",{type:"username",className:"form-control",id:"username-login",onChange:function(e){return s(e.target.value.trim())},value:c})]})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Password"}),Object(S.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:u,onChange:function(e){return b(e.target.value.trim())}})]}),Object(S.jsxs)("div",{className:"mb-3 form-check",children:[Object(S.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1"}),Object(S.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"Check me out"})]}),Object(S.jsx)("div",{className:"d-grid gap-2",children:Object(S.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})}function H(){var e=Object(a.useState)([]),t=Object(T.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(T.a)(s,2),o=r[0],d=r[1],u=Object(a.useState)(""),b=Object(T.a)(u,2),j=b[0],m=b[1],O=Object(a.useState)(""),h=Object(T.a)(O,2),f=h[0],p=h[1],x=Object(a.useState)(""),g=Object(T.a)(x,2),y=g[0],w=g[1],k=Object(a.useState)(""),C=Object(T.a)(k,2),_=C[0],D=C[1],P=function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),j!==f){e.next=8;break}return e.next=4,v.a.post("/user/register",{username:o,password:j,firstName:y,lastName:_});case 4:(a=e.sent).data.user_id?(c([]),d(""),m(""),p(""),w(""),D("")):c((function(e){return[].concat(Object(N.a)(e),[a.data])})),e.next=9;break;case 8:n.find((function(e){return"Passwords do not match."===e}))?c((function(e){return Object(N.a)(e)})):c((function(e){return[].concat(Object(N.a)(e),["Passwords do not match."])}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)("form",{onSubmit:P,children:[Object(S.jsx)("div",{className:"container errors",children:Object(S.jsx)("ul",{children:n.map((function(e){return Object(S.jsx)("li",{children:e},n.findIndex((function(e){return e})))}))})}),Object(S.jsxs)("div",{children:[Object(S.jsx)("h2",{className:"text-center",children:"Register"}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"username-login",className:"form-label",children:"Username"}),Object(S.jsx)("input",{type:"username",className:"form-control",id:"username-login",value:o,onChange:function(e){return d(e.target.value.trim())}})]})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"Password",className:"form-label",children:"Password"}),Object(S.jsx)("input",{type:"password",className:"form-control",id:"Password",value:j,onChange:function(e){return m(e.target.value.trim())}})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"Password-verify",className:"form-label",children:"Verify Password"}),Object(S.jsx)("input",{type:"password",className:"form-control",id:"Password-verify",value:f,onChange:function(e){return p(e.target.value.trim())}})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"first-name",className:"form-label",children:"First Name"}),Object(S.jsx)("input",{type:"text",className:"form-control",id:"first-name",value:y,onChange:function(e){return w(e.target.value.trim())}})]}),Object(S.jsxs)("div",{className:"mb-3",children:[Object(S.jsx)("label",{htmlFor:"last-name",className:"form-label",children:"Last Name"}),Object(S.jsx)("input",{type:"text",className:"form-control",id:"last-name",value:_,onChange:function(e){return D(e.target.value.trim())}})]}),Object(S.jsx)("div",{className:"d-grid gap-2",children:Object(S.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})}n(85);function A(){var e=Object(a.useState)(!0),t=Object(T.a)(e,2),n=t[0],c=t[1];return Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"log",children:[Object(S.jsxs)("div",{className:"",children:[Object(S.jsx)("button",{onClick:function(){c(!0)},className:"btn btn-dark btn-lg",type:"button",children:"Login"}),Object(S.jsx)("button",{onClick:function(){c(!1)},className:"btn btn-danger btn-lg",type:"button",children:"Register"})]}),n?Object(S.jsx)(R,{}):Object(S.jsx)(H,{})]})})}var J=function(){var e=Object(d.c)((function(e){return e.user.loggedIn})),t=Object(d.b)();return Object(a.useEffect)((function(){v.a.get("/user/logged",{withCredentials:!0}).then((function(e){e.data.loggedIn&&t(h(e.data.user))}))}),[t]),Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(b.a,{children:Object(S.jsxs)(u.d,{children:[Object(S.jsx)(u.b,{exact:!0,path:"/",children:e?Object(S.jsx)(u.a,{to:"/todos"}):Object(S.jsx)(A,{})}),Object(S.jsxs)(u.b,{exact:!0,path:"/todos",children:[!e&&Object(S.jsx)(u.a,{to:"/"}),Object(S.jsx)(D,{}),Object(S.jsx)(L,{})]})]})})})},U=(n(86),Object(j.a)({reducer:{todos:_,user:p}}));r.a.render(Object(S.jsx)(d.a,{store:U,children:Object(S.jsx)(J,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.fbd3ee4d.chunk.js.map