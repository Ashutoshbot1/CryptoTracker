import React, { useEffect, useState } from 'react'
import Tabs from '../Components/Dashboard/Tabs/Tabs'
import Header from '../Components/Common/Header/Header'
import axios from 'axios';

const DashboardPage = () => {
  const [coins,setCoins]=useState([]);

  // Getting Coins on Page Load
  useEffect(()=>{
    const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

    axios.get(url)
    .then((response)=>{
      console.log("Coins From Dashboard",response);
      setCoins(response.data);
    })
    .catch(err=>console.log("Fetching Coin error",err))

  },[]) 

  return (
    <div>
      <Header/>
      <Tabs coins={coins}/>
    </div>
  )
}

export default DashboardPage
