
let numDrumButtons = document.querySelectorAll(".drum").length;

// DETECT BUTTON PRESSING, then play audio
for (i = 0; i < numDrumButtons; i++) {
  let drumButtons = document.querySelectorAll(".drum")[i];
  drumButtons.addEventListener("click", function () {

    let buttonInnerHTML = this.innerHTML;
    
    playAudio(buttonInnerHTML);
    btnAnimate(buttonInnerHTML);

    setTimeout(function() {
      deAnimate(buttonInnerHTML)
    }, 100 );


  });
}

// DETECET KEYBOARD INPUT, then play audio
document.addEventListener("keypress", function(event) {

  playAudio(event.key);
  btnAnimate(event.key);
  // let pauseAnimate = setTimeout(deAnimate(event.key), 9000);

  setTimeout(function() {
    deAnimate(event.key)
  }, 100 );

});


function playAudio(key) {

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML)
      break;
  }

}

// let kick = document.querySelector(".l");
// kick.innerHTML = '<img src="images/kick.png" />';

function btnAnimate(currentKey) {
  let activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  

}

function deAnimate(currentKey) {
  let activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.remove("pressed");
}


function alerty() {
  alert("I got clicked");
}
