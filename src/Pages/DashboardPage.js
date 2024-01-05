import React, { useEffect, useState } from "react";
import Tabs from "../Components/Dashboard/Tabs/Tabs";
import Header from "../Components/Common/Header/Header";
import axios from "axios";
import Search from "../Components/Dashboard/Search/Search";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  // Getting Coins on Page Load
  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

    axios
      .get(url)
      .then((response) => {
        console.log("Coins From Dashboard", response);
        setCoins(response.data);
      })
      .catch((err) => console.log("Fetching Coin error", err));
  }, []);

  // onSearchChange Function
  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  //Fitering Coins
  var filteredCoins = coins.map(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <Tabs coins={filteredCoins} />
    </div>
  );
};

export default DashboardPage;
