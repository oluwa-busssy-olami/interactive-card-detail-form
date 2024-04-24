const card_number = document.querySelector("#card-number");
const card_mm = document.querySelector("#card-mm");
const card_yy = document.querySelector("#card-yy");
const card_cvc = document.querySelector("#card-cvc");
const card_name = document.querySelector("#card-name");

//Select The elemnt with the Error Message
const errorMessage = document.querySelector(".errorMessage-name");
const errorMessage_number = document.querySelector(".errorMessage-number");
const errorMessage_year = document.querySelector(".errorMessage-year");
const errorMessage_month = document.querySelector(".errorMessage-month");
const errorMessage_cvc = document.querySelector(".errorMessage-cvc");

//function for the cardname that with be pass in the event listener
function cardName() {
  if (card_name.value.trim() === "") {
    errorMessage.textContent = "can't be blank";
    card_name.style.border = "1px solid red";
  } else if (/^\d+$/.test(card_name.value)) {
    errorMessage.textContent = "Enter a valid username";
    card_name.style.border = "1px solid red";
  } else {
    errorMessage.textContent = "";
    card_name.style.border = "1px solid rgb(45, 14, 45)"; // Reset border to default
  }
}

//function for the cardnumber that with be pass in the event listener
function cardNumber() {
  const inputValue = card_number.value.trim();

  if (inputValue === "") {
    errorMessage_number.textContent = "Card number is required";
    card_number.style.border = "1px solid red";
  } else if (!/^\d+$/.test(inputValue)) {
    errorMessage_number.textContent = "valid card number";
    card_number.style.border = "1px solid red";
  } else if (inputValue.length !== 16) {
    errorMessage_number.textContent = "must be 16 digits";
    card_number.style.border = "1px solid red";
  } else {
    errorMessage_number.textContent = "";
    card_number.style.border = "1px solid rgb(45, 14, 45)"; // Apply default border
  }
}

//function for the cardmonth that with be pass in the event listener
function cardMonth() {
  const monthValue = card_mm.value.trim();
  const monthInput = card_mm.value;
  if (monthValue === "") {
    errorMessage_month.textContent = "can't be blank";
    card_mm.style.border = "1px solid red";
  } else if (monthInput >= 1 && monthInput <= 12) {
    errorMessage_month.textContent = "";
    card_mm.style.border = "1px solid rgb(45, 14, 45";
  } else {
    errorMessage_month.textContent = "enter a valid month";
    card_mm.style = "1px solid red";
  }
}

function cardYear() {
  const yearValue = card_yy.value.trim();

  if (yearValue === "") {
    errorMessage_year.textContent = "Year can't be blank";
    card_yy.style.border = "1px solid red";
  } else if (/^\d{2}$/.test(yearValue)) {
    errorMessage_year.textContent = "";
    card_yy.style.border = "1px solid rgb(45, 14, 45)"; // Apply custom border for valid input
  } else {
    errorMessage_year.textContent = "Please enter a valid 2-digit year";
    card_yy.style.border = "1px solid red";
  }
}

function cardCvc() {
  const cvcValue = card_cvc.value.trim();

  if (cvcValue === "") {
    errorMessage_cvc.textContent = "can't be blank";
    card_cvc.style.border = "1px solid red";
  } else if (
    /^\d{3}$/.test(cvcValue) // Check if CVC consists of exactly 3 digits
  ) {
    errorMessage_cvc.textContent = "";
    card_cvc.style.border = "1px solid rgb(45, 14, 45)";
  } else {
    errorMessage_cvc.textContent = "Please enter a valid CVC (3-digit number)"; // Set error message
    card_cvc.style.border = "1px solid red"; // Invalid input style
  }
}

// Attach event listener to trigger validation
card_name.addEventListener("input", cardName);
card_number.addEventListener("input", cardNumber);
card_number.addEventListener("input", cardYear);
card_mm.addEventListener("input", cardMonth);
card_cvc.addEventListener("input", cardCvc);
//button click addventlistener
const submitButton = document.querySelector(".btn");
const back_to_form = document.querySelector(".continue");
// thank-you-hidden
const thank_you = document.querySelector(".thank-you");
const main_page = document.querySelector(".main-page");

submitButton.addEventListener("click", (e) => {
  main_page.style.display = "none";
  thank_you.style.display = "block";
});
back_to_form.addEventListener("click", (e) => {
  main_page.style.display = "block";
  thank_you.style.display = "none";
});
