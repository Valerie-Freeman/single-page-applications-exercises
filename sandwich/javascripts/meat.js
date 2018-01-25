"use strict";

let meatPrices = { 
    salami: 0.75, 
    "roast beef": 1.25,
    turkey: 1.10,
    ham: 0.95,
    bacon: 0.50
}; 

module.exports.addMeat = (meatSelection) => {
    let price = meatPrices[meatSelection];
    return price;
};

