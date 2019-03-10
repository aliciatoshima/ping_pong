// pingpong function

var pingPong = function(number) {
  //debugger;
  var array = [];
  for (i=1; i <= number; i++) {
    var display
    if (i % 15 === 0) { //using mod
      display = "pingpong";
    } else if (i % 3 === 0) {
      display =  "ping";
    } else if (i % 5 === 0) {
      display = "pong";
    } else {
      display =  i;
    }
    array.push(display);
  }
  return array;
}


var doTheThing = function(array) {
  array.forEach(function(index) {
    $("ul.output").append("<li>" + index + "</li>");
  })
}


$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    $("ul.output").empty();
    var number = parseInt($("input#number").val());
    var result = doTheThing(pingPong(number));
  //  $("#result").empty()

    $("#result").show();
    event.preventDefault();
  });
});
