'use strict';
console.log('Hello Meme');


///===== vars === ///

var gHex;
var canvas;
var ctx;
var currMemeText;


///=== A function that loads the page ==== ///

function init() {
    gHex = createHexagons();
    render();
    canvas = document.querySelector('.canvas');
    ctx = canvas.getContext('2d');
}

//// ==== A function that crates the hexagons model ==== ///
function createHexagons() {
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



/// ===== A function thats redners the model hexagons to the DOM ==== ////
function render() {
    var strHtml = '';
    gHex.forEach(function (hexagon) {
        var id = hexagon.id;
        var url = hexagon.url;
        var keywords = hexagon.keywords;
        strHtml += '<div class="hexagon img-resposive" onclick="doCanvas(' + id + '); showMemeSection()" style="background-image: url(' + url + ')" id="' + id + '">';

        strHtml += '' + '<div class="face1"></div><div class="face2"></div></div>';

    });

    var element = document.querySelector('.main-gallery')
    element.innerHTML = strHtml;
}


/// ===== main ===== ////


function doCanvas(imgId) {

    var img = new Image();
    img.src = '../assets/imgs/img' + imgId + '.jpg';
    currMemeText = imgId;
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.font = "60px 'Segoe UI'";
  

    };
}



///=== A function that hidding the gallry and showing the canvas

function showMemeSection() {
   var elMainGallery = document.querySelector('.main-gallery');
    elMainGallery.style.display = 'none';
    var elCanvas = document.querySelector('.canvas-main');
    elCanvas.style.display = 'block';
}


function showGallerySection() {
    var elMainGallery = document.querySelector('.main-gallery');
    elMainGallery.style.display = 'flex';
    var elCanvas = document.querySelector('.canvas-main');
    elCanvas.style.display = 'none';
}




///==== A function that types text input on canvas and renders each time (for deletring options) === ////

function typeOnCanvas() {
    var memeText = $('#custom-text');
    doCanvas(currMemeText);
    setTimeout(function () {
        ctx.fillText(memeText.val(), 50, 300)
    }, 100);

}


// function typeOnCanvas2() {
//     var memeText = $('#custom-text2');
//     doCanvas(currMemeText);
//     setTimeout(function() {
//         ctx.fillText(memeText.val(), 50, 300)
//     }, 100);

// }


