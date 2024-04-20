import React from "react";
import { useState } from "react";
import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";
// useParams hook to get the id from the url
import { useParams } from "react-router-dom";

function InnerWhiskey() {
  const params = useParams();
  const [chartData, setChartData] = useState({
    // ...chart data
  });
  return (
    <div>
      <Navbar />
      <h1>Inner Whiskey Page</h1>
      <p>Welcome to the Inner Whiskey {params.id} page !</p>
      <div style={{ textAlign: "left" }}></div>
      <p>Whiskey ID: {params.id}</p>
      <div className="App"></div>
    </div>
  );
}

export default InnerWhiskey;
