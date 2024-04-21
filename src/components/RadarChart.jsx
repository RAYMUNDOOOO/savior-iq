import "chart.js/auto";
import { Radar } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  registerables,
} from "chart.js";
// import { data as methods } from "../chemicals/0.json";

// Chart.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   registerables
// );

// useEffect(() => {
//   var myChart = new Chart(table, config);

//   // when component unmounts
//   return () => {
//     myChart.destroy();
//   };
// }, []);

export const RadarChart = ({ data }) => {
  const options = {};
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    // Destroy the previous chart instance before rendering a new one
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create a new chart instance
    const newChartInstance = new Chart(document.getElementById("radar-chart"), {
      type: "radar",
      data: data,
    });

    // Set the new chart instance
    setChartInstance(newChartInstance);

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);
  if (
    !data ||
    !data.labels ||
    !data.datasets ||
    data.labels.length === 0 ||
    data.datasets.length === 0
  ) {
    return <div>No data available</div>;
  }
  return <Radar options={options} data={data} />;
};
