// pingpong function


var pingPong = function(number) {
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
    //debugger;
    $("ul.output").append("<li>" + index + "</li>")
    //$(".year").text(index);
  })
}

//
//
// var mapping = function(sentence) {
//   var array = sentence.split(" ")
//   var array2 = []
//   array.forEach(function(word) {
//     var mapResult = array2.push(pigLatin(word));
//   })
//   return array2.join(" ")
// }





$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = doTheThing(pingPong(number));



    //$(".year").text(result);



    $("#result").show();
  });
});
