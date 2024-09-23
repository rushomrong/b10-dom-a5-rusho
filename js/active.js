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
});
