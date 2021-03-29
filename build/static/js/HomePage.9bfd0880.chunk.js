(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[2],{39:function(e,t,n){"use strict";var r=n(40),a=n.n(r),c=n(41),i=n(42),o=n.n(i),s="https://api.themoviedb.org/3/",u="68bc44794965f90c41d1f35ad9bb144b",p={getPopularMovie:function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(s,"/trending/all/day?api_key=").concat(u)).then((function(e){return e.data.results})).catch((function(e){return console.error(e.message)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchMovieByName:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(s,"search/movie?query=").concat(t,"&api_key=").concat(u)).then((function(e){return e.data.results})).catch((function(e){return console.error(e.message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getMovieDetailPage:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(s,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US")).catch((function(e){return console.error(e.message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getCast:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(s,"movie/").concat(t,"/credits?api_key=").concat(u)).then((function(e){return e.data.cast})).catch((function(e){return console.error(e.message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getReviews:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("".concat(s,"movie/").concat(t,"/reviews?api_key=").concat(u)).then((function(e){return e.data.results})).catch((function(e){return console.error(e.message)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=p},43:function(e,t,n){e.exports={MoviesList:"MoviesList_MoviesList__1o2vk"}},44:function(e,t,n){e.exports={MoviePreviewThumb:"MoviePreview_MoviePreviewThumb__1B5rC",MoviePreviewTitle:"MoviePreview_MoviePreviewTitle__163w9"}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(43),a=n.n(r),c=n(9),i=n(15),o=n(16),s=n(18),u=n(17),p=n(0),v=n(44),f=n.n(v),l=n.p+"static/media/default-img.10395f63.jpeg",h=n(1),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.imgUrl,r="https://image.tmdb.org/t/p/w500/".concat(n);return Object(h.jsxs)("div",{className:f.a.MoviePreviewThumb,children:[Object(h.jsx)("img",{className:f.a.moviePoster,alt:t,src:null!==n?r:this.props.imgSrc,width:"200px"}),Object(h.jsx)("h2",{className:f.a.MoviePreviewTitle,children:t})]})}}]),n}(p.Component),b=m;m.defaultProps={imgSrc:l};var d=function(e){var t=e.movies,n=e.location;return Object(h.jsx)("ul",{className:a.a.MoviesList,children:t.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(c.b,{to:{pathname:"movies/".concat(e.id),state:{from:n}},children:Object(h.jsx)(b,{title:e.title,imgUrl:e.poster_path})})},e.id)}))})}},97:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n(15),a=n(16),c=n(18),i=n(17),o=n(0),s=n(39),u=n(46),p=n(1),v=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={movies:[]},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;s.a.getPopularMovie().then((function(t){e.setState({movies:t})}))}},{key:"render",value:function(){var e=this.state.movies;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Today such films are popular: "}),Object(p.jsx)(u.a,{movies:e})]})}}]),n}(o.Component)}}]);
//# sourceMappingURL=HomePage.9bfd0880.chunk.js.map