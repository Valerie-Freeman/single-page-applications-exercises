"use strict";
const _ = require("lodash");

module.exports.addIngredient = (ingredientPrices, choices) => {
    let price = 0;
    choices.forEach(choice => {
        if( _.has(ingredientPrices, choice)) {
         price += ingredientPrices[choice];
        }        
    });
    return price;
};

module.exports.addAll = (bread, meat, cheese, veggie, cond) => {
    return (bread + meat + cheese + veggie + cond);
};