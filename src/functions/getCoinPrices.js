import axios from "axios";
import { toast } from "react-toastify";

export const getCoinPrices = ( id, days ,graphType,setApiError,setIsLoading) => {
  // console.log("getCoinPrices Prices ---->",id,days,graphType);
  const mrk_url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

  const prices = axios
    .get(mrk_url)
    .then((response) => {
      // console.log("response.data",response.data[graphType]);
      return response.data[graphType]
    })
    .catch((err) => {
      console.log("getCoinsPrices Error", err);
      toast.error(err.message);
      setIsLoading(false);
      setApiError(true);
    });

    return prices
};
