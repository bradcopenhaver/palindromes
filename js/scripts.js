var inputedStrings
var ArrayofStrings
var reverseArray
var toArray = function() {
  ArrayofStrings = inputedStrings.split("");
};
var palindromCheck = function() {
  reverseArray = ArrayofStrings.map(function(string){
    return string;
  });
  reverseArray.reverse();
  var result=0;
  for(i=0; i<ArrayofStrings.length; i+=1){
    if (ArrayofStrings[i] === reverseArray[i]) {

    }
    else {
      result +=1;
    };
  };
  if (result>0){
    return "#notPalindrome";
  }
  else {
    return "#palindrome";
  }
};

//
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    inputedStrings = $("#word").val();
    toArray();
    $(palindromCheck()).show();
  });
});
