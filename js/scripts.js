// pigLatin function

var pigLatin = function(string) {
  if (string[0] == "a" //vowels
      || string[0] === "e"
      || string[0] === "i"
     || string[0] === "o"
     || string[0] === "u"
     ) {
    var done = string.substring(1,string.length +1) + string.charAt(0) +"way"
  } else if (string.length >0 && string.substring(0,2) === "qu") { //qu position 0 case
    var done = string.substring(2,string.length +1) + string.substring(0,2) + "ay"
  } else if (string.length >0 && string.substring(1,3) === "qu") { // qu position 1 case
    var done = string.substring(3,string.length +1) + string.substring(0,3) + "ay"
  } else {  //else other consonant
    var done = string.substring(1,string.length +1) + string.charAt(0) + "ay"
  }
  return done
};


var mapping = function(sentence) {
  var array = sentence.split(" ")
  var array2 = []
  array.forEach(function(word) {
    var mapResult = array2.push(pigLatin(word));
  })
  return array2.join(" ")
}


//pigLatin("pig latin")




$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var sentence = $("input#sentence").val();
    var result = mapping(sentence);

    $(".year").text(result);



    $("#result").show();
  });
});
