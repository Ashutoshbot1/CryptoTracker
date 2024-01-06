import axios from "axios";

export const getCoinData = (id) => {
  console.log(id);
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const myData = axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("getCoinData Function", err);
    });

  return myData;
};
