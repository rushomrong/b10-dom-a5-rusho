document
  .getElementById("history-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Redirect to history.html
    window.location.href = "/history.html";

    // Optional: Change color before redirecting (although the redirect will likely happen too fast to see the effect)
    this.style.color = "#B4F461";
  });
