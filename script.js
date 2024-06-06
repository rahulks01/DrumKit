//Handle Mouse-Click
let numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let selectedButton = this.innerHTML;
    makeSound(selectedButton);
    animateOnClick(selectedButton);
  });
}

//Handle KeyBoard-Click
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  animateOnClick(event.key);
});

//Drum Sound
function makeSound(key) {
  switch (key) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;

    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;

    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;

    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;

    case "j":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;

    case "k":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;

    case "l":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;

    default:
      console.log("Key Pressed: " + key);
  }
}

//OnClick Animation
function animateOnClick(key) {
  let keyPressed = document.querySelector("." + key);

  keyPressed.classList.add("pressed");
  setTimeout(function () {
    keyPressed.classList.remove("pressed");
  }, 100);
}
