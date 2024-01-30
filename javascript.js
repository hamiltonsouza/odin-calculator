let result = null;
let firstTerm = null;
let operator = null;
let secondTerm = null;

function add(firstAddend,secondAddend) {
    result = firstAddend + secondAddend;
    return result;
};

function subtract(minuend,subtrahend) {
    result = minuend - subtrahend;
    return result;
};

function multiply(multiplier,multiplicand) {
    result = multiplier * multiplicand;
    return result;
};

function divide(dividend,divisor) {
    result = dividend / divisor;
    return result;
};

function operate(firstTerm,operator,secondTerm) {
    switch(operator) {
        case '+':
            add(firstTerm,secondTerm);
            return result;
        case '-':
            subtract(firstTerm,secondTerm);
            return result;
        case '*':
            multiply(firstTerm,secondTerm);
            return result;
        case '/':
            divide(firstTerm,secondTerm);
            return result;
        default:
            return result;
    };
};

function display(displayContent) {
    displayValue.textContent += displayContent;
};

function clearDisplay() {
    displayValue.textContent = '';
};

const numberButtons = document.querySelectorAll('.number');
for (i of numberButtons) {i.addEventListener('click', function () {display(this.textContent)})};

const operatorButtons = document.querySelectorAll('.operator');
for (i of operatorButtons) {i.addEventListener('click', function () {operator = this.textContent;})};
