// pigLatin function
var pigLatin = function(string) {
  if (string[0] == "a" //vowels
      || string[0] === "e"
      || string[0] === "i"
     || string[0] === "o"
     || string[0] === "u"
     ) {
    var done = string[1,string.length +1] + string.charAt(0) +"way"
  } else if (string.length >0 && string.substring(0,2) === "qu") { //qu position 0 case
    var done = string.substring(2,string.length +1) + string.substring(0,2) + "ay"
  } else if (string.length >0 && string.substring(1,3) === "qu") { // qu position 1 case
    var done = string.substring(3,string.length +1) + string.substring(0,3) + "ay"
  } else {  //else other consonant
    var done = string.substring(1,string.length +1) + string.charAt(0) + "ay"
  }
  return done
};

pigLatin("hello")

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result =pigLatin(year);

    $(".year").text(year);

    if (!result) {                 // same as writing if (result === false)
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();
  });
});
