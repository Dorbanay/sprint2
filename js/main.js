'use strict';
console.log('Hello Meme');


///===== vars === ///

var gMemes;
var gMeme = null;
var canvas;
var ctx;
var currMemeText;
var res = {};


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
        //es6 template - looks more like html , no need to break lines
        // join - wanted to show the keywords on hover
        //title - built in html show on hover
        strHtml += `
                    <div class="hexagon img-resposive gallery-item" onclick="selectMeme(${id})"
                        style="background-image: url(${url})" title="${keywords.join(',')}" id="${id}" data-keywords=${JSON.stringify(keywords)}>
                    <div class="face1"></div><div class="face2"></div></div>
                  `;

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
        ctx.fillText(gMeme.labels[0].txt, 50, 320)
        ctx.fillText(gMeme.labels[0].txt2, 50, 50)

    };
}


///==== A function that types text input on canvas and  === ////

function typeOnCanvas() {
    var memeText = $('#custom-text');
    gMeme.labels[0].txt = memeText.val();
    drawCanvas();
}


function typeOnCanvas2() {
    var memeText2 = $('#custom-text2');
    gMeme.labels[0].txt2 = memeText2.val();
    drawCanvas();
}

///==== A function that handles the keyword search  === ////

function typeOnKeyword(keywordToSearch) {
    var keywordText;
    if (!keywordToSearch) {
        keywordText = $('#keywords-text').val();
    }
    else {
        keywordText = keywordToSearch;
    }

    //runs on all .hexagon.img-resposive with jquery foreach
    $('.hexagon.gallery-item').each(function (index, item) {
        //create temp array with all the keywords of a specific hexagon
        var tempKeywords = $(item).data('keywords');
        //if some of the keywords has the character don't touch the img 
        //if it doesn't have - add class hide
        if (!tempKeywords.some(function (keyword) {
            return keyword.includes(keywordText)
        })) {
            $(item).fadeOut(1000);
        }
        else {
            $(item).fadeIn(1000);
        }
    });
}

///==== A function that handles the popular keyword  === ////

function clickOnKeyword(keyword) {
    typeOnKeyword(keyword.innerHTML);
    var currInc;
    res[keyword.innerHTML] = (res[keyword.innerHTML] === undefined) ? 1 : res[keyword.innerHTML] + 1;
    // console.log(res[keyword.innerHTML])
    currInc = res[keyword.innerHTML];
    increaseFont(keyword, currInc);

}

function increaseFont(keyword, increase) {
    var fontSize = parseInt($(`#${keyword.id}`).css("font-size"));
    console.log(fontSize);
    fontSize = 14 + increase + "px";
    console.log(fontSize);
    $(`#${keyword.id}`).css({ 'font-size': fontSize });
    console.log(fontSize);
}


/// ===== main ===== ////


function selectMeme(memeId) {
    gMeme = { item: { id: memeId }, labels: [{ txt: '', txt2: '' }] };
    drawCanvas();
    showMemeSection();
}


///=== A function that hidding the gallry and showing the canvas === ///

function showMemeSection() {
    var elMainGallery = $('.main-gallery');
    // elMainGallery.css({opacity: 0.2})
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

