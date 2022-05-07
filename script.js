// all the relevant DOM elements put into variables
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const previousScreen = document.querySelector('.previous-screen');
const currentScreen = document.querySelector('.current-screen');
const clearBtn = document.getElementById('clearBtn');
const delBtn = document.getElementById('deleteBtn');
const pointBtn = document.getElementById('pointBtn');
const equalsBtn = document.getElementById('equalsBtn');

// mutable variables responsible for the calculator screen display
let firstNum = '';
let secondNum = '';
let currentOperator = null;
let restartScreen = false;

// calculator logic
const appendNum = (num) => {
    if (currentScreen.textContent === '0' || restartScreen) resetScreen();
    currentScreen.textContent += num;
};

const setOperator = (operator) => {
    if (currentOperator !== null) evaluate();
    currentOperator = operator;
    firstNum = currentScreen.textContent;
    previousScreen = `${firstNum} ${currentOperator}`;
    restartScreen = true;
}

const evaluate = () => {
    if (currentOperator === null || restartScreen) return;
    if (currentOperator === '÷' && currentScreen.textContent === '0') {
        alert("You're trying to divide by zero...");
        return;
    }
    secondNum = currentScreen.textContent;
    currentScreen.textContent = round(operate(currentOperator, firstNum, secondNum));
    previousScreen.textContent = `${firstNum} ${currentOperator} ${secondNum} =`;
    currentOperator = null;
}

const resetScreen = () => {
    currentScreen.textContent = '';
    restartScreen = false
}

const round = (num) => Math.round(100 * num) / 100;


// calculator math functions
const add = (numOne, numTwo) => numOne + numTwo;
  
const subtract = (numOne, numTwo) => numOne - numTwo;

const power = (a, b) => Math.pow(a, b);

const multiply = (numOne, numTwo) => numOne * numTwo;

const divide = (numOne, numTwo) => numOne / numTwo;

const operate = (operator, numOne, numTwo) => {
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    switch (operator) {
        case '+':
            return add(numOne, numTwo);
            break;
        case '-':
            return subtract(numOne, numTwo);
            break;
        case '×':
            return multiply(numOne, numTwo);
            break;
        case '÷':
            if (numTwo === 0) return null;
            return divide(numOne, numTwo);
            break;
        default:
            return null;
    }
}

numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNum(button.textContent)));