import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

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
  };
  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
