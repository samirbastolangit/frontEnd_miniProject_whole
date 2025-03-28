let number1 = "";
let number2 = "";
let symbol = "";
let finalAns = 0;
// this is function for number
function append(num) {
  if (symbol == "") {
    const screenNumOne = document.getElementById("numOne");
    number1 += num;
    screenNumOne.textContent = Number(number1);
    console.log("number 1 =", number1);
  } else if (
    symbol == "+" ||
    symbol == "-" ||
    symbol == "*" ||
    symbol == "/" ||
    symbol == "%"
  ) {
    const screenNumTwo = document.getElementById("numTwo");
    number2 += num;
    screenNumTwo.textContent = Number(number2);
    console.log("number 2 =", number2);
  }
}
// this is function for operator
function setOperator(sb) {
  const storeOperator = document.getElementById("operatorId");
  symbol = sb;
  storeOperator.textContent = symbol;
  console.log("operator = ", symbol);
}
// this is function for result
function findAns() {
  const storeResult = document.getElementById("result");
  if (symbol == "+") {
    finalAns = add(Number(number1), Number(number2));
  } else if (symbol == "-") {
    finalAns = subtract(Number(number1), Number(number2));
  } else if (symbol == "*") {
    finalAns = product(Number(number1), Number(number2));
  } else if (symbol == "/") {
    finalAns = divide(Number(number1), Number(number2));
  } else if (symbol == "%") {
    finalAns = remainder(Number(number1), Number(number2));
  }
  storeResult.textContent = finalAns;
  console.log(finalAns);
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function product(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function remainder(a, b) {
  return a % b;
}


// this is function for reset
function reset(){
  number1 = "";
  number2 = "";
  symbol = "";
  finalAns = 0;
  console.log(number1);
  document.getElementById("numOne").textContent = "";
  document.getElementById("operatorId").textContent = "";
  document.getElementById("numTwo").textContent = "";
  document.getElementById("result").textContent = "";
}
