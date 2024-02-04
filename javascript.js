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
            clearTermsAfterOperation();
            return result;
        case '-':
            subtract(firstTerm,secondTerm);
            clearTermsAfterOperation();
            return result;
        case '*':
            multiply(firstTerm,secondTerm);
            clearTermsAfterOperation();
            return result;
        case '/':
            divide(firstTerm,secondTerm);
            clearTermsAfterOperation();
            return result;
        default:
            return result;
    };
};

function setTerms() {
    if (firstTerm === null) {
        firstTerm = parseFloat(displayValue.textContent);
    } else if (firstTerm !== null) {
        secondTerm = parseFloat(displayValue.textContent);
    }
};

const displayValue = document.getElementById('display');

function clearDisplay() {
    displayValue.textContent = '';
};

function clearTermsAfterOperation(){
    firstTerm = result;
    secondTerm = null;
};

function clearOperator() {
    operator = null;
};

const allClearButton = document.getElementById('all-clear');
allClearButton.addEventListener('click', allClear);
function allClear() {
    result = null;
    firstTerm = null;
    secondTerm = null;
    clearOperator();
    clearDisplay();
};    

const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', equals);
function equals() {
    setTerms();
    operate(firstTerm,operator,secondTerm);
    clearOperator();
    displayValue.textContent = result;
    firstTerm = 'placeholder';
};

function operatorEquals() {
    setTerms();
    operate(firstTerm,operator,secondTerm);
    clearOperator();
    displayValue.textContent = result;
};

const decimalButton = document.getElementById('decimal');
decimalButton.addEventListener('click', decimal);
function decimal() {
    if (!displayValue.textContent.includes(".")) {
        displayValue.textContent += this.textContent;
    };
};

const backspaceButton = document.getElementById('backspace');
backspaceButton.addEventListener('click', backspace);
function backspace() {
    displayValue.textContent = displayValue.textContent.slice(0, -1);
};

const numberButtons = document.querySelectorAll('.number');
for (i of numberButtons) {i.addEventListener('click', function () {
    if (firstTerm === 'placeholder') {
        clearDisplay();
        displayValue.textContent += this.textContent;
        firstTerm = null; 
    } else if (firstTerm !== null && secondTerm === null) {
        clearDisplay();
        displayValue.textContent += this.textContent;
        secondTerm = 'placeholder';
    } else {
        displayValue.textContent += this.textContent;
    }
})};

const operatorButtons = document.querySelectorAll('.operator');
for (i of operatorButtons) {i.addEventListener('click', function () {
    if (firstTerm !== null && operator !== null) {
        operatorEquals();
        operator = this.textContent;
    } else if (displayValue.textContent === '') {
        operator = this.textContent;
    } else if (displayValue.textContent !== '') {
        setTerms();
        operator = this.textContent;
    }
})};
