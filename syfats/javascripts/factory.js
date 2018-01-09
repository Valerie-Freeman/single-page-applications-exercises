'use strict';

const $ = require("jquery");
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.getAsteroids = (url) => { 
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url
        })
        .done(data => {
            resolve(data);
        })
        .fail(error => {
            reject(error);
        });
    });
};

function getUrl(asteroid) {
    let fucks = [`/anyway/${asteroid.name}`, "/asshole", `/back/${asteroid.name}`, "/bag", "/bucket", "/bye", `/cocksplat/${asteroid.name}`, "/cool", "/cup", `/deraadt/${asteroid.name}`, "/family", "/fyyff", `/gfy/${asteroid.name}`, "/horse", `/ing/${asteroid.name}`, `/keep/${asteroid.name}`, "/maybe", "/no", `/nugget/${asteroid.name}`, `/off/${asteroid.name}`, `/problem/${asteroid.name}`, "/programmer", "/retard", "/thanks", "/that", `/think/${asteroid.name}`, "/thumbs/Me", "/too", "/tucker", `/yoda/${asteroid.name}`, `/you/${asteroid.name}`, "/zayn", "/zero", "/pink"];
    
    let index = getRandomInt((fucks.length - 1));
    return `http://foaas.com${fucks[index]}/name`;
}

module.exports.getFucks = (asteroids) => {
    let promiseArr = [];
    asteroids.forEach( asteroid => {
        let url = getUrl(asteroid);      
        let p = new Promise((resolve, reject) => {        
            $.getJSON({
                url: url
            })
            .done(fuck => {
                resolve(fuck.message);
            })
            .fail(error => {
                reject(error);
            });
        });
        promiseArr.push(p);
    });
    return Promise.all(promiseArr)
    .then(fucks => {
        return fucks;
    });
};