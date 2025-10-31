// css-js-project/script.js

// Simple function demo (parameters + return)
function multiply(a, b) {
  return a * b;
}

// Example of scope and DOM manipulation
function showCalculation() {
  const localResult = multiply(5, 3);
  const resultElement = document.getElementById("calcResult");
  resultElement.textContent = `5 × 3 = ${localResult}`;
}

// Toggle animation class on button click
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  animateBox.classList.toggle("animate");
});

