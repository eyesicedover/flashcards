$(document).ready(function() {
  $("#jsDef").click(function() {
    $(".clickable").removeClass();
    $("#jsDef").toggleClass("defFlip");
  });

  $("#operatorDef").click(function() {
    $(".clickable").removeClass();
    $("#operatorDef").toggleClass("defFlip");
 });

  $("#variablesDef").click(function() {
    $(".clickable").removeClass();
    $("#variablesDef").toggleClass("defFlip");
  });

  $("namingDef").click(function() {
    $(".clickable").removeClass();
    $("namingDef").toggleClass("defFlip");
  });

  $("#functionsDef").click(function() {
    $(".clickable").removeClass();
    $("functionsDef").toggleClass("defFlip");
  });

  $("#methodsDef").click(function() {
    $(".clickable").removeClass();
    $("#methodsDef").toggleClass("defFlip");
  });
});
