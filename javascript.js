let result = 0;
let firstTerm = 0;
let operator = 0;
let secondTerm = 0;

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
    }
};
