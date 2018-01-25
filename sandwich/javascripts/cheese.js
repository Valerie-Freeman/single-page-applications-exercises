"use strict";

let cheesePrices = { 
    jack: 1.00, 
    cheddar: 1.00,
    provolone: 1.25,
    colby: 0.95,
    gouda: 1.50
}; 

module.exports.addCheese = (choices, fn) => {
    return fn(cheesePrices, choices);
};