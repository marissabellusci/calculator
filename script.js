//Basic operator logic

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(operator,a,b){
    if (operator == add){
       return add(a,b);
    }

    if (operator == subtract){
        return subtract(a,b);
    }

    if (operator == multiply){
        return multiply(a,b);
    }

    if (operator == divide){
        return divide(a,b);
    }
}


// Variables & Constants

let digits = document.querySelectorAll(".digit");
let operators = document.querySelectorAll(".operator");
let container = document.querySelector(".calculator-grid-container");
let html = document.querySelector("html");
let body = document.querySelector("body");
let title = document.querySelector("h1");
let digitButtons = document.querySelector("digit-buttons");
let clr = document.querySelector(".clear");
let operationSelected = false;


let displayValue = 0;
const display = document.querySelector(".display");

//SHOW DISPLAY NUMBER

function updateDisplayValue(e){
    if (e.target == container || e.target == html || e.target == body || e.target == title || e.target == display || e.target == digitButtons || e.target.value == undefined){
        return;
    }
    console.log(e.target.value);
    if (displayValue == 0 || operationSelected == true){
    displayValue = e.target.value;
    display.textContent=displayValue;
    operationSelected = false;
    }


    else {
    displayValue = displayValue + e.target.value;
    display.textContent = displayValue;
    operationSelected = false;    
    }
}

//CLEAR!!
function clearDisplayValue(){
    console.log("clearing!")
    displayValue = 0;
    display.textContent = displayValue;
    console.log(displayValue)
    localStorage.removeItem("firstNumber");
    localStorage.removeItem("operator");
    localStorage.removeItem("secondNumber");
    operationSelected = false;
}

//OPERATE!!
function operate(){
    let solution = localStorage.getItem("firstNumber") + localStorage.getItem("operator") + localStorage.getItem("secondNumber");
    console.log(solution);
}


//SAVE VALUE and SAVE OPERATION
function saveValueAndOperation(e){
    if (localStorage.getItem("firstNumber")){
        console.log("saving second value!")
        localStorage.setItem("secondNumber",display.textContent);
    }

    if(!localStorage.getItem("firstNumber")){
        console.log("saving first value!");
        localStorage.setItem("firstNumber",display.textContent);
    }

    if(localStorage.getItem("operator")){
       operate();
    }

    if(!localStorage.getItem("operator")){
    console.log("saving operation");
    localStorage.setItem("operator",e.target.textContent);
    operationSelected = true;
    }
    
}

//Event listeners

digits.forEach(digit => digit.addEventListener("click", updateDisplayValue));
operators.forEach(operator => operator.addEventListener("click", saveValueAndOperation))
clr.addEventListener("click",clearDisplayValue)
