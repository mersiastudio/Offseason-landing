// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // Words to be displayed one at a time
  const words = ["Perfected.", "Simplified.", "Elevated."];

  // Initialize Typed.js
  const typed = new Typed(".type-text", {
    strings: words,
    typeSpeed: 80, // Speed of typing in milliseconds
    backSpeed: 50, // Speed of deleting in milliseconds
    loop: true, // Whether to loop through the words
    loopCount: Infinity, // Number of loops (set to Infinity for infinite loop)
    showCursor: false, // Whether to display the cursor
    shuffle: false, // Whether to shuffle the words before displaying
  });
});
