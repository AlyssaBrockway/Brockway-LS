// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction();
};

// Gets the navbar
var navbar = document.getElementById("navbar");

// Gets the offset position of the navbar
var sticky = navbar.offsetTop;

// Adds the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
