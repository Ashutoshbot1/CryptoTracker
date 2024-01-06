import axios from "axios";

export const getCoinPrices = ({ id, days }) => {
  const mrk_url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

  const prices = axios
    .get(mrk_url)
    .then((response) => {
      return response.data.prices
    })
    .catch((err) => {
      console.log("getCoinsPrices Error", err);
    });

    return prices
};
