let num1, num2, operator;
let result = 0;
let numStatus = "num1";

const display = document.getElementById("display");
const numButtons = document.getElementsByClassName("num");
const operatorButtons = document.getElementsByClassName("operator");
const equalButton = document.getElementById("equal");
const resetButton = document.getElementById("reset");

Array.from(numButtons).forEach((x) => {
    x.addEventListener("click", () => {
        if (numStatus === "num2") {
            resetDisplay();
        }
        addNumToDisplay(x.value);
    });
});

Array.from(operatorButtons).forEach((y) => {
    y.addEventListener("click", () => {
        if(numStatus === "num1") {
            num1 = parseInt(display.value);
            resetDisplay();
            numStatus = "num2";
        } else if (numStatus === "num2") {
            calculateResult();
        }
        operator = y.value;
        debugConsole();
    });
});

equalButton.addEventListener("click", () => {
    calculateResult();
    operator = undefined;
    debugConsole();
});

resetButton.addEventListener("click", () => {
    resetDisplay();
    numStatus = "num1";
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    result = 0;
});

function debugConsole() {
    console.log(num1);
    console.log(num2);
    console.log(operator);
}

function calculateResult(){
    if (display.value !== "") {
        if (typeof num2 === "undefined"){
            num2 = parseInt(display.value);
        }
        operate(num1, num2, operator);
        display.value = result;
        num1 = result;
        num2 = undefined;
    }
}

function resetDisplay() {
    display.value = "";
}

function addNumToDisplay(x) {
    display.value += x;
}

function add (x, y) {
    return x + y;
}

function substract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x*y;
}

function divide (x, y) {
    return x/y;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = substract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        
    }
}

