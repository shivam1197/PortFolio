window.addEventListener("load", function () {
  var circle = document.querySelector(".circle");
  var splashScreen = document.querySelector(".splash-screen");
  var name = document.querySelector(".splash-name");

  name.addEventListener("click", function () {
    circle.style.animation = "shrink-circle-reverse 1s forwards";
    splashScreen.style.animation = "shrink-splash 1s forwards";
    setTimeout(function () {
      redirectToHome(); // Function to redirect to home.html
    }, 1000); // Adjust the delay as needed
      // Function to redirect to home.html

  function redirectToHome() {
    window.location.href = "home.html"; // Replace with the URL of the page you want to navigate to
  }
  });

  circle.addEventListener("animationend", function () {
    circle.style.animation = "none"; // Reset the animation once it completes
  });

  this.setTimeout(function () {
    // splashScreen.style.animation = "none"; // Reset the animation once it completes
    // typingText.style.opacity = 1; // Make the typing text visible
    console.log("none");
    startTypingAnimation();
  });

  function startTypingAnimation() {
    var typingText = document.querySelector(".typing-text");
    var texts = [
      "Software Engineer",
      "Developer",
      "Fast Learner",
      "Enthusiast",
      "Click the Name :)"
    ]; // Array of texts
    var typingSpeed = 60; // Adjust the typing speed (in milliseconds) as needed

    new Typed(typingText, {
      strings: texts,
      typeSpeed: typingSpeed,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });
  }
});



