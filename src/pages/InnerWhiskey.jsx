import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";
import { useParams } from "react-router-dom";
import { RadarChart } from "../components/RadarChart";
import { Radar } from "react-chartjs-2";
// import chem from "../chemicals";

function InnerWhiskey() {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Dynamically import the file based on the params.id
        const module = await import(`../src/chemical/${params.id}.jsx`);
        setData(module.default);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup logic if needed
    };
  }, [params.id]);

  return (
    <div>
      <Navbar />
      <h1>Inner Whiskey Page</h1>
      <p>Welcome to the Inner Whiskey {params.id} page!</p>
      {/* {data && <RadarChart data={data} />}
      {data && (
        <Radar
          data={{
            labels: data.labels,
            datasets: data.datasets,
          }}
          key={params.id} // Ensure unique key for each chart
        />
      )} */}
    </div>
  );
}

export default InnerWhiskey;
