// var arr_image = ["img1", "img2", "img3", "img4"];
// var num = 0;

// function right() {
//   num++;
//   var slider_content = document.getElementsByClassName("box");

//   if (num >= arr_image.length) {
//     num = 0;
//     slider_content.innerHTML = `<img src="${arr_image[num]}.gif">`;
//   } else {
//     slider_content.innerHTML = `<img src="${arr_image[num]}.gif">`;
//   }
// }

// function left() {
//   num--;
//   var slider_content = document.getElementsByClassName("box");

//   if (num < 0) {
//     num = arr_image.length - 1;
//     slider_content.innerHTML = "<img src=" + "" + arr_image[num] + ".gif>";
//   } else {
//     slider_content.innerHTML = "<img src=" + "" + arr_image[num] + ".gif>";
//   }
// }

// Start point
var i = 0;
var images = [];
var time = 3000;

// Image list

images[0] = "img1.gif";
images[1] = "img2.gif";
images[2] = "img3.gif";
images[3] = "img4.gif";

// change image

// function changeImg() {
//   document.slide.src = images[i];

//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }

//   setTimeout("changeImg()", time);
// }

document.slide.src = images[i];
function right() {
  i++;
  var content = document.getElementsByClassName("box");

  if (i >= images.length) {
    i = 0;
    content.slide.src = images[i];
  } else {
    content.slide.src = images[i];
  }
}

function left() {
  i--;
  var content = document.getElementsByClassName("box");

  if (i < 0) {
    i = images.length - 1;
    content.slide.src = images[i];
  } else {
    content.slide.src = images[i];
  }
}
// (window.onload = right()), time;
