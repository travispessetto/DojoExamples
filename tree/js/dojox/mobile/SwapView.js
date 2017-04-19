//>>built
define("dojox/mobile/SwapView","dojo/_base/array dojo/_base/connect dojo/_base/declare dojo/dom dojo/dom-class dijit/registry ./View ./_ScrollableMixin ./sniff ./_css3 dojo/has!dojo-bidi?dojox/mobile/bidi/SwapView".split(" "),function(n,p,q,r,e,l,k,t,m,u,v){k=q(m("dojo-bidi")?"dojox.mobile.NonBidiSwapView":"dojox.mobile.SwapView",[k,t],{scrollDir:"f",weight:1.2,_endOfTransitionTimeoutHandle:null,buildRendering:function(){this.inherited(arguments);e.add(this.domNode,"mblSwapView");this.setSelectable(this.domNode,
!1);this.containerNode=this.domNode;this.subscribe("/dojox/mobile/nextPage","handleNextPage");this.subscribe("/dojox/mobile/prevPage","handlePrevPage");this.noResize=!0},startup:function(){this._started||this.inherited(arguments)},resize:function(){this.inherited(arguments);n.forEach(this.getChildren(),function(a){a.resize&&a.resize()})},onTouchStart:function(a){if(this._siblingViewsInMotion())this.propagatable?a.preventDefault():event.stop(a);else{var c=this.domNode.offsetTop,b=this.nextView(this.domNode);
b&&(b.stopAnimation(),e.add(b.domNode,"mblIn"),b.containerNode.style.paddingTop=c+"px");if(b=this.previousView(this.domNode))b.stopAnimation(),e.add(b.domNode,"mblIn"),b.containerNode.style.paddingTop=c+"px";this._setSiblingViewsInMotion(!0);this.inherited(arguments)}},onTouchEnd:function(a){a&&(this._moved?this._endOfTransitionTimeoutHandle=this.defer(function(){this._setSiblingViewsInMotion(!1)},1E3):this._setSiblingViewsInMotion(!1));this.inherited(arguments)},handleNextPage:function(a){a=a.refId&&
r.byId(a.refId)||a.domNode;this.domNode.parentNode===a.parentNode&&this.getShowingView()===this&&this.goTo(1)},handlePrevPage:function(a){a=a.refId&&r.byId(a.refId)||a.domNode;this.domNode.parentNode===a.parentNode&&this.getShowingView()===this&&this.goTo(-1)},goTo:function(a,c){var b=c?l.byId(c):1==a?this.nextView(this.domNode):this.previousView(this.domNode);b&&b!==this&&(this.stopAnimation(),b.stopAnimation(),this.domNode._isShowing=!1,b.domNode._isShowing=!0,this.performTransition(b.id,a,"slide",
null,function(){p.publish("/dojox/mobile/viewChanged",[b])}))},isSwapView:function(a){return a&&1===a.nodeType&&e.contains(a,"mblSwapView")},nextView:function(a){for(a=a.nextSibling;a;a=a.nextSibling)if(this.isSwapView(a))return l.byNode(a);return null},previousView:function(a){for(a=a.previousSibling;a;a=a.previousSibling)if(this.isSwapView(a))return l.byNode(a);return null},scrollTo:function(a){if(!this._beingFlipped){var c,b;a.x&&(0>a.x?(c=this.nextView(this.domNode),b=a.x+this.domNode.offsetWidth):
(c=this.previousView(this.domNode),b=a.x-this.domNode.offsetWidth));c&&("none"===c.domNode.style.display&&(c.domNode.style.display="",c.resize()),c._beingFlipped=!0,c.scrollTo({x:b}),c._beingFlipped=!1)}this.inherited(arguments)},findDisp:function(a){if(!e.contains(a,"mblSwapView"))return this.inherited(arguments);if(!a.parentNode)return null;for(var c=a.parentNode.childNodes,b=0;b<c.length;b++){var f=c[b];if(1===f.nodeType&&e.contains(f,"mblSwapView")&&!e.contains(f,"mblIn")&&"none"!==f.style.display)return f}return a},
slideTo:function(a,c,b,e){if(!this._beingFlipped){var h=this.domNode.offsetWidth,f=e||this.getPos(),d,g;0>f.x?(d=this.nextView(this.domNode),f.x<-h/4?d&&(a.x=-h,g=0):d&&(g=h)):(d=this.previousView(this.domNode),f.x>h/4?d&&(a.x=h,g=0):d&&(g=-h));d&&(d._beingFlipped=!0,d.slideTo({x:g},c,b),d._beingFlipped=!1,d.domNode._isShowing=d&&0===g);this.domNode._isShowing=!(d&&0===g)}this.inherited(arguments)},onAnimationEnd:function(a){a&&a.target&&e.contains(a.target,"mblScrollableScrollTo2")||this.inherited(arguments)},
onFlickAnimationEnd:function(a){this._endOfTransitionTimeoutHandle&&(this._endOfTransitionTimeoutHandle=this._endOfTransitionTimeoutHandle.remove());a&&a.target&&!e.contains(a.target,"mblScrollableScrollTo2")||(this.inherited(arguments),this.domNode._isShowing?(n.forEach(this.domNode.parentNode.childNodes,function(a){this.isSwapView(a)&&(e.remove(a,"mblIn"),a._isShowing||(a.style.display="none",a.style[u.name("transform")]="",a.style.left="0px",a.style.paddingTop=""))},this),p.publish("/dojox/mobile/viewChanged",
[this]),this.containerNode.style.paddingTop=""):m("css3-animations")||(this.containerNode.style.left="0px"),this._setSiblingViewsInMotion(!1))},_setSiblingViewsInMotion:function(a){var c=this.domNode.parentNode;c&&c.setAttribute("data-dojox-mobile-swapview-inmotion",a?"true":!1)},_siblingViewsInMotion:function(){var a=this.domNode.parentNode;return a?"true"==a.getAttribute("data-dojox-mobile-swapview-inmotion"):!1}});return m("dojo-bidi")?q("dojox.mobile.SwapView",[k,v]):k});
//# sourceMappingURL=SwapView.js.map