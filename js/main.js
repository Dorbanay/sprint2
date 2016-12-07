'use strict';
console.log('Hello Meme');

var gHex;
var canvas;
var ctx;

// $(document).ready(function () {
//     $('#characterLeft').text('140 characters left');
//     $('#message').keydown(function () {
//         var max = 140;
//         var len = $(this).val().length;
//         if (len >= max) {
//             $('#characterLeft').text('You have reached the limit');
//             $('#characterLeft').addClass('red');
//             $('#btnSubmit').addClass('disabled');
//         }
//         else {
//             var ch = max - len;
//             $('#characterLeft').text(ch + ' characters left');
//             $('#btnSubmit').removeClass('disabled');
//             $('#characterLeft').removeClass('red');
//         }
//     });
// });







function init() {
    gHex = createHexagons();
    render();
    canvas = document.querySelector('.canvas');
    ctx = canvas.getContext('2d');
}


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




function render() {
    var strHtml = '';
    gHex.forEach(function (hexagon) {
        var id = hexagon.id;
        var url = hexagon.url;
        var keywords = hexagon.keywords;
        strHtml += '<div class="hexagon img-resposive" onclick="doCanvas(' + id + ')" style="background-image: url(' + url + ')" id="' + id + '">';

        strHtml += '' + '<div class="face1"></div><div class="face2"></div></div>';

    });

    var element = document.querySelector('.main-gallery')
    element.innerHTML = strHtml;
}







/// ===== main ===== ////
function doCanvas(imgId) {

    var img = new Image();
    img.src = '../assets/imgs/img' + imgId + '.jpg';

    img.onload = function () {
        ctx.drawImage(img, 0, 0, 568, 360);
        ctx.font = "60px 'Segoe UI'";
        ctx.fillText("", 50, 300);
    };
}





function getGallerySection() {
    var elMainGallery = $('.main-gallery');
    // console.log(x);
    elMainGallery.addClass('displaynone');
}






// window.addEventListener("keydown", handlekey, false);

// function handlekey(e) {

//     var x = $('#custom-text');
//     ctx = canvas.getContext('2d');
//     ctx.fillText = ("x.val", 50, 300)
// }





