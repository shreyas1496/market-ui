(this["webpackJsonpmarket-ui"]=this["webpackJsonpmarket-ui"]||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),o=(a(83),a(59)),i=a(38),s=(a(84),a(70)),u=a(54),b=a(150),j=a(148),d=a(43);a(112),a(113);d.a.apps.length||(d.a.initializeApp({apiKey:"AIzaSyAMa3AxZtC7telPQ5brHaHWodZaoG5d8r0",authDomain:"quickynotify.firebaseapp.com",projectId:"quickynotify",storageBucket:"quickynotify.appspot.com",messagingSenderId:"960543983205",appId:"1:960543983205:web:65c7260dc369d72c71e88c",measurementId:"G-5LVNTZHCYL"}),d.a.analytics());var v=d.a,g=a(8),p=v.messaging();p.onMessage((function(e){console.log("Message received. ",e),new Notification(e.notification.title,{body:e.notification.body})}));var O=function(e){var t=e.setToken,a=Notification.permission,c=Object(n.useState)("granted"===a),r=Object(i.a)(c,2),l=r[0],o=r[1],s=Object(n.useCallback)((function(){p.getToken().then((function(e){o(!0),t(e)})).catch((function(e){console.log(e),o(!1)}))}),[t]);return Object(n.useEffect)((function(){"granted"===a&&s()}),[a,s]),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(b.a,{control:Object(g.jsx)(j.a,{checked:l,onChange:s,name:"checkedA"}),label:"Notifications"})})},f=a(149),h=a(147),m=[{key:"name",label:"Name"},{key:"prevClose",label:"Prev Close"},{key:"ltp",label:"ltp",cell:function(e){return Object(g.jsx)("div",{style:{backgroundColor:e.ltp>e.prevClose?"green":"red"},children:e.ltp})}},{key:"movingAverageValues[0].value",label:"44 - avg"},{key:"movingAverageValues[0].leads",label:"44 - leads"},{key:"movingAverageValues[1].value",label:"20 - avg"},{key:"movingAverageValues[1].leads",label:"20 - leads"},{key:"movingAverageValues[2].value",label:"10 - avg"},{key:"movingAverageValues[2].leads",label:"10 - leads"}];var k=function(){var e=Object(n.useState)("0"),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),b=l[0],j=l[1],d=Object(n.useState)(""),v=Object(i.a)(d,2),p=v[0],k=v[1],y=Object(s.a)("".concat(window.location.origin,"/market-api/data"),{},[]),x=y.loading,C=y.error,A=y.data,N=void 0===A?[]:A,I=y.post,S=Object(n.useMemo)((function(){var e=N.filter((function(e){var t=e.name;return!p||t.includes(p.toUpperCase())})).map((function(e){var t=Math.abs(e.ltp-Object(u.get)(e,"movingAverageValues[".concat(a,"].value")))/e.ltp;return Object(o.a)(Object(o.a)({},e),{},{closeNess:t})}));return Object(u.orderBy)(e,"closeNess","asc")}),[a,N,p]),V=Object(n.useCallback)((function(){var e=setInterval((function(){return I("?date=".concat(Date.now()),{"fcm-token":b})}),2e4);return function(){return clearInterval(e)}}),[b,I]);return Object(n.useEffect)(V,[V]),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)(O,{setToken:j}),Object(g.jsxs)(h.a,{value:a,onChange:function(e){return c(e.target.value)},children:[Object(g.jsx)("option",{value:"0",children:"44"}),Object(g.jsx)("option",{value:"1",children:"20"}),Object(g.jsx)("option",{value:"2",children:"10"})]}),Object(g.jsx)(f.a,{label:"Filter",onChange:function(e){return k(e.target.value)},value:p})]}),Object(g.jsxs)("section",{className:"tables",children:[C&&"Error!",x&&"Loading...",Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{children:Object(g.jsx)("tr",{children:m.map((function(e){var t=e.key,a=e.label;return Object(g.jsx)("th",{children:a},t)}))})}),Object(g.jsx)("tbody",{children:S.map((function(e){return Object(g.jsx)("tr",{children:m.map((function(t){var a=t.key,n=t.cell;return Object(g.jsx)("td",{children:n?n(e):Object(u.get)(e,a)},a)}))},e.name)}))})]})]})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,152)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))},x=a(69),C=a.n(x),A=a(146),N=C()({palette:{type:"dark"}});l.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(A.a,{theme:N,children:Object(g.jsx)(k,{})})}),document.getElementById("root")),y()},83:function(e,t,a){},84:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.f198047a.chunk.js.map