var count = function(multiple, limit) {
  var list = [];
  for(var i = multiple; i <= limit; i += multiple)
    list.push(i);
    return list;
};

$(document).ready(function() {
  $("form#count").submit(function(event) {
    var multiple = parseInt($("input#multiple").val());
    var limit = parseInt($("input#limit").val());
    var result = count(multiple, limit);


    $(".numbers").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
