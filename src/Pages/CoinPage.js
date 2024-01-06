import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Common/Header/Header";
import axios from "axios";
import Loader from "../Components/Common/Loader/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../Components/Dashboard/List/List";
import CoinInfo from "../Components/Coin/CoinInfo/CoinInfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days,setDays]=useState(7);

  // Searching Details On Loading
  useEffect(() => {
    getData();
  }, [id]);

  // Get Data Function
  async function getData(id) {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices) {
        setIsLoading(false);
      }
    }
  }

  if (isLoading) {
    return (
      <div>
        <Header />
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="grey-wrapper">
        <List coin={coinData} />
      </div>
      <CoinInfo heading={coinData.name} desc={coinData.desc} />
    </div>
  );
};

export default CoinPage;
