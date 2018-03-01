/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	// require('../../js/jquery-3.2.1.min.js');
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);

	(function ($) {
	  // very general code
	})(jQuery);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	!function(e){var t={sectionContainer:"section",easing:"ease",animationTime:1e3,pagination:true,updateURL:false,keyboard:true,beforeMove:null,afterMove:null,loop:true,responsiveFallback:false,direction:"vertical"};e.fn.swipeEvents=function(){return this.each(function(){function i(e){var i=e.originalEvent.touches;if(i&&i.length){t=i[0].pageX;n=i[0].pageY;r.bind("touchmove",s)}}function s(e){var i=e.originalEvent.touches;if(i&&i.length){var o=t-i[0].pageX;var u=n-i[0].pageY;if(o>=50){r.trigger("swipeLeft")}if(o<=-50){r.trigger("swipeRight")}if(u>=50){r.trigger("swipeUp")}if(u<=-50){r.trigger("swipeDown")}if(Math.abs(o)>=50||Math.abs(u)>=50){r.unbind("touchmove",s)}}}var t,n,r=e(this);r.bind("touchstart",i)})};e.fn.onepage_scroll=function(n){function o(){var t=false;var n=typeof r.responsiveFallback;if(n=="number"){t=e(window).width()<r.responsiveFallback}if(n=="boolean"){t=r.responsiveFallback}if(n=="function"){valFunction=r.responsiveFallback();t=valFunction;typeOFv=typeof t;if(typeOFv=="number"){t=e(window).width()<valFunction}}if(t){e("body").addClass("disabled-onepage-scroll");e(document).unbind("mousewheel DOMMouseScroll MozMousePixelScroll");i.swipeEvents().unbind("swipeDown swipeUp")}else{if(e("body").hasClass("disabled-onepage-scroll")){e("body").removeClass("disabled-onepage-scroll");e("html, body, .wrapper").animate({scrollTop:0},"fast")}i.swipeEvents().bind("swipeDown",function(t){if(!e("body").hasClass("disabled-onepage-scroll"))t.preventDefault();i.moveUp()}).bind("swipeUp",function(t){if(!e("body").hasClass("disabled-onepage-scroll"))t.preventDefault();i.moveDown()});e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(e){e.preventDefault();var t=e.originalEvent.wheelDelta||-e.originalEvent.detail;u(e,t)})}}function u(e,t){deltaOfInterest=t;var n=(new Date).getTime();if(n-lastAnimation<quietPeriod+r.animationTime){e.preventDefault();return}if(deltaOfInterest<0){i.moveDown()}else{i.moveUp()}lastAnimation=n}var r=e.extend({},t,n),i=e(this),s=e(r.sectionContainer);total=s.length,status="off",topPos=0,leftPos=0,lastAnimation=0,quietPeriod=500,paginationList="";e.fn.transformPage=function(t,n,r){if(typeof t.beforeMove=="function")t.beforeMove(r);if(e("html").hasClass("ie8")){if(t.direction=="horizontal"){var s=i.width()/100*n;e(this).animate({left:s+"px"},t.animationTime)}else{var s=i.height()/100*n;e(this).animate({top:s+"px"},t.animationTime)}}else{e(this).css({"-webkit-transform":t.direction=="horizontal"?"translate3d("+n+"%, 0, 0)":"translate3d(0, "+n+"%, 0)","-webkit-transition":"all "+t.animationTime+"ms "+t.easing,"-moz-transform":t.direction=="horizontal"?"translate3d("+n+"%, 0, 0)":"translate3d(0, "+n+"%, 0)","-moz-transition":"all "+t.animationTime+"ms "+t.easing,"-ms-transform":t.direction=="horizontal"?"translate3d("+n+"%, 0, 0)":"translate3d(0, "+n+"%, 0)","-ms-transition":"all "+t.animationTime+"ms "+t.easing,transform:t.direction=="horizontal"?"translate3d("+n+"%, 0, 0)":"translate3d(0, "+n+"%, 0)",transition:"all "+t.animationTime+"ms "+t.easing})}e(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(e){if(typeof t.afterMove=="function")t.afterMove(r)})};e.fn.moveDown=function(){var t=e(this);index=e(r.sectionContainer+".active").data("index");current=e(r.sectionContainer+"[data-index='"+index+"']");next=e(r.sectionContainer+"[data-index='"+(index+1)+"']");if(next.length<1){if(r.loop==true){pos=0;next=e(r.sectionContainer+"[data-index='1']")}else{return}}else{pos=index*100*-1}if(typeof r.beforeMove=="function")r.beforeMove(next.data("index"));current.removeClass("active");next.addClass("active");if(r.pagination==true){e(".onepage-pagination li a"+"[data-index='"+index+"']").removeClass("active");e(".onepage-pagination li a"+"[data-index='"+next.data("index")+"']").addClass("active")}e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,"");e("body").addClass("viewing-page-"+next.data("index"));if(history.replaceState&&r.updateURL==true){var n=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index+1);history.pushState({},document.title,n)}t.transformPage(r,pos,next.data("index"))};e.fn.moveUp=function(){var t=e(this);index=e(r.sectionContainer+".active").data("index");current=e(r.sectionContainer+"[data-index='"+index+"']");next=e(r.sectionContainer+"[data-index='"+(index-1)+"']");if(next.length<1){if(r.loop==true){pos=(total-1)*100*-1;next=e(r.sectionContainer+"[data-index='"+total+"']")}else{return}}else{pos=(next.data("index")-1)*100*-1}if(typeof r.beforeMove=="function")r.beforeMove(next.data("index"));current.removeClass("active");next.addClass("active");if(r.pagination==true){e(".onepage-pagination li a"+"[data-index='"+index+"']").removeClass("active");e(".onepage-pagination li a"+"[data-index='"+next.data("index")+"']").addClass("active")}e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,"");e("body").addClass("viewing-page-"+next.data("index"));if(history.replaceState&&r.updateURL==true){var n=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(index-1);history.pushState({},document.title,n)}t.transformPage(r,pos,next.data("index"))};e.fn.moveTo=function(t){current=e(r.sectionContainer+".active");next=e(r.sectionContainer+"[data-index='"+t+"']");if(next.length>0){if(typeof r.beforeMove=="function")r.beforeMove(next.data("index"));current.removeClass("active");next.addClass("active");e(".onepage-pagination li a"+".active").removeClass("active");e(".onepage-pagination li a"+"[data-index='"+t+"']").addClass("active");e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,"");e("body").addClass("viewing-page-"+next.data("index"));pos=(t-1)*100*-1;if(history.replaceState&&r.updateURL==true){var n=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+(t-1);history.pushState({},document.title,n)}i.transformPage(r,pos,t)}};i.addClass("onepage-wrapper").css("position","relative");e.each(s,function(t){e(this).css({position:"absolute",top:topPos+"%"}).addClass("section").attr("data-index",t+1);e(this).css({position:"absolute",left:r.direction=="horizontal"?leftPos+"%":0,top:r.direction=="vertical"||r.direction!="horizontal"?topPos+"%":0});if(r.direction=="horizontal")leftPos=leftPos+100;else topPos=topPos+100;if(r.pagination==true){paginationList+="<li><a data-index='"+(t+1)+"' href='#"+(t+1)+"'></a></li>"}});i.swipeEvents().bind("swipeDown",function(t){if(!e("body").hasClass("disabled-onepage-scroll"))t.preventDefault();i.moveUp()}).bind("swipeUp",function(t){if(!e("body").hasClass("disabled-onepage-scroll"))t.preventDefault();i.moveDown()});if(r.pagination==true){if(e("ul.onepage-pagination").length<1)e("<ul class='onepage-pagination'></ul>").prependTo("body");if(r.direction=="horizontal"){posLeft=i.find(".onepage-pagination").width()/2*-1;i.find(".onepage-pagination").css("margin-left",posLeft)}else{posTop=i.find(".onepage-pagination").height()/2*-1;i.find(".onepage-pagination").css("margin-top",posTop)}e("ul.onepage-pagination").html(paginationList)}if(window.location.hash!=""&&window.location.hash!="#1"){init_index=window.location.hash.replace("#","");if(parseInt(init_index)<=total&&parseInt(init_index)>0){e(r.sectionContainer+"[data-index='"+init_index+"']").addClass("active");e("body").addClass("viewing-page-"+init_index);if(r.pagination==true)e(".onepage-pagination li a"+"[data-index='"+init_index+"']").addClass("active");next=e(r.sectionContainer+"[data-index='"+init_index+"']");if(next){next.addClass("active");if(r.pagination==true)e(".onepage-pagination li a"+"[data-index='"+init_index+"']").addClass("active");e("body")[0].className=e("body")[0].className.replace(/\bviewing-page-\d.*?\b/g,"");e("body").addClass("viewing-page-"+next.data("index"));if(history.replaceState&&r.updateURL==true){var a=window.location.href.substr(0,window.location.href.indexOf("#"))+"#"+init_index;history.pushState({},document.title,a)}}pos=(init_index-1)*100*-1;i.transformPage(r,pos,init_index)}else{e(r.sectionContainer+"[data-index='1']").addClass("active");e("body").addClass("viewing-page-1");if(r.pagination==true)e(".onepage-pagination li a"+"[data-index='1']").addClass("active")}}else{e(r.sectionContainer+"[data-index='1']").addClass("active");e("body").addClass("viewing-page-1");if(r.pagination==true)e(".onepage-pagination li a"+"[data-index='1']").addClass("active")}if(r.pagination==true){e(".onepage-pagination li a").click(function(){var t=e(this).data("index");i.moveTo(t)})}e(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(t){t.preventDefault();var n=t.originalEvent.wheelDelta||-t.originalEvent.detail;if(!e("body").hasClass("disabled-onepage-scroll"))u(t,n)});if(r.responsiveFallback!=false){e(window).resize(function(){o()});o()}if(r.keyboard==true){e(document).keydown(function(t){var n=t.target.tagName.toLowerCase();if(!e("body").hasClass("disabled-onepage-scroll")){switch(t.which){case 38:if(n!="input"&&n!="textarea")i.moveUp();break;case 40:if(n!="input"&&n!="textarea")i.moveDown();break;case 32:if(n!="input"&&n!="textarea")i.moveDown();break;case 33:if(n!="input"&&n!="textarea")i.moveUp();break;case 34:if(n!="input"&&n!="textarea")i.moveDown();break;case 36:i.moveTo(1);break;case 35:i.moveTo(total);break;default:return}}})}return false}}(window.jQuery)


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";function e(n){return"undefined"==typeof this||Object.getPrototypeOf(this)!==e.prototype?new e(n):(O=this,O.version="3.3.6",O.tools=new E,O.isSupported()?(O.tools.extend(O.defaults,n||{}),O.defaults.container=t(O.defaults),O.store={elements:{},containers:[]},O.sequences={},O.history=[],O.uid=0,O.initialized=!1):"undefined"!=typeof console&&null!==console,O)}function t(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(O.tools.isNode(e.container))return e.container}return O.defaults.container}function n(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):O.tools.isNode(e)?[e]:O.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function i(){return++O.uid}function o(e,t,n){t.container&&(t.container=n),e.config?e.config=O.tools.extendClone(e.config,t):e.config=O.tools.extendClone(O.defaults,t),"top"===e.config.origin||"bottom"===e.config.origin?e.config.axis="Y":e.config.axis="X"}function r(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,t.transition&&"all 0s ease 0s"!==t.transition?e.styles.computed.transition=t.transition+", ":e.styles.computed.transition=""),e.styles.transition.instant=s(e,0),e.styles.transition.delayed=s(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",a(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",a(e)}function s(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function a(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function l(e){var t=e.config.container;t&&O.store.containers.indexOf(t)===-1&&O.store.containers.push(e.config.container),O.store.elements[e.id]=e}function c(e,t,n){var i={target:e,config:t,interval:n};O.history.push(i)}function f(){if(O.isSupported()){y();for(var e=0;e<O.store.containers.length;e++)O.store.containers[e].addEventListener("scroll",d),O.store.containers[e].addEventListener("resize",d);O.initialized||(window.addEventListener("scroll",d),window.addEventListener("resize",d),O.initialized=!0)}return O}function d(){T(y)}function u(){var e,t,n,i;O.tools.forOwn(O.sequences,function(o){i=O.sequences[o],e=!1;for(var r=0;r<i.elemIds.length;r++)n=i.elemIds[r],t=O.store.elements[n],q(t)&&!e&&(e=!0);i.active=e})}function y(){var e,t;u(),O.tools.forOwn(O.store.elements,function(n){t=O.store.elements[n],e=w(t),g(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),p("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&m(t,e)):v(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),p("reset",t),t.revealing=!1)})}function m(e,t){var n=0,i=0,o=O.sequences[e.sequence.id];o.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){o.blocked=!1,e.sequence.timer=null,d()},Math.abs(o.interval)+i-n)}function p(e,t,n){var i=0,o=0,r="after";switch(e){case"reveal":o=t.config.duration,n&&(o+=t.config.delay),r+="Reveal";break;case"reset":o=t.config.duration,r+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[r](t.domEl),t.timer=null},o-i)}function g(e){if(e.sequence){var t=O.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return q(e)&&!e.revealing&&!e.disabled}function w(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!O.initialized||"once"===t&&!e.seen}function v(e){if(e.sequence){var t=O.sequences[e.sequence.id];return!t.active&&e.config.reset&&e.revealing&&!e.disabled}return!q(e)&&e.config.reset&&e.revealing&&!e.disabled}function b(e){return{width:e.clientWidth,height:e.clientHeight}}function h(e){if(e&&e!==window.document.documentElement){var t=x(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function x(e){var t=0,n=0,i=e.offsetHeight,o=e.offsetWidth;do isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent;while(e);return{top:t,left:n,height:i,width:o}}function q(e){function t(){var t=c+a*s,n=f+l*s,i=d-a*s,y=u-l*s,m=r.y+e.config.viewOffset.top,p=r.x+e.config.viewOffset.left,g=r.y-e.config.viewOffset.bottom+o.height,w=r.x-e.config.viewOffset.right+o.width;return t<g&&i>m&&n<w&&y>p}function n(){return"fixed"===window.getComputedStyle(e.domEl).position}var i=x(e.domEl),o=b(e.config.container),r=h(e.config.container),s=e.config.viewFactor,a=i.height,l=i.width,c=i.top,f=i.left,d=c+a,u=f+l;return t()||n()}function E(){}var O,T;e.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},e.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},e.prototype.reveal=function(e,s,a,d){var u,y,m,p,g,w;if(void 0!==s&&"number"==typeof s?(a=s,s={}):void 0!==s&&null!==s||(s={}),u=t(s),y=n(e,u),!y.length)return O;a&&"number"==typeof a&&(w=i(),g=O.sequences[w]={id:w,interval:a,elemIds:[],active:!1});for(var v=0;v<y.length;v++)p=y[v].getAttribute("data-sr-id"),p?m=O.store.elements[p]:(m={id:i(),domEl:y[v],seen:!1,revealing:!1},m.domEl.setAttribute("data-sr-id",m.id)),g&&(m.sequence={id:g.id,index:g.elemIds.length},g.elemIds.push(m.id)),o(m,s,u),r(m),l(m),O.tools.isMobile()&&!m.config.mobile||!O.isSupported()?(m.domEl.setAttribute("style",m.styles.inline),m.disabled=!0):m.revealing||m.domEl.setAttribute("style",m.styles.inline+m.styles.transform.initial);return!d&&O.isSupported()&&(c(e,s,a),O.initTimeout&&window.clearTimeout(O.initTimeout),O.initTimeout=window.setTimeout(f,0)),O},e.prototype.sync=function(){if(O.history.length&&O.isSupported()){for(var e=0;e<O.history.length;e++){var t=O.history[e];O.reveal(t.target,t.config,t.interval,!0)}f()}return O},E.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},E.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},E.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},E.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},E.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},E.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},E.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},T=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return e}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=e:window.ScrollReveal=e}();

/***/ },
/* 10 */
/***/ function(module, exports) {

	(function ($, undefined) {
	    'use strict';
	    var defaults = {
	        item: 3,
	        autoWidth: false,
	        slideMove: 1,
	        slideMargin: 10,
	        addClass: '',
	        mode: 'slide',
	        useCSS: true,
	        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',
	        easing: 'linear', //'for jquery animation',//
	        speed: 400, //ms'
	        auto: false,
	        pauseOnHover: false,
	        loop: false,
	        slideEndAnimation: true,
	        pause: 2000,
	        keyPress: false,
	        controls: true,
	        prevHtml: '',
	        nextHtml: '',
	        rtl: false,
	        adaptiveHeight: false,
	        vertical: false,
	        verticalHeight: 500,
	        vThumbWidth: 100,
	        thumbItem: 10,
	        pager: true,
	        gallery: false,
	        galleryMargin: 5,
	        thumbMargin: 5,
	        currentPagerPosition: 'middle',
	        enableTouch: true,
	        enableDrag: true,
	        freeMove: true,
	        swipeThreshold: 40,
	        responsive: [],
	        /* jshint ignore:start */
	        onBeforeStart: function ($el) {},
	        onSliderLoad: function ($el) {},
	        onBeforeSlide: function ($el, scene) {},
	        onAfterSlide: function ($el, scene) {},
	        onBeforeNextSlide: function ($el, scene) {},
	        onBeforePrevSlide: function ($el, scene) {}
	        /* jshint ignore:end */
	    };
	    $.fn.lightSlider = function (options) {
	        if (this.length === 0) {
	            return this;
	        }

	        if (this.length > 1) {
	            this.each(function () {
	                $(this).lightSlider(options);
	            });
	            return this;
	        }

	        var plugin = {},
	            settings = $.extend(true, {}, defaults, options),
	            settingsTemp = {},
	            $el = this;
	        plugin.$el = this;

	        if (settings.mode === 'fade') {
	            settings.vertical = false;
	        }
	        var $children = $el.children(),
	            windowW = $(window).width(),
	            breakpoint = null,
	            resposiveObj = null,
	            length = 0,
	            w = 0,
	            on = false,
	            elSize = 0,
	            $slide = '',
	            scene = 0,
	            property = (settings.vertical === true) ? 'height' : 'width',
	            gutter = (settings.vertical === true) ? 'margin-bottom' : 'margin-right',
	            slideValue = 0,
	            pagerWidth = 0,
	            slideWidth = 0,
	            thumbWidth = 0,
	            interval = null,
	            isTouch = ('ontouchstart' in document.documentElement);
	        var refresh = {};

	        refresh.chbreakpoint = function () {
	            windowW = $(window).width();
	            if (settings.responsive.length) {
	                var item;
	                if (settings.autoWidth === false) {
	                    item = settings.item;
	                }
	                if (windowW < settings.responsive[0].breakpoint) {
	                    for (var i = 0; i < settings.responsive.length; i++) {
	                        if (windowW < settings.responsive[i].breakpoint) {
	                            breakpoint = settings.responsive[i].breakpoint;
	                            resposiveObj = settings.responsive[i];
	                        }
	                    }
	                }
	                if (typeof resposiveObj !== 'undefined' && resposiveObj !== null) {
	                    for (var j in resposiveObj.settings) {
	                        if (resposiveObj.settings.hasOwnProperty(j)) {
	                            if (typeof settingsTemp[j] === 'undefined' || settingsTemp[j] === null) {
	                                settingsTemp[j] = settings[j];
	                            }
	                            settings[j] = resposiveObj.settings[j];
	                        }
	                    }
	                }
	                if (!$.isEmptyObject(settingsTemp) && windowW > settings.responsive[0].breakpoint) {
	                    for (var k in settingsTemp) {
	                        if (settingsTemp.hasOwnProperty(k)) {
	                            settings[k] = settingsTemp[k];
	                        }
	                    }
	                }
	                if (settings.autoWidth === false) {
	                    if (slideValue > 0 && slideWidth > 0) {
	                        if (item !== settings.item) {
	                            scene = Math.round(slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove));
	                        }
	                    }
	                }
	            }
	        };

	        refresh.calSW = function () {
	            if (settings.autoWidth === false) {
	                slideWidth = (elSize - ((settings.item * (settings.slideMargin)) - settings.slideMargin)) / settings.item;
	            }
	        };

	        refresh.calWidth = function (cln) {
	            var ln = cln === true ? $slide.find('.lslide').length : $children.length;
	            if (settings.autoWidth === false) {
	                w = ln * (slideWidth + settings.slideMargin);
	            } else {
	                w = 0;
	                for (var i = 0; i < ln; i++) {
	                    w += (parseInt($children.eq(i).width()) + settings.slideMargin);
	                }
	            }
	            return w;
	        };
	        plugin = {
	            doCss: function () {
	                var support = function () {
	                    var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
	                    var root = document.documentElement;
	                    for (var i = 0; i < transition.length; i++) {
	                        if (transition[i] in root.style) {
	                            return true;
	                        }
	                    }
	                };
	                if (settings.useCSS && support()) {
	                    return true;
	                }
	                return false;
	            },
	            keyPress: function () {
	                if (settings.keyPress) {
	                    $(document).on('keyup.lightslider', function (e) {
	                        if (!$(':focus').is('input, textarea')) {
	                            if (e.preventDefault) {
	                                e.preventDefault();
	                            } else {
	                                e.returnValue = false;
	                            }
	                            if (e.keyCode === 37) {
	                                $el.goToPrevSlide();
	                            } else if (e.keyCode === 39) {
	                                $el.goToNextSlide();
	                            }
	                        }
	                    });
	                }
	            },
	            controls: function () {
	                if (settings.controls) {
	                    $el.after('<div class="lSAction"><a class="lSPrev">' + settings.prevHtml + '</a><a class="lSNext">' + settings.nextHtml + '</a></div>');
	                    if (!settings.autoWidth) {
	                        if (length <= settings.item) {
	                            $slide.find('.lSAction').hide();
	                        }
	                    } else {
	                        if (refresh.calWidth(false) < elSize) {
	                            $slide.find('.lSAction').hide();
	                        }
	                    }
	                    $slide.find('.lSAction a').on('click', function (e) {
	                        if (e.preventDefault) {
	                            e.preventDefault();
	                        } else {
	                            e.returnValue = false;
	                        }
	                        if ($(this).attr('class') === 'lSPrev') {
	                            $el.goToPrevSlide();
	                        } else {
	                            $el.goToNextSlide();
	                        }
	                        return false;
	                    });
	                }
	            },
	            initialStyle: function () {
	                var $this = this;
	                if (settings.mode === 'fade') {
	                    settings.autoWidth = false;
	                    settings.slideEndAnimation = false;
	                }
	                if (settings.auto) {
	                    settings.slideEndAnimation = false;
	                }
	                if (settings.autoWidth) {
	                    settings.slideMove = 1;
	                    settings.item = 1;
	                }
	                if (settings.loop) {
	                    settings.slideMove = 1;
	                    settings.freeMove = false;
	                }
	                settings.onBeforeStart.call(this, $el);
	                refresh.chbreakpoint();
	                $el.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + settings.addClass + '"><div class="lSSlideWrapper"></div></div>');
	                $slide = $el.parent('.lSSlideWrapper');
	                if (settings.rtl === true) {
	                    $slide.parent().addClass('lSrtl');
	                }
	                if (settings.vertical) {
	                    $slide.parent().addClass('vertical');
	                    elSize = settings.verticalHeight;
	                    $slide.css('height', elSize + 'px');
	                } else {
	                    elSize = $el.outerWidth();
	                }
	                $children.addClass('lslide');
	                if (settings.loop === true && settings.mode === 'slide') {
	                    refresh.calSW();
	                    refresh.clone = function () {
	                        if (refresh.calWidth(true) > elSize) {
	                            /**/
	                            var tWr = 0,
	                                tI = 0;
	                            for (var k = 0; k < $children.length; k++) {
	                                tWr += (parseInt($el.find('.lslide').eq(k).width()) + settings.slideMargin);
	                                tI++;
	                                if (tWr >= (elSize + settings.slideMargin)) {
	                                    break;
	                                }
	                            }
	                            var tItem = settings.autoWidth === true ? tI : settings.item;

	                            /**/
	                            if (tItem < $el.find('.clone.left').length) {
	                                for (var i = 0; i < $el.find('.clone.left').length - tItem; i++) {
	                                    $children.eq(i).remove();
	                                }
	                            }
	                            if (tItem < $el.find('.clone.right').length) {
	                                for (var j = $children.length - 1; j > ($children.length - 1 - $el.find('.clone.right').length); j--) {
	                                    scene--;
	                                    $children.eq(j).remove();
	                                }
	                            }
	                            /**/
	                            for (var n = $el.find('.clone.right').length; n < tItem; n++) {
	                                $el.find('.lslide').eq(n).clone().removeClass('lslide').addClass('clone right').appendTo($el);
	                                scene++;
	                            }
	                            for (var m = $el.find('.lslide').length - $el.find('.clone.left').length; m > ($el.find('.lslide').length - tItem); m--) {
	                                $el.find('.lslide').eq(m - 1).clone().removeClass('lslide').addClass('clone left').prependTo($el);
	                            }
	                            $children = $el.children();
	                        } else {
	                            if ($children.hasClass('clone')) {
	                                $el.find('.clone').remove();
	                                $this.move($el, 0);
	                            }
	                        }
	                    };
	                    refresh.clone();
	                }
	                refresh.sSW = function () {
	                    length = $children.length;
	                    if (settings.rtl === true && settings.vertical === false) {
	                        gutter = 'margin-left';
	                    }
	                    if (settings.autoWidth === false) {
	                        $children.css(property, slideWidth + 'px');
	                    }
	                    $children.css(gutter, settings.slideMargin + 'px');
	                    w = refresh.calWidth(false);
	                    $el.css(property, w + 'px');
	                    if (settings.loop === true && settings.mode === 'slide') {
	                        if (on === false) {
	                            scene = $el.find('.clone.left').length;
	                        }
	                    }
	                };
	                refresh.calL = function () {
	                    $children = $el.children();
	                    length = $children.length;
	                };
	                if (this.doCss()) {
	                    $slide.addClass('usingCss');
	                }
	                refresh.calL();
	                if (settings.mode === 'slide') {
	                    refresh.calSW();
	                    refresh.sSW();
	                    if (settings.loop === true) {
	                        slideValue = $this.slideValue();
	                        this.move($el, slideValue);
	                    }
	                    if (settings.vertical === false) {
	                        this.setHeight($el, false);
	                    }

	                } else {
	                    this.setHeight($el, true);
	                    $el.addClass('lSFade');
	                    if (!this.doCss()) {
	                        $children.fadeOut(0);
	                        $children.eq(scene).fadeIn(0);
	                    }
	                }
	                if (settings.loop === true && settings.mode === 'slide') {
	                    $children.eq(scene).addClass('active');
	                } else {
	                    $children.first().addClass('active');
	                }
	            },
	            pager: function () {
	                var $this = this;
	                refresh.createPager = function () {
	                    thumbWidth = (elSize - ((settings.thumbItem * (settings.thumbMargin)) - settings.thumbMargin)) / settings.thumbItem;
	                    var $children = $slide.find('.lslide');
	                    var length = $slide.find('.lslide').length;
	                    var i = 0,
	                        pagers = '',
	                        v = 0;
	                    for (i = 0; i < length; i++) {
	                        if (settings.mode === 'slide') {
	                            // calculate scene * slide value
	                            if (!settings.autoWidth) {
	                                v = i * ((slideWidth + settings.slideMargin) * settings.slideMove);
	                            } else {
	                                v += ((parseInt($children.eq(i).width()) + settings.slideMargin) * settings.slideMove);
	                            }
	                        }
	                        var thumb = $children.eq(i * settings.slideMove).attr('data-thumb');
	                        if (settings.gallery === true) {
	                            pagers += '<li style="width:100%;' + property + ':' + thumbWidth + 'px;' + gutter + ':' + settings.thumbMargin + 'px"><a href="#"><img src="' + thumb + '" /></a></li>';
	                        } else {
	                            pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
	                        }
	                        if (settings.mode === 'slide') {
	                            if ((v) >= w - elSize - settings.slideMargin) {
	                                i = i + 1;
	                                var minPgr = 2;
	                                if (settings.autoWidth) {
	                                    pagers += '<li><a href="#">' + (i + 1) + '</a></li>';
	                                    minPgr = 1;
	                                }
	                                if (i < minPgr) {
	                                    pagers = null;
	                                    $slide.parent().addClass('noPager');
	                                } else {
	                                    $slide.parent().removeClass('noPager');
	                                }
	                                break;
	                            }
	                        }
	                    }
	                    var $cSouter = $slide.parent();
	                    $cSouter.find('.lSPager').html(pagers); 
	                    if (settings.gallery === true) {
	                        if (settings.vertical === true) {
	                            // set Gallery thumbnail width
	                            $cSouter.find('.lSPager').css('width', settings.vThumbWidth + 'px');
	                        }
	                        pagerWidth = (i * (settings.thumbMargin + thumbWidth)) + 0.5;
	                        $cSouter.find('.lSPager').css({
	                            property: pagerWidth + 'px',
	                            'transition-duration': settings.speed + 'ms'
	                        });
	                        if (settings.vertical === true) {
	                            $slide.parent().css('padding-right', (settings.vThumbWidth + settings.galleryMargin) + 'px');
	                        }
	                        $cSouter.find('.lSPager').css(property, pagerWidth + 'px');
	                    }
	                    var $pager = $cSouter.find('.lSPager').find('li');
	                    $pager.first().addClass('active');
	                    $pager.on('click', function () {
	                        if (settings.loop === true && settings.mode === 'slide') {
	                            scene = scene + ($pager.index(this) - $cSouter.find('.lSPager').find('li.active').index());
	                        } else {
	                            scene = $pager.index(this);
	                        }
	                        $el.mode(false);
	                        if (settings.gallery === true) {
	                            $this.slideThumb();
	                        }
	                        return false;
	                    });
	                };
	                if (settings.pager) {
	                    var cl = 'lSpg';
	                    if (settings.gallery) {
	                        cl = 'lSGallery';
	                    }
	                    $slide.after('<ul class="lSPager ' + cl + '"></ul>');
	                    var gMargin = (settings.vertical) ? 'margin-left' : 'margin-top';
	                    $slide.parent().find('.lSPager').css(gMargin, settings.galleryMargin + 'px');
	                    refresh.createPager();
	                }

	                setTimeout(function () {
	                    refresh.init();
	                }, 0);
	            },
	            setHeight: function (ob, fade) {
	                var obj = null,
	                    $this = this;
	                if (settings.loop) {
	                    obj = ob.children('.lslide ').first();
	                } else {
	                    obj = ob.children().first();
	                }
	                var setCss = function () {
	                    var tH = obj.outerHeight(),
	                        tP = 0,
	                        tHT = tH;
	                    if (fade) {
	                        tH = 0;
	                        tP = ((tHT) * 100) / elSize;
	                    }
	                    ob.css({
	                        'height': tH + 'px',
	                        'padding-bottom': tP + '%'
	                    });
	                };
	                setCss();
	                if (obj.find('img').length) {
	                    if ( obj.find('img')[0].complete) {
	                        setCss();
	                        if (!interval) {
	                            $this.auto();
	                        }   
	                    }else{
	                        obj.find('img').on('load', function () {
	                            setTimeout(function () {
	                                setCss();
	                                if (!interval) {
	                                    $this.auto();
	                                }
	                            }, 100);
	                        });
	                    }
	                }else{
	                    if (!interval) {
	                        $this.auto();
	                    }
	                }
	            },
	            active: function (ob, t) {
	                if (this.doCss() && settings.mode === 'fade') {
	                    $slide.addClass('on');
	                }
	                var sc = 0;
	                if (scene * settings.slideMove < length) {
	                    ob.removeClass('active');
	                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
	                        ob.fadeOut(settings.speed);
	                    }
	                    if (t === true) {
	                        sc = scene;
	                    } else {
	                        sc = scene * settings.slideMove;
	                    }
	                    //t === true ? sc = scene : sc = scene * settings.slideMove;
	                    var l, nl;
	                    if (t === true) {
	                        l = ob.length;
	                        nl = l - 1;
	                        if (sc + 1 >= l) {
	                            sc = nl;
	                        }
	                    }
	                    if (settings.loop === true && settings.mode === 'slide') {
	                        //t === true ? sc = scene - $el.find('.clone.left').length : sc = scene * settings.slideMove;
	                        if (t === true) {
	                            sc = scene - $el.find('.clone.left').length;
	                        } else {
	                            sc = scene * settings.slideMove;
	                        }
	                        if (t === true) {
	                            l = ob.length;
	                            nl = l - 1;
	                            if (sc + 1 === l) {
	                                sc = nl;
	                            } else if (sc + 1 > l) {
	                                sc = 0;
	                            }
	                        }
	                    }

	                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
	                        ob.eq(sc).fadeIn(settings.speed);
	                    }
	                    ob.eq(sc).addClass('active');
	                } else {
	                    ob.removeClass('active');
	                    ob.eq(ob.length - 1).addClass('active');
	                    if (!this.doCss() && settings.mode === 'fade' && t === false) {
	                        ob.fadeOut(settings.speed);
	                        ob.eq(sc).fadeIn(settings.speed);
	                    }
	                }
	            },
	            move: function (ob, v) {
	                if (settings.rtl === true) {
	                    v = -v;
	                }
	                if (this.doCss()) {
	                    if (settings.vertical === true) {
	                        ob.css({
	                            'transform': 'translate3d(0px, ' + (-v) + 'px, 0px)',
	                            '-webkit-transform': 'translate3d(0px, ' + (-v) + 'px, 0px)'
	                        });
	                    } else {
	                        ob.css({
	                            'transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
	                            '-webkit-transform': 'translate3d(' + (-v) + 'px, 0px, 0px)',
	                        });
	                    }
	                } else {
	                    if (settings.vertical === true) {
	                        ob.css('position', 'relative').animate({
	                            top: -v + 'px'
	                        }, settings.speed, settings.easing);
	                    } else {
	                        ob.css('position', 'relative').animate({
	                            left: -v + 'px'
	                        }, settings.speed, settings.easing);
	                    }
	                }
	                var $thumb = $slide.parent().find('.lSPager').find('li');
	                this.active($thumb, true);
	            },
	            fade: function () {
	                this.active($children, false);
	                var $thumb = $slide.parent().find('.lSPager').find('li');
	                this.active($thumb, true);
	            },
	            slide: function () {
	                var $this = this;
	                refresh.calSlide = function () {
	                    if (w > elSize) {
	                        slideValue = $this.slideValue();
	                        $this.active($children, false);
	                        if ((slideValue) > w - elSize - settings.slideMargin) {
	                            slideValue = w - elSize - settings.slideMargin;
	                        } else if (slideValue < 0) {
	                            slideValue = 0;
	                        }
	                        $this.move($el, slideValue);
	                        if (settings.loop === true && settings.mode === 'slide') {
	                            if (scene >= (length - ($el.find('.clone.left').length / settings.slideMove))) {
	                                $this.resetSlide($el.find('.clone.left').length);
	                            }
	                            if (scene === 0) {
	                                $this.resetSlide($slide.find('.lslide').length);
	                            }
	                        }
	                    }
	                };
	                refresh.calSlide();
	            },
	            resetSlide: function (s) {
	                var $this = this;
	                $slide.find('.lSAction a').addClass('disabled');
	                setTimeout(function () {
	                    scene = s;
	                    $slide.css('transition-duration', '0ms');
	                    slideValue = $this.slideValue();
	                    $this.active($children, false);
	                    plugin.move($el, slideValue);
	                    setTimeout(function () {
	                        $slide.css('transition-duration', settings.speed + 'ms');
	                        $slide.find('.lSAction a').removeClass('disabled');
	                    }, 50);
	                }, settings.speed + 100);
	            },
	            slideValue: function () {
	                var _sV = 0;
	                if (settings.autoWidth === false) {
	                    _sV = scene * ((slideWidth + settings.slideMargin) * settings.slideMove);
	                } else {
	                    _sV = 0;
	                    for (var i = 0; i < scene; i++) {
	                        _sV += (parseInt($children.eq(i).width()) + settings.slideMargin);
	                    }
	                }
	                return _sV;
	            },
	            slideThumb: function () {
	                var position;
	                switch (settings.currentPagerPosition) {
	                case 'left':
	                    position = 0;
	                    break;
	                case 'middle':
	                    position = (elSize / 2) - (thumbWidth / 2);
	                    break;
	                case 'right':
	                    position = elSize - thumbWidth;
	                }
	                var sc = scene - $el.find('.clone.left').length;
	                var $pager = $slide.parent().find('.lSPager');
	                if (settings.mode === 'slide' && settings.loop === true) {
	                    if (sc >= $pager.children().length) {
	                        sc = 0;
	                    } else if (sc < 0) {
	                        sc = $pager.children().length;
	                    }
	                }
	                var thumbSlide = sc * ((thumbWidth + settings.thumbMargin)) - (position);
	                if ((thumbSlide + elSize) > pagerWidth) {
	                    thumbSlide = pagerWidth - elSize - settings.thumbMargin;
	                }
	                if (thumbSlide < 0) {
	                    thumbSlide = 0;
	                }
	                this.move($pager, thumbSlide);
	            },
	            auto: function () {
	                if (settings.auto) {
	                    clearInterval(interval);
	                    interval = setInterval(function () {
	                        $el.goToNextSlide();
	                    }, settings.pause);
	                }
	            },
	            pauseOnHover: function(){
	                var $this = this;
	                if (settings.auto && settings.pauseOnHover) {
	                    $slide.on('mouseenter', function(){
	                        $(this).addClass('ls-hover');
	                        $el.pause();
	                        settings.auto = true;
	                    });
	                    $slide.on('mouseleave',function(){
	                        $(this).removeClass('ls-hover');
	                        if (!$slide.find('.lightSlider').hasClass('lsGrabbing')) {
	                            $this.auto();
	                        }
	                    });
	                }
	            },
	            touchMove: function (endCoords, startCoords) {
	                $slide.css('transition-duration', '0ms');
	                if (settings.mode === 'slide') {
	                    var distance = endCoords - startCoords;
	                    var swipeVal = slideValue - distance;
	                    if ((swipeVal) >= w - elSize - settings.slideMargin) {
	                        if (settings.freeMove === false) {
	                            swipeVal = w - elSize - settings.slideMargin;
	                        } else {
	                            var swipeValT = w - elSize - settings.slideMargin;
	                            swipeVal = swipeValT + ((swipeVal - swipeValT) / 5);

	                        }
	                    } else if (swipeVal < 0) {
	                        if (settings.freeMove === false) {
	                            swipeVal = 0;
	                        } else {
	                            swipeVal = swipeVal / 5;
	                        }
	                    }
	                    this.move($el, swipeVal);
	                }
	            },

	            touchEnd: function (distance) {
	                $slide.css('transition-duration', settings.speed + 'ms');
	                if (settings.mode === 'slide') {
	                    var mxVal = false;
	                    var _next = true;
	                    slideValue = slideValue - distance;
	                    if ((slideValue) > w - elSize - settings.slideMargin) {
	                        slideValue = w - elSize - settings.slideMargin;
	                        if (settings.autoWidth === false) {
	                            mxVal = true;
	                        }
	                    } else if (slideValue < 0) {
	                        slideValue = 0;
	                    }
	                    var gC = function (next) {
	                        var ad = 0;
	                        if (!mxVal) {
	                            if (next) {
	                                ad = 1;
	                            }
	                        }
	                        if (!settings.autoWidth) {
	                            var num = slideValue / ((slideWidth + settings.slideMargin) * settings.slideMove);
	                            scene = parseInt(num) + ad;
	                            if (slideValue >= (w - elSize - settings.slideMargin)) {
	                                if (num % 1 !== 0) {
	                                    scene++;
	                                }
	                            }
	                        } else {
	                            var tW = 0;
	                            for (var i = 0; i < $children.length; i++) {
	                                tW += (parseInt($children.eq(i).width()) + settings.slideMargin);
	                                scene = i + ad;
	                                if (tW >= slideValue) {
	                                    break;
	                                }
	                            }
	                        }
	                    };
	                    if (distance >= settings.swipeThreshold) {
	                        gC(false);
	                        _next = false;
	                    } else if (distance <= -settings.swipeThreshold) {
	                        gC(true);
	                        _next = false;
	                    }
	                    $el.mode(_next);
	                    this.slideThumb();
	                } else {
	                    if (distance >= settings.swipeThreshold) {
	                        $el.goToPrevSlide();
	                    } else if (distance <= -settings.swipeThreshold) {
	                        $el.goToNextSlide();
	                    }
	                }
	            },



	            enableDrag: function () {
	                var $this = this;
	                if (!isTouch) {
	                    var startCoords = 0,
	                        endCoords = 0,
	                        isDraging = false;
	                    $slide.find('.lightSlider').addClass('lsGrab');
	                    $slide.on('mousedown', function (e) {
	                        if (w < elSize) {
	                            if (w !== 0) {
	                                return false;
	                            }
	                        }
	                        if ($(e.target).attr('class') !== ('lSPrev') && $(e.target).attr('class') !== ('lSNext')) {
	                            startCoords = (settings.vertical === true) ? e.pageY : e.pageX;
	                            isDraging = true;
	                            if (e.preventDefault) {
	                                e.preventDefault();
	                            } else {
	                                e.returnValue = false;
	                            }
	                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
	                            $slide.scrollLeft += 1;
	                            $slide.scrollLeft -= 1;
	                            // *
	                            $slide.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing');
	                            clearInterval(interval);
	                        }
	                    });
	                    $(window).on('mousemove', function (e) {
	                        if (isDraging) {
	                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
	                            $this.touchMove(endCoords, startCoords);
	                        }
	                    });
	                    $(window).on('mouseup', function (e) {
	                        if (isDraging) {
	                            $slide.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab');
	                            isDraging = false;
	                            endCoords = (settings.vertical === true) ? e.pageY : e.pageX;
	                            var distance = endCoords - startCoords;
	                            if (Math.abs(distance) >= settings.swipeThreshold) {
	                                $(window).on('click.ls', function (e) {
	                                    if (e.preventDefault) {
	                                        e.preventDefault();
	                                    } else {
	                                        e.returnValue = false;
	                                    }
	                                    e.stopImmediatePropagation();
	                                    e.stopPropagation();
	                                    $(window).off('click.ls');
	                                });
	                            }

	                            $this.touchEnd(distance);

	                        }
	                    });
	                }
	            },




	            enableTouch: function () {
	                var $this = this;
	                if (isTouch) {
	                    var startCoords = {},
	                        endCoords = {};
	                    $slide.on('touchstart', function (e) {
	                        endCoords = e.originalEvent.targetTouches[0];
	                        startCoords.pageX = e.originalEvent.targetTouches[0].pageX;
	                        startCoords.pageY = e.originalEvent.targetTouches[0].pageY;
	                        clearInterval(interval);
	                    });
	                    $slide.on('touchmove', function (e) {
	                        if (w < elSize) {
	                            if (w !== 0) {
	                                return false;
	                            }
	                        }
	                        var orig = e.originalEvent;
	                        endCoords = orig.targetTouches[0];
	                        var xMovement = Math.abs(endCoords.pageX - startCoords.pageX);
	                        var yMovement = Math.abs(endCoords.pageY - startCoords.pageY);
	                        if (settings.vertical === true) {
	                            if ((yMovement * 3) > xMovement) {
	                                e.preventDefault();
	                            }
	                            $this.touchMove(endCoords.pageY, startCoords.pageY);
	                        } else {
	                            if ((xMovement * 3) > yMovement) {
	                                e.preventDefault();
	                            }
	                            $this.touchMove(endCoords.pageX, startCoords.pageX);
	                        }

	                    });
	                    $slide.on('touchend', function () {
	                        if (w < elSize) {
	                            if (w !== 0) {
	                                return false;
	                            }
	                        }
	                        var distance;
	                        if (settings.vertical === true) {
	                            distance = endCoords.pageY - startCoords.pageY;
	                        } else {
	                            distance = endCoords.pageX - startCoords.pageX;
	                        }
	                        $this.touchEnd(distance);
	                    });
	                }
	            },
	            build: function () {
	                var $this = this;
	                $this.initialStyle();
	                if (this.doCss()) {

	                    if (settings.enableTouch === true) {
	                        $this.enableTouch();
	                    }
	                    if (settings.enableDrag === true) {
	                        $this.enableDrag();
	                    }
	                }

	                $(window).on('focus', function(){
	                    $this.auto();
	                });
	                
	                $(window).on('blur', function(){
	                    clearInterval(interval);
	                });

	                $this.pager();
	                $this.pauseOnHover();
	                $this.controls();
	                $this.keyPress();
	            }
	        };
	        plugin.build();
	        refresh.init = function () {
	            refresh.chbreakpoint();
	            if (settings.vertical === true) {
	                if (settings.item > 1) {
	                    elSize = settings.verticalHeight;
	                } else {
	                    elSize = $children.outerHeight();
	                }
	                $slide.css('height', elSize + 'px');
	            } else {
	                elSize = $slide.outerWidth();
	            }
	            if (settings.loop === true && settings.mode === 'slide') {
	                refresh.clone();
	            }
	            refresh.calL();
	            if (settings.mode === 'slide') {
	                $el.removeClass('lSSlide');
	            }
	            if (settings.mode === 'slide') {
	                refresh.calSW();
	                refresh.sSW();
	            }
	            setTimeout(function () {
	                if (settings.mode === 'slide') {
	                    $el.addClass('lSSlide');
	                }
	            }, 1000);
	            if (settings.pager) {
	                refresh.createPager();
	            }
	            if (settings.adaptiveHeight === true && settings.vertical === false) {
	                $el.css('height', $children.eq(scene).outerHeight(true));
	            }
	            if (settings.adaptiveHeight === false) {
	                if (settings.mode === 'slide') {
	                    if (settings.vertical === false) {
	                        plugin.setHeight($el, false);
	                    }else{
	                        plugin.auto();
	                    }
	                } else {
	                    plugin.setHeight($el, true);
	                }
	            }
	            if (settings.gallery === true) {
	                plugin.slideThumb();
	            }
	            if (settings.mode === 'slide') {
	                plugin.slide();
	            }
	            if (settings.autoWidth === false) {
	                if ($children.length <= settings.item) {
	                    $slide.find('.lSAction').hide();
	                } else {
	                    $slide.find('.lSAction').show();
	                }
	            } else {
	                if ((refresh.calWidth(false) < elSize) && (w !== 0)) {
	                    $slide.find('.lSAction').hide();
	                } else {
	                    $slide.find('.lSAction').show();
	                }
	            }
	        };
	        $el.goToPrevSlide = function () {
	            if (scene > 0) {
	                settings.onBeforePrevSlide.call(this, $el, scene);
	                scene--;
	                $el.mode(false);
	                if (settings.gallery === true) {
	                    plugin.slideThumb();
	                }
	            } else {
	                if (settings.loop === true) {
	                    settings.onBeforePrevSlide.call(this, $el, scene);
	                    if (settings.mode === 'fade') {
	                        var l = (length - 1);
	                        scene = parseInt(l / settings.slideMove);
	                    }
	                    $el.mode(false);
	                    if (settings.gallery === true) {
	                        plugin.slideThumb();
	                    }
	                } else if (settings.slideEndAnimation === true) {
	                    $el.addClass('leftEnd');
	                    setTimeout(function () {
	                        $el.removeClass('leftEnd');
	                    }, 400);
	                }
	            }
	        };
	        $el.goToNextSlide = function () {
	            var nextI = true;
	            if (settings.mode === 'slide') {
	                var _slideValue = plugin.slideValue();
	                nextI = _slideValue < w - elSize - settings.slideMargin;
	            }
	            if (((scene * settings.slideMove) < length - settings.slideMove) && nextI) {
	                settings.onBeforeNextSlide.call(this, $el, scene);
	                scene++;
	                $el.mode(false);
	                if (settings.gallery === true) {
	                    plugin.slideThumb();
	                }
	            } else {
	                if (settings.loop === true) {
	                    settings.onBeforeNextSlide.call(this, $el, scene);
	                    scene = 0;
	                    $el.mode(false);
	                    if (settings.gallery === true) {
	                        plugin.slideThumb();
	                    }
	                } else if (settings.slideEndAnimation === true) {
	                    $el.addClass('rightEnd');
	                    setTimeout(function () {
	                        $el.removeClass('rightEnd');
	                    }, 400);
	                }
	            }
	        };
	        $el.mode = function (_touch) {
	            if (settings.adaptiveHeight === true && settings.vertical === false) {
	                $el.css('height', $children.eq(scene).outerHeight(true));
	            }
	            if (on === false) {
	                if (settings.mode === 'slide') {
	                    if (plugin.doCss()) {
	                        $el.addClass('lSSlide');
	                        if (settings.speed !== '') {
	                            $slide.css('transition-duration', settings.speed + 'ms');
	                        }
	                        if (settings.cssEasing !== '') {
	                            $slide.css('transition-timing-function', settings.cssEasing);
	                        }
	                    }
	                } else {
	                    if (plugin.doCss()) {
	                        if (settings.speed !== '') {
	                            $el.css('transition-duration', settings.speed + 'ms');
	                        }
	                        if (settings.cssEasing !== '') {
	                            $el.css('transition-timing-function', settings.cssEasing);
	                        }
	                    }
	                }
	            }
	            if (!_touch) {
	                settings.onBeforeSlide.call(this, $el, scene);
	            }
	            if (settings.mode === 'slide') {
	                plugin.slide();
	            } else {
	                plugin.fade();
	            }
	            if (!$slide.hasClass('ls-hover')) {
	                plugin.auto();
	            }
	            setTimeout(function () {
	                if (!_touch) {
	                    settings.onAfterSlide.call(this, $el, scene);
	                }
	            }, settings.speed);
	            on = true;
	        };
	        $el.play = function () {
	            $el.goToNextSlide();
	            settings.auto = true;
	            plugin.auto();
	        };
	        $el.pause = function () {
	            settings.auto = false;
	            clearInterval(interval);
	        };
	        $el.refresh = function () {
	            refresh.init();
	        };
	        $el.getCurrentSlideCount = function () {
	            var sc = scene;
	            if (settings.loop) {
	                var ln = $slide.find('.lslide').length,
	                    cl = $el.find('.clone.left').length;
	                if (scene <= cl - 1) {
	                    sc = ln + (scene - cl);
	                } else if (scene >= (ln + cl)) {
	                    sc = scene - ln - cl;
	                } else {
	                    sc = scene - cl;
	                }
	            }
	            return sc + 1;
	        }; 
	        $el.getTotalSlideCount = function () {
	            return $slide.find('.lslide').length;
	        };
	        $el.goToSlide = function (s) {
	            if (settings.loop) {
	                scene = (s + $el.find('.clone.left').length - 1);
	            } else {
	                scene = s;
	            }
	            $el.mode(false);
	            if (settings.gallery === true) {
	                plugin.slideThumb();
	            }
	        };
	        $el.destroy = function () {
	            if ($el.lightSlider) {
	                $el.goToPrevSlide = function(){};
	                $el.goToNextSlide = function(){};
	                $el.mode = function(){};
	                $el.play = function(){};
	                $el.pause = function(){};
	                $el.refresh = function(){};
	                $el.getCurrentSlideCount = function(){};
	                $el.getTotalSlideCount = function(){};
	                $el.goToSlide = function(){}; 
	                $el.lightSlider = null;
	                refresh = {
	                    init : function(){}
	                };
	                $el.parent().parent().find('.lSAction, .lSPager').remove();
	                $el.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap();
	                $el.children().removeAttr('style');
	                $children.removeClass('lslide active');
	                $el.find('.clone').remove();
	                $children = null;
	                interval = null;
	                on = false;
	                scene = 0;
	            }

	        };
	        setTimeout(function () {
	            settings.onSliderLoad.call(this, $el);
	        }, 10);
	        $(window).on('resize orientationchange', function (e) {
	            setTimeout(function () {
	                if (e.preventDefault) {
	                    e.preventDefault();
	                } else {
	                    e.returnValue = false;
	                }
	                refresh.init();
	            }, 200);
	        });
	        return this;
	    };
	}(jQuery));


/***/ },
/* 11 */
/***/ function(module, exports) {

	(function ($) {
	  $(document).ready(function() {
	    if ($('.page-scroll').length !== 0) {
	      $('.page-scroll').fullpage({
	        navigation: true,
	        navigationPosition: 'right',
	        navigationTooltips: ['','Traktoriai', 'Kombainai', 'Krautuvai', 'Savivarčių priekabos', 'Puspriekabės', "Vilkikai"],
	        showActiveTooltip: true,
	        scrollingSpeed: 700,
	      });
	    }

	    $('section > p').matchHeight();

	    if ( $(window).width() >= 768){
	      $(".header__menu > li").hover(function(){
	          $(this).toggleClass("active");
	      });
	    } 

	    if ( $(window).width() < 768) {
	      $(".header__menu > li").click(function(){
	          $(this).toggleClass("active");
	      });
	      //   $(".header__menu > li a").click(function(){
	      //     $(".header__menu").css('display', 'none');
	      // });
	    }

	    $(".header__menu > li").each(function(index) {
	      if($(this).find('ul').length !== 0) {
	        $(this).addClass('has-children');
	      }
	    });


	    $(".header__burger-menu").click(function () {
	      $(".header__menu").toggleClass("toggle-menu"); 
	    });

	    $('.language-menu').click(function() {
	      $(".language-menu > div").toggleClass("active");
	    });

	      //  $(document.body).click(function() {
	      //     $(".language-menu > div").removeClass("active");     
	      // });


	    $('.language-menu > div').on('focusout', function () {
	      $(this).removeClass('active');
	    });


	    $('.paging ul li').click(function() {
	      $('.paging ul li').removeClass("active");
	      $(this).toggleClass("active");
	    });


	    $('.nuoma-vidinis .isorinis__heading a p').click(function() {
	      $('.nuoma-vidinis .isorinis__heading a p').removeClass("active");
	      $(this).addClass("active");
	    });

	    $('.mokymai .isorinis__heading a p').click(function() {
	      $('.mokymai .isorinis__heading a p').removeClass("active");
	      $(this).addClass("active");
	    });

	    $('.isorinis__models-block > div').matchHeight();

	    $('.isorinis__info-blocks--first-line').matchHeight();

	    $('.isorinis__info-blocks--second-line').matchHeight();

	    $('.similar').matchHeight();

	    $('.header__menu li').click(function() {
	      $('.header__menu li').removeClass("active2");
	      $(this).addClass("active2");
	    });

	    $('.header__menu a').on('click', function() {
	      if ($(this).next().length === 0) {
	        $('.header__menu').removeClass('toggle-menu');
	      }
	    });

	    // $(".main-section__info-block .btn__red--big").click(function() {
	    //   $('body').animate({
	    //     scrollTop: $(".main-section__second").offset().top},'slow');
	    // });

	    //scroll arrows

	    $( ".other-pages__arrow" ).click(function(e) {
	      e.preventDefault(), $("html, body").animate({
	        scrollTop: $(".other-pages__arrow").offset().top + 30
	      }, 1e3)
	    });

	    $( ".other-pages__arrow2" ).click(function(f) {
	      f.preventDefault(), $("html, body").animate({
	        scrollTop: $(".other-pages__arrow2").offset().top + 30
	      }, 1e3)
	    });

	    $(".main-section__arrow").click(function(f) {
	      $.fn.fullpage.moveSectionDown();
	    });

	    $(".main-section__info-block .btn__red--big").click(function(f) {
	      $.fn.fullpage.moveSectionDown();
	    });

	    if ($('#lightSlider').length !== 0) {
	      if ($(window).width() > 1024) {
	        $('#lightSlider').lightSlider({
	          gallery: true,
	          item: 1,
	          loop: true,
	          sliderMargin: 0,
	          thumbItem: 4,
	        });
	      }
	      
	      if ($(window).width() <= 1024) {
	        $('#lightSlider').lightSlider({
	          gallery: true,
	          item: 1,
	          loop: true,
	          sliderMargin: 0,
	          thumbItem: 8,
	        });
	      }
	    }
	  });

	  $(document).mouseup(function(e) {
	    var languageContainer = $('.language-menu > div');

	    if (!languageContainer.is(e.target) && languageContainer.has(e.target).length === 0) {
	      languageContainer.removeClass('active');
	    }
	  });
	})(jQuery);


/***/ }
/******/ ]);