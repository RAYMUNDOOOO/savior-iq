import React, { useState, useEffect } from "react";
import "chart.js/auto";
import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";
import { useParams } from "react-router-dom";
import { RadarChart } from "../components/RadarChart";
import { Radar } from "react-chartjs-2";
// import data from "../chemicals/0.jsx";

const data = {
  labels: [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running",
  ],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};

function InnerWhiskey() {
  const params = useParams();
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // Dynamically import the jsx file based on the params.id
  //       const module = await import(`../src/chemical/${params.id}.jsx`);
  //       setData(module.default);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  //   return () => {
  //     // Cleanup logic if needed
  //   };
  // }, [params.id]);
  // const history = useHistory();

  const handlePointClick = (event, elements) => {
    if (elements.length > 0) {
      const clickedDatasetIndex = elements[0].datasetIndex;
      const clickedElementIndex = elements[0].index;
      // Determine which point was clicked based on dataset and index
      // Here, you can implement logic to navigate to different pages based on the clicked point
      console.log("Clicked dataset index:", clickedDatasetIndex);
      console.log("Clicked element index:", clickedElementIndex);
      // history.push(`/details/${clickedElementIndex}`);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Inner Whiskey Page</h1>
      <p>Welcome to the Inner Whiskey {params.id} page!</p>
      <div id="radar-chart" style={{ height: "40vh", width: "80vw" }}>
        {data && (
          <RadarChart
            data={data}
            options={{
              onClick: handlePointClick,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default InnerWhiskey;
