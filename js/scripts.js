function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// Works now for all functions but one button must be pressed before it will work

$(document).ready(function() {
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#calculate1").val());
    const number2 = parseInt($("#calculate2").val());

    $("#add").unbind().click(function() { // Adding unbind() prevents it from returning exponentially.
      const result = add(number1, number2);
      $("#output").text(result);
      console.log(result);
    });

    $("#sub").unbind().click(function() {
      const result = subtract(number1, number2);
      $("#output").text(result);
      console.log(result);
    });

    $("#mul").unbind().click(function() {
      const result = multiply(number1, number2);
      $("#output").text(result);
      console.log(result);
    });

    $("#div").unbind().click(function() {
      const result = divide(number1, number2);
      $("#output").text(result);
      console.log(result);
    });
  });
});
