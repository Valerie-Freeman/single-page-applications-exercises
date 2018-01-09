'use strict';

const $ = require("jquery");

module.exports.formatData = (data) => {
    let neos = data.near_earth_objects;
    let neoKeys = Object.keys(neos);
    let asteroids = [];
    neoKeys.forEach( date => {
        for (let i = 0; i < neos[date].length; i++) {
            if (neos[date][i].is_potentially_hazardous_asteroid === true) {
                asteroids.push(
                    {
                        name: neos[date][i].name,
                        fuckIt: neos[date][i].is_potentially_hazardous_asteroid
                    }
                );
            }
        }
    });
    return asteroids;
};