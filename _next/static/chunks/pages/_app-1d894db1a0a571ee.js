(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8810:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(7821);function a(e){return"".concat(r.cG).concat(e)}},7821:function(e,t,n){"use strict";n.d(t,{px:function(){return o},Lk:function(){return i},fB:function(){return p},Pb:function(){return c},c0:function(){return l},cG:function(){return u},T5:function(){return s},Y$:function(){return d},Mv:function(){return h},O2:function(){return f},rc:function(){return m},YX:function(){return g},pc:function(){return y},Wb:function(){return v},q4:function(){return k},pD:function(){return b},fZ:function(){return w},lj:function(){return G}});var r=n(8810),a=n(6660),o="Dominic Arrojado",i="To My Valentine",p="".concat(i," | ").concat(o),c="Tug at your special someone's heartstrings by making a cute e-card just for them.",l="https://dominicarrojado.com",u="".concat(l).concat("/hashtag-interactive-valentines-day-card-app/"),s="".concat(u,"images/screenshot.png"),d=1052,h=550,f="To My Valentine",m="image/png",g=Object.values(a.A),y=[{name:a.A.TEAL,gif:(0,r.V)("images/cover-teal-cat.gif"),image:(0,r.V)("images/cover-teal-cat-mini.png"),imageAlt:"card cover with a cat and teal background"},{name:a.A.RED,gif:(0,r.V)("images/cover-red-cupcake.gif"),image:(0,r.V)("images/cover-red-cupcake-mini.png"),imageAlt:"card cover with a cupecake and red background"},{name:a.A.PINK,gif:(0,r.V)("images/cover-pink-rose.gif"),image:(0,r.V)("images/cover-pink-rose-mini.png"),imageAlt:"card cover with a rose and pink background"},{name:a.A.BLACK,gif:(0,r.V)("images/cover-black-gift.gif"),image:(0,r.V)("images/cover-black-gift-mini.png"),imageAlt:"card cover with a giftbox and black background"},{name:a.A.PURPLE,gif:(0,r.V)("images/cover-purple-pineapple.gif"),image:(0,r.V)("images/cover-purple-pineapple-mini.png"),imageAlt:"card cover with a pineapple and purple background"}],v=y[0],k=["Loved you then,\nLove you still,\nAlways have,\nAlways will.","When I say I love you\nIt's because it's true\nAnd because no one on earth\nIs as wonderful as you!","Don't take this the wrong way,\nI think that you're hot.\nYou're also very lovely,\nAnd I fancy you a lot.","A dream is a dream\nUntil it comes true.\nLove was just a word\n'Til the day I met you.","You are\nThe peanut to my butter,\nThe Twinkle in my eye,\nThe Milk to My Shake,\nThe Love of My Life."],b="id",w="I have a message for you, check it here:",G=1500},6660:function(e,t,n){"use strict";var r,a,o,i;n.d(t,{A:function(){return r},GY:function(){return a},PW:function(){return o},bg:function(){return i}}),function(e){e.TEAL="teal",e.RED="red",e.PINK="pink",e.BLACK="black",e.PURPLE="purple"}(r||(r={})),function(e){e.COVER="cover",e.TO="to",e.FROM="from",e.MESSAGE="message"}(a||(a={})),function(e){e.FACEBOOK="facebook",e.TWITTER="twitter"}(o||(o={})),function(e){e.CARD_CREATE="card_create",e.CARD_RECREATE="card_recreate",e.CARD_SHARE="card_share",e.CARD_LINK_COPY="card_link_copy",e.CARD_TEMPLATE_MESSAGE_CLICK="card_template_msg_click",e.MODAL_OPEN="modal_open"}(i||(i={}))},8e3:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},5646:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(8e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},2717:function(e,t,n){"use strict";var r=n(930);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=s,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),p=(o=n(1585))&&o.__esModule?o:{default:o},c=n(8e3),l=n(5850),u=n(5646);function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var p=a.key.slice(a.key.indexOf("$")+1);e.has(p)?o=!1:e.add(p)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,l=h.length;c<l;c++){var u=h[c];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var s=a.props[u],d=r[u]||new Set;"name"===u&&i||!d.has(s)?(d.add(s),r[u]=d):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var p=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return p["data-href"]=p.href,p.href=void 0,p["data-optimized-fonts"]=!0,i.default.cloneElement(e,p)}return i.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,n=i.useContext(c.AmpStateContext),r=i.useContext(l.HeadManagerContext);return i.default.createElement(p.default,{reduceComponentsToState:f,headManager:r,inAmpMode:u.isInAmpMode(n)},t)};t.default=m},1585:function(e,t,n){"use strict";var r=n(7980),a=n(3227),o=n(8361),i=(n(2191),n(5971)),p=n(2715),c=n(1193);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var s=function(e){i(n,e);var t=l(n);function n(e){var o;return a(this,n),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=s},5308:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(9499),a=(n(5112),n(906),n(9008)),o=n(7294);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var c={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},l=function(e,t,n){void 0===t&&(t=[]);var r=void 0===n?{}:n,a=r.defaultWidth,i=r.defaultHeight;return t.reduce((function(t,n,r){return t.push(o.createElement("meta",{key:"og:"+e+":0"+r,property:"og:"+e,content:n.url})),n.alt&&t.push(o.createElement("meta",{key:"og:"+e+":alt0"+r,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(o.createElement("meta",{key:"og:"+e+":secure_url0"+r,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(o.createElement("meta",{key:"og:"+e+":type0"+r,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(o.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:n.width.toString()})):a&&t.push(o.createElement("meta",{key:"og:"+e+":width0"+r,property:"og:"+e+":width",content:a.toString()})),n.height?t.push(o.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:n.height.toString()})):i&&t.push(o.createElement("meta",{key:"og:"+e+":height"+r,property:"og:"+e+":height",content:i.toString()})),t}),[])},u=function(e){var t,n,r,a=[];e.titleTemplate&&(c.templateTitle=e.titleTemplate);var p="";e.title?(p=e.title,c.templateTitle&&(p=c.templateTitle.replace(/%s/g,(function(){return p})))):e.defaultTitle&&(p=e.defaultTitle),p&&a.push(o.createElement("title",{key:"title"},p));var u,s,d=e.noindex||c.noindex||e.dangerouslySetAllPagesToNoIndex,h=e.nofollow||c.nofollow||e.dangerouslySetAllPagesToNoFollow,f="";if(e.robotsProps){var m=e.robotsProps,g=m.nosnippet,y=m.maxSnippet,v=m.maxImagePreview,k=m.maxVideoPreview,b=m.noarchive,w=m.noimageindex,G=m.notranslate,O=m.unavailableAfter;f=(g?",nosnippet":"")+(y?",max-snippet:"+y:"")+(v?",max-image-preview:"+v:"")+(b?",noarchive":"")+(O?",unavailable_after:"+O:"")+(w?",noimageindex":"")+(k?",max-video-preview:"+k:"")+(G?",notranslate":"")}(d||h?(e.dangerouslySetAllPagesToNoIndex&&(c.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(c.nofollow=!0),a.push(o.createElement("meta",{key:"robots",name:"robots",content:(d?"noindex":"index")+","+(h?"nofollow":"follow")+f}))):a.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),e.description&&a.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&a.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((function(e){a.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&a.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&a.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&a.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&a.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),null!=(t=e.openGraph)&&t.title||p)&&a.push(o.createElement("meta",{key:"og:title",property:"og:title",content:(null==(u=e.openGraph)?void 0:u.title)||p}));(null!=(n=e.openGraph)&&n.description||e.description)&&a.push(o.createElement("meta",{key:"og:description",property:"og:description",content:(null==(s=e.openGraph)?void 0:s.description)||e.description}));if(e.openGraph){if((e.openGraph.url||e.canonical)&&a.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var E=e.openGraph.type.toLowerCase();a.push(o.createElement("meta",{key:"og:type",property:"og:type",content:E})),"profile"===E&&e.openGraph.profile?(e.openGraph.profile.firstName&&a.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&a.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&a.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&a.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===E&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach((function(e,t){a.push(o.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))})),e.openGraph.book.isbn&&a.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&a.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach((function(e,t){a.push(o.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))}))):"article"===E&&e.openGraph.article?(e.openGraph.article.publishedTime&&a.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&a.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&a.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach((function(e,t){a.push(o.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))})),e.openGraph.article.section&&a.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach((function(e,t){a.push(o.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))}))):"video.movie"!==E&&"video.episode"!==E&&"video.tv_show"!==E&&"video.other"!==E||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach((function(e,t){e.profile&&a.push(o.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&a.push(o.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach((function(e,t){a.push(o.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach((function(e,t){a.push(o.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))})),e.openGraph.video.duration&&a.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&a.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach((function(e,t){a.push(o.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))})),e.openGraph.video.series&&a.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(c.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(c.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&a.push.apply(a,l("image",e.openGraph.images,{defaultWidth:c.defaultOpenGraphImageWidth,defaultHeight:c.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(c.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(c.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&a.push.apply(a,l("video",e.openGraph.videos,{defaultWidth:c.defaultOpenGraphVideoWidth,defaultHeight:c.defaultOpenGraphVideoHeight})),e.openGraph.locale&&a.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&a.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&a.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((function(e){var t,n,r;a.push(o.createElement("meta",i({key:"meta:"+(null!=(t=null!=(n=null!=(r=e.keyOverride)?r:e.name)?n:e.property)?t:e.httpEquiv)},e)))})),null!=(r=e.additionalLinkTags)&&r.length&&e.additionalLinkTags.forEach((function(e){var t;a.push(o.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))})),a},s=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.titleTemplate,r=e.defaultTitle,i=e.dangerouslySetAllPagesToNoIndex,p=void 0!==i&&i,c=e.dangerouslySetAllPagesToNoFollow,l=void 0!==c&&c,s=e.description,d=e.canonical,h=e.facebook,f=e.openGraph,m=e.additionalMetaTags,g=e.twitter,y=e.defaultOpenGraphImageWidth,v=e.defaultOpenGraphImageHeight,k=e.defaultOpenGraphVideoWidth,b=e.defaultOpenGraphVideoHeight,w=e.mobileAlternate,G=e.languageAlternates,O=e.additionalLinkTags,E=e.robotsProps;return o.createElement(a.default,null,u({title:t,titleTemplate:n,defaultTitle:r,dangerouslySetAllPagesToNoIndex:p,dangerouslySetAllPagesToNoFollow:l,description:s,canonical:d,facebook:h,openGraph:f,additionalMetaTags:m,twitter:g,defaultOpenGraphImageWidth:y,defaultOpenGraphImageHeight:v,defaultOpenGraphVideoWidth:k,defaultOpenGraphVideoHeight:b,mobileAlternate:w,languageAlternates:G,additionalLinkTags:O,robotsProps:E}))},t}(o.Component),d=(o.Component,Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}));new RegExp("["+Object.keys(d).join("")+"]","g");var h=n(7821),f=n(5893);function m(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(a.default,{children:[(0,f.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,f.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,f.jsx)("link",{rel:"icon",href:"".concat(h.c0,"/favicon.ico")}),(0,f.jsx)("link",{rel:"manifest",href:"".concat(h.c0,"/manifest.json")})]}),(0,f.jsx)(s,{title:h.fB,description:h.Pb,canonical:h.cG,openGraph:{url:h.cG,title:h.fB,description:h.Pb,type:"website",images:[{url:h.T5,width:h.Y$,height:h.Mv,alt:h.O2,type:h.rc}],site_name:h.px},twitter:{cardType:"summary_large_image"}})]})}var g=n(4298);function y(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(g.default,{id:"gtm",dangerouslySetInnerHTML:{__html:"\n              if (window.location.hostname !== 'localhost') {\n                (function (w, d, s, l, i) {\n                  w[l] = w[l] || [];\n                  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });\n                  var f = d.getElementsByTagName(s)[0],\n                    j = d.createElement(s),\n                    dl = l != 'dataLayer' ? '&l=' + l : '';\n                  j.async = true;\n                  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n                  f.parentNode.insertBefore(j, f);\n                })(window, document, 'script', 'dataLayer', 'GTM-TSMLTPT');\n              }\n            "}}),(0,f.jsx)("noscript",{dangerouslySetInnerHTML:{__html:'\n            <iframe\n              src="https://www.googletagmanager.com/ns.html?id=GTM-TSMLTPT"\n              height="0"\n              width="0"\n              style="display: none; visibility: hidden"\n            ></iframe>\n          '}})]})}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t=e.Component,n=e.pageProps;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(m,{}),(0,f.jsx)(y,{}),(0,f.jsx)(t,k({},n))]})}},2136:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5308)}])},5112:function(){},906:function(){},9008:function(e,t,n){e.exports=n(2717)},4298:function(e,t,n){e.exports=n(2189)},9499:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(2136),t(9898)}));var n=e.O();_N_E=n}]);