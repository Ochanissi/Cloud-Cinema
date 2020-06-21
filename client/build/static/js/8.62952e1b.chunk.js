(this["webpackJsonpcloud-cinema"]=this["webpackJsonpcloud-cinema"]||[]).push([[8],{104:function(e,t,a){"use strict";a.r(t);var n=a(14),c=a(15),i=a(17),r=a(16),s=a(0),l=a.n(s),o=a(20),d=a(64),m=a(65),h=a(1),u=a(12);var p=function(e){return function(t){t({type:u.a.FETCH_PEOPLE_DETAILS_START}),fetch("https://api.themoviedb.org/3/person/".concat(e,"?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(e){return e.json()})).then((function(e){return t((a=e,{type:u.a.FETCH_PEOPLE_DETAILS_SUCCESS,payload:a}));var a})).catch((function(e){return t((a=e.message,{type:u.a.FETCH_PEOPLE_DETAILS_FAILURE,payload:a}));var a}))}},E=function(e){return function(t){t({type:u.a.FETCH_PEOPLE_MOVIE_CREDITS_START}),fetch("https://api.themoviedb.org/3/person/".concat(e,"/movie_credits?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(e){return e.json()})).then((function(e){return t((a=Object(h.a)(Object(h.a)({},e.cast),e.crew),{type:u.a.FETCH_PEOPLE_MOVIE_CREDITS_SUCCESS,payload:a}));var a})).catch((function(e){return t((a=e.message,{type:u.a.FETCH_PEOPLE_MOVIE_CREDITS_FAILURE,payload:a}));var a}))}},v=function(e){return function(t){t({type:u.a.FETCH_PEOPLE_TV_CREDITS_START}),fetch("https://api.themoviedb.org/3/person/".concat(e,"/tv_credits?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(e){return e.json()})).then((function(e){return t((a=Object(h.a)(Object(h.a)({},e.cast),e.crew),{type:u.a.FETCH_PEOPLE_TV_CREDITS_SUCCESS,payload:a}));var a})).catch((function(e){return t((a=e.message,{type:u.a.FETCH_PEOPLE_TV_CREDITS_FAILURE,payload:a}));var a}))}},A=a(63),_=a(74),f=a.n(_),g=a(67),y=a.n(g),T=a(92),C=a.n(T),S=(a(93),function(e){var t=e.itemDetails,a=t.backdrop_path,n=t.poster_path,c=t.genres,i=t.title,r=t.tagline,s=t.vote_average,o=t.release_date,d=t.runtime,m=t.name,h=t.last_air_date,u=t.episode_run_time,p=t.profile_path,E=t.known_for_department,v=t.birthday,_=t.place_of_birth;c&&(c=c.map((function(e){return e.name})).slice(0,2).join(" | "));var g=o||h,T=Object(A.useMediaQuery)({maxDeviceWidth:1300})?"w780":"w1280";return l.a.createElement("div",{className:"id-header"},l.a.createElement("div",{className:"id-header__image-container"},l.a.createElement("img",{className:"id-header__image-container--image",alt:"Header Background",src:a||n?"https://image.tmdb.org/t/p/".concat(T).concat(a||n):C.a})),l.a.createElement("div",{className:"id-header__content"},l.a.createElement("div",{className:"id-header__content--col-1"},l.a.createElement("img",{className:"id-header__content--col-1--image",alt:"Featured Item",src:n||a||p?"https://image.tmdb.org/t/p/w200".concat(n||a||p):i?y.a:f.a})),l.a.createElement("div",{className:"id-header__content--col-2"},l.a.createElement("span",{className:"id-header__content--col-2--title"},i||m),r?l.a.createElement("span",{className:"id-header__content--col-2--subtitle"},r):null,l.a.createElement("span",{className:"id-header__content--col-2--subtitle"},c||"Known for: ".concat(E)),l.a.createElement("span",{className:"id-header__content--col-2--subtitle"},g?"Release date: ".concat(g?g.split("-").reverse().join("/"):null):v?"Date of birth: ".concat(v?v.split("-").reverse().join("/"):null):null),l.a.createElement("div",{className:"id-header__content--col-2--links"},_?"Place of birth: ".concat(_):d||u?"Runtime: ".concat(d||u.join("m / "),"m | Rating: ").concat(10*s,"%"):null))))}),b=(a(68),a(69)),N=a(82),w=a(66),O=(a(94),Object(o.b)((function(e){return{movieCredits:e.movie.movieCredits,movieTrailers:e.movie.movieTrailers,movieReviews:e.movie.movieReviews,TVCredits:e.tv.TVCredits,TVTrailers:e.tv.TVTrailers,TVReviews:e.tv.TVReviews,peopleMovieCredits:e.people.peopleMovieCredits,peopleTVCredits:e.people.peopleTVCredits}}))((function(e){var t,a,n,c,i=e.itemType,r=e.itemDetails,s=e.movieCredits,o=e.movieTrailers,d=e.movieReviews,m=e.TVCredits,h=e.TVTrailers,u=e.TVReviews,p=e.peopleMovieCredits,E=e.peopleTVCredits,v=r.overview,_=r.biography;"movie"===i&&(t=s,n=o,c=d,a=[]),"tv"===i&&(t=m,n=h,c=u,a=[]),"people"===i&&(t=[],Object.values(p).filter((function(e){return t.findIndex((function(t){return t.id===e.id}))<=-1&&t.push(e),null})),a=[],Object.values(E).filter((function(e){return a.findIndex((function(t){return t.id===e.id}))<=-1&&a.push(e),null})),n=[],c=[]);var f=Object(A.useMediaQuery)({maxDeviceWidth:1110}),g=Object(A.useMediaQuery)({maxDeviceWidth:950}),y=Object(A.useMediaQuery)({maxDeviceWidth:800}),T=Object(A.useMediaQuery)({maxDeviceWidth:650}),C=Object(A.useMediaQuery)({maxDeviceWidth:500}),S=C?2:y?3:g?4:f?5:6,O=T?210:y?150:g?160:f?170:210,k=T?1:g?2:3,I=C?45:T?30:y?45:37;return l.a.createElement("div",{className:"id-content"},v||_?l.a.createElement("div",{className:"id-content__summary"},l.a.createElement("h2",{className:"id-content__header--title"},v?"Summary":"Biography"),l.a.createElement("p",{className:"id-content__summary--content"},v||_)):null,t.length>0?l.a.createElement(b.c,{naturalSlideWidth:146,naturalSlideHeight:O,totalSlides:t.length,visibleSlides:S,className:"id-content__cast"},l.a.createElement("div",{className:"id-content__header"},l.a.createElement("h2",{className:"id-content__header--title"},"people"===i?"Movie Credits":"Cast"),t.length>=6?l.a.createElement("div",{className:"id-content__header--arrows"},l.a.createElement(b.a,{className:"id-content__header--arrows--prev"},"\u276e"),l.a.createElement(b.b,{className:"id-content__header--arrows--next"},"\u276f")):null),l.a.createElement(b.e,{className:"id-content__cast--content"},t.map((function(e,t){return"people"===i?l.a.createElement(b.d,{index:t,key:e.id},l.a.createElement(w.a,Object.assign({},e,{itemTypeDisc:"movie"}))):"movie"===i||"tv"===i?l.a.createElement(b.d,{index:t,key:e.id},l.a.createElement(N.a,{item:e,itemType:"people"})):null})))):null,a.length>0?l.a.createElement(b.c,{naturalSlideWidth:146,naturalSlideHeight:O,totalSlides:a.length,visibleSlides:S,className:"id-content__cast"},l.a.createElement("div",{className:"id-content__header"},l.a.createElement("h2",{className:"id-content__header--title"},"TV Shows Credits"),a.length>=6?l.a.createElement("div",{className:"id-content__header--arrows"},l.a.createElement(b.a,{className:"id-content__header--arrows--prev"},"\u276e"),l.a.createElement(b.b,{className:"id-content__header--arrows--next"},"\u276f")):null),l.a.createElement(b.e,{className:"id-content__cast--content"},a.map((function(e,t){return l.a.createElement(b.d,{index:t,key:e.id},l.a.createElement(w.a,Object.assign({},e,{itemTypeDisc:"tv"})))})))):null,n.length>0?l.a.createElement(b.c,{naturalSlideWidth:66,naturalSlideHeight:I,totalSlides:n.length,visibleSlides:k,className:"id-content__trailers"},l.a.createElement("div",{className:"id-content__header"},l.a.createElement("h2",{className:"id-content__header--title"},"Trailers"),n.length>3?l.a.createElement("div",{className:"id-content__header--arrows"},l.a.createElement(b.a,{className:"id-content__header--arrows--prev"},"\u276e"),l.a.createElement(b.b,{className:"id-content__header--arrows--next"},"\u276f")):null),l.a.createElement(b.e,{className:"id-content__trailers--content"},n.map((function(e,t){var a=e.id,n=e.key,c=e.name;return l.a.createElement(b.d,{index:t,key:a},l.a.createElement("iframe",{className:"id-content__trailers--content--video",src:"https://www.youtube.com/embed/".concat(n),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0,title:c}))})))):null,l.a.createElement("div",{className:"id-content__reviews"},l.a.createElement("div",{className:"id-content__header"},l.a.createElement("h2",{className:"id-content__header--title"},"people"===i?"Comments":"Reviews")),c.length>0?l.a.createElement("div",{className:"id-content__reviews--content"},c.map((function(e){var t=e.author,a=e.content,n=e.id,c=e.url;return l.a.createElement("div",{className:"id-content__reviews--content--review",key:n},l.a.createElement("h4",{className:"id-content__reviews--content--review--title"},t),l.a.createElement("p",{className:"id-content__reviews--content--review--content"},a.length>420?"".concat(a.slice(0,420),"..."):a),l.a.createElement("a",{className:"id-content__reviews--content--review--url",href:c,target:"_blank",rel:"noopener noreferrer"},"See full review \u203a"))}))):l.a.createElement("div",{className:"id-content__reviews--content"},l.a.createElement("div",{className:"id-content__reviews--content--review"},"There are no ","people"===i?"comments":"reviews"," for this"," ","tv"===i?"TV show":"people"===i?"person":"movie","."))))}))),k=(a(95),function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).handleDataFetch=function(t,a){return"movie"===a?e.handleMovieFetch(t):"tv"===a?e.handleTVFetch(t):"people"===a?e.handlePeopleFetch(t):void 0},e.handleMovieFetch=function(t){var a=e.props,n=a.fetchMovieDetailsStartAsync,c=a.fetchMovieCreditsStartAsync,i=a.fetchMovieTrailersStartAsync,r=a.fetchMovieReviewsStartAsync;n(t),c(t),i(t),r(t)},e.handleTVFetch=function(t){var a=e.props,n=a.fetchTVDetailsStartAsync,c=a.fetchTVCreditsStartAsync,i=a.fetchTVTrailersStartAsync,r=a.fetchTVReviewsStartAsync;n(t),c(t),i(t),r(t)},e.handlePeopleFetch=function(t){var a=e.props,n=a.fetchPeopleDetailsStartAsync,c=a.fetchPeopleMovieCreditsStartAsync,i=a.fetchPeopleTVCreditsStartAsync;n(t),c(t),i(t)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=e.id,a=e.type;this.handleDataFetch(t,a)}},{key:"componentDidUpdate",value:function(e){var t=this.props.match.params,a=t.id,n=t.type;a!==e.match.params.id&&this.handleDataFetch(a,n)}},{key:"render",value:function(){var e,t=this.props,a=t.movieDetails,n=t.TVDetails,c=t.peopleDetails,i=this.props.match.params.type;return"movie"===i&&(e=a),"tv"===i&&(e=n),"people"===i&&(e=c),l.a.createElement("div",{className:"item-details"},l.a.createElement(S,{itemDetails:e}),l.a.createElement(O,{itemDetails:e,itemType:i}))}}]),a}(l.a.Component));t.default=Object(o.b)((function(e){return{movieDetails:e.movie.movieDetails,TVDetails:e.tv.TVDetails,peopleDetails:e.people.peopleDetails}}),(function(e){return{fetchMovieDetailsStartAsync:function(t){return e(Object(d.b)(t))},fetchMovieCreditsStartAsync:function(t){return e(Object(d.a)(t))},fetchMovieTrailersStartAsync:function(t){return e(Object(d.d)(t))},fetchMovieReviewsStartAsync:function(t){return e(Object(d.c)(t))},fetchTVDetailsStartAsync:function(t){return e(Object(m.c)(t))},fetchTVCreditsStartAsync:function(t){return e(Object(m.b)(t))},fetchTVTrailersStartAsync:function(t){return e(Object(m.i)(t))},fetchTVReviewsStartAsync:function(t){return e(Object(m.g)(t))},fetchPeopleDetailsStartAsync:function(t){return e(p(t))},fetchPeopleMovieCreditsStartAsync:function(t){return e(E(t))},fetchPeopleTVCreditsStartAsync:function(t){return e(v(t))}}}))(k)},74:function(e,t){e.exports="data:image/png;base64,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"},82:function(e,t,a){"use strict";var n=a(0),c=a.n(n),i=a(7),r=a(74),s=a.n(r),l=a(67),o=a.n(l);a(83);t.a=function(e){var t=e.item,a=e.itemType,n=t.name,r=t.profile_path,l=t.poster_path,d=t.title,m=t.id;return c.a.createElement("div",{className:"id-item"},c.a.createElement(i.b,{to:"/details/".concat(a.toLowerCase(),"/").concat(m),className:"id-item__image-container"},c.a.createElement("img",{className:"id-item__image-container--image",alt:"Featured Item",src:r||l?"https://image.tmdb.org/t/p/w200".concat(r||l):d?o.a:s.a})),c.a.createElement("div",{className:"id-item__name"},n||d))}},83:function(e,t,a){},92:function(e,t,a){e.exports=a.p+"static/media/default-people.4beaeddc.png"},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}}]);
//# sourceMappingURL=8.62952e1b.chunk.js.map