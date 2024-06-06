const calculator = document.querySelector(".calculator");
//If we want to get the style property from a css file, we would have to use getComputedStyle of whatever it is we want the style of. Then you can get your property
//getComputedStyle will return a string because of the unit Ex: "100px"
let calcCSS = getComputedStyle(calculator);
let calcWidth = parseFloat(calcCSS.width);


const buttonsDiv = document.querySelector(".buttons");


const buttonItems = buttonsDiv.querySelectorAll("button");
//Because the querySelectorAll is used we have to change the variable to an array and use the spread operator
let buttonHW = calcWidth / 4;
console.log(buttonHW);
buttonItems.forEach((button) => {
     button.style.height = buttonHW + "px";
     button.style.width = buttonHW + "px";
});


const equalButton = buttonsDiv.querySelector(".zero");
let equalButtonCSS = getComputedStyle(equalButton);
let equalButtonWidth = parseFloat(equalButtonCSS.width);
equalButton.style.width = (equalButtonWidth * 2) + "px";

