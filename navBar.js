// elements
const navigation = document.querySelector("#navigation");
const navOpen = document.querySelector("#navOpen");
const navClose = document.querySelector("#navClose");
const navLinks = document.querySelectorAll(".nav-link");
const navBack = document.querySelector(".nav-background");

let navShown = false;
let screenWidth = screen.width;

// show one element
const show = (element) => {
  element.style.display = "block";
};

// hide one element
const hide = (element) => {
  element.style.display = "none";
};

// for showing one element and hiding another element
const showHide = (showElement, hideElement) => {
  show(showElement);
  hide(hideElement);
};

// for buttons to show and hide nav bar
const navToggle = () => {
  // check if navigation is shown or not
  if (!navShown) {
    show(navigation);
    showHide(navClose, navOpen);
    show(navBack);
    navShown = true;
  } else {
    hide(navigation);
    showHide(navOpen, navClose);
    hide(navBack);
    navShown = false;
  }
};

// add evenets to the buttons
navOpen.addEventListener("click", navToggle);
navClose.addEventListener("click", navToggle);

// add event listener only on smaller screens
if (screenWidth < 800) {
  // add clicking event to all nav link elements
  navLinks.forEach((Element) => {
    Element.addEventListener("click", navToggle);
  });
}

navBack.addEventListener("click", navToggle);
