// This is an example of the Dojo Syncronous loader
// This should be used when working with widgets
// Use if code does not have async: true or has dojo.require()
// instead of just require.  This will ensure in order execution
require('dijit/form/Button','dojo/ready',function(Button,ready)
{
  ready(function()
  {
    // Widgets go here
  });
});
