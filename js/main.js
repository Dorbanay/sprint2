'use strict';
console.log('Hello Meme');


///===== vars === ///

var gMemes;
var gMeme = null;
var canvas;
var ctx;
var currMemeText;



///=== A function that loads the page ==== ///

function init() {
    gMemes = getMemes();
    renderMemes();
    canvas = document.querySelector('.canvas');
    ctx = canvas.getContext('2d');
}



/// ===== A function thats redners the model hexagons to the DOM ==== ////
function renderMemes() {
    var strHtml = '';
    gMemes.forEach(function (hexagon) {
        var id = hexagon.id;
        var url = hexagon.url;
        var keywords = hexagon.keywords;
        strHtml += `<div class="hexagon img-resposive" onclick="selectMeme(${id})"
            style="background-image: url(${url})" id="${id}" data-keywords=${JSON.stringify(keywords)}>`;

        strHtml += '' + '<div class="face1"></div><div class="face2"></div></div>';

    });

    var element = document.querySelector('.main-gallery')
    element.innerHTML = strHtml;
}




function drawCanvas() {

    var img = new Image();
    img.src = '../assets/imgs/img' + gMeme.item.id + '.jpg';
    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.font = "60px 'Segoe UI'";
        ctx.fillText(gMeme.labels[0].txt, 50, 300)

    };
}




///==== A function that types text input on canvas and  === ////

function typeOnCanvas() {
    var memeText = $('#custom-text');
    gMeme.labels[0].txt = memeText.val();
    drawCanvas();
}


function typeOnKeyword(){
    var keywordText = $('#keywords-text');
    keywordText.val();
}




/// ===== main ===== ////


function selectMeme(memeId) {
    gMeme = { item: { id: memeId }, labels: [{ txt: '', color: '#3F2' }] };
    drawCanvas();
    showMemeSection();
}


///=== A function that hidding the gallry and showing the canvas === ///

function showMemeSection() {
    var elMainGallery = $('.main-gallery');
    elMainGallery.hide(1000);
    var elCanvas = $('.canvas-main');
    elCanvas.show(1000);
}

///=== A function that hidding the canvas and showing the gallery === ///

function showGallerySection() {
    var elMainGallery = $('.main-gallery');
    elMainGallery.show(1000);
    var elCanvas = $('.canvas-main');
    elCanvas.hide(1000);
    var memeText = $('#custom-text');
    memeText.val('');
    gMeme = null;
}


///=== A function that let the user download the Meme === ///

function downloadImg(elLink) {
    elLink.href = canvas.toDataURL();
    elLink.download = 'perfectMeme.jpg';
}




// function typeOnCanvas1() {
//     var memeText = $('#custom-text');
//     doCanvas(currMemeText);
//     setTimeout(function () {
//         ctx.fillText(memeText.val(), 50, 300)
//     }, 100);

// }


// // function typeOnCanvas2() {
// //     var memeText = $('#custom-text2');
// //     doCanvas(currMemeText);
// //     setTimeout(function() {
// //         ctx.fillText(memeText.val(), 50, 300)
// //     }, 100);

// // }


