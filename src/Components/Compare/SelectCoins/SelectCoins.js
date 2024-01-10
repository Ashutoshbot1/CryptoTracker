import React, { useEffect, useState } from "react";
import { get100Coins } from "../../../functions/get100Coins";
import { MenuItem, Select } from "@mui/material";
import './SelectCoins.css';

const SelectCoins = ({crypto1,crypto2,handleCoinChange,setIsloading,setApiError}) => {
  const [allCoins, setAllCoins] = useState([]);

  // Styles obj
  const styles = {
    height: "2.5rem",
    color: "var(--white) !important",
    "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
      color: "var(--white)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  // Getting Coin Data on Load
  useEffect(() => {
    getData();
  }, []);

  // getData Function
  async function getData() {
    const myCoins = await get100Coins();
    setAllCoins(myCoins);
  }

  return (
    <div className="coins-flex">
        <p>Crypto 1</p>
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={(event)=>handleCoinChange(event,true)}
      >
        {allCoins.filter((item)=>item.id!=crypto2).map((coin,i) => (
          <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>
      <p>Crypto 2</p>
      <Select
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(event)=>handleCoinChange(event,false)}
      >
        {allCoins.filter((item)=>item.id!=crypto1).map((coin) => (
          <MenuItem value={coin.id}>{coin.name}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectCoins;
