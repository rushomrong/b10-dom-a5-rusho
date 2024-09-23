//share functions for donation

// header balance id - current-balance
// noakhali balance id - nkhali-balance
// noakhali input amount id - nkhali-input-amount
// noakhali btn id - nkhali-donate-btn

//getting all the input data from the input fields
function getInputFieldValueById(id) {
  //getting the amount
  const inputAmount = document.getElementById(id).value;
  const amountNumber = parseFloat(inputAmount);
  return amountNumber;
}

//getting all the text values using this functions
function getTextFieldValueById(id) {
  const inputText = document.getElementById(id).innerText;
  const textValue = parseFloat(inputText);
  return textValue;
}
