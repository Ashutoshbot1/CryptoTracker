import React from "react";
import "./List.css";
// import "../Grid/Grid.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import { Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/conterNumbers";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addWatchlist } from "../../../store/slices/WatchlistSlice";
import { deleteWatchlist } from "../../../store/slices/WatchlistSlice";
import { toast } from "react-toastify";

const List = ({ coin }) => {
  const watchlistCoins = useSelector((state) => state.watchlist);
  const dispatch = useDispatch();

  // Toggle Watchlist Function
  function handleWatchlistToggle(coin) {
    if (watchlistCoins.includes(coin.id)) {
      dispatch(deleteWatchlist(coin.id));
      toast.success(`${coin.name} Removed From Watchlist`);
    } else {
      dispatch(addWatchlist(coin.id));
      toast.success(`${coin.name} Added To Watchlist`);
    }
  }

  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="list-row">
        <Tooltip title="Coin Logo">
          <td className="td-image">
            <img src={coin.image} className="coin-logo" />
          </td>
        </Tooltip>
        <Tooltip title="Coin Info" placement="bottom-start">
          <td className="td-name-col">
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>

        <Tooltip title="Price Change In 24hr" placement="bottom">
          <td className="chip-wrapper">
            {coin.price_change_percentage_24h > 0 ? (
              <td className="chip-flex">
                <div className="price-chip td-price-chip">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="icon-chip td-graph-icon">
                  <TrendingUpRoundedIcon />
                </div>
              </td>
            ) : (
              <td className="chip-flex">
                <div className="price-chip chip-red td-price-chip">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>
                <div className="icon-chip icon-chip-red td-graph-icon">
                  <TrendingDownRoundedIcon />
                </div>
              </td>
            )}
          </td>
        </Tooltip>

        <Tooltip title="Current Price">
          <td className="td-coin-price">
            <h3
              className="coin-price td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h > 0
                    ? "var(--green)"
                    : "var(--red)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>
        <Tooltip title="Total Volume" placement="bottom-end">
          <td className="td-total-volume">
            <p className="total-volume td-right-align">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="desktop-td-mkt">
            <p className="total-volume td-right-align">
              {coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="mobile-td-mkt">
            <p className="total-volume td-right-align">
              {convertNumbers(coin.market_cap)}
            </p>
          </td>
        </Tooltip>
        <Tooltip title="Add to watchlist" placement="bottom-end">
          <td>
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
          </td>
        </Tooltip>
      </tr>
    </Link>
  );
};

export default List;
