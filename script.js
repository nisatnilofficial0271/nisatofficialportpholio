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

