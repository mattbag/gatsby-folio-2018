webpackJsonp([35783957827783],{227:function(A,e,t){"use strict";function a(A){return A&&A.__esModule?A:{default:A}}function r(){return"undefined"==typeof b&&"undefined"!=typeof window&&window.IntersectionObserver&&(b=new window.IntersectionObserver(function(A){A.forEach(function(A){h.forEach(function(e){e[0]===A.target&&(A.isIntersecting||A.intersectionRatio>0)&&(b.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),b}e.__esModule=!0;var l=t(24),n=a(l),s=t(36),o=a(s),i=t(35),g=a(i),d=t(87),u=a(d),c=t(86),f=a(c),E=t(1),I=a(E),B=t(2),Q=a(B),p=function(A){var e=(0,f.default)({},A);return e.responsiveResolution&&(e.resolutions=e.responsiveResolution,delete e.responsiveResolution),e.responsiveSizes&&(e.sizes=e.responsiveSizes,delete e.responsiveSizes),e},C={},m=function(A){var e=p(A),t=e.sizes?e.sizes.src:e.resolutions.src;return!!C[t]||(C[t]=!0,!1)},b=void 0,h=[],y=function(A,e){r().observe(A),h.push([A,e])},v=null,w=function(){if(null!==v)return v;var A="undefined"!=typeof window?window.document.createElement("canvas"):{};return v=!(!A.getContext||!A.getContext("2d"))&&0===A.toDataURL("image/webp").indexOf("data:image/webp")},z=function(A){var e=A.src?'src="'+A.src+'" ':'src="" ',t=A.srcSet?'srcset="'+A.srcSet+'" ':"",a=A.sizes?'sizes="'+A.sizes+'" ':"",r=A.title?'title="'+A.title+'" ':"",l=A.alt?'alt="'+A.alt+'" ':'alt="" ',n=A.width?'width="'+A.width+'" ':"",s=A.height?'height="'+A.height+'" ':"",o=A.opacity?A.opacity:"1",i=A.transitionDelay?A.transitionDelay:"0.5s";return"<img "+n+s+e+t+l+r+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+i+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},j=function(A){var e=A.style,t=A.onLoad,a=(0,u.default)(A,["style","onLoad"]);return I.default.createElement("img",(0,f.default)({},a,{onLoad:t,style:(0,f.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},e)}))};j.propTypes={style:Q.default.object,onLoad:Q.default.func};var O=function(A){function e(t){(0,n.default)(this,e);var a=(0,o.default)(this,A.call(this,t)),r=!0,l=!0,s=!1,i=m(t);return!i&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,l=!1,s=!0),"undefined"==typeof window&&(r=!1,l=!1),a.state={isVisible:r,imgLoaded:l,IOSupported:s},a.handleRef=a.handleRef.bind(a),a}return(0,g.default)(e,A),e.prototype.handleRef=function(A){var e=this;this.state.IOSupported&&A&&y(A,function(){e.setState({isVisible:!0,imgLoaded:!1})})},e.prototype.render=function(){var A=this,e=p(this.props),t=e.title,a=e.alt,r=e.className,l=e.outerWrapperClassName,n=e.style,s=void 0===n?{}:n,o=e.imgStyle,i=void 0===o?{}:o,g=e.placeholderStyle,d=void 0===g?{}:g,u=e.sizes,c=e.resolutions,E=e.backgroundColor,B=e.Tag,Q=void 0;Q="boolean"==typeof E?"lightgray":E;var C=(0,f.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},i,d),m=(0,f.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},i);if(u){var b=u;return b.srcWebp&&b.srcSetWebp&&w()&&(b.src=b.srcWebp,b.srcSet=b.srcSetWebp),I.default.createElement(B,{className:(l?l:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},I.default.createElement(B,{className:(r?r:"")+" gatsby-image-wrapper",style:(0,f.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},I.default.createElement(B,{style:{width:"100%",paddingBottom:100/b.aspectRatio+"%"}}),b.base64&&I.default.createElement(j,{alt:a,title:t,src:b.base64,style:C}),b.tracedSVG&&I.default.createElement(j,{alt:a,title:t,src:b.tracedSVG,style:C}),Q&&I.default.createElement(B,{title:t,style:{backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&I.default.createElement(j,{alt:a,title:t,srcSet:b.srcSet,src:b.src,sizes:b.sizes,style:m,onLoad:function(){A.state.IOSupported&&A.setState({imgLoaded:!0}),A.props.onLoad&&A.props.onLoad()}}),I.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,f.default)({alt:a,title:t},b))}})))}if(c){var h=c,y=(0,f.default)({position:"relative",overflow:"hidden",display:"inline-block",width:h.width,height:h.height},s);return"inherit"===s.display&&delete y.display,h.srcWebp&&h.srcSetWebp&&w()&&(h.src=h.srcWebp,h.srcSet=h.srcSetWebp),I.default.createElement(B,{className:(l?l:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},I.default.createElement(B,{className:(r?r:"")+" gatsby-image-wrapper",style:y,ref:this.handleRef},h.base64&&I.default.createElement(j,{alt:a,title:t,src:h.base64,style:C}),h.tracedSVG&&I.default.createElement(j,{alt:a,title:t,src:h.tracedSVG,style:C}),Q&&I.default.createElement(B,{title:t,style:{backgroundColor:Q,width:h.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:h.height}}),this.state.isVisible&&I.default.createElement(j,{alt:a,title:t,width:h.width,height:h.height,srcSet:h.srcSet,src:h.src,style:m,onLoad:function(){A.setState({imgLoaded:!0}),A.props.onLoad&&A.props.onLoad()}}),I.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,f.default)({alt:a,title:t,width:h.width,height:h.height},h))}})))}return null},e}(I.default.Component);O.defaultProps={fadeIn:!0,alt:"",Tag:"div"},O.propTypes={responsiveResolution:Q.default.object,responsiveSizes:Q.default.object,resolutions:Q.default.object,sizes:Q.default.object,fadeIn:Q.default.bool,title:Q.default.string,alt:Q.default.string,className:Q.default.oneOfType([Q.default.string,Q.default.object]),outerWrapperClassName:Q.default.oneOfType([Q.default.string,Q.default.object]),style:Q.default.object,imgStyle:Q.default.object,placeholderStyle:Q.default.object,position:Q.default.string,backgroundColor:Q.default.oneOfType([Q.default.string,Q.default.bool]),onLoad:Q.default.func,Tag:Q.default.string},e.default=O},32:function(A,e){"use strict";function t(A){if(null===A||void 0===A)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(A)}function a(){try{if(!Object.assign)return!1;var A=new String("abc");if(A[5]="de","5"===Object.getOwnPropertyNames(A)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var a=Object.getOwnPropertyNames(e).map(function(A){return e[A]});if("0123456789"!==a.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(A){r[A]=A}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(A){return!1}}var r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;A.exports=a()?Object.assign:function(A,e){for(var a,s,o=t(A),i=1;i<arguments.length;i++){a=Object(arguments[i]);for(var g in a)l.call(a,g)&&(o[g]=a[g]);if(r){s=r(a);for(var d=0;d<s.length;d++)n.call(a,s[d])&&(o[s[d]]=a[s[d]])}}return o}},130:function(A,e,t){"use strict";function a(A){return A&&A.__esModule?A:{default:A}}e.__esModule=!0;var r=t(1),l=a(r),n=t(33),s=a(n),o=t(22),i=a(o),g=t(85),d=a(g),u=function(A){return l.default.createElement("div",{style:{margin:"4rem 0",display:"grid",gridTemplateColumns:"1fr minmax(260px, 3fr) 1fr",gridTemplateAreas:"'. about .'",gridGap:20}},l.default.createElement("div",{style:{gridArea:"about"}},l.default.createElement("div",{className:i.default.skew2+" "+i.default.shadow,style:{padding:"2rem",color:"#fff",backgroundColor:"#222",position:"relative"}},l.default.createElement("div",{className:i.default.skew1},l.default.createElement("div",{dangerouslySetInnerHTML:{__html:A.md[0].node.html}}),l.default.createElement("img",{src:s.default,width:"60",style:{margin:"auto",opacity:.05,top:0,left:0,right:0,bottom:0,width:"50%",position:"absolute"}}))),l.default.createElement("div",{style:{width:"90%",margin:"auto",transform:"translate3d(0,-30%,-1px) skewY(2deg)"}},l.default.createElement(d.default,null))))};e.default=u,A.exports=e.default},131:function(A,e,t){"use strict";function a(A){return A&&A.__esModule?A:{default:A}}function r(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}function l(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}function n(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}e.__esModule=!0;var s=t(1),o=a(s),i=t(22),g=a(i),d=function(A){function e(t){r(this,e);var a=l(this,A.call(this,t));return a.changeCells=function(){a.cells>3?a.cells=1:a.cells+=1,a.grid.current.style.setProperty("--cells",a.cells)},a.cells=1,a.grid=o.default.createRef(),a}return n(e,A),e.prototype.render=function(){return o.default.createElement("div",{ref:this.grid,className:g.default.grid,style:{"--cells":1,gridTemplateColumns:"repeat(var(--cells), 1fr)"}},o.default.createElement("p",{className:g.default.grid__switch,onClick:this.changeCells,style:{position:"absolute",right:"1rem",top:"2rem",color:"#fff",marginBottom:0,"--cursor":this.cells>2?"zoom-out":"zoom-in",cursor:"var(--cursor)"}},"change"),this.props.children)},e}(s.Component);e.default=d,A.exports=e.default},85:function(A,e,t){"use strict";function a(A){return A&&A.__esModule?A:{default:A}}e.__esModule=!0;var r=t(1),l=a(r),n=t(22),s=a(n),o=[{name:"github",link:"https://mattbag.github.io/"},{name:"linkedin",link:"https://www.linkedin.com/in/matteobagni88/"},{name:"twitter",link:"https://mobile.twitter.com/mattbag00"},{name:"codepen",link:"https://codepen.io/mattbag/"}],i=function(){return l.default.createElement("div",{className:""+s.default.shadow,style:{padding:"4rem 1rem 1rem",backgroundColor:"blue"}},l.default.createElement("ul",{style:{margin:0,listStyle:"none",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}},o.map(function(A){return l.default.createElement("li",{key:A.name,style:{margin:2}},l.default.createElement("a",{href:A.link,style:{color:"#fff",fontWeight:"bold"}},A.name))})))};e.default=i,A.exports=e.default},33:function(A,e){A.exports="data:image/png;base64,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"},134:function(A,e,t){"use strict";function a(A){return A&&A.__esModule?A:{default:A}}e.__esModule=!0,e.query=void 0;var r=t(1),l=a(r),n=t(227),s=a(n),o=t(131),i=a(o),g=t(130),d=a(g),u=t(85),c=(a(u),t(22)),f=a(c);e.default=function(A){var e=A.data;return l.default.createElement("div",{className:f.default.wrap},l.default.createElement(i.default,null,e&&e.allSitesYaml.edges.map(function(A,e){var t=A.node;return l.default.createElement("div",{className:f.default.site,key:e},l.default.createElement("a",{href:t.url,target:"_blank"},l.default.createElement("div",{className:f.default.pic},l.default.createElement(s.default,{sizes:t.childScreenshot.screenshotFile.childImageSharp.sizes,alt:t.name,className:f.default.shadow})),l.default.createElement("div",{className:f.default.label},l.default.createElement("div",{className:f.default.label__in},t.name))))})),l.default.createElement(d.default,{md:e.allMarkdownRemark.edges}))};e.query="** extracted graphql fragment **"},22:function(A,e){A.exports={skew1:"src-pages----master-module---skew1---1W_zP",skew2:"src-pages----master-module---skew2---1ukDj",outer:"src-pages----master-module---outer---wHQZU src-pages----master-module---skew1---1W_zP",inner:"src-pages----master-module---inner---Duork src-pages----master-module---skew2---1ukDj",wrap:"src-pages----master-module---wrap---1a4mx",logo:"src-pages----master-module---logo---3j7Ui",grid:"src-pages----master-module---grid---3V0kT",grid__switch:"src-pages----master-module---grid__switch---3W7Al",site:"src-pages----master-module---site---3tPlz",shadow:"src-pages----master-module---shadow---3RklB",pic:"src-pages----master-module---pic---3SOpD",label:"src-pages----master-module---label---3NG-V src-pages----master-module---shadow---3RklB",label__in:"src-pages----master-module---label__in---GDR4j"}}});
//# sourceMappingURL=component---src-pages-index-js-faff5090d795e2c0a3ba.js.map