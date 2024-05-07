import React, { useState, useEffect } from "react";
import "chart.js/auto";
import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";
import { useParams } from "react-router-dom";
import { RadarChart } from "../components/RadarChart";
import { Radar } from "react-chartjs-2";
import { getData } from "../tables/flavour";
import { getImageURL } from "../utils/image-util";

function Flavour() {
  const params = useParams();
  const [flavorData, setFlavorData] = useState(null);

  // Fetch data asynchronously when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        console.log("Data:", data);
        // Find the object in the data array that matches the labels value in params
        const flavor = data.find((flavor) => flavor.labels === params.type);
        console.log("Flavour:", flavor);
        setFlavorData(flavor);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [params.type]);

  if (!flavorData) {
    return <div>Loading...</div>;
  }
  console.log("Flavour data:", flavorData.description);

  return (
    <div>
      <Navbar />
      <h1>Flavour Page</h1>
      <p>Welcome to the Flavour: {params.type} page!</p>
      <img src={getImageURL(params.type)} alt={params.type} />
      <p>Description: {flavorData.description}</p>
    </div>
  );
}

export default Flavour;
