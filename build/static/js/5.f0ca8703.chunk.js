(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[5],{43:function(t,e,r){t.exports=r(47)},44:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},47:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(M){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,i=Object.create(o.prototype),a=new D(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?v:f,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(M){return{type:"throw",arg:M}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",v="completed",d={};function m(){}function y(){}function g(){}var j={};j[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(E([])));w&&w!==r&&n.call(w,i)&&(j=w);var O=g.prototype=m.prototype=Object.create(j);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function E(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=O.constructor=g,g.constructor=y,y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),s(O,c,"Generator"),O[i]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,D.prototype={constructor:D,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:E(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},78:function(t,e,r){t.exports={MovieDetailsPageWrap:"MovieDetailsPage_MovieDetailsPageWrap__QfFOd",MovieDetailsPage:"MovieDetailsPage_MovieDetailsPage__1_97L",MovieDetailsPageInfo:"MovieDetailsPage_MovieDetailsPageInfo__29kAq",Genre:"MovieDetailsPage_Genre__BSpdv",NavLink:"MovieDetailsPage_NavLink__LRX48"}},79:function(t,e,r){t.exports={Cast:"Cast_Cast__1sx6z"}},80:function(t,e,r){t.exports={Reviews:"Reviews_Reviews__1TG9u"}},81:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.r(e),r.d(e,"default",(function(){return D}));var a=r(43),c=r.n(a),s=r(44),u=r(16),l=r(17),h=r(19),f=r(18),p=r(0),v=r(9),d=r(2),m=r(78),y=r.n(m),g=r(79),j=r.n(g),b=r(45),w=r.n(b),O=r(1),x=function(t){Object(h.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={casts:[]},t}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var t=Object(s.a)(c.a.mark((function t(){var e,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.movieId,t.next=3,w.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("68bc44794965f90c41d1f35ad9bb144b"));case 3:r=t.sent,console.log(r.data,"response casts"),this.setState({casts:r.data.cast});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.props,"cast ");var t=this.state.casts;return Object(O.jsx)("div",{children:0===t.length?Object(O.jsx)("h3",{children:"We don`t have this information"}):Object(O.jsx)("ul",{className:j.a.Cast,children:t.slice(0,6).map((function(t){return Object(O.jsxs)("li",{children:[t.name,Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),width:"100px",alt:t.name})]},t.id)}))})})}}]),r}(p.Component),_=r(80),L=r.n(_),P=function(t){Object(h.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={reviews:[]},t}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var t=Object(s.a)(c.a.mark((function t(){var e,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.movieId,t.next=3,w.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("68bc44794965f90c41d1f35ad9bb144b","&page=1"));case 3:r=t.sent,console.log(r.data.results,"reviews"),this.setState({reviews:r.data.results});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.reviews;return console.log(t,"reviews"),Object(O.jsx)("div",{className:L.a.Reviews,children:0===t.length?Object(O.jsx)("h3",{children:"We don`t habe any reviews"}):Object(O.jsx)("ul",{children:t.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsx)("h4",{children:t.author}),Object(O.jsx)("p",{children:t.content.split("").slice(0,300).join("")+"..."})]})}))})})}}]),r}(p.Component),k="68bc44794965f90c41d1f35ad9bb144b",D=function(t){Object(h.a)(r,t);var e=Object(f.a)(r);function r(){var t;Object(u.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={movieId:null,movieTitle:null,movieGenres:[],movieOverview:null,moviePoster:null,movieData:null,movieVote:null},t}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var t=Object(s.a)(c.a.mark((function t(){var e,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,console.log(this.props.match,"url MovieDetail"),t.next=4,w.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(k,"&language=en-US"));case 4:r=t.sent,this.setState({movieId:r.data.id,movieTitle:r.data.title,movieGenres:r.data.genres,movieOverview:r.data.overview,moviePoster:r.data.poster_path,movieData:r.data.release_date,movieVote:r.data.vote_average});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.movieId,r=t.movieTitle,n=t.movieGenres,o=t.movieOverview,a=t.moviePoster,c=t.movieData,s=t.movieVote;return Object(O.jsxs)("div",{className:y.a.MovieDetailsPageWrap,children:[Object(O.jsxs)("div",{className:y.a.MovieDetailsPage,children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a,"?api_key=").concat(k),width:"300px"}),Object(O.jsxs)("div",{className:y.a.MovieDetailsPageInfo,children:[Object(O.jsxs)("h1",{children:[r," "]}),Object(O.jsx)("h2",{children:"Overview"}),Object(O.jsx)("p",{children:o}),Object(O.jsx)("h2",{children:"Release data"}),Object(O.jsx)("p",{children:c}),Object(O.jsx)("h2",{children:"Vote"}),Object(O.jsx)("p",{children:s}),Object(O.jsx)("h2",{children:"Genres"}),Object(O.jsx)("ul",{className:y.a.Genre,children:n.map((function(t){return Object(O.jsx)("li",{children:t.name},t.id)}))})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:" More info..."}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(v.c,{exact:!0,to:"".concat(this.props.match.path,"/cast"),className:y.a.NavLink,activeClassName:"NavLink-active",children:"Cast"})}),Object(O.jsx)("li",{children:Object(O.jsx)(v.c,{exact:!0,to:"".concat(this.props.match.path,"/reviews"),className:y.a.NavLink,activeClassName:"NavLink-active",children:"Reviews"})})]})]}),Object(O.jsx)(d.a,{exact:!0,path:"".concat(this.props.match.path,"/cast"),render:function(t){return Object(O.jsx)(x,i(i({},t),{},{movieId:e}))}}),Object(O.jsx)(d.a,{exact:!0,path:"".concat(this.props.match.path,"/reviews"),render:function(t){return Object(O.jsx)(P,i(i({},t),{},{movieId:e}))}})]})}}]),r}(p.Component)}}]);
//# sourceMappingURL=5.f0ca8703.chunk.js.map