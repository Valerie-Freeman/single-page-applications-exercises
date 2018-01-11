let input = document.getElementById("input");
let create = document.getElementById("create");
let output = document.getElementById("output");
let i = 1;
let remove = document.getElementById("delete");

// document.removeChild(element)

create.addEventListener("click", function() {
    output.innerHTML += `<div class="card">${input.value}<button id="delete">Delete</button></div>`;
    console.log("input", input.value);
    input.value = "";
});

document.addEventListener("click", function() {
    if (event.target.id === "delete") {
        let card = event.target.parentElement;
        output.removeChild(card);
    };
}); 