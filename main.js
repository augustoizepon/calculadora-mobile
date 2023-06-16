const displayNumbers = document.querySelector("#show-numbers");
const acButton = document.querySelector("#ac");
const moreOrLessButton = document.querySelector("#more-or-less");
const percentageButton = document.querySelector("#percentage");
const divideButton = document.querySelector("#divide");
const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const multiplyButton = document.querySelector("#multiply");
const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const subtractButton = document.querySelector("#subtract");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const addButton = document.querySelector("#add");
const parenthesisButton = document.querySelector("#parenthesis");
const zeroButton = document.querySelector("#zero");
const dotButton = document.querySelector("#dot");
const equalButton = document.querySelector("#equal");

let currentExpression = "";
let currentOperation = "";

function updateDisplay() {
  displayNumbers.textContent = currentExpression;
}

function addOperator(operator) {
  if (currentOperation) {
    evaluateExpression();
  }
  currentOperation = operator;
  currentExpression += operator;
  updateDisplay();
}

function evaluateExpression() {
  try {
    const result = eval(currentExpression);
    currentExpression = result.toString();
  } catch (error) {
    currentExpression = "Erro";
  }
}

oneButton.addEventListener("click", () => {
  currentExpression += "1";
  updateDisplay();
});

twoButton.addEventListener("click", () => {
  currentExpression += "2";
  updateDisplay();
});

threeButton.addEventListener("click", () => {
  currentExpression += "3";
  updateDisplay();
});

fourButton.addEventListener("click", () => {
  currentExpression += "4";
  updateDisplay();
});

fiveButton.addEventListener("click", () => {
  currentExpression += "5";
  updateDisplay();
});

sixButton.addEventListener("click", () => {
  currentExpression += "6";
  updateDisplay();
});

sevenButton.addEventListener("click", () => {
  currentExpression += "7";
  updateDisplay();
});

eightButton.addEventListener("click", () => {
  currentExpression += "8";
  updateDisplay();
});

nineButton.addEventListener("click", () => {
  currentExpression += "9";
  updateDisplay();
});

zeroButton.addEventListener("click", () => {
  currentExpression += "0";
  updateDisplay();
});

addButton.addEventListener("click", () => {
  addOperator("+");
});

subtractButton.addEventListener("click", () => {
  addOperator("-");
});

multiplyButton.addEventListener("click", () => {
  addOperator("*");
});

divideButton.addEventListener("click", () => {
  addOperator("/");
});

equalButton.addEventListener("click", () => {
  evaluateExpression();
  currentOperation = "";
  updateDisplay();
});

acButton.addEventListener("click", () => {
  currentExpression = "";
  currentOperation = "";
  updateDisplay();
});
