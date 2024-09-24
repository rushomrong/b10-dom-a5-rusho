document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  const currentPage = window.location.pathname;

  // Get the buttons
  const donationButton = document.getElementById("donation-btn-top");
  const historyButton = document.getElementById("history-btn");

  // checking btn before applying styles
  if (donationButton && historyButton) {
    // Check which page is active and change button colors
    if (currentPage.includes("index.html")) {
      // Set the colors for button
      donationButton.style.backgroundColor = "#B4F461";
      historyButton.style.backgroundColor = "";
    } else if (currentPage.includes("history.html")) {
      historyButton.style.backgroundColor = "#B4F461";
      donationButton.style.backgroundColor = "";
    }
  }

  const initialBalance = 5500;
  //amount retriving for top button balance and card balance
  // Set initial balances in localStorage if not already set
  if (!localStorage.getItem("totalBalance")) {
    localStorage.setItem("totalBalance", initialBalance);
    localStorage.setItem("nkhali-balance", 0);
    localStorage.setItem("feni-balance", 0);
  }

  // Retrieve and apply balances from sessionStorage if available
  let totalBalance =
    sessionStorage.getItem("totalBalance") ||
    localStorage.getItem("totalBalance");
  let nkhaliBalance =
    sessionStorage.getItem("nkhali-balance") ||
    localStorage.getItem("nkhali-balance");
  let feniBalance =
    sessionStorage.getItem("feni-balance") ||
    localStorage.getItem("feni-balance");

  // Update DOM
  document.getElementById("current-balance").innerText =
    parseFloat(totalBalance).toFixed(0);
  document.getElementById("nkhali-balance").innerText =
    parseFloat(nkhaliBalance).toFixed(0);
  document.getElementById("feni-balance").innerText =
    parseFloat(feniBalance).toFixed(0);

  window.addEventListener("beforeunload", function () {
    // Clear sessionStorage on page reload to reset balances
    sessionStorage.clear();
  });
});
