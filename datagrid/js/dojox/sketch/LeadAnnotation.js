//>>built
define("dojox/sketch/LeadAnnotation",["dojo/_base/kernel","dojo/_base/lang","./Annotation","./Anchor"],function(b){b.getObject("sketch",!0,dojox);var f=dojox.sketch;f.LeadAnnotation=function(a,c){f.Annotation.call(this,a,c);this.transform={dx:0,dy:0};this.start={x:0,y:0};this.control={x:100,y:-50};this.end={x:200,y:0};this.textPosition={x:0,y:0};this.textOffset=4;this.textYOffset=10;this.labelShape=this.pathShape=null;this.anchors.start=new f.Anchor(this,"start");this.anchors.control=new f.Anchor(this,
"control");this.anchors.end=new f.Anchor(this,"end")};f.LeadAnnotation.prototype=new f.Annotation;b=f.LeadAnnotation.prototype;b.constructor=f.LeadAnnotation;b.type=function(){return"Lead"};b.getType=function(){return f.LeadAnnotation};b._pos=function(){var a=this.textOffset,c=0,d=0,c=this.calculate.slope(this.control,this.end);this.textAlign="middle";1<=Math.abs(c)?(c=this.end.x+this.calculate.dx(this.control,this.end,a),d=this.control.y>this.end.y?this.end.y-a:this.end.y+a+this.textYOffset):0==
c?(c=this.end.x+a,d=this.end.y+this.textYOffset):(this.start.x>this.end.x?(c=this.end.x-a,this.textAlign="end"):(c=this.end.x+a,this.textAlign="start"),d=this.start.y<this.end.y?this.end.y+this.calculate.dy(this.control,this.end,a)+this.textYOffset:this.end.y+this.calculate.dy(this.control,this.end,-a));this.textPosition={x:c,y:d}};b.apply=function(a){if(a){a.documentElement&&(a=a.documentElement);this.readCommonAttrs(a);for(var c=0;c<a.childNodes.length;c++){var d=a.childNodes[c];if("text"==d.localName)this.property("label",
d.childNodes.length?d.childNodes[0].nodeValue:"");else if("path"==d.localName){var b=d.getAttribute("d").split(" "),e=b[0].split(",");this.start.x=parseFloat(e[0].substr(1),10);this.start.y=parseFloat(e[1],10);e=b[1].split(",");this.control.x=parseFloat(e[0].substr(1),10);this.control.y=parseFloat(e[1],10);e=b[2].split(",");this.end.x=parseFloat(e[0],10);this.end.y=parseFloat(e[1],10);b=this.property("stroke");d=d.getAttribute("style");if(e=d.match(/stroke:([^;]+);/))b.color=e[1],this.property("fill",
e[1]);if(e=d.match(/stroke-width:([^;]+);/))b.width=e[1];this.property("stroke",b)}}}};b.initialize=function(a){this.apply(a);this._pos();this.shape=this.figure.group.createGroup();this.shape.getEventSource().setAttribute("id",this.id);this.pathShape=this.shape.createPath("M"+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0");this.labelShape=this.shape.createText({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label"),align:this.textAlign});
this.labelShape.getEventSource().setAttribute("id",this.id+"-labelShape");this.draw()};b.destroy=function(){this.shape&&(this.shape.remove(this.pathShape),this.shape.remove(this.labelShape),this.figure.group.remove(this.shape),this.shape=this.pathShape=this.labelShape=null)};b.getBBox=function(){var a=Math.min(this.start.x,this.control.x,this.end.x),b=Math.min(this.start.y,this.control.y,this.end.y);return{x:a,y:b,width:Math.max(this.start.x,this.control.x,this.end.x)-a,height:Math.max(this.start.y,
this.control.y,this.end.y)-b}};b.draw=function(a){this.apply(a);this._pos();this.shape.setTransform(this.transform);this.pathShape.setShape("M"+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+" l0,0");this.labelShape.setShape({x:this.textPosition.x,y:this.textPosition.y,text:this.property("label")}).setFill(this.property("fill"));this.zoom()};b.serialize=function(){var a=this.property("stroke");return"\x3cg "+this.writeCommonAttrs()+'\x3e\x3cpath style\x3d"stroke:'+
a.color+";stroke-width:"+a.width+';fill:none;" d\x3d"M'+this.start.x+","+this.start.y+" Q"+this.control.x+","+this.control.y+" "+this.end.x+","+this.end.y+'" /\x3e\x3ctext style\x3d"fill:'+a.color+";text-anchor:"+this.textAlign+'" font-weight\x3d"bold" x\x3d"'+this.textPosition.x+'" y\x3d"'+this.textPosition.y+'"\x3e'+this.property("label")+"\x3c/text\x3e\x3c/g\x3e"};f.Annotation.register("Lead");return dojox.sketch.LeadAnnotation});
//# sourceMappingURL=LeadAnnotation.js.map