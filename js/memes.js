


function getMemes() {
    var hexagons = [];
    for (var i = 0; i < 10; i++) {
        var hexId = i + 1;
        var hex = {
            id: hexId,
            url: '../assets/imgs/img' + hexId + '.jpg',
            keyWords: ['happy', 'crazy', 'sarcastic', 'sad', 'animal']
        };
        hexagons.push(hex);
    }

    return hexagons;
}

