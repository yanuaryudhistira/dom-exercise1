function addition() {
  let number1 = document.getElementById("firstnumber").value;
  let number2 = document.getElementById("secondnumber").value;
  result = Number(number1) + Number(number2);
  return result;
}

function substract() {
  let number1 = document.getElementById("thirdnumber").value;
  let number2 = document.getElementById("fourthnumber").value;
  result = Number(number1) - Number(number2);
  return result;
}

function multiply() {
  let number1 = document.getElementById("fifthnumber").value;
  let number2 = document.getElementById("sixthnumber").value;
  result = Number(number1) * Number(number2);
  return result;
}

function divide() {
  let number1 = document.getElementById("sevennumber").value;
  let number2 = document.getElementById("eightnumber").value;
  result = Number(number1) / Number(number2);
  return result;
}

function modulo() {
  let number1 = document.getElementById("ninthnumber").value;
  let number2 = document.getElementById("tenthnumber").value;
  result = Number(number1) % Number(number2);
  return result;
}
