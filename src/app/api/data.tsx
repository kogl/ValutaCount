const CASH_API = "https://www.alphavantage.co/query?";

export async function getCashToDollar(currencyName: string) {
  const response = await fetch(
    CASH_API +
      "function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency&to_currency=" +
      currencyName
  );
  const data = await response.json();
  return data.results;
}

eexport async function getCashToDollarDate(currencyName: string) {
	const response = await fetch(
	  CASH_API +
		"function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency&to_currency=" +
		currencyName
	);
	const data = await response.json();
	return data.results;
  }
