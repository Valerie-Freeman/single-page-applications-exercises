"use strict";
const $ = require("jquery");
const ingredientTemplate = require("../templates/ingredients.hbs");

let bread = {
    header: "Choose your bread",
    types: ["whole wheat", "honey wheat", "white", "potato", "rye"]
};

let ingredients = [ 
    {
        header: "Choose your meat",
        types: ["salami", "roast beef", "turkey", "bacon", "ham"]
    },
    {
        header: "Choose your cheese",
        types: ["jack", "cheddar", "provolone", "colby", "gouda"]
    },
    {
        header: "Choose your veggies",
        types: ["onion", "lettuce", "tomato", "olives", "avacado"]
    },
    {
        header: "Choose your condiments",
        types: ["mayonnaise", "mustard", "brown mustard", "horseradish", "siracha"]
    }
];

let ingredientsObj = {bread, ingredients};

module.exports.printForm = () => {
    console.log("printForm working");
    console.log(ingredientsObj);
    $("#orderForm").append(ingredientTemplate(ingredientsObj));
};