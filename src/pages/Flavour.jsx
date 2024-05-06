import React, { useState, useEffect } from "react";
import "chart.js/auto";
import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";
import { useParams } from "react-router-dom";
import { RadarChart } from "../components/RadarChart";
import { Radar } from "react-chartjs-2";
import { getData } from "../tables/whiskey";

function Flavour() {
  const params = useParams();

  const [data, setData] = useState(getData());
  // const data = getData();

  //fetch data asynchronously when the component mounts or when the 'params.type' value changes
  //re-run whenever the 'params.type' value changes
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
  }, [params.type]);

  if (data[params.type] === undefined) {
  }

  console.log(getData(params.type));
  console.log(params.type);

  return (
    <div>
      <Navbar />
      <h1>Flavour Page</h1>
      <p>Welcome to the Flavour: {params.type} page!</p>
    </div>
  );
}

export default Flavour;
