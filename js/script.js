function add (firstNumber, secondNumber) {   
    return parseFloat(firstNumber) + parseFloat(secondNumber);
}

function subtract (firstNumber, secondNumber) {   
    return parseFloat(firstNumber) - parseFloat(secondNumber);
}

function multiply (firstNumber, secondNumber) {   
    return parseFloat(firstNumber) * parseFloat(secondNumber);
}

function divide (firstNumber, secondNumber) {  
    if(secondNumber === "0") {
        return alert("You can't divide by 0");
    }
    return parseFloat(firstNumber) / parseFloat(secondNumber);
}

function operate (firstNumber, secondNumber, operator)  {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if(operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if(operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if(operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}


const buttons = document.querySelectorAll('.calculator-small-button');
let displayAnswer = document.querySelector("#calculator-answer");
let clearButton = document.querySelector(".clear-button");
let deleteButton = document.querySelector(".delete-button");
let firstNumber = "0";
let secondNumber = "0";
let result = "0";
let equalNumberDelete = "0";
let resultStorage = 0;
let equalCheck = 0;
let operatorCheck;
let doubleEqualCheck;



buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.textContent === "=") {
            if (btn.textContent === "=" && doubleEqualCheck === "=") {
                return;
            } else if (operatorCheck.length === 0) {
                displayAnswer.textContent = firstNumber;
                return;
            } else if (secondNumber === 0 && operatorCheck === "/") {
                return alert("You can't divide by0");
            }
             doubleEqualCheck = "=";
            result = operate(firstNumber, secondNumber, operatorCheck);
            displayAnswer.textContent = result;
            displayAnswer.style.fontSize = "46px";
            firstNumber = result;
            equalNumberDelete = result;
            equalCheck++;
            equalDeleteCounter = 0;
            secondNumber = "0";
            operatorCheck = "";
            result = 0;
            return;
        }


        if (equalCheck > 0) {
            doubleEqualCheck = "";
            if (btn.textContent === "+" || btn.textContent === "-" || btn.textContent === "*" || btn.textContent === "/") {
                operatorCheck = btn.textContent;
            
            if (equalDeleteCounter > 0) {
                firstNumber = equalNumberDelete;
            }

            firstNumber = firstNumber + btn.textContent;
            if (firstNumber.includes("++") && btn.textContent === "+" || firstNumber.includes("--") && btn.textContent === "-" || firstNumber.includes("**") && btn.textContent === "*" || firstNumber.includes("//") && btn.textContent === "/") {
                console.log("hey");
                firstNumber = firstNumber.splice(0, -1);
                displayAnswer.textContent = firstNumber;
                displayAnswer.style.fontSize = "46px";
                return;
            } 
            displayAnswer.textContent = firstNumber;
            displayAnswer.style.fontSize = "46px";
            return;
        } 



            if (operatorCheck === "+" || operatorCheck === "-" || operatorCheck === "*" || operatorCheck === "/") {
                displayAnswer.textContent = "";
    
                if (secondNumber.includes(".") && btn.textContent === ".") {
                    return;
                } else if (btn.textContent === ".") {
                    secondNumber = secondNumber + btn.textContent;
                    displayAnswer.textContent = secondNumber;
                    displayAnswer.style.fontSize = "46px";
                    return;
                } else if (secondNumber === "0" ) {
                    secondNumber = btn.textContent;
                    displayAnswer.textContent = "";
                    displayAnswer.textContent = btn.textContent;
                    displayAnswer.style.fontSize = "46px";
                    return;
                }
                
                if (btn.textContent === "+" && operatorCheck === "+") {
                    btn.textContent === "";
                    return;
                }

                secondNumber = secondNumber + btn.textContent;
                if (btn.textContent === "+" || btn.textContent === "-" || btn.textContent === "*" || btn.textContent === "/") {
                    secondNumber = secondNumber.slice(0, -1);     
                    displayAnswer.textContent = secondNumber;
                    displayAnswer.style.fontSize ="46px"; 
                    return;
                }
                displayAnswer.textContent = secondNumber;
                displayAnswer.style.fontSize = "46px";
                return;
            }
        }






        if (operatorCheck === "+" || operatorCheck === "-" || operatorCheck === "*" || operatorCheck === "/") {
            displayAnswer.textContent = "";

            if (secondNumber.includes(".") && btn.textContent === ".") {
                return;
            } else if (btn.textContent === ".") {
                secondNumber = secondNumber + btn.textContent;
                displayAnswer.textContent = secondNumber;
                displayAnswer.style.fontSize = "46px";
                return;
            }  else if (secondNumber === "0" ) {
                if (btn.textContent === "+" && operatorCheck === "+" || btn.textContent ==="-" && operatorCheck === "-" || btn.textContent ==="*" && operatorCheck === "*" || btn.textContent ==="/" && operatorCheck === "/") {
                    btn.textContent === "";
                    displayAnswer.textContent = firstNumber;
                    displayAnswer.style.fontSize = "46px";
                    return;
                } 
                secondNumber = btn.textContent;
                displayAnswer.textContent = "";
                displayAnswer.textContent = btn.textContent;
                displayAnswer.style.fontSize = "46px";
                return;
            }

            secondNumber = secondNumber + btn.textContent;
            if (btn.textContent === "+" || btn.textContent === "-" || btn.textContent === "*" || btn.textContent === "/") {
                secondNumber = secondNumber.slice(0, -1);     
                displayAnswer.textContent = secondNumber;
                displayAnswer.style.fontSize ="46px"; 
                return;
            }
            displayAnswer.textContent = secondNumber;
            displayAnswer.style.fontSize = "46px";
            return;
        }

        firstNumber = firstNumber.toString();
        if (firstNumber.includes(".") && btn.textContent === ".") {
            return;
        } else if (btn.textContent === ".") {
            firstNumber = firstNumber + btn.textContent;
            displayAnswer.textContent = firstNumber;
            displayAnswer.style.fontSize = "46px";
            return;
        } else if (btn.textContent === "0" && firstNumber === "0") {
            return;
        } else if (firstNumber === "0" ) {
            firstNumber = btn.textContent;
            displayAnswer.textContent = "";
            displayAnswer.textContent = btn.textContent;
            displayAnswer.style.fontSize = "46px";
            return;
        }

         if (btn.textContent === "+" || btn.textContent === "-" || btn.textContent === "*" || btn.textContent === "/") {
            operatorCheck = btn.textContent;
        } 

        firstNumber = firstNumber + btn.textContent;
        displayAnswer.textContent = firstNumber;
        displayAnswer.style.fontSize = "46px"; 
    });
}); 




clearButton.addEventListener("click", function() {
    displayAnswer.textContent = 0;
    firstNumber = "0";
    secondNumber = "0";
    equalNumberDelete = "0";
});



deleteButton.addEventListener("click", function() {
    if (operatorCheck === "+" || operatorCheck === "-" || operatorCheck === "*" ||operatorCheck === "/") {
        secondNumber = secondNumber.slice(0, -1); 
        secondNumber = parseFloat(secondNumber);
        displayAnswer.textContent = secondNumber;
        return;
    } else if (equalCheck > 0) {
        equalNumberDelete = equalNumberDelete.toString();
        equalNumberDelete = equalNumberDelete.slice(0, -1);
        displayAnswer.textContent = equalNumberDelete;
        equalDeleteCounter++;  
    } 
      firstNumber = firstNumber.slice(0, -1); 
      displayAnswer.textContent = firstNumber;
});


