import axios from "axios";
import { toast } from "react-toastify";

export const get100Coins= async(setApiError,setIsLoading)=>{
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

    const myCoins=axios
      .get(url)
      .then((response) => {
        console.log("get100Coins", response);
        return response.data;
      })
      .catch((err) => {
        console.log("get100Coins error", err);
        toast.error(err.message);
        setApiError(true);
        setIsLoading(false);
      });

      return myCoins;
}