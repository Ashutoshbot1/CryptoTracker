import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DashboardPage from "./Pages/DashboardPage";
import CoinPage from "./Pages/CoinPage";
import ComparePage from "./Pages/ComparePage";
import WatchlistPage from "./Pages/WatchlistPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addWatchlist, deleteWatchlist } from "./store/slices/WatchlistSlice";
import { useEffect } from "react";
import CursorFollow from "./Components/Common/CursorFollow/CursorFollow";
import { motion } from "framer-motion";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let storageData = localStorage.getItem("watchlist");
    let watchlist = JSON.parse(storageData);
    if (watchlist) {
      watchlist.map((coin) => dispatch(addWatchlist(coin)));
    }
  }, []);

  return (
    <div className="App">
        <CursorFollow />
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// ctrl+space for auto import
