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
import { Interaction } from "chart.js";
import { getRelativePosition } from "chart.js/helpers";
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
  return items;
};

export const RadarChart = ({ data }) => {
  const options = {
    onClick: (e) => {
      // Log the event object to inspect its properties
      console.log("Click event:", e);

      // Get the clicked elements using the custom interaction mode
      const clickedElements = chartInstance.getElementsAtEventForMode(
        e,
        "myCustomMode",
        { intersect: true }
      );

      // Log the clicked elements to inspect
      console.log("Clicked elements:", clickedElements);

      if (clickedElements.length > 0) {
        // Extract dataset index and index of the clicked point
        const clickedDatasetIndex = clickedElements[0]?.datasetIndex;
        const clickedIndex = clickedElements[0]?.index;

        console.log("Clicked dataset index:", clickedDatasetIndex);
        console.log("Clicked index:", clickedIndex);

        // Retrieve clicked data from the data object
        const clickedData =
          data.datasets[clickedDatasetIndex]?.data[clickedIndex];
        console.log("Clicked data:", clickedData);

        // Navigate to a different page based on the clicked data
        // Replace this with your actual navigation logic
        // history.push(`/details/${clickedData}`);
      } else {
        console.log("No data clicked.");
      }
    },
  };

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
  const handlePointClick = (event, elements) => {
    console.log("Click event:", event);
    console.log("Clicked elements:", elements);

    if (elements.length > 0) {
      const clickedDatasetIndex = elements[0].datasetIndex;
      const clickedElementIndex = elements[0].index;
      console.log("Clicked dataset index:", clickedDatasetIndex);
      console.log("Clicked element index:", clickedElementIndex);
    }
  };

  return (
    <Radar
      options={options}
      data={data}
      getElementAtEvent={(elements, event) => handlePointClick(event, elements)}
    />
  );
};
