(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{8740:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return n(72)}])},9541:function(e,t,n){"use strict";n.d(t,{B:function(){return l}});var r=n(5893),s=n(3640),a=n(1664),i=n(8165),l=function(e){var t=e.handleSubmit,n=e.name,l=e.setName,o=e.email,c=e.setEmail,u=e.password,d=e.setPassword,m=e.loading,h=e.ok,f=e.setOk,p=e.page;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("form",{onSubmit:t,children:["login"!==p&&(0,r.jsxs)("div",{className:"p-3 form-group",children:[(0,r.jsx)("label",{className:"text-muted",children:"Your NGO's name"}),(0,r.jsx)("input",{value:n,onChange:function(e){return l(e.target.value)},type:"text",className:"form-control",placeholder:"Enter NGO's name:"})]}),(0,r.jsxs)("div",{className:"p-3 form-group",children:[(0,r.jsx)("label",{className:"text-muted",children:"Your NGO's Email Address"}),(0,r.jsx)("input",{value:o,onChange:function(e){return c(e.target.value)},type:"email",className:"form-control",placeholder:"Enter NGO's Email:"})]}),(0,r.jsxs)("div",{className:"p-3 form-group",children:[(0,r.jsx)("label",{className:"text-muted",children:"Password"}),(0,r.jsx)("input",{value:u,onChange:function(e){return d(e.target.value)},type:"password",className:"form-control",placeholder:"Enter NGO's Password:"})]}),(0,r.jsx)("div",{className:"d-flex justify-content-center p-3",children:(0,r.jsx)("button",{className:"btn btn-primary col-12",children:m?(0,r.jsx)(i.Z,{spin:!0,className:"py-1"}):"Submit"})})]}),(0,r.jsxs)(s.Z,{title:"Registered!",visible:h,onCancel:function(){return f(!1)},footer:null,children:[(0,r.jsx)("p",{children:"Your NGO has been successfully registered."}),(0,r.jsx)(a.default,{href:"/login",children:(0,r.jsx)("a",{className:"btn btn-primary btn-sm",children:"Login"})})]}),(0,r.jsx)("div",{className:"text-center",children:"login"==p?(0,r.jsx)(a.default,{href:"/register",children:(0,r.jsx)("a",{children:"Not registered? Register now!"})}):(0,r.jsx)(a.default,{href:"/login",children:(0,r.jsx)("a",{children:"Already registered? Login."})})})]})}},72:function(e,t,n){"use strict";n.r(t);var r=n(4051),s=n.n(r),a=n(5893),i=n(848),l=n(7294),o=n(9669),c=n.n(o),u=n(782),d=n(9541),m=n(5144),h=n(1163),f=n(3454);function p(e,t,n,r,s,a,i){try{var l=e[a](i),o=l.value}catch(c){return void n(c)}l.done?t(o):Promise.resolve(o).then(r,s)}t.default=function(){var e=(0,l.useState)(""),t=e[0],n=e[1],r=(0,l.useState)(""),o=r[0],x=r[1],v=(0,l.useState)(""),g=v[0],N=v[1],j=(0,l.useState)(!1),b=j[0],w=j[1],y=(0,l.useState)(!1),_=y[0],E=y[1],k=(0,l.useContext)(m.j)[0],O=(0,h.useRouter)(),P=function(){var e,r=(e=s().mark((function e(r){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,E(!0),e.next=5,c().post("".concat(f.env.NEXT_PUBLIC_API,"/register"),{name:t,email:o,password:g});case 5:a=e.sent.data,n(""),x(""),N(""),E(!1),w(a.ok),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),u.Am.error(e.t0.response.data),E(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})),function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function i(e){p(a,r,s,i,l,"next",e)}function l(e){p(a,r,s,i,l,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}();return k&&k.token&&O.push("/"),(0,a.jsx)("div",{className:" vh-100 d-flex justify-content-center align-items-center bg-secondary",children:(0,a.jsx)(i.Z,{className:"bg-light",title:"Register your NGO",bordered:!0,style:{width:1e3,height:600},children:(0,a.jsx)(d.B,{handleSubmit:P,name:t,setName:n,email:o,setEmail:x,password:g,setPassword:N,loading:_,ok:b,setOk:w})})})}}},function(e){e.O(0,[444,723,737,774,888,179],(function(){return t=8740,e(e.s=t);var t}));var t=e.O();_N_E=t}]);