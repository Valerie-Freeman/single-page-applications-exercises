let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

let output = document.getElementById("output");


/*
Create a function that multiplies two numbers
passed in as arguments. Return the product.
*/
function multiplyNums(num1, num2) {
    return num1 * num2;
};

/*
Create a function that adds two numbers
passed in as arguments. Return the sum.
*/
function addNums(num1, num2) {
    return num1 + num2;
}

/*
Create a function that subtracts two numbers
passed in as arguments. Return the difference.
*/
function subtractNums(num1, num2) {
    return num1 - num2;
}


/*
Create a function that divides two numbers
passed in as arguments. Return the quotient.
*/
function divideNums(num1, num2) {
    return num1 / num2;
}


/*
Create a function that accepts three arguments.
1. First number
2. Second number
3. A function that performs an operation on them

Return the value of the operation.
*/
function calculate(num1, num2, fn) {
    return fn(num1, num2);
}

/*
When the user performs one of the operations, output the result to another DOM element of your choice.
*/

add.addEventListener("click", function() {
    let result = calculate(+num1.value, +num2.value, addNums);
    output.innerHTML = `Result: ${result}`;
});

subtract.addEventListener("click", function() {
    let result = calculate(+num1.value, +num2.value, subtractNums);
    output.innerHTML = `Result: ${result}`;
});

multiply.addEventListener("click", function() {
    let result = calculate(+num1.value, +num2.value, multiplyNums);
    output.innerHTML = `Result: ${result}`;
});

divide.addEventListener("click", function() {
    let result = calculate(+num1.value, +num2.value, divideNums);
    output.innerHTML = `Result: ${result}`;
});