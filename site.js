$(document).ready(
  function()
  {
    $("a").click(handleClick);
  }
);

var handleClick = function(event)
{
  event.preventDefault();
  var exampleFrame = $("#exampleFrame");
  var exampleLocation = $(this).attr('href');
  var preview = $("#preview");
  exampleFrame.attr('src',exampleLocation);
  preview.modal();
}
