require(['dojo/dom','dojo/dom-construct','myStores/exampleStore','dojo/domReady!'],
function(dom,domConstruct,exampleStore)
{
     store = new exampleStore();
     var id = store.add("Hello");
     var word = store.get(id);
     var node = dom.byId("word");
     domConstruct.place('<b>'+word+'</b>',node);
});
