// Globals
var myTestStore;

// The parser
require(["dojo/parser","dojo/data/ItemFileWriteStore","dojo/domReady!"],
function(parser,ItemFileWriteStore)
{
  var data_list = [
    { id: 1, name: "Travis"},
    { id: 2, name: "Erin"},
    { id: 3, name: "Dannica"}
  ];
  var data = {
    identifier: "id",
    items: data_list
  };
  myTestStore = new ItemFileWriteStore({data: data});

  parser.parse();
});
