import React, { useEffect, useState } from "react";
import "./Grid.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addWatchlist } from "../../../store/slices/WatchlistSlice";
import { deleteWatchlist } from "../../../store/slices/WatchlistSlice";



const Grid = ({ coin, key }) => {
  const watchlistCoins=useSelector(state=>state.watchlist);
  const dispatch=useDispatch();

  // Toggle Watchlist Function
  function handleWatchlistToggle(coin){
    if(watchlistCoins.includes(coin.id)){
      dispatch(deleteWatchlist(coin.id));
    }
    else{
      dispatch(addWatchlist(coin.id));
    }
  }
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        key={key}
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
      >
        <div className="info-flex">
          <img src={coin.image} className="coin-logo" />
          <div className="name-col">
            <p className="coin-symbol">{coin.symbol}</p>
            <p className="coin-name">{coin.name}</p>
          </div>
          <Link to={`${window.location.href}`}>
          <div
            className={`watchlist-icon ${
              coin.price_change_percentage_24h < 0 &&
              watchlistCoins.includes(coin.id) &&
              "watchlist-icon-red"
            } ${
              coin.price_change_percentage_24h > 0 &&
              watchlistCoins.includes(coin.id) &&
              "watchlist-icon-green"
            }`}
            onClick={() => handleWatchlistToggle(coin)}
          >
            <StarsRoundedIcon />
          </div>
          </Link>
        </div>
        

        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip icon-chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}

        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h > 0
                  ? "var(--green)"
                  : "var(--red)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total-volume">
            Total Volume : {coin.total_volume.toLocaleString()}
          </p>
          <p className="total-volume">
            Market Cap : {coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Grid;
