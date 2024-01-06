import React, { useEffect, useState } from "react";
import Tabs from "../Components/Dashboard/Tabs/Tabs";
import Header from "../Components/Common/Header/Header";
import axios from "axios";
import Search from "../Components/Dashboard/Search/Search";
import Pagination from "../Components/Dashboard/Pagination/Pagination";
import Loader from "../Components/Common/Loader/Loader";
import BackToTop from "../Components/Common/BackToTop/BackToTop";
import { Tooltip } from "@mui/material";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Getting Coins on Page Load
  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

    // axios
    //   .get(url)
    //   .then((response) => {
    //     console.log("Coins From Dashboard", response);
    //     setCoins(response.data);
    //     setPaginatedCoins(response.data.slice(0, 10));
    //     setIsLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log("Fetching Coin error", err);
    //     setIsLoading(false);
    //   });
  }, []);

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

  // Handle Page Change
  const handlePageChange = (event, value) => {
    setPage(value);
    const initialValue = (page - 1) * 10;
    setPaginatedCoins(coins.slice(initialValue, initialValue + 10));
  };

  // Handling Page Loading
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
      <Search search={search} onSearchChange={onSearchChange} />
      <Tabs coins={search ? filteredCoins : paginatedCoins} />
      {!search && (
        <Pagination
          page={page}
          handlePageChange={(event, value) => handlePageChange(event, value)}
        />
      )}

      <BackToTop />
    </div>
  );
};

export default DashboardPage;
