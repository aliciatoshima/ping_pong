// pingpong function


var pingPong = function(number) {
  for (i=1; i <= number; i++) {
    debugger;
    if (i % 15 === 0) { //using mod
      var display = "pingpong"
      return display
    } else if (i % 3 === 0) {
      var display =  "ping"
      return display
    } else if (i % 5 === 0) {
      var display = "pong"
      return display
    } else {
      var display =  i
      return display
    }
  }
  //return display
}



// var pigLatin = function(string) {
//   if (string[0] == "a" //vowels
//       || string[0] === "e"
//       || string[0] === "i"
//      || string[0] === "o"
//      || string[0] === "u"
//      ) {
//     var done = string.substring(1,string.length +1) + string.charAt(0) +"way"
//   } else if (string.length >0 && string.substring(0,2) === "qu") { //qu position 0 case
//     var done = string.substring(2,string.length +1) + string.substring(0,2) + "ay"
//   } else if (string.length >0 && string.substring(1,3) === "qu") { // qu position 1 case
//     var done = string.substring(3,string.length +1) + string.substring(0,3) + "ay"
//   } else {  //else other consonant
//     var done = string.substring(1,string.length +1) + string.charAt(0) + "ay"
//   }
//   return done
// };
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
    var result = pingPong(number);

    $(".year").text(result);



    $("#result").show();
  });
});
