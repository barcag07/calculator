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
// let zeroButtonCSS = getComputedStyle(zeroButton);
// let zeroButtonWidth = parseFloat(zeroButtonCSS.width);
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
                    // tempNum = appendToDisplay(buttonValue);
                    secondNum = Number(outputText.value);
               }
               // tempNum = buttonValue;
               // let showNum = outputText.value;

               // console.log(showNum);
          }  
     });
});


let firstNum;
let secondNum;
let operator;

let operationButton = buttonsDiv.querySelectorAll(".operator");
operationButton.forEach((button) => {
     button.addEventListener("click", () => {
          operator = button.getAttribute("data-value");
          if (!firstNum) {
               firstNum = Number(outputText.value);
               outputText.value = "";
          }
          
          // firstNum = Number(outputText.textContent);
          

               // console.log(showNum);
          // console.table()
     });
});


function getCurrentNum() {
     let currentNum = outputText.value;
     return currentNum
}

// let opera

// const display = document.querySelector("#display");
// display.style.color = "blue";


let outputTextContainer = calculator.querySelector(".output-container");
let outputText = outputTextContainer.querySelector(".output-text");
// outputText.style.color = "red";

function appendDecimal() {
     outputText.value += ".";
}


function appendToDisplay(input) {
     outputText.value += input;
}

function add(firstNum, secondNum) {
     return firstNum + secondNum;
}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate() {
     //switch statement
     let result;
     switch(operator) {
          case "+": 
          result = add(firstNum, secondNum);
          outputText.value = result;
          break;
     }
}

// let topButtons = buttonsDiv.querySelector(".top");

// let clearButton = buttonsDiv.querySelector(".clear");
// clearButton.addEventListener("click", () => {
//      clear();
// });

// let signChangeButton = buttonsDiv.querySelector(".positive-negative");
// signChangeButton.addEventListener("click", () => {
//      if (outputText.textContent !== "0") {
//           if (operation && secondNum !== null) {
//                secondNum = signChange(secondNum);
//                outputText.textContent = secondNum;
//           } else if (firstNum !== null) {
//                firstNum = signChange(firstNum);
//                outputText.textContent = firstNum;
//           }
//      }
// });


// let outputContainer = calculator.querySelector(".output-container");
// let outputText = outputContainer.querySelector(".output-text")
// // outputText.textContent = "YOOOOOO";


// let operation;

// let operationButtons = buttonsDiv.querySelectorAll(".operator");
// operationButtons.forEach((button) => {
//      button.addEventListener("click", () => {
//           button.style.filter = `brightness(${125}%)`
//           operation = button.getAttribute("data-value");
//           console.log(operation);
//      });
// });

// let decimalButton = buttonsDiv.querySelector(".decimal-point");
// let decimalClicked = false;

// decimalButton.addEventListener("click", () => {
//      decimalClicked = true;
// });




// let firstNum;
// let secondNum


// let numberButtons = buttonsDiv.querySelectorAll(".number");
// numberButtons.forEach((button) => {
//      button.addEventListener("click", () => {
//           //When using .getAttribute it changes value to a string so don't forget to change the value to a number using Number(variable)
//           let buttonValue = button.getAttribute("data-value");
//           appendToDisplay(buttonValue);

//           // if (decimalClicked) {
//           //      if (!firstNum) {
//           //           firstNum += buttonValue;
//           //           firstNum = buttonValue;

//           //           outputText.textContent = firstNum;
     
//           //      }
//           //      else if(firstNum && operation) {
//           //           secondNum = button.getAttribute("data-value");
//           //           secondNum = Number(secondNum);
//           //           outputText.textContent = secondNum;
//           //      }
//           //      else {}
//           // }
//           buttonValue = Number(buttonValue);


//           // if()

//           //if operation doesn't have a value then firstNum is first click else click is secondNum

//           // if (!firstNum) {
//           //      firstNum = buttonValue;               
//           //      outputText.textContent = firstNum;

//           // }
//           // else if(firstNum && operation) {
//           //      secondNum = button.getAttribute("data-value");
//           //      secondNum = Number(secondNum);
//           //      outputText.textContent = secondNum;
//           // }
//           // else {}

          
//           // firstNum = buttonValue;

//           // //Check to see if there is a value for firstNum and operation
//           // if (operation && firstNum) {
               
//           // }

//           console.log(`operation: ${operation} \nfirstNum: ${firstNum}\nsecondNum: ${secondNum}`);
//      });
//      button.addEventListener("mousedown", () => {
//           button.style.filter = `brightness(${150}%)`;
//      });
//      button.addEventListener("mouseup", () => {
//           button.style.filter = `brightness(${100}%)`;
//      });
// });



// let result;

// let equalButton = buttonsDiv.querySelector(".equals");
// equalButton.addEventListener("click", () => {
//      if (firstNum && secondNum && operation) {
//           firstNum = equal(firstNum, secondNum, operation);
//           console.log("This is the new firstNum", firstNum);
//           outputText.textContent = firstNum; // Update the output with the new firstNum
//           // Reset secondNum and operation for the next calculation
//           secondNum = null;
//           operation = null;
//      }
//      operationButtons.forEach((button) => {
//           button.style.filter = `brightness(${100}%)`;
//      });
// });


// function appendToDisplay(buttonValue) {
//      outputText.textContent += buttonValue;
// }



// //Add event listener for decimal that when it is pressed, it gets appended to the the output text


// //OPERATIONS



// function clear() {
//      firstNum = null;
//      secondNum = null;
//      operation = null;
//      outputText.textContent = 0;
// }

// function signChange(num) {
//      return num * -1;
// }

// function back() {

// }
// //Create a variable for firstNum, secondNum, and operation
// // takes 2 parameter, firstNum secondNum(maybe an event)
// // first a number is clicked and added to variable firstNum that holds 2st number
// //  Then the function operation is called on the click of that operation symbol. Inside the function it creates a variable maybe addTemp that on a click of another number, it gets assigned to that variable, then the two numbers get added and then the answer is given the value of firstNum and returned to the output text awaiting the next operation 
// function add(firstNum, secondNum) {
//      // console.log("Addition Answer:",firstNum + secondNum);
//      return outputText.textContent = firstNum + secondNum;
// }

// function subtract(firstNum, secondNum) {
//      return outputText.textContent = firstNum - secondNum;
// }

// function divide(firstNum, secondNum) {
//      return outputText.textContent = firstNum / secondNum;
// }

// function multiply(firstNum, secondNum) {
//      return outputText.textContent = firstNum * secondNum;
// }

// function equal(firstNum, secondNum, operation) {
//      switch(operation) {
//           case "+": 
//           return add(firstNum, secondNum);
//           break;

//           case "-": 
//           return subtract(firstNum, secondNum);
//           break;

//           case "/": 
//           return divide(firstNum, secondNum);
//           break;

//           case "*": 
//           return multiply(firstNum, secondNum);
//      }

//      // return operation;

// }