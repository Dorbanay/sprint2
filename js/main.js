'use strict';
console.log('Hello Meme');


///===== vars === ///

var gMemes;
var canvas;
var ctx;
var currMemeText;


var gMeme = null;

function drawCanvas() {

    var img = new Image();
    img.src = '../assets/imgs/img' + gMeme.item.id + '.jpg';
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.font = "60px 'Segoe UI'";
        ctx.fillText(gMeme.labels[0].txt, 50, 300)

    };
}

function typeOnCanvas() {
    var memeText = $('#custom-text');
    gMeme.labels[0].txt =  memeText.val();
    drawCanvas();
}


///=== A function that loads the page ==== ///

function init() {
    gMemes = getMemes();
    renderMemes();
    canvas = document.querySelector('.canvas');
    ctx = canvas.getContext('2d');
}

//// ==== A function that crates the hexagons model ==== 
// TODO Items instead of hexagons
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



/// ===== A function thats redners the model hexagons to the DOM ==== ////
function renderMemes() {
    var strHtml = '';
    gMemes.forEach(function (hexagon) {
        var id = hexagon.id;
        var url = hexagon.url;
        var keywords = hexagon.keywords;
        strHtml += '<div class="hexagon img-resposive" onclick="selectMeme(' + id + ')" style="background-image: url(' + url + ')" id="' + id + '">';

        strHtml += '' + '<div class="face1"></div><div class="face2"></div></div>';

    });

    var element = document.querySelector('.main-gallery')
    element.innerHTML = strHtml;
}

function selectMeme(memeId) {
    gMeme = {item: {id: memeId}, labels: [{txt: '', color: '#3F2'}]  };
    drawCanvas(); 
    showMemeSection()
}


/// ===== main ===== ////


// function doCanvas(imgId) {

//     var img = new Image();
//     img.src = '../assets/imgs/img' + imgId + '.jpg';
//     currMemeText = imgId;
//     img.onload = function () {
//         ctx.drawImage(img, 0, 0, 568, 360);
//         ctx.font = "60px 'Segoe UI'";


//     };
// }



///=== A function that hidding the gallry and showing the canvas

function showMemeSection() {
    var elMainGallery = $('.main-gallery');
    elMainGallery.hide(1000);
    var elCanvas = $('.canvas-main');
    elCanvas.show(1000);
}


function showGallerySection() {
    var elMainGallery = $('.main-gallery');
    elMainGallery.show(1000);
    var elCanvas = $('.canvas-main');
    elCanvas.hide(1000);
    gMeme = null;
}

function downloadImg(elLink) {
    elLink.href = canvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}





///==== A function that types text input on canvas and renders each time (for deletring options) === ////

function typeOnCanvas1() {
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


