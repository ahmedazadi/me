const background = document.querySelector(".start");
const text = document.querySelector(".start h1");

// move the background up
setTimeout(() => {
  background.style.top = "-100%";
}, 1000);

setTimeout(() => {
  background.style.display = "none";
}, 2000);

// move text down and rotate
setTimeout(() => {
  text.style.transform = "translateY(200%) rotate(90deg)";
}, 1000);
