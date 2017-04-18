

var flowerImage = document.querySelector('img');

flowerImage.onclick = function() {
    var mySrc = flowerImage.getAttribute('src');
    if(mySrc === 'images/flowerfromlindagarden.jpg') {
      flowerImage.setAttribute ('src','images/anotherflower.jpg');
    } else {
      flowerImage.setAttribute ('src','images/flowerfromlindagarden.jpg');
    }
}

// Personalized welcome message code

var ChangeUserButton = document.querySelector('button');
var PageHeading = document.querySelector('h1');

function setUserName() {
  var UserName = prompt('Please enter your name.');
  localStorage.setItem('name', UserName);
  PageHeading.innerHTML = 'The Mozilla Foundation is a fine organization, ' + UserName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  PageHeading.innerHTML = 'The Mozilla Foundation is a fine organization, ' + storedName;
}

ChangeUserButton.onclick = function() {
  setUserName();
}