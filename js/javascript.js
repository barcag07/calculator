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
console.log(buttonHW);
buttonItems.forEach((button) => {
     button.style.height = buttonHW + "px";
     button.style.width = buttonHW + "px";
     button.style.borderRadius = 100 + "%";
     button.style.border = "none";
     button.style.margin = buttonMargin + "px";
     button.style.padding = buttonPadding + "px";
});


const zeroButton = buttonsDiv.querySelector(".zero");
// let zeroButtonCSS = getComputedStyle(zeroButton);
// let zeroButtonWidth = parseFloat(zeroButtonCSS.width);
let zeroButtonWidth = buttonHW * 2 + buttonMargin * 2 + buttonPadding * 2;
zeroButton.style.width = (zeroButtonWidth) + "px";
zeroButton.style.borderRadius = 100 + "px";
zeroButton.style.margin = buttonMargin;
zeroButton.style.padding = buttonPadding;

let numberButtons = buttonsDiv.querySelectorAll(".number");
numberButtons.forEach((button) => {
     button.addEventListener("click", () => {
          let buttonValue = button.getAttribute("data-value");
          console.log(buttonValue);
     });
     button.addEventListener("mousedown", () => {
          button.style.filter = `brightness(${150}%)`;
     });
     button.addEventListener("mouseup", () => {
          button.style.filter = `brightness(${100}%)`;
     })
});

//OPERATIONS

function clear() {

}

function signChange() {

}

function back() {

}

function add() {

}

function subtract() {

}

function divide() {

}

function multiply() {

}

function equal() {
     
}