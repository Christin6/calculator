let num1, num2, operator;
let result = 0;
let numStatus = "num1";

let display = document.getElementById("display");
Array.from(document.getElementsByClassName("num")).forEach((x) => {
    x.addEventListener("click", () => addNumToDisplay(x.value));
});

let equalButton = document.getElementById("equal");
let resetButton = document.getElementById("reset");

Array.from(document.getElementsByClassName("operator")).forEach((y) => {
    y.addEventListener("click", () => {
        if(numStatus === "num1") {
            num1 = parseInt(display.value);
            resetDisplay();
            numStatus = "num2";
        } else if (numStatus === "num2") {
            if (typeof num2 === "undefined"){
                num2 = parseInt(display.value);
            }
            operate(num1, num2, operator);
            display.value = result;
            num1 = result;
            num2 = "undefined";
        }
        operator = y.value;
        console.log(num1);
        console.log(num2);
    });
});

resetButton.addEventListener("click", () => resetDisplay());

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

