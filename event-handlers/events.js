let sections = document.getElementsByClassName("article-section");
let output = document.getElementById("output-target");
let pageTitle = document.getElementById("page-title");
let input = document.getElementById("keypress-input");
let addColor = document.getElementById("add-color");
let hulkify = document.getElementById("make-large");
let capture = document.getElementById("add-border");
let rounded = document.getElementById("add-rounding");
let guineaPig = document.getElementById("guinea-pig");

for(let i = 0; i < sections.length; i++) {

        sections[i].addEventListener("click", function() {
            output.innerHTML = `Output: ${sections[i].innerHTML}`;
        });
}

pageTitle.addEventListener("mouseover", function() {
    output.innerHTML = "Output: You moved your mouse over the header";
});

pageTitle.addEventListener("mouseout", function() {
     output.innerHTML = "Output: You left me!!";
 });

input.addEventListener("keyup", function() {
    output.innerHTML = `Output: ${input.value}`;
});

addColor.addEventListener("click", function() {
    guineaPig.classList.toggle("blue");
});

hulkify.addEventListener("click", function() {
    guineaPig.classList.toggle("hulkify");
});

capture.addEventListener("click", function() {
    guineaPig.classList.toggle("capture");
});

rounded.addEventListener("click", function() {
    guineaPig.classList.toggle("rounded");
});








