"use strict";

let condPrices = { 
    mayonnaise: 0.25, 
    "brown mustard": 0.25,
    horseradish: 0.50,
    mustard: 0.25,
    siracha: 0.50
}; 

module.exports.addCond = (choices, fn) => {
    return fn(condPrices, choices);
};