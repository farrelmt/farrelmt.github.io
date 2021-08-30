"use strict";(self.webpackChunkfarrelmt_website=self.webpackChunkfarrelmt_website||[]).push([[682],{5881:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(7294),a=r(5444);function o(){var e=(0,a.K2)("2513322031").site.siteMetadata.title;return n.createElement("nav",null,n.createElement("h1",null,e),n.createElement("div",{className:"links"},n.createElement(a.rU,{to:"/"},"Home"),n.createElement(a.rU,{to:"/about"},"About Me"),n.createElement(a.rU,{to:"/projects"},"Projects")))}function l(e){var t=e.children;return n.createElement("div",{className:"layout"},n.createElement(o,null),n.createElement("div",{className:"content"}),t,n.createElement("footer",null))}},6621:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(7294),a=r(5881),o=r(4694),l=r(5697),i=r.n(l);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),a=b(t.slice(0,n)),o=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:e[a]=o,e}),{})}var d=!1;try{d=!0}catch(x){}function h(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:o.parse.icon?o.parse.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function O(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?s({},e,t):{}}function v(e){var t=e.forwardedRef,r=m(e,["forwardedRef"]),n=r.icon,a=r.mask,l=r.symbol,i=r.className,c=r.title,f=r.titleId,b=h(n),y=O("classes",[].concat(p(function(e){var t,r=e.spin,n=e.pulse,a=e.fixedWidth,o=e.inverse,l=e.border,i=e.listItem,c=e.flip,f=e.size,u=e.rotation,m=e.pull,p=(s(t={"fa-spin":r,"fa-pulse":n,"fa-fw":a,"fa-inverse":o,"fa-border":l,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(f),null!=f),s(t,"fa-rotate-".concat(u),null!=u&&0!==u),s(t,"fa-pull-".concat(m),null!=m),s(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),p(i.split(" ")))),w=O("transform","string"==typeof r.transform?o.parse.transform(r.transform):r.transform),E=O("mask",h(a)),j=(0,o.icon)(b,u({},y,{},w,{},E,{symbol:l,title:c,titleId:f}));if(!j)return function(){var e;!d&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",b),null;var x=j.abstract,k={ref:t};return Object.keys(r).forEach((function(e){v.defaultProps.hasOwnProperty(e)||(k[e]=r[e])})),g(x[0],k)}v.displayName="FontAwesomeIcon",v.propTypes={border:i().bool,className:i().string,mask:i().oneOfType([i().object,i().array,i().string]),fixedWidth:i().bool,inverse:i().bool,flip:i().oneOf(["horizontal","vertical","both"]),icon:i().oneOfType([i().object,i().array,i().string]),listItem:i().bool,pull:i().oneOf(["right","left"]),pulse:i().bool,rotation:i().oneOf([0,90,180,270]),size:i().oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i().bool,symbol:i().oneOfType([i().bool,i().string]),title:i().string,transform:i().oneOfType([i().string,i().object]),swapOpacity:i().bool},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var g=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return e(t,r)})),o=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[b(t)]=n}return e}),{attrs:{}}),l=n.style,i=void 0===l?{}:l,c=m(n,["style"]);return o.attrs.style=u({},o.attrs.style,{},i),t.apply(void 0,[r.tag,u({},o.attrs,{},c)].concat(p(a)))}.bind(null,n.createElement),w=r(7190),E={prefix:"far",iconName:"envelope",icon:[512,512,[],"f0e0","M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"]};function j(){return n.createElement(a.Z,null,n.createElement("section",{className:"about-module--about--2rBlf"},n.createElement("h1",null,"About Me"),n.createElement("p",null,"my name is Farrel Muhammad Taqi, born 19 October 2000 in Surabaya, a computer and design enthusiast, currently is Informatics Student at Sepuluh Nopember Institute of Technology in Indonesia.")),n.createElement("section",{className:"about-module--linkmedia--23Em2"},n.createElement("a",{target:"_blank",href:"https://www.artstation.com/farrelmt",rel:"noreferrer"},n.createElement(v,{icon:w.Ll0,size:"5x"})),n.createElement("a",{target:"_blank",href:"mailto: farrelmuhammadtaqi@gmail.com",rel:"noreferrer"},n.createElement(v,{icon:E,size:"5x"})),n.createElement("a",{target:"_blank",href:"https://www.facebook.com/farrel.muhammadtaqi.1/",rel:"noreferrer"},n.createElement(v,{icon:w.neY,size:"5x"})),n.createElement("a",{target:"_blank",href:"https://github.com/farrelmt",rel:"noreferrer"},n.createElement(v,{icon:w.zhw,size:"5x"})),n.createElement("a",{target:"_blank",href:"https://twitter.com/farrelmt71",rel:"noreferrer"},n.createElement(v,{icon:w.mdU,size:"5x"}))))}}}]);
//# sourceMappingURL=component---src-pages-about-js-9ce20681e52d813cd2d2.js.map