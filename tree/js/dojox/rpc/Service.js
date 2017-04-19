//>>built
define("dojox/rpc/Service",["dojo","dojox","dojo/AdapterRegistry","dojo/_base/url"],function(e,f){e.declare("dojox.rpc.Service",null,{constructor:function(a,c){function b(a){a._baseUrl=new e._Url(e.isBrowser?location.href:e.config.baseUrl,d||".")+"";f._smd=a;for(var c in f._smd.services){a=c.split(".");for(var b=f,g=0;g<a.length-1;g++)b=b[a[g]]||(b[a[g]]={});b[a[a.length-1]]=f._generateService(c,f._smd.services[c])}}var d,f=this;if(a)if(e.isString(a)||a instanceof e._Url){d=a instanceof e._Url?a+
"":a;var g=e._getText(d);if(g)b(e.fromJson(g));else throw Error("Unable to load SMD from "+a);}else b(a);this._options=c?c:{};this._requestId=0},_generateService:function(a,c){if(this[a])throw Error("WARNING: "+a+" already exists for service. Unable to generate function");c.name=a;var b=e.hitch(this,"_executeMethod",c),d=f.rpc.transportRegistry.match(c.transport||this._smd.transport);d.getExecutor&&(b=d.getExecutor(b,c,this));d=c.returns||(c._schema={});d._service=b;b.servicePath="/"+a+"/";b._schema=
d;b.id=f.rpc.Service._nextId++;return b},_getRequest:function(a,c){var b=this._smd,d,k=f.rpc.envelopeRegistry.match(a.envelope||b.envelope||"NONE"),g=(a.parameters||[]).concat(b.parameters||[]);if(k.namedParams){if(1==c.length&&e.isObject(c[0]))c=c[0];else{var h={};for(d=0;d<a.parameters.length;d++)"undefined"==typeof c[d]&&a.parameters[d].optional||(h[a.parameters[d].name]=c[d]);c=h}if(a.strictParameters||b.strictParameters)for(d in c){for(var h=!1,l=0;l<g.length;l++)g[l].name==d&&(h=!0);h||delete c[d]}for(d=
0;d<g.length;d++)if(h=g[d],!h.optional&&h.name&&!c[h.name])if(h["default"])c[h.name]=h["default"];else if(!(h.name in c))throw Error("Required parameter "+h.name+" was omitted");}else g&&g[0]&&g[0].name&&1==c.length&&e.isObject(c[0])&&(c=!1===k.namedParams?f.rpc.toOrdered(g,c):c[0]);e.isObject(this._options)&&(c=e.mixin(c,this._options));d=a._schema||a.returns;g=k.serialize.apply(this,[b,a,c]);g._envDef=k;return e.mixin(g,{sync:this._options.sync||f.rpc._sync,contentType:a.contentType||b.contentType||
g.contentType,headers:a.headers||b.headers||g.headers||{},target:g.target||f.rpc.getTarget(b,a),transport:a.transport||b.transport||g.transport,envelope:a.envelope||b.envelope||g.envelope,timeout:a.timeout||b.timeout,callbackParamName:a.callbackParamName||b.callbackParamName,rpcObjectParamName:a.rpcObjectParamName||b.rpcObjectParamName,schema:d,handleAs:g.handleAs||"auto",preventCache:a.preventCache||b.preventCache,frameDoc:this._options.frameDoc||void 0})},_executeMethod:function(a){var c=[],b;for(b=
1;b<arguments.length;b++)c.push(arguments[b]);var d=this._getRequest(a,c),c=f.rpc.transportRegistry.match(d.transport).fire(d);c.addBoth(function(a){return d._envDef.deserialize.call(this,a)});return c}});f.rpc.getTarget=function(a,c){var b=a._baseUrl;a.target&&(b=new e._Url(b,a.target)+"");c.target&&(b=new e._Url(b,c.target)+"");return b};f.rpc.toOrdered=function(a,c){if(e.isArray(c))return c;for(var b=[],d=0;d<a.length;d++)b.push(c[a[d].name]);return b};f.rpc.transportRegistry=new e.AdapterRegistry(!0);
f.rpc.envelopeRegistry=new e.AdapterRegistry(!0);f.rpc.envelopeRegistry.register("URL",function(a){return"URL"==a},{serialize:function(a,c,b){return{data:e.objectToQuery(b),transport:"POST"}},deserialize:function(a){return a},namedParams:!0});f.rpc.envelopeRegistry.register("JSON",function(a){return"JSON"==a},{serialize:function(a,c,b){return{data:e.toJson(b),handleAs:"json",contentType:"application/json"}},deserialize:function(a){return a}});f.rpc.envelopeRegistry.register("PATH",function(a){return"PATH"==
a},{serialize:function(a,c,b){var d;a=f.rpc.getTarget(a,c);if(e.isArray(b))for(d=0;d<b.length;d++)a+="/"+b[d];else for(d in b)a+="/"+d+"/"+b[d];return{data:"",target:a}},deserialize:function(a){return a}});f.rpc.transportRegistry.register("POST",function(a){return"POST"==a},{fire:function(a){a.url=a.target;a.postData=a.data;return e.rawXhrPost(a)}});f.rpc.transportRegistry.register("GET",function(a){return"GET"==a},{fire:function(a){a.url=a.target+(a.data?"?"+(a.rpcObjectParamName?a.rpcObjectParamName+
"\x3d":"")+a.data:"");return e.xhrGet(a)}});f.rpc.transportRegistry.register("JSONP",function(a){return"JSONP"==a},{fire:function(a){a.url=a.target+(-1==a.target.indexOf("?")?"?":"\x26")+(a.rpcObjectParamName?a.rpcObjectParamName+"\x3d":"")+a.data;a.callbackParamName=a.callbackParamName||"callback";return e.io.script.get(a)}});f.rpc.Service._nextId=1;e._contentHandlers.auto=function(a){var c=e._contentHandlers,b=a.getResponseHeader("Content-Type");return b?b.match(/\/.*json/)?c.json(a):b.match(/\/javascript/)?
c.javascript(a):b.match(/\/xml/)?c.xml(a):c.text(a):c.text(a)};return f.rpc.Service});
//# sourceMappingURL=Service.js.map