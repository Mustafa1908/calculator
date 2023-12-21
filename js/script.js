function add (firstNumber, secondNumber) {   
    return firstNumber + secondNumber;
}

function subtract (firstNumber, secondNumber) {   
    return firstNumber - secondNumber;
}

function multiply (firstNumber, secondNumber) {   
    return firstNumber * secondNumber;
}

function divide (firstNumber, secondNumber) {   
    return firstNumber / secondNumber;
}

function operate (firstNumber, secondNumber, operator)  {
    if (operator === "+") {
        add(firstNumber, secondNumber);
    } else if(operator === "+") {
        subtract(firstNumber, secondNumber);
    } else if(operator === "+") {
        multiply(firstNumber, secondNumber);
    } else {
        divide(firstNumber, secondNumber);
    }
}

let displayAnswer = document.querySelector("#calculator-answer");
let clearButton = document.querySelector(".clear-button");
let deleteButton = document.querySelector(".delete-button");
const buttons = document.querySelectorAll('.calculator-small-button')
let number = "0";
console.log(displayAnswer.textContent);
buttons.forEach(btn => {
    btn.addEventListener('click', function () {
        if (number.includes(".") && btn.textContent === ".") {
            return;
        } else if (btn.textContent === ".") {
            number = number + btn.textContent;
            displayAnswer.textContent = number;
            displayAnswer.style.fontSize = "46px";
            return;
        } else if (btn.textContent === "0" && number === "0") {
            return;
        } else if (number === "0" ) {
            number = btn.textContent;
            displayAnswer.textContent = "";
            displayAnswer.textContent = btn.textContent;
            displayAnswer.style.fontSize = "46px";
            return;
        }

        number = number + btn.textContent;
        displayAnswer.textContent = number;
        displayAnswer.style.fontSize = "46px";
    });
}); 

clearButton.addEventListener("click", function() {
    displayAnswer.textContent = 0;
    number = "0";
});

deleteButton.addEventListener("click", function() {
      number = number.slice(0, -1); 
      displayAnswer.textContent = number;
});
