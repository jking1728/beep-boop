var beep = " Beep! "
var boop = " Boop! "
var sorry = " I'm sorry, Dave. I'm afraid I can't do that. "

var numberset = [];

function numberSpread(number) {
  for (i=1; i <= number; i++) {
    numberset.push(i.toString());
  }
}

function transformArray() {
    results = numberset.map(function(number) {
      if (number.includes('3')){
        return(sorry)
      } else if (number.includes('2')) {
        return (boop)
      } else if (number.includes('1')) {
        return (beep)
      } else {
        return (number)
      }
    });
  }


$(document).ready(function() {
    $("form#input").submit(function(event) {
        event.preventDefault();
        var inputNumber = parseInt($("input#usernumber").val());
        var userNumbers = numberSpread(inputNumber); 
        transformArray();
        results.forEach(function(result) {
            $("#output").append("<li>" + result + "</li>");
        });
        numberset = []; 
        
    });
});