
let numDrumButtons = document.querySelectorAll(".drum").length;
// let audio = new Audio('sounds/tom-1.mp3');

let tom1 = document.querySelector(".w");
tom1.innerHTML = '<img src="images/tom1.png" />';

let tom2 = document.querySelector(".a");
tom1.innerHTML = '<img src="images/tom2.png" />';

let tom3 = document.querySelector(".s");
tom1.innerHTML = '<img src="images/tom3.png" />';

let tom4 = document.querySelector(".d");
tom1.innerHTML = '<img src="images/tom4.png" />';


for (i = 0; i < numDrumButtons; i++) {
    let drumButtons = document.querySelectorAll(".drum")[i];
    drumButtons.addEventListener("click", playAudio);
}

function playAudio() {
  let audio = new Audio('sounds/tom-1.mp3');
  audio.play();
}

function alerty() {
  alert("I got clicked");
}
