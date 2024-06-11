// Show the spinner
function showSpinner() {
  document.getElementById("spinner").style.display = "block";
}

// Hide the spinner
function hideSpinner() {
  document.getElementById("spinner").style.display = "none";
}

// Simulate loading process (for demonstration)
function simulateLoading() {
  showSpinner();
  setTimeout(() => {
    hideSpinner();
  }, 10000); // Replace 3000 with actual loading time in milliseconds
}

// Call simulateLoading function to start the loading process
simulateLoading();
