var numberset = [];


$(document).ready(function() {
    $("form#input").submit(function(event) {
        event.preventDefault();
        var inputnumber = $("input#usernumber").val();
        $("ul#output").empty("");
        for (var index = 1; index <= inputnumber; index += 1) {
            numberset.push((index).toString());
        };
        

        for (var i = 0; i <= numberset.length -1; i += 1) {
            if (numberset[i].includes('3') === true) {
                $("ul#output").append("<li>" + "I'm sorry, Dave. I'm afraid I can't do that." + "</li>")
            } else if (numberset[i].includes('2') === true) {
                $("ul#output").append("<li>" + "Boop!" + "</li>")
            } else if (numberset[i].includes('1') === true) {
                $("ul#output").append("<li>" + "Beep!" + "</li>")
            } else {
                $("ul#output").append("<li>" + numberset[i] + "</li>")
            }
        };
        
    });
});