// set the general btn for
function handleDonation(
  donateBtnId,
  inputAmountId,
  titleId,
  balanceId,
  totalBalanceId
) {
  document.getElementById(donateBtnId).addEventListener("click", function () {
    // event.preventDefault();

    // Fetching input amount using shared function
    const donateAmount = getInputFieldValueById(inputAmountId);

    // Input amount validation
    if (isNaN(donateAmount) || donateAmount.toString() === "NAN") {
      window.alert("Error! Please enter a valid amount.");
    } else if (donateAmount <= 0) {
      window.alert("Error! Please enter an amount greater than zero.");
    } else {
      // Fetching the available balances using shared function
      const currentBalance = getTextFieldValueById(totalBalanceId); // Fetch the total balance
      const donationBalance = getTextFieldValueById(balanceId); // Fetch specific donation balance (Feni or Noakhali)

      // Check if there's enough balance
      if (donateAmount > currentBalance) {
        window.alert("Error! Insufficient balance.");
        return;
      }

      // Balance calculation
      const newCurrentBalance = currentBalance - donateAmount; //
      const newDonationBalance = donationBalance + donateAmount; //

      // Updating the new balances
      document.getElementById(totalBalanceId).innerText =
        newCurrentBalance.toFixed(0); // Update total balance
      document.getElementById(balanceId).innerText =
        newDonationBalance.toFixed(0); // Update specific balance

      // Get the donation title
      const donationTitle = document.getElementById(titleId).innerText;

      // Generate the current date
      const donationDate = new Date().toLocaleString();

      // Save donation details in sessionStorage
      const donationDetails = `<strong> ${donateAmount} Taka is ${donationTitle} </strong> <br> Date: ${donationDate}.`;

      // Append new donation to the history
      let donationHistory = sessionStorage.getItem("donationHistory") || "";
      donationHistory += `<div>
                            <p class="border border-borderColor rounded-md w-full p-8 m-2 shadow-2xl">${donationDetails}</p><br>
                          </div>`;
      sessionStorage.setItem("donationHistory", donationHistory);

      // Show success modal
      document.getElementById("my_modal_5").showModal();
    }
  });
}

// Call the function for both Noakhali and Feni donation buttons
handleDonation(
  "nkhali-donate-btn",
  "nkhali-input-amount",
  "noakhali-title",
  "nkhali-balance",
  "current-balance"
);
handleDonation(
  "feni-donate-btn",
  "feni-amount-input",
  "feni-title",
  "feni-balance",
  "current-balance"
);

handleDonation(
  "quota-donate-btn",
  "quota-input-amount",
  "quota-title",
  "quota-balance",
  "current-balance"
);

// Modal logic remains the same
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector("#my_modal_5");
  const closeModalBtn = document.querySelector("#modalCloseBtn");

  // Function to close the modal
  closeModalBtn.addEventListener("click", function () {
    modal.close();
  });
});
