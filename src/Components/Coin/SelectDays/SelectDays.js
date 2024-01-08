import React, { useState } from "react";
import './SelectDays.css';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectDays({days,handleDaysChange,noPTag}) {
  

  return (
    <div className="select-days">
        {!noPTag && <p>Price Change In</p>}
      <Select
        sx={{
          height: "2.5rem",
        //   width: "8.5rem",
        //   margin: "1rem",
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
        }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
