"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{651:function(e,n,t){t.d(n,{Df:function(){return u},Ph:function(){return p},TP:function(){return o},tx:function(){return d},zv:function(){return l}});var r=t(861),a=t(757),s=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="1743fd666a2c3f73019975839ce5122f",u=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},884:function(e,n,t){t.r(n);var r=t(861),a=t(439),s=t(757),c=t.n(s),i=t(651),u=t(414),o=t(791),l=t(689),d=t(87),p=t(41),f=t(184),h=(0,o.lazy)((function(){return t.e(493).then(t.bind(t,493))})),v=(0,o.lazy)((function(){return t.e(736).then(t.bind(t,736))}));n.default=function(){var e,n,t=(0,l.UO)().movieId,s=(0,o.useState)(!1),m=(0,a.Z)(s,2),x=m[0],g=m[1],j=(0,l.TH)(),w=(0,o.useState)(null),k=(0,a.Z)(w,2),b=k[0],Z=k[1],y=(0,o.useState)({}),_=(0,a.Z)(y,2),N=_[0],U=_[1],S=(0,o.useRef)(null!==(e=null===(n=j.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,(0,i.TP)(t);case 4:n=e.sent,U(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Z(e.t0.message);case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var A=N.poster_path,R=N.homepage,z=N.original_title,C=N.original_name,P=N.vote_average,T=N.overview,q=N.genres;return 0===N.length?(0,f.jsx)("h3",{className:"no-reviews",children:"Sorry, but there are no details for this movie!"}):(0,f.jsxs)("div",{children:[x&&(0,f.jsx)(u.Z,{}),null!==b&&(0,f.jsx)("p",{className:"error-bage",children:b}),(0,f.jsx)(d.rU,{className:"go-back",to:S.current,children:"Go back"}),(0,f.jsxs)("div",{className:"container-movie-details",children:[(0,f.jsx)("div",{className:"cont-img",children:(0,f.jsx)("img",{className:"img-movie-id",src:A?"".concat(p.X).concat(A):p.M,alt:R,width:"300",height:"400"})})," ",(0,f.jsxs)("div",{className:"cont-movies-info",children:[(0,f.jsx)("h2",{children:z||C}),(0,f.jsxs)("p",{children:["Raiting: ",P]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:T}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("ul",{children:q&&q.map((function(e){return(0,f.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,f.jsxs)("div",{className:"additional-info",children:[(0,f.jsx)("h3",{children:"Aditional information"}),(0,f.jsxs)("ul",{className:"list-add-info list",children:[(0,f.jsx)("li",{children:(0,f.jsx)(d.rU,{className:"go-back",to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(d.rU,{className:"go-back",to:"reviews",children:"Reviews"})})]})]}),(0,f.jsx)(o.Suspense,{fallback:(0,f.jsx)(u.Z,{}),children:(0,f.jsxs)(l.Z5,{children:[(0,f.jsx)(l.AW,{path:"cast",element:(0,f.jsx)(h,{})}),(0,f.jsx)(l.AW,{path:"reviews",element:(0,f.jsx)(v,{})})]})})]})}},41:function(e,n,t){t.d(n,{M:function(){return r},X:function(){return a}});var r="https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",a="http://image.tmdb.org/t/p/original"}}]);
//# sourceMappingURL=884.52d760a5.chunk.js.map