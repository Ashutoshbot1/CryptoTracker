import axios from "axios";

export const getCoinPrices = ( id, days ,graphType) => {
  console.log("getCoinPrices Prices ---->",id,days,graphType);
  const mrk_url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

  const prices = axios
    .get(mrk_url)
    .then((response) => {
      console.log("response.data",response.data[graphType]);
      return response.data[graphType]
    })
    .catch((err) => {
      console.log("getCoinsPrices Error", err);
    });

    return prices
};
