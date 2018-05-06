webpackHotUpdate(0,{

/***/ 16:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/kevin/Projects/quadrados/node_modules/cache-loader/dist/cjs.js!/Users/kevin/Projects/quadrados/node_modules/css-loader?{"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/postcss-loader/lib?{"config":{"path":"/Users/kevin/Projects/quadrados/resources/assets/build","ctx":{"open":true,"copy":"images/**_/*","proxyUrl":"http://localhost:3960","cacheBusting":"[name]_[hash:8]","paths":{"root":"/Users/kevin/Projects/quadrados","assets":"/Users/kevin/Projects/quadrados/resources/assets","dist":"/Users/kevin/Projects/quadrados/dist"},"enabled":{"sourceMaps":true,"optimize":false,"cacheBusting":false,"watcher":true},"watch":["app/**_/*.php","config/**_/*.php","resources/views/**_/*.php","resources/scripts/*.js"],"entry":{"main":["./scripts/main.js","./styles/style.scss"],"customizer":["./scripts/customizer.js"]},"publicPath":"/wp-content/themes/quadrados/dist/dist/","devUrl":"http://kevincarmonamurphy.local:8000","env":{"production":false,"development":true},"manifest":{}}},"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/resolve-url-loader?{"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/sass-loader/lib/loader.js?{"sourceMap":true}!/Users/kevin/Projects/quadrados/node_modules/import-glob!./styles/style.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ 25);
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ 26)(true);
// imports


// module
exports.push([module.i, "/** Import everything from autoload */\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n\n/** Import theme styles */\n\n/** Common */\n\n/* stylelint-disable */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* stylelint-enable */\n\n/** Colors */\n\n/** Box Model  */\n\n/** Background Colours */\n\nhtml {\n  font-size: 105%;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 95%;\n  }\n}\n\nstrong {\n  font-weight: bold;\n}\n\nem {\n  font-style: italic;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\np,\na,\ninput,\ntime {\n  font-family: 'Fira Mono', monospace;\n  color: #252525;\n}\n\npre,\np {\n  -webkit-margin-after: 1rem;\n          margin-block-end: 1rem;\n}\n\nh1 {\n  -webkit-margin-after: 0.67em;\n          margin-block-end: 0.67em;\n  font-size: 2em;\n}\n\nh2 {\n  -webkit-margin-after: 0.83em;\n          margin-block-end: 0.83em;\n  font-size: 1.5em;\n}\n\nh3 {\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  font-size: 1.17em;\n}\n\nh4,\ninput {\n  -webkit-margin-after: 1.33em;\n          margin-block-end: 1.33em;\n  font-size: 1em;\n}\n\nh5 {\n  -webkit-margin-after: 1.67em;\n          margin-block-end: 1.67em;\n  font-size: 0.83em;\n}\n\nh6 {\n  -webkit-margin-after: 2.33em;\n          margin-block-end: 2.33em;\n  font-size: 0.67em;\n}\n\nhtml {\n  background-color: #f0f0f0;\n  height: 100%;\n  margin: 0 !important;\n}\n\nbody {\n  margin: 0 auto;\n  padding: 0;\n  height: 100%;\n  max-width: 1280px;\n}\n\n[role=document] {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nmain {\n  padding: 25px;\n  overflow-y: scroll;\n  width: 100%;\n}\n\nheader.container {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  header.container {\n    display: none;\n  }\n}\n\naside.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  aside.sidebar {\n    display: block;\n  }\n}\n\n/** Layouts */\n\naside.sidebar {\n  background-color: white;\n  width: 350px;\n  overflow-y: scroll;\n}\n\n.sidebar-container {\n  margin: 30px;\n}\n\n.name-stacked {\n  margin-bottom: 30px;\n}\n\n.name-stacked h1 {\n  z-index: 5;\n  position: relative;\n  margin: 15px 0;\n  margin-top: -45px;\n}\n\n.name-stacked .grey-square {\n  height: 45px;\n  width: 45px;\n  background-color: #f0f0f0;\n}\n\n.entry-meta {\n  margin-bottom: 25px;\n}\n\narticle {\n  word-break: break-word;\n}\n\narticle h1,\narticle h2,\narticle h3,\narticle h4,\narticle h5,\narticle h6 {\n  font-weight: bold;\n}\n\narticle img.full-width {\n  width: 100%;\n}\n\nbody#tinymce {\n  margin: 12px !important;\n}\n\nheader.section-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n}\n\narticle .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\n.initials-horizontal {\n  display: inline-block;\n}\n\n.initials-horizontal h1 {\n  z-index: 5;\n  position: relative;\n  margin: 0;\n}\n\n.initials-horizontal .grey-square {\n  height: 45px;\n  width: 45px;\n  background-color: #f0f0f0;\n  margin: 0 8px;\n  display: inline-block;\n}\n\n.initials-horizontal .grey-square:first-of-type {\n  margin-left: 0;\n}\n\n.nav-menu {\n  display: none;\n}\n\n.hamburger-menu {\n  float: right;\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  background-color: #f0f0f0;\n}\n\n.hamburger-menu div {\n  height: 95%;\n  width: 100%;\n  cursor: pointer;\n}\n\n.hamburger-menu .closed {\n  background: url(" + escape(__webpack_require__(/*! ../images/icons8-menu.png */ 27)) + ") no-repeat center center;\n}\n\n.hamburger-menu .open {\n  display: none;\n  background: url(" + escape(__webpack_require__(/*! ../images/icons8-delete_sign.png */ 28)) + ") no-repeat center center;\n}\n\nheader.container {\n  background-color: white;\n  padding: 0 25px;\n}\n\n.sidebar-section {\n  margin: 25px 0;\n}\n\n.sidebar-section h4,\n.sidebar-section input {\n  margin: 6px 0;\n}\n\n.social-icons {\n  padding-bottom: 25px;\n}\n\na:hover > h4 {\n  background-color: #f0f0f0;\n}\n\ninput[type=search] {\n  background-color: white;\n  background-image: url(" + escape(__webpack_require__(/*! ../images/icons8-search.png */ 29)) + ");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 40px;\n  height: 45px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid black;\n  width: 100%;\n}\n\ninput[type=submit] {\n  height: 45px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid black;\n  border-left: 0;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\nform[role=search] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nform[role=search] label {\n  width: 100%;\n}\n\n.social-icons a {\n  text-decoration: none;\n}\n\n/** Components */\n\n.articles,\n.portfolio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: wrap;\n      flex-flow: wrap;\n  margin-bottom: 20px;\n}\n\n.articles .tile,\n.portfolio .tile {\n  word-break: break-word;\n}\n\n.articles .tile .thumbnail,\n.portfolio .tile .thumbnail {\n  margin-top: 20px;\n}\n\n.articles .tile .thumbnail img,\n.portfolio .tile .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\n.articles .tile-container,\n.portfolio .tile-container {\n  padding: 20px;\n  background-color: white;\n  border: 1px solid #bbb;\n  margin: 0 10px;\n  margin-bottom: 20px;\n}\n\n.articles .title,\n.portfolio .title {\n  margin-top: 0;\n}\n\n@media (max-width: 480px) {\n  .articles .tile,\n  .portfolio .tile {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n  }\n\n  .articles .tile .tile-container,\n  .portfolio .tile .tile-container {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 480px) and (max-width: 1023px) {\n  .articles .tile,\n  .portfolio .tile {\n    -ms-flex-preferred-size: 50%;\n        flex-basis: 50%;\n  }\n\n  .articles .tile:nth-child(2n+1) .tile-container,\n  .portfolio .tile:nth-child(2n+1) .tile-container {\n    margin-left: 0;\n  }\n\n  .articles .tile:nth-child(2n) .tile-container,\n  .portfolio .tile:nth-child(2n) .tile-container {\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 1024px) {\n  .articles .tile,\n  .portfolio .tile {\n    -ms-flex-preferred-size: 33.33%;\n        flex-basis: 33.33%;\n  }\n\n  .articles .tile:nth-child(3n+1) .tile-container,\n  .portfolio .tile:nth-child(3n+1) .tile-container {\n    margin-left: 0;\n  }\n\n  .articles .tile:nth-child(3n) .tile-container,\n  .portfolio .tile:nth-child(3n) .tile-container {\n    margin-right: 0;\n  }\n}\n\n/** Search form */\n\n/**\n * WordPress Generated Classes\n * @see http://codex.wordpress.org/CSS#WordPress_Generated_Classes\n */\n\n/** Media alignment */\n\n.alignnone {\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 100%;\n  height: auto;\n}\n\n.aligncenter {\n  display: block;\n  margin: 1rem auto;\n  height: auto;\n}\n\n.alignleft,\n.alignright {\n  margin-bottom: 1rem;\n  height: auto;\n}\n\n@media (min-width: 30rem) {\n  .alignleft {\n    float: left;\n    margin-right: 1rem;\n  }\n\n  .alignright {\n    float: right;\n    margin-left: 1rem;\n  }\n}\n\n/** Captions */\n\n/** Text meant only for screen readers */\n\n.screen-reader-text {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  color: #000;\n  background: #fff;\n}\n\n.page-header,\n.alert {\n  margin-bottom: 20px;\n}\n\n", "", {"version":3,"sources":["/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/style.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/style.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/common/_reset.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/common/_variables.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/common/_fonts.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/common/_media-queries.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/common/_global.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_sidebar.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_pages.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_posts.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_tinymce.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_index.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_mobile-menu.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/layouts/_nav-menu.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/components/_article-tile.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/components/_forms.scss","/Users/kevin/Projects/quadrados/resources/assets/styles/resources/assets/styles/components/_wp-classes.scss"],"names":[],"mappings":"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","file":"style.scss","sourcesContent":["/** Import everything from autoload */\n;\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n// @import \"~some-node-module\";\n\n/** Import theme styles */\n\n/** Common */\n@import \"common/reset\";\n@import \"common/variables\";\n@import \"common/media-queries\";\n@import \"common/fonts\";\n@import \"common/global\";\n\n/** Layouts */\n@import \"layouts/sidebar\";\n@import \"layouts/pages\";\n@import \"layouts/posts\";\n@import \"layouts/tinymce\";\n@import \"layouts/index\";\n@import \"layouts/mobile-menu\";\n@import \"layouts/nav-menu\";\n\n/** Components */\n@import \"components/article-tile\";\n@import \"components/buttons\";\n@import \"components/comments\";\n@import \"components/forms\";\n@import \"components/wp-classes\";\n","/** Import everything from autoload */\n\n/**\n * Import npm dependencies\n *\n * Prefix your imports with `~` to grab from node_modules/\n * @see https://github.com/webpack-contrib/sass-loader#imports\n */\n\n/** Import theme styles */\n\n/** Common */\n\n/* stylelint-disable */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* stylelint-enable */\n\n/** Colors */\n\n/** Box Model  */\n\n/** Background Colours */\n\nhtml {\n  font-size: 105%;\n}\n\n@media (min-width: 768px) {\n  html {\n    font-size: 95%;\n  }\n}\n\nstrong {\n  font-weight: bold;\n}\n\nem {\n  font-style: italic;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\np,\na,\ninput,\ntime {\n  font-family: 'Fira Mono', monospace;\n  color: #252525;\n}\n\npre,\np {\n  margin-block-end: 1rem;\n}\n\nh1 {\n  margin-block-end: 0.67em;\n  font-size: 2em;\n}\n\nh2 {\n  margin-block-end: 0.83em;\n  font-size: 1.5em;\n}\n\nh3 {\n  margin-block-end: 1em;\n  font-size: 1.17em;\n}\n\nh4,\ninput {\n  margin-block-end: 1.33em;\n  font-size: 1em;\n}\n\nh5 {\n  margin-block-end: 1.67em;\n  font-size: 0.83em;\n}\n\nh6 {\n  margin-block-end: 2.33em;\n  font-size: 0.67em;\n}\n\nhtml {\n  background-color: #f0f0f0;\n  height: 100%;\n  margin: 0 !important;\n}\n\nbody {\n  margin: 0 auto;\n  padding: 0;\n  height: 100%;\n  max-width: 1280px;\n}\n\n[role=document] {\n  height: 100%;\n  display: flex;\n}\n\nmain {\n  padding: 25px;\n  overflow-y: scroll;\n  width: 100%;\n}\n\nheader.container {\n  display: block;\n}\n\n@media (min-width: 768px) {\n  header.container {\n    display: none;\n  }\n}\n\naside.sidebar {\n  display: none;\n}\n\n@media (min-width: 768px) {\n  aside.sidebar {\n    display: block;\n  }\n}\n\n/** Layouts */\n\naside.sidebar {\n  background-color: white;\n  width: 350px;\n  overflow-y: scroll;\n}\n\n.sidebar-container {\n  margin: 30px;\n}\n\n.name-stacked {\n  margin-bottom: 30px;\n}\n\n.name-stacked h1 {\n  z-index: 5;\n  position: relative;\n  margin: 15px 0;\n  margin-top: -45px;\n}\n\n.name-stacked .grey-square {\n  height: 45px;\n  width: 45px;\n  background-color: #f0f0f0;\n}\n\n.entry-meta {\n  margin-bottom: 25px;\n}\n\narticle {\n  word-break: break-word;\n}\n\narticle h1,\narticle h2,\narticle h3,\narticle h4,\narticle h5,\narticle h6 {\n  font-weight: bold;\n}\n\narticle img.full-width {\n  width: 100%;\n}\n\nbody#tinymce {\n  margin: 12px !important;\n}\n\nheader.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\narticle .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\n.initials-horizontal {\n  display: inline-block;\n}\n\n.initials-horizontal h1 {\n  z-index: 5;\n  position: relative;\n  margin: 0;\n}\n\n.initials-horizontal .grey-square {\n  height: 45px;\n  width: 45px;\n  background-color: #f0f0f0;\n  margin: 0 8px;\n  display: inline-block;\n}\n\n.initials-horizontal .grey-square:first-of-type {\n  margin-left: 0;\n}\n\n.nav-menu {\n  display: none;\n}\n\n.hamburger-menu {\n  float: right;\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  background-color: #f0f0f0;\n}\n\n.hamburger-menu div {\n  height: 95%;\n  width: 100%;\n  cursor: pointer;\n}\n\n.hamburger-menu .closed {\n  background: url(\"../images/icons8-menu.png\") no-repeat center center;\n}\n\n.hamburger-menu .open {\n  display: none;\n  background: url(\"../images/icons8-delete_sign.png\") no-repeat center center;\n}\n\nheader.container {\n  background-color: white;\n  padding: 0 25px;\n}\n\n.sidebar-section {\n  margin: 25px 0;\n}\n\n.sidebar-section h4,\n.sidebar-section input {\n  margin: 6px 0;\n}\n\n.social-icons {\n  padding-bottom: 25px;\n}\n\na:hover > h4 {\n  background-color: #f0f0f0;\n}\n\ninput[type=search] {\n  background-color: white;\n  background-image: url(\"../images/icons8-search.png\");\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 40px;\n  height: 45px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  width: 100%;\n}\n\ninput[type=submit] {\n  height: 45px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  border-left: 0;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\nform[role=search] {\n  display: flex;\n}\n\nform[role=search] label {\n  width: 100%;\n}\n\n.social-icons a {\n  text-decoration: none;\n}\n\n/** Components */\n\n.articles,\n.portfolio {\n  display: flex;\n  flex-flow: wrap;\n  margin-bottom: 20px;\n}\n\n.articles .tile,\n.portfolio .tile {\n  word-break: break-word;\n}\n\n.articles .tile .thumbnail,\n.portfolio .tile .thumbnail {\n  margin-top: 20px;\n}\n\n.articles .tile .thumbnail img,\n.portfolio .tile .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\n.articles .tile-container,\n.portfolio .tile-container {\n  padding: 20px;\n  background-color: white;\n  border: 1px solid #bbb;\n  margin: 0 10px;\n  margin-bottom: 20px;\n}\n\n.articles .title,\n.portfolio .title {\n  margin-top: 0;\n}\n\n@media (max-width: 480px) {\n  .articles .tile,\n  .portfolio .tile {\n    flex-basis: 100%;\n  }\n\n  .articles .tile .tile-container,\n  .portfolio .tile .tile-container {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 480px) and (max-width: 1023px) {\n  .articles .tile,\n  .portfolio .tile {\n    flex-basis: 50%;\n  }\n\n  .articles .tile:nth-child(2n+1) .tile-container,\n  .portfolio .tile:nth-child(2n+1) .tile-container {\n    margin-left: 0;\n  }\n\n  .articles .tile:nth-child(2n) .tile-container,\n  .portfolio .tile:nth-child(2n) .tile-container {\n    margin-right: 0;\n  }\n}\n\n@media (min-width: 1024px) {\n  .articles .tile,\n  .portfolio .tile {\n    flex-basis: 33.33%;\n  }\n\n  .articles .tile:nth-child(3n+1) .tile-container,\n  .portfolio .tile:nth-child(3n+1) .tile-container {\n    margin-left: 0;\n  }\n\n  .articles .tile:nth-child(3n) .tile-container,\n  .portfolio .tile:nth-child(3n) .tile-container {\n    margin-right: 0;\n  }\n}\n\n/** Search form */\n\n/**\n * WordPress Generated Classes\n * @see http://codex.wordpress.org/CSS#WordPress_Generated_Classes\n */\n\n/** Media alignment */\n\n.alignnone {\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 100%;\n  height: auto;\n}\n\n.aligncenter {\n  display: block;\n  margin: 1rem auto;\n  height: auto;\n}\n\n.alignleft,\n.alignright {\n  margin-bottom: 1rem;\n  height: auto;\n}\n\n@media (min-width: 30rem) {\n  .alignleft {\n    float: left;\n    margin-right: 1rem;\n  }\n\n  .alignright {\n    float: right;\n    margin-left: 1rem;\n  }\n}\n\n/** Captions */\n\n/** Text meant only for screen readers */\n\n.screen-reader-text {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  color: #000;\n  background: #fff;\n}\n\n.page-header,\n.alert {\n  margin-bottom: 20px;\n}\n\n","/* stylelint-disable */\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* stylelint-enable */\n","/** Colors */\n$brand-primary:         #27ae60;\n\n/** Box Model  */\n$spacer:                2rem;\n\n/** Background Colours */\n$background-grey:     #f0f0f0;\n","// define base font-size for rems to work\n\nhtml {\n  font-size: 105%;\n\n  @include sidebar-breakpoint {\n    font-size: 95%;\n  }\n}\n\nstrong {\n  font-weight: bold;\n}\n\nem {\n  font-style: italic;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nspan,\np,\na,\ninput,\ntime {\n  font-family: 'Fira Mono', monospace;\n  color: #252525;\n}\n\npre,\np {\n  margin-block-end: 1rem;\n}\n\nh1 {\n  margin-block-end: 0.67em;\n  font-size: 2em;\n}\n\nh2 {\n  margin-block-end: 0.83em;\n  font-size: 1.5em;\n}\n\nh3 {\n  margin-block-end: 1em;\n  font-size: 1.17em;\n}\n\nh4,\ninput {\n  margin-block-end: 1.33em;\n  font-size: 1em;\n}\n\nh5 {\n  margin-block-end: 1.67em;\n  font-size: 0.83em;\n}\n\nh6 {\n  margin-block-end: 2.33em;\n  font-size: 0.67em;\n}\n","$phone-width: 480px;\n$tablet-width: 768px;\n$desktop-width: 1024px;\n\n@mixin phone {\n  @media (max-width: #{$phone-width}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$phone-width}) and (max-width: #{$desktop-width - 1px}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$desktop-width}) {\n    @content;\n  }\n}\n\n@mixin sidebar-breakpoint {\n  @media (min-width: #{$tablet-width}) {\n    @content;\n  }\n}\n","html {\n  background-color: $background-grey;\n  height: 100%;\n  margin: 0 !important;\n}\n\nbody {\n  margin: 0 auto;\n  padding: 0;\n  height: 100%;\n  max-width: 1280px;\n}\n\n[role=document] {\n  height: 100%;\n  display: flex;\n}\n\nmain {\n  padding: 25px;\n  overflow-y: scroll;\n  width: 100%;\n}\n\nheader.container {\n  display: block;\n\n  @include sidebar-breakpoint {\n    display: none;\n  }\n}\n\naside.sidebar {\n  display: none;\n\n  @include sidebar-breakpoint {\n    display: block;\n  }\n}\n","aside.sidebar {\n  background-color: white;\n  width: 350px;\n  overflow-y: scroll;\n}\n\n.sidebar-container {\n  margin: 30px;\n}\n\n.name-stacked {\n  h1 {\n    z-index: 5;\n    position: relative;\n    margin: 15px 0;\n    margin-top: -45px;\n  }\n\n  .grey-square {\n    height: 45px;\n    width: 45px;\n    background-color: $background-grey;\n  }\n\n  margin-bottom: 30px;\n}\n",".entry-meta {\n  margin-bottom: 25px;\n}\n","article {\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-weight: bold;\n  }\n\n  word-break: break-word;\n\n  img.full-width {\n    width: 100%;\n  }\n}\n","body#tinymce {\n  margin: 12px !important;\n}\n","header.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n\narticle .thumbnail img {\n  width: 100%;\n  height: auto;\n}\n\n// h2,\n// p {\n//   margin-bottom: 10px;\n// }\n",".initials-horizontal {\n  display: inline-block;\n\n  h1 {\n    z-index: 5;\n    position: relative;\n    margin: 0;\n  }\n\n  .grey-square {\n    height: 45px;\n    width: 45px;\n    background-color: $background-grey;\n    margin: 0 8px;\n    display: inline-block;\n  }\n\n  .grey-square:first-of-type {\n    margin-left: 0;\n  }\n}\n\n.nav-menu {\n  display: none;\n}\n\n.hamburger-menu {\n  float: right;\n  display: inline-block;\n  width: 45px;\n  height: 45px;\n  background-color: $background-grey;\n\n  div {\n    height: 95%;\n    width: 100%;\n    cursor: pointer;\n  }\n\n  .closed {\n    background: url('../images/icons8-menu.png') no-repeat center center;\n  }\n\n  .open {\n    display: none;\n    background: url('../images/icons8-delete_sign.png') no-repeat center center;\n  }\n}\n\nheader.container {\n  background-color: white;\n  padding: 0 25px;\n}\n",".sidebar-section {\n  margin: 25px 0;\n\n  h4,\n  input {\n    margin: 6px 0;\n  }\n}\n\n.social-icons {\n  padding-bottom: 25px;\n}\n\na:hover > h4 {\n  background-color: $background-grey;\n}\n\ninput[type=search] {\n  background-color: white;\n  background-image: url('../images/icons8-search.png');\n  background-position: 10px 10px;\n  background-repeat: no-repeat;\n  padding-left: 40px;\n  height: 45px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  width: 100%;\n}\n\ninput[type=submit] {\n  height: 45px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  border-left: 0;\n  padding: 0 10px;\n  cursor: pointer;\n}\n\nform[role=search] {\n  display: flex;\n\n  label {\n    width: 100%;\n  }\n}\n\n.social-icons a {\n  text-decoration: none;\n}\n",".articles,\n.portfolio {\n  display: flex;\n  flex-flow: wrap;\n  margin-bottom: 20px;\n\n  .tile {\n    word-break: break-word;\n\n    .thumbnail {\n      margin-top: 20px;\n\n      img {\n        width: 100%;\n        height: auto;\n      }\n    }\n  }\n\n  .tile-container {\n    padding: 20px;\n    background-color: white;\n    border: 1px solid #bbb;\n    margin: 0 10px;\n    margin-bottom: 20px;\n  }\n\n  .title {\n    margin-top: 0;\n  }\n\n  @include phone {\n    .tile {\n      flex-basis: 100%;\n\n      .tile-container {\n        margin-left: 0;\n        margin-right: 0;\n      }\n    }\n  }\n\n  @include tablet {\n    .tile {\n      flex-basis: 50%;\n    }\n\n    .tile:nth-child(2n+1) .tile-container {\n      margin-left: 0;\n    }\n\n    .tile:nth-child(2n) .tile-container {\n      margin-right: 0;\n    }\n  }\n\n  @include desktop {\n    .tile {\n      flex-basis: 33.33%;\n    }\n\n    .tile:nth-child(3n+1) .tile-container {\n      margin-left: 0;\n    }\n\n    .tile:nth-child(3n) .tile-container {\n      margin-right: 0;\n    }\n  }\n}\n","/** Search form */\n// TODO: .search-form {}\n// TODO: .search-form label {}\n// TODO: .search-form .search-field {}\n// TODO: .search-form .search-submit {}\n","/**\n * WordPress Generated Classes\n * @see http://codex.wordpress.org/CSS#WordPress_Generated_Classes\n */\n\n/** Media alignment */\n.alignnone {\n  margin-left: 0;\n  margin-right: 0;\n  max-width: 100%;\n  height: auto;\n}\n\n.aligncenter {\n  display: block;\n  margin: ($spacer / 2) auto;\n  height: auto;\n}\n\n.alignleft,\n.alignright {\n  margin-bottom: ($spacer / 2);\n  height: auto;\n}\n\n@media (min-width: 30rem) {\n  .alignleft {\n    float: left;\n    margin-right: ($spacer / 2);\n  }\n\n  .alignright {\n    float: right;\n    margin-left: ($spacer / 2);\n  }\n}\n\n/** Captions */\n\n// TODO: .wp-caption {}\n// TODO: .wp-caption img {}\n// TODO: .wp-caption-text {}\n\n/** Text meant only for screen readers */\n.screen-reader-text {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  color: #000;\n  background: #fff;\n}\n\n.page-header,\n.alert {\n  margin-bottom: 20px;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

})
//# sourceMappingURL=0.e1bd87c5ef07fdc670f0.hot-update.js.map