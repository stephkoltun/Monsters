//let bgColors = ["#1CE6FF", "#FF34FF", "#FF4A46", "#008941", "#006FA6", "#A30059","#0000A6", "#63FFAC", "#004D43", "#8FB0FF","#5A0007", "#809693", "#1B4400", "#4FC601"];

let bgColors = ["#fff", "#000"];

let images = ["001.jpg", "002.png", "003.png", "004.jpg", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png", "001.jpg", "002.png", "003.png", "004.jpg", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png", "001.jpg", "002.png", "003.png", "004.jpg", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png", "001.jpg", "002.png", "003.png", "004.jpg", "005.png", "006.png", "007.png", "008.png", "009.png", "010.png", "011.png", "012.png", "013.png", "014.png"];
let words = ["WE", "ARE", "MONSTERS"];
var wordCounter = 0;
var imageCounter = 0;

var imgTimer = 600;

function addImage(first) {
  if (images.length != 0) {
    var random = Math.floor(Math.random()*images.length);
    var src = "images/" + images[random];

    var leftPos;
    var rightPos;

    if (first) {
      leftPos = $(window).width()/2-150;
      topPos = $(window).height()/2-150;
    } else {
      leftPos = Math.floor(Math.random()*($(window).width()-200));
      topPos = Math.floor(Math.random()*($(window).height()-200));
    }

    var image = $('<img>');
    image.attr('src', src);
    image.css('position', 'absolute');
    image.css('top', topPos + 'px');
    image.css('left', leftPos + 'px');
    image.css('width', '300px');
    image.css('z-index', imageCounter);
    image.appendTo('body');

    images.splice(random, 1); // remove the image from the array
    imageCounter++;
  } else {
    clearInterval(wordInterval);
  }
}



function changeWord() {

  var color = wordCounter % 2;

  if (color == 1) {
    $('#title').css("color", "#000");
    $('body').css("background-color", "#fff");
  } else {
    $('#title').css("color", "#fff");
    $('body').css("background-color", "#000");
  }

  $('#title').text(words[wordCounter]);

  if (wordCounter < words.length-1) {
    wordCounter++;
  } else {
    clearInterval(wordInterval);
    imageInterval();
    //imageInterval = setInterval(addImage, 1000);
  }
}

function imageInterval() {
  setTimeout(function() {
    if (imageCounter == 0) {
      addImage(true);
      $('#title').text();
      $('body').css("background-color", "#fff");
    } else {
      addImage(false);
    }
    imgTimer = imgTimer-20;
    imageInterval();
  }, imgTimer)
}

let wordInterval = setInterval(changeWord, 1000);
