const amountElement = document.querySelector(".js-amount");
const formElement = document.querySelector(".js-form");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const rateEUR = 4.953;
const rateGBP = 5.953;
const rateUSD = 3.657;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const amount = +amountElement.value;
  const currency = currencyElement.value;

  let result;

  switch (currency) {
    case "Euro":
      result = amount / rateEUR;
      break;
    case "British Pound":
      result = amount / rateGBP;
      break;
    case "American Dolar":
      result = amount / rateUSD;
      break;
  }

  resultElement.innerHTML = `${amount.toFixed(
    2
  )} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});
