const calculator = document.querySelector(".calculator");
//If we want to get the style property from a css file, we would have to use getComputedStyle of whatever it is we want the style of. Then you can get your property
//getComputedStyle will return a string because of the unit Ex: "100px"
let calcCSS = getComputedStyle(calculator);
let calcWidth = parseFloat(calcCSS.width);


const buttonsDiv = document.querySelector(".buttons");


const buttonItems = buttonsDiv.querySelectorAll("button");
let buttonMargin = 5;
let buttonPadding = 0;
let totalButtonHW = calcWidth / 4;
let buttonHW = totalButtonHW - (buttonMargin * 2) - (buttonPadding * 2);
// console.log(buttonHW);
buttonItems.forEach((button) => {
     button.style.height = buttonHW + "px";
     button.style.width = buttonHW + "px";
     button.style.borderRadius = 100 + "%";
     button.style.border = "none";
     button.style.margin = buttonMargin + "px";
     button.style.padding = buttonPadding + "px";
});


let zeroButton = buttonsDiv.querySelector(".zero");
let zeroButtonWidth = buttonHW * 2 + buttonMargin * 2 + buttonPadding * 2;
zeroButton.style.width = (zeroButtonWidth) + "px";
zeroButton.style.borderRadius = 100 + "px";
zeroButton.style.margin = buttonMargin;
zeroButton.style.padding = buttonPadding;




let calcButtons = buttonsDiv.querySelectorAll("button");
calcButtons.forEach((button) => {
     button.addEventListener("mousedown", () => {
          button.style.filter = `brightness(${150}%)`;
     });

     button.addEventListener("mouseup", () => {
          button.style.filter = `brightness(${100}%)`;
     })

});

let tempNum;

let numberButtons = buttonsDiv.querySelectorAll(".number");
numberButtons.forEach((button) => {
     button.addEventListener("click", () => {
          buttonValue = button.getAttribute("data-value");

          if (firstNum && !operationButtonTF){
               outputText.value = "";
               firstNum = outputText.value;

          }

          if (buttonValue === ".") {;
               if (!getCurrentNum().includes(".")) {
                    appendDecimal();
               }
          }
          else {
               buttonValue = Number(buttonValue);
               // console.log(typeof buttonValue);
               tempNum = appendToDisplay(buttonValue);

               if (firstNum && operator) {

                    secondNum = Number(outputText.value);
               }
               // console.log(showNum);
          }  
          
     });
});


let firstNum;
let secondNum;
let operator;
let operationButtonTF = false;

let operationButton = buttonsDiv.querySelectorAll(".operator");
operationButton.forEach((button) => {
     button.addEventListener("click", () => {
          operator = button.getAttribute("data-value");
          operationButtonTF = true;
          if (!firstNum) {
               firstNum = Number(outputText.value);
               outputText.value = "";
          }
          else {
               outputText.value = "";
          }
          

               // console.log(showNum);
     });
});


function getCurrentNum() {
     let currentNum = outputText.value;
     return currentNum
}



let outputTextContainer = calculator.querySelector(".output-container");
let outputText = outputTextContainer.querySelector(".output-text");
// outputText.style.color = "red";


let equalButton = buttonsDiv.querySelector(".equals");
equalButton.addEventListener("click", () => {
     outputText.value = operate(firstNum, secondNum, operator);
     result = Number(outputText.value);
     firstNum = result;
     operationButtonTF = false;
     secondNum = undefined;
})

let clearButton = buttonsDiv.querySelector(".clear");
clearButton.addEventListener("click", () => {
     // clearButton.style.backgroundColor = "red";
     firstNum = "";
     secondNum = "";
     operator = null;
     outputText.value = "";
});




function appendDecimal() {
     outputText.value += ".";
}


function appendToDisplay(input) {
     outputText.value += input;
}

let decimalAnswer;

function add(firstNum, secondNum) {
     return firstNum + secondNum;
}
function subtract(firstNum, secondNum) {
     return firstNum - secondNum;
}
function multiply(firstNum, secondNum) {
     decimalAnswer = firstNum * secondNum;
     return Math.round(decimalAnswer * 100) / 100;
}
function divide(firstNum, secondNum) {
     if (firstNum === 0 || secondNum === 0) {
          return 0
     }
     else {
          decimalAnswer = firstNum / secondNum;
          return Math.round(decimalAnswer * 100) / 100;
     }
}


function operate(firstNum, secondNum, operator) {
     //switch statement

     switch(operator) {
          case "+": 
               return add(firstNum, secondNum);
          case "-":
               return subtract(firstNum, secondNum);

          case "*":
               return multiply(firstNum, secondNum);

          case "/":
               return divide(firstNum, secondNum);
     }
}
