/* eslint-env browser */


var myImage = document.querySelector('#logo');
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === "images/shiraz-logo.png") {
        myImage.setAttribute("src", "images/moon.jpg");
    } else {
        myImage.setAttribute("src", "images/shiraz-logo.png");
    }
};
