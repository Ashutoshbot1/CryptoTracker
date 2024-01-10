import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header/Header";
import Search from "../Components/Dashboard/Search/Search";
import Tabs from "../Components/Dashboard/Tabs/Tabs";

const WatchlistPage = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);

  // Onloading
  useEffect(() => {
    getData();
  }, []);

  // getData Function
  async function getData() {
    console.log("executed");
    let storageData = localStorage.getItem("watchlist");
    let coinData = JSON.parse(storageData);
    setCoins(coinData);
  }

  // onSearchChange Function
  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  //Fitering Coins
  var filteredCoins = coins.filter(
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

export default WatchlistPage;
