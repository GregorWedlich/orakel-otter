type Response = [string, number][];

/**
 * Fetches the current prices for various currencies from the Mempool.space API.
 *
 * @param currency - The currency (USD, EUR, GBP, CAD, CHF, AUD, JPY) to filter the prices for. If not provided, returns all available prices.
 * @returns An array of tuples, where the first element is the currency code and the second element is the current price.
 * @throws {Error} If the specified currency is not found in the API response.
 */
export async function orakelOtter(currency: string = "ALL"): Promise<Response> {
  try {
    const response = await fetch("https://mempool.space/api/v1/prices/");
    const pricesObj = await response.json();

    const prices = Object.entries(pricesObj);

    if (currency === "ALL") {
      return prices as Response;
    }

    const filteredPrice = prices.filter(
      (price) => price[0] === currency?.toUpperCase()
    );

    if (filteredPrice.length > 0) {
      return [...prices[0], filteredPrice[0]] as Response;
    } else {
      throw new Error(`Currency ${currency} not found.`);
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}
