'use strict';

const $ = require('jquery');
const factory = require("./factory");
const formatter = require("./formatter");
let asteroidTemplate = require("../templates/asteroids.hbs");

let key = "AXrKWeLXxR9YNLRZUkqccMaC2JmnreMX0wUbw33B";


$("#submit").click( () => {
    let $startDate = $("#startDate").val();
    let $endDate = $("#endDate").val();
    let url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${$startDate}&end_date=${$endDate}&api_key=${key}`;
    let asteroids = [];
    
    factory.getAsteroids(url)
    .then( (data) => {
        asteroids = formatter.formatData(data);
        return factory.getFucks(asteroids);        
    })
    .then( (fucks) => {
        for(let i = 0; i < asteroids.length; i++) {
            asteroids[i].message = fucks[i];
        }
        let asteroidsObj = {asteroids};
        $("#messages").html("");
        $("#messages").append(asteroidTemplate(asteroidsObj));
    })
    .catch( (err) => {
        console.log(err);
        alert(`There was a problem: ${err.status} ${err.statusText}`);
    });
});
