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
