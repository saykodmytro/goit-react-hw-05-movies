"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{651:function(e,r,t){t.d(r,{Df:function(){return i},Ph:function(){return f},TP:function(){return o},tx:function(){return p},zv:function(){return l}});var n=t(861),a=t(757),u=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="1743fd666a2c3f73019975839ce5122f",i=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(s));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(r,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},134:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(651),i=t(414),o=t(791),l=t(87),p=t(689),f=t(184);r.default=function(){var e=(0,o.useState)(null),r=(0,a.Z)(e,2),t=r[0],u=r[1],v=(0,o.useState)(!1),m=(0,a.Z)(v,2),h=m[0],d=m[1],x=(0,o.useState)(null),k=(0,a.Z)(x,2),b=k[0],g=k[1],y=(0,l.lr)(),w=(0,a.Z)(y,2),Z=w[0],_=w[1],j=(0,p.TH)(),N=(0,o.useRef)([]),S=Z.get("query");return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,S){e.next=3;break}return e.abrupt("return");case 3:return d(!0),e.next=6,(0,s.Ph)(S);case 6:r=e.sent,u(r),N.current=r,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error: ",e.t0),g(e.t0.message);case 15:return e.prev=15,d(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]),(0,f.jsxs)("div",{children:[(0,f.jsx)("form",{onSubmit:function(e){e.preventDefault();var r=e.currentTarget.elements.moviesName.value;if(""===r.trim())return alert("Sorry can not be empty");_({query:r})},children:(0,f.jsxs)("label",{className:"label",children:[(0,f.jsx)("input",{className:"input",type:"text",placeholder:"Search",name:"moviesName"}),(0,f.jsx)("button",{className:"go-back",children:"Search"})]})}),(0,f.jsxs)("div",{children:[h&&(0,f.jsx)(i.Z,{}),null!==b&&(0,f.jsx)("p",{className:"error-bage",children:b}),(0,f.jsx)("ul",{className:"list-movies",children:null!==t&&t.map((function(e){var r=e.id,t=e.original_title,n=e.original_name;return(0,f.jsx)("li",{className:"item-list-movies",children:(0,f.jsx)(l.rU,{state:{from:j},to:"/movies/".concat(r),children:t||n})},r)}))})]})]})}}}]);
//# sourceMappingURL=134.11b9d3c2.chunk.js.map