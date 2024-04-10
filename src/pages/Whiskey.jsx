import React from "react";
import Navbar from "../components/NavBar";
import SideFilter from "../components/SideFilter";
import Toggle from "../components/Toggle";

function Whiskey() {
  return (
    <div>
      <Navbar />
      <h1>Whiskey Page</h1>
      <p>Welcome to the Whiskey page!</p>
      <div style={{ textAlign: "left" }}>
        <SideFilter />
        <Toggle/>
      </div>
    </div>
  );
}

export default Whiskey;
