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

// Function for the cardName input
function validName() {
  let letters = /^[A-Za-z]+$/;
  if (cardNameInput.value.trim() === "") {
    errorMessages.cardName.textContent = "can't be blank";
    cardNameInput.style.border = "1px solid red";
  } else if (cardNameInput.value.match(letters)) {
    errorMessages.cardName.textContent = "";
  } else {
    errorMessages.cardName.textContent = "enter a valid username name";
    cardNameInput.style.border = "1px solid red";
  }
}

//passing a function for the card Number input

function validNumber() {
  if (cardNumberInput.value.trim() === "") {
    errorMessages.cardNumber.textContent = "can't be blank";
    cardNumberInput.style.border = "1px solid red";
  }
}

function validMonth() {
  if (cardMonthInput.value.trim() === "") {
    errorMessages.cardMonth.textContent = "can't be blank";
    cardYearInput.style.border = "1px solid red";
  } else if (cardMonthInput.value >= 1 && cardMonthInput.value <= 12) {
    errorMessages.cardMonth.textContent = "";
  } else {
    errorMessages.cardMonth.textContent = "1 - 12";
    cardYearInput.style.border = "1px solid red";
  }
}
//function for valid year

function validYear() {
  if (cardYearInput.value.trim() === "") {
    errorMessages.cardYear.textContent = "can't be blank";
    cardYearInput.style.border = "1px solid red";
  } else if (/^\d{2}$/.test(cardYearInput.value)) {
    errorMessages.cardYear.textContent = "";
  } else {
    errorMessages.cardYear.textContent = "last 2 digit";
    cardYearInput.style.border = "1px solid red";
  }
}
// for cvc

function validCvc() {
  if (cardCvcInput.value.trim() === "") {
    errorMessages.cardCvc.textContent = "can't be blank";
    cardCvcInput.style.border = "1px solid red";
  } else if (/^\d{3}$/.test(cardCvcInput.value)) {
    errorMessages.cardCvc.textContent = "";
  } else {
    errorMessages.cardCvc.textContent = "3 digit";
    cardCvcInput.style.border = "1px solid red";
  }
}
cardNameInput.addEventListener("input", validName);
cardNumberInput.addEventListener("input", validNumber);
cardMonthInput.addEventListener("input", validMonth);
cardYearInput.addEventListener("input", validYear);
cardCvcInput.addEventListener("input", validCvc);
