import axios from "axios";

export const getCoinData=(id)=>{
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    const myData=axios
      .get(url)
      .then((response) => {
        return response.data;
        // console.log(coinData)
      })
      .catch((err) => {
        console.log("getCoinData Function", err);
      });

      return myData;
}