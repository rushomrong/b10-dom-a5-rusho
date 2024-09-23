document
  .getElementById("history-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Redirect to history.html
    window.location.href = "/b10-dom-a5-rusho/history.html";

    // Optional: Change color before redirecting (although the redirect will likely happen too fast to see the effect)
    this.style.color = "#B4F461";
  });
