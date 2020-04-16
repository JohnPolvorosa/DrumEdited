let numDrumButtons = document.querySelectorAll(".drum").length;
// let audio = new Audio('sounds/tom-1.mp3');

// let tom1 = document.querySelector(".w");
// tom1.innerHTML = '<img src="images/tom1.png" />';

// let tom2 = document.querySelector(".a");
// tom2.innerHTML = '<img src="images/tom2.png" />';

// let tom3 = document.querySelector(".s");
// tom3.innerHTML = '<img src="images/tom3.png" />';

// let tom4 = document.querySelector(".d");
// tom4.innerHTML = '<img src="images/tom4.png" />';

// let snare  = document.querySelector(".j");
// snare.innerHTML = '<img src="images/snare.png" />';

// let crash = document.querySelector(".k");
// crash.innerHTML = '<img src="images/crash.png" />';

// let kick = document.querySelector(".l");
// kick.innerHTML = '<img src="images/kick.png" />';

for (i = 0; i < numDrumButtons; i++) {
  let drumButtons = document.querySelectorAll(".drum")[i];
  drumButtons.addEventListener("click", function () {
    // this.style.color = "white";
    // playAudio();
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
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
  });
}

function playAudio() {
  let audio = new Audio("sounds/tom-1.mp3");
  audio.play();
}

function alerty() {
  alert("I got clicked");
}
