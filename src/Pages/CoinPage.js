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
import LineChart from "../Components/Coin/LineChart/LineChart";
import { convertDate } from "../functions/convertDate";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState({});

  // Searching Details On Loading
  useEffect(() => {
    // getData();
  }, [id]);

  // Get Data Function
  async function getData() {
    const data = await getCoinData(id);
    // console.log(data);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length>0) {
        setChartData({
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              data: prices.map((price) => price[1]),
              borderColor: "#3a80e9",
              borderWidth:2,
              fill:true,
              tension:.25,
              backgroundColor: "rgba(58,128,233,.1)",
              pointRadius:0,
            },
          ],
        });
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
      <div className="grey-wrapper">
        <LineChart chartData={chartData}/>
      </div>
      <CoinInfo heading={coinData.name} desc={coinData.desc} />
    </div>
  );
};

export default CoinPage;
