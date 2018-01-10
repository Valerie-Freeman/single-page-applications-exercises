let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let divide = document.getElementById("divide");

let output = document.getElementById("output");

add.addEventListener("click", function() {
    output.innerHTML = `Result: ${(+num1.value + +num2.value)}`;
});

subtract.addEventListener("click", function() {
    output.innerHTML = `Result: ${(+num1.value - +num2.value)}`;
});

multiply.addEventListener("click", function() {
    output.innerHTML = `Result: ${(+num1.value * +num2.value)}`;
});

divide.addEventListener("click", function() {
    output.innerHTML = `Result: ${(+num1.value / +num2.value)}`;
});

