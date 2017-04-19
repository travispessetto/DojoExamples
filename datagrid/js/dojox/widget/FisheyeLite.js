//>>built
define("dojox/widget/FisheyeLite","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/on dojo/query dojo/dom-style dojo/_base/fx dijit/_WidgetBase dojo/fx/easing".split(" "),function(e,n,d,p,f,l,h,m,b){d.getObject("widget",!0,dojox);e.experimental("dojox/widget/FisheyeLite");return dojo.declare("dojox.widget.FisheyeLite",[m],{durationIn:350,easeIn:b.backOut,durationOut:1420,easeOut:b.elasticOut,properties:null,units:"px",constructor:function(a,d){this.properties=a.properties||{fontSize:2.75}},
postCreate:function(){this.inherited(arguments);this._target=f(".fisheyeTarget",this.domNode)[0]||this.domNode;this._makeAnims();this.connect(this.domNode,"onmouseover","show");this.connect(this.domNode,"onmouseout","hide");this.connect(this._target,"onclick","onClick")},show:function(){this._runningOut.stop();this._runningIn.play()},hide:function(){this._runningIn.stop();this._runningOut.play()},_makeAnims:function(){var a={},b={},e=l.getComputedStyle(this._target),c;for(c in this.properties){var g=
this.properties[c],f=d.isObject(g),k=parseFloat(e[c]);b[c]={end:k,units:this.units};a[c]=f?g:{end:g*k,units:this.units}}this._runningIn=h.animateProperty({node:this._target,easing:this.easeIn,duration:this.durationIn,properties:a});this._runningOut=h.animateProperty({node:this._target,duration:this.durationOut,easing:this.easeOut,properties:b});this.connect(this._runningIn,"onEnd",d.hitch(this,"onSelected",this))},onClick:function(a){},onSelected:function(a){}})});
//# sourceMappingURL=FisheyeLite.js.map