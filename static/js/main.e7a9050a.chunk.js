(this["webpackJsonphomeworks-lifecycle-http-watches"]=this["webpackJsonphomeworks-lifecycle-http-watches"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),r=(n(12),n(7)),u=n(2),o=(n(13),n(0)),l=function(e){return Object(o.jsxs)("form",{className:"DataForm",onSubmit:function(t){t.preventDefault(),e.addWatch()},children:[Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)("div",{className:"title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(o.jsx)("div",{className:"input",children:Object(o.jsx)("input",{value:e.titleValue,onChange:function(t){var n=t.target.value;e.onTitleChange(n)},required:!0})})]}),Object(o.jsxs)("div",{className:"block",children:[Object(o.jsx)("div",{className:"title",children:"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0437\u043e\u043d\u0430"}),Object(o.jsx)("div",{className:"input",children:Object(o.jsx)("input",{type:"number",value:e.timeValue,onChange:function(t){var n=t.target.value;e.onTimeChange(n)},required:!0})})]}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)("div",{className:"submit",children:Object(o.jsx)("button",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})})]})},j=function(e,t){return 30*e+.5*t},d=function(e,t){return 6*e+.1*t},b=function(e){return 6*e},m=function(e){var t,n=e.item,c=n.id,i=n.title,s=n.time,r=a.a.useState((new Date).getUTCHours()+Number(s)),l=Object(u.a)(r,2),m=l[0],h=l[1],f=a.a.useState((new Date).getUTCMinutes()),O=Object(u.a)(f,2),v=O[0],x=O[1],g=a.a.useState((new Date).getUTCSeconds()),N=Object(u.a)(g,2),p=N[0],C=N[1],w=function(){h((new Date).getUTCHours()+Number(s)),x((new Date).getUTCMinutes()),C((new Date).getUTCSeconds())};a.a.useEffect((function(){return w(),t=setTimeout(w,1e3),function(){clearTimeout(t)}}));return Object(o.jsxs)("div",{className:"Watch",children:[Object(o.jsx)("button",{onClick:function(){return function(t){e.removeItem(t)}(c)},className:"watch_remove",children:"x"}),Object(o.jsx)("div",{className:"watch_title",children:i}),Object(o.jsxs)("div",{className:"circle",children:[Object(o.jsx)("div",{className:"hours",style:{transform:"rotate(".concat(j(m,v),"deg)")}}),Object(o.jsx)("div",{className:"minutes",style:{transform:"rotate(".concat(d(v,p),"deg)")}}),Object(o.jsx)("div",{className:"seconds",style:{transform:"rotate(".concat(b(p),"deg)")}})]})]})};var h=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),j=s[0],d=s[1],b=Object(c.useState)([]),h=Object(u.a)(b,2),f=h[0],O=h[1],v=Object(c.useState)(1),x=Object(u.a)(v,2),g=x[0],N=x[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{titleValue:n,timeValue:j,onTitleChange:function(e){a(e)},onTimeChange:function(e){d(e)},addWatch:function(){var e={id:g,title:n,time:j};N((function(e){return e+1})),O((function(t){return[].concat(Object(r.a)(t),[e])})),a(""),d("")}}),Object(o.jsx)("div",{className:"Wathes",children:f.map((function(e){return Object(o.jsx)(m,{item:e,removeItem:function(){return t=e.id,void O((function(e){return e.filter((function(e){return e.id!==t}))}));var t}},e.id)}))})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.e7a9050a.chunk.js.map