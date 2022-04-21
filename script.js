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
        case '*':
            return multiply(numOne, numTwo);
            break;
        case '/':
            return divide(numOne, numTwo);
            break;
        case '^':
            return power(numOne, numTwo);
            break;
        default:
            console.log("Invalid operator.");
    }
}