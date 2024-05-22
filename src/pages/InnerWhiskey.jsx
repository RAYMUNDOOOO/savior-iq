import React, { useState, useEffect } from "react";
import "chart.js/auto";
import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";
import { useParams } from "react-router-dom";
import { RadarChart } from "../components/RadarChart";
import { Radar } from "react-chartjs-2";
import { getData } from "../tables/whiskey";

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

  const [data, setData] = useState(getData());
  // const data = getData();

  //fetch data asynchronously when the component mounts or when the 'params.id' value changes
  //re-run whenever the 'params.id' value changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await getData();
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  if (data[params.id] === undefined) {
  }

  console.log(getData(params.id));
  console.log(params.id);

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
      <div
        id="radar-chart"
        inputMode="myCustomMode"
        style={{ height: "40vh", width: "80vw" }}
      >
        {data && (
          <RadarChart
            data={data[params.id] != undefined ? data[params.id] : data[0]}
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
