import React, { useEffect, useState } from "react";
import Tabs from "../Components/Dashboard/Tabs/Tabs";
import Header from "../Components/Common/Header/Header";
import Search from "../Components/Dashboard/Search/Search";
import Pagination from "../Components/Dashboard/Pagination/Pagination";
import Loader from "../Components/Common/Loader/Loader";
import BackToTop from "../Components/Common/BackToTop/BackToTop";
import { get100Coins } from "../functions/get100Coins";
import ApiError from "../Components/Common/ApiError/ApiError";
import NotFound from "../Components/Common/NotFound/NotFound";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [apiError,setApiError]=useState(true);

  // Getting Coins on Page Load
  useEffect(() => {
    getData();
  }, []);

  // get data function
  async function getData() {
    const myCoins = await get100Coins(setApiError,setIsLoading);
    if (myCoins) {
      setCoins(myCoins);
      setPaginatedCoins(myCoins.slice(0, 10));
      setIsLoading(false);
    }
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



  const handlePageChange = (event, value)=>{
    setPage(value);
    const initialValue = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialValue, initialValue + 10));
    // console.log(event,value,initialValue);
  }


  // Handling Page Loading
  if (isLoading) {
    return (
      <div>
        <Header />
        <Loader />
      </div>
    );
  }

  if(apiError){
    return(
      <div>
        <Header/>
        <ApiError/>
      </div>
    )
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

      {
        search && !filteredCoins.length && <NotFound setSearch={setSearch}/>
      }

      <BackToTop />
    </div>
  );
};

export default DashboardPage;
