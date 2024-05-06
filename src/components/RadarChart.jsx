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
// import { myChart } from "chart.js";

import { Interaction } from "chart.js";
import { getRelativePosition } from "chart.js/helpers";

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
Interaction.modes.myCustomMode = function (
  chart,
  e,
  options,
  useFinalPosition
) {
  const position = getRelativePosition(e, chart);
  const items = [];

  Interaction.evaluateInteractionItems(
    chart,
    "x",
    position,
    (element, datasetIndex, index) => {
      if (
        element.inXRange(position.x, useFinalPosition) &&
        myCustomLogic(element)
      ) {
        items.push({ element, datasetIndex, index });
      }
    }
  );
  console.log("items", items);
  return items;
};

export const RadarChart = ({ data }) => {
  // const options = {};
  //https://stackoverflow.com/questions/29973533/chart-js-turn-labels-into-links
  const options = {
    onClick: (evt, activeEls, chart) => {
      const { x, y } = evt;
      let index = -1;

      for (let i = 0; i < chart.scales.r._pointLabelItems.length; i++) {
        const { bottom, top, left, right } = chart.scales.r._pointLabelItems[i];

        if (x >= left && x <= right && y >= top && y <= bottom) {
          index = i;
          break;
        }
      }

      if (index === -1) {
        return;
      }

      const clickedLabel = chart.scales.r._pointLabels[index];
      console.log("Clicked label:", clickedLabel);
      window.location = `/flavour/${clickedLabel}`;
    },
  };

  const [chartInstance, setChartInstance] = useState(null);
  // this.radarRef = {};
  useEffect(() => {
    // Destroy the previous chart instance before rendering a new one
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Create a new chart instance
    const newChartInstance = new Chart(document.getElementById("radar-chart"), {
      type: "radar",
      data: data,
      options: options,
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

  return (
    <Radar
      // ref={(radarRef) => (this.radarRef = radarRef)}
      options={options}
      data={data}
      getElementAtEvent={(elements, event) => handlePointClick(event, elements)}
    />
  );
};
