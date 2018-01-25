"use strict";

let veggiePrices = { 
    onion: 0.25, 
    lettuce: 0.25,
    tomato: 0.25,
    olives: 0.50,
    avacado: 0.75
}; 

module.exports.addVeggie = (choices, fn) => {
    return fn(veggiePrices, choices);
};