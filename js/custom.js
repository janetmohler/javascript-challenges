//Convert Celcius to Fahrenheit
//Fahrenheit = 1.8 * Celcius + 32

function temperatureConversion(temp) {
  return (1.8 * temp + 32)
}

//Foobar challenge
function fooBar (number) {
  var results = $("#output-foobar");
  for (var currentNumber = 1; currentNumber <= number; currentNumber += 1) {
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      results.append("FooBar" + " <br>");
    } else if (currentNumber % 3 === 0) {
      results.append("Foo" + " <br>");
    } else if (currentNumber % 5 === 0) {
      results.append("Bar" + " <br>");
    } else {
      results.append(currentNumber + " <br>");
    }
  }
}

//Ordinal challenge
function ordinal(number) {
  var suffix = $("#output-ordinal");
  var remainder = number % 10;
  if (number === 11 || number === 12 || number === 13) {
    suffix.text(number + "th");
  } else if (remainder === 1) {
    suffix.text(number + "st");
  } else if (remainder === 2) {
    suffix.text(number + "nd");
  } else if (remainder === 3) {
    suffix.text(number + "rd"); 
  } else {
    suffix.text(number + "th");
  }
}

//User Interface 
$(document).ready(function() {
  $("#cel2fah").submit(function(event) {
    event.preventDefault();
    var getInputTemp = parseInt($("#input-temp").val());
    var conversion = temperatureConversion(getInputTemp);
    $("#output-temp").text(conversion + " degrees Fahrenheit");

    $("#input-temp").val("");
  });

  $("#foobar").submit(function(event) {
    event.preventDefault();
    $("#output-foobar").empty();
    var getInputFoobar = parseInt($("#input-foobar").val());
    fooBar(getInputFoobar);

    $("#input-foobar").val("");
  });

  $("#ordinal").submit(function(event) {
    event.preventDefault();
    var getInputOrdinal = parseInt($("#input-ordinal").val());
    ordinal(getInputOrdinal);

    $("#input-ordinal").val("");
  })
});
