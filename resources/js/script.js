//declare variables
let firstNum = "";
let secondNum = "";
let operator = "";
let result;
let activePart = 1;
//when clicking on a number, it adds it to the input screen. When clicking on an operator it adds a space in front and after
function updateDisplay()
{
    document.getElementById("display").setAttribute("value",`${firstNum + " " + operator + " " + secondNum}`);   
}
function enterNumber(number)
{
    if(activePart == 1) 
    {
        firstNum = firstNum + number;
    } else if (activePart == 2) 
    {
        secondNum = secondNum + number;
    }
    updateDisplay();
}
function enterOperator(x)
{
    operator = `${x}`;
    updateDisplay();
    activePart = 2;
    //Disable Operators
}

//perform operations
function performOp() 
{
    switch (operator) {
        case "+":
            result = parseInt(firstNum) + parseInt(secondNum);            
            break;        
        case "-":
            result = parseInt(firstNum) - parseInt(secondNum);            
            break;
        case "x":
            result = parseInt(firstNum) * parseInt(secondNum);            
            break;
        case "/":
            result = parseInt(firstNum) / parseInt(secondNum);            
            break;
        default:
            break;
    }

}
//calculate - Triggers breaking the input and performing operations, then displays result.
function calc() 
{
    performOp();
    document.getElementById("display").setAttribute("value",`${result.toFixed(2)}`);
}
//on Clear enable operators, set activepart to 1 and clear all variables.
function clearDisplay()
{
    console.log('Clear is called');
    firstNum = "";
    secondNum = "";
    operator = "";
    result = 0;
    activePart = 1;
    updateDisplay();
}