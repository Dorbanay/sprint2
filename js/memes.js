'use strict';


function getMemes() {
    var hexagons = [];
    for (var i = 0; i < 14  ; i++) {
        var hexId = i + 1;
        var hex = {
            id: hexId,
            url: '../assets/imgs/img' + hexId + '.jpg',
            keywords: ['happy', 'crazy', 'sarcastic', 'sad', 'animal'].splice(getRandomInt(0,4),getRandomInt(1,3))
        };
        hexagons.push(hex);
    }

    return hexagons;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
