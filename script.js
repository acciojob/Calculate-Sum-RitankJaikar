//your JS code here. If required.
// Select elements
const n1Input = document.getElementById('n1');
const n2Input = document.getElementById('n2');
const sumButton = document.getElementById('sum_btn');
const sumDisplay = document.getElementById('sum');

// Event listener for the button
sumButton.addEventListener('click', () => {
  const num1 = parseFloat(n1Input.value);
  const num2 = parseFloat(n2Input.value);

  // Validate inputs
  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    sumDisplay.textContent = `Sum: ${sum}`;
  } else {
    sumDisplay.textContent = '';
  }
});
