// Select input elements and error message containers
const cardNameInput = document.querySelector("#card-name");
const cardNumberInput = document.querySelector("#card-number");
const cardMonthInput = document.querySelector("#card-mm");
const cardYearInput = document.querySelector("#card-yy");
const cardCvcInput = document.querySelector("#card-cvc");

const errorMessages = {
  cardName: document.querySelector(".errorMessage-name"),
  cardNumber: document.querySelector(".errorMessage-number"),
  cardMonth: document.querySelector(".errorMessage-month"),
  cardYear: document.querySelector(".errorMessage-year"),
  cardCvc: document.querySelector(".errorMessage-cvc"),
};
//function for the cardname that with be pass in the event listener

// Function for the cardName input
// Validation function template
// Function for the cardName input
function cardName() {
  let namePattern = /^[A-Za-z]+(\s[A-Za-z]+)*$/;

  if (cardNameInput.value.trim() === "") {
    errorMessages.cardName.textContent = "can't be blank";
    cardNameInput.style.border = "1px solid red";
  } else if (cardNameInput.Value.match(namePattern)) {
    errorMessages.cardName.textContent = "Enter a valid username";
  } else {
    errorMessages.cardName.textContent = "";
    cardNameInput.style.border = "1px solid rgb(45, 14, 45)"; // Reset border to default
  }
}

//function for the cardnumber that with be pass in the event listener
function cardNumber() {
  const inputValue = cardNumberInput.value.trim();

  if (inputValue === "") {
    errorMessages.cardNumber.textContent = "Can't be blank";
    cardNumberInput.style.border = "1px solid red";
  } else if (!/^\d+$/.test(inputValue)) {
    errorMessages.cardNumber.textContent = "valid card number";
    cardNumberInput.style.border = "";
  } else if (inputValue.length !== 16) {
    errorMessages.cardNumber.textContent = "must be 16 digits";
    cardNumberInput.style.border = "1px solid red";
  } else {
    errorMessages.cardNumber.textContent = "";
    cardNumberInput.style.border = ""; // Apply default border
  }
}

//function for the cardmonth that with be pass in the event listener
function cardMonth() {
  const monthValue = cardMonthInput.value.trim();
  const monthInput = cardMonthInput.value;
  if (monthValue === "") {
    errorMessages.cardMonth.textContent = "blank";
    cardMonthInput.style.border = "1px solid red";
  } else if (monthInput >= 1 && monthInput <= 12) {
    errorMessages.cardMonth.textContent = "";
    cardMonthInput.style.border = "1px solid rgb(45, 14, 45";
  } else {
    errorMessages.cardMonth.textContent = "(1-12)";
    cardMonthInput.style = "1px solid red";
  }
}

function cardYear() {
  const yearValue = card_yy.value.trim();

  if (yearValue === "") {
    errorMessages.cardYear.textContent = "blank";
    cardYearInput.style.border = "1px solid red";
  } else if (/^\d{2}$/.test(yearValue)) {
    errorMessages.cardYear.textContent = "";
    cardYearInput.style.border = "1px solid rgb(45, 14, 45)"; // Apply custom border for valid input
  } else {
    errorMessages.cardYear.textContent = "10-99";
    cardYearInput.style.border = "1px solid red";
  }
}

function cardCvc() {
  const cvcValue = cardCvcInput.value.trim();

  if (cvcValue === "") {
    errorMessages.cardCvc.textContent = "can't be blank";
    cardCvcInput.style.border = "1px solid red";
  } else if (
    /^\d{3}$/.test(cvcValue) // Check if CVC consists of exactly 3 digits
  ) {
    errorMessages.cardCvc.textContent = "";
    cardCvcInput.style.border = "1px solid rgb(45, 14, 45)";
  } else {
    errorMessages.cardCvc.textContent =
      "Please enter a valid CVC (3-digit number)"; // Set error message
    cardCvcInput.style.border = "1px solid red"; // Invalid input style
  }
}

// Attach event listener to trigger validation
cardMonthInput.addEventListener("input", cardMonth);
cardYearInput.addEventListener("input", cardYear);
cardNameInput.addEventListener("input", cardName);
cardNumberInput.addEventListener("input", cardNumber);
cardCvcInput.addEventListener("input", cardCvc);
//button click addventlistener
const submitButton = document.querySelector(".btn");
const back_to_form = document.querySelector(".continue");
// thank-you-hidden
const thank_you = document.querySelector(".thank-you");
const main_page = document.querySelector(".main-page");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    cardNameInput.value.trim() === "" ||
    cardMonthInput.value.trim() === "" ||
    cardYearInput.value.trim() === "" ||
    cardCvcInput.value.trim() === "" ||
    cardNumberInput.value.trim() === ""
  ) {
    errorMessages.cardName.textContent = "can't be blank";
    cardNameInput.style.border = "1px solid red";
    errorMessages.cardNumber.textContent = "can't be blank";
    cardNumberInput.style.border = "1px solid red";
    errorMessages.cardYear.textContent = "can't be blank";
    cardYearInput.style.border = "1px solid red";
    errorMessages.cardMonth.textContent = "can't be blank";
    cardMonthInput.style.border = "1px solid red";
    errorMessages.cardCvc.textContent = "can't be blank";
    cardCvcInput.style.border = "1px solid red";
  } else {
    main_page.style.display = "none";
    thank_you.style.display = "block";
  }
});

cardNameInput.value = "";
cardYearInput.value = "";
cardMonthInput.value = "";
cardCvcInput.value = "";
cardNumberInput.value = "";
