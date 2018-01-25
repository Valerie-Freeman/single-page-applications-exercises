"use strict";

const $ = require("jquery");
const output = require("./output");


output.printForm();

// $("make").click( () => {

// })

let countChecked = function() {
  let choices = [];
  let selected = $("input:checked");
  for(let i = 0; i < selected.length; i++) {
    choices.push(selected[i].value);
  }
  console.log("choices", choices);
};

   
//   $("#make").on( "click", countChecked );
$("#make").click( () => {
    countChecked(); 
});