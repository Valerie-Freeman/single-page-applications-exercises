"use strict";

let breadPrices = { 
    "whole wheat": 1.25, 
    "honey wheat": 1.00,
    white: 1.00,
    potato: 0.95,
    rye: 1.50
}; 

module.exports.addBread = (breadSelection) => {
    let price = breadPrices[breadSelection];
    return price;
};