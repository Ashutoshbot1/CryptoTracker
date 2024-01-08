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
import { settingChartData } from "../functions/settingChartData";
import SelectDays from "../Components/Coin/SelectDays/SelectDays";
import GraphToggle from "../Components/Coin/GraphToggle/GraphToggle";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [graphType, setGraphType] = useState("prices");

  // Searching Details On Loading
  useEffect(() => {
    // getData();
  }, [id]);

  // Get Data Function
  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, graphType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  // Handle Days Change Function
  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, graphType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  // Handle Graph Toggle Function
  const handleGraphToggle = async (event, newGraphType) => {
    setIsLoading(true);
    setGraphType(newGraphType);
    const prices = await getCoinPrices(id, days, newGraphType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

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
      <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
        <List coin={coinData} />
      </div>
      <div className="grey-wrapper">
        <SelectDays days={days} handleDaysChange={handleDaysChange} />
        <GraphToggle
          handleGraphToggle={handleGraphToggle}
          graphType={graphType}
        />
        <LineChart chartData={chartData} priceType={graphType} />
      </div>
      <CoinInfo heading={coinData.name} desc={coinData.desc} />
    </div>
  );
};

export default CoinPage;
