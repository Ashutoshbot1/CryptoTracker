import axios from "axios";
import { toast } from "react-toastify";

export const getCoinData = (id,setApiError,setIsLoading) => {
  // console.log(id);
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;
  const myData = axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log("getCoinData Function", err);
      toast.error(err.message);
      setIsLoading(false);
      setApiError(true);

    });

  return myData;
};
