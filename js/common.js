//share functions for donation
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
