import React, { useEffect, useState } from "react";
import Loader from "../Components/Common/Loader/Loader";
import Header from "../Components/Common/Header/Header";
import SelectCoins from "../Components/Compare/SelectCoins/SelectCoins";
import SelectDays from "../Components/Coin/SelectDays/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { coinObject } from "../functions/coinObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import { List } from "@mui/material";
import CoinInfo from "../Components/Coin/CoinInfo/CoinInfo";
import LineChart from "../Components/Coin/LineChart/LineChart";
import { settingChartData } from "../functions/settingChartData";
import GraphToggle from "../Components/Coin/GraphToggle/GraphToggle";
import ApiError from "../Components/Common/ApiError/ApiError";

const ComparePage = () => {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState({});
  const [crypto2Data, setCrypto2Data] = useState({});
  const [days, setDays] = useState(30);
  const [isLoading, setIsLoading] = useState(true);
  const [graphType, setGraphType] = useState("prices");
  const [chartData, setChartData] = useState({});
  const [apiError,setApiError]=useState(false);

  // Onloading Getting Default Setted Coin Data
  useEffect(() => {
    getData();
  }, []);

  //
  async function getData() {
    setIsLoading(true);
    const data1 = await getCoinData(crypto1,setApiError,setIsLoading);
    // console.log("data1 received", data1); //clg
    if (data1) {
      const data2 = await getCoinData(crypto2,setApiError,setIsLoading);
      // console.log("data2 received", data2); //clg
      coinObject(setCrypto1Data, data1);
      // console.log("Crypto1Data", crypto1Data); //clg
      if (data2) {
        coinObject(setCrypto2Data, data2);
        // console.log("Crypto2Data", crypto2Data); //clg
        const prices1 = await getCoinPrices(crypto1, days, graphType,setApiError,setIsLoading);
        // console.log("price1 received", prices1); //clg
        const prices2 = await getCoinPrices(crypto2, days, graphType,setApiError,setIsLoading);
        // console.log("price2 received", prices2); //clg
        settingChartData(setChartData, prices1, prices2,setIsLoading);
        setIsLoading(false);
      }
    }
    // setIsLoading(false);
  }

  // Handle Days Change Function
  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1,event.target.value,graphType,setApiError,setIsLoading);
    console.log("prices1 of daysChange",prices1);
    const prices2 = await getCoinPrices(crypto2,event.target.value,graphType,setApiError,setIsLoading);
    console.log("prices2 of daysChange",prices2);
    settingChartData(setChartData, prices1, prices2,setIsLoading);
    setIsLoading(false);
  }

  // Handle Coin change Function
  const handleCoinChange = async (event, isCrpyto2) => {
    setIsLoading(true);
    if (!isCrpyto2) {
      setCrypto1(event.target.value);
      const data = await getCoinData(event.target.value,setApiError,setIsLoading);
      coinObject(setCrypto1Data, data);
      const prices1 = await getCoinPrices(crypto1, days, graphType,setApiError,setIsLoading);
      const prices2 = await getCoinPrices(crypto2, days, graphType,setApiError,setIsLoading);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2,setIsLoading);
        setIsLoading(false);
      }
    } else {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value,setApiError,setIsLoading);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, graphType,setApiError,setIsLoading);
      const prices2 = await getCoinPrices(crypto2, days, graphType,setApiError,setIsLoading);
      if (prices1.length > 0 && prices2.length > 0) {
        settingChartData(setChartData, prices1, prices2,setIsLoading);
        setIsLoading(false);
      }
    }
  };

  // Handle Graph Toggle Function
  const handleGraphToggle = async (event, newGraphType) => {
    setIsLoading(true);
    setGraphType(newGraphType);
    const prices1 = await getCoinPrices(crypto1, days, newGraphType,setApiError,setIsLoading);
    const prices2 = await getCoinPrices(crypto2, days, newGraphType,setApiError,setIsLoading);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  // Loading
  if (isLoading) {
    return (
      <>
        <Header />
        <Loader />
      </>
    );
  }

  if(apiError){
    return(
      <div>
        <Header/>
        <ApiError getData={getData}/>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <div className="coins-days-flex">
      {/* <div> */}
        <SelectCoins
          crypto1={crypto1}
          crypto2={crypto2}
          handleCoinChange={handleCoinChange}
          setApiError={setApiError}
          setIsloading={setIsLoading}
        />
        <SelectDays
          days={days}
          handleDaysChange={handleDaysChange}
          noPTag={true}
        />
      </div>
      <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
        <List coin={crypto1Data} />
      </div>
      <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
        <List coin={crypto2Data} />
      </div>
      <div className="grey-wrapper">
        <GraphToggle
          handleGraphToggle={handleGraphToggle}
          graphType={graphType}
        />
        <LineChart
          chartData={chartData}
          priceType={graphType}
          multiAxis={true}
        />
      </div>
      <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
      <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
    </div>
  );
};

export default ComparePage;
