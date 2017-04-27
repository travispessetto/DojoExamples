var myModel;

require(['dojo/store/Memory','dijit/tree/ObjectStoreModel','dojo/parser','dojo/domReady!'],
function(Memory,ObjectStoreModel, parser)
{
  // ============= Start Store ====================
    var store = new Memory({
      data: [
         { id: 1, name:'Landing Gear', type:'assembly'},
         { id: 2, name: "Truck Assembly", type: 'assembly', parent: 1},
         { id: 3, name: "Axel", type: 'component', parent: 2}
     ],
     getChildren: function(object)
     {
       return this.query({parent: object.id});
     }
    });
    // ============ End store ====================

    // ================= Start Object Store myModel ===============
    myModel = new ObjectStoreModel(
      {
          store: store,
          query: {id: 1}
      }
    );
    // ================= End Ojbect Store Model ================

    parser.parse();
});

var clickHandler = function(item, node, event)
{
  alert(item.name + " was clicked");
}
