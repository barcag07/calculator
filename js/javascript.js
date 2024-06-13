const calculator = document.querySelector(".calculator");
let calcCSS = getComputedStyle(calculator);
let calcWidth = parseFloat(calcCSS.width);

const buttonsDiv = document.querySelector(".buttons");

const buttonItems = buttonsDiv.querySelectorAll("button");
let buttonMargin = 5;
let buttonPadding = 0;
let totalButtonHW = calcWidth / 4;
let buttonHW = totalButtonHW - (buttonMargin * 2) - (buttonPadding * 2);

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
        let buttonValue = button.getAttribute("data-value");

        if (resultDisplayed) {
            // Reset the display when a new number is clicked after a result is displayed
            outputText.value = "";
            resultDisplayed = false;
            firstNum = undefined;
            secondNum = undefined;
            operator = null;
        }

        if (operationButtonTF) {
            // Reset outputText for the second number
            outputText.value = "";
            operationButtonTF = false;
        }

        if (buttonValue === ".") {
            // Handle decimal point
            if (!outputText.value.includes(".")) {
                appendToDisplay(buttonValue);
            }
        } else {
            // Append digit to the current number
            appendToDisplay(buttonValue);
        }

        // Update firstNum or secondNum based on the presence of an operator
        if (!operator) {
            firstNum = Number(outputText.value);
        } else {
            secondNum = Number(outputText.value);
        }

        console.log(`firstNum: ${firstNum}, operator: ${operator}, secondNum: ${secondNum}`);
    });
});

function appendToDisplay(input) {
    outputText.value += input;
}

let firstNum;
let secondNum;
let operator;
let operationButtonTF = false;
let resultDisplayed = false;

let operationButton = buttonsDiv.querySelectorAll(".operator");
operationButton.forEach((button) => {
    button.addEventListener("click", () => {
        operator = button.getAttribute("data-value");
        operationButtonTF = true;
        if (!firstNum) {
            firstNum = Number(outputText.value);
            outputText.value = "";
        } else {
            outputText.value = "";
        }
    });
});

function getCurrentNum() {
    let currentNum = outputText.value;
    return currentNum;
}

let outputTextContainer = calculator.querySelector(".output-container");
let outputText = outputTextContainer.querySelector(".output-text");

let equalButton = buttonsDiv.querySelector(".equals");
equalButton.addEventListener("click", () => {
    outputText.value = operate(firstNum, secondNum, operator);
    result = Number(outputText.value);
    firstNum = result;
    operationButtonTF = false;
    secondNum = undefined;
    resultDisplayed = true;  // Set the flag indicating the result is displayed
});

let clearButton = buttonsDiv.querySelector(".clear");
clearButton.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = null;
    outputText.value = "";
    resultDisplayed = false;
});

let signChangeButton = buttonsDiv.querySelector(".positive-negative");
signChangeButton.addEventListener("click", () => {
    // signChangeButton.style.backgroundColor = "blue";
});

function appendDecimal() {
    outputText.value += ".";
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
        return 0;
    } else {
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
