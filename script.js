// Wait for the page to load before running any scripts

window.addEventListener("load", function() {

  // Add an event listener to the "Contact Me" button

  var contactBtn = document.querySelector("button");

  contactBtn.addEventListener("click", function() {

    alert("Please email me at mr.ahmed0271@gmail.com");

  });

  // Add an event listener to the avatar image

  var avatar = document.querySelector("#about img");

  avatar.addEventListener("click", function() {

    alert("This is me!");

  });

});

// smooth scrolling to top on click of back to top button
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) { // show back to top button when user scrolls down 300px
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else {
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none
