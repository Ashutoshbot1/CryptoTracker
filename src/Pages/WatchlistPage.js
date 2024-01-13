import React, { useEffect, useState } from "react";
import Header from "../Components/Common/Header/Header";
import Search from "../Components/Dashboard/Search/Search";
import Tabs from "../Components/Dashboard/Tabs/Tabs";
import { get100Coins } from "../functions/get100Coins";
import { useSelector } from "react-redux";
import Loader from "../Components/Common/Loader/Loader";
import ApiError from "../Components/Common/ApiError/ApiError";

const WatchlistPage = () => {
  const [search, setSearch] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const watchlistCoins = useSelector((state) => state.watchlist);
  // console.log(watchlistCoins);

  // Onloading
  useEffect(() => {
    getData();
  }, [watchlistCoins]);

  // getData Function
  async function getData() {
    setIsLoading(true);
    const allCoins = await get100Coins(setApiError, setIsLoading);
    setCoins(allCoins.filter((coin) => watchlistCoins.includes(coin.id)));
    setIsLoading(false);
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

  if (isLoading) {
    return (
      <div>
        <Header />
        <Loader />
      </div>
    );
  }

  if (apiError) {
    return (
      <div>
        <Header />
        <ApiError />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <Tabs coins={filteredCoins} />
    </div>
  );
};

export default WatchlistPage;
