import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";
import { convertNumbers } from "../../../functions/conterNumbers";

const LineChart = ({ chartData, priceType, multiAxis }) => {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        type:"linear",
        display:true,
        position:"left",
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if(priceType==="prices")return "$" + value.toLocaleString();
            else return "$"+convertNumbers(value);
          },
        },
      },
      crypto2: {
        type:"linear",
        display:true,
        position:"right",
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, ticks) {
            if(priceType==="prices")return "$" + value.toLocaleString();
            else return "$"+convertNumbers(value);
          },
        },
      },
    },
  };
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
