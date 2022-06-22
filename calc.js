// This program is a simple calculator 
// This calculator will be able to perform (Addition, Subtraction, Multiplication, & Division)

let numberA = parseInt (prompt ("Input first number: "))
let numberB = parseInt (prompt ("Input second number: "))
operator = prompt ("select operation: +, -, *, /")

if (operator === "+") {
    alert (numberA + numberB)
} else if (operator === "-") {
    alert (numberA - numberB)
} else if (operator === "*") {
    alert (numberA * numberB)
} else if (operator === "/") {
    alert (numberA / numberB)
} else {
    alert ("Syntax Error")
}