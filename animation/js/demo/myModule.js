define([
		// this is where we list the dependencies of our module
		'dojo/dom',
    // this will make the callback only be fired once the dom is ready
    'dojo/domReady!'
],
function(dom)
{
	// Once dependencies are loaded then this function will define our module
	var oldText = {};
	// The returned object becomes the defined value of the module
	return {
		setText: function(id,text){
		  // node will be a native JS DOM node
			var node = dom.byId(id);
			// innerHtml is a native JS function, innerHTML gets the content of the node
			oldText[id] = node.innerHTML;
			node.innerHTML = text;
		},
		restoreText: function(id){
			var node = dom.byId(id);
      console.log("Old Text: "+oldText[id]);
			node.innerHTML = oldText[id];
			delete oldText[id];
		}
	}
});
