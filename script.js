let num1, num2, operator;
let result = 0;
let status = "num1";

let display = document.getElementById("display");
Array.from(document.getElementsByClassName("num")).forEach((x) => {
    x.addEventListener("click", () => display.value += x.value);
});

let equalButton = document.getElementById("equal");
let resetButton = document.getElementById("reset");

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

