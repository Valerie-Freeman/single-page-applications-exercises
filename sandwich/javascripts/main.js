"use strict";

const $ = require("jquery");
const output = require("./output");
const bread = require("./bread");
const meat = require("./meat");
const cheese = require("./cheese");
const veggies = require("./veggies");
const condiments = require("./condiments");
const calculate = require("./calculate");



output.printForm();

let countChecked = function() {
    let choices = [];
    let selected = $("input:checked");
    for(let i = 0; i < selected.length; i++) {
        choices.push(selected[i].value);
    }
    return choices;
};
   
$("#make").click( () => {
    let choices = countChecked();
    let breadPrice = bread.addBread(choices, calculate.addIngredient);
    let meatPrice = meat.addMeat(choices, calculate.addIngredient);
    let cheesePrice = cheese.addCheese(choices, calculate.addIngredient);
    let veggiePrice = veggies.addVeggie(choices, calculate.addIngredient);
    let condimentPrice = condiments.addCond(choices, calculate.addIngredient);

    let finalPrice = calculate.addAll(breadPrice, meatPrice, cheesePrice, veggiePrice, condimentPrice);

    output.printOrder(finalPrice);

});