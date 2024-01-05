import React from "react";
import "./List.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/conterNumbers";

const List = ({ coin }) => {
  return (
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
        <td>
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="price-chip">
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
    </tr>
  );
};

export default List;
