//author: matt briggs
const displayField = document.getElementById("current-operand");
let currentOperand;
let previousOperand;
let currentOperator;
let floatVal = 5;
let isNegative = false;
function setOperator(operator) {
    currentOperator = operator;
    previousOperand = Number(displayField.innerHTML);
    //clear display and negative (but not operands)
    displayField.innerHTML = '';
    isNegative = false;
    //change css to visually show which operator is selected
    // switch (operator) {
    //     case '+':
    //         document.getElementById("add").style.border = "1px solid rgba(255,255,255,0.9)";
    //         break;
    //     case '-':
    //         document.getElementById("subtract").style.border = "1px solid rgba(255,255,255,0.9)";
    //         break;
    //     case '*':
    //         document.getElementById("multiply").style.border = "1px solid rgba(255,255,255,0.9)";
    //         break;
    //     case '/':
    //         document.getElementById("divide").style.border = "1px solid rgba(255,255,255,0.9)";
    //         break;
    //     default:
    //         console.log('setOperator called unexpectedly')
    //         break;
    // }
}
allClear();
function allClear() {
    displayField.innerHTML = '';
    isNegative = false;
    previousOperand = null;
    currentOperand = null;
}
function input(num) {
    //add here thing to remove leading zeroes (unless decimal)
    displayField.innerHTML += num; //num will be a string (parsed when operate is called on)
}
function percent() {
    displayField.innerHTML = (Number(displayField.innerHTML) / 100).toFixed(floatVal);
}
function negative() {
    if(isNegative) {
        displayField.innerHTML = displayField.innerHTML.slice(1);
        isNegative = false;
    } else {
        displayField.innerHTML = '-' + displayField.innerHTML;
        isNegative = true;
    }
}
function calculate() {
    currentOperand = Number(displayField.innerHTML);
    switch (currentOperator) {
        case '+':
            displayField.innerHTML = previousOperand + currentOperand;
            break;
        case '-':
            displayField.innerHTML = previousOperand - currentOperand;
            break;
        case '*':
            displayField.innerHTML = previousOperand * currentOperand;
            break;
        case '/':
            displayField.innerHTML = previousOperand / currentOperand;
            break;
        default:
            console.log('calculate called unexpectedly')
            break;
    }
}