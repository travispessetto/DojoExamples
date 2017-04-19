require(['demo/myModule'],
  function(myModule)
  {
    myModule.setText('greeting','Hello Dojo!');
    setTimeout(function()
    {
      console.log("restore text");
      myModule.restoreText('greeting');
    },3000);
  });
