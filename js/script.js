
{
const amountElement = document.querySelector(".js-amount");
const formElement = document.querySelector(".js-form");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const rateEUR = 4.953;
const rateGBP = 5.953;
const rateUSD = 3.657;

init();

function init() {
  formElement.addEventListener("submit", handleFormSubmit);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const amount = +amountElement.value;
  const currency = currencyElement.value;
  const result = calculateResult(amount, currency);
  const formattedResult = formatResult(amount, result, currency);

  setResultElementHTML(formattedResult);
}

function calculateResult(amount, currency) {
  

  switch (currency) {
    case "Euro":
      result = amount / rateEUR;
      
    case "British Pound":
      result = amount / rateGBP;
      
    case "American Dolar":
      result = amount / rateUSD;
      
  }

  return result;
}

function formatResult(amount, result, currency) {
  return `${amount.toFixed(2)} PLN = <strong>${result.toFixed(
    2
  )} ${currency}</strong>`;
}

function setResultElementHTML(html) {
  resultElement.innerHTML = html; 
  
}
}
