//Define functions for the calculator

//Sum function
function sum(num1, num2) {
    return num1 + num2
}

//Substract function
function substract(num1, num2) {
    return num1 - num2
}

//Divide function
function divide(num1, num2) {
    return num1 / num2
}

//Multiply function
function multiply(num1, num2) {
    return num1 * num2
}

//Power function
function power(num1, num2) {
    return num1 ** num2
}

//Square function
function square(num1, num2) {
    return [num1 * num1, num2 * num2]
}


//Calculator logic

//Initial message to prompt when user clicks the button
function calculator() {
    var num1 = prompt("Enter your first number: ");
    var num2 = prompt("Enter your second number: ");
    var calculation = prompt(`Fab! You entered the numbers ${num1} and ${num2}. What do you want to calculate? Enter: + , - , / , * , power or square.`);
    if (calculation == "+") {
        alert(`The result of the sum of ${num1} and ${num2} is ${sum(num1, num2)}`)
    } else if (calculation == "substract") {
        alert(`The result of the substraction of ${num1} and ${num2} is ${substract(num1, num2)}`)
    } else if (calculation == "/") {
        alert(`The result of dividing ${num1} by ${num2} is ${divide(num1, num2)}`)
    } else if (calculation == "*") {
        alert(`The result of multiplying ${num1} and ${num2} is ${multiply(num1, num2)}`)
    } else if (calculation.toLowerCase() == "power") {
        alert(`The result of ${num1} powered to ${num2} is ${power(num1, num2)}`)
    } else if (calculation.toLowerCase() == "square") {
        alert(`The square of ${num1} is ${square(num1, num2)[0]} and the square of ${num2} is ${square(num1, num2)[1]}`)
    }
}