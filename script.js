//Basic operator logic

function add(a,b){
    return +a + +b;
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

function expo(x, f) {
    return Number.parseFloat(x).toExponential(f);
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
let equals = document.querySelector(".equals");
let operationSelected = false;
let noSecondNumber = true;
let solution = null;


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
        if (displayValue.toString().length > 11) {
            console.log(expo(displayValue,3))
            display.textContent = expo(displayValue,3);
            operationSelected = false;    
        }
        if (displayValue.toString().length <=11) {
        display.textContent = new Intl.NumberFormat().format(displayValue);
        operationSelected = false;  }  
        }
    
        


console.log("updating");
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
    localStorage.removeItem("solution");
    operationSelected = false;
    
}

//OPERATE!!
function operate(){

    if(localStorage.getItem("secondNumber")){
    let a = localStorage.getItem("firstNumber").split(',').join("");
    let b = localStorage.getItem("secondNumber").split(',').join("");
        
        if (localStorage.getItem("operator") == "+"){
            solution = add(a,b);
            console.log(solution);
            localStorage.setItem("firstNumber", solution);
            localStorage.setItem("solution",solution);

            if (localStorage.getItem("solution").toString().length > 11){
                display.textContent = expo(localStorage.getItem("solution"),3);
               localStorage.removeItem("solution");
               localStorage.removeItem("secondNumber");
               localStorage.removeItem("operator"); 
               }
            
            if (localStorage.getItem("solution").toString().length <= 11){
            display.textContent = new Intl.NumberFormat().format(localStorage.getItem("solution"));
            localStorage.removeItem("solution");
            localStorage.removeItem("secondNumber");
            localStorage.removeItem("operator");}
        }    

        if (localStorage.getItem("operator") == "-"){
            solution = subtract(a,b);
            console.log(solution);
            localStorage.setItem("firstNumber", solution);
            localStorage.setItem("solution",solution);
            
            if (localStorage.getItem("solution").toString().length > 11){
                display.textContent = expo(localStorage.getItem("solution"),3);
               localStorage.removeItem("solution");
               localStorage.removeItem("secondNumber");
               localStorage.removeItem("operator"); 
               }
            
            if (localStorage.getItem("solution").toString().length <= 11){
            display.textContent = new Intl.NumberFormat().format(localStorage.getItem("solution"));
            localStorage.removeItem("solution");
            localStorage.removeItem("secondNumber");
            localStorage.removeItem("operator");}
        }    

        if (localStorage.getItem("operator") == "x"){
            solution = multiply(a,b);
            console.log(solution);
            localStorage.setItem("firstNumber", solution);
            localStorage.setItem("solution",solution);
            
            if (localStorage.getItem("solution").toString().length > 11){
                display.textContent = expo(localStorage.getItem("solution"),3);
               localStorage.removeItem("solution");
               localStorage.removeItem("secondNumber");
               localStorage.removeItem("operator"); 
               }
            
            if (localStorage.getItem("solution").toString().length <= 11){
            display.textContent = new Intl.NumberFormat().format(localStorage.getItem("solution"));
            localStorage.removeItem("solution");
            localStorage.removeItem("secondNumber");
            localStorage.removeItem("operator");}
        }    

        if (localStorage.getItem("operator") == "/"){
            if (b == 0) {
                clearDisplayValue();
                alert("How DARE you!");
            }

            else {
            solution = divide(a,b);
            console.log(solution);
            localStorage.setItem("firstNumber", solution);
            localStorage.setItem("solution",solution);
            
            if (localStorage.getItem("solution").toString().length > 11){
                display.textContent = expo(localStorage.getItem("solution"),3);
               localStorage.removeItem("solution");
               localStorage.removeItem("secondNumber");
               localStorage.removeItem("operator"); 
               }
            
            if (localStorage.getItem("solution").toString().length <= 11){
            display.textContent = new Intl.NumberFormat().format(localStorage.getItem("solution"));
            localStorage.removeItem("solution");
            localStorage.removeItem("secondNumber");
            localStorage.removeItem("operator");}
            }
        } 
        
    }

    if(!localStorage.getItem("secondNumber")){
        let a = localStorage.getItem("firstNumber").split(',').join("");
        localStorage.setItem("secondNumber",display.textContent);
        let b = localStorage.getItem("secondNumber").split(',').join("");
            
            if (localStorage.getItem("operator") == "+"){
                solution = add(a,b);
                console.log(solution);
                localStorage.setItem("firstNumber", solution);
                localStorage.setItem("solution",solution);

                if (localStorage.getItem("solution").toString().length > 11){
                    display.textContent = expo(localStorage.getItem("solution"),3);
                   localStorage.removeItem("solution");
                   localStorage.removeItem("secondNumber");
                   localStorage.removeItem("operator"); 
                   }
                
                if (localStorage.getItem("solution").toString().length <= 11){
                display.textContent = new Intl.NumberFormat().format(localStorage.getItem("solution"));
                localStorage.removeItem("solution");
                localStorage.removeItem("secondNumber");
                localStorage.removeItem("operator");}
            
            }    
    
            if (localStorage.getItem("operator") == "-"){
                solution = subtract(a,b);
                console.log(solution);
                localStorage.setItem("firstNumber", solution);
                localStorage.setItem("solution",solution);
                
                if (localStorage.getItem("solution").toString().length > 11){
                    display.textContent = expo(localStorage.getItem("solution"),3);
                   localStorage.removeItem("solution");
                   localStorage.removeItem("secondNumber");
                   localStorage.removeItem("operator"); 
                   }
                
                if (localStorage.getItem("solution").toString().length <= 11){
                display.textContent = new Intl.NumberFormat().format(localStorage.getItem("solution"));
                localStorage.removeItem("solution");
                localStorage.removeItem("secondNumber");
                localStorage.removeItem("operator");}
            }    
    
            if (localStorage.getItem("operator") == "x"){
                solution = multiply(a,b);
                console.log(solution);
                localStorage.setItem("firstNumber", solution);
                localStorage.setItem("solution",solution);

                if (localStorage.getItem("solution").toString().length > 11){
                    display.textContent = expo(localStorage.getItem("solution"),3);
                   localStorage.removeItem("solution");
                   localStorage.removeItem("secondNumber");
                   localStorage.removeItem("operator"); 
                   }
                
                if (localStorage.getItem("solution").toString().length <= 11){
                display.textContent = new Intl.NumberFormat().format(localStorage.getItem("solution"));
                localStorage.removeItem("solution");
                localStorage.removeItem("secondNumber");
                localStorage.removeItem("operator");}
            }    
    
            if (localStorage.getItem("operator") == "/"){
                if (b == 0){
                    clearDisplayValue();
                    alert("How DARE you!");
                }

                else {
                solution = divide(a,b);
                console.log(solution);
                localStorage.setItem("firstNumber", solution);
                localStorage.setItem("solution",solution);
                
                if (localStorage.getItem("solution").toString().length > 11){
                    display.textContent = expo(localStorage.getItem("solution"),3);
                   localStorage.removeItem("solution");
                   localStorage.removeItem("secondNumber");
                   localStorage.removeItem("operator"); 
                   }
                
                if (localStorage.getItem("solution").toString().length <= 11){
                display.textContent = new Intl.NumberFormat().format(localStorage.getItem("solution"));
                localStorage.removeItem("solution");
                localStorage.removeItem("secondNumber");
                localStorage.removeItem("operator");}
                }
            }    
           
    }
    
    
}


//SAVE VALUE and SAVE OPERATION
function saveValueAndOperation(e){
    if (localStorage.getItem("firstNumber") && noSecondNumber == false){
        console.log("saving second value!")
        localStorage.setItem("secondNumber",display.textContent);
    }

    if(!localStorage.getItem("firstNumber")){
        console.log("saving first value!");
        localStorage.setItem("firstNumber",display.textContent);
    }

    if(localStorage.getItem("operator")){
    
       operate();
       localStorage.setItem("operator",e.target.textContent);
       localStorage.removeItem("secondNumber");
       noSecondNumber == true;
       operationSelected = true;
        
    }

    if(!localStorage.getItem("operator") || noSecondNumber == true){
    console.log("saving operation");
    localStorage.setItem("operator",e.target.textContent);
    operationSelected = true;
    }
    
}

function secondNumberFlag(){
    noSecondNumber = true;
}

//KEYBOARD FUNCTIONALITY

function handleKey(e){
    console.log(e.keyCode);

    if (e.keyCode >= 65 && e.keyCode <=90) return;

    if (e.keyCode == 13 || e.key == "="){
        operate();
    }

    if (e.keyCode == 8){
        clearDisplayValue();
    }

    if (e.keyCode < 48 || e.keyCode > 57 && !e.keyCode == 187 || !e.keyCode == 191 || !e.keyCode == 189 || !e.keyCode == 13 || !e.key == "=" || !e.keyCode == 8) return;


    if (e.key == "*"){

        if (localStorage.getItem("firstNumber") && noSecondNumber == false){
            console.log("saving second value!")
            localStorage.setItem("secondNumber",display.textContent);
        }
    
        if(!localStorage.getItem("firstNumber")){
            console.log("saving first value!");
            localStorage.setItem("firstNumber",display.textContent);
        }

        if(localStorage.getItem("operator")){
    
            operate();
            localStorage.setItem("operator","x");
            localStorage.removeItem("secondNumber");
            noSecondNumber == true;
            operationSelected = true;
             
         }
     
         if(!localStorage.getItem("operator") || noSecondNumber == true){
         console.log("saving operation");
         localStorage.setItem("operator","x");
         operationSelected = true;
         }
         return

    }

    else if (e.key == "+" || e.key == "-" || e.key == "/"){

        if (localStorage.getItem("firstNumber") && noSecondNumber == false){
            console.log("saving second value!")
            localStorage.setItem("secondNumber",display.textContent);
        }
    
        if(!localStorage.getItem("firstNumber")){
            console.log("saving first value!");
            localStorage.setItem("firstNumber",display.textContent);
        }

        if(localStorage.getItem("operator")){
    
            operate();
            localStorage.setItem("operator", e.key);
            localStorage.removeItem("secondNumber");
            noSecondNumber == true;
            operationSelected = true;
             
         }
     
         if(!localStorage.getItem("operator") || noSecondNumber == true){
         console.log("saving operation");
         localStorage.setItem("operator", e.key);
         operationSelected = true;
         }
         return

    }


    if (displayValue == 0 || operationSelected == true){
    displayValue = e.key;
    display.textContent=displayValue;
    operationSelected = false;
    }


    else {
    displayValue = displayValue + e.key;
    if (displayValue.toString().length > 11) {
        console.log(expo(displayValue,3))
        display.textContent = expo(displayValue,3);
        operationSelected = false;    
    }
    if (displayValue.toString().length <=11) {
    display.textContent = new Intl.NumberFormat().format(displayValue);
    operationSelected = false;  }  
    }
    
}

//Event listeners

digits.forEach(digit => digit.addEventListener("click", updateDisplayValue));
operators.forEach(operator => operator.addEventListener("click", saveValueAndOperation))
clr.addEventListener("click",clearDisplayValue);
equals.addEventListener("click",operate);
equals.addEventListener("click", secondNumberFlag);

window.addEventListener("keyup", handleKey);