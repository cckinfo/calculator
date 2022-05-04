const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const inputScreen = document.querySelector('.input-screen');
const resultScreen = document.querySelector('.result-screen');
const clearBtn = document.getElementById('clearBtn');
const delBtn = document.getElementById('deleteBtn');
const pointBtn = document.getElementById('pointBtn');
const equalsBtn = document.getElementById('equalsBtn');

// mutable variables responsible for the calculator screen display
let firstNum = '';
let secondNum = '';
let currentOperator = null;
let resetScreen = false;




// calculator functions
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