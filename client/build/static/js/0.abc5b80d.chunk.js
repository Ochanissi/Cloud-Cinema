(this["webpackJsonpcloud-cinema"]=this["webpackJsonpcloud-cinema"]||[]).push([[0],{64:function(t,e,n){"use strict";n.d(e,"j",(function(){return r})),n.d(e,"g",(function(){return c})),n.d(e,"f",(function(){return o})),n.d(e,"h",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return E})),n.d(e,"i",(function(){return d})),n.d(e,"k",(function(){return l}));var a=n(3);var r=function(){return function(t){t({type:a.a.FETCH_MOVIES_UPCOMING_START}),fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_MOVIES_UPCOMING_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_MOVIES_UPCOMING_FAILURE,payload:n}));var n}))}},c=function(){return function(t){t({type:a.a.FETCH_MOVIES_POPULAR_START}),fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_MOVIES_POPULAR_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_MOVIES_POPULAR_FAILURE,payload:n}));var n}))}},o=function(){return function(t){t({type:a.a.FETCH_MOVIES_NOWPLAYING_START}),fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_MOVIES_NOWPLAYING_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_MOVIES_NOWPLAYING_FAILURE,payload:n}));var n}))}},i=function(){return function(t){t({type:a.a.FETCH_MOVIES_TOPRATED_START}),fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_MOVIES_TOPRATED_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_MOVIES_TOPRATED_FAILURE,payload:n}));var n}))}},u=function(){return function(t){t({type:a.a.FETCH_MOVIES_GENRE_START}),fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(e){return t((n=e.genres,{type:a.a.FETCH_MOVIES_GENRE_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_MOVIES_GENRE_FAILURE,payload:n}));var n}))}},s=function(t){return function(e){e({type:a.a.FETCH_MOVIE_DETAILS_START}),fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(t){return e((n=t,{type:a.a.FETCH_MOVIE_DETAILS_SUCCESS,payload:n}));var n})).catch((function(t){return e((n=t.message,{type:a.a.FETCH_MOVIE_DETAILS_FAILURE,payload:n}));var n}))}},f=function(t){return function(e){e({type:a.a.FETCH_MOVIE_CREDITS_START}),fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(t){return e((n=t.cast,{type:a.a.FETCH_MOVIE_CREDITS_SUCCESS,payload:n}));var n})).catch((function(t){return e((n=t.message,{type:a.a.FETCH_MOVIE_CREDITS_FAILURE,payload:n}));var n}))}},p=function(t){return function(e){e({type:a.a.FETCH_MOVIE_TRAILERS_START}),fetch("https://api.themoviedb.org/3/movie/".concat(t,"/videos?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(t){return e((n=t.results,{type:a.a.FETCH_MOVIE_TRAILERS_SUCCESS,payload:n}));var n})).catch((function(t){return e((n=t.message,{type:a.a.FETCH_MOVIE_TRAILERS_FAILURE,payload:n}));var n}))}},E=function(t){return function(e){e({type:a.a.FETCH_MOVIE_REVIEWS_START}),fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(t){return e((n=t.results,{type:a.a.FETCH_MOVIE_REVIEWS_SUCCESS,payload:n}));var n})).catch((function(t){return e((n=t.message,{type:a.a.FETCH_MOVIE_REVIEWS_FAILURE,payload:n}));var n}))}},d=function(){return function(t){t({type:a.a.FETCH_MOVIES_TRENDING_START}),fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_MOVIES_TRENDING_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_MOVIES_TRENDING_FAILURE,payload:n}));var n}))}},l=function(t){return function(e){e({type:a.a.FETCH_MULTI_SEARCH_START}),fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.json()})).then((function(t){return e((n=t.results,{type:a.a.FETCH_MULTI_SEARCH_SUCCESS,payload:n}));var n})).catch((function(t){return e((n=t.message,{type:a.a.FETCH_MULTI_SEARCH_FAILURE,payload:n}));var n}))}}},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return o})),n.d(e,"h",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return f})),n.d(e,"i",(function(){return p})),n.d(e,"g",(function(){return E})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return l}));var a=n(4);var r=function(){return function(t){t({type:a.a.FETCH_TV_AIRINGTODAY_START}),fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_TV_AIRINGTODAY_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_TV_AIRINGTODAY_FAILURE,payload:n}));var n}))}},c=function(){return function(t){t({type:a.a.FETCH_TV_POPULAR_START}),fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_TV_POPULAR_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_TV_POPULAR_FAILURE,payload:n}));var n}))}},o=function(){return function(t){t({type:a.a.FETCH_TV_ONTHEAIR_START}),fetch("https://api.themoviedb.org/3/tv/on_the_air?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_TV_ONTHEAIR_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_TV_ONTHEAIR_FAILURE,payload:n}));var n}))}},i=function(){return function(t){t({type:a.a.FETCH_TV_TOPRATED_START}),fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_TV_TOPRATED_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_TV_TOPRATED_FAILURE,payload:n}));var n}))}},u=function(){return function(t){t({type:a.a.FETCH_TV_GENRE_START}),fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(e){return t((n=e.genres,{type:a.a.FETCH_TV_GENRE_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_TV_GENRE_FAILURE,payload:n}));var n}))}},s=function(t){return function(e){e({type:a.a.FETCH_TV_DETAILS_START}),fetch("https://api.themoviedb.org/3/tv/".concat(t,"?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(t){return e((n=t,{type:a.a.FETCH_TV_DETAILS_SUCCESS,payload:n}));var n})).catch((function(t){return e((n=t.message,{type:a.a.FETCH_TV_DETAILS_FAILURE,payload:n}));var n}))}},f=function(t){return function(e){e({type:a.a.FETCH_TV_CREDITS_START}),fetch("https://api.themoviedb.org/3/tv/".concat(t,"/credits?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(t){return e((n=t.cast,{type:a.a.FETCH_TV_CREDITS_SUCCESS,payload:n}));var n})).catch((function(t){return e((n=t.message,{type:a.a.FETCH_TV_CREDITS_FAILURE,payload:n}));var n}))}},p=function(t){return function(e){e({type:a.a.FETCH_TV_TRAILERS_START}),fetch("https://api.themoviedb.org/3/tv/".concat(t,"/videos?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(t){return e((n=t.results,{type:a.a.FETCH_TV_TRAILERS_SUCCESS,payload:n}));var n})).catch((function(t){return e((n=t.message,{type:a.a.FETCH_TV_TRAILERS_FAILURE,payload:n}));var n}))}},E=function(t){return function(e){e({type:a.a.FETCH_TV_REVIEWS_START}),fetch("https://api.themoviedb.org/3/tv/".concat(t,"/reviews?api_key=").concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US")).then((function(t){return t.json()})).then((function(t){return e((n=t.results,{type:a.a.FETCH_TV_REVIEWS_SUCCESS,payload:n}));var n})).catch((function(t){return e((n=t.message,{type:a.a.FETCH_TV_REVIEWS_FAILURE,payload:n}));var n}))}},d=function(){return function(t){t({type:a.a.FETCH_TV_TRENDING_START}),fetch("https://api.themoviedb.org/3/trending/tv/week?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_TV_TRENDING_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_TV_TRENDING_FAILURE,payload:n}));var n}))}},l=function(){return function(t){t({type:a.a.FETCH_TV_TRENDING_TODAY_START}),fetch("https://api.themoviedb.org/3/trending/tv/day?api_key=".concat("6e6fc0031703aad2a1bbf10e51f05d4c","&language=en-US&page=1")).then((function(t){return t.json()})).then((function(e){return t((n=e.results,{type:a.a.FETCH_TV_TRENDING_TODAY_SUCCESS,payload:n}));var n})).catch((function(e){return t((n=e.message,{type:a.a.FETCH_TV_TRENDING_TODAY_FAILURE,payload:n}));var n}))}}},66:function(t,e,n){"use strict";var a=n(14),r=n(15),c=n(17),o=n(16),i=n(0),u=n.n(i),s=n(20),f=n(7),p=n(6),E=n(67),d=n.n(E),l=n(23),h=(n(76),function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).handleWatched=function(e){if(e.preventDefault(),t.props.currentUser){var n=t.props,a=n.postUserWatchedStartAsync,r=n.deleteUserWatchedStartAsync,c=n.watchedHistory,o=n.id,i=n.currentUser.email,u=n.itemType,s=n.itemTypeDisc,f=n.title,E=n.name,d=n.poster_path,l=n.backdrop_path,h=n.vote_average,_=n.url,T=n.type||s||s||u,S=f||E,y=_||d||l,m=n.rating||h||0;(c.find((function(t){return t.id===o.toString()}))||{}).id?r(o,i):a(o,i,T,S,y,m)}else p.a.fail("Please sign in to add to watched history!",1e3)},t.handleCollection=function(e){if(e.preventDefault(),t.props.currentUser){var n=t.props,a=n.postUserCollectionStartAsync,r=n.deleteUserCollectionStartAsync,c=n.collection,o=n.id,i=n.currentUser.email,u=n.itemType,s=n.itemTypeDisc,f=n.title,E=n.name,d=n.poster_path,l=n.backdrop_path,h=n.vote_average,_=n.url,T=n.type||s||s||u,S=f||E,y=_||d||l,m=n.rating||h||0;(c.find((function(t){return t.id===o.toString()}))||{}).id?r(o,i):a(o,i,T,S,y,m)}else p.a.fail("Please sign in to add to collection!",1e3)},t.handleWatchlist=function(e){if(e.preventDefault(),t.props.currentUser){var n=t.props,a=n.postUserWatchlistStartAsync,r=n.deleteUserWatchlistStartAsync,c=n.watchlist,o=n.id,i=n.currentUser.email,u=n.itemType,s=n.itemTypeDisc,f=n.title,E=n.name,d=n.poster_path,l=n.backdrop_path,h=n.vote_average,_=n.url,T=n.type||s||s||u,S=f||E,y=_||d||l,m=n.rating||h||0;(c.find((function(t){return t.id===o.toString()}))||{}).id?r(o,i):a(o,i,T,S,y,m)}else p.a.fail("Please sign in to add to watchlist!",1e3)},t.handleRate=function(e){e.preventDefault(),t.props.currentUser?p.a.success("Thank you for the rating!",1e3):p.a.fail("Please sign in to rate!",1e3)},t}return Object(r.a)(n,[{key:"render",value:function(){var t,e,n,a=this.props,r=a.currentUser,c=a.watchedHistory,o=a.collection,i=a.watchlist,s=a.vote_average,p=a.poster_path,E=a.backdrop_path,l=a.id,h=a.itemType,_=a.itemTypeDisc,T=a.discover,S=a.rating,y=a.type,m=a.url;return r&&(t=c.some((function(t){return t.id===l.toString()})),e=o.some((function(t){return t.id===l.toString()})),n=i.some((function(t){return t.id===l.toString()}))),u.a.createElement("div",{className:"featured-item"},u.a.createElement(f.b,{to:"/details/".concat(y||_||_||h,"/").concat(l),className:"featured-item--image-container"},u.a.createElement("img",{className:"featured-item--image ".concat(T?"featured-item--image--disc":null),alt:"Featured Item",src:m||p||E?"https://image.tmdb.org/t/p/w200".concat(m||p||E):d.a})),u.a.createElement("div",{className:"featured-item--content"},u.a.createElement("div",{className:"featured-item--content--history"},u.a.createElement("button",{onClick:this.handleWatched,className:"featured-item--content--history--button ".concat(t?"featured-item--content--history--bool":"null")},u.a.createElement("ion-icon",{name:"checkmark-circle"})),u.a.createElement("span",{className:"featured-item--content--history--text"},t?"Remove from":"Add to"," watched history")),u.a.createElement("div",{className:"featured-item--content--collection"},u.a.createElement("button",{onClick:this.handleCollection,className:"featured-item--content--collection--button ".concat(e?"featured-item--content--collection--bool":"null")},u.a.createElement("ion-icon",{name:"file-tray-full"})),u.a.createElement("span",{className:"featured-item--content--collection--text"},e?"Remove from":"Add to"," collection")),u.a.createElement("div",{className:"featured-item--content--watchlist"},u.a.createElement("button",{onClick:this.handleWatchlist,className:"featured-item--content--watchlist--button ".concat(n?"featured-item--content--watchlist--bool":"null")},u.a.createElement("ion-icon",{name:"time"})),u.a.createElement("span",{className:"featured-item--content--watchlist--text"},n?"Remove from":"Add to"," watchlist")),u.a.createElement("div",{className:"featured-item--content--like"},u.a.createElement("span",{className:"featured-item--content--rating"},s?"".concat(parseInt(10*s),"%"):S?"".concat(parseInt(10*S),"%"):"N/A"),u.a.createElement("div",{className:"featured-item--content--rate"},u.a.createElement("button",{onClick:this.handleRate,className:"featured-item--content--rate--button"},u.a.createElement("ion-icon",{name:"heart"})),u.a.createElement("span",{className:"featured-item--content--rate--text"},"Rate this")))))}}]),n}(u.a.Component));e.a=Object(s.b)((function(t){return{itemType:t.user.itemType,currentUser:t.user.currentUser,watchedHistory:t.user.watchedHistory,collection:t.user.collection,watchlist:t.user.watchlist}}),(function(t){return{postUserWatchedStartAsync:function(e,n,a,r,c,o){return t(Object(l.h)(e,n,a,r,c,o))},deleteUserWatchedStartAsync:function(e,n){return t(Object(l.b)(e,n))},postUserCollectionStartAsync:function(e,n,a,r,c,o){return t(Object(l.g)(e,n,a,r,c,o))},deleteUserCollectionStartAsync:function(e,n){return t(Object(l.a)(e,n))},postUserWatchlistStartAsync:function(e,n,a,r,c,o){return t(Object(l.i)(e,n,a,r,c,o))},deleteUserWatchlistStartAsync:function(e,n){return t(Object(l.c)(e,n))}}}))(h)},67:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAEsBAMAAAB01OGNAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAtUExURerq6svLy8fHx8/Pz+jo6NPT08bGxuLi4t7e3sPDw8rKys7Ozu3t7djY2M3NzVAueEoAAASuSURBVHja7Z2BZxxpGMYHcwI9rHPF1OEGo45Db6xzNxIfvtpDDtdcTu5OsHNuSMnBbexxLWUbHa0tiuqimEQrplpilepKFAUsmiZpa0lgVaur+Rv6fTNbQN5v5nu703b7PhJZvPaXJ/u+7/PNBzE4r49QPJHBCxBBCEIQghCEIAQhCEEIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghDk/UEqeaQJ+Wkvj87rQZZny+WZ2axfT00dyHSjPJtD3+tBdguAsCIg09vlHHJf6EG2jh0cdIQ2DyAN0pL1NT3Ifr/TdoW8DqRhyZQehO33XbcUx9EXLqQpS5T0XU/biduZD8PmdhukPAvDvT/bCEhfzDFbgqx4GzXOJ7YxEFe++BmCTN2TJQ0MpJ0Rsox1wtQQtkxOCnPSrimdvGbo7npar1cafWgW716o1/+bwUC8KbH7BuDAe2JDDjzMWnHlCnRhecmWxEAyiyCFQby32Xe40t7AtPBmp6Nq4SSEUU7mwjDc7quSsYkaxv65I0eMs2DIb0wbholORvb5qBdkUXky+lX/ySVjA3u442ALe69FeFZwyagexufoYZSLyWuDy6sjatqotTJcTMrdRclIkA8VUkQLe/JSwgWHsS1KZlDHVHngro/6wJ3h0WED+egw6PSTVX8MuJBYf5ms+sGm5o1EL45XE8g3MaDbsuRSHB/Xc9KLhpCvAYa1lkKs45pOotIQUjpcVuoksrSdZIGsoSDSya3kIAE7MTg3UE4imfFLEQiRGb+PcRJNihvfXyBI6db83t7uCYwTSzZQBELSJishnCRvATKS32MlKiGcZBfGyaghY+ZE/cEPSxBOrLQ/Vd0VWxgn0XMRvydAK5GM31eoiU/iF1wrN2T8bmEm/k6NGeZJeEEy0+SXsVt4PPJklZzkdaKI369kLaq7oh3OzSUQckPGL2pOovJulomfXcc4sSwRrIrdZUUl/fjNs4UpGcmJhpMV27YVLSwqbFTGx1+KSbuvHsZXqInf4abZUKwVxie2MBN/R75QxS/lCTnRdsJOquNX38kT37Z/NQxzy7cPl/PX+QfGxI+2c+2hFuS3IAjktYoTQPLFpciK+KkLEQ6St7EhOWmJg4BkFkHGC+IouytpQBTEWWi1WldgC6KihWphf1WchY+CEF8cl2duYiCnH3W73f8hK87fZ7rdhz0fAalybrLPQMiiKOEXMZDTScaDkG/l9kVDmALC3wWEFwEZuZOq2ski/jOR98L/qrqLc1QL+3PiCqgHxu8/4iLp7HcYSJC8D7i8/LQEs7uCdP2p4jegPCHIBwop4gQphixwHDh+AyfwHVTGT4Zh8xRopToXhstHUbvrnGEYqow3jIneRxG/45GMhTkZ+WdSrSn/XIsGPuMZ4w24hWuMVU6h5mSy2Wz+AWZ8db7Z3MUN44JcTL7q8QQZv8HCgjLjr15FLcj0GSqAlT6PaUPsPNKE/N7Ko+t6kB+KgOR0oncV9TgX5JrepdrSSvaThOPvcB0Ir4R5xPUg3OTZZepC3pUIQhCCEIQgBCEIQQhCEIIQhCAEIQhBCEIQghCEIAQhCEEIQhCCEIQgYwEZ7b99rYjvN4EKGyoX9+pBAAAAAElFTkSuQmCC"},76:function(t,e,n){}}]);
//# sourceMappingURL=0.abc5b80d.chunk.js.map