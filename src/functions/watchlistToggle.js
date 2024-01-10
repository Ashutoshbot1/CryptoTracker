import { toast } from "react-toastify";

export const watchlistToggle = (coin) => {
  let prevData = localStorage.getItem("watchlist");
  let id = coin.id;

  if (coin.watch) {
    let prevWatchCoins = JSON.parse(prevData);
    let newWatchCoins = prevWatchCoins.filter((coin) => coin.id !== id);
    localStorage.setItem("watchlist", JSON.stringify(newWatchCoins));
    toast.success(`${coin.name} removed from watchlist`)
  } else {
    if (prevData) {
      let updatedCoin = { ...coin, watch: true };
      let prevWatchCoins = JSON.parse(prevData);
      prevWatchCoins = prevWatchCoins.filter((coin) => coin.id != id);
      let newWatchCoins = [...prevWatchCoins, updatedCoin];
      localStorage.setItem("watchlist", JSON.stringify(newWatchCoins));
    } else {
      let updatedCoin = { ...coin, watch: true };
      let watchlistCoins = [updatedCoin];

      localStorage.setItem("watchlist", JSON.stringify(watchlistCoins));
    }
    toast.success(`${coin.name} added to watchlist`);
  }
};
