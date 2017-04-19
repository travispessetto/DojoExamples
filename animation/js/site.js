require(['dojo/dom','demo/myModule','dojo/fx'],
  function(dom,myModule,fx)
  {
    var node = dom.byId('greeting');
    myModule.setText('greeting','Hello Dojo!');
    setTimeout(function()
    {
      myModule.restoreText('greeting');
    },3000);
    fx.slideTo({
      node: node,
      top: 100,
      left: 200
    }).play();
  });
